<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiUpdaterController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "rendez_vous";        
				$this->permalink   = "updater";    
				$this->method_type = "post";    
		    }
		

		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process
				
				$user = DB::table('rendez_vous')
				->where('rendez_vous.id', $postdata['id'])
				->join('cms_users', 'cms_users.id', '=','rendez_vous.patient_id' )
				->select('rendez_vous.*','cms_users.*')
				->first();
				$ch="Votre rendez-vous chez Dr.".$user->nom." ".$user->prenom." est modifié";
				$config['id_cms_users'] = [$user->patient_id];
				$config['content'] = $ch;
				$config['to'] = "/dashboard/Mes%20rendez%20vous";
				CRUDBooster::sendNotification($config);		

		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query

		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process
				DB::table('rendez_vous')
				->where('id', $postdata['id'])
				->update(['date_reservation' =>$postdata['date_reservation'] ]);


		    }

		}