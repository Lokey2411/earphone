<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        $origin = $request->headers->get('Origin');
        $allowedOrigins = ['http://localhost:3000', 'http://192.168.1.8:3000', 'http://localhost:8000'];

        if (strpos($origin, 'thanhcoffee.com') !== false || in_array($origin, $allowedOrigins)) {
            if ($request->isMethod('OPTIONS')) {
                return response()->json('OK', 200, [
                    'Access-Control-Allow-Origin' => $origin,
                    'Access-Control-Allow-Methods' => 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers' => 'X-Requested-With, Content-Type, X-Token-Auth, Authorization',
                    'Access-Control-Allow-Credentials' => 'true',
                ]);
            }

            return $next($request)
                ->header('Access-Control-Allow-Origin', $origin)
                ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
                ->header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, X-Token-Auth, Authorization')
                ->header('Access-Control-Allow-Credentials', 'true');
        }

        return $next($request);
    }
}