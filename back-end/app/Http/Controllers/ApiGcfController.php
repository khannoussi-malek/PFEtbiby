<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;
		use App\Http\Controllers\Privilege as Privilege;
		class ApiGcfController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "cms_users";        
				$this->permalink   = "gcf";    
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
				$users = DB::table('cms_users')->select('*')->where('id',$postdata['id'])->first();
				$data = (array) $users;
				$data['id_cms_privileges']=Privilege::PrivilegeName($data['id_cms_privileges']);

				if($data['id_cms_privileges']=="patient"){
					$users = DB::table('patient')->select('*')->where('cms_users_id',$postdata['id'])->first();
					$data= array_merge ((array) $users,$data);
					if(!empty($data['parent'])){
						$users = DB::table('cms_users')->select(DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS parent'))->where('id',$data['parent'])->first();
						$data['parent']=$users->parent;
					}

				}else if($data['id_cms_privileges']=="medecin"){
					$users = DB::table('medecin')->select('*')->where('cms_users_id',$postdata['id'])->first();
					$data= array_merge ((array) $users,$data);
				}
				$secretaire = DB::table('secretaire')->where('secretaire.medecin_id',$postdata['id'])->join('cms_users', 'cms_users.id', '=', 'secretaire.cms_users_id')->select(DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS nomprenom'))->first();
				if(!empty($secretaire)){
					$data['secretaire']=$secretaire->nomprenom;
				}
				$result = $data;

		    }

		}