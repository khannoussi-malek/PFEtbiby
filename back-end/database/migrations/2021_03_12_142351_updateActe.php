<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateActe extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('acte', function (Blueprint $table) {
            $table->integer('liste_actes_id')->unsigned()->nullable();
            $table->foreign('liste_actes_id')->references('id')->on('liste_actes')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('acte', function (Blueprint $table) {
            //
            $table->dropColumn('liste_actes_id');
        });
    }
}
