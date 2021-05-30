<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiHactController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "acte";        
				$this->permalink   = "hact";    
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
					
				$result = DB::table('acte')
                ->where('patient_id',$postdata['patient_id'])
                ->select('id','code','designation','note','created_at')->orderBy('acte.created_at')
                ->paginate(10);
				}else{
					
				$result = DB::table('acte')
                ->where('patient_id',$postdata['patient_id'])
                ->where('medecin_id',$postdata['medecin_id'])
                ->select('id','code','designation','note','created_at')->orderBy('acte.created_at')
                ->paginate(10);
				}
		    }

		}