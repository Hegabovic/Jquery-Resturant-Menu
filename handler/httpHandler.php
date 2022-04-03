<?php

use Illuminate\Database\Capsule\Manager as Capsule;
use Model\DatabaseConnector;

class httpHandler{
    public function __construct()
    {
        $dbc = new DatabaseConnector();
    }

    function handlingHttp(){
        $params = explode('/',substr($_SERVER["PATH_INFO"],1));

    }
}