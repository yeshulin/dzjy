<?php

/**
 * Copyright (c) 2013-2017 http://www.syousoft.com All rights reserved.
 * Author: WelkinVan(welkinvan@qq.com)
 * Date: 6/6/2017
 * Time: 11:18 PM
 */
namespace plugins\sy_guestbook\validate;
use think\Validate;

class SyGuestbookValidate extends Validate
{
    protected $rule = [
        'name' => 'require',
        'tel' => 'require',
        'email' => 'email',
        'subject' => 'require',
        'message' => 'require',
    ];

    protected $message = [
        'name.require' => '{%validate_name}',
        'tel.require' => '{%validate_tel}',
        'email.email' => '{%validate_email}',
        'subject.require' => '{%validate_subject}',
        'message.require' => '{%validate_message}',
    ];

}