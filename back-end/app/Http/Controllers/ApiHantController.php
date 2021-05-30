<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiHantController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "antecedants";        
				$this->permalink   = "hant";    
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
					
				$result = DB::table('antecedants')
                ->where('patient_id',$postdata['patient_id'])
                ->select('id','description','created_at')->orderBy('antecedants.created_at')
                ->paginate(10);
					}else{
						
				$result = DB::table('antecedants')
                ->where('patient_id',$postdata['patient_id'])
                ->where('medecin_id',$postdata['medecin_id'])
                ->select('id','description','created_at')->orderBy('antecedants.created_at')
                ->paginate(10);
					}
					

		    }

		}