<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiLrdController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "rendez_vous";        
				$this->permalink   = "lrd";    
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
				$result=DB::table('rendez_vous')
				->where('patient_id',$postdata['patient_id'])
				->where('etat','en attente')
				->join('cms_users', 'cms_users.id', '=', 'rendez_vous.medecin_id')
				->select(DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS nomprenom'), 'rendez_vous.id','rendez_vous.date_reservation as start')
				->get();
		    }

		}