<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiPmController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "relation";        
				$this->permalink   = "pm";    
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
				$result = DB::table('relation')					
					->where('relation.patient_id',$postdata['patient_id'])
					->join('cms_users', 'cms_users.id', '=', 'relation.medecin_id')
					->join('medecin', 'medecin.cms_users_id', '=', 'cms_users.id')
					->leftJoin('domaine', 'medecin.domaine_id', '=', 'domaine.id')
					->select('cms_users.id','cms_users.nom','cms_users.prenom','domaine.nom as domaineName','medecin.adresse_physique','medecin.adresse_physique','medecin.adresse_physique')
					->paginate(10);
		    }

		}