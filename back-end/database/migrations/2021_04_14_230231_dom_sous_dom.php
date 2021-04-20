<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DomSousDom extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dom_sous_dom', function (Blueprint $table) {
            $table->increments('id');
            $table->string('domaine')->nullable();
            $table->string('sous_domaine_')->nullable();
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
        Schema::table('dom_sous_dom', function (Blueprint $table) {
            //
            $table->dropIfExists('dom_sous_dom');
        });
    }
}