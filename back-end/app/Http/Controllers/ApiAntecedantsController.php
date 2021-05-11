<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiAntecedantsController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "antecedants";        
				$this->permalink   = "antecedants";    
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
				$result=DB::table('antecedants')
				->where('patient_id',$postdata['patient_id'])
				->join('cms_users', 'cms_users.id', '=', 'antecedants.medecin_id')
				->select('antecedants.type','antecedants.description',DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS medecin'),'antecedants.medecin_id')
				->orderBy('antecedants.created_at')
				->paginate(10);

		    }

		}