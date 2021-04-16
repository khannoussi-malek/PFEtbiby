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

                if($postdata['telephone']!="null"){
                    $tableupdate['telephone']=$postdata['telephone'];
                    }

                if($postdata['email']!="null"){
                    $tableupdate['email']=$postdata['email'];
                    }

                if($postdata['date_naissance']!="null"){
                    $tableupdate['date_naissance']=$postdata['date_naissance'];
                    }

                if($postdata['cin']!="null"){
                    $tableupdate['cin']=$postdata['cin'];
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
                            //test if pation
                                //update pation
                            //test if medecin
                                //update medecin

		// use App\Http\Controllers\Privilege as Privilege;

                                // if($postdata['id_cms_privileges']=="patient"){
                                //     DB::table('patient')->insert($insert);
                                // }else if($postdata['id_cms_privileges']=="medecin"){
                                //     DB::table('medecin')->insert($insert);
                                // }
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