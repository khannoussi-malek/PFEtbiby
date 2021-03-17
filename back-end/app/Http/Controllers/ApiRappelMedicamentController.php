<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiRappelMedicamentController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "medicament";        
				$this->permalink   = "rappel_medicament";    
				$this->method_type = "get";    
		    }
		

		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process

		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query

		    }

		    public function hook_after($postdata,&$result) {
				// dd($postdata);
				// dd(date("yyyy-mm-dd", strtotime(now)));
				$query = DB::table('medicament')
				->join('liste_medicament', 'liste_medicament.id', '=', 'medicament.list_medicament_id')
				->where('medicament.date_fin' , '>', date('Y-m-d'))
				->select('medicament.*','liste_medicament.*');
				dd($query->liste_medicament->nom);
				// dd($result);
		        //This method will be execute after run the main process

		    }

		}