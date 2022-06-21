<?php
require_once('plugins/login-servers.php');

return new AdminerLoginServers
([ 'PostgreSQL' =>
    [ 'server' => $_ENV['ADMINER_DEFAULT_DB_HOST'],
	  'driver' => $_ENV['ADMINER_DEFAULT_DB_DRIVER']
    ]
]);