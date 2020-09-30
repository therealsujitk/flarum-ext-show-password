<?php

/*
 * This file is part of therealsujitk/flarum-ext-show-password.
 *
 * Copyright (c) 2020 Sujit Kumar.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Therealsujitk\ShowPassword;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;

return [
	(new Extend\Frontend('forum'))
		->js(__DIR__.'/js/dist/forum.js'),
	(new Extend\Frontend('admin'))
		->js(__DIR__.'/js/dist/admin.js'),
	new Extend\Locales(__DIR__ . '/resources/locale'),
	function (Dispatcher $dispatcher) {
		$dispatcher->subscribe(Listeners\SaveSettings::class);
	},
];
