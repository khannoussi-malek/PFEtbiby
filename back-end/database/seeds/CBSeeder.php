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

        $this->command->info('Updating the data completed !');
    }
}

class cms_apicustom extends seeder {
    public function run()
    {
        if(DB::table('cms_apicustom')->count() == 0){
            DB::table('cms_apicustom')->insert([
                'permalink' => 'login',
                'tabel' => 'cms_users',
                'aksi' => 'detail',
                'nama' => 'login',
                'method_type' => 'post',
                'parameters' => 'a:2:{i:0;a:5:{s:4:"name";s:4:"user";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}i:1;a:5:{s:4:"name";s:8:"password";s:4:"type";s:8:"password";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:13:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:3:"nom";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:6:"prenom";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:9:"telephone";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:5:"photo";s:4:"type";s:5:"image";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:5:"email";s:4:"type";s:5:"email";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:3:"cin";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:7;a:4:{s:4:"name";s:8:"password";s:4:"type";s:8:"password";s:8:"subquery";N;s:4:"used";s:1:"1";}i:8;a:4:{s:4:"name";s:17:"id_cms_privileges";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:9;a:4:{s:4:"name";s:19:"cms_privileges_name";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:10;a:4:{s:4:"name";s:28:"cms_privileges_is_superadmin";s:4:"type";s:7:"tinyint";s:8:"subquery";N;s:4:"used";s:1:"1";}i:11;a:4:{s:4:"name";s:26:"cms_privileges_theme_color";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:12;a:4:{s:4:"name";s:6:"status";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            DB::table('cms_apicustom')->insert([
                'permalink' => 'singup',
                'tabel' => 'cms_users',
                'aksi' => 'save_add',
                'nama' => 'singup',
                'method_type' => 'post',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:3:"nom";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:13:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:3:"nom";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:6:"prenom";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:9:"telephone";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:5:"photo";s:4:"type";s:5:"image";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:5:"email";s:4:"type";s:5:"email";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:3:"cin";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:7;a:4:{s:4:"name";s:8:"password";s:4:"type";s:8:"password";s:8:"subquery";N;s:4:"used";s:1:"1";}i:8;a:4:{s:4:"name";s:17:"id_cms_privileges";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:9;a:4:{s:4:"name";s:19:"cms_privileges_name";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:10;a:4:{s:4:"name";s:28:"cms_privileges_is_superadmin";s:4:"type";s:7:"tinyint";s:8:"subquery";N;s:4:"used";s:1:"1";}i:11;a:4:{s:4:"name";s:26:"cms_privileges_theme_color";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:12;a:4:{s:4:"name";s:6:"status";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            DB::table('cms_apicustom')->insert([
                'permalink' => 'rmp',
                'tabel' => 'relation',
                'aksi' => 'detail',
                'nama' => 'relation medicine patient',
                'method_type' => 'post',
                'parameters' => 'a:2:{i:0;a:5:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}i:1;a:5:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:3:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            DB::table('cms_apicustom')->insert([
                'permalink' => 'lrmp',
                'tabel' => 'relation',
                'aksi' => 'list',
                'nama' => 'liste relation medicine patient',
                'method_type' => 'get',
                'parameters' => 'a:2:{i:0;a:5:{s:4:"name";s:10:"patient_id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}i:1;a:5:{s:4:"name";s:10:"medecin_id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:3:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            DB::table('cms_apicustom')->insert([
                'permalink' => 'listpatientdashboard',
                'tabel' => 'relation',
                'aksi' => 'list',
                'nama' => 'ListPatientDashboard',
                'method_type' => 'get',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:3:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            DB::table('cms_apicustom')->insert([
                'permalink' => 'cr',
                'tabel' => 'rendez_vous',
                'aksi' => 'save_add',
                'nama' => 'cr',
                'method_type' => 'post',
                'parameters' => 'a:4:{i:0;a:5:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:1;a:5:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:2;a:5:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:3;a:5:{s:4:"name";s:17:"date_réservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:7:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:17:"date_réservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:16:"date_acceptation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:12:"date_dentré";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);  
            DB::table('cms_apicustom')->insert([
                'permalink' => 'listrm',
                'tabel' => 'rendez_vous',
                'aksi' => 'list',
                'nama' => 'list rendez vous medecine',
                'method_type' => 'get',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:7:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:16:"date_acceptation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:12:"date_dentré";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            DB::table('cms_apicustom')->insert([
                'permalink' => 'updater',
                'tabel' => 'rendez_vous',
                'aksi' => 'save_edit',
                'nama' => 'updaterendez_vous',
                'method_type' => 'post',
                'parameters' => 'a:2:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:1;a:5:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:7:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:16:"date_acceptation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:12:"date_dentré";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            DB::table('cms_apicustom')->insert([
                'permalink' => 'deleter',
                'tabel' => 'rendez_vous',
                'aksi' => 'delete',
                'nama' => 'deleterendez_vous',
                'method_type' => 'post',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:7:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:16:"date_acceptation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:12:"date_dentré";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            DB::table('cms_apicustom')->insert([
                'permalink' => 'lrd',
                'tabel' => 'rendez_vous',
                'aksi' => 'list',
                'nama' => 'List ReservationDashboard',
                'method_type' => 'get',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:7:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:16:"date_acceptation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:12:"date_dentré";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            DB::table('cms_apicustom')->insert([
                'permalink' => 'cp',
                'tabel' => 'rendez_vous',
                'aksi' => 'list',
                'nama' => 'Consultation Patient',
                'method_type' => 'get',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:7:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:16:"date_acceptation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:12:"date_dentré";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            DB::table('cms_apicustom')->insert([
                'permalink' => 'pm',
                'tabel' => 'relation',
                'aksi' => 'list',
                'nama' => 'realation patien medecin',
                'method_type' => 'get',
                'parameters' => 'a:1:{i:0;a:5:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:6:"config";N;s:8:"required";s:1:"0";s:4:"used";s:1:"0";}}',
                'responses' => 'a:3:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            DB::table('cms_apicustom')->insert([
                'permalink' => 'pe',
                'tabel' => 'rendez_vous',
                'aksi' => 'save_edit',
                'nama' => 'patient entrer',
                'method_type' => 'post',
                'parameters' => 'a:2:{i:0;a:5:{s:4:"name";s:2:"id";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}i:1;a:5:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:6:"config";N;s:8:"required";s:1:"1";s:4:"used";s:1:"1";}}',
                'responses' => 'a:7:{i:0;a:4:{s:4:"name";s:2:"id";s:4:"type";s:3:"int";s:8:"subquery";N;s:4:"used";s:1:"1";}i:1;a:4:{s:4:"name";s:10:"patient_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:2;a:4:{s:4:"name";s:10:"medecin_id";s:4:"type";s:7:"integer";s:8:"subquery";N;s:4:"used";s:1:"1";}i:3;a:4:{s:4:"name";s:4:"etat";s:4:"type";s:6:"string";s:8:"subquery";N;s:4:"used";s:1:"1";}i:4;a:4:{s:4:"name";s:16:"date_reservation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:5;a:4:{s:4:"name";s:16:"date_acceptation";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}i:6;a:4:{s:4:"name";s:12:"date_dentré";s:4:"type";s:23:"date_format:Y-m-d H:i:s";s:8:"subquery";N;s:4:"used";s:1:"1";}}',
            ]);
            DB::table('cms_apicustom')->insert([
                'permalink' => 'pdcm',
                'tabel' => 'rendez_vous',
                'aksi' => 'list',
                'nama' => 'liste patient donneé consultation de médecine',
                'method_type' => 'get',
                'parameters' => 'a:0:{}',
                'responses' => 'a:0:{}',
            ]);
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
                'content' => '',
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
                'theme_color' => 'skin-red',
            ]);
        }
        if (DB::table('cms_privileges')->where('name', 'medecin')->count() == 0) {
            DB::table('cms_privileges')->insert([
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'medecin',
                'is_superadmin' => 0,
                'theme_color' => 'skin-purple-light',
            ]);
        }
        
        if (DB::table('cms_privileges')->where('name', 'secretaire')->count() == 0) {
            DB::table('cms_privileges')->insert([
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'secretaire',
                'is_superadmin' => 0,
                'theme_color' => 'skin-purple-light',
            ]);
        }
        
        if (DB::table('cms_privileges')->where('name', 'patient')->count() == 0) {
            DB::table('cms_privileges')->insert([
                'created_at' => date('Y-m-d H:i:s'),
                'name' => 'patient',
                'is_superadmin' => 0,
                'theme_color' => 'skin-purple-light',
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

