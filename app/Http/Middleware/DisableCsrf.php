<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class DisableCsrf
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        Log::info('DisableCsrf middleware invoked');
        Log::info('CSRF token before removal: ' . $request->session()->token());
        // Tạm thời tắt CSRF cho middleware này
        $request->headers->remove('X-CSRF-TOKEN');
        $request->headers->remove('X-XSRF-TOKEN');
        $request->session()->forget('_token');
        Log::info('CSRF token removed');
        Log::info('CSRF token after removal: ' . $request->session()->token());
        return $next($request);
    }
}