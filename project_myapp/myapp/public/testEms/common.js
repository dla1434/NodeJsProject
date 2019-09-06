
var navHtml = {
	makeNav : function(menuRootId, appendTo){
		var nav = '';
		nav += '<nav>';
		nav += '	<ul id="' + menuRootId + '">';
		nav += '		</ul>';
		nav += '	</ul>';
		nav += '</nav>';
		
		//document.body.innerHTML = nav;
		$('#'+ appendTo).append(nav);
	},
	
	addLiMenu : function(ulId, appendTo, menuName, activeFlag){
		var menu = '';
		if( activeFlag ){
			menu += '<li class="top-menu-invisible">';
		}
		else{
			menu += '<li>';
		}
		menu += 	'<a href="#"><i class="fa fa-lg fa-fw fa-cube txt-color-blue"></i> <span class="menu-item-parent">' + menuName + '</span></a>';
		//menu += 	'<a href="#" onclick="window.open(\'mmiService.do?mmi=' + val[idx] + '\', \'_blank\', \'width=1400, height=800\')"><span class="menu-item-parent">' + menuName + '</span></a>';
		menu += 	'<ul id="' + ulId + '">';
		menu += 	'</ul>';
		menu += '</li>';
		
		$('#'+ appendTo).append(menu);
	}
};


var callBackPendingMsgSearch = {
	list : function(data){
		$("#loadingDiv").hide();
		var result = data.result; 
		var listdata = data.data;
		if(result){
			for(var i=0; i<listdata.length; i++){
				if ( listdata[i].dbTypeCode == "1" ) {
					$("#cntCritical_5_7").val(listdata[i].dbCritical);
					$("#cntMajor_5_7").val(listdata[i].dbMajor);
					$("#cntMinor_5_7").val(listdata[i].dbMinor);
				} else {
					$("#perCritical_5_7").val(listdata[i].dbCritical);
					$("#perMajor_5_7").val(listdata[i].dbMajor);
					$("#perMinor_5_7").val(listdata[i].dbMinor);
				}
			}
		}
	}
	
	, info : function(data){
		$("#loadingDiv").hide();
		var result = data.result; 
		var listdata = data.data;
		if(result){
			for(var i=0; i<listdata.length; i++){
				if ( listdata[i].dbTypeCode == "1" ) {
					$("#cntCritical").val(listdata[i].dbCritical);
					$("#cntMajor").val(listdata[i].dbMajor);
					$("#cntMinor").val(listdata[i].dbMinor);
				} else {
					$("#perCritical").val(listdata[i].dbCritical);
					$("#perMajor").val(listdata[i].dbMajor);
					$("#perMinor").val(listdata[i].dbMinor);
				}
			}
		}else{
		}
	}

	, action : function(data){
		$("#loadingDiv").hide();
		var result = data.result;
		if(result){
			alert("성공");
			ems.closeDialog("divMENU_5_7_C", "");
			callPendingMsgSearch.list($("#smscId_5_7").val());
		}else{
			alert("실패");
		}
	}
	
	, limitSearch : function(data){
		$("#loadingDiv").hide();
		var gridData	= data.data;
		var length		= data.data.length;
		$("#spanTabTotCnt_5_7").text(length);
		
		require(["wijmo.wijgrid"], function () {
			$("#tblList_5_7").wijgrid({
				selectionMode	: "singleRow",
				scrollMode		: "auto", 
				allowSorting	: true,
				data			: gridData,
				columns			: [
					{dataKey: "destmin",		headerText: "Dest Min", textAlignment: "center"},
					{dataKey: "msgcnt",			headerText: "PendingCnt", textAlignment: "center"}
				]
			});
		});
	}
	
	
	, checkPassword : function(data){
		if(data.result == "Y"){
			callPendingMsgSearch.action();
			ems.closeDialog('divPwCheck');
			$("#pwCheckForm").empty();
		}else{
			alert("divPwCheck fail");
		}
	}
};