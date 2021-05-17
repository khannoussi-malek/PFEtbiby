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
                $error=[];
				if($postdata['nom']!="null"&&!empty($postdata['nom'])){
                    $tableupdate['nom']=$postdata['nom'];
                }
                if($postdata['photo']!="null"&&!empty($postdata['photo'])){
                        $extention=$postdata['photo']->getClientOriginalExtension();
                        if($extention=="jpg"||$extention=="png"||$extention=="gif"){}else{
                            $error['error']="Veuillez saisir une image (jpg , png ,gif)";
                        }
                }
                if($postdata['prenom']!="null"&&!empty($postdata['prenom'])){
                    $tableupdate['prenom']=$postdata['prenom'];
                    }
                if(!empty($postdata['telephone'])&&$postdata['telephone']!="null"){
                    $users = DB::table('cms_users')->select('telephone')->where('id','!=',$postdata['id'])
                    ->where('telephone',$postdata['telephone'])->first();
                    if($users==null){
                    $tableupdate['telephone']=$postdata['telephone'];
                    }
                    else{
                        $error['etelephone']="telephone existe deja";
                    }
                    }

                if(!empty($postdata['email'])&&$postdata['email']!="null"){
                    $users = DB::table('cms_users')->select('email')->where('id','!=',$postdata['id'])
                    ->where('email',$postdata['email'])->first();
                        if($users==null){
                           $tableupdate['email']=$postdata['email'];
                        }
                        else{
                            $error['eemail']="email existe deja";
                        }
                    }

                if($postdata['date_naissance']!="null"&&!empty($postdata['date_naissance'])){
                    $tableupdate['date_naissance']=$postdata['date_naissance'];
                    }
                if(!empty($postdata['cin'])&&$postdata['cin']!="null"){

                    $users = DB::table('cms_users')->select('cin')
                    ->where('id','!=',$postdata['id'])
                    ->where('cin',$postdata['cin'])->first();
                    if($users==null){
                    $tableupdate['cin']=$postdata['cin'];
                        
                    }
                    else{
                        $error['ecin']="cin existe deja";
                    }
                    }
                if($postdata['sexes']!="null"&&!empty($postdata['sexes'])){
                    $tableupdate['sexes']=$postdata['sexes'];
                    }


                if($postdata['password']!="null"&&!empty($postdata['password'])){
                    $postdata['password']=Hash::make($postdata['password']);
                    $tableupdate['password']=$postdata['password'];
                    }

					

  
                if($postdata['id_cms_privileges']=="patient"){
                  $patient= [];
                    if($postdata['parent']!="null"&&!empty($postdata['parent'])){
                    $users = DB::table('cms_users')->select('id')->where('email',$postdata['parent'] )->orWhere('telephone',$postdata['parent'])
                    ->orWhere('cin',$postdata['parent'])
                    ->first();
                    if($users->id!=null){
                        $patient["parent"]=$users->id;
                    }else{
                        $error["parent"]="idantifiant parent introvables";
                    }
                    
                        }
                    if($postdata['Code_APCI']!="null"&&!empty($postdata['Code_APCI'])){

                            $patient["Code_APCI"]=$postdata['Code_APCI'];
                        
                            }

                    if($postdata['adresse']!="null"&&!empty($postdata['adresse'])){

                        $patient["adresse"]=$postdata['adresse'];
                    
                        }
                    $postdata["updated_at"]= date('Y-m-d H:i:s');

                    
                }
                if($postdata['id_cms_privileges']=="medecin"){
                    $medecin=[];
          
                    if($postdata['SelectDomaine']!="null"&&!empty($postdata['SelectDomaine'])){

                        $medecin["domaine_id"]=$postdata['SelectDomaine'];
                    
                    }
                    if($postdata['adresse_physique']!="null"&&!empty($postdata['adresse_physique'])){

                        $medecin["adresse_physique"]=$postdata['adresse_physique'];
                    
                    }
                    if($postdata['selectSousDomaine']!="null"&&!empty($postdata['selectSousDomaine'])){

                        $medecin["sous_domaine_id"]=$postdata['selectSousDomaine'];
                    
                    }
                    $medecin["updated_at"]= date('Y-m-d H:i:s');


                }

                if($error==[]){

                    if($postdata['photo']!="null"){
                    
                        $users = DB::table('cms_users')->select('photo')->where('id',$postdata['id'])->first();
                        if($users->photo!=null){
                            unlink(storage_path('app\public\images'.substr($users->photo,15,strlen($users->photo))));
                        }
                        $tableupdate['photo']=Storage::url(Storage::put('public/images', $postdata['photo']));
                    }
                    $tableupdate["updated_at"]= date('Y-m-d H:i:s');
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

				$postdata=$error;
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