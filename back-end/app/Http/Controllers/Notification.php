<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;

		class Notification {

			public static function sendNotification($config = [])
			{
				$config['is_read'] = 0;
				$config['created_at'] = date('Y-m-d H:i:s');
				DB::table('cms_notifications')->insert($config);
				
		
				return true;
			}
						
				

		    }

		