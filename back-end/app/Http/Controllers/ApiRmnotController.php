<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiRmnotController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "cms_notifications";        
				$this->permalink   = "rmnot";    
				$this->method_type = "post";    
		    }
		

		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process
				// dd($postdata);
				DB::table('cms_notifications')->where('id', $postdata['id'])->delete();

		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query

		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process
		    }

		}