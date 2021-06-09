<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;
		use App\Http\Controllers\Privilege as Privilege;

		class ApiLmController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "cms_users";        
				$this->permalink   = "lm";    
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
				$result = DB::table('cms_users')
				->where('id_cms_privileges', Privilege::PrivilegeID('medecin'))
				->where('id', '<>',$postdata['id'])
				->select(DB::raw('CONCAT(cms_users.nom, " ", cms_users.prenom) AS label'), 'cms_users.id AS value')
				->get();

		    }

		}