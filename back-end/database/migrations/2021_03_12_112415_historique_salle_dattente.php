<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class HistoriqueSalleDattente extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('historique_salle_dattente', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('patient_id')->unsigned()->nullable();
            $table->foreign('patient_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('medecin_id')->unsigned()->nullable();
            $table->foreign('medecin_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
            $table->string('etat')->nullable();
            $table->dateTime('date_reservation');
            $table->dateTime('date_acceptation');
            $table->dateTime('date_dentré');
            $table->dateTime('date_de_sortie');
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
        Schema::table('historique_salle_dattente', function (Blueprint $table) {
            //
            $table->dropIfExists('historique_salle_dattente');
        });
    }
}
