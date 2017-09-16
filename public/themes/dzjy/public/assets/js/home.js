


function AddFavorite(sURL, sTitle) {
    sURL = encodeURI(sURL);
    try {
        window.external.addFavorite(sURL, sTitle);
    } catch (e) {
	    try {
	        window.sidebar.addPanel(sTitle, sURL, "");
	    } catch (e) {
	        alert("加入收藏失败,请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
	    }
    }
}


//设为首页

function SetHome(obj,url){
	try{
        obj.style.behavior='url(#default#homepage)';
        obj.setHomePage(url);
    }catch(e){
        if(window.netscape){
            try{
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }catch(e){
                alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
            }
        }else{
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
        }
    }
}

function SetHome(element, url){ 
	try { 
		element.style.behavior = "url(#default#homepage)"; 
		element.setHomePage(url); 
	} catch (e) { 
		if (document.all) { 
			document.body.style.behavior="url(#default#homepage)"; 
			document.body.setHomePage(url);	            
		} else if (window.sidebar) { 
			if (window.netscape) { 
				try { 
					netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
				} catch (e) { 
					alert('您的浏览器不支持自动设置首页,请手动设置!'); 
					return false; 
				} 
			} 
			var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch); 
			prefs.setCharPref('browser.startup.homepage',url);	
		} else { 
			alert('您的浏览器不支持自动设置首页,请手动设置!'); 
		} 
	} 
	return false;	
}

