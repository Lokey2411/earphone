<?php

use App\Http\Middleware\Cors;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        //
        $middleware->alias([
            'cors' => Cors::class
        ]);
        $middleware->validateCsrfTokens(except: [
            'upload-cv', // <-- loại trừ tuyến đường này
            "upload/image/post",
            "otp/send",
            "upload/file/post"
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();