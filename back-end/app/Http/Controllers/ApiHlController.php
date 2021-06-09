<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiHlController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "lettre";        
				$this->permalink   = "hl";    
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
				if(empty($postdata['medecin_id'])){
					$result = DB::table('lettre')
					->where('lettre.patient_id',$postdata['patient_id'])
					->orwhere('lettre.medecin_destiantaire_id',$postdata['medecin_id'])
					
				->join('cms_users', 'cms_users.id', '=', 'lettre.medecin_id')
					->select('lettre.id','lettre.description','lettre.created_at','lettre.medecin_id',DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS medecin'))->orderBy('lettre.created_at','desc')
					->paginate(10);
							}else{
								$result = DB::table('lettre')
								->where('patient_id',$postdata['patient_id'])
								->where('medecin_id',$postdata['medecin_id'])
								->orwhere('medecin_destiantaire_id',$postdata['medecin_id'])
								->join('cms_users', 'cms_users.id', '=', 'lettre.medecin_id')
								->select('lettre.id','lettre.description','lettre.created_at','lettre.medecin_id',DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS medecin'))->orderBy('lettre.created_at','desc')
								->paginate(10);
								// ->select('id','description','created_at','medecin_id')->orderBy('lettre.created_at','DESC')
								// ->paginate(10);
							}
		    }

		}