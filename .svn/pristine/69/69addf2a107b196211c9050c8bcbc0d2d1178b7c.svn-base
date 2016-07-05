<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>流程实例图</title>
<link rel="stylesheet" type="text/css"	href="/resource/css/global/base.css">
<script language="JavaScript" src="/resource/js/workflow/flowdesign.js"></script>
<style type="text/css">
html{
	overflow:auto;
	overflow:auto;
}
</style>
</head>
<body oncontextmenu="return false" ondragstart="return false" onselectstart="return false">
	<img src="${image_url}" style="position:absolute;left:0px;top:0px;">
    <c:if test="${actlist!=null }">
    <c:forEach items="${actlist}" var="act">
        <c:if test="${act.nodeType=='start'}">
           <div style="position:absolute;left:${act.x}px;top:${act.y}px;width:${act.width}px;height:${act.height}px;text-align;z-index:35">
              <img src="/resource/images/flowgray/start_empty_gray.png" border="0"/>
           </div>
        </c:if>
		<div style="position:absolute;left:${act.x}px;top:${act.y}px;width:${act.width}px;height:${act.height}px;text-align;z-index:35">
            <img src="/resource/images/flowgray/${act.nodeType}_gray.png" border="0"/>
        </div>			  
	</c:forEach>
	</c:if>
	<c:if test="${instanceState}">
	<div style="position:absolute;left:${curActivity.x}px;top:${curActivity.y}px;width:${curActivity.width}px;height:${curActivity.height}px;text-align;z-index:35">
	  <img src="/resource/images/flowgray/curactivity.png" border="0"/>
	</div>
	</c:if>
</body>
</html>
