<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Medicament extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicament', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('consultation_id')->unsigned()->nullable();
            $table->foreign('consultation_id')->references('id')->on('consultation')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('medecin_id')->unsigned()->nullable();
            $table->foreign('medecin_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('ordonnance_id')->unsigned()->nullable();
            $table->foreign('ordonnance_id')->references('id')->on('ordonnance')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('patient_id')->unsigned()->nullable();
            $table->foreign('patient_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
            $table->date('date_debut');
            $table->date('date_fin');
            $table->string('quantité')->nullable();
            $table->string('NBR_FOIS_JOURS')->nullable();
            $table->string('duree_entre_chaque_medicament')->nullable();
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
        Schema::table('medicament', function (Blueprint $table) {
            //
            $table->dropIfExists('medicament');
        });
    }
}
