<?php

use Illuminate\Database\Seeder;

class CBSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info('Please wait updating the data...');

        $this->call('Cms_usersSeeder');
        $this->call('Cms_modulsSeeder');
        $this->call('Cms_privilegesSeeder');
        $this->call('Cms_privileges_rolesSeeder');
        $this->call('Cms_settingsSeeder');
        $this->call('CmsEmailTemplates');
        $this->call('cms_apicustom');
        $this->call('cms_apikey');
        $this->call('cms_menusseeder');

        $this->command->info('Updating the data completed !');
    }
}

class cms_menusseeder extends Seeder
{
    public function run()
    {
        DB::table('cms_menus')->insert([
            'created_at' => date('Y-m-d H:i:s'),
            'name' => "patient",
            'type' => "Route",
            'path' => "AdminPatientControllerGetIndex",
            'icon' => "fa fa-child",
            'parent_id' => 0,
            'is_active' => 1,
            'is_dashboard' => 0,
            'id_cms_privileges' => 1,
            'sorting' => 1,
        ]);
        DB::table('cms_menus')->insert([
            'created_at' => date('Y-m-d H:i:s'),
            'name' => "secrétaire",
            'type' => "Route",
            'path' => "AdminSecrétaireControllerGetIndex",
            'icon' => "fa fa-user-plus",
            'parent_id' => 0,
            'is_active' => 1,
            'is_dashboard' => 0,
            'id_cms_privileges' => 1,
            'sorting' => 2,
        ]);
        DB::table('cms_menus')->insert([
            'created_at' => date('Y-m-d H:i:s'),
            'name' => "patient",
            'type' => "Route",
            'path' => "AdminPatientControllerGetIndex",
            'icon' => "fa fa-child",
            'parent_id' => 0,
            'is_active' => 1,
            'is_dashboard' => 0,
            'id_cms_privileges' => 1,
            'sorting' => 3,
        ]);


        
        DB::table('cms_menus_privileges')->insert([
            'id_cms_menus' => 1,
            'id_cms_privileges' => 1,
            
        ]);
        DB::table('cms_menus_privileges')->insert([
            'id_cms_menus' => 2,
            'id_cms_privileges' => 1,
            
        ]);
        DB::table('cms_menus_privileges')->insert([
            'id_cms_menus' => 3,
            'id_cms_privileges' => 1,
            
        ]);
    }

}
class cms_apicustom extends seeder {
    public function run()
    {
            if(DB::table('cms_apicustom')->where('permalink' ,'login')->count() == 0){
            DB::table('cms_apicustom')->insert([
                'permalink' => 'login',
                'tabel' => 'cms_users',
                'aksi' => 'detail',
                'nama' => 'login',
                'method_type' => 'post',
                'parameters' => 'a:2:{i:0;a:5:{s:4:"name";s:4:"user";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}i:1;a:5:{s:4:"name";s:8:"password";s:4:"type";s:8:"password";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:13:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:3:"nom";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:6:"prenom";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:9:"telephone";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:5:"photo";s:4:"type";s:5:"image";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:5:"email";s:4:"type";s:5:"email";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:3:"cin";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:7;a:4:{s:4:"name";s:8:"password";s:4:"type";s:8:"password";s:8:"subquery";N;s:4:"used";s:1:"1";}i:8;a:4:{s:4:"name";s:17:"id_cms_privileges";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:9;a:4:{s:4:"name";s:19:"cms_privileges_name";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:10;a:4:{s:4:"name";s:28:"cms_privileges_is_superadmin";s:4:"type";s:7:"tinyint";s:8:"subquery";N;s:4:"used";s:1:"1";}i:11;a:4:{s:4:"name";s:26:"cms_privileges_theme_color";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:12;a:4:{s:4:"name";s:6:"status";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'singup')->count() == 0){
            DB::table('cms_apicustom')->insert([
                'permalink' => 'singup',
                'tabel' => 'cms_users',
                'aksi' => 'save_add',
                'nama' => 'singup',
                'method_type' => 'post',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:3:"nom";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:13:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:3:"nom";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:6:"prenom";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:9:"telephone";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:5:"photo";s:4:"type";s:5:"image";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:5:"email";s:4:"type";s:5:"email";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:3:"cin";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:7;a:4:{s:4:"name";s:8:"password";s:4:"type";s:8:"password";s:8:"subquery";N;s:4:"used";s:1:"1";}i:8;a:4:{s:4:"name";s:17:"id_cms_privileges";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:9;a:4:{s:4:"name";s:19:"cms_privileges_name";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:10;a:4:{s:4:"name";s:28:"cms_privileges_is_superadmin";s:4:"type";s:7:"tinyint";s:8:"subquery";N;s:4:"used";s:1:"1";}i:11;a:4:{s:4:"name";s:26:"cms_privileges_theme_color";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:12;a:4:{s:4:"name";s:6:"status";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);}
            if(DB::table('cms_apicustom')->where('permalink' ,'rmp')->count() == 0){
        
            DB::table('cms_apicustom')->insert([
                'permalink' => 'rmp',
                'tabel' => 'relation',
                'aksi' => 'detail',
                'nama' => 'relation medicine patient',
                'method_type' => 'post',
                'parameters' => 'a:2:{i:0;a:5:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}i:1;a:5:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:3:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'lrmp')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'lrmp',
                'tabel' => 'relation',
                'aksi' => 'list',
                'nama' => 'liste relation medicine patient',
                'method_type' => 'get',
                'parameters' => 'a:2:{i:0;a:5:{s:4:"name";s:10:"patient_id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}i:1;a:5:{s:4:"name";s:10:"medecin_id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:3:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'listpatientdashboard')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'listpatientdashboard',
                'tabel' => 'relation',
                'aksi' => 'list',
                'nama' => 'ListPatientDashboard',
                'method_type' => 'get',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:3:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'cr')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'cr',
                'tabel' => 'rendez_vous',
                'aksi' => 'save_add',
                'nama' => 'cr',
                'method_type' => 'post',
                'parameters' => 'a:4:{i:0;a:5:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:1;a:5:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:2;a:5:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:3;a:5:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:7:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:17:"date_réservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:16:"date_acceptation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:12:"date_dentré";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);  
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'listrm')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'listrm',
                'tabel' => 'rendez_vous',
                'aksi' => 'list',
                'nama' => 'list rendez vous medecine',
                'method_type' => 'get',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:7:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:16:"date_acceptation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:12:"date_dentré";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'updater')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'updater',
                'tabel' => 'rendez_vous',
                'aksi' => 'save_edit',
                'nama' => 'updaterendez_vous',
                'method_type' => 'post',
                'parameters' => 'a:2:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:1;a:5:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:7:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:16:"date_acceptation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:12:"date_dentré";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'deleter')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'deleter',
                'tabel' => 'rendez_vous',
                'aksi' => 'delete',
                'nama' => 'deleterendez_vous',
                'method_type' => 'post',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:7:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:16:"date_acceptation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:12:"date_dentré";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'lrd')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'lrd',
                'tabel' => 'rendez_vous',
                'aksi' => 'list',
                'nama' => 'List ReservationDashboard',
                'method_type' => 'get',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:7:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:16:"date_acceptation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:12:"date_dentré";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'cp')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'cp',
                'tabel' => 'rendez_vous',
                'aksi' => 'list',
                'nama' => 'Consultation Patient',
                'method_type' => 'get',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:7:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:16:"date_acceptation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:12:"date_dentré";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'pm')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'pm',
                'tabel' => 'relation',
                'aksi' => 'list',
                'nama' => 'realation patien medecin',
                'method_type' => 'get',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:3:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'pe')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'pe',
                'tabel' => 'rendez_vous',
                'aksi' => 'save_edit',
                'nama' => 'patient entrer',
                'method_type' => 'post',
                'parameters' => 'a:2:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:1;a:5:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:7:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:16:"date_acceptation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:12:"date_dentré";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'pdcm')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'pdcm',
                'tabel' => 'rendez_vous',
                'aksi' => 'list',
                'nama' => 'liste patient donneé consultation de médecine',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'sptwr')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'sptwr',
                'tabel' => 'rendez_vous',
                'aksi' => 'save_edit',
                'nama' => 'send patient to waiting room',
                'method_type' => 'post',
                'parameters' => 'a:2:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:1;a:5:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'ucp')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'ucp',
                'tabel' => 'cms_users',
                'aksi' => 'save_edit',
                'nama' => 'update compte patient',
                'method_type' => 'post',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'antecedants')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'antecedants',
                'tabel' => 'antecedants',
                'aksi' => 'list',
                'nama' => 'Antecedants',
                'method_type' => 'get',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'medecininfo')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'medecininfo',
                'tabel' => 'cms_users',
                'aksi' => 'detail',
                'nama' => 'Informations Sur Le Medecin',
                'method_type' => 'get',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'addct')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'addct',
                'tabel' => 'certificat_type',
                'aksi' => 'save_add',
                'nama' => 'add certificat type',
                'method_type' => 'post',
                'parameters' => 'a:2:{i:0;a:5:{s:4:"name";s:4:"type";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:1;a:5:{s:4:"name";s:9:"structure";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:3:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:4:"type";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:9:"structure";s:4:"type";s:8:"longtext";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'gc')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'gc',
                'tabel' => 'certificat_type',
                'aksi' => 'list',
                'nama' => 'get certificat',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'dom')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'dom',
                'tabel' => 'domaine',
                'aksi' => 'list',
                'nama' => 'domaine',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'sousdom')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'sousdom',
                'tabel' => 'sous_domaine',
                'aksi' => 'list',
                'nama' => 'domaine',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'gcf')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'gcf',
                'tabel' => 'cms_users',
                'aksi' => 'detail',
                'nama' => 'charge the forme of "gestion de compte"',
                'method_type' => 'get',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'rmpp')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'rmpp',
                'tabel' => 'cms_users',
                'aksi' => 'save_edit',
                'nama' => 'remove profile photo',
                'method_type' => 'post',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'ltc')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'ltc',
                'tabel' => 'certificat_type',
                'aksi' => 'list',
                'nama' => 'list Type Certificat',
                'method_type' => 'get',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'notification')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'notification',
                'tabel' => 'cms_notifications',
                'aksi' => 'list',
                'nama' => 'get all notification',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'rmnot')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'rmnot',
                'tabel' => 'cms_notifications',
                'aksi' => 'save_edit',
                'nama' => 'remove one notification',
                'method_type' => 'post',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'rmanotif')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'rmanotif',
                'tabel' => 'cms_notifications',
                'aksi' => 'save_edit',
                'nama' => 'remove all notification of one user',
                'method_type' => 'post',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'vnotif')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'vnotif',
                'tabel' => 'cms_notifications',
                'aksi' => 'save_edit',
                'nama' => 'see one notification',
                'method_type' => 'post',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'uct')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'uct',
                'tabel' => 'certificat_type',
                'aksi' => 'save_edit',
                'nama' => 'update type certificat',
                'method_type' => 'post',
                'parameters' => 'a:4:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:1;a:5:{s:4:"name";s:4:"type";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:2;a:5:{s:4:"name";s:9:"structure";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:3;a:5:{s:4:"name";s:12:"cms_users_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'ad')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'ad',
                'tabel' => 'domaine',
                'aksi' => 'save_add',
                'nama' => 'add domine',
                'method_type' => 'post',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:3:"nom";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'asd')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'asd',
                'tabel' => 'sous_domaine',
                'aksi' => 'save_add',
                'nama' => 'add sous domaine',
                'method_type' => 'post',
                'parameters' => 'a:2:{i:0;a:5:{s:4:"name";s:10:"domaine_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:1;a:5:{s:4:"name";s:3:"nom";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'consultation')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'consultation',
                'tabel' => 'consultation',
                'aksi' => 'list',
                'nama' => 'add consultation',
                'method_type' => 'post',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'hc')->count() == 0){

            DB::table('cms_apicustom')->insert([
            
                'permalink' => 'hc',
                'tabel' => 'certificat',
                'aksi' => 'list',
                'nama' => 'historique certificat',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'hact')->count() == 0){

            DB::table('cms_apicustom')->insert([
            
                'permalink' => 'hact',
                'tabel' => 'acte',
                'aksi' => 'list',
                'nama' => 'historique acte ',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'hant')->count() == 0){

            DB::table('cms_apicustom')->insert([
            
                'permalink' => 'hant',
                'tabel' => 'antecedants',
                'aksi' => 'list',
                'nama' => 'historique antecedant',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'hex')->count() == 0){

            DB::table('cms_apicustom')->insert([
            
                'permalink' => 'hex',
                'tabel' => 'examen',
                'aksi' => 'list',
                'nama' => 'historique examen',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'hor')->count() == 0){

            DB::table('cms_apicustom')->insert([
            
                'permalink' => 'hor',
                'tabel' => 'ordonnance',
                'aksi' => 'list',
                'nama' => 'historique ordonnance',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'hl')->count() == 0){

            DB::table('cms_apicustom')->insert([
            
                'permalink' => 'hl',
                'tabel' => 'lettre',
                'aksi' => 'list',
                'nama' => 'historique lettre',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
                ]);

            }
            if(DB::table('cms_apicustom')->where('permalink' ,'tm')->count() == 0){
            
            DB::table('cms_apicustom')->insert([
                'permalink' => 'tm',
                'tabel' => 'cms_users',
                'aksi' => 'list',
                'nama' => 'Trouver un médecin',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'lrde')->count() == 0){
            
            DB::table('cms_apicustom')->insert([
                'permalink' => 'lrde',
                'tabel' => 'rendez_vous',
                'aksi' => 'list',
                'nama' => 'liste rendez_vous en ligne',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'pcr')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'pcr',
                'tabel' => 'rendez_vous',
                'aksi' => 'save_add',
                'nama' => 'Patient Create Reservation',
                'method_type' => 'post',
                'parameters' => 'a:4:{i:0;a:5:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:1;a:5:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:2;a:5:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:3;a:5:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'vr')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'vr',
                'tabel' => 'rendez_vous',
                'aksi' => 'list',
                'nama' => 'valider un rendez vous',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'add_act')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'add_act',
                'tabel' => 'liste_actes',
                'aksi' => 'save_add',
                'nama' => 'add act',
                'method_type' => 'post',
                'parameters' => 'a:3:{i:0;a:5:{s:4:"name";s:4:"code";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:1;a:5:{s:4:"name";s:11:"designation";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:2;a:5:{s:4:"name";s:5:"price";s:4:"type";s:7:"numeric";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:1:{i:0;a:4:{s:4:"name";s:5:"price";s:4:"type";s:7:"numeric";s:8:"subquery";N;s:4:"used";s:1:"0";}}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'la')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'la',
                'tabel' => 'liste_actes',
                'aksi' => 'list',
                'nama' => 'list acte',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);}
            if(DB::table('cms_apicustom')->where('permalink' ,'uact')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'uact',
                'tabel' => 'liste_actes',
                'aksi' => 'save_edit',
                'nama' => 'update acte',
                'method_type' => 'post',
                'parameters' => 'a:4:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:1;a:5:{s:4:"name";s:4:"code";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:2;a:5:{s:4:"name";s:11:"designation";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:3;a:5:{s:4:"name";s:5:"price";s:4:"type";s:7:"numeric";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'gac')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'gac',
                'tabel' => 'liste_actes',
                'aksi' => 'list',
                'nama' => 'get all list acte',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'ga')->count() == 0){

            DB::table('cms_apicustom')->insert([
                'permalink' => 'ga',
                'tabel' => 'liste_actes',
                'aksi' => 'detail',
                'nama' => 'get one acte',
                'method_type' => 'post',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:4:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:4:"code";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:11:"designation";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:5:"price";s:4:"type";s:7:"numeric";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            }
            if(DB::table('cms_apicustom')->where('permalink' ,'lm')->count() == 0){

                DB::table('cms_apicustom')->insert([
                    'permalink' => 'lm',
                    'tabel' => 'cms_users',
                    'aksi' => 'list',
                    'nama' => 'liste medecin',
                    'method_type' => 'get',
                    'parameters' => 'a:0:{}',
                    'responses' => 'a:0:{}',
                ]);
            
                if(DB::table('cms_apicustom')->where('permalink' ,'listem')->count() == 0){

                    DB::table('cms_apicustom')->insert([
                        'permalink' => 'listem',
                        'tabel' => 'medicament',
                        'aksi' => 'list',
                        'nama' => 'liste medicament',
                        'method_type' => 'get',
                        'parameters' => 'a:0:{}',
                        'responses' => 'a:0:{}',
                    ]);
                }
                
                if(DB::table('cms_apicustom')->where('permalink' ,'addm')->count() == 0){

                    DB::table('cms_apicustom')->insert([
                        'permalink' => 'addm',
                        'tabel' => 'medicament',
                        'aksi' => 'save_add',
                        'nama' => 'add medicament',
                        'method_type' => 'post',
                        'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:11:"designation";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                        'responses' => 'a:0:{}',
                    ]);
                }
                
                if(DB::table('cms_apicustom')->where('permalink' ,'lms2')->count() == 0){

                    DB::table('cms_apicustom')->insert([
                        'permalink' => 'lms2',
                        'tabel' => 'medicament',
                        'aksi' => 'list',
                        'nama' => 'liste medicament select2',
                        'method_type' => 'get',
                        'parameters' => 'a:0:{}',
                        'responses' => 'a:0:{}',
                    ]);
                }
        
        
    }
}
class cms_apikey extends Seeder
{
    public function run()
    {
        if(DB::table('cms_apikey')->count() == 0){
        DB::table('cms_apikey')->insert([
                'created_at' => date('Y-m-d H:i:s'),
                'screetkey' => 'pfetbiby2020',
                'hit' => '0',
                'status' => 'active',
            ]);
        }
    }
}
class CmsEmailTemplates extends Seeder
{
    public function run()
    {
        DB::table('cms_email_templates')->insert([
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'Email Template Forgot Password Backend',
                'slug' => 'forgot_password_backend',
                'content' => '<p>Hi,</p><p>Someone requested forgot password, here is your new password : </p><p>[password]</p><p><br></p><p>--</p><p>Regards,</p><p>Admin</p>',
                'description' => '[password]',
                'from_name' => 'System',
                'from_email' => 'system@tbiby.com',
                'cc_email' => null,
            ]);
    }
}

class Cms_settingsSeeder extends Seeder
{
    public function run()
    {

        $data = [

            //LOGIN REGISTER STYLE
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'login_background_color',
                'label' => 'Login Background Color',
                'content' => null,
                'content_input_type' => 'text',
                'group_setting' => trans('crudbooster.login_register_style'),
                'dataenum' => null,
                'helper' => 'Input hexacode',
            ],
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'login_font_color',
                'label' => 'Login Font Color',
                'content' => null,
                'content_input_type' => 'text',
                'group_setting' => trans('crudbooster.login_register_style'),
                'dataenum' => null,
                'helper' => 'Input hexacode',
            ],
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'login_background_image',
                'label' => 'Login Background Image',
                'content' => null,
                'content_input_type' => 'upload_image',
                'group_setting' => trans('crudbooster.login_register_style'),
                'dataenum' => null,
                'helper' => null,
            ],

            //EMAIL SETTING
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'email_sender',
                'label' => 'Email Sender',
                'content' => 'support@tbiby.com',
                'content_input_type' => 'text',
                'group_setting' => trans('crudbooster.email_setting'),
                'dataenum' => null,
                'helper' => null,
            ],
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'smtp_driver',
                'label' => 'Mail Driver',
                'content' => 'mail',
                'content_input_type' => 'select',
                'group_setting' => trans('crudbooster.email_setting'),
                'dataenum' => 'smtp,mail,sendmail',
                'helper' => null,
            ],
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'smtp_host',
                'label' => 'SMTP Host',
                'content' => '',
                'content_input_type' => 'text',
                'group_setting' => trans('crudbooster.email_setting'),
                'dataenum' => null,
                'helper' => null,
            ],
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'smtp_port',
                'label' => 'SMTP Port',
                'content' => '25',
                'content_input_type' => 'text',
                'group_setting' => trans('crudbooster.email_setting'),
                'dataenum' => null,
                'helper' => 'default 25',
            ],
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'smtp_username',
                'label' => 'SMTP Username',
                'content' => '',
                'content_input_type' => 'text',
                'group_setting' => trans('crudbooster.email_setting'),
                'dataenum' => null,
                'helper' => null,
            ],
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'smtp_password',
                'label' => 'SMTP Password',
                'content' => '',
                'content_input_type' => 'text',
                'group_setting' => trans('crudbooster.email_setting'),
                'dataenum' => null,
                'helper' => null,
            ],

            //APPLICATION SETTING
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'appname',
                'label' => 'Application Name',
                'group_setting' => trans('crudbooster.application_setting'),
                'content' => 'Tbiby',
                'content_input_type' => 'text',
                'dataenum' => null,
                'helper' => null,
            ],
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'default_paper_size',
                'label' => 'Default Paper Print Size',
                'group_setting' => trans('crudbooster.application_setting'),
                'content' => 'Legal',
                'content_input_type' => 'text',
                'dataenum' => null,
                'helper' => 'Paper size, ex : A4, Legal, etc',
            ],
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'logo',
                'label' => 'Logo',
                'content' => 'uploads/2021-03/2551f23f6c4cd35a15a765d97f610630.png',
                'content_input_type' => 'upload_image',
                'group_setting' => trans('crudbooster.application_setting'),
                'dataenum' => null,
                'helper' => null,
            ],
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'favicon',
                'label' => 'Favicon',
                'content' => 'uploads/2021-03/2551f23f6c4cd35a15a765d97f610630.png',
                'content_input_type' => 'upload_image',
                'group_setting' => trans('crudbooster.application_setting'),
                'dataenum' => null,
                'helper' => null,
            ],
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'api_debug_mode',
                'label' => 'API Debug Mode',
                'content' => 'true',
                'content_input_type' => 'select',
                'group_setting' => trans('crudbooster.application_setting'),
                'dataenum' => 'true,false',
                'helper' => null,
            ],
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'google_api_key',
                'label' => 'Google API Key',
                'content' => 'AIzaSyAmCyYFfDHqzxYQuU7nVvZSOLu3hywZvEQ',
                'content_input_type' => 'text',
                'group_setting' => trans('crudbooster.application_setting'),
                'dataenum' => null,
                'helper' => null,
            ],
            [
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'google_fcm_key',
                'label' => 'Google FCM Key',
                'content' => '',
                'content_input_type' => 'text',
                'group_setting' => trans('crudbooster.application_setting'),
                'dataenum' => null,
                'helper' => null,
            ],
            
        ];

        foreach ($data as $row) {
            $count = DB::table('cms_settings')->where('name', $row['name'])->count();
            if ($count) {
                if ($count > 1) {
                    $newsId = DB::table('cms_settings')->where('name', $row['name'])->orderby('id', 'asc')->take(1)->first();
                    DB::table('cms_settings')->where('name', $row['name'])->where('id', '!=', $newsId->id)->delete();
                }
                continue;
            }
            DB::table('cms_settings')->insert($row);
        }
    }
}

class Cms_privileges_rolesSeeder extends Seeder
{
    public function run()
    {

        if (DB::table('cms_privileges_roles')->count() == 0) {
            $modules = DB::table('cms_moduls')->get();
            $i = 1;
            foreach ($modules as $module) {

                $is_visible = 1;
                $is_create = 1;
                $is_read = 1;
                $is_edit = 1;
                $is_delete = 1;

                switch ($module->table_name) {
                    case 'cms_logs':
                        $is_create = 0;
                        $is_edit = 0;
                        break;
                    case 'cms_privileges_roles':
                        $is_visible = 0;
                        break;
                    case 'cms_apicustom':
                        $is_visible = 0;
                        break;
                    case 'cms_notifications':
                        $is_create = $is_read = $is_edit = $is_delete = 0;
                        break;
                }

                DB::table('cms_privileges_roles')->insert([
                    'created_at' => date('Y-m-d H:i:s'),
                    'is_visible' => $is_visible,
                    'is_create' => $is_create,
                    'is_edit' => $is_edit,
                    'is_delete' => $is_delete,
                    'is_read' => $is_read,
                    'id_cms_privileges' => 1,
                    'id_cms_moduls' => $module->id,
                ]);
                
                
                $i++;
            }
        }
        if (DB::table('cms_privileges_roles')->count() == 11) {
            $modules = DB::table('cms_moduls')->get();
            $i = 1;
            foreach ($modules as $module) {

                DB::table('cms_privileges_roles')->insert([[
                    'created_at' => date('Y-m-d H:i:s'),
                    'is_visible' => 0,
                    'is_create' => 0,
                    'is_edit' => 0,
                    'is_delete' => 0,
                    'is_read' => 0,
                    'id_cms_privileges' => 2,
                    'id_cms_moduls' => $module->id,
                ],[
                    'created_at' => date('Y-m-d H:i:s'),
                    'is_visible' => 0,
                    'is_create' => 0,
                    'is_edit' => 0,
                    'is_delete' => 0,
                    'is_read' => 0,
                    'id_cms_privileges' => 3,
                    'id_cms_moduls' => $module->id,
                ],[
                    'created_at' => date('Y-m-d H:i:s'),
                    'is_visible' => 0,
                    'is_create' => 0,
                    'is_edit' => 0,
                    'is_delete' => 0,
                    'is_read' => 0,
                    'id_cms_privileges' => 4,
                    'id_cms_moduls' => $module->id,
                ]]);
                
                
                $i++;
            }
        }
    }
}

class Cms_privilegesSeeder extends Seeder
{
    public function run()
    {

        if (DB::table('cms_privileges')->where('name', 'Super Administrator')->count() == 0) {
            DB::table('cms_privileges')->insert([
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'Super Administrator',
                'is_superadmin' => 1,
                'theme_color' => 'skin-green-light',
            ]);
        }
        if (DB::table('cms_privileges')->where('name', 'medecin')->count() == 0) {
            DB::table('cms_privileges')->insert([
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'medecin',
                'is_superadmin' => 0,
                'theme_color' => 'skin-green-light',
            ]);
        }
        
        if (DB::table('cms_privileges')->where('name', 'secretaire')->count() == 0) {
            DB::table('cms_privileges')->insert([
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'secretaire',
                'is_superadmin' => 0,
                'theme_color' => 'skin-green-light',
            ]);
        }
        
        if (DB::table('cms_privileges')->where('name', 'patient')->count() == 0) {
            DB::table('cms_privileges')->insert([
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'patient',
                'is_superadmin' => 0,
                'theme_color' => 'skin-green-light',
            ]);
        }
    }
}

class Cms_modulsSeeder extends Seeder
{
    public function run()
    {

        /* 
            1 = Public
            2 = Setting        
        */

        $data = [
            [

                'created_at' => date('Y-m-d H:i:s'),
                'name' => trans('crudbooster.Notifications'),
                'icon' => 'fa fa-cog',
                'path' => 'notifications',
                'table_name' => 'cms_notifications',
                'controller' => 'NotificationsController',
                'is_protected' => 1,
                'is_active' => 1,
            ],
            [

                'created_at' => date('Y-m-d H:i:s'),
                'name' => trans('crudbooster.Privileges'),
                'icon' => 'fa fa-cog',
                'path' => 'privileges',
                'table_name' => 'cms_privileges',
                'controller' => 'PrivilegesController',
                'is_protected' => 1,
                'is_active' => 1,
            ],
            [

                'created_at' => date('Y-m-d H:i:s'),
                'name' => trans('crudbooster.Privileges_Roles'),
                'icon' => 'fa fa-cog',
                'path' => 'privileges_roles',
                'table_name' => 'cms_privileges_roles',
                'controller' => 'PrivilegesRolesController',
                'is_protected' => 1,
                'is_active' => 1,
            ],
            [

                'created_at' => date('Y-m-d H:i:s'),
                'name' => trans('crudbooster.Users_Management'),
                'icon' => 'fa fa-users',
                'path' => 'users',
                'table_name' => 'cms_users',
                'controller' => 'AdminCmsUsersController',
                'is_protected' => 0,
                'is_active' => 1,
            ],
            [

                'created_at' => date('Y-m-d H:i:s'),
                'name' => trans('crudbooster.settings'),
                'icon' => 'fa fa-cog',
                'path' => 'settings',
                'table_name' => 'cms_settings',
                'controller' => 'SettingsController',
                'is_protected' => 1,
                'is_active' => 1,
            ],
            [

                'created_at' => date('Y-m-d H:i:s'),
                'name' => trans('crudbooster.Module_Generator'),
                'icon' => 'fa fa-database',
                'path' => 'module_generator',
                'table_name' => 'cms_moduls',
                'controller' => 'ModulsController',
                'is_protected' => 1,
                'is_active' => 1,
            ],
            [

                'created_at' => date('Y-m-d H:i:s'),
                'name' => trans('crudbooster.Menu_Management'),
                'icon' => 'fa fa-bars',
                'path' => 'menu_management',
                'table_name' => 'cms_menus',
                'controller' => 'MenusController',
                'is_protected' => 1,
                'is_active' => 1,
            ],
            [

                'created_at' => date('Y-m-d H:i:s'),
                'name' => trans('crudbooster.Email_Templates'),
                'icon' => 'fa fa-envelope-o',
                'path' => 'email_templates',
                'table_name' => 'cms_email_templates',
                'controller' => 'EmailTemplatesController',
                'is_protected' => 1,
                'is_active' => 1,
            ],
            [

                'created_at' => date('Y-m-d H:i:s'),
                'name' => trans('crudbooster.Statistic_Builder'),
                'icon' => 'fa fa-dashboard',
                'path' => 'statistic_builder',
                'table_name' => 'cms_statistics',
                'controller' => 'StatisticBuilderController',
                'is_protected' => 1,
                'is_active' => 1,
            ],
            [

                'created_at' => date('Y-m-d H:i:s'),
                'name' => trans('crudbooster.API_Generator'),
                'icon' => 'fa fa-cloud-download',
                'path' => 'api_generator',
                'table_name' => '',
                'controller' => 'ApiCustomController',
                'is_protected' => 1,
                'is_active' => 1,
            ],
            [

                'created_at' => date('Y-m-d H:i:s'),
                'name' => trans('crudbooster.Log_User_Access'),
                'icon' => 'fa fa-flag-o',
                'path' => 'logs',
                'table_name' => 'cms_logs',
                'controller' => 'LogsController',
                'is_protected' => 1,
                'is_active' => 1,
            ],
            [

                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'médecin',
                'icon' => 'fa fa-user-md',
                'path' => 'cms_users',
                'table_name' => 'cms_users',
                'controller' => 'AdminCmsUsers1Controller',
                'is_protected' => 1,
                'is_active' => 1,
            ],
            
            [

                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'secrétaire',
                'icon' => 'fa fa-user-plus',
                'path' => 'secretaire14',
                'table_name' => 'secretaire',
                'controller' => 'AdminSecrétaireController',
                'is_protected' => 1,
                'is_active' => 1,
            ],
            
            [

                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'patient',
                'icon' => 'fa fa-child',
                'path' => 'relation',
                'table_name' => 'relation',
                'controller' => 'AdminPatientController',
                'is_protected' => 1,
                'is_active' => 1,
            ],
        ];

        foreach ($data as $k => $d) {
            if (DB::table('cms_moduls')->where('name', $d['name'])->count()) {
                unset($data[$k]);
            }
        }

        DB::table('cms_moduls')->insert($data);
    }
}

class Cms_usersSeeder extends Seeder
{
    public function run()
    {

        if (DB::table('cms_users')->count() == 0) {
            $password = \Hash::make('123456');
            $cms_users = DB::table('cms_users')->insert([
                'created_at' => date('Y-m-d H:i:s'),
                'nom' => 'Super tbiby',
                'email' => 'admin@tbiby.com',
                'password' => $password,
                'id_cms_privileges' => 1,
                'status' => 'Active',
            ]);
        }
    }
}

