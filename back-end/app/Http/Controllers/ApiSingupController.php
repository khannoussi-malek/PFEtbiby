<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;
		use Illuminate\Support\Facades\Hash;
		use App\Http\Controllers\Privilege as Privilege;

		class ApiSingupController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "cms_users";        
				$this->permalink   = "singup";    
				$this->method_type = "post";    
		    }
		

		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process
			
				$postdata['password']=Hash::make($postdata['password']);
				$postdata['status']="Active";
				$postdata['id_cms_privileges']= Privilege::PrivilegeID($postdata['id_cms_privileges']);
				
		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query
		    }

		    public function hook_after($postdata,&$result) {
				if( empty ($postdata['email'])){
					$postdata['email']="empty";
				}
				if( empty ($postdata['cin'])){
					$postdata['cin']="empty";
				}
				if( empty ($postdata['telephone'])){
					$postdata['telephone']="empty";
				}
				$users=DB::table('cms_users')->where('cin', $postdata['cin'])->orWhere('email',  $postdata['email'])->orWhere('telephone',  $postdata['telephone'])->get();
				$result['exists']=false;
				if(count($users)>1){
					$result['exists']=true;

					if( !empty ($users[0]->cin)){
						$result['elementExists']="CIN";
					}
					if( !empty ($users[0]->email)){
						$result['elementExists']="Email";
					}
					if( !empty ($users[0]->telephone)){
						$result['elementExists']="Telephone";
					}
					DB::table('cms_users')->where('id', $result['id'])->delete();
				}
				$postdata['id_cms_privileges']=Privilege::PrivilegeName($postdata['id_cms_privileges']);
				if(!$result['exists']){
					$insetr=['cms_users_id'=> $result['id']];
					if($postdata['id_cms_privileges']=="patient"){
						DB::table('patient')->insert($insetr);
					}else if($postdata['id_cms_privileges']=="medecin"){
						DB::table('medecin')->insert($insetr);
					}

				}
		
		    }

		}