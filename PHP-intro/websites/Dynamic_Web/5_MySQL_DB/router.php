<?php

$uri = parse_url($_SERVER['REQUEST_URI'])['path']; 


/*
if ($uri === '/') {
    $heading = 'Home';
    require "controllers/index.php";

} elseif ($uri === '/about') {
    $heading = 'About Us';
    require "controllers/about.php";

} elseif ($uri === '/contact') {
    $heading = 'Contact Us';
    require "controllers/contact.php";

} else {
    http_response_code(404);
    require "Views/404.view.php";
}

*/

$routes = [

    '/' => 'controllers/index.php',
    '/about' => 'controllers/about.php',
    '/contact' => 'controllers/contact.php',
];

function routeToController($uri, $routes) {

    if (array_key_exists($uri, $routes)) {

    $heading = $uri === '/' ? 'Home' : ucfirst(trim($uri, '/'));

    require $routes[$uri];

} else {

    abort();
}

}

function abort($code = 404) {
    http_response_code($code);
    $heading = "Error $code";
    require "Views/{$code}.view.php";

    die();
}

routeToController($uri, $routes);

