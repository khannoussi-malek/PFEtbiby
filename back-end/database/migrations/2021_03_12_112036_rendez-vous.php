<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RendezVous extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rendez_vous', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('patient_id')->unsigned()->nullable();
            $table->foreign('patient_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('medecin_id')->unsigned()->nullable();
            $table->foreign('medecin_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
            $table->string('etat')->nullable();
            $table->date('date_réservation');
            $table->date('date_acceptation');
            $table->date('date_dentré');
            $table->timestamps();
        });    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('rendez_vous', function (Blueprint $table) {
            //
            $table->dropIfExists('rendez_vous');
        });    }
}
