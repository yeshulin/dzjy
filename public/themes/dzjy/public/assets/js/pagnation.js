var pageSize = 10;//每页的条数
var pageNumber = 1;//当前页数
var total = 0 ; //总条数
var param = null;
var loadDataFunc = null;
var offset=0,limit=10;
function initPageNation(param1){
	loadDataFunc = param1;
	loadDataFunc(offset,limit);
}


function firstpage(){
	pageNumber = 1;
	offset = 0;
	loadDataFunc(offset,limit);
}

function showPageNumber(){
	var num = $("#news_num").val();
	if(num==null ||num==""){
		alert("请输入每页显示的条数！");
		return;
	}
	pageNumber = 1;
	pageSize = num;
	limit = num;
	loadDataFunc(0,num);
}

function prePage(){
	if(pageNumber>1){
		pageNumber = pageNumber - 1;
		loadDataFunc((pageNumber-1)*pageSize,pageSize);
	}
}

function next(){
	 var totalPage = Math.ceil(total/pageSize);
	if(pageNumber<totalPage){
		loadDataFunc((pageNumber)*pageSize,pageSize);
		pageNumber = pageNumber + 1;
	}
}

function last(){
	var totalPage = Math.ceil(total/pageSize);
	loadDataFunc((totalPage-1)*pageSize,pageSize);
	pageNumber = totalPage;
}

function toNPage(){
	// var nu = parseInt($("#dinye").val());
    var n = $("#dinye").val();
    if (!n) {
        alert("请输入需要转到的页数！");
        return;
    }
	var nu = parseInt(n);
	var totalPage = Math.ceil(total/pageSize);
	
	if(nu==null||nu==""){
		alert("请输入需要转到的页数！");
		return;
	}
	if(nu > totalPage){
		alert("跳转页数大于总页数，请重新输入！");
		return;
	}else if(nu < 1){
		alert("跳转页数大于不能小于1，请重新输入！");
		return;
	}
	loadDataFunc((nu-1)*pageSize,pageSize);
	pageNumber = nu;
}
function FormatDate (strTime) {
    var date = new Date(strTime);
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
}
function FormatDate2 (strTime) {
	var date = new Date(strTime);
	return date.getFullYear()+"."+(date.getMonth()+1)+"."+date.getDate();
}