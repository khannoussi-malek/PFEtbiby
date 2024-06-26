<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CertificatType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Certificat_type', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('type')->nullable();
            $table->longText('structure')->nullable();
            $table->integer('cms_users_id')->unsigned()->nullable();
            $table->foreign('cms_users_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('Certificat_type', function (Blueprint $table) {
            //
            $table->dropIfExists('Certificat_type');
        });
    }
}
