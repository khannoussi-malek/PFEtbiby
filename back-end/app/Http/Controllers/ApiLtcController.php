<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiLtcController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "certificat_type";        
				$this->permalink   = "ltc";    
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
				if(!empty($postdata['recherche'])){
					$search =$postdata['recherche'];
					$result = DB::table('certificat_type')
					->where('cms_users_id',$postdata['id'])
					->where('type', 'like', "%$search%")
					->select('*')
					->paginate(7);
				}else{
					$result = DB::table('certificat_type')
					->where('cms_users_id',$postdata['id'])
					->select('*')
					->paginate(7);
				}
			

		    }

		}