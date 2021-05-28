<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiCdController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "consultation";        
				$this->permalink   = "cd";    
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
				
				$consultation = DB::table('consultation')
				->select('Diagnostic','prix')
				->where('id',$postdata['id'])
				->first();
				$certificat = DB::table('certificat')
				->select('structure')
				->where('consultation_id',$postdata['id'])
				->get();
				$acte = DB::table('acte')
				->select('code','designation','note')
				->where('consultation_id',$postdata['id'])
				->get();
				$examen = DB::table('examen')
				->select('note','type','prix')
				->where('consultation_id',$postdata['id'])
				->get();
				$lettre = DB::table('lettre')
				->where('consultation_id',$postdata['id'])
				->select('description')
				->get();
				$ordonnance = DB::table('ordonnance')
				->where('consultation_id',$postdata['id'])
				->join('medicament', 'medicament.id', '=', 'ordonnance.medicament_id')
				->select('medicament.designation as medicament','date_debut','date_fin','NBR_FOIS_JOURS','duree_entre_chaque_medicament')
				->get();
				$result['data']=['consultation'=>$consultation,'detail'=>['certificat'=>$certificat,'acte'=>$acte,'examen'=>$examen,'lettre'=>$lettre,'ordonnance'=>$ordonnance]];
		    }

		}