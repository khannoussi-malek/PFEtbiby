<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiRmpController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "relation";        
				$this->permalink   = "rmp";    
				$this->method_type = "post";    
		    }
		

		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process
				
				if($postdata['patient_id']=="" or $postdata['patient_id']==null) 
				{}
				else{
					$user = DB::table('cms_users')->select('*')->where('email',$postdata['patient_id'] )->orWhere('telephone',$postdata['patient_id'])
					->orWhere('cin',$postdata['patient_id'])
					->get();

					$postdata['patient_id']=strval($user[0]->id);

					$user = DB::table('relation')->select('*')->where('patient_id',$postdata['patient_id'] )->Where('medecin_id',$postdata['medecin_id'])
					->get();

					if($user[0]==null){

						DB::table('relation')->insert(
							['patient_id' => $postdata['patient_id'], 'medecin_id' =>$postdata['medecin_id'],"created_at" =>  date('Y-m-d H:i:s'), 
							"updated_at" => date('Y-m-d H:i:s')]
						);

					}
				}
		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query

		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process
				$result["api_message"]="patient dans votre liste";
				
		    }

		}