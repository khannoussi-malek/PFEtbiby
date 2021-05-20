<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiCdController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "consultation";        
				$this->permalink   = "cd";    
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
				
				$consultation = DB::table('consultation')
				->select('Diagnostic','prix')
				->where('id',$postdata['id'])
				->get();
				$certificat = DB::table('certificat')
				->select('structure')
				->where('consultation_id',$postdata['id'])
				->get();
				$result['data']=['consultation'=>$consultation,'certificat'=>$certificat];
		    }

		}