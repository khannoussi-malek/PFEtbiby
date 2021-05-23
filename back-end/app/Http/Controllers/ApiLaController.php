<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiLaController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "liste_actes";        
				$this->permalink   = "la";    
				$this->method_type = "get";    
		    }
		

		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process

		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query

		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process
				if(!empty($postdata['recherche'])&& $postdata['recherche']!=""){
					$search =$postdata['recherche'];
					$result = DB::table('liste_actes')
					->select('id','code','designation','price')
					->where('designation', 'like', "%$search%")
					->orwhere('code', 'like', "%$search%")
					->paginate(10);
				}else{
					$result = DB::table('liste_actes')->select('id','code','designation','price')
					->paginate(10);

				}
		    }

		}