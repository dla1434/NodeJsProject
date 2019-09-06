<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<!-- START Mandatory CSS for Using DataTable -->
	<link rel="stylesheet" type="text/css" href="/css/jquery.dataTables.css">
	<link rel="stylesheet" type="text/css" href="/css/dataTables.tableTools.css">
<!-- END Mandatory CSS for Using DataTable -->

<!-- START Mandatory for Using DataTable -->
	<script src="/js/libs/jquery-2.1.1.min.js"></script>
	<script src="/js/plugin/datatables/jquery.dataTables.min.js"></script>
	<script src="/js/plugin/datatables/dataTables.tableTools.min.js"></script>
	<script src="/js/bootstrap/bootstrap.min.js"></script>
	<script src="/js/plugin/datatables/dataTables.buttons.min.js"></script>
<!-- End Mandatory for Using DataTable -->


<!-- START SMART CSS Mandatory -->
	<!-- Basic Styles -->
	<link rel="stylesheet" type="text/css" media="screen" href="/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" media="screen" href="/css/font-awesome.min.css">

	<!-- SmartAdmin Styles : Caution! DO NOT change the order -->
	<link rel="stylesheet" type="text/css" media="screen" href="/css/smartadmin-production-plugins.min.css">
	<link rel="stylesheet" type="text/css" media="screen" href="/css/smartadmin-production.min.css">
	<link rel="stylesheet" type="text/css" media="screen" href="/css/smartadmin-skins.min.css">
	
	<!-- SmartAdmin RTL Support -->
	<link rel="stylesheet" type="text/css" media="screen" href="/css/smartadmin-rtl.min.css">
<!-- END SMART CSS Mandatory -->	


<!-- START SMART SCRIPT -->
	<!-- IMPORTANT: APP CONFIG -->
	<script src="/js/app.config.js"></script>

	<!-- BOOTSTRAP JS -->
	<script src="/js/bootstrap/bootstrap.min.js"></script>
	
	<!-- JARVIS WIDGETS -->
	<script src="/js/smartwidgets/jarvis.widget.min.js"></script>
	
	<!-- JQUERY VALIDATE -->
	<script src="/js/plugin/jquery-validate/jquery.validate.min.js"></script>
	
	<!-- JQUERY MASKED INPUT -->
	<script src="/js/plugin/masked-input/jquery.maskedinput.min.js"></script>
	
	<!-- JQUERY SELECT2 INPUT -->
	<script src="/js/plugin/select2/select2.min.js"></script>
	
	<!-- JQUERY UI + Bootstrap Slider --> 
	<script src="/js/libs/jquery-ui-1.10.3.min.js"></script>
	<script src="/js/plugin/bootstrap-slider/bootstrap-slider.min.js"></script>
	
	<!-- MAIN APP JS FILE -->
	<script src="/js/app.min.js"></script>
	
	<script src="/js/common.js"></script>
	<script src="/js/map.js"></script>
	<script src="/js/plugin/bootbox/bootbox.min.js"></script>
	
	<script>
		if (!window.jQuery) {
			document.write('<script src="/js/libs/jquery-2.1.1.min.js"><\/script>');
		}
	</script>
	<script>
		if (!window.jQuery.ui) {
			document.write('<script src="/js/libs/jquery-ui-1.10.3.min.js"><\/script>');
		}
	</script>
<!-- END SMART SCRIPT -->

<%
	request.setCharacterEncoding("utf-8"); //Set encoding
	String mmiName = request.getParameter("mmi");
%>

<style>
.modal-dialog-common {
	margin: 0;
	position: absolute;
	top: 30%;
	left: 40%;
}
</style>
</head>

<body id="bodyTag">
<!-- widget grid -->
<div class="row">
	<div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
		<h1 class="page-title txt-color-blueDark">
			<i class="fa fa-table fa-fw "></i> 
				MMI 관리 
			<span>
				MMI 서비스
			</span>
		</h1>
	</div>
</div>
<section id="widget-grid" class="">
	<div class="row">
		<article class="col-sm-12 col-md-12 col-lg-12">
			<!-- new widget -->
				<div class="jarviswidget jarviswidget-color-blueDark" id="mmsServerInfo-wid-id-0"
				data-widget-editbutton="false" data-widget-fullscreenbutton="false">
				<!-- widget options:
						usage: <div class="jarviswidget" id="wid-id-0" data-widget-editbutton="false">
						data-widget-colorbutton="false"
						data-widget-editbutton="false"
						data-widget-togglebutton="false"
						data-widget-deletebutton="false"
						data-widget-fullscreenbutton="false"
						data-widget-custombutton="false"
						data-widget-collapsed="true"
						data-widget-sortable="false"
						-->
				<header>
					<span class="widget-icon"> <i
						class="fa fa-cog txt-color-white"></i>
					</span>
					<h2>MMI 정보 관리</h2>&nbsp;
					<!-- <button type="button" class="btn btn-default" id="addMmsServerInfo" onclick="addMmsServerInfo()">추가 </button>
					<button type="button" class="btn btn-default" id="delMmsServerInfo" onclick="delMmsServerInfo()">삭제 </button> -->
				</header>
					<!-- widget edit box -->
				<div class="jarviswidget-editbox">
					<!-- This area used as dropdown edit box -->
				</div>
				<!-- end widget edit box -->
					<!-- widget content -->
				<div class="widget-body">
					<div class="table-responsive">
						<table class="table table-bordered" id="MmsServerInfoTbl">
							<thead>
								<tr>
									<th></th>
									<th>서버 ID</th>
									<th>서버명</th>
									<th>서버 IP</th>
									<th>서버 타입</th>
									<th>업데이트시간</th>
									<th>MMSS 서버명</th>
									<th>서버설명</th>
									<th>사용여부</th>
								</tr>
							</thead>
						</table>
					</div>
				</div>
				<!-- end widget content -->
			</div>
			<!-- end widget -->
		</article>
	</div>
	<div class="row">
		<article class="col-sm-12 col-md-12 col-lg-12">
			<!-- new widget -->
				<div class="jarviswidget jarviswidget-color-blueDark" id="mmsServerInfo-wid-id-0"
				data-widget-editbutton="false" data-widget-fullscreenbutton="false">
				<!-- widget options:
						usage: <div class="jarviswidget" id="wid-id-0" data-widget-editbutton="false">
						data-widget-colorbutton="false"
						data-widget-editbutton="false"
						data-widget-togglebutton="false"
						data-widget-deletebutton="false"
						data-widget-fullscreenbutton="false"
						data-widget-custombutton="false"
						data-widget-collapsed="true"
						data-widget-sortable="false"
						-->
				<header>
					<span class="widget-icon"> <i
						class="fa fa-cog txt-color-white"></i>
					</span>
					<h2><%=mmiName%> Description</h2>&nbsp;
					<!-- <button type="button" class="btn btn-default" id="addMmsServerInfo" onclick="addMmsServerInfo()">추가 </button>
					<button type="button" class="btn btn-default" id="delMmsServerInfo" onclick="delMmsServerInfo()">삭제 </button> -->
				</header>
					<!-- widget edit box -->
				<div class="jarviswidget-editbox">
					<!-- This area used as dropdown edit box -->
				</div>
				<!-- end widget edit box -->
					<!-- widget content -->
				<div class="widget-body">
					<h2>MMI Description</h2>
				</div>
				<!-- end widget content -->
			</div>
			<!-- end widget -->
		</article>
	</div>
	<div class="row">
		<article class="col-sm-12 col-md-12 col-lg-12">
			<!-- new widget -->
				<div class="jarviswidget jarviswidget-color-blueDark" id="mmsServerInfo-wid-id-0"
				data-widget-editbutton="false" data-widget-fullscreenbutton="false">
				<!-- widget options:
						usage: <div class="jarviswidget" id="wid-id-0" data-widget-editbutton="false">
						data-widget-colorbutton="false"
						data-widget-editbutton="false"
						data-widget-togglebutton="false"
						data-widget-deletebutton="false"
						data-widget-fullscreenbutton="false"
						data-widget-custombutton="false"
						data-widget-collapsed="true"
						data-widget-sortable="false"
						-->
				<header>
					<span class="widget-icon"> <i
						class="fa fa-cog txt-color-white"></i>
					</span>
					<h2>Result</h2>&nbsp;
					<ul class="nav nav-tabs pull-right in" id="svrNameTab">
							<!--Tab 영역  -->
					</ul> 
					<!-- <button type="button" class="btn btn-default" id="addMmsServerInfo" onclick="addMmsServerInfo()">추가 </button>
					<button type="button" class="btn btn-default" id="delMmsServerInfo" onclick="delMmsServerInfo()">삭제 </button> -->
				</header>
					<!-- widget edit box -->
				<div class="jarviswidget-editbox">
					<!-- This area used as dropdown edit box -->
				</div>
				
				<!-- end widget edit box -->
					<!-- widget content -->
				<div class="tab-content" id="myTabContent">
					<!--Tab 데이타 영역  -->
				</div>
				<!-- 
				<div class="widget-body">
					<h2>Result</h2>
				</div>
				 -->
				<!-- end widget content -->
			</div>
			<!-- end widget -->
		</article>
	</div>
</section>

<div class="items-container">

<!-- E: MMSS Proc 추가 Modal -->

</div>


<script type="text/javascript">
var mmsServerMap = new Map();
//var mmsServerArray = new Array();

$(document).ready(function() {
	//$("#addProce_dialog").hide();
	//$("#modi_Server_dialog").hide();
});

pageSetUp();  //Widget 및 각종 function 셋업

function mapHandler(){
	$('input[type="checkbox"]').change(function () {
		alert("test");
		var data = table.row( $(this).parents('tr') ).data();
		console.log( $(this).parents('tr') );
		//var data = table.row(  $('#MmsServerInfoTbl tbody').parents('tr') ).data();
		console.log(data);
		if (this.checked) {
			deleteMmsServerMap.put(data.mms_svr_id,data.mms_svr_id);
			//console.log(deleteMmssServerMap.values().toString());
		}else{
			// HashMap 삭제..
			deleteMmsServerMap.remove(data.mms_svr_id);
			//console.log(deleteMmssServerMap.values().toString());
		}
	});
}


var pagefunction = function() {
	$.ajax({
		url : '/systemManage/mmsServerInfo.do'
		,dataType : 'json'
		,type: "POST", 
		success : function(data)  {
			
			table = $('#MmsServerInfoTbl').DataTable( {
			ordering : false,
			data : data,
			columns: [
								{ data: " <input type='checkbox'  name='checkbox'>" },
								{ data: "mms_svr_id" },
								{ data: "svr_name" },
								{ data: "ip" },
								{ data: "svr_type" },
								{ data: "update_date" },
								{ data: "work_mmss_svr_id" },
								{ data: "description" },
								{ data: "is_inuse" }
								
							],
			"columnDefs": [ 
									{
										"targets": -9,
										"data": null,
										"defaultContent": "<input type='checkbox' name='checkbox'>"
									}
							],
			dom: 'T<"clear">lfrtip',
			tableTools: {
								"aButtons": [	
												{
													"sExtends": "select",
													"sButtonText": "실행",
													"fnClick": function () {
														var mmiName="<%=mmiName%>";
														console.log("mmiName", mmiName);
														
														//var keys = mmsServerMap.keys();
														//var serverInfo = mmsServerMap.get(keys[0]);
														//addMmssProcInfo(serverInfo.name, serverInfo.ip);
														
														
														$("#svrNameTab").empty();
														var keys = mmsServerMap.keys();
														for(i=0; i < keys.length; i++){
															if( i == 0){
																var activeFlag = true;
															}
															else{
																var activeFlag = false;
															}
															
															var serverInfo = mmsServerMap.get(keys[i]);
															console.log("name : ", serverInfo.name);
															console.log("ip : ", serverInfo.ip);
															serverInfo.mmiType = "MMI";
															serverInfo.mmiName = mmiName;
															
															mmiInputRequest(mmiName, serverInfo, serverInfo.serverName, serverInfo.serverIp);
															
															/* 
															var testArray = new Array();
															var personInfo = new Object();
															personInfo.name = "송강호";
															personInfo.age = "25";
															testArray.push( personInfo );
															
															var totalInfo = new Object();
															totalInfo.name = serverInfo.name;
															totalInfo.ip = serverInfo.ip;
															totalInfo.test = testArray;
															
															mmiRequest(mmiName, serverInfo, serverInfo.name, serverInfo.ip, activeFlag);
															*/
														}
													} 
												}
											],
								"sRowSelect": "single",
								"sSwfPath": "/js/plugin/datatables/swf/copy_csv_xls_pdf.swf"
			},
			"fnDrawCallback": function() {
				 $('input[type="checkbox"]').change(function () {
						var data = table.row( $(this).parents('tr') ).data();
						
						if (this.checked) {
							var serverInfo = new Object();
							serverInfo.serverName = data.svr_name;
							serverInfo.serverIp = data.ip;
							
							mmsServerMap.put(data.svr_name, serverInfo);
						}else{
							mmsServerMap.remove(data.svr_name);
						} 
					});  
				 }
			});
		},	
		error : function(request) {
			alert("Web Server Error ..");
		}
	});
	
		
	function now_time() {
		var time_t = new Date();
		var s = set_standard(time_t.getFullYear(), 4)
				+ set_standard(time_t.getMonth() + 1, 2)
				+ set_standard(time_t.getDate(), 2)
				+ set_standard(time_t.getHours(), 2)
				+ set_standard(time_t.getMinutes(), 2)
				+ set_standard(time_t.getSeconds(), 2);

		return s;
	}
	function set_standard(time, digits) {
		var zero = '';
		time = time.toString();

		if (time.length < digits) {
			for ( var i = 0; i < digits - time.length; i++)
				zero += '0';
		}
		return zero + time;
	}

};

//페이지 함수
pagefunction();


function mmiInputRequest(mmiName, serverInfo, svrName, svrIp, activeFlag){
	console.log("mmiInputRequest")
	
	$.ajax({
		url : '/mmi/mmiInputReq.do'
		,dataType : 'json'
		,data: serverInfo
		,type: "POST"
		,async : false,
		success : function(data){
			console.log("Suc");
			
			html='';
			html += '<div id="input_dialog">';
			html += 	'<form id="input_mmi_info" action="" class="smart-form">';
			html += 		'<fieldset id="field">'			
			html += 		'</fieldset>';
			html += 	'</form>';
			html += '</div>';
			$("#bodyTag").append(html);
			
			$("#field").empty();
			
			for(i=0; i < data.length; i++){
				console.log(data[i])
				
				sections = '';
				sections += '<section>';
				sections += 	'<label class="label">' + data[i] + '</label>';
				sections += 	'<label class="input">';
				sections += 	'<input id="' + data[i] + '" name="' + data[i] + '"  type="text" class="input-sm">';
				sections += 	'</label>';
				sections += '</section>';
				$("#field").append(sections);
			}
			
			$('#input_dialog').dialog({
				autoOpen : false,
				width : 600,
				resizable : false,
				modal : true,
				title : "MMSS Process 추가",
				buttons: {
					저장: function () {
						
						//var inputKeyArray = new Array();
						//var inputValueArray = new Array();
						var inputMap = new Map();
						var inputMapArray = new Array();
						
						for(i=0; i < data.length; i++){
							var tempMap = new Map();
							var key =  data[i];
							var value = $('#' + data[i]).val();
							console.log("data key", key);
							console.log("data value", value);
							
							inputMap.put(key, value);
							//tempMap.put(key, value);
							
							//console.log( tempMap.toString() );
							//inputMapArray.push(tempMap);
							
							//inputKeyArray.push(key);
							//inputValueArray.push(value);
						}
						//inputMapArray.push(inputMap);
						//serverInfo.inputData = inputMapArray;
						
						serverInfo.inputData = inputMap.getAll();
						//serverInfo.inputData = inputKeyArray.toString();
						
						mmiRequest(mmiName, serverInfo, svrName, svrIp, activeFlag);
					},	
					닫기: function () {
							$("#add_mmss_proc_code").val("");
							$("#add_mmss_proc_name").val("");
							$(this).dialog("close"); 
					} 
				}
			});
		}
	});
	
	$(".ui-dialog-titlebar-close").hide();
	$('#input_dialog').dialog('open');
}

function mmiRequest(mmiName, serverInfo, svrName, svrIp, activeFlag){
	var temp = JSON.stringify(serverInfo);
	
	$.ajax({
		url : '/mmi/mmiReq.do'
		,dataType : 'text'
		,data : {data : temp}
		//,data: serverInfo
		/* ,data: {
				svrName : svrName,
				svrIp :svrIp,
			} */
		,type: "POST",
		success : function(data){
			console.log(data)
			
			html='';
			if( activeFlag ){
				html+='<li class="active">';
			}
			else{
				html+='<li>';
			}
			html+=	'<a data-toggle="tab" href="#s' + svrName + '"><i class="fa fa-clock-o"></i> <span class="hidden-mobile hidden-tablet">' + svrName + '</span></a>';
			html+='</li>';
			$("#svrNameTab").append(html);
			
			$("#svrNameTab").
			
			String.prototype.replaceAll = function(org, dest) {
				return this.split(org).join(dest);
			}
			
			var text = data.replaceAll("\r\n","<br/>")
			
			var tabContentHtml='';
			tabContentHtml+='<div class="tab-pane fade active in padding-10 no-padding-bottom" id="s' + svrName + '">';
			tabContentHtml+= 		text
			tabContentHtml+='</div>';
			
			$("#myTabContent").append(tabContentHtml);
		},
		error : function(request) {
			alert("Web Server Error ..");
		}
	});				
}

function rebind(){
	table.destroy();
	pagefunction();
}
</script>
</body>
</html>