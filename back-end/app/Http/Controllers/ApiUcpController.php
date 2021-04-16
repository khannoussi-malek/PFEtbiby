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
                    // dd($postdata['photo']);

                        // $completeFileName = $postdata['photo']->getClientOriginalName();
                        // $fileNameOnly = pathinfo($completeFileName, PATHINFO_FILENAME);
                        // $extension = $postdata['photo']->getClientOriginalExtension();
                        // $comPic = str_replace(' ', '_', $fileNameOnly) . '-' . rand() . '_' . time() . '.' . $extension;
                        // $path = $postdata['photo']->storeAs('uploads/1/2021-04', $comPic);
                       
                        $extention=$postdata['photo']->getClientOriginalExtension();
                        if($extention=="jpg"||$extention=="png"||$extention=="gif"){
                        $tableupdate['photo']=Storage::url(Storage::put('public/images', $postdata['photo']));
                        }else{
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
                if($postdata['sexes']!="null"){
                    $tableupdate['sexes']=$postdata['sexes'];
                    }


                if($postdata['password']!="null"){
                    $postdata['password']=Hash::make($postdata['password']);
                    $tableupdate['password']=$postdata['password'];
                    }

					// dd($tableupdate);
                    // dd($tableupdate);
				$update=DB::table('cms_users')
                ->where('id', $postdata['id'])
                ->update($tableupdate);

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

				$postdata=$errer;
		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query
                $query->where('id',-1);

		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process
                dd($postdata);

			}

		}