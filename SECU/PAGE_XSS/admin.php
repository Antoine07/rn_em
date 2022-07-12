<?php

session_start();

if(isset($_SESSION['pass'])){
    print_r("ADMIN");
}