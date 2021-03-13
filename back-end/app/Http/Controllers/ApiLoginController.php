<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use Hash;
		use CRUDBooster;
		use App\Http\Controllers\Privilege as Privilege;

		class ApiLoginController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "cms_users";        
				$this->permalink   = "login";    
				$this->method_type = "post";    
		    }
		

		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process

		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query
				// dd("hi babe");
		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process
				$users = DB::table('cms_users')->select('*')->where('email',$postdata['user'] )->orWhere('telephone',$postdata['user'])
				->orWhere('cin',$postdata['user'])
				->get();
				$result=null;
				foreach ($users as &$user) {
					if(\Hash::check($postdata['password'], $user->password)){
						$user->fonctionnalite=Privilege::PrivilegeName($user->id);
						$result = $user;
						return $result;
					}
				}					

				// dd($password);

		    }

		}