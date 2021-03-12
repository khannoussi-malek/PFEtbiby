<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SousDomaine extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sous_domaine', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('domaine_id')->unsigned()->nullable();
            $table->foreign('domaine_id')->references('id')->on('domaine')->onDelete('cascade')->onUpdate('cascade');
            $table->string('nom')->nullable();
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
        Schema::table('sous_domaine', function (Blueprint $table) {
            //
            $table->dropIfExists('sous_domaine');
        });
    }
}
