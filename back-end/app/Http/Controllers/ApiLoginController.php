<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use Hash;
		use CRUDBooster;

		class ApiLoginController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "cms_users";        
				$this->permalink   = "login";    
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
				$users = DB::table('cms_users')->select('*')->where('email',$postdata['user'] )->orWhere('telephone',$postdata['user'])
				// ->orWhere('cin',$postdata['user'])
				->get();
				foreach ($users as &$user) {
					if(\Hash::check($postdata['password'], $user->password)){
						$result = $user;
						return $result;
					}
				}
				// dd($password);

		    }

		}