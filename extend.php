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

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
    new Extend\Locales(__DIR__ . '/resources/locale')
];
