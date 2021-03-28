<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiLrmpController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "relation";        
				$this->permalink   = "lrmp";    
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
				if(empty($postdata['patient_id'])){
					$relation = DB::table('relation')					
					->where('relation.medecin_id',$postdata['medecin_id'])
					->join('cms_users', 'cms_users.id', '=', 'relation.patient_id')
					->select('cms_users.id','cms_users.nom', 'cms_users.prenom')
					->paginate(10);

				}else{
					$search =$postdata['patient_id'];
					$relation = DB::table('relation')
					->join('cms_users', 'cms_users.id', '=', 'relation.patient_id')
					->where('relation.medecin_id',$postdata['medecin_id'])
					->where('cms_users.email', 'like', "%$search%")
					->orwhere('cms_users.cin', 'like', "%$search%")
					->orwhere('cms_users.telephone', 'like', "%$search%")
					->orwhere('cms_users.nom', 'like', "%$search%")
					->orwhere('cms_users.prenom', 'like', "%$search%")
					->select('cms_users.id','cms_users.nom', 'cms_users.prenom')
					->paginate(10);
				}
				$result=$relation;

		    }

		}