<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;
		use App\Http\Controllers\Privilege as Privilege;

		class ApiTmController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "cms_users";        
				$this->permalink   = "tm";    
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
				if($postdata['DomaineSelected']!="-1"){
					if($postdata['sousDomaineSelected']!="-1"){
						$result = DB::table('cms_users')					
						->where('id_cms_privileges',Privilege::PrivilegeID("medecin"))
						->join('medecin', 'cms_users.id', '=', 'medecin.cms_users_id')
						->where('medecin.sous_domaine_id',$postdata['sousDomaineSelected'])
						->where('medecin.domaine_id',$postdata['DomaineSelected'])
						->select('cms_users.*')
						->paginate(10);
					}else{
						$result = DB::table('cms_users')					
						->where('id_cms_privileges',Privilege::PrivilegeID("medecin"))
						->join('medecin', 'cms_users.id', '=', 'medecin.cms_users_id')
						->where('medecin.domaine_id',$postdata['DomaineSelected'])
						->select('cms_users.*')
						->paginate(10);
					}	
				}
				else{
					$result = DB::table('cms_users')					
					->where('id_cms_privileges',Privilege::PrivilegeID("medecin"))
					->join('medecin', 'cms_users.id', '=', 'medecin.cms_users_id')
					->select('cms_users.*')
					->paginate(10);
				}
				
		    }

		}