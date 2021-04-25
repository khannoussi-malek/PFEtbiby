<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiConsultationController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "consultation";        
				$this->permalink   = "consultation";    
				$this->method_type = "post";    
		    }
		

		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process
				$errer=[];
				if(empty($postdata['Diagnostic'])&&$postdata['Diagnostic']==""){
					$errer['Diagnostic']="Vous devez écrire un diagnostic";
				}
				elseif(empty($postdata['prix'])&&$postdata['prix']==""){
					$errer['Diagnostic']="Vous devez écrire un prix";
				}
				$certificats=[];
			
				if($errer==[]){
					$id=DB::table('consultation')->insertGetId(
						['Diagnostic' => $postdata['Diagnostic'], 'prix' => $postdata['prix'], 'medecin_id' => $postdata['medecin_id'], 'patient_id' => $postdata['patient_id'],'created_at' => date('Y-m-d H:i:s')]
					);
					if($postdata['certificats']!=[]){
						//incert all certificats
						foreach ($postdata['certificats'] as &$value) {
							DB::table('certificat')->insert(
								['consultation_id' => $id, 'structure' => $value, 'medecin_id' => $postdata['medecin_id'], 'patient_id' => $postdata['patient_id'],'created_at' => date('Y-m-d H:i:s')]
							);
						}
					}
					if($postdata['antecedants']!=[]){
						//incert all certificats
						foreach ($postdata['antecedants'] as &$value) {
							DB::table('antecedants')->insert(
								['type' =>$value['type'], 'description' => $value['description'], 'medecin_id' => $postdata['medecin_id'], 'patient_id' => $postdata['patient_id'],'created_at' => date('Y-m-d H:i:s')]
							);
						}
					}
					
					}
				$postdata=$errer;
			

		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query

		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process
				$result=$postdata;
		    }

		}