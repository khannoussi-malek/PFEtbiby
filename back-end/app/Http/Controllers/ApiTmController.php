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
						if(!empty($postdata['search'])){
							$result = DB::table('cms_users')					
						->where('id_cms_privileges',Privilege::PrivilegeID("medecin"))
						->join('medecin', 'cms_users.id', '=', 'medecin.cms_users_id')
						->where('medecin.sous_domaine_id',$postdata['sousDomaineSelected'])
						->where('medecin.domaine_id',$postdata['DomaineSelected'])
						->orwhere('cms_users.prenom', 'LIKE', '%'.$postdata['search'].'%')
						->orwhere('cms_users.telephone', 'LIKE', '%'.$postdata['search'].'%')
						->orwhere('cms_users.email', 'LIKE', '%'.$postdata['search'].'%')
						->orwhere('cms_users.cin', 'LIKE', '%'.$postdata['search'].'%')
						->leftJoin('domaine', 'medecin.domaine_id', '=', 'domaine.id')
						->select('cms_users.id',DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS nomprenom'),'domaine.nom as domaineName','medecin.adresse_physique','cms_users.sexes','cms_users.telephone','cms_users.photo','cms_users.email','cms_users.date_naissance')
						->paginate(10);
						}else{
							$result = DB::table('cms_users')					
						->where('id_cms_privileges',Privilege::PrivilegeID("medecin"))
						->join('medecin', 'cms_users.id', '=', 'medecin.cms_users_id')
						->where('medecin.sous_domaine_id',$postdata['sousDomaineSelected'])
						->where('medecin.domaine_id',$postdata['DomaineSelected'])
						->leftJoin('domaine', 'medecin.domaine_id', '=', 'domaine.id')
						->select('cms_users.id',DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS nomprenom'),'domaine.nom as domaineName','medecin.adresse_physique','cms_users.sexes','cms_users.telephone','cms_users.photo','cms_users.email','cms_users.date_naissance')
						->paginate(10);
						}

						
					}else{
						if(!empty($postdata['search'])){
							$result = DB::table('cms_users')					
							->where('id_cms_privileges',Privilege::PrivilegeID("medecin"))
							->join('medecin', 'cms_users.id', '=', 'medecin.cms_users_id')
							->where('medecin.domaine_id',$postdata['DomaineSelected'])
							->leftJoin('domaine', 'medecin.domaine_id', '=', 'domaine.id')
							->orwhere('cms_users.prenom', 'LIKE', '%'.$postdata['search'].'%')
							->orwhere('cms_users.telephone', 'LIKE', '%'.$postdata['search'].'%')
							->orwhere('cms_users.email', 'LIKE', '%'.$postdata['search'].'%')
							->orwhere('cms_users.cin', 'LIKE', '%'.$postdata['search'].'%')
							->select('cms_users.id',DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS nomprenom'),'domaine.nom as domaineName','medecin.adresse_physique','cms_users.sexes','cms_users.telephone','cms_users.photo','cms_users.email','cms_users.date_naissance')
							->paginate(10);
						}else{
							$result = DB::table('cms_users')					
							->where('id_cms_privileges',Privilege::PrivilegeID("medecin"))
							->join('medecin', 'cms_users.id', '=', 'medecin.cms_users_id')
							->where('medecin.domaine_id',$postdata['DomaineSelected'])
							->leftJoin('domaine', 'medecin.domaine_id', '=', 'domaine.id')
							->select('cms_users.id','cms_users.nom','cms_users.prenom','domaine.nom as domaineName','medecin.adresse_physique','cms_users.sexes','cms_users.telephone','cms_users.photo','cms_users.email','cms_users.date_naissance')
							->paginate(10);
						}
					}	
				}
				else{
					if(!empty($postdata['search'])){
						$result = DB::table('cms_users')					
						->where('id_cms_privileges',Privilege::PrivilegeID("medecin"))
						->join('medecin', 'cms_users.id', '=', 'medecin.cms_users_id')
						->leftJoin('domaine', 'medecin.domaine_id', '=', 'domaine.id')
						->where('cms_users.nom', 'LIKE', '%'.$postdata['search'].'%')
						->orwhere('cms_users.prenom', 'LIKE', '%'.$postdata['search'].'%')
						->orwhere('cms_users.telephone', 'LIKE', '%'.$postdata['search'].'%')
						->orwhere('cms_users.email', 'LIKE', '%'.$postdata['search'].'%')
						->orwhere('cms_users.cin', 'LIKE', '%'.$postdata['search'].'%')
						->select('cms_users.id',DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS nomprenom'),'domaine.nom as domaineName','medecin.adresse_physique','cms_users.sexes','cms_users.telephone','cms_users.photo','cms_users.email','cms_users.date_naissance')
						->paginate(10);
					}else{
					$result = DB::table('cms_users')					
					->where('id_cms_privileges',Privilege::PrivilegeID("medecin"))
					->join('medecin', 'cms_users.id', '=', 'medecin.cms_users_id')
					->leftJoin('domaine', 'medecin.domaine_id', '=', 'domaine.id')
					->where('cms_users.nom', 'LIKE', '%'.$postdata['search'].'%')
					->orwhere('cms_users.prenom', 'LIKE', '%'.$postdata['search'].'%')
					->orwhere('cms_users.telephone', 'LIKE', '%'.$postdata['search'].'%')
					->orwhere('cms_users.email', 'LIKE', '%'.$postdata['search'].'%')
					->orwhere('cms_users.cin', 'LIKE', '%'.$postdata['search'].'%')
					->select('cms_users.id',DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS nomprenom'),'domaine.nom as domaineName','medecin.adresse_physique','cms_users.sexes','cms_users.telephone','cms_users.photo','cms_users.email','cms_users.date_naissance')
					->paginate(10);}
				}
				
		    }

		}