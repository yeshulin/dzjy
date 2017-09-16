//var Util = !Util ? {} : Util;
var Util = Util || {};
(function (myUtil) {
    /**
     * <p>
     * Title: _stringTrim
     * <p>
     * Description: 清除字符串两端的空白
     *
     * @author       fangtl.cs@admin.com.cn
     * @date         2016年12月17日
     *
     * @param {string} str 需要去除空白的字符串,当该参数不为字符串时会抛出错误
     * @returns {string} 两端无空白的字符串
     * @throws Error 传入参数不是字符串时抛出该错误
     */
    function _stringTrim(str) {
        if (!_isStringObj(str)) {
            throw new Error("param is not a string.");
        }
        if (!str) {
            return str;
        } else {
            return str.replace(/^[\s]+|[\s]+$/g, "");
        }
    }

    /**
     * <p>
     * Title: _isEmptyString
     * <p>
     * Description: 判断字符串是否为空
     *
     * @author       fangtl.cs@admin.com.cn
     * @date         2016年12月17日
     *
     * @param {string} str 需要判断的字符串
     * @returns {boolean} true:字符串为空;false:字符串不为空
     * @throws Error 传入参数不是字符串时抛出该错误
     */
    function _isEmptyString(str) {
        if (!_isStringObj(str)) {
            throw new Error("param is not a string.");
        }
        return !(str && str.length > 0);
    }

    /**
     * <p>
     * Title: _isBlankString
     * <p>
     * Description: 判断字符串是否为空白
     *
     * @author       fangtl.cs@admin.com.cn
     * @date         2016年12月17日
     *
     * @param {string} str 需要判断的字符串
     * @returns {boolean} true:字符串为空白;false:字符串不为空白
     * @throws Error 传入参数不是字符串时抛出该错误
     */
    function _isBlankString(str) {
        return !(str && _stringTrim(str).length > 0);
    }

    /**
     * <p>
     * Title: _isStringObj
     * <p>
     * Description: 判断 obj 是否是一个字符串
     *
     * @author       fangtl.cs@admin.com.cn
     * @date         2016年12月17日
     *
     * @param {*} obj
     * @return {Boolean} true：obj 是字符串； false:不是字符串
     */
    function _isStringObj(obj) {
        return Object.prototype.toString.call(obj) === "[object String]";

    }

    /**
     * <p>
     * Title: _isArray
     * <p>
     * Description: 判断 obj 是否是数组
     *
     * @author       fangtl.cs@admin.com.cn
     * @date         2017年01月15日
     *
     * @param {*} obj
     * @return {Boolean} true：obj 是数组； false:不是数组
     */
    function _isArray(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    }



    /**
     * <p>
     * Title: _getFileExtensions
     * <p>
     * Description: 获取文件的扩展名/后缀名
     * <pre> EnrollUtil.getFileExtensions("test.js") --> js </pre>
     *
     * @author       fangtl.cs@admin.com.cn
     * @date         2016年12月17日
     *
     * @param {string} filename 文件名
     * @returns {string} 文件的扩展名
     */
    function _getFileExtensions(filename) {
        if (!filename || !_isStringObj(filename)) {
            return "";
        }
        var name = filename;
        var index = name.lastIndexOf(".");
        if (index < 0) {
            return "";
        }
        return name.substring(index + 1);
    }


    /**
     * <p>
     * Title:        _isValidFile
     * <p>
     * Description:  是否是符合要求的文件
     * e.g. Util.isValidFile("/x/xx/xxx.png", ["jpg", "jpeg", "png"]); //true
     *      Util.isValidFile("xxx.png", ["jpg", "jpeg", "png"]); //true
     *      Util.isValidFile("xxx", ["jpg", "jpeg", "png"]); //false
     *
     * @author       fangtl.cs@admin.com.cn
     * @date         2017年01月15日
     * @param {String} fileName 文件名或文件的相对路径或文件绝对路径
     * @param {Array} filenameExtensionArray 支持的文件扩展名数组，数组中的元素必须是字符串
     * @return {boolean} true:支持该文件，否则不支持该文件
     */
    function _isValidFile(fileName, filenameExtensionArray) {
        if (_isBlankString(fileName) || !_isArray(filenameExtensionArray)) {
            return false;
        }
        var filenameExtension = _getFileExtensions(fileName);
        filenameExtension = !filenameExtension ? "" : filenameExtension.toLowerCase();
        var arrLength = filenameExtensionArray.length;
        var item = "";
        for (var index = 0; index < arrLength; index ++) {
            item = filenameExtensionArray[index];
            item = Util.isBlankString(item) ? "" : item.toLowerCase();
            if (filenameExtension === item) {
                return true;
            }
        }
        return false;
    }

    /**
     * <p>
     * Title:        _isNum
     * <p>
     * Description: 是否是一个数字
     *
     * @author       fangtl.cs@admin.com.cn
     * @date         2016年12月18日
     *
     * @param {*} obj 需要判断的对象
     * @returns {boolean} true:是一个数字,false:不是数字
     */
    function _isNum(obj) {
        return _isStringObj(obj) && _isBlankString(obj) ? false : !isNaN(obj);
    }

    /**
     * <p>
     * Title:        _formatTimeWithSecond
     * <p>
     * Description:  格式化时间
     * e.g. Util.formatTimeWithSecond(1234) ---> 00:20:34
     * e.g. Util.formatTimeWithSecond("1234") ---> 00:20:34
     *
     * @author       fangtl.cs@admin.com.cn
     * @date         2016年12月18日
     *
     * @param {string|number} second 需要格式化的秒数
     * @return {string} 格式化后的时间，格式为HH:mm:ss
     */
    function _formatTimeWithSecond(second) {
        if (!_isNum(second)) {
            throw new TypeError("Parameter second[" + second + "] is not a number.");
        }
        if (second < 0) {
            throw new Error("Parameter second[" + second + "] must greater than 0.");
        }
        var hour = 0;
        var minute = 0;

        if (second > 60) {
            minute = parseInt(second / 60);
            second = parseInt(second % 60);
        }
        if (minute > 60) {
            hour = parseInt(minute / 60);
            minute = parseInt(minute % 60);
        }
        second = parseInt(second);
        second = second < 10 ? "0" + second : "" + second;
        minute = minute < 10 ? "0" + minute : "" + minute;
        hour = hour < 10 ? "0" + hour : "" + hour;
        return hour + ":" + minute + ":" + second;
    }

    /**
     * <p>
     * Title:        _matchRegex
     * <p>
     * Description:  匹配正则表达式
     * e.g. Util.matchRegex("1234", /^\d+$/g);
     *
     * @author       fangtl.cs@admin.com.cn
     * @date         2016年12月18日
     *
     * @param {*} obj 被匹配的对象
     * @param {RegExp} regex 正则表达式(正则表达式格式错误时抛出错误)
     * @return {boolean} true:匹配正则表达式,false:不匹配正则表达式
     */
    function _matchRegex(obj, regex) {
        //console.log(regex);
        return ((!obj || !regex) ? false : obj.match(regex));
    }

    /**
     * 定义正则表达式
     */
    var _Regex = {
        //匹配 字母大小写、数字、-、_   用于编号、ID等唯一标识
        uniqueId: /^[a-zA-Z0-9_-]+$/
        //匹配 简繁中文 (字符串前后不能有空白)
        , chinese: /^([\u4E00-\u9FFF]+)$/
        //匹配邮箱
        , email: /^\w+([-+\.]\w+)*@\w+([-\.]\w+)*\.\w+([-\.]\w+)*$/
        //,ip: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/g
        , ip: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/
        //匹配邮编 http://baike.baidu.com/link?url=7BgR7gx--HVHQjSAnpsgtOtH-BTqfiTNZjtK6QI9RYaOybFY9pEMxWY_P4kc_NNAfvImIxrFZJQwBYNjfF2TSudqQRjlepcd5AGZj5m1ekeYSF8Y1_lRYzqcoj6mOdrH#4_7
        , postcode: /^\d{6}$/
        , qq: /^\d{5,12}$/
        //,phone: /^(((\d{3}-\d{8})|(\d{4}-\d{7})){1}(-\d{1,4})?)|(([1-9]\d{10})|([1-9]\d{2}-\d{8})|([1-9]\d{2}-\d{4}-\d{4}))$/
        ,phone: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
        ,mobilePhone: /^([1-9]\d{10})|([1-9]\d{2}-\d{8})|([1-9]\d{2}-\d{4}-\d{4})$/
//        ,idcard: /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/
        ,idcard: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
        //匹配非负数
        ,positive: /^[1-9]\d*|0$/
        ,host: /^(\w+\.\w+(\.\w+)*)|^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3})$/
        ,context: /^\/[a-zA-Z]+[-_]?[a-zA-Z]+$/
        ,input_context: /^\/[a-zA-Z]*$/
        ,port: /^[1-9]+[0-9]*$/
        ,fee:/^\d+(\.\d{1,2})?$/
    };

    /**
     * <p>
     * Title:        _isEmail
     * <p>
     * Description:  匹配邮箱格式
     * e.g. Util.isEmail("test@test.com"[,regex]);
     *
     * @author       fangtl.cs@admin.com.cn
     * @date         2016年12月18日
     *
     * @param {string} email 邮箱字符串
     * @param {RegExp} [regex] 邮箱格式正则表达式，该参数可选(正则表达式格式错误时抛出错误)
     * @return {boolean} true:是邮箱格式,false:不是邮箱格式
     */
    function _isEmail(email, regex) {
        if (!regex) {
            regex = _Regex.email;
        }
        return _matchRegex(email, regex);
    }

    /**
     * 判断浏览器是否是IE浏览器(不包含Edge浏览器)
     * @returns {boolean} true:是IE浏览器，否则不是IE浏览器
     */
    function _isIE() { //ie?
        return (!!window.ActiveXObject || "ActiveXObject" in window);
    }

    /**
     * <p>
     * Title:        _centerModals
     * <p>
     * Description:  居中模态框
     *
     * @author       fangtl.cs@admin.com.cn
     * @date         2016年12月29日
     *
     * @param selector 选择器 e.g. div#my_modal或div.my_modal或#my_modal或.modal
     * @param offset 偏移量 e.g. 10px或10%
     */
    function _centerModals(selector, offset) {
        offset = _isNum(offset) ? parseInt(offset, 10) : 0;
        $(selector).each(function(i) {
            var $clone = $(this).clone().css('display', 'block').appendTo('body');
            var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
            top = top + offset;
            top = top > 0 ? top : 0;
            $clone.remove();
            $(this).find('.modal-content').css("margin-top", top);
        });
    }

    /**
     * <p>
     * Title:        _decodeHTMLChar
     * <p>
     * Description:  解码
     *
     * @author       fangtl.cs@admin.com.cn
     * @date         2017年01月23日
     *
     * @param {string} msg 需要解码的HTML字符串
     * @return {string} 解码后的HTML字符串
     */
    function _decodeHTMLChar(msg) {

        if (msg == null)
            return "";
        msg = msg.replace(/&quot;/g, "\"") ;
        msg = msg.replace(/&#039;/g, "'") ;
        msg = msg.replace(/&lt;/g, "<") ;
        msg = msg.replace(/&gt;/g, ">") ;
        msg = msg.replace(/&nbsp;/g, " ") ;
        msg = msg.replace(/&amp;/g, "&");
        return msg;
    }

    /**
     * <p>
     * Title:        _encodeHTMLChar
     * <p>
     * Description:  编码
     *
     * @author       fangtl.cs@admin.com.cn
     * @date         2017年01月23日
     *
     * @param {string} msg 需要编码的HTML字符串
     * @return {string} 编码后的HTML字符串
     */
    function _encodeHTMLChar(msg) {
        if (msg == null)
            return "";
        msg=msg.split("&").join("&amp;");
        msg=msg.split("\"").join("&quot;");
        msg=msg.split("'").join("&#039;");
        msg=msg.split("<").join("&lt;");
        msg=msg.split(">").join("&gt;");
        msg=msg.split(" ").join("&nbsp;");
        return msg;
    }

    /**
     * <p>
     * Title:        _getNoticeType
     * <p>
     * Description:  初始化消息类型
     *
     * @author       chenlei
     * @date         2017年02月15日
     *
     * @param id:下拉框id
     */
    function _getNoticeType(id){
    	var url=PetsAdmin.basePath +"/petsAdminNoticeModule/getNoticeType"
		$.ajax({
			async : true,
			cache : false,
			type : "POST",
			url : url,
			data : {
			},
			dataType : "json",
			beforeSend : function(xhr) {
			},
			complete : function(xhr, textStatus) {
			},
			success : function(result, textStatus, xhr) {
				if(!Comm.checkAjaxSuccessData(result)){
					return;
				}
				var typelist = result.data.typelist;
				var $ul = $("#"+id).parent().find("ul[aria-labelledby='"+id+"']");
				$ul.empty();
				//$ul.append('<li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0);" val="-1">全部</a></li>')
                var firstSysid = 0;
				for(var i=0;i<typelist.length;i++){
                    if (i == 0) {
                        firstSysid = typelist[i].sysid;
                    }
					$ul.append(' <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:void(0);" val="'+typelist[i].sysid+'">'+typelist[i].type+'</a></li>')
				}
				//Comm.initDropdown(id,"-1");
				Comm.initDropdown(id,""+firstSysid);
			},
			error : function(xhr, textStatus, errorThrown) {
			}
		});
    }

    /**
     * <p>
     * Title:        _sprintf
     * <p>
     * Description:  格式化字符串
     * 占位符： %s， 如果占位符个数小于等于参数个数则替换相应占位符为传入参数；如果占位符个数大于参数个数则返回空
     * e.g:
     * Util.sprintf("This %s is a sample[%s]."); --> 返回空.
     * Util.sprintf("This %s is a sample[%s].", "QQ"); --> 返回空.
     * Util.sprintf("This %s is a sample[%s].", "QQ", "WW"); --> This QQ is a sample[WW].
     * Util.sprintf("This %s is a sample[%s].", "QQ", "WW", "EE"); --> This QQ is a sample[WW].
     *
     * @author       fangtl.cs@admin.com.cn
     * @date         2017年05月06日
     *
     * @param str 可变参数，第一个参数为带有占位符%s的字符串,后面为对应替换占位符的参数
     * @returns 替换占位符%s后的字符串
     */
    function _sprintf(str) {
        var args = arguments,//
            flag = true,//
            i = 1;//

        str = str.replace(/%s/g, function () {

            var arg = args[i++];
            if (typeof arg === 'undefined') {
                flag = false;
                return '';
            }
            return arg;
        });
        return flag ? str : '';
    }

//========================================================================================================
    myUtil.isStringObj = _isStringObj;
    myUtil.stringTrim = _stringTrim;
    myUtil.isEmptyString = _isEmptyString;
    myUtil.isBlankString = _isBlankString;
    myUtil.getFileExtensions = _getFileExtensions;
    myUtil.isValidFile = _isValidFile;
    myUtil.isNum = _isNum;
    myUtil.formatTimeWithSecond = _formatTimeWithSecond;
    myUtil.matchRegex = _matchRegex;
    myUtil.Regex = {
        uniqueId: _Regex.uniqueId
        , postcode: _Regex.postcode
        , chinese: _Regex.chinese
        , email: _Regex.email
        , ip: _Regex.ip
        , qq: _Regex.qq
        ,phone: _Regex.phone
        ,mobilePhone: _Regex.mobilePhone
        ,idcard: _Regex.idcard
        ,positive: _Regex.positive
        ,host: _Regex.host
        ,port: _Regex.port
        ,context: _Regex.context
        ,input_context: _Regex.input_context
        ,fee:_Regex.fee
    };
    myUtil.isEmail = _isEmail;
    myUtil.isIE = _isIE;
    myUtil.centerModals = _centerModals;
    myUtil.decodeHTMLChar = _decodeHTMLChar;
    myUtil.encodeHTMLChar = _encodeHTMLChar;
    myUtil.getNoticeType = _getNoticeType;

    myUtil.sprintf = _sprintf;
})(Util);

