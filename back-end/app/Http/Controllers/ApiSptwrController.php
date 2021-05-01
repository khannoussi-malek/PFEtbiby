<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiSptwrController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "rendez_vous";        
				$this->permalink   = "sptwr";    
				$this->method_type = "post";    
		    }
		

		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process
				if(!empty($postdata['state'])){
					$patient_id= DB::table('rendez_vous')
				->where('rendez_vous.id',$postdata['id'])
				->join('cms_users', 'cms_users.id', '=', 'rendez_vous.patient_id')
				->select(DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS nomprenom'),'cms_users.id')
				->first();

				$ch="Your mother fucker ".$patient_id->nomprenom;
				$config['id_cms_users'] = [$patient_id->id];
				$config['content'] = $ch;
				$config['to'] = "/dashboard/Mes%20rendez%20vous";

				CRUDBooster::sendNotification($config);
				unset($postdata['state']);
				}

		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query

		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process

		    }

		}