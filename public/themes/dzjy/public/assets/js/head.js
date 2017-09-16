$(document).ready(function(){
	getBrother();
//	getJyName();
})
function getBrother(){
	var basePath = $("#basepath").val();
	$.ajax({  
		  type: "post",  
		  url: basePath+"homeAjax/brothorList.action",  
		  data: {},  
		  dataType: "json",  
		  success: function(data){
			  	var result = data.data.rows;
			  	var Str = "";
			  	var ul = $("#brother_org");
			  	ul.empty();
			  	for(var i=0;i<result.length;i++){
			  		Str +="<li><a  href='"+result[i].wz+"' target='_blank'>"+result[i].title+"</a></li>"
			  	}
			  	ul.append(Str);
		  }
		}); 
}
//监狱名称
function getJyName(){
	var basePath = $("#zfgk_heak_basepath").val();
	$.ajax({  
		  type: "post",  
		  url: basePath+"/home/getJYMC.action",  
		  data: {},  
		  dataType: "json",  
		  success: function(data){
			  var title = data.list.title;
			  $("#jy_name").text(title);
//			  $("head > title").html(title);
				}
	});
}