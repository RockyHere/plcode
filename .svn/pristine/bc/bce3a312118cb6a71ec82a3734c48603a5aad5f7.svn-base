<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>组织机构</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/tree.css">
<link rel="stylesheet" type="text/css" href="/resource/comm/zTree_v3/css/demo.css">
<link rel="stylesheet" type="text/css" href="/resource/comm/zTree_v3/css/zTreeStyle/zTreeStyle.css">
<script type="text/javascript" src="/resource/comm/zTree_v3/js/jquery-1.4.4.min.js"></script>
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script type="text/javascript" src="/resource/comm/zTree_v3/js/jquery.ztree.core-3.5.js"></script>
<script type="text/javascript" src="/resource/comm/zTree_v3/js/jquery.ztree.excheck-3.5.js"></script>
<script type="text/javascript" src="/resource/comm/zTree_v3/js/jquery.ztree.exedit-3.5.js"></script>
<script language="JavaScript" src="/resource/js/security/org.js"></script>
</head>
<body>
<div id="title"> 
	<img src="/resource/images/portal/pageicon.jpg" align="middle"/>
   <span id="tname">组织机构维护</span>
</div> 
<div id="treeMaindiv">
   <div class="treeDiv" style="float:left;">
	  <ul id="treeOrg" class="ztree"></ul>
   </div>
   <div id="editdiv">
        <input type="hidden" id="parentId" name="parentId" value=""/>  
        <input type="hidden" id="uuid" name="uuid" value=""/>
        <ul>
          <li>
              <span>操作节点名称：</span><span id="oprNodeName" style="font-size:14px;color:red;"></span> 
           </li>
           <li>
              <span>操作节点类型：</span> <span id="oprNodeType" style="font-size:14px;color:red;"></span> 
           </li>
          <li>
               <span>代 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;码：</span> 
               <input type="text" id="orgCode" name="orgCode" value="" class="inputText" />
           </li>
          <li>
              <span>名 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;称：</span> 
              <input type="text" id="orgName" name="orgName" value="" class="inputText"/>
          </li>
          <li style="text-align:center">
              <button id="btnOK" onclick="editOrg();" 	class="btn_bg">保&nbsp;&nbsp;存</button>
          </li>
        </ul>
   </div> 
</div>
</body>
</html>
