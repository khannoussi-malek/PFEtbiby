<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiPinfoController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "patient";        
				$this->permalink   = "pinfo";    
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
				$result= DB::table('patient')
				->where('patient.cms_users_id',$postdata['cms_users_id'])
				->join('cms_users', 'cms_users.id', '=', 'patient.cms_users_id')
				->select('cms_users.*', 'patient.*')
				->first();
		    }

		}