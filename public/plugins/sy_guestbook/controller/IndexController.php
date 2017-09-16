<?php
/**
 * Copyright (c) 2013-2017 http://www.syousoft.com All rights reserved.
 * Author: WelkinVan(welkinvan@qq.com)
 * Date: 6/6/2017
 * Time: 11:18 PM
 */
namespace plugins\sy_guestbook\controller;

use cmf\controller\PluginBaseController;
use plugins\sy_guestbook\Model\PluginSyGuestbookModel;

use think\lang;
use think\Cookie;

class IndexController extends PluginBaseController
{


    /**
     * 提交留言
     */
    public function addMsg()
    {
        // 获取post数据
        $data = $this->request->param();
        //读取当前系统语言，结合本人的sy_switch_lang_demo插件使用
        $lang = Cookie::get('lang');
        //获取当前插件目录地址
        $langPath = $this-> getPlugin()->getPluginPath();
        //判断当前语言获取当前语言包
        if ($lang == "en" || $lang == "en-us" || $lang == "en-gb") {
            lang::load($langPath . 'lang/en-us.php');

        } else {
            lang::load($langPath . 'lang/zh-cn.php');
        }
        // 数据验证
        $result = $this->validate($data, 'SyGuestbook');
        if ($result !== true) {
            $this->error($result);
        }
        // 验证码校验
        if (!cmf_captcha_check($data['captcha'])) {
            $this->error(lang('add_code'));
        }
        // 实例化模型
        $GuestbookModel = new PluginSyGuestbookModel();
        $GuestbookModel->allowField(true)->data($data, true)->save();
        $this->success(lang('add_success'));
    }

}
