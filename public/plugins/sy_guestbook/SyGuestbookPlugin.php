<?php
/**
 * Copyright (c) 2013-2017 http://www.syousoft.com All rights reserved.
 * Author: WelkinVan(welkinvan@qq.com)
 * Date: 6/6/2017
 * Time: 11:18 PM
 */

namespace plugins\sy_guestbook;//留言板插件
use cmf\lib\Plugin;

use think\lang;
use think\Cookie;
use think\DB;

class SyGuestbookPlugin extends Plugin
{

    public $info = [
        'name' => 'SyGuestbook',
        'title' => '留言板',
        'description' => '中英双语网站留言板',
        'status' => 1,
        'author' => 'UpStream',
        'version' => '1.1',
        'demo_url' => 'http://www.syousoft.com',
        'author_url' => 'http://www.syousoft.com'
    ];

    public $hasAdmin = 1;//插件是否有后台管理界面

    // 插件安装
    public function install()
    {
        //读取数据库配置内容
        $dbConfig = Config('database');
        $dbSql = cmf_split_sql(PLUGINS_PATH . 'sy_guestbook/data/guestbook.sql', $dbConfig['prefix'], $dbConfig['charset']);

        //检查合法性
        if (empty($dbConfig) || empty($dbSql)) {
            $this->error("非法安装!");
        }
        $db = Db::connect($dbConfig);
        foreach ($dbSql as $key => $sql) {
            try {
                $db->execute($sql);
            } catch (\Exception $e) {
                return false;
            }
        }
        return true;
        //安装成功返回true，失败false
        //return true;
    }

    // 插件卸载
    public function uninstall()
    {
        //读取数据库配置内容
        $dbConfig = Config('database');
        $sql = "DROP TABLE IF EXISTS " . $dbConfig['prefix'] . "plugin_sy_guestbook";

        //检查合法性
        if (empty($dbConfig) || empty($sql)) {
            $this->error("非法安装!");
        }
        $db = Db::connect($dbConfig);

        try {
            $db->execute($sql);
        } catch (\Exception $e) {
            return false;
        }

        return true;
        //卸载成功返回true，失败false
    }

    //实现的guestbook钩子方法
    public function guestbook($param)

    {
        $config = $this->getConfig();
        //读取当前系统语言，结合本人的sy_switch_lang_demo插件使用
        $lang = Cookie::get('lang');
        $langPath = $this->getPluginPath();
        //判断当前语言获取当前语言包
        if ($lang == "en" || $lang == "en-us" || $lang == "en-gb") {
            lang::load($langPath . 'lang/en-us.php');
            //重新复赋值配置文件值
            $config['desc'] = $config['desc_en'];
            $config['messagesent'] = $config['messagesent_en'];
        } else {
            lang::load($langPath . 'lang/zh-cn.php');
            $config['desc'] = $config['desc_cn'];
            $config['messagesent'] = $config['messagesent_cn'];
        }

        $this->assign($config);

        return $this->fetch('widget');
    }

    //实现的before_body_end钩子方法挂载js代码
    public function beforeHeadEnd($param)
    {
        echo $this->fetch('css');
    }

    //实现的before_body_end钩子方法挂载js代码
    public function beforeBodyEnd($param)
    {
        echo $this->fetch('js');
    }

}