<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiLrdeController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "rendez_vous";        
				$this->permalink   = "lrde";    
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
				->where(
				[
					['rendez_vous.etat', '=', 'en ligne'],
					['rendez_vous.patient_id', '=', $postdata['patient_id']],
					['rendez_vous.medecin_id', '=', $postdata['medecin_id']]
				])
				->orwhere([
					['rendez_vous.etat', '=', 'en attente'],
					['rendez_vous.medecin_id', '=', $postdata['medecin_id']]
				])
				->join('cms_users', 'cms_users.id', '=', 'rendez_vous.patient_id')
				// ->select('rendez_vous.etat','rendez_vous.patient_id','rendez_vous.medecin_id')
				->select(DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS nomprenom'), 'rendez_vous.id','rendez_vous.date_reservation as start', 'rendez_vous.etat')
				->get();
		    }

		}