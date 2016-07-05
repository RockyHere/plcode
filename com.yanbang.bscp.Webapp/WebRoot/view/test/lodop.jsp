<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>testlodop</title>
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/test/LodopFuncs.js"></script>
</head>
<script language="javascript" type="text/javascript">
  function CreatePrintPage() {
	  var LODOP=getLodop(document.getElementById('LODOP'),document.getElementById('LODOP_EM'));
	  LODOP.PRINT_INITA(14,11,800,600,"套打EMS的模板");

	    LODOP.ADD_PRINT_TEXT(95,95,75,20,"寄件人姓名");

	    LODOP.ADD_PRINT_TEXT(123,148,194,20,"寄件人单位名称");

	    LODOP.ADD_PRINT_TEXT(158,101,238,35,"寄件人的详细地址");

	    LODOP.ADD_PRINT_TEXT(92,446,75,20,"收件人姓名");

	    LODOP.ADD_PRINT_TEXT(122,496,208,20,"收件人单位名称");

	    LODOP.ADD_PRINT_TEXT(160,460,244,35,"收件人详细地址");

	    LODOP.ADD_PRINT_TEXT(289,47,178,22,"内件品名");

	    LODOP.ADD_PRINT_TEXT(290,258,100,20,"内件数量");

	    LODOP.ADD_PRINT_TEXT(92,245,100,20,"寄件人电话");

	    LODOP.ADD_PRINT_TEXT(90,608,75,20,"收件人电话");

     
  };    
</script> 
<body>
<script language="javascript" src="LodopFuncs.js"></script>
<object  id="LODOP" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=0 height=0> 
       <embed id="LODOP_EM" type="application/x-print-lodop" width=0 height=0></embed>
</object>
进入<a href="javascript:;" onclick="javascript:CreatePrintPage();LODOP.PRINT_DESIGN();">模板设计</a><br><br>
进入<a href="javascript:;" onclick="javascript:CreatePrintPage();LODOP.PREVIEW();">模板的打印预览</a>
</body>
</html>