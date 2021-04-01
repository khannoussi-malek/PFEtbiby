<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiMedecininfoController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "cms_users";        
				$this->permalink   = "medecininfo";    
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
				$result=DB::table('cms_users')
				->where('cms_users.id',$postdata['id'])
				->join('medecin', 'cms_users.id', '=', 'medecin.cms_users_id')
				->select('cms_users.sexes','cms_users.telephone','cms_users.email','cms_users.photo',DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS nom'),'medecin.*')->first();
				dd($result);
		    }

		}