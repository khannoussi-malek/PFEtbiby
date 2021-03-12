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
            $table->increments('id');
            $table->integer('certificat_id')->unsigned()->nullable();
            $table->foreign('certificat_id')->references('id')->on('certificat')->onDelete('cascade')->onUpdate('cascade');;
            $table->string('type')->nullable();
            $table->string('Description')->nullable();
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
