<?php

$middlewareGroups = [
    'api' => [
        \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        'throttle:api',
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],
];

$middlewareAliases = [
    'cors' => \Illuminate\Http\Middleware\HandleCors::class,
];

$middleware = [
    \App\Http\Middleware\CorsMiddleware::class,
];

