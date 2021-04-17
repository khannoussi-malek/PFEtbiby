<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;
        use Storage;
		use Illuminate\Support\Facades\Hash;

		class ApiUcpController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "cms_users";        
				$this->permalink   = "ucp";    
				$this->method_type = "post";    
		    }
		
             
		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process
                // dd($postdata);
                $errer=[];
				if($postdata['nom']!="null"){
                    $tableupdate['nom']=$postdata['nom'];
                }
                if($postdata['photo']!="null"){
                
                        $extention=$postdata['photo']->getClientOriginalExtension();
                        if($extention=="jpg"||$extention=="png"||$extention=="gif"){}else{
                            $errer['errer']="errrrrer";
                        }
                }

                if($postdata['prenom']!="null"){
                    $tableupdate['prenom']=$postdata['prenom'];
                    }

                if(!empty($postdata['telephone'])&&$postdata['telephone']!="null"){
                    
                    $users = DB::table('cms_users')->select('telephone')->where('id','!=',$postdata['id'])->first();
                    if($users->telephone!=null){
                    $tableupdate['telephone']=$postdata['telephone'];
                        
                    }
                    else{
                        $errer['etelephone']="telephone existe deja";
                    }
                    }

                if(!empty($postdata['email'])&&$postdata['email']!="null"){
                    $users = DB::table('cms_users')->select('email')->where('id','!=',$postdata['id'])->first();
                    if($users->email!=null){
                    $tableupdate['email']=$postdata['email'];
                        
                    }
                    else{
                        $errer['eemail']="email existe deja";
                    }
                    }

                if($postdata['date_naissance']!="null"){
                    $tableupdate['date_naissance']=$postdata['date_naissance'];
                    }
                if(!empty($postdata['cin'])&&$postdata['cin']!="null"){
                    $users = DB::table('cms_users')->select('cin')->where('id','!=',$postdata['id'])->first();
                    if($users->cin!=null){
                    $tableupdate['cin']=$postdata['cin'];
                        
                    }
                    else{
                        $errer['ecin']="cin existe deja";
                    }
                    }
                if($postdata['sexes']!="undefined"){
                    $tableupdate['sexes']=$postdata['sexes'];
                    }


                if($postdata['password']!="null"){
                    $postdata['password']=Hash::make($postdata['password']);
                    $tableupdate['password']=$postdata['password'];
                    }

					// dd($tableupdate);
                    // dd($tableupdate);
			

					// dd($tableupdate);
				// DB::table('cms_users')
                // ->where('id', $postdata['id'])
                // ->update(["nom"=>"malek"]);

                // if(!empty($postdata['parent'])){
                //     $user = DB::table('cms_users')->select('id')->where('email',$postdata['user'] )->orWhere('telephone',$postdata['user'])
                //     ->orWhere('cin',$postdata['user'])
                //     ->first();
                //     // dd($user);
                // }

  
                if($postdata['id_cms_privileges']=="patient"){
                  $patient= [];
                    if($postdata['parent']!="null"){
                    $users = DB::table('cms_users')->select('id')->where('email',$postdata['parent'] )->orWhere('telephone',$postdata['parent'])
                    ->orWhere('cin',$postdata['parent'])
                    ->first();
                    if($users->id!=null){
                        $patient["parent"]=$users->id;
                    }else{
                        $errer["parent"]="idantifiant parent introvables";
                    }
                    
                        }
                    if($postdata['Code_APCI']!="null"){

                            $patient["Code_APCI"]=$postdata['Code_APCI'];
                        
                            }

                    if($postdata['adresse']!="null"){

                        $patient["adresse"]=$postdata['adresse'];
                    
                        }
                    
                }
                if($postdata['id_cms_privileges']=="medecin"){
                    $medecin=[];
                    if($postdata['temps_de_séance']!="null"){

                        $medecin["temps_de_séance"]=$postdata['temps_de_séance'];
                    
                        }
                    if($postdata['SelectDomaine']!="null"){

                        $medecin["domaine_id"]=$postdata['SelectDomaine'];
                    
                    }
                    if($postdata['selectSousDomaine']!="null"){

                        $medecin["sous_domaine_id"]=$postdata['selectSousDomaine'];
                    
                    }

                }
                if($errer==[]){

                    if($postdata['photo']!="null"){
                    
                        $users = DB::table('cms_users')->select('photo')->where('id',$postdata['id'])->first();
                        if($users->phtot!=null){
                            unlink(storage_path('app\public\images'.substr($users->photo,15,strlen($users->photo))));
                        }
                        $tableupdate['photo']=Storage::url(Storage::put('public/images', $postdata['photo']));
                    }
                    $update=DB::table('cms_users')
                    ->where('id', $postdata['id'])
                    ->update($tableupdate);
                    if($postdata['id_cms_privileges']=="patient"){
                        $update=DB::table('patient')
                    ->where('cms_users_id', $postdata['id'])
                    ->update($patient);
                    }
                        
                    if($postdata['id_cms_privileges']=="medecin"){
                        $update=DB::table('medecin')
                        ->where('cms_users_id', $postdata['id'])
                        ->update($medecin);
                    }
                }

				$postdata=$errer;
		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query
                // $query->where('id',1);

		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process
                $result=$postdata;
                
              

			}

		}