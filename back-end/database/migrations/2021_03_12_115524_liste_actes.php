<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ListeActes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('liste_actes', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('code')->nullable();
            $table->string('designation')->nullable();
            $table->decimal('price',9,3);
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
        Schema::table('liste_actes', function (Blueprint $table) {
            //
            $table->dropIfExists('liste_actes');
        });
    }
}
