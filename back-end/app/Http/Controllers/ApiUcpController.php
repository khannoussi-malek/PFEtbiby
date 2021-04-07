<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;
		use Illuminate\Support\Facades\Hash;

		class ApiUcpController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "cms_users";        
				$this->permalink   = "ucp";    
				$this->method_type = "post";    
		    }
		
             
		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process
				if(!empty($postdata['nom'])){
                    $tableupdate['nom']=$postdata['nom'];
                }

				if(!empty($postdata['prenom'])){
                    $tableupdate['prenom']=$postdata['prenom'];
                    }

				if(!empty($postdata['telephone'])){
					$tableupdate['telephone']=$postdata['telephone'];
					}

                if(!empty($postdata['email'])){
                    $tableupdate['email']=$postdata['email'];
                    }

				if(!empty($postdata['date_naissance'])){
					$tableupdate['date_naissance']=$postdata['date_naissance'];
					}

				if(!empty($postdata['cin'])){
					$tableupdate['cin']=$postdata['cin'];
					}
				if(!empty($postdata['sexes'])){
					$tableupdate['sexes']=$postdata['sexes'];
					}
					

                if(!empty($postdata['password'])){
                    $tableupdate['password']=Hash::make($postdata['password']);
                    }
				
				
				DB::table('cms_users')
				->where('id', $postdata['id'])
				->update($tableupdate);

				if(!empty($postdata['parent'])){
					$user = DB::table('cms_users')->select('id')->where('email',$postdata['user'] )->orWhere('telephone',$postdata['user'])
					->orWhere('cin',$postdata['user'])
					->first();
					dd($user);
				}
				
		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query

		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process
			
			}

		}