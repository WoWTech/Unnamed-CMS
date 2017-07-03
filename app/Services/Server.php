<?php

namespace App\Services;

use Illuminate\Support\Facades\{Cache, DB};
use App\Character;

class Server
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

    public static function playersOnline()
    {
        $online = Cache::remember('players_online', 0.1 , function () {
            return static::getOnlinePlayers();
        });

        return $online;
    }


    // For now it's hardcoded, because the only template we got
    // at the moment supports only 1 realm.

    private static function getServerStatus()
    {

        $realms = config('server.realms');

        $result = @fsockopen($realms[0]['ip'], $realms[0]['port'], $errNum, $errMsg, 1) === false ? false : true;

        return (object) array('status' => $result, 'name' => $realms[0]['name'], 'port' => $realms[0]['port'], 'ip' => $realms[0]['ip']);
    }
    
    private static function getOnlinePlayers()
    {
        $playersOnline = DB::connection('characters')->table('characters')->where('online', 0)->get(['name', 'race', 'class', 'level']);

        $allianceOnline = $playersOnline->whereIn('race', [1,3,4,7,11])->count();
        $hordeOnline    = $playersOnline->whereIn('race', [2,5,6,8,10])->count();

        return (object) array('all' => $playersOnline, 'horde' => $hordeOnline, 'alliance' => $allianceOnline);
    }

}
