<?php

namespace App\Server\Traits;

use Illuminate\Bus\Queuable;
use Illuminate\Foundation\Bus\DispatchesJobs;

trait WebsocketQueue
{
    use DispatchesJobs;

    protected function queue(Queuable $job)
    {
        $job->onQueue(env('SERVER_QUEUE');
            ->onConnection(env('SERVER_QUEUE_DRIVER', env('QUEUE_DRIVER', 'default')));

        return $this->dispatch($job);
    }
}
