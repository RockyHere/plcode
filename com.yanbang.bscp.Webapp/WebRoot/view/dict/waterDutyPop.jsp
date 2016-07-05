<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>水尺值班人员POP</title>
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/global/bgrow.js"></script>
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script language="JavaScript" src="/resource/js/global/page.js"></script>
</head>
<body class="bodyX">
<table class="table">
	<tbody>
		<c:forEach items="${list}" var="dataItem" varStatus="status">
		<tr ondblclick="retWaterDutyPop('${dataItem.dictName}')" 
		    class="${status.count%2!=0?'tr1':'tr2'}">
		    <td align="left">${dataItem.dictName}</td>
		 </tr>
		</c:forEach>
	</tbody>
</table>	
</body>
<script type="text/javascript">
//berthPop双击返回
function retWaterDutyPop(dictName){
      //传递返回的值
    var retData = {"dictName":dictName};
    art.dialog.data("retData", retData);
	art.dialog.close();
}

</script>
</html>
