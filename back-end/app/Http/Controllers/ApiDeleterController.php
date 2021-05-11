<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiDeleterController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "rendez_vous";        
				$this->permalink   = "deleter";    
				$this->method_type = "post";    
		    }
		

		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process
				$users = DB::table('rendez_vous')
				->where('id',$postdata['id'])
				->select('medecin_id')
				->first();
				$patient = DB::table('rendez_vous')
				->where('rendez_vous.id',$postdata['id'])
				->join('cms_users', 'cms_users.id', '=', 'rendez_vous.patient_id')
				->select(DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS nomprenom'))
				->first();
				$ch="Votre réservation avec ".$patient->nomprenom." est supprimée";
				$config['id_cms_users'] = [$users->medecin_id];
				$config['content'] = $ch;
				$config['to'] = "/dashboard";
				CRUDBooster::sendNotification($config);		
		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query

		    }

		    public function hook_after($postdata,&$result) {
				

		    }

		}