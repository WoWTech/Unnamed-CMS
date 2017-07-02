<?php

namespace App\Services;

class ServerStatus
{

    // For now it's hardcoded, because the only template we got
    // at the moment supports only 1 realm.

    public static function getServerStatus(array $realms = null)
    {
        if ($realms === null)
        {
            $realms = config('server.realms');
        }

        $result = @fsockopen($realms[0]['ip'], $realms[0]['port'], $errNum, $errMsg, 1);

        return (object)array('status' => $result, 'name' => $realms[0]['name'], 'port' => $realms[0]['port'], 'ip' => $realms[0]['ip']);
    }

}
