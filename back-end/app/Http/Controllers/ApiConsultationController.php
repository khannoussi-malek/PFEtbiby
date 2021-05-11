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
				$errer=[];
				if(empty($postdata['prix'])&&$postdata['prix']==""){
					$errer['prix']="Vous devez écrire un prix";
				}
				$certificats=[];
			// dd($postdata);
				if($errer==[]){
					
					DB::table('rendez_vous')->where('id', $postdata['rendez_vous_id'])->delete();
					$id=DB::table('consultation')->insertGetId(
						['Diagnostic' => $postdata['Diagnostic'], 'prix' => $postdata['prix'], 'medecin_id' => $postdata['medecin_id'], 'patient_id' => $postdata['patient_id'],'created_at' => date('Y-m-d H:i:s')]
					);
					if($postdata['certificats']!=[]){
						foreach ($postdata['certificats'] as &$value) {
							if(!empty($value)){
								DB::table('certificat')->insert(
									['consultation_id' => $id, 'structure' => $value, 'medecin_id' => $postdata['medecin_id'], 'patient_id' => $postdata['patient_id'],'created_at' => date('Y-m-d H:i:s')]
								);
							}
						}
					}
					if($postdata['antecedants']!=[]){
						foreach ($postdata['antecedants'] as &$value) {
							if(!empty($value)){
								DB::table('antecedants')->insert(
									['type' =>$value['type'], 'description' => $value['description'], 'medecin_id' => $postdata['medecin_id'], 'patient_id' => $postdata['patient_id'],'created_at' => date('Y-m-d H:i:s')]
								);
							}
						}
					}
					if($postdata['actes']!=[]){
						foreach ($postdata['actes'] as &$value) {
							if(!empty($value)){
								DB::table('acte')->insert(
									['consultation_id' => $id,'code' =>$value['code'],'designation' =>$value['designation'],'prix' =>$value['prix'], 'note' => $value['note'], 'medecin_id' => $postdata['medecin_id'], 'patient_id' => $postdata['patient_id'],'created_at' => date('Y-m-d H:i:s')]
								);
							}
						}
					}
					if($postdata['examens']!=[]){
						foreach ($postdata['examens'] as &$value) {
							if(!empty($value)){
								DB::table('examen')->insert(
									['consultation_id' => $id,'code' =>$value['code'],'type' =>$value['type'],'prix' =>$value['prix'], 'note' => $value['note'], 'medecin_id' => $postdata['medecin_id'], 'patient_id' => $postdata['patient_id'],'created_at' => date('Y-m-d H:i:s')]
								);
							}
						}
					}
					if($postdata['lettres']!=[]){
						foreach ($postdata['lettres'] as &$value) {
							if(!empty($value)){
								DB::table('lettre')->insert(
									['consultation_id' => $id,'medecin_destiantaire_id' =>$value['medecin_destiantaire_id']['value'],'description' =>$value['description'], 'medecin_id' => $postdata['medecin_id'], 'patient_id' => $postdata['patient_id'],'created_at' => date('Y-m-d H:i:s')]
								);
							}
						}
					}
					
					}
				$postdata=$errer;
				$postdata=['api_status'=>1];
			

		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query

		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process
				$result=$postdata;
		    }

		}