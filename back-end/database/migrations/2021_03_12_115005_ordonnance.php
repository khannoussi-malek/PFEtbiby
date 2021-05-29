<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Ordonnance extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ordonnance', function (Blueprint $table) {
           


            $table->Increments('id');
            $table->integer('consultation_id')->unsigned()->nullable();
            $table->foreign('consultation_id')->references('id')->on('consultation')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('patient_id')->unsigned()->nullable();
            $table->foreign('patient_id')->references('id')->on('cms_users')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('medicament_id')->unsigned()->nullable();
            $table->foreign('medicament_id')->references('id')->on('medicament')->onDelete('cascade')->onUpdate('cascade');
            $table->date('date_debut');
            $table->date('date_fin');
            $table->string('lorsqueVousPrenezLeMedicament')->nullable();
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
        Schema::table('ordonnance', function (Blueprint $table) {
            //
            $table->dropIfExists('ordonnance');
        });
    }
}
