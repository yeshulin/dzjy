$(document).ready(function () {
	_bindToSearchPageFunc();
	$("#zfgk_head_search_condition_input").keyup(function(event) {
		if (event.keyCode == 13) {
			var condition = $("#zfgk_head_search_condition_input").val();
			var basePath = $("#zfgk_heak_basepath").val();
			window.location.href = basePath + "search/index?search="+encodeURI(encodeURI(condition));
		}
	});
})

/**
 * <p>
 * Title:        _bindToSearchPageFunc
 * <p>
 * Description:  跳转到查询页面
 *
 * @author       chenlei.cs@admin.com.cn
 * @date         2017年05月28日
 */
function _bindToSearchPageFunc() {
	$("#zfgk_head_search").on("click",function(){
		var condition = $("#zfgk_head_search_condition_input").val();
		var basePath = $("#zfgk_heak_basepath").val();
		window.location.href = basePath + "search/index?search="+encodeURI(encodeURI(condition));
	});
}