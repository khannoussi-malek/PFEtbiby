<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiHorController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "ordonnance";        
				$this->permalink   = "hor";    
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
				$result = DB::table('ordonnance')
				->whereDAte('ordonnance.date_fin','>', date('Y-m-d H:i:s'))
                ->where('ordonnance.patient_id',$postdata['patient_id'])
                // ->where('medecin_id',$postdata['medecin_id'])
				->join('medicament', 'medicament.id', '=', 'ordonnance.medicament_id')
                ->select('ordonnance.id','medicament.designation')->orderBy('ordonnance.created_at')
                ->paginate(10);
		    }

		}