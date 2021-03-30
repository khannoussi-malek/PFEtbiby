<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiUcpController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "cms_users";        
				$this->permalink   = "ucp";    
				$this->method_type = "post";    
		    }
		

		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process
				$tableupdate = [];

				if(!empty($postdata['nom'])){
					$tableupdate['nom']=$postdata['nom'];
				}
				
				if(!empty($postdata['date_naissance'])){
					$tableupdate['date_naissance']=$postdata['date_naissance'];
					}
				if(!empty($postdata['email'])){
					$tableupdate['email']=$postdata['email'];
					}
				
				if(!empty($postdata['password'])){
					$tableupdate['password']=$postdata['password'];
					}
				if(!empty($postdata['prenom'])){
					$tableupdate['prenom']=$postdata['prenom'];
					}
				if(!empty($postdata['telephone'])){
					$tableupdate['telephone']=$postdata['telephone'];
					}
				if(!empty($postdata['cin'])){
					$tableupdate['cin']=$postdata['cin'];
					}
				$mm=DB::table('cms_users')
				->where('id', $postdata['id'])
				->update($tableupdate);
				dd($mm);
		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query

		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process
				
					// dd($postdata);
				// if(!empty($postdata['code_APCI'])){
				// 	$tableupdate['code_APCI']=$postdata['code_APCI'];
				// }
				// if(!empty($postdata['parent'])){
				// 	$tableupdate['parent']=$postdata['parent'];
				// 	}
				// dd($res);
				
		    }

		}