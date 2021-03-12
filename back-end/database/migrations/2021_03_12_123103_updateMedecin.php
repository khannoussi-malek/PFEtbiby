<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateMedecin extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('medecin', function (Blueprint $table) {
            $table->integer('domaine_id')->unsigned()->nullable();
            $table->foreign('domaine_id')->references('id')->on('domaine')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('sous_domaine_id')->unsigned()->nullable();
            $table->foreign('sous_domaine_id')->references('id')->on('sous_domaine')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('medecin', function (Blueprint $table) {
            $table->dropColumn(['domaine_id', 'sous_domaine_id']);

        });
    }
}
