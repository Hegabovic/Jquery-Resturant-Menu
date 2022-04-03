<?php
require "vendor/autoload.php";

use Services\MealServices;

$meal = new MealServices();


$params = explode('/', substr($_SERVER['PATH_INFO'], 1));

if ($params[0] === 'items') {
    header('Content-Type: application/json');
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            if (!isset($params[1]) || $params[1] === '') {
                echo $meal->addProduct("botto", "2werwrwer", 12, "qwewqeeqwe");
            } else {
                echo "dsgsrgsdfds";
            }
    }
}

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
            crossorigin="anonymous"
    />
    <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
    />
    <link rel="stylesheet" href="style.css">
    <script src="jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
    <script src="app.js"></script>
</head>
<body>
<!-- NavBar-->
<nav class="navbar navbar-expand-lg navbar-light navbar-dark bg-dark">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Online Store</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>

            </ul>
            <form class="d-flex">
                <input class="form-control me-4 bg-white" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-danger" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
<!--End of NavBar-->
<div class="container1">
    <div class="ui-widget-content leftSide" id="products">
    

    </div>

    <div>
        <div style="display: flex;align-items: center;justify-content: center;padding-top: 10px;color: antiquewhite">
            <h1> Shopping Cart <i class="bi bi-cart-dash"></i></h1>
        </div>
        <div class="rightSide">

            <div class="summary">
                <table class="table table-light table-striped table-hover m-5" style="width:90%">
                    <tr><th>Sub Total</th><td id="subT"></td></tr>
                    <tr><th>Delivery</th><td id="subD"></td></tr>
                    <tr><th>14% VAT</th><td id="subV"></td></tr>
                    <tr><th>Order Total</th><td id="tot"></td></tr>
                </table>

            </div>
            <div id="droppable">


            </div>
        </div>
    </div>
</div>
</body>
</html>
