<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiCpController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "rendez_vous";        
				$this->permalink   = "cp";    
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
				// dd($postdata);
				$result = DB::table('rendez_vous')					
				->where('rendez_vous.patient_id',$postdata['patient_id'])
				->where('etat','en attente')
				->join('cms_users', 'cms_users.id', '=', 'rendez_vous.medecin_id')
				->select('rendez_vous.id',DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS nomprenom'), 'rendez_vous.date_reservation' ,'rendez_vous.medecin_id','cms_users.cin','cms_users.email','cms_users.telephone','cms_users.photo' )->orderBy('rendez_vous.date_reservation','desc')
				->paginate(10);
				
		    }

		}