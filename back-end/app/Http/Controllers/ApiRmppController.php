<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiRmppController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "cms_users";        
				$this->permalink   = "rmpp";    
				$this->method_type = "post";    
		    }
		

		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process
				$users = DB::table('cms_users')->select('photo')->where('id',$postdata['id'])->first();
				// dd(substr($users->photo,8,strlen($users->photo)));
				unlink(storage_path('app\public'.substr($users->photo,8,strlen($users->photo))));
				DB::table('cms_users')->where('id', $postdata['id'])->update(['photo' => null]);
				$postdata=[];
		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query

		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process
				

		    }

		}