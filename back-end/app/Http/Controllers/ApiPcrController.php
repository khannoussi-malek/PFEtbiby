<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiPcrController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "rendez_vous";        
				$this->permalink   = "pcr";    
				$this->method_type = "post";    
		    }
		

		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process
				$patient_id= DB::table('cms_users')->select(DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS nomprenom'))
				->where('id',$postdata['patient_id'])->first();
				$ch=$patient_id->nomprenom." veut une réservation";
				$config['id_cms_users'] = [$postdata['medecin_id']];
				$config['content'] = $ch;
				$config['to'] = "/dashboard";
				CRUDBooster::sendNotification($config);
		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query

		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process

		    }

		}