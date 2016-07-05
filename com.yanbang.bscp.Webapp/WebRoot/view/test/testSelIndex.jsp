<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>test下拉选单</title>
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/global/bgrow.js"></script>
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script language="JavaScript" src="/resource/js/global/page.js"></script>
<script language="JavaScript" src="/resource/js/test/testSelIndex.js"></script>
</head>
<body>
<div id="btnlist">
  <ul>
    <li><input type="button" onclick="impTypeList();" value="进口类型名称列表"  ></li> 
    <li><input type="button" onclick="tradeTypeList();" value="贸易类型名称列表"  ></li>
    <li><input type="button" onclick="contractTypeList();" value="合同类型名称列表"  ></li>  
    <li><input type="button" onclick="taskTypeList();" value="作业类型名称列表"  ></li>  
     <li><input type="button" onclick="packTypeList();" value="包装形式名称列表"  ></li>    
  </ul>
</div>	
</body>
</html>
