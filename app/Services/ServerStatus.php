<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;

class ServerStatus
{

    // Caching server status for 10 seconds
    // TODO: Replace static value with dynamic from config

    public static function status()
    {
        $status = Cache::remember('realm_status', 0.1 , function () {
            return static::getServerStatus();
        });

        return $status;
    }

    // For now it's hardcoded, because the only template we got
    // at the moment supports only 1 realm.

    public static function getServerStatus()
    {

        $realms = config('server.realms');

        $result = @fsockopen($realms[0]['ip'], $realms[0]['port'], $errNum, $errMsg, 1) === false ?: true;

        return (object)array('status' => $result, 'name' => $realms[0]['name'], 'port' => $realms[0]['port'], 'ip' => $realms[0]['ip']);
    }

}
