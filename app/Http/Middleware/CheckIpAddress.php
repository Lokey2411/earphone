<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckIpAddress
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->ip() != '116.96.44.134') {
            return response()->view("unauthorized", [
                "error"=>403,
                "ip"=>$request->ip(),
                "errorMessage"=>"Forbidden",
                "message"=>"Bạn không thể truy cập vào trang này"
            ]);
        }

        return $next($request);
    }
}