<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use Hash;
		use CRUDBooster;

		class Privilege {

		   
		    public static function PrivilegeName($id) {
				$PrivilegeName = DB::table('cms_privileges')->select('name')->where('id',$id )
				->first();
                return $PrivilegeName->name;
				}
			public static function PrivilegeID($nom) {
				$PrivilegeName = DB::table('cms_privileges')->select('id')->where('name',$nom )
				->first();
				return $PrivilegeName->id;
				}
						
				

		    }

		