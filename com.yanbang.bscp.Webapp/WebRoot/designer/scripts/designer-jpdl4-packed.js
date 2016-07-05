Geom={};
Geom.Point=function(_,$){this.x=_;this.y=$};
Geom.Line=function(A,B,$,_){this.x1=A;this.y1=B;this.x2=$;this.y2=_};
Geom.Line.prototype.getX1=function(){return this.x1};
Geom.Line.prototype.getX2=function(){return this.x2};
Geom.Line.prototype.getY1=function(){return this.y1};
Geom.Line.prototype.getY2=function(){return this.y2};
Geom.Line.prototype.getK=function(){return(this.y2-this.y1)/(this.x2-this.x1)};
Geom.Line.prototype.getD=function(){return this.y1-this.getK()*this.x1};
Geom.Line.prototype.isParallel=function(A){var _=this.x1,$=this.x2;
if((Math.abs(_-$)<0.01)&&(Math.abs(A.getX1()-A.getX2())<0.01))return true;
else if((Math.abs(_-$)<0.01)&&(Math.abs(A.getX1()-A.getX2())>0.01))return false;
else if((Math.abs(_-$)>0.01)&&(Math.abs(A.getX1()-A.getX2())<0.01))return false;
else return Math.abs(this.getK()-A.getK())<0.01};
Geom.Line.prototype.isSameLine=function(A){if(this.isParallel(A)){var	_=A.getK(),$=A.getD();
if(Math.abs(this.x1*_+$-this.y1)<0.01)return true;
else return false}else return false};
Geom.Line.prototype.contains=function(D){var B=this.x1,F=this.y1,$=this.x2,A=this.y2,H=D.x,C=D.y,G=(B-$)*(B-$)+(F-A)*(F-A),E=(H-B)*(H-B)+(C-F)*(C-F),_=(H-$)*(H-$)+(C-A)*(C-A);
return G>E&&G>_};
Geom.Line.prototype.getCrossPoint=function(B){if(this.isParallel(B))return	null;
var F,A;if(Math.abs(this.x1-this.x2)<0.01){F=this.x1;A=B.getK()*F+B.getD()}else if(Math.abs(B.getX1()-B.getX2())<0.01){F=B.getX1();
A=this.getD()}else{var _=this.getK(),E=B.getK(),$=this.getD(),D=B.getD();F=(D-$)/(_-E);A=_*F+$}var C=new Geom.Point(F,A);
if(B.contains(C)&&this.contains(C))return C;else return null};
Geom.Rect=function(B,A,$,_){this.x=B;this.y=A;this.w=$;this.h=_};
Geom.Rect.prototype.getCrossPoint=function(C){var D=null,_=new Geom.Line(this.x,this.y,this.x+this.w,this.y);
D=_.getCrossPoint(C);if(D!=null)return D;
var B=new	Geom.Line(this.x,this.y+this.h,this.x+this.w,this.y+this.h);
D=B.getCrossPoint(C);
if(D!=null)return D;
var A=new Geom.Line(this.x,this.y,this.x,this.y+this.h);
D=A.getCrossPoint(C);
if(D!=null)return D;
var $=new	Geom.Line(this.x+this.w,this.y,this.x+this.w,this.y+this.h);
D=$.getCrossPoint(C);return	D};
function createCore($){
	var _={svgns:"http://www.w3.org/2000/svg",linkns:"http://www.w3.org/1999/xlink",vmlns:"urn:schemas-microsoft-com:vml",officens:"urn:schemas-microsoft-com:office:office",emptyFn:function(){},emptyArray:[],emptyMap:{},devMode:false,installVml:function(){if(_.isVml){document.attachEvent("onreadystatechange",function(){var $=document;if($.readyState=="complete"){if(!$.namespaces["v"])$.namespaces.add("v",_.vmlns);if(!$.namespaces["o"])$.namespaces.add("o",_.officens)}});var $=document.createStyleSheet();
			$.cssText="v\\:*{behavior:url(#default#VML)}"+"o\\:*{behavior:url(#default#VML)}"}},
		seed:0,
		id:function(){// 生成id值
			if(!$)return"_INNER_"+this.seed++;
			else return"_"+$+"_"+this.seed++},
		onReady:function($){
				window.onload=function(){$()}},
		error:function(A){
					if(_.devMode!==true)return;
					if(_.isVml){var $="";
						for(var B in A)$+=B+":"+A[B]+"\n";
						_.debug($)}
					else console.info(A)},
		debug:function(){if(!_.debugDiv){
						var B=document.createElement("div");
						B.style.position="absolute";
						B.style.left="50px";
						B.style.top="50px";
						document.body.appendChild(B);
						var	D=document.createElement("textarea");
						D.rows=10;
						D.rols=40;
						B.appendChild(D);
						var C=document.createElement("button");
						C.innerHTML="close";
						C.onclick=function(){
							B.style.display="none"};
						B.appendChild(C);
						_.debugDiv=B;_.debugTextArea=D}
						var A="";
						for(var $=0;$<arguments.length;$++)A+=","+arguments[$];
						_.debugTextArea.value+="\n"+A;_.debugDiv.style.display=""},
		getInt:function(_){_+="";_=_.replace(/px/,"");
						var $=parseInt(_,10);return isNaN($)?0:$},extend:function(){
							var A=function($){for(var _ in $)this[_]=$[_]},$=Object.prototype.constructor;return function(G,D,B){if(typeof D=="object"){B=D;D=G;G=B.constructor!=$?B.constructor:function(){D.apply(this,arguments)}}var E=function(){},F,C=D.prototype;E.prototype=C;F=G.prototype=new E();F.constructor=G;G.superclass=C;if(C.constructor==$)C.constructor=D;F.override=A;_.override(G,B);return G}}(),override:function(B,$){if($){var A=B.prototype;for(var C in	$)A[C]=$[C];if(_.isIE&&$.toString!=B.toString)A.toString=$.toString}},ns:function(){for(var A=0;A<arguments.length;A++){var E=arguments[A],_=E.split("."),$=window[_[0]]=window[_[0]]||{},D=_.slice(1);for(var B=0;B<D.length;B++){var C=D[B];$=$[C]=$[C]||{}}}return $},apply:function($,A,C){if(C)_.apply($,C);if($&&A&&typeof A=="object")for(var B in A)$[B]=A[B];return $},applyIf:function($,_){if($&&_)for(var A	in _)if(typeof $[A]=="undefined")$[A]=_[A];return $},join:function(_){var A="";for(var $=0;$<_.length;$++)A+=_[$];return A},getTextSize:function(A){if(!_.textDiv){_.textDiv=document.createElement("div");_.textDiv.style.position="absolute";_.textDiv.style.fontFamily="Verdana";_.textDiv.style.fontSize="12px";_.textDiv.style.left="-1000px";_.textDiv.style.top="-1000px";document.body.appendChild(_.textDiv)}var B=_.textDiv;B.innerHTML=A;var	$={w:Math.max(B.offsetWidth,B.clientWidth),h:Math.max(B.offsetHeight,B.clientHeight)};return $},notBlank:function($){if(typeof $=="undefined")return false;else	if(typeof $=="string"&&$.trim().length==0)return false;return true},safe:function($){if($)return $.trim();else return""},get:function($){return	document.getElementById($)},value:function(B,$){var A=_.get(B);if(typeof $!="undefined")A.value=_.safe($);return _.safe(A.value)},
/* each 迭代方法 */	each:function(C,B,A){
							if(typeof C.length=="undefined"||typeof C=="string")C=[C];
							for(var _=0,$=C.length;_<$;_++)if(B.call(A||C[_],C[_],_,C)===false)return _},showMessage:function($,_){alert(_)}};
							(function(){
								var D=navigator.userAgent.toLowerCase(),$=D.indexOf("opera")>-1,H=(/webkit|khtml/).test(D),F=!$&&D.indexOf("msie")>-1,A=!$&&D.indexOf("msie 7")>-1,E=!$&&D.indexOf("msie	8")>-1,G=!H&&D.indexOf("gecko")>-1,C=F||A||E,B=!C;
									_.isSafari=H;_.isIE=F;_.isIE7=A;_.isGecko=G;_.isVml=C;_.isSvg=B;if(C)_.installVml();
									_.applyIf(Array.prototype,{indexOf:function(_){for(var A=0,$=this.length;A<$;A++)if(this[A]===_)return A;return-1},remove:function(_){var	$=this.indexOf(_);if($!=-1)this.splice($,1);return this}});String.prototype.trim=function(){var	$=/^\s+|\s+$/g;return function(){return	this.replace($,"")}}()})();return _}
								Gef=createCore("Gef");
								Gef.IMAGE_ROOT="gef/images/activities/48/";
								Gef.ns("Gef.ui");
								Gef.ui.WorkbenchWindow=Gef.extend(Object,{getActivePage:Gef.emptyFn});
								Gef.ns("Gef.ui");
								Gef.ui.WorkbenchPage=Gef.extend(Object,{getWorkbenchWindow:Gef.emptyFn,getActiveEditor:Gef.emptyFn,openEditor:Gef.emptyFn});
								Gef.ns("Gef.ui");
								Gef.ui.WorkbenchPart=Gef.extend(Object,{setWorkbenchPage:Gef.emptyFn,getWorkbenchPage:Gef.emptyFn});
								Gef.ns("Gef.ui");
								Gef.ui.ViewPart=Gef.extend(Object,{});
								Gef.ns("Gef.ui");
								Gef.ui.EditorPart=Gef.extend(Gef.ui.WorkbenchPart,{init:Gef.emptyFn});
								Gef.ns("Gef.ui");
								Gef.ui.EditorInput=Gef.extend(Object,{getName:Gef.emptyFn,getObject:Gef.emptyFn});
								Gef.ns("Gef.ui.support");
					// 默认的工作平台窗口
					Gef.ui.support.DefaultWorkbenchWindow=Gef.extend(Gef.ui.WorkbenchWindow,{
								getActivePage:function(){
									if(!this.activePage){
										this.activePage=new Gef.ui.support.DefaultWorkbenchPage();
										this.activePage.setWorkbenchWindow(this)}return this.activePage},
								render:function(){if(!this.rendered){
										document.getElementsByTagName("html")[0].className+=" gef-workbenchwindow";
										if(Gef.isIE){
											this.width=document.body.offsetWidth;
											this.height=document.body.offsetHeight}
										else{
											this.width=window.innerWidth;
											this.height=window.innerHeight}
											this.getActivePage().render();
											this.rendered=true}}});
								Gef.ns("Gef.ui.support");
					Gef.ui.support.DefaultWorkbenchPage=Gef.extend(Gef.ui.WorkbenchPage,{
										constructor:function($){this.workbenchWindow=$},
										getWorkbenchWindow:function(){return this.workbenchWindow},
										setWorkbenchWindow:function($){this.workbenchWindow=$},
										getActiveEditor:function(){return this.activeEditor},
									    // param_ ext editor param$ ext editor
										// input
										openEditor:function(_,$){
											this.activeEditor=_;
											_.setWorkbenchPage(this);// 初始化编辑器
											_.init($)},
										render:function(){this.activeEditor.render()}});
								Gef.ns("Gef.ui.support");
								Gef.ui.support.DefaultEditorPart=Gef.extend(Gef.ui.EditorPart,{constructor:function($){this.workbenchPage=$},getWorkbenchPage:function(){return	this.workbenchPage},setWorkbenchPage:function($){this.workbenchPage=$},init:function($){},render:function(){}});
								Gef.ns("Gef.commands");Gef.commands.Command=Gef.extend(Object,{execute:Gef.emptyFn,undo:Gef.emptyFn,redo:Gef.emptyFn});
								Gef.ns("Gef.commands");
									Gef.commands.CommandStack=Gef.extend(Object,{constructor:function(){this.undoList=[];
									this.redoList=[];this.maxUndoLength=100},execute:function($){while(this.undoList.length>this.maxUndoLength)this.undoList.shift();
									this.undoList.push($);
									this.redoList.splice(0,this.redoList.length);
									$.execute();return $},redo:function(){var $=this.redoList.pop();
									if($!=null){this.undoList.push($);
									$.redo();
									return this.redoList.length>0}return false},undo:function(){var $=this.undoList.pop();
									if($!=null){while(this.redoList.length>this.maxUndoLength)this.redoList.shift();
									this.redoList.push($);
									$.undo();
									return this.undoList.length>0}return false},flush:function(){this.flushUndo();
									this.flushRedo()},flushUndo:function(){this.undoList.splice(0,this.undoList.length)},flushRedo:function(){this.redoList.splice(0,this.redoList.length)},getMaxUndoLength:function(){return	this.maxUndoLength},setMaxUndoLength:function($){this.maxUndoLength=$},canUndo:function(){return this.undoList.length>0},canRedo:function(){return this.redoList.length>0}});
								Gef.ns("Gef.commands");
									Gef.commands.CompoundCommand=Gef.extend(Gef.commands.Command,{constructor:function(){this.commandList=[]},addCommand:function($){this.commandList.push($)},getCommandList:function(){return	this.commandList},execute:function(){for(var $=0;$<this.commandList.length;$++)this.commandList[$].execute()},undo:function(){for(var $=this.commandList.length-1;$>=0;$--)this.commandList[$].undo()},redo:function(){for(var $=0;$<this.commandList.length;$++)this.commandList[$].redo()}});
	Gef.ns("Gef.figure");Gef.figure.Figure=Gef.extend(Object,{
									constructor:function($){
										this.children=[];
										$=$?$:{};
										Gef.apply(this,$)},
									setParent:function($){this.parent=$},
									getParent:function(){return this.parent},
									getParentEl:function(){return this.parent.el},
									getChildren:function(){return	this.children},
									addChild:function($){
										this.children.push($);
										$.setParent(this)},
									removeChild:function($){$.remove()},
									render:function(){
										if(!this.el)if(Gef.isVml){this.renderVml();
										this.onRenderVml()}else{this.renderSvg();
										this.onRenderSvg()}
										for(var $=0;$<this.children.length;$++)this.children[$].render()},
									renderSvg:Gef.emptyFn,
									renderVml:Gef.emptyFn,
									onRenderVml:function(){
										this.el.setAttribute("id",Gef.id());
										this.el.style.position="absolute";
										this.el.style.cursor="pointer";
										this.getParentEl().appendChild(this.el)},
									onRenderSvg:function(){
										this.el.setAttribute("id",Gef.id());
										this.el.setAttribute("fill","white");
										this.el.setAttribute("stroke","black");
										this.el.setAttribute("stroke-width","1");
										this.el.setAttribute("cursor","pointer");
										this.getParentEl().appendChild(this.el)},
									getId:function(){return this.el.getAttribute("id")},
									remove:function(){
											this.parent.getChildren().remove(this);
											this.getParentEl().removeChild(this.el)},
									show:function(){this.el.style.display=""},
									hide:function(){this.el.style.display="none"},
									moveTo:Gef.emptyFn,
									update:Gef.emptyFn});
								Gef.ns("Gef.figure");
									Gef.figure.GroupFigure=Gef.extend(Gef.figure.Figure,{
										renderVml:function(){
											var	$=document.createElement("div");
											$.id=this.id;this.el=$;
											this.getParentEl().appendChild($)},
										renderSvg:function(){
											var $=document.createElementNS(Gef.svgns,"g");
											$.setAttribute("id",this.id);
											this.el=$;
											this.getParentEl().appendChild($)},onRenderVml:function(){},onRenderSvg:function(){}});
								Gef.ns("Gef.figure");
				Gef.figure.LineFigure=Gef.extend(Gef.figure.Figure,{
								renderVml:function(){
											var $=document.createElement("v:line");
											$.from=this.x1+","+this.y1;
											$.to=this.x2+","+this.y2;this.el=$},
								renderSvg:function(){
											var	$=document.createElementNS(Gef.svgns,"line");
											$.setAttribute("x1",this.x1+"px");
											$.setAttribute("y1",this.y1+"px");
											$.setAttribute("x2",this.x2+"px");
											$.setAttribute("y2",this.y2+"px");
											this.el=$},
								onRenderVml:function(){										
												this.el.setAttribute("id",Jpdl.id());
												this.el.style.position="absolute";
												this.el.style.cursor="pointer";
												this.el.setAttribute("strokeweight",2);
												this.el.setAttribute("strokecolor","blue");
												this.getParentEl().appendChild(this.el)},
								onRenderSvg:function(){
												this.el.setAttribute("id",Jpdl.id());
												this.el.setAttribute("fill","white");
												this.el.setAttribute("stroke","blue");
												this.el.setAttribute("stroke-width","2");
												this.el.setAttribute("cursor","pointer");
												this.getParentEl().appendChild(this.el)},
								update:function(A,B,$,_){
													this.x1=A;
													this.y1=B;
													this.x2=$;
													this.y2=_;
													if(Gef.isVml)this.updateVml();
													else this.updateSvg()},
								updateVml:function(){
												this.el.from=this.x1+","+this.y1;
												this.el.to=this.x2+","+this.y2},
								updateSvg:function(){
													this.el.setAttribute("x1",this.x1+"px");
													this.el.setAttribute("y1",this.y1+"px");
													this.el.setAttribute("x2",this.x2+"px");
													this.el.setAttribute("y2",this.y2+"px")}});
				Gef.ns("Gef.figure");Gef.figure.PolylineFigure=Gef.extend(Gef.figure.Figure,{
								getPoint:function(_,C){
									var A="";
									for(var $=0;$<this.points.length;$++){
										var B=this.points[$];A+=(B[0]+_)+","+(B[1]+C)+" "}return A},
										renderVml:function(){
											var $=document.createElement("v:polyline");
											$.setAttribute("points",this.getPoint(0,0));
											this.el=$},
										renderSvg:function(){
											var $=document.createElementNS(Gef.svgns,"polyline");
											$.setAttribute("points",this.getPoint(0,0));
											this.el=$},
										onRenderVml:function(){
											this.el.setAttribute("id",Gef.id());
											this.el.style.position="absolute";
											this.el.style.cursor="pointer";
											this.el.setAttribute("strokeweight",2);
											this.el.setAttribute("strokecolor","blue");
											Gef.model.root.appendChild(this.el)},
										onRenderSvg:function(){
											this.el.setAttribute("id",Gef.id());
											this.el.setAttribute("fill","none");
											this.el.setAttribute("stroke","blue");
											this.el.setAttribute("stroke-width","2");
											this.el.setAttribute("cursor","pointer");
											Gef.model.root.appendChild(this.el)},
										onSelectVml:function(){
											this.el.setAttribute("strokeweight","4");
											this.el.setAttribute("strokecolor","green")},
										onSelectSvg:function(){this.el.setAttribute("stroke-width","4");
											this.el.setAttribute("stroke","green")},
										onDeselectVml:function(){
											this.el.setAttribute("strokeweight","2");
											this.el.setAttribute("strokecolor","blue")},
										onDeselectSvg:function(){
											this.el.setAttribute("stroke-width","2");
											this.el.setAttribute("stroke","blue")}});
								Gef.ns("Gef.figure");
						Gef.figure.RectFigure=Gef.extend(Gef.figure.Figure,{ // 选择task任务节点时的方框,重点
																				// RectFigure
										renderVml:function(){
											var $=document.createElement("v:rect");
											$.style.left=this.x+"px";
											$.style.top=this.y+"px";
											$.style.width=this.w+"px";
											$.style.height=this.h+"px";
											this.el=$},
										renderSvg:function(){
												var $=document.createElementNS(Gef.svgns,"rect");
												$.setAttribute("x",this.x+"px");
												$.setAttribute("y",this.y+"px");
												$.setAttribute("width",this.w+"px");
												$.setAttribute("height",this.h+"px");
												this.el=$},
										move:function($,_){
											this.moveTo(this.x+$,this.y+_)},
										moveTo:function(_,$){
												this.x=_;
												this.y=$;
												if(Gef.isVml)this.moveToVml();
												else this.moveToSvg()},
										moveToVml:function(){
												this.el.style.left=this.x+"px";
												this.el.style.top=this.y+"px"},
										moveToSvg:function(_,$){
												this.el.setAttribute("x",this.x);
												this.el.setAttribute("y",this.y)},
										update:function(B,A,$,_){
												this.x=B;
												this.y=A;
												this.w=$;
												this.h=_;
												if(Gef.isVml)this.updateVml();
												else this.updateSvg()},
										updateVml:function(){this.moveToVml();
												this.el.style.width=this.w+"px";
												this.el.style.height=this.h+"px"},updateSvg:function(){this.moveToSvg();
												this.el.setAttribute("width",this.w);
												this.el.setAttribute("height",this.h)},
										resize:function(_,A,D){
												var E=this.x,C=this.y,$=this.w,B=this.h;
												if(_=="n"){C=C+D;B=B-D}
												else if(_=="s")B=B+D;
												else if(_=="w"){E=E+A;$=$-A}
												else if(_=="e")$=$+A;
												else if(_=="nw"){E=E+A;$=$-A;C=C+D;B=B-D}
												else if(_=="ne"){$=$+A;C=C+D;B=B-D}
												else	if(_=="sw"){E=E+A;$=$-A;B=B+D}
												else if(_=="se"){$=$+A;B=B+D}this.update(E,C,$,B);return{x:E,y:C,w:$,h:B}}});
												Gef.ns("Gef.figure");
					Gef.figure.RoundRectFigure=Gef.extend(Gef.figure.RectFigure,{
										renderVml:function(){
											Gef.figure.RoundRectFigure.superclass.renderVml.call(this);
											this.el.arcsize=0.2},
										renderSvg:function(){
											Gef.figure.RoundRectFigure.superclass.renderSvg.call(this);
											this.el.setAttribute("rx",10);
											this.el.setAttribute("ry",10)}});
											Gef.ns("Gef.figure");
					Gef.figure.ImageFigure=Gef.extend(Gef.figure.RectFigure,{
										renderVml:function(){ // 图片形状
											var	$=document.createElement("img");
											$.style.left=this.x+"px";
											$.style.top=this.y+"px";
											$.setAttribute("src",this.url);
											this.el=$},
										renderSvg:function(){
											var $=document.createElementNS(Gef.svgns,"image");
											$.setAttribute("x",this.x+"px");
											$.setAttribute("y",this.y+"px");
											$.setAttribute("width","48px");
											$.setAttribute("height","48px");
											$.setAttributeNS(Gef.linkns,"xlink:href",this.url);
											this.el=$},
										update:function(B,A,$,_){
												this.moveTo(B,A)},
										onRenderVml:function(){
												this.el.setAttribute("id",Gef.id());
												this.el.style.position="absolute";
												this.el.style.cursor="pointer";
												this.getParentEl().appendChild(this.el)},
										onRenderSvg:function(){
												this.el.setAttribute("id",Gef.id());
												this.el.setAttribute("cursor","pointer");
												this.getParentEl().appendChild(this.el)}});
												Gef.ns("Gef.figure");
						Gef.figure.RootFigure=Gef.extend(Gef.figure.Figure,{
										render:function(){this.getParentEl().onselectstart=function(){return false};
										Gef.figure.RootFigure.superclass.render.call(this)},
									renderVml:function(){
											var	$=document.createElement("div");
											$.setAttribute("id",Gef.id());
											this.getParentEl().appendChild($);
											this.el=$},
									renderSvg:function(){
											var C=this.getParentEl(),B=C.ownerDocument.createElementNS(Gef.svgns,"svg");
											B.setAttribute("id",Gef.id());
											B.setAttribute("width",C.style.width.replace(/px/,""));
											B.setAttribute("height",C.style.height.replace(/px/,""));
											B.style.fontFamily="Verdana";
											B.style.fontSize="12px";
											C.appendChild(B);
											var _=B.ownerDocument.createElementNS(Gef.svgns,"defs");
											B.appendChild(_);
											var A=B.ownerDocument.createElementNS(Gef.svgns,"marker");
											A.setAttribute("id","markerArrow");
											A.setAttribute("markerUnits","userSpaceOnUse");
											A.setAttribute("markerWidth",8);
											A.setAttribute("markerHeight",8);
											A.setAttribute("refX",8);
											A.setAttribute("refY",4);
											A.setAttribute("orient","auto");
											var $=B.ownerDocument.createElementNS(Gef.svgns,"path");
											$.setAttribute("d","M 0	0 L 8 4	L 0 8 z");
											$.setAttribute("stroke","#909090");
											$.setAttribute("fill","#909090");
											A.appendChild($);
											_.appendChild(A);
											var D=B.ownerDocument.createElementNS(Gef.svgns,"marker");
											D.setAttribute("id","markerDiamond");
											D.setAttribute("markerUnits","userSpaceOnUse");
											D.setAttribute("markerWidth",16);
											D.setAttribute("markerHeight",8);
											D.setAttribute("refX",0);
											D.setAttribute("refY",4);
											D.setAttribute("orient","auto");
											var E=B.ownerDocument.createElementNS(Gef.svgns,"path");
											E.setAttribute("d","M	0 4 L 8	8 L 16 4 L 8 0 z");
											E.setAttribute("stroke","#909090");
											E.setAttribute("fill","#FFFFFF");
											D.appendChild(E);
											_.appendChild(D);
											this.el=B},onRenderVml:function(){},onRenderSvg:function(){}});
									Gef.ns("Gef.figure");
									Gef.figure.NoFigure=Gef.extend(Gef.figure.Figure,{render:Gef.emptyFn,update:Gef.emptyFn});
									Gef.ns("Gef.figure");
						Gef.figure.NodeFigure=Gef.extend(Gef.figure.RoundRectFigure,{  // 节点图形
																						// ,重点
										constructor:function($){
											this.outputs=[];
											this.incomes=[];
											Gef.figure.NodeFigure.superclass.constructor.call(this,$);
											this.w=90;
											this.h=50},
										renderVml:function(){
											var A=document.createElement("v:group");
											A.style.left=this.x;
											A.style.top=this.y;
											A.style.width=this.w;
											A.style.height=this.h;
											A.setAttribute("coordsize",this.w+","+this.h);
											this.el=A;
											var _=document.createElement("v:roundrect");
											_.style.position="absolute";
											_.style.left="5px";
											_.style.top="5px";
											_.style.zIndex=1;
											_.style.width=(this.w-10)+"px";
											_.style.height=(this.h-10)+"px";
											_.setAttribute("id",Gef.id());
											_.setAttribute("arcsize",0.2);
											_.setAttribute("fillcolor","#F6F7FF");
											_.setAttribute("strokecolor","#03689A");
											_.setAttribute("strokeweight","2");
											_.style.verticalAlign="middle";
											A.appendChild(_);
											this.rectEl=_;
											var B=this.getTextPosition(this.w,this.h),$=document.createElement("v:textbox");
											$.style.textAlign="center";
											$.style.fontFamily="Verdana";
											$.style.fontSize="12px";
											$.setAttribute("id",Gef.id());
											$.innerHTML=this.name;
											_.appendChild($);
											this.textEl=$},
										renderSvg:function(){
											var A=document.createElementNS(Gef.svgns,"g");
											A.setAttribute("transform","translate("+this.x+","+this.y+")");
											this.el=A;
											var _=document.createElementNS(Gef.svgns,"rect");
											_.setAttribute("id",Gef.id());
											_.setAttribute("x",5);
											_.setAttribute("y",5);
											_.setAttribute("width",(this.w-10)+"px");
											_.setAttribute("height",(this.h-10)+"px");
											_.setAttribute("rx",10);_.setAttribute("ry",10);
											_.setAttribute("fill","#F6F7FF");
											_.setAttribute("stroke","#03689A");
											_.setAttribute("stroke-width","2");
											A.appendChild(_);
											this.rectEl=_;
											var B=this.getTextPosition(this.w,this.h),$=document.createElementNS(Gef.svgns,"text");
											$.setAttribute("id",Gef.id());
											$.setAttribute("x",B.x);
											$.setAttribute("y",B.y);
											$.setAttribute("text-anchor","middle");
											$.textContent=this.name;
											A.appendChild($);
											this.textEl=$},
									    onRenderVml:function(){
											this.el.setAttribute("id",Gef.id());
											this.el.style.position="absolute";
											this.el.style.cursor="pointer";
											this.getParentEl().appendChild(this.el)},
										onRenderSvg:function(){
											this.el.setAttribute("id",Gef.id());
											this.el.setAttribute("cursor","pointer");
											this.getParentEl().appendChild(this.el)},
										getTextPosition:function($,_){
											if(Gef.isVml)return this.getTextPositionVml($,_);
											else return this.getTextPositionSvg($,_)},
										getTextPositionVml:function(_,A){
											var $=Gef.getTextSize(this.name),C=_/2,B=A/2;
											return{x:C+"px",y:B+"px"}},
										getTextPositionSvg:function(_,A){
											var $=Gef.getTextSize(this.name),C=_/2,B=A/2+$.h/4;
											return{x:C+"px",y:B+"px"}},
										moveTo:function(B,A){
											Gef.NodeFigure.superclass.moveTo.call(this,B,A);
											for(var $=0;$<this.incomes.length;$++){
												var _=this.incomes[$];
												_.refresh()}
											for($=0;$<this.outputs.length;$++){_=this.outputs[$];_.refresh()}},
											moveToVml:function(){
												this.el.style.left=this.x+"px";
												this.el.style.top=this.y+"px"},
											moveToSvg:function($,_){
												this.el.setAttribute("transform","translate("+this.x+","+this.y+")")},
												update:function(B,A,$,_){
													this.x=B;
													this.y=A;this.w=$;this.h=_;
												if(Gef.isVml)this.resizeVml(B,A,$,_);
												else this.resizeSvg(B,A,$,_)},remove:function(){for(var $=this.outputs.length-1;$>=0;$--){var _=this.outputs[$];_.remove()}for($=this.incomes.length-1;$>=0;$--){_=this.incomes[$];_.remove()}Gef.figure.NodeFigure.superclass.remove.call(this)},
										hideText:function(){this.textEl.style.display="none"},
										updateAndShowText:function($){ // 更新和展现文本
												this.name=$;
												if(Gef.isVml)this.textEl.innerHTML=$;
												else this.textEl.textContent=$;
												this.textEl.style.display=""},
										cancelEditText:function(){this.textEl.style.display=""},
										resize:function(_,A,D){
												var E=this.x,C=this.y,$=this.w,B=this.h;
												if(_=="n"){C=C+D;B=B-D}
												else if(_=="s")B=B+D;
												else if(_=="w"){E=E+A;$=$-A}else if(_=="e")$=$+A;
												else if(_=="nw"){E=E+A;$=$-A;C=C+D;B=B-D}
												else if(_=="ne"){$=$+A;C=C+D;B=B-D}
												else if(_=="sw"){E=E+A;$=$-A;B=B+D}
												else if(_=="se"){$=$+A;B=B+D}
												if(Gef.isVml)this.resizeVml(E,C,$,B);
												else this.resizeSvg(E,C,$,B);
												return{x:E,y:C,w:$,h:B}},
										resizeVml:function(B,A,$,_){
												this.el.style.left=B+"px";
												this.el.style.top=A+"px";
												this.el.style.width=$+"px";
												this.el.style.height=_+"px";
												this.el.coordsize=$+","+_;
												this.rectEl.style.width=($-10)+"px";
												this.rectEl.style.height=(_-10)+"px"},
										resizeSvg:function(C,A,$,_){
												this.el.setAttribute("transform","translate("+C+","+A+")");
												this.rectEl.setAttribute("width",($-10)+"px");
												this.rectEl.setAttribute("height",(_-10)+"px");
												var B=this.getTextPosition($,_);
												this.textEl.setAttribute("x",B.x);
												this.textEl.setAttribute("y",B.y)},
										getTools:function(){return[]}});
					Gef.ns("Gef.figure");
					Gef.figure.ImageNodeFigure=Gef.extend(Gef.figure.ImageFigure,{
									constructor:function($){
											this.w=48;
											this.h=48;
											this.outputs=[];
											this.incomes=[];
											Gef.figure.ImageNodeFigure.superclass.constructor.call(this,$)},
										move:function(A,B){
											Gef.figure.ImageNodeFigure.superclass.move.call(this,A,B);
											for(var $=0;$<this.incomes.length;$++){
												var _=this.incomes[$];
												_.refresh()}
											for($=0;$<this.outputs.length;$++){
												_=this.outputs[$];
												_.refresh()}},
										remove:function(){
											for(var $=this.outputs.length-1;$>=0;$--){
												var _=this.outputs[$];
												_.remove()}
											for($=this.incomes.length-1;$>=0;$--){
												_=this.incomes[$];
												_.remove()}
											Gef.figure.ImageNodeFigure.superclass.remove.call(this)},
										getTools:function(){return[]}});
										Gef.ns("Gef.figure");
					Gef.figure.EdgeFigure=Gef.extend(Gef.figure.PolylineFigure,{constructor:function(_,$){
											this.from=_;
											this.to=$;
											if(!this.name)this.name="to "+$.name; // 添加流转的名称
											this.from.outputs.push(this);
											this.to.incomes.push(this);
											this.alive=true;
											this.innerPoints=[];
											this.calculate();
											Gef.figure.EdgeFigure.superclass.constructor.call(this,{});
											this.textX=0;
											this.textY=0;
											this.conditional=false},
										render:function(){
											this.calculate();
											Gef.figure.EdgeFigure.superclass.render.call(this);
											this.setConditional(this.conditional)},
										onRenderVml:function(){
											this.el.setAttribute("id",Gef.id());
											this.el.style.position="absolute";
											this.el.style.cursor="pointer";
											this.el.setAttribute("strokeweight",2);
											this.el.setAttribute("strokecolor","#909090");
											this.getParentEl().appendChild(this.el);
											this.stroke=document.createElement("v:stroke");
											this.el.appendChild(this.stroke);
											this.stroke.setAttribute("endArrow","Classic");
											var $=document.createElement("textbox");
											$.setAttribute("id",Gef.id());
											var _=this.getTextLocation();
											$.style.position="absolute";
											$.style.left=_.x+"px";
											$.style.top=(_.y-_.h)+"px";
											$.style.textAlign="center";
											$.style.cursor="pointer";
											$.style.fontFamily="Verdana";
											$.style.fontSize="12px";
											$.innerHTML=this.name;
											$.setAttribute("edgeId",this.getId());
											this.getParentEl().appendChild($);
											this.textEl=$},
									    onRenderSvg:function(){
											this.el.setAttribute("id",Gef.id());
											this.el.setAttribute("fill","none");
											this.el.setAttribute("stroke","#909090");
											this.el.setAttribute("stroke-width","2");
											this.el.setAttribute("cursor","pointer");
											this.el.setAttribute("marker-end","url(#markerArrow)");
											this.getParentEl().appendChild(this.el);
											var	$=document.createElementNS(Gef.svgns,"text");
											$.setAttribute("id",Gef.id());
											var _=this.getTextLocation();
											$.setAttribute("x",_.x);
											$.setAttribute("y",_.y);
											$.setAttribute("cursor","pointer");
											$.textContent=this.name;
											$.setAttribute("edgeId",this.getId());
											this.getParentEl().appendChild($);
											this.textEl=$},
										setConditional:function($){this.conditional=$;if(Gef.isVml)this.setConditionalVml();else this.setConditionalSvg()},
										setConditionalVml:function(){
												if(this.conditional===true)this.stroke.setAttribute("startArrow","diamond");
												else this.stroke.setAttribute("startArrow","none")},
										setConditionalSvg:function(){if(this.conditional===true)this.el.setAttribute("marker-start","url(#markerDiamond)");
												else this.el.setAttribute("marker-start","")},
										calculate:function(){
												var B=new Geom.Line(this.from.x+this.from.w/2,this.from.y+this.from.h/2,this.to.x+this.to.w/2,this.to.y+this.to.h/2),A=new Geom.Rect(this.from.x,this.from.y,this.from.w,this.from.h),_=new Geom.Rect(this.to.x,this.to.y,this.to.w,this.to.h),$=A.getCrossPoint(B),C=_.getCrossPoint(B);if($==null||C==null){this.x1=0;this.y1=0;this.x2=0;this.y2=0}else{this.x1=$.x;this.y1=$.y;this.x2=C.x;this.y2=C.y}this.convert()},
										recalculate:function($,C){
													var _=new Geom.Line($.x+$.w/2,$.y+$.h/2,C[0],C[1]),B=new Geom.Rect($.x,$.y,$.w,$.h),A=B.getCrossPoint(_);
													return A},
										convert:function(){
												this.points=[];
												var A=this.points,$=this.innerPoints.length;
												if($>0){
													var B=this.recalculate(this.from,this.innerPoints[0]);
													if(B){this.x1=B.x;this.y1=B.y}}A.push([this.x1,this.y1]);
													for(var _=0;_<this.innerPoints.length;_++)A.push([this.innerPoints[_][0],this.innerPoints[_][1]]);
													if($>0){B=this.recalculate(this.to,this.innerPoints[$-1]);
													if(B){this.x2=B.x;this.y2=B.y}}A.push([this.x2,this.y2])},
										update:function(A,B,$,_){
												this.x1=A;
												this.y1=B;
												this.x2=$;
												this.y2=_;
												if(Gef.isVml)this.updateVml();
												else this.updateSvg()},
										updateVml:function(){
												this.el.points.value=this.getPoint(0,0);
												var $=this.getTextLocation();
												this.textEl.style.left=$.x+"px";
												this.textEl.style.top=($.y-$.h)+"px"},
										updateSvg:function(){
												this.el.setAttribute("points",this.getPoint(0,0));
												var $=this.getTextLocation();
												this.textEl.setAttribute("x",$.x);
												this.textEl.setAttribute("y",$.y)},
										refresh:function(){
												if(!this.el)this.render();
												this.calculate();
												this.update(this.x1,this.y1,this.x2,this.y2)},
										getTextLocation:function(){
												var $=Gef.getTextSize(this.name),_=$.w+2,A=$.h+2,C=(this.x1+this.x2)/2+this.textX-1,B=(this.y1+this.y2)/2+this.textY+2;
												return{x:C,y:B,w:_,h:A}},
										updateAndShowText:function(_){
												this.name=_;
												if(Gef.isVml){
													this.textEl.innerHTML=_;
													var $=this.getTextLocation();
													this.textEl.style.left=$.x;
													this.textEl.style.top=$.y}else	this.textEl.textContent=_;
													this.textEl.style.display=""},
										remove:function(){
												if(this.alive){
													this.from.outputs.remove(this);
													this.to.incomes.remove(this);
													this.getParentEl().removeChild(this.el);
													this.getParentEl().removeChild(this.textEl);
													this.alive=false}},
										modify:function(){
												this.convert();
												if(Gef.isVml)this.el.points.value=this.getPoint(0,0);
												else this.el.setAttribute("points",this.getPoint(0,0));
												this.refresh()}});
												Gef.ns("Gef.figure");
							Gef.figure.DraggingRectFigure=Gef.extend(Gef.figure.RectFigure,{constructor:function($){
											Gef.figure.DraggingRectFigure.superclass.constructor.call(this,$);
											this._className="Gef.DraggingRectFigure"},
										onRenderVml:function(){
											this.el.setAttribute("id",Gef.id());
											this.el.style.position="absolute";
											this.el.style.cursor="normal";
											this.getParentEl().appendChild(this.el);
											this.stroke=document.createElement("v:stroke");
											this.el.appendChild(this.stroke);
											this.stroke.setAttribute("strokecolor","black");
											this.stroke.setAttribute("dashstyle","dot");
											this.fill=document.createElement("v:fill");
											this.el.appendChild(this.fill);
											this.fill.setAttribute("color","#F6F6F6");
											this.fill.setAttribute("opacity","0.5")},
										onRenderSvg:function(){
											this.el.setAttribute("id",Gef.id());
											this.el.setAttribute("fill","#F6F6F6");
											this.el.setAttribute("opacity","0.7");
											this.el.setAttribute("stroke","black");
											this.el.setAttribute("stroke-width","1");
											this.el.setAttribute("cursor","normal");
											this.el.setAttribute("stroke-dasharray","2");
											this.getParentEl().appendChild(this.el)},
										update:function(E,C,_,A){
											var $=this.x,B=this.y,D={x:E,y:C,w:_,h:A};
											if(_<0){this.oldX=this.x;D.x=E+_;D.w=-_}
											if(A<0){D.y=C+A;D.h=-A}Gef.figure.DraggingRectFigure.superclass.update.call(this,D.x,D.y,D.w,D.h);
											if(_<0)this.x=$;if(A<0)this.y=B}});
											Gef.ns("Gef.figure");
								Gef.figure.DraggingEdgeFigure=Gef.extend(Gef.figure.EdgeFigure,{constructor:function($){
											Gef.figure.DraggingEdgeFigure.superclass.constructor.call(this,{outputs:[]},{incomes:[]});
											this._className="Gef.DraggingEdgeFigure"},
										onRenderVml:function(){
											this.el.setAttribute("id",Gef.id());
											this.el.style.position="absolute";
											this.el.style.cursor="normal";
											this.getParentEl().appendChild(this.el);
											this.stroke=document.createElement("v:stroke");
											this.el.appendChild(this.stroke);
											this.stroke.color="#909090";
											this.stroke.dashstyle="dot";
											this.stroke.endArrow="Classic";
											this.stroke.weight=2},
										onRenderSvg:function(){
											this.el.setAttribute("id",Gef.id());
											this.el.setAttribute("fill","none");
											this.el.setAttribute("stroke","#909090");
											this.el.setAttribute("stroke-width","2");
											this.el.setAttribute("cursor","normal");
											this.el.setAttribute("stroke-dasharray","2");
											this.el.setAttribute("marker-end","url(#markerArrow)");
											this.getParentEl().appendChild(this.el)},
										updateForDragging:function($,_){
											this.from=$;
											this.x1=this.from.x;
											this.y1=this.from.y;
											this.to={x:_.x,y:_.y,w:2,h:2};
											this.x2=this.to.x;
											this.y2=this.to.y;
											this.innerPoints=[];
											this.refresh()},
										updateForMove:function(_,$,A){
											if($=="start"){
												this.from={x:A.x,y:A.y,w:2,h:2};
												this.x1=A.x;
												this.y1=A.y;
												this.to=_.to;
												this.x2=_.x2;
												this.y2=_.y2}else{this.from=_.from;this.x1=_.x1;this.y1=_.y1;
												this.to={x:A.x,y:A.y,w:2,h:2};
												this.x2=A.x;this.y2=A.y}
												this.innerPoints=_.innerPoints;this.refresh()},
										moveToHide:function(){
												this.from=null;
												this.to=null;
												this.innerPoints=null;
												this.points=[[-1,-1],[-1,-1]];
												this.update(-1,-1,-1,-1)},
										updateVml:function(){this.el.points.value=this.getPoint(0,0)},
										updateSvg:function(){this.el.setAttribute("points",this.getPoint(0,0))}});
										Gef.ns("Gef.figure");
						Gef.figure.DraggingTextFigure=Gef.extend(Gef.figure.Figure,{constructor:function($){
												Gef.figure.DraggingTextFigure.superclass.constructor.call(this);
												this.edge=$},
										getTextLocation:function(){
												var $=this.edge.getTextLocation(),E=$.x,D=$.y,A=$.w,B=$.h,C=A/2,_=B/2;D-=B;
												return{x:E,y:D,w:A,h:B,cx:C,cy:_}},
										renderVml:function(){
												var	$=this.getTextLocation(),G=$.x,F=$.y,A=$.w,D=$.h,E=$.cx,_=$.cy,C=document.createElement("v:group");
												C.style.left=G;
												C.style.top=F;
												C.style.width=A;
												C.style.height=D;
												C.setAttribute("coordsize",A+","+D);
												this.el=C;var B=document.createElement("v:rect");
												B.filled="f";
												B.strokecolor="black";
												B.style.left="0px";
												B.style.top="0px";
												B.style.width=A+"px";
												B.style.height=D+"px";
												C.appendChild(B);
												this.rectEl=B;
												this.nwEl=this.createItemVml(0,0,"nw");
												this.neEl=this.createItemVml(A,0,"ne");
												this.swEl=this.createItemVml(0,D,"sw");
												this.seEl=this.createItemVml(A,D,"se")},
										createItemVml:function(B,A,_){
												var $=document.createElement("v:rect");
												$.id=this.edge.getId()+":"+_;$.fillcolor="black";
												$.style.cursor=_+"-resize";
												$.style.left=(B-2)+"px";
												$.style.top=(A-2)+"px";
												$.style.width="4px";
												$.style.height="4px";
												this.el.appendChild($);
												return $},
										renderSvg:function(){
												var	$=this.getTextLocation(),G=$.x,F=$.y,A=$.w,D=$.h,E=$.cx,_=$.cy,C=document.createElementNS(Gef.svgns,"g");
												C.setAttribute("transform","translate("+G+","+F+")");
												this.el=C;var B=document.createElementNS(Gef.svgns,"rect");
												B.setAttribute("x",0);
												B.setAttribute("y",0);
												B.setAttribute("width",A);
												B.setAttribute("height",D);
												B.setAttribute("fill","none");
												B.setAttribute("stroke","black");
												this.rectEl=B;
												this.el.appendChild(B);
												this.nwEl=this.createItemSvg(0,0,"nw");
												this.neEl=this.createItemSvg(A,0,"ne");
												this.swEl=this.createItemSvg(0,D,"sw");
												this.seEl=this.createItemSvg(A,D,"se")},
										createItemSvg:function(B,A,_){
												var $=document.createElementNS(Gef.svgns,"rect");
												$.setAttribute("id",this.edge.getId()+":"+_);
												$.setAttribute("cursor",_+"-resize");
												$.setAttribute("x",B-2);
												$.setAttribute("y",A-2);
												$.setAttribute("width","5");
												$.setAttribute("height","5");
												$.setAttribute("fill","black");
												$.setAttribute("stroke","white");
												this.el.appendChild($);
												return $},
										resize:function(A,B,$,_){
												if(Gef.isVml)this.resizeVml(A,B,$,_);
												else this.resizeSvg(A,B,$,_)},resizeVml:function(F,H,A,E){
													var $=this.getTextLocation(),I=$.x,G=$.y,B=$.w,C=$.h,D=$.cx,_=$.cy;
													this.el.style.left=I+"px";
													this.el.style.top=G+"px";
													this.el.style.width=B+"px";
													this.el.style.height=C+"px";
													this.el.coordsize=B+","+C;
													this.rectEl.style.width=B+"px";
													this.rectEl.style.height=C+"px";this.neEl.style.left=(B-2)+"px";
													this.swEl.style.top=(C-2)+"px";
													this.seEl.style.left=(B-2)+"px";
													this.seEl.style.top=(C-2)+"px"},
										resizeSvg:function(F,H,A,E){
												var $=this.getTextLocation(),I=$.x,G=$.y,B=$.w,C=$.h,D=$.cx,_=$.cy;
												this.el.setAttribute("transform","translate("+I+","+G+")");
												this.rectEl.setAttribute("width",B);
												this.rectEl.setAttribute("height",C);
												this.neEl.setAttribute("x",B-2);
												this.swEl.setAttribute("y",C-2);
												this.seEl.setAttribute("x",B-2);
												this.seEl.setAttribute("y",C-2)},
										refresh:function(){
													this.resize(this.edge.x1,this.edge.y1,this.edge.x2,this.edge.y2);
													this.updateAndShowText()},
										updateAndShowText:function(){
												var $=this.edge.getTextLocation(),C=$.x,B=$.y,_=$.w,A=$.h;
												if(Gef.isVml){this.edge.textEl.style.left=C+"px";
												this.edge.textEl.style.top=(B-A)+"px"}else{this.edge.textEl.setAttribute("x",C);
												this.edge.textEl.setAttribute("y",B)}}});
												Gef.ns("Gef.figure");
								Gef.figure.ResizeNodeHandle=Gef.extend(Gef.figure.Figure,{constructor:function($){ // 重设size时候的处理函数
												this.children=[];
												this.node=$},
										renderVml:function(){
												var D=this.node,G=D.x,F=D.y,_=D.w,C=D.h,E=_/2,$=C/2,B=document.createElement("v:group");
												B.style.left=G;B.style.top=F;B.style.width=_;B.style.height=C;B.setAttribute("coordsize",_+","+C);
												this.el=B;
												var	A=document.createElement("v:rect");
												A.filled="f";
												A.strokecolor="black";
												A.style.left="0px";
												A.style.top="0px";
												A.style.width=_+"px";
												A.style.height=C+"px";
												B.appendChild(A);
												this.rectEl=A;
												this.nEl=this.createItemVml(E,0,"n");
												this.sEl=this.createItemVml(E,C,"s");
												this.wEl=this.createItemVml(0,$,"w");
												this.eEl=this.createItemVml(_,$,"e");
												this.nwEl=this.createItemVml(0,0,"nw");
												this.neEl=this.createItemVml(_,0,"ne");
												this.swEl=this.createItemVml(0,C,"sw");
												this.seEl=this.createItemVml(_,C,"se");
												Gef.each(D.getTools(),function($){$.render(B,D)})},
										createItemVml:function(B,A,_){
												var $=document.createElement("v:rect");
												$.id=this.node.getId()+":"+_;
												$.fillcolor="black";
												$.strokecolor="white";
												$.style.cursor=_+"-resize";
												$.style.left=(B-2)+"px";
												$.style.top=(A-2)+"px";
												$.style.width="5px";
												$.style.height="5px";
												this.el.appendChild($);
												return $},
										renderSvg:function(){
												var D=this.node,G=D.x,F=D.y,_=D.w,C=D.h,E=_/2,$=C/2,B=document.createElementNS(Gef.svgns,"g");
												B.setAttribute("transform","translate("+G+","+F+")");
												this.el=B;
												var A=document.createElementNS(Gef.svgns,"rect");
												A.setAttribute("x",0);
												A.setAttribute("y",0);
												A.setAttribute("width",_);
												A.setAttribute("height",C);
												A.setAttribute("fill","none");
												A.setAttribute("stroke","black");
												this.rectEl=A;this.el.appendChild(A);
												this.nEl=this.createItemSvg(E,0,"n");
												this.sEl=this.createItemSvg(E,C,"s");
												this.wEl=this.createItemSvg(0,$,"w");
												this.eEl=this.createItemSvg(_,$,"e");
												this.nwEl=this.createItemSvg(0,0,"nw");
												this.neEl=this.createItemSvg(_,0,"ne");
												this.swEl=this.createItemSvg(0,C,"sw");
												this.seEl=this.createItemSvg(_,C,"se");
												Gef.each(D.getTools(),function($){$.render(B,D)})},
										createItemSvg:function(B,A,_){
												var $=document.createElementNS(Gef.svgns,"rect");
												$.setAttribute("id",this.node.getId()+":"+_);
												$.setAttribute("cursor",_+"-resize");
												$.setAttribute("x",B-2);
												$.setAttribute("y",A-2);
												$.setAttribute("width","5");
												$.setAttribute("height","5");
												$.setAttribute("fill","black");
												$.setAttribute("stroke","white");
												this.el.appendChild($);
												return $},
										resize:function(B,A,$,_){
												if(Gef.isVml)this.resizeVml(B,A,$,_);
												else this.resizeSvg(B,A,$,_)},
										resizeVml:function(B,A,$,_){
												this.el.style.left=B+"px";
												this.el.style.top=A+"px";
												this.el.style.width=$+"px";
												this.el.style.height=_+"px";
												this.el.coordsize=$+","+_;
												this.rectEl.style.width=$+"px";
												this.rectEl.style.height=_+"px";
												this.nEl.style.left=($/2-2)+"px";
												this.sEl.style.left=($/2-2)+"px";
												this.sEl.style.top=(_-2)+"px";
												this.wEl.style.top=(_/2-2)+"px";
												this.eEl.style.left=($-2)+"px";
												this.eEl.style.top=(_/2-2)+"px";
												this.neEl.style.left=($-2)+"px";
												this.swEl.style.top=(_-2)+"px";
												this.seEl.style.left=($-2)+"px";
												this.seEl.style.top=(_-2)+"px";
												Gef.each(this.node.getTools(),function(C){C.resize(B,A,$,_)})},
										resizeSvg:function(B,A,$,_){
												this.el.setAttribute("transform","translate("+B+","+A+")");
												this.rectEl.setAttribute("width",$);
												this.rectEl.setAttribute("height",_);
												this.nEl.setAttribute("x",$/2-2);
												this.sEl.setAttribute("x",$/2-2);
												this.sEl.setAttribute("y",_-2);
												this.wEl.setAttribute("y",_/2-2);
												this.eEl.setAttribute("x",$-2);
												this.eEl.setAttribute("y",_/2-2);
												this.neEl.setAttribute("x",$-2);
												this.swEl.setAttribute("y",_-2);
												this.seEl.setAttribute("x",$-2);
												this.seEl.setAttribute("y",_-2);
												Gef.each(this.node.getTools(),function(C){C.resize(B,A,$,_)})},
										refresh:function(){
												this.resize(this.node.x,this.node.y,this.node.w,this.node.h)}});
										Gef.ns("Gef.figure");
								Gef.figure.ResizeEdgeHandle=Gef.extend(Gef.figure.Figure,{renderVml:function(){
												var C=this.edge.x1,F=this.edge.y1,H=this.edge.x2,D=this.edge.y2,E=this.edge.innerPoints,A=Math.max(C,H),B=Math.max(F,D),J=document.createElement("v:group");
												J.style.width=A+"px";
												J.style.height=B+"px";
												J.setAttribute("coordsize",A+","+B);
												this.getParentEl().appendChild(J);
												this.el=J;
												var	$=document.createElement("v:polyline");
												$.setAttribute("points",this.edge.getPoint(0,0));
												$.filled="false";
												$.strokeweight="1";
												$.strokecolor="black";
												$.style.position="absolute";
												J.appendChild($);
												this.lineEl=$;
												this.startEl=this.createItem(C,F,"start");
												this.endEl=this.createItem(H,D,"end");
												var G=0,I=[C,F],K=[];
												for(;G<E.length;G++){
													var _=E[G];
													K.push(this.createItem((I[0]+_[0])/2,(I[1]+_[1])/2,"middle:"+(G-1)+","+G));
													I=_;
													K.push(this.createItem(_[0],_[1],"middle:"+G+","+G))}K.push(this.createItem((I[0]+H)/2,(I[1]+D)/2,"middle:"+(G-1)+","+G));
													this.items=K},
										renderSvg:function(){
												var G=this.edge.x1,I=this.edge.y1,B=this.edge.x2,F=this.edge.y2,H=this.edge.innerPoints,E=document.createElementNS(Gef.svgns,"g");
												this.getParentEl().appendChild(E);
												this.el=E;
												var	_=document.createElementNS(Gef.svgns,"polyline");
												_.setAttribute("points",this.edge.getPoint(0,0));
												_.setAttribute("fill","none");
												_.setAttribute("stroke","black");
												E.appendChild(_);
												this.lineEl=_;
												this.startEl=this.createItem(G,I,"start");
												this.endEl=this.createItem(B,F,"end");
												var $=0,A=[G,I],D=[];
												for(;$<H.length;$++){
													var C=H[$];D.push(this.createItem((A[0]+C[0])/2,(A[1]+C[1])/2,"middle:"+($-1)+","+$));
													A=C;D.push(this.createItem(C[0],C[1],"middle:"+$+","+$))}D.push(this.createItem((A[0]+B)/2,(A[1]+F)/2,"middle:"+($-1)+","+$));
													this.items=D},createItem:function(A,$,_){if(Gef.isVml)return this.createItemVml(A,$,_);
													else return this.createItemSvg(A,$,_)},
												createItemVml:function(B,_,A){
													var $=document.createElement("v:rect");
													$.id=this.edge.getId()+":"+A;$.fillcolor="black";
													$.strokecolor="white";
													$.style.left=(B-2)+"px";
													$.style.top=(_-2)+"px";
													$.style.width="5px";
													$.style.height="5px";
													$.style.cursor="move";
													this.el.appendChild($);return $},
										createItemSvg:function(B,_,A){
												var $=document.createElementNS(Gef.svgns,"rect");
												$.setAttribute("id",this.edge.getId()+":"+A);
												$.setAttribute("x",B-2);
												$.setAttribute("y",_-2);
												$.setAttribute("width",5);
												$.setAttribute("height",5);
												$.setAttribute("fill","black");
												$.setAttribute("stroke","white");
												$.setAttribute("cursor","move");
												this.el.appendChild($);return $},
										update:function(){if(Gef.isVml)this.updateVml();else this.updateSvg()},
										updateVml:function(){
												var D=this.edge.x1,G=this.edge.y1,A=this.edge.x2,C=this.edge.y2;this.lineEl.points.value=this.edge.getPoint(0,0);
												this.startEl.style.left=(D-2)+"px";this.startEl.style.top=(G-2)+"px";
												this.endEl.style.left=(A-2)+"px";
												this.endEl.style.top=(C-2)+"px";
												var	E=this.edge.innerPoints,_=0,$=D,F=G;
												for(;_<E.length;_++){var B=E[_];this.items[_*2].style.left=(($+B[0])/2-2)+"px";
												this.items[_*2].style.top=((F+B[1])/2-2)+"px";
												$=B[0];F=B[1];
												this.items[_*2+1].style.left=(B[0]-2)+"px";
												this.items[_*2+1].style.top=(B[1]-2)+"px"}this.items[_*2].style.left=(($+A)/2-2)+"px";
												this.items[_*2].style.top=((F+C)/2-2)+"px"},
										updateSvg:function(){
												var D=this.edge.x1,G=this.edge.y1,A=this.edge.x2,C=this.edge.y2;
												this.lineEl.setAttribute("points",this.edge.getPoint(0,0));
												this.startEl.setAttribute("x",D-2);
												this.startEl.setAttribute("y",G-2);
												this.endEl.setAttribute("x",A-2);
												this.endEl.setAttribute("y",C-2);
												var	E=this.edge.innerPoints,_=0,$=D,F=G;
												for(;_<E.length;_++){
													var B=E[_];
													this.items[_*2].setAttribute("x",($+B[0])/2-2);
													this.items[_*2].setAttribute("y",(F+B[1])/2-2);
													$=B[0];F=B[1];
													this.items[_*2+1].setAttribute("x",B[0]-2);
													this.items[_*2+1].setAttribute("y",B[1]-2)}this.items[_*2].setAttribute("x",($+A)/2-2);
													this.items[_*2].setAttribute("y",(F+C)/2-2)},
										modify:function(){var _=this.edge.innerPoints.length,A=this.items.length;
												if(_*2+1>A){this.items.push(this.createItem(0,0,"middle:"+(_-1)+","+(_-1)));
												this.items.push(this.createItem(0,0,"middle:"+(_-1)+","+_))}else if(_*2+1<A){var $=null;
												$=this.items[A-1];
												this.el.removeChild($);
												this.items.remove($);
												$=this.items[A-2];
												this.el.removeChild($);
												this.items.remove($)}this.edge.refresh();
												this.update()}});
												Gef.ns("Gef.figure");
						Gef.figure.TextEditor=function($,A){  // 文本编辑输入框 重点
												var _=document.createElement("input");
												_.setAttribute("type","text");
												_.value="";
												_.style.position="absolute";
												_.style.left="0px";
												_.style.top="0px";
												_.style.width="0px";
												_.style.border="gray dotted 1px";
												_.style.background="white";
												_.style.display="none";
												_.style.zIndex=1000;
												_.style.fontFamily="Verdana";
												_.style.fontSize="12px";
												document.body.appendChild(_);
												this.el=_;
												this.baseX=$;
												this.baseY=A};
						Gef.figure.TextEditor.prototype={showForNode:function($){
												this.el.style.left=(this.baseX+$.x+5)+"px";
												this.el.style.top=(this.baseY+$.y+$.h/2-10)+"px";
												this.el.style.width=($.w-10)+"px";
												this.el.value=$.name;
												this.el.style.display="";
												this.el.focus()},
										showForEdge:function(A){
												var $=A.getTextLocation(),D=$.x,C=$.y,_=$.w,B=$.h;C-=B;
												this.el.style.left=this.baseX+D+"px";
												this.el.style.top=this.baseY+C+"px";
												this.el.style.width=_+"px";
												this.el.value=A.name;
												this.el.style.display="";
												this.el.focus()},
										getValue:function(){return this.el.value},
										hide:function(){this.el.style.display="none"},
										show:function(){this.el.style.display=""}};
					Gef.ns("Gef.gef");
						Gef.gef.Editor=Gef.extend(Gef.ui.EditorPart,{getEditDomain:Gef.emptyFn,getGraphicalViewer:Gef.emptyFn,getModelFactory:Gef.emptyFn,setModelFactory:Gef.emptyFn,getEditPartFactory:Gef.emptyFn,setEditPartFactory:Gef.emptyFn});
						Gef.ns("Gef.gef");Gef.gef.EditPartFactory=Gef.extend(Object,{createEditPart:Gef.emptyFn});
						Gef.ns("Gef.gef");Gef.gef.ModelFactory=Gef.extend(Object,{createModel:Gef.emptyFn});
	// 编辑域 查找的注册编辑器内的数据
	Gef.ns("Gef.gef");
	Gef.gef.EditDomain=Gef.extend(Object,{
								constructor:function(){
									this.commandStack=new Gef.commands.CommandStack();
									this.editPartRegistry={};
									this.model2EditPart={};
									this.figure2EditPart={}},
								getCommandStack:function(){return this.commandStack},
								setEditor:function($){this.editor=$},
								createEditPart:function(A){
												var _=A.getId(),B=A.getType(),$=this.editor.getEditPartFactory().createEditPart(B);
												this.editPartRegistry[_]=$;
												$.setModel(A);
												this.registerModel($);
												return $},
								findOrCreateEditPart:function(A){
												var _=A.getId(),B=A.getType(),$=this.editPartRegistry[_];
												if(!$)$=this.createEditPart(A);return $},
								registerModel:function($){
												var A=$.getModel(),_=A.getId();
												if(this.model2EditPart[_]!=null)this.model2EditPart[_]=$},
								findModelByEditPart:function(_){
												var $=_.getId();
												return this.model2EditPart[$]},
								removeModelByEditPart:function($){
												var A=$.getModel(),_=A.getId();
												if(this.model2EditPart[_]!=null){
													this.model2EditPart[_]=null;
													delete this.model2EditPart[_]}},
								registerFigure:function($){
								                var A=$.getFigure(),_=A.getId();
												if(this.figure2EditPart[_]!=null)this.figure2EditPart[_]=$},
								findFigureByEditPart:function(_){
												var $=_.getId();return this.figure2EditPart[$]},
								removeFigureByEditPart:function($){
												var A=$.getFigure(),_=A.getId();
												if(this.figure2EditPart[_]!=null){
													this.figure2EditPart[_]=null;
													delete	this.figure2EditPart[_]}}});
						Gef.ns("Gef.gef");Gef.gef.EditPartViewer=Gef.extend(Object,{
								getContents:Gef.emptyFn,
								setContents:Gef.emptyFn,
								getRootEditPart:Gef.emptyFn,
								setRootEditPart:Gef.emptyFn,
								getEditDomain:Gef.emptyFn,setEditDomain:Gef.emptyFn});
						// 图形视图器
						Gef.ns("Gef.gef");Gef.gef.GraphicalViewer=Gef.extend(Gef.gef.EditPartViewer,{});
						Gef.ns("Gef.gef");Gef.gef.EditPart=Gef.extend(Object,{getModel:Gef.emptyFn,getFigure:Gef.emptyFn});
						Gef.ns("Gef.gef");Gef.gef.RootEditPart=Gef.extend(Gef.gef.EditPart,{getContents:Gef.emptyFn,setContents:Gef.emptyFn,getViewer:Gef.emptyFn,setViewer:Gef.emptyFn});
						Gef.ns("Gef.gef.command");Gef.gef.command.CreateNodeCommand=Gef.extend(Gef.commands.Command,{
													constructor:function(A,$,_){
														this.childNode=A;
														this.parentNode=$;
														this.rect=_},
													execute:function(){
															this.childNode.x=this.rect.x;
															this.childNode.y=this.rect.y;
															this.childNode.w=this.rect.w;
															this.childNode.h=this.rect.h;
															this.redo()},
													redo:function(){this.parentNode.addChild(this.childNode)},
													undo:function(){this.parentNode.removeChild(this.childNode)}});
						Gef.ns("Gef.gef.command");Gef.gef.command.CreateConnectionCommand=Gef.extend(Gef.commands.Command,{constructor:function(A,_,$){this.connection=A;
												this.sourceNode=_;this.targetNode=$},execute:function(){this.connection.setSource(this.sourceNode);
												this.connection.setTarget(this.targetNode);this.redo()},redo:function(){this.connection.reconnect()},undo:function(){this.connection.disconnect()}});
						Gef.ns("Gef.gef.command");Gef.gef.command.MoveNodeCommand=Gef.extend(Gef.commands.Command,{
													constructor:function($,_){
															this.node=$;
															this.rect=_},
													execute:function(){
															this.oldX=this.node.x;
															this.oldY=this.node.y;
															this.newX=this.rect.x;
															this.newY=this.rect.y;
															this.redo()},
													redo:function(){
															this.node.moveTo(this.newX,this.newY)},
													undo:function(){
															this.node.moveTo(this.oldX,this.oldY)}});
						Gef.ns("Gef.gef.command");Gef.gef.command.MoveConnectionCommand=Gef.extend(Gef.commands.Command,{constructor:function(A,_,$){this.connection=A;this.sourceNode=_;this.targetNode=$},execute:function(){this.oldSourceNode=this.connection.getSource();this.oldTargetNode=this.connection.getTarget();this.newSourceNode=this.sourceNode;this.newTargetNode=this.targetNode;this.redo()},redo:function(){this.connection.setSource(this.newSourceNode);this.connection.setTarget(this.newTargetNode);this.connection.reconnect()},undo:function(){this.connection.setSource(this.oldSourceNode);this.connection.setTarget(this.oldTargetNode);this.connection.reconnect()}});
						Gef.ns("Gef.gef.command");Gef.gef.command.ResizeNodeCommand=Gef.extend(Gef.commands.Command,{constructor:function($,_){this.node=$;this.rect=_},execute:function(){this.oldX=this.node.x;this.oldY=this.node.y;this.oldW=this.node.w;this.oldH=this.node.h;this.newX=this.rect.x;this.newY=this.rect.y;this.newW=this.rect.w;this.newH=this.rect.h;this.redo()},redo:function(){this.node.resize(this.newX,this.newY,this.newW,this.newH)},undo:function(){this.node.resize(this.oldX,this.oldY,this.oldW,this.oldH)}});
						Gef.ns("Gef.gef.command");Gef.gef.command.ResizeConnectionCommand=Gef.extend(Gef.commands.Command,{constructor:function($,_,A){this.connection=$;this.oldInnerPoints=_;this.newInnerPoints=A},execute:function(){this.redo()},redo:function(){this.connection.resizeConnection(this.newInnerPoints)},undo:function(){this.connection.resizeConnection(this.oldInnerPoints)}});
						Gef.ns("Gef.gef.command");Gef.gef.command.RemoveNodeCommand=Gef.extend(Gef.commands.Command,{
													constructor:function($){
															this.node=$;this.parentNode=$.getParent()},
													execute:function(){this.redo()},
													redo:function(){this.node.removeForParent()},
													undo:function(){
															var _=this.node,$=this.parentNode;
															$.addChild(_)}});
						Gef.ns("Gef.gef.command");Gef.gef.command.RemoveConnectionCommand=Gef.extend(Gef.commands.Command,{
													constructor:function($){
														this.connection=$;this.sourceNode=$.getSource();
														this.targetNode=$.getTarget()},
													execute:function(){this.redo()},
													redo:function(){this.connection.disconnect()},undo:function(){this.connection.reconnect()}});
						Gef.ns("Gef.gef.command");Gef.gef.command.MoveTextCommand=Gef.extend(Gef.commands.Command,{constructor:function(_,$,C,B,A){this.connection=_;this.oldTextX=$;this.oldTextY=C;this.newTextX=B;this.newTextY=A},execute:function(){this.redo()},redo:function(){this.connection.updateTextPosition(this.newTextX,this.newTextY)},undo:function(){this.connection.updateTextPosition(this.oldTextX,this.oldTextY)}});
						Gef.ns("Gef.gef.command");Gef.gef.command.EditTextCommand=Gef.extend(Gef.commands.Command,{constructor:function(_,$){this.model=_;this.oldText=_.name;this.newText=$},execute:function(){this.redo()},redo:function(){this.model.updateText(this.newText)},undo:function(){this.model.updateText(this.oldText)}});
						Gef.ns("Gef.gef.command");Gef.gef.command.MoveAllCommand=Gef.extend(Gef.commands.Command,{constructor:function(B,_,A){this.nodes=B;this.dx=_;this.dy=A;var	$=[];Gef.each(B,function(_){Gef.each(_.getOutgoingConnections(),function(_){Gef.each(B,function(A){if(_.getTarget()==A)$.push(_)})})});this.connections=$},execute:function(){this.redo()},redo:function(){var A=this.nodes,$=this.dx,_=this.dy;Gef.each(A,function(A){A.moveTo(A.x+$,A.y+_)});
						Gef.each(this.connections,function(A){
												var B=A.innerPoints;
												Gef.each(B,function(A){A[0]+=$;A[1]+=_});
												A.resizeConnection(B)})},undo:function(){
													var A=this.nodes,$=this.dx,_=this.dy;
													Gef.each(A,function(A){A.moveTo(A.x-$,A.y-_)});
													Gef.each(this.connections,function(A){
														var B=A.innerPoints;
														Gef.each(B,function(A){A[0]-=$;A[1]-=_});
														A.resizeConnection(B)})}});
						Gef.ns("Gef.gef.editparts");Gef.gef.editparts.AbstractEditPart=Gef.extend(Gef.gef.EditPart,{
											constructor:function(){this.children=[]},
											getParent:function(){return this.parent},
											setParent:function($){this.parent=$},
											getRoot:function(){return this.getParent().getRoot()},
											getChildren:function(){return this.children},
											setChildren:function($){this.children=$},
											addChild:function($){this.children.push($);$.setParent(this);this.addChildVisual($)},
											removeChild:function($){this.removeChildVisual($);$.setParent(null);this.children.remove($)},addChildVisual:Gef.emptyFn,removeChildVisual:Gef.emptyFn,
											createChild:function(_){var $=this.createEditPart(_);return $},
											findOrCreateConnection:function($){
												var _=this.findOrCreateEditPart($);
												_.setSource($.getSource().getEditPart());
												_.setTarget($.getTarget().getEditPart());
												_.setParent(this.getRoot());
												this.addChildVisual(_);return	_},
											createEditPart:function($){
													return this.getViewer().editor.getEditDomain().createEditPart($)},
											findOrCreateEditPart:function($){
														return	this.getViewer().editor.getEditDomain().findOrCreateEditPart($)},
											getFigure:function(){if(this.figure==null)this.figure=this.createFigure();
														return this.figure},
											createFigure:Gef.emptyFn,
											getModel:function(){return this.model},
											setModel:function($){
													this.model=$;
													$.setEditPart(this);
													$.addChangeListener(this)},
											getModelChildren:function(){return this.model!=null&&this.model.children!=null?this.model.children:Gef.emptyArray},getCommand:Gef.emptyFn,
											refresh:function(){
												this.refreshVisuals();
												this.refreshChildren()},
											refreshVisuals:Gef.emptyFn,
											refreshChildren:function(){
												var B={};
												for(var _=0;_<this.getChildren().length;_++){
													var $=this.getChildren()[_];
													B[$.getModel().getId()]=$}
												for(_=0;_<this.getModelChildren().length;_++){
													var C=this.getModelChildren()[_],A=B[C.getId()];
													if(A==null){A=this.createChild(C);
													this.addChild(A)}A.refresh()}},
											getViewer:function(){return	this.getRoot().getViewer()}});
								Gef.ns("Gef.gef.editparts");
				Gef.gef.editparts.AbstractGraphicalEditPart=Gef.extend(Gef.gef.editparts.AbstractEditPart,{ // 抽象图形编辑部分
											addChildVisual:function($){
												if($.getClass()=="node"){
													var _=$.getFigure();
													this.getRoot().getFigure().addNode(_);
													_.render()}
												else if($.getClass()=="connection")
												if($.getSource()!=null&&$.getTarget()!=null){
													_=$.getFigure();
													if(!_.el){
														this.getRoot().getFigure().addConnection(_);
														_.render()}}},
											removeChildVisual:function($){
													var _=$.getFigure();this.getFigure().removeChild(_)},
											refresh:function(){ // 节点更新
												Gef.gef.editparts.AbstractGraphicalEditPart.superclass.refresh.call(this);
												this.refreshOutgoingConnections();
												this.refreshIncomingConnections()},
											refreshOutgoingConnections:function(){
													var B={};
													for(var _=0;_<this.getOutgoingConnections().length;_++){
														var $=this.getOutgoingConnections()[_];
														B[$.getModel().getId()]=$}
													for(_=0;_<this.getModelOutgoingConnections().length;_++){
														var C=this.getModelOutgoingConnections()[_],A=B[C.getId()];
													if(A==null){
														A=this.findOrCreateConnection(C);
														this.addOutgoingConnection(A)}else A.refresh()}},
											refreshIncomingConnections:function(){
														var B={};
														for(var	_=0;_<this.getIncomingConnections().length;_++){
															var $=this.getIncomingConnections()[_];
															B[$.getModel().getId()]=$}
															for(_=0;_<this.getModelIncomingConnections().length;_++){
																var C=this.getModelIncomingConnections()[_],A=B[C.getId()];
																if(A==null){A=this.findOrCreateConnection(C);
																this.addIncomingConnection(A)}else A.refresh()}},
											addOutgoingConnection:function($){
														this.getOutgoingConnections().push($)},
														addIncomingConnection:function($){
															this.getIncomingConnections().push($)},
														notifyChanged:function(D,B){
																if(D=="CHILD_ADDED"){
																	var C=B,$=this.createChild(C);
																	this.addChild($);
																	C.parent=this.model;
																	$.parent=this}
																else if(D=="CHILD_REMOVED_FROM_PARENT"){
																	this.parent.removeChild(this);
																	this.model.removeChangeListener(this)}
																else	if(D=="NODE_MOVED")this.refresh();
																else if(D=="CONNECTION_SOURCE_ADDED")this.refresh();
																else if(D=="CONNECTION_TARGET_ADDED")this.refresh();
																else if(D=="NODE_RESIZED")this.refresh();
																else	if(D=="CONNECTION_RESIZED"){
																	this.getFigure().innerPoints=this.getModel().innerPoints;
																	this.getFigure().modify()}
																else if(D=="TEXT_POSITION_UPDATED"){
																	this.getFigure().textX=this.getModel().textX;
																	this.getFigure().textY=this.getModel().textY;
																	this.getFigure().modify()}
																else if(D=="TEXT_UPDATED"){
																	var _=this.getModel().text,A=this.getFigure();
																	if(typeof A.updateAndShowText!="undefined")A.updateAndShowText(_)}
																else if(D=="CONNECTION_TEXT_UPDATED"){
																	_=this.getModel().text,A=this.getFigure();
																	A.updateAndShowText(_)}
																else if(D=="RECONNECTED"){
																	this.setSource(this.getModel().getSource().getEditPart());
																	this.setTarget(this.getModel().getTarget().getEditPart());
																	A=this.getFigure();
																	A.from=this.getSource().getFigure();
																	A.to=this.getTarget().getFigure();
																	if(!A.el){this.getRoot().getFigure().addConnection(A);
																	A.render()}A.refresh()}
																else if(D=="DISCONNECTED"){
																	this.getSource().removeOutgoingConnection(this);
																	this.getTarget().removeIncomingConnection(this);
																	this.getFigure().remove();
																	this.figure=null}},
												getCommand:function($){
																		switch($.role.name){
																			case"CREATE_NODE":return this.getCreateNodeCommand($);
																			case"CREATE_EDGE":return this.getCreateConnectionCommand($);
																			case"MOVE_NODE":return this.getMoveNodeCommand($);
																			case"MOVE_EDGE":return this.getMoveConnectionCommand($);
																			case"RESIZE_NODE":return this.getResizeNodeCommand($);
																			case"RESIZE_EDGE":return this.getResizeConnectionCommand($);
																			case"MOVE_TEXT":return this.getMoveTextCommand($);
																			case"EDIT_TEXT":return this.getEditTextCommand($);
																			case"REMOVE_EDGE":return this.getRemoveConnectionCommand($);
																			case"REMOVE_NODES":return	this.getRemoveNodesCommand($);
																			default:return null}},
												getCreateNodeCommand:function(A){
																	var C=A.role.node,$=this.getModel(),_=A.role.rect;
																	if(!this.canCreate(C)){
																		try{Gef.activeEditor.getPaletteHelper().resetActivePalette()}catch(B){}return null}
																			return	new Gef.gef.command.CreateNodeCommand(C,$,_)},
												canCreate:function(){return true},
												getCreateConnectionCommand:function(B){
																	var _=B.role.source,$=B.role.target,A=B.role.model;
																	if(this.isDuplicated(A,_,$))return null;
																	return new Gef.gef.command.CreateConnectionCommand(A,_,$)},
												canCreateOutgo:function(){return true},
												canCreateIncome:function(){return true},
												isDuplicated:function(A,_,$){
																	var B=false;Gef.each(_.getOutgoingConnections(),function(_){
																		if(_.getTarget()==$){
																			Gef.showMessage("validate.duplicate_connection","\u4e0d\u80fd\u91cd\u590d\u8fde\u7ebf");
																			B=true;return false}});return B},
												getMoveNodeCommand:function(A){
																	var $=A.role.dx,_=A.role.dy;
																	return new Gef.gef.command.MoveAllCommand(A.role.nodes,$,_)},
												getMoveConnectionCommand:function(B){
																	var	_=B.role.source,$=B.role.target,A=this.getModel();
																	if(this.isDuplicated(A,_,$))return null;return new Gef.gef.command.MoveConnectionCommand(A,_,$)},
												getResizeNodeCommand:function(A){
																	var	$=this.getModel(),_=A.role.rect;
																	return new Gef.gef.command.ResizeNodeCommand($,_)},
												canResize:function(){return true},
												getResizeConnectionCommand:function(A){
																	var	_=A.role.oldInnerPoints,B=A.role.newInnerPoints,$=this.getModel();
																	return new Gef.gef.command.ResizeConnectionCommand($,_,B)},
												getMoveTextCommand:function(B){
																	var	_=this.getModel(),$=B.role.oldTextX,D=B.role.oldTextY,C=B.role.newTextX,A=B.role.newTextY;
																	return new Gef.gef.command.MoveTextCommand(_,$,D,C,A)},
														getEditTextCommand:function(A){
																		var _=this.getModel(),$=A.role.text;
																		return new Gef.gef.command.EditTextCommand(_,$)},
														getRemoveConnectionCommand:function(_){var	$=this.getModel();
																		return new Gef.gef.command.RemoveConnectionCommand($)},
														getRemoveNodesCommand:function(B){
																	var $=new Gef.commands.CompoundCommand();
																	try{var _=[];
																	Gef.each(B.role.nodes,function($){Gef.each($.getOutgoingConnections(),function($){if(_.indexOf($)==-1)_.push($)});
																	Gef.each($.getIncomingConnections(),function($){if(_.indexOf($)==-1)_.push($)})});
																	Gef.each(_,function(_){$.addCommand(new Gef.gef.command.RemoveConnectionCommand(_.getModel()))});
														Gef.each(B.role.nodes,function(_){$.addCommand(new Gef.gef.command.RemoveNodeCommand(_.getModel()))})}catch(A){Gef.error(A)}return $}});
												
					Gef.ns("Gef.gef.editparts");Gef.gef.editparts.AbstractRootEditPart=Gef.extend(Gef.gef.RootEditPart,{
														getFigure:function(){if(!this.figure)this.figure=this.createFigure();return this.figure},
														createFigure:function(){
																	var $=new Gef.gef.figures.GraphicalViewport();return	$},
														getContents:function(){return this.contents},
														setContents:function($){
																		this.contents=$;
																		$.setParent(this)},
														getViewer:function(){return this.viewer},
														setViewer:function($){this.viewer=$},
														getRoot:function(){return this}});
					Gef.ns("Gef.gef.editparts");Gef.gef.editparts.ConnectionEditPart=Gef.extend(Gef.gef.editparts.AbstractGraphicalEditPart,{
														getClass:function(){return"connection"},
														getSource:function(){return	this.source},
														setSource:function($){this.source=$},
														getTarget:function(){return this.target},
														setTarget:function($){this.target=$},
														refresh:function(){this.refreshVisuals()},
														refreshVisuals:function(){
																	var	$=this.getModel().getSource(),_=this.getModel().getTarget();
																	if($!=null&&_!=null)this.getFigure().refresh();
																	else	this.getFigure().update(0,0,0,0)},
														notifyChanged:function(A,_){
																	if(A=="CONDITION_CHANGED"){
																		var $=this.getFigure();
																		if(typeof _=="string"&&_!=null&&_!="")$.setConditional(true);
																		else $.setConditional(false)}
																	else Gef.gef.editparts.ConnectionEditPart.superclass.notifyChanged.call(this,A,_)}});
					Gef.ns("Gef.gef.editparts");Gef.gef.editparts.NodeEditPart=Gef.extend(Gef.gef.editparts.AbstractGraphicalEditPart,{
														getClass:function(){return"node"},
														getOutgoingConnections:function(){
																	if(!this.outgoingConnections)this.outgoingConnections=[];
																	return this.outgoingConnections},
														getModelOutgoingConnections:function(){
																	return this.getModel().getOutgoingConnections()},
														removeOutgoingConnection:function($){
																	if($.getSource()==this)this.getOutgoingConnections().remove($)},
														getIncomingConnections:function(){
																	if(!this.incomingConnections)this.incomingConnections=[];
																	return this.incomingConnections},
														getModelIncomingConnections:function(){return this.getModel().getIncomingConnections()},
														removeIncomingConnection:function($){
																	if($.getTarget()==this)this.getIncomingConnections().remove($)},
														refreshVisuals:function(){
																	var _=this.getModel(),$=this.getFigure();
																	$.update(_.x,_.y,_.w,_.h)}});
					Gef.ns("Gef.gef.figures");Gef.gef.figures.GraphicalViewport=Gef.extend(Gef.figure.GroupFigure,{
														LAYER_LANE:"LAYER_LANE",
														constructor:function($){
															this.rootEditPart=$;
															this.rootFigure=new Gef.figure.RootFigure();
															this.layerMaps={};
															this.init()},
														init:function(){
																	var	C=new Gef.layer.GridLayer("LAYER_GRID");
																	this.registerLayer(C);
																	var _=new	Gef.layer.Layer("LAYER_CONNECTION");
																	this.registerLayer(_);
																	var B=new Gef.layer.Layer("LAYER_NODE");
																	this.registerLayer(B);
																	var A=new Gef.layer.Layer("LAYER_HANDLE");
																	this.registerLayer(A);
																	var D=new Gef.layer.Layer("LAYER_DRAGGING");
																	this.registerLayer(D);
																	var $=new Gef.layer.Layer("LAYER_MASK");
																	this.registerLayer($)},registerLayer:function($){this.addLayer($);
																	this.layerMaps[$.getName()]=$},addLayer:function($){this.rootFigure.addChild($)},
														getLayer:function($){return this.layerMaps[$]},
														addNode:function($){this.getLayer("LAYER_NODE").addChild($)},
														addConnection:function($){this.getLayer("LAYER_CONNECTION").addChild($)},
														render:function(){
																	if(this.rendered===true)return;
																	this.rootFigure.setParent({el:this.rootEditPart.getParentEl()});
																	this.rootFigure.render();
																	this.rendered=true}});
		// Gef.gef.support.AbstractGraphicalEditor
		Gef.ns("Gef.gef.support");Gef.gef.support.AbstractGraphicalEditor=Gef.extend(Gef.gef.Editor,{
														constructor:function(){
																this.editDomain=this.createEditDomain();
																this.graphicalViewer=this.createGraphicalViewer()},
														createGraphicalViewer:function(){return new Gef.gef.GraphicalViewer()},
														getGraphicalViewer:function(){return this.graphicalViewer},
														setGraphicalViewer:function($){this.graphicalViewer=$},
														createEditDomain:function(){
																	var $=new	Gef.gef.EditDomain();
																	$.setEditor(this);return $},
														setEditDomain:function($){this.editDomain=$},
														getEditDomain:function(){return this.editDomain},
														getModelFactory:function(){return this.modelFactory},
														setModelFactory:function($){this.modelFactory=$},
														getEditPartFactory:function(){return this.editPartFactory},
														setEditPartFactory:function($){this.editPartFactory=$},
														enable:function(){this.getGraphicalViewer().getBrowserListener().enable()},
														disable:function(){this.getGraphicalViewer().getBrowserListener().disable()},
														addWidth:function($){
																	 if(Gef.isVml);else{var A=document.getElementById("_Gef_0"),_=parseInt(A.getAttribute("width"),10);
																	 A.setAttribute("width",_+$)}},
														addHeight:function($){
																	 if(Gef.isVml);else{var A=document.getElementById("_Gef_0"),_=parseInt(A.getAttribute("height"),10);
																	 A.setAttribute("height",_+$)}}});
		// Gef.gef.support.DefaultGraphicalEditorWithPalette默认的带调色板的图形编辑器
		Gef.ns("Gef.gef.support");Gef.gef.support.DefaultGraphicalEditorWithPalette=Gef.extend(Gef.gef.support.AbstractGraphicalEditor,{
														// Gef.gef.support.DefaultGraphicalEditorWithPalette#init
														init:function($){
															var _=$.getObject();
															this.getGraphicalViewer().setContents(_);
															this.editDomain=new	Gef.gef.EditDomain();
															this.editDomain.setEditor(this)},
														setWorkbenchPage:function($){
															this.workbenchPage=$},
														getPaletteHelper:function(){
															if(!this.paletteHelper)
															this.paletteHelper=this.createPaletteHelper();
															return this.paletteHelper},
														createPaletteHelper:Gef.emptyFn,
														createGraphicalViewer:function(){
																return new Gef.gef.support.DefaultGraphicalViewer(this)},
														render:function(){
																this.getGraphicalViewer().render()}});
		Gef.ns("Gef.gef.support");Gef.gef.support.AbstractEditPartViewer=Gef.extend(Gef.gef.EditPartViewer,{
														getContents:function(){
																return this.rootEditPart.getContents()},
														setContents:function($){
																this.rootEditPart.setContents($)},
														getRootEditPart:function(){return this.rootEditPart},
														setRootEditPart:function($){this.rootEditPart=$},
														getEditDomain:Gef.emptyFn,setEditDomain:Gef.emptyFn});
		Gef.ns("Gef.gef.support");Gef.gef.support.AbstractGraphicalViewer=Gef.extend(Gef.gef.support.AbstractEditPartViewer,{});
		Gef.ns("Gef.gef.support");
		Gef.gef.support.DefaultGraphicalViewer=Gef.extend(Gef.gef.support.AbstractGraphicalViewer,{
														constructor:function($){
															this.editor=$;
															this.rootEditPart=this.createRootEditPart();
															Gef.gef.support.DefaultGraphicalViewer.superclass.constructor.call(this);
															this.browserListener=new Gef.gef.tracker.BrowserListener(this)
															},
														getActivePalette:function(){return this.editor.getPaletteHelper().getActivePalette()},
														createRootEditPart:function(){return new Gef.gef.support.DefaultRootEditPart(this)},
														getEditDomain:function(){return this.editor.getEditDomain()},
														getEditPartFactory:function(){return this.editor.editPartFactory},
														setContents:function(D){
																var C=null;
																var B=null;
																if(typeof D=="string"){
																	B=D;
																	var _=this.editor.getModelFactory();
																	C=_.createModel(D)
																}else{
																	C=D;
																	B=C.getType()
																}
																var	A=this.editor.getEditPartFactory();
																var $=A.createEditPart(B);
																$.setModel(C);
																this.rootEditPart.setContents($)
														},
														getLayer:function($){return this.rootEditPart.getFigure().getLayer($)},
														getPaletteConfig:function(_,$){return this.editor.getPaletteHelper().getPaletteConfig(_,$)},
														render:function(){
																if(this.rendered===true)return;
																var A=this.editor.workbenchPage.getWorkbenchWindow().width-2,B=this.editor.workbenchPage.getWorkbenchWindow().height-2,C=document.createElement("div");
																C.className="gef-workbenchpage";
																C.style.width=A+"px";C.style.height=B+"px";
																document.body.appendChild(C);
																this.el=C;var $=document.createElement("div");
																$.className="gef-canvas";
																$.style.position="absolute";
																$.style.left="50px";
																$.style.top="50px";
																$.style.border="1px solid	black";
																$.style.width=(A-216)+"px";$.style.height=B+"px";
																C.appendChild($);this.canvasEl=$;
																var _=document.createElement("div");
																_.className="gef-palette";
																_.style.left=(A-216)+"px";
																_.style.width="199px";_.style.height=B+"px";
																C.appendChild(_);this.paletteEl=_;
																this.editor.getPaletteHelper().render(_);
																this.rootEditPart.render();
																this.rendered=true},
														 getPaletteLocation:function(){
																var $=this.paletteEl;
																if(!this.paletteLocation)this.paletteLocation={x:Gef.getInt($.style.left),y:Gef.getInt($.style.top),w:Gef.getInt($.style.width),h:Gef.getInt($.style.height)};
																return this.paletteLocation},
														 getCanvasLocation:function(){
																var $=this.canvasEl;
																if(!this.canvasLocation)this.canvasLocation={x:Gef.getInt($.style.left),y:Gef.getInt($.style.top),w:Gef.getInt($.style.width),h:Gef.getInt($.style.height)};
																return this.canvasLocation},getEditor:function(){return this.editor},
														getBrowserListener:function(){
																return this.browserListener}});
					Gef.ns("Gef.gef.support");Gef.gef.support.DefaultRootEditPart=Gef.extend(Gef.gef.editparts.AbstractRootEditPart,{
														constructor:function($){
																Gef.gef.support.DefaultRootEditPart.superclass.constructor.call(this);
																this.setViewer($);
																this.figure=this.createFigure()},
														createFigure:function(){return new Gef.gef.figures.GraphicalViewport(this)},
														getParentEl:function(){return	this.getViewer().canvasEl},
														render:function(){
																this.figure.render();
																this.getContents().refresh()}});
												Gef.ns("Gef.gef.support");Gef.gef.support.PaletteHelper=Gef.extend(Object,{getSource:Gef.emptyFn,render:Gef.emptyFn,getPaletteConfig:Gef.emptyFn});
					Gef.ns("Gef.gef.tracker");Gef.gef.tracker.BrowserListener=Gef.extend(Object,{
														constructor:function($){
																this.graphicalViewer=$;
																this.selectionManager=new Gef.gef.tracker.SelectionManager(this);
																this.enabled=true;
																this.dragging=false;
																this.initTrackers();
																this.initEvents()},
														initTrackers:function(){
																this.trackers=[];
																this.trackers.push(new Gef.gef.tracker.DirectEditRequestTracker(this));
																this.trackers.push(new Gef.gef.tracker.ToolTracker(this));
																this.trackers.push(new	Gef.gef.tracker.SelectionRequestTracker(this));
																this.trackers.push(new Gef.gef.tracker.CreateNodeRequestTracker(this));
																this.trackers.push(new Gef.gef.tracker.CreateEdgeRequestTracker(this));
																this.trackers.push(new Gef.gef.tracker.ResizeNodeRequestTracker(this));
																this.trackers.push(new Gef.gef.tracker.ResizeEdgeRequestTracker(this));
																this.trackers.push(new Gef.gef.tracker.MoveEdgeRequestTracker(this));
																this.trackers.push(new Gef.gef.tracker.MoveNodeRequestTracker(this));
																this.trackers.push(new Gef.gef.tracker.MoveTextRequestTracker(this));
																this.trackers.push(new Gef.gef.tracker.MarqueeRequestTracker(this));
																this.trackers.push(new Gef.gef.tracker.RemoveRequestTracker(this));
																this.trackers.push(new Gef.gef.tracker.ShortcutKeyTracker(this));// 新增
																this.trackers.push(new	Gef.gef.tracker.SelectionListenerTracker(this))},
														initEvents:function(){
																this.initMouseDownEvent();
																this.initMouseMoveEvent();
																this.initMouseUpEvent();
																this.initDoubleClickEvent();
																this.initKeyDownEvent()},
														initMouseDownEvent:function(){
																var $=this,_=function(A){
																var _=Gef.isIE?event:A;$.mouseDown(_)};
																if(Gef.isIE)document.attachEvent("onmousedown",_);
																else document.addEventListener("mousedown",_,false)},
														initMouseMoveEvent:function(){
																var $=this,_=function(A){
																var	_=Gef.isIE?event:A;$.mouseMove(_)};
																if(Gef.isIE)document.attachEvent("onmousemove",_);
																else document.addEventListener("mousemove",_,false)},
														initMouseUpEvent:function(){
																var $=this,_=function(A){var _=Gef.isIE?event:A;$.mouseUp(_)};
																if(Gef.isIE)document.attachEvent("onmouseup",_);
																else document.addEventListener("mouseup",_,false)},
														initDoubleClickEvent:function(){
																var $=this,_=function(A){
																var _=Gef.isIE?event:A;
																$.doubleClick(_)};
																if(Gef.isIE)document.attachEvent("ondblclick",_);
																else document.addEventListener("dblclick",_,false)},
														initKeyDownEvent:function(){
																var $=this,_=function(A){
																	var _=Gef.isIE?event:A;
																	$.keyDown(_);
																		};
																if(Gef.isIE)document.attachEvent("onkeydown",_);
																else document.addEventListener("keydown",_,false)},
														fireEvent:function(C,D){
																	if(this.enabled!==true)return;
																	var B=this.getXY(D),_=this.getTarget(D),A={e:D,eventName:C,point:B,target:_};
																	try{Gef.each(this.trackers,function($){if($.understandRequest(A))$.processRequest(A)})}catch($){Gef.error($)}if(A.draggingType||A.selectType)this.stopEvent(D)},
														mouseDown:function($){
																this.fireEvent("MOUSE_DOWN",$)},
														mouseMove:function($){
																	this.fireEvent("MOUSE_MOVE",$)},
														mouseUp:function($){
																	this.fireEvent("MOUSE_UP",$)},
														doubleClick:function($){this.fireEvent("DBL_CLICK",$)},
														keyDown:function($){
																	this.fireEvent("KEY_DOWN",$)},
														getXY:function(C){
																	var _={};
																	if(typeof window.pageYOffset!="undefined"){_.x=window.pageXOffset;
																		_.y=window.pageYOffset}
																	else if(typeof	document.compatMode!="undefined"&&document.compatMode!="BackCompat"){
																		_.x=document.documentElement.scrollLeft;
																		_.y=document.documentElement.scrollTop}
																	else if(typeof document.body!="undefined"){
																		_.x=document.body.scrollLeft;
																		_.y=document.body.scrollTop}
																	var A=this.graphicalViewer.getCanvasLocation(),B=C.clientX+_.x,$=C.clientY+_.y;
																	return{x:B-A.x,y:$-A.y,absoluteX:B,absoluteY:$}},
														getTarget:function($){return Gef.isIE?$.srcElement:$.target},
														stopEvent:function($){if(Gef.isIE)$.returnValue=false;
																	else	$.preventDefault()},
														getViewer:function(){return	this.graphicalViewer},
														getSelectionManager:function(){
																	return this.selectionManager},
														disable:function(){this.enabled=false},
														enable:function(){this.enabled=true}});
				Gef.ns("Gef.gef.tracker");Gef.gef.tracker.RequestTracker=Gef.extend(Object,{understandRequest:Gef.emptyFn,processRequest:Gef.emptyFn});
				Gef.ns("Gef.gef.tracker");Gef.gef.tracker.AbstractRequestTracker=Gef.extend(Gef.gef.tracker.RequestTracker,{
																constructor:function($){
																	this.browserListener=$;
																	this.reset()},
																reset:function(){this.status="NONE";this.temp={}},
																getDraggingRect:function(){
																	 if(!this.draggingRect){
																		 this.draggingRect=new Gef.figure.DraggingRectFigure({x:-90,y:-90,w:48,h:48});
																		 this.getDraggingLayer().addChild(this.draggingRect);
																		 this.draggingRect.render()}return	this.draggingRect},
																createDraggingRects:function(){
																	 if(!this.draggingRects)this.draggingRects=[];
																	 var $=new Gef.figure.DraggingRectFigure({x:-90,y:-90,w:48,h:48});
																	 this.getDraggingLayer().addChild($);
																	 $.render();
																	 this.draggingRects.push($);
																	 return $},
																getDraggingRects:function($){return	this.draggingRects[$]},
																removeDraggingRects:function($){
																	 Gef.each(this.draggingRects,function($){$.remove()},this);
																	 this.draggingRects=[]},
																getDraggingEdge:function(){
																	 if(!this.draggingEdge){
																	  this.draggingEdge=new	Gef.figure.DraggingEdgeFigure({x1:-1,y1:-1,x2:-1,y2:-1});
																	  this.getDraggingLayer().addChild(this.draggingEdge);
																	  this.draggingEdge.render()}return this.draggingEdge},
																isInPalette:function($){
																	return this.isIn($,this.getViewer().getPaletteLocation(),true)},
																isInCanvas:function($){
																	 return	this.isIn($,this.getViewer().getCanvasLocation(),true)},
																isIn:function(_,A,$){
																	 if($===true)return	_.absoluteX>A.x&&_.absoluteX<A.x+A.w&&_.absoluteY>A.y&&_.absoluteY<A.y+A.h;
																	 else	return _.x>A.x&&_.x<A.x+A.w&&_.y>A.y&&_.y<A.y+A.h},
																getPaletteConfig:function($){return this.getViewer().getPaletteConfig($.point,$.target)},
																findEditPartAt:function(C){
																	var B=C.point,_=this.getContents(),E=this.getNodeLayer().getChildren();
																	for(var $=E.length-1;$>=0;$--){
																		var A=E[$],D=C.target.getAttribute("id");
																		if(this.isIn(B,A)&&D!=null&&D.indexOf("_Gef_")!=-1){
																			_=this.getEditPartByFigure(A);return _}}return _},
																getViewer:function(){return	this.browserListener.getViewer()},
																getEditor:function(){return this.getViewer().getEditor()},
																getContents:function(){return this.getViewer().getContents()},
																getModelFactory:function(){return this.getEditor().getModelFactory()},
																getCommandStack:function(){return this.getViewer().getEditDomain().getCommandStack()},
																executeCommand:function(_,A){
																	var $=_.getCommand(A);
																	if($!=null)this.getCommandStack().execute($)},
																getDraggingLayer:function(){
																	return this.getViewer().getLayer("LAYER_DRAGGING")},
																getNodeLayer:function(){
																	return this.getViewer().getLayer("LAYER_NODE")},
																getConnectionLayer:function(){
																	return this.getViewer().getLayer("LAYER_CONNECTION")},
																getHandleLayer:function(){
																	return this.getViewer().getLayer("LAYER_HANDLE")},
																getTargetEditPart:function(){return this.getContents()},
																getEditPartByFigure:function($){return $.editPart},
																isConnection:function(){
																	return this.getViewer().getActivePalette()!=null&&this.getViewer().getActivePalette().isConnection===true},
																notConnection:function(){
																	return!this.isConnection()},
																getSelectionManager:function(){
																		return	this.browserListener.getSelectionManager()},
																getSelectedNodes:function(){
																		return this.getSelectionManager().getSelectedNodes()},
																hasSelectedNoneOrOne:function(){
																		return this.getSelectionManager().getSelectedCount()<2},
																isMultiSelect:function($){
																		return $.e.ctrlKey===true},
																notMultiSelect:function($){
																		return!this.isMultiSelect($)},
																getConnectionByConnectionId:function(_){
																		var	$=null;
																		Gef.each(this.getConnectionLayer().getChildren(),function(A){if(_==A.el.id)$=A},this);return $},
																getNodeByNodeId:function($){
																		var _=null;
																		Gef.each(this.getNodeLayer().getChildren(),function(A){if($==A.el.id)_=A},this);return _}});
											Gef.ns("Gef.gef.tracker");Gef.gef.tracker.SelectionManager=Gef.extend(Object,{ // 选择管理器
																constructor:function($){
																	this.items=[];this.handles={};this.browserListener=$},
																addSelectedConnection:function($){
																	this.resizeEdgeHandle=new Gef.figure.ResizeEdgeHandle();
																	this.resizeEdgeHandle.edge=$.getFigure();
																	this.addHandle(this.resizeEdgeHandle);
																	this.resizeEdgeHandle.render();
																	this.selectedConnection=$},
																removeSelectedConnection:function($){
																	this.resizeEdgeHandle.remove();
																	this.selectedConnection=null;
																	this.resizeEdgeHandle=null},
																addSelectedNode:function($,_){
																	if(this.items.length==1&&this.items[0]==$)return false;
																	if(!_)this.clearAll();
																	var A=this.items.indexOf($)!=-1;
																	if(A){if(_){this.removeSelectedNode($,_);
																	return false}}else{this.items.push($);
																	this.createNodeHandle($)}return	true},
																removeSelectedNode:function($,_){
																	var A=this.items.indexOf(editPart)!=-1;
																	if(A){this.items.remove(editPart);
																	this.removeNodeHandle(editPart)}},
																clearAll:function(){
																	Gef.each(this.items,function($){this.removeNodeHandle($)},this);
																	this.items=[];
																	if(this.selectedConnection!=null)this.removeSelectedConnection(this.selectedEdge);
																	if(this.draggingText!=null)this.draggingText.hide()},
																selectAll:function(){
																	this.clearAll();
																	Gef.each(this.getNodes(),function($){this.addSelectedNode($.editPart,true)},this)},
																selectIn:function($){
																	this.clearAll();
																	Gef.each(this.getNodes(),function(_){
																		var B=_,C=B.x+B.w/2,A=B.y+B.h/2;
																		if(C>$.x&&C<$.x+$.w&&A>$.y&&A<$.y+$.h)this.addSelectedNode(_.editPart,true)},this)},
																createNodeHandle:function($){
																	var _=$.getModel().getId(),A=this.handles[_];
																	if(!A){A=new	Gef.figure.ResizeNodeHandle();
																	this.handles[_]=A;
																	A.node=$.getFigure();
																	this.addHandle(A);
																	A.render()}return A},
																removeNodeHandle:function($){
																	var _=$.getModel().getId(),A=this.handles[_];
																	if(A!=null){A.remove();
																	this.handles[_]=null;
																	delete this.handles[_]}return	A},
																refreshHandles:function(){
																	for(var $ in this.handles){
																		var _=this.handles[$];
																		_.refresh()}
																	if(this.resizeEdgeHandle)this.resizeEdgeHandle.refresh()},
																addHandle:function($){
																	var _=this.browserListener.getViewer().getLayer("LAYER_HANDLE");
																	_.addChild($)},addDragging:function($){
																	var _=this.browserListener.getViewer().getLayer("LAYER_DRAGGING");
																	_.addChild($)},
																getNodes:function(){
																	var $=this.browserListener.getViewer().getLayer("LAYER_NODE");
																	return $.getChildren()},
																getSelectedNodes:function(){
																	return this.items},
																getSelectedCount:function(){return this.items.length},
																getSelectedConnection:function(){return this.selectedConnection},
																getDefaultSelected:function(){
																	return this.browserListener.getViewer().getContents()},
																getCurrentSelected:function(){
																	if(this.selectedConnection)return[this.selectedConnection];
																	else if(this.items.length>0)return this.items;
																	else return[this.getDefaultSelected()]},
																getDraggingText:function($){
																	if(!this.draggingText){
																		this.draggingText=new Gef.figure.DraggingTextFigure($);
																		this.addDragging(this.draggingText);
																		this.draggingText.render()}
																	this.draggingText.edge=$;
																	this.draggingText.show();
																	return	this.draggingText}});
												Gef.ns("Gef.gef.tracker");Gef.gef.tracker.CreateNodeRequestTracker=Gef.extend(Gef.gef.tracker.AbstractRequestTracker,{
																DRAGGING_CREATE_NODE:"DRAGGING_CREATE_NODE",
																understandRequest:function(_){
																	if(_.editType!=null)return	false;
																	if(_.draggingType!=null)return false;
																	if(_.eventName=="MOUSE_DOWN"&&this.status=="NONE"){
																		if(this.isInPalette(_.point)){
																			var	$=this.getPaletteConfig(_);
																			if($!=null&&$.creatable!==false){
																				_.paletteConfig=$;
																				_.draggingType=this.DRAGGING_CREATE_NODE;
																				this.status=this.DRAGGING_CREATE_NODE}}}
																			else if((_.eventName=="MOUSE_MOVE"||_.eventName=="MOUSE_UP")&&this.status!="NONE")
																				_.draggingType=this.status;
																				return _.draggingType==this.DRAGGING_CREATE_NODE},
																processRequest:function(A){
																	if(A.draggingType!=this.DRAGGING_CREATE_NODE)return;
																	if(A.eventName=="MOUSE_DOWN")this.drag(A);
																	else if(A.eventName=="MOUSE_MOVE")this.move(A);
																	else if(A.eventName=="MOUSE_UP"){
																		if(this.isInCanvas(A.point)){
																			var	_=this.getDraggingRect(),$=_.name;
																			A.role={name:"CREATE_NODE",rect:{x:A.point.x-_.w/2,y:A.point.y-_.h/2,w:_.w,h:_.h},node:this.getModelFactory().createModel($)};
																			this.executeCommand(this.getTargetEditPart(),A)}this.drop(A);this.reset()}},
																drag:function(C){ // 拖动的时候
																		var B=C.paletteConfig;
																		this.getDraggingRect().name=B.text;
																		var $=B.w,_=B.h;
																		if(isNaN($)||$<0)$=48;
																		if(isNaN(_)||_<0)_=48;
																		var D=$*-1,A=_*-1;
																		this.getDraggingRect().update(D,A,$,_)},
																move:function(B){// 移动的时候
																		var A=this.getDraggingRect(),_=B.point,C=_.x-A.w/2,$=_.y-A.h/2;
																		A.moveTo(C,$)},
																drop:function(A){
																		var	_=this.getDraggingRect(),B=_.w*-1,$=_.h*-1;_.moveTo(B,$)}});
											Gef.ns("Gef.gef.tracker");Gef.gef.tracker.CreateEdgeRequestTracker=Gef.extend(Gef.gef.tracker.AbstractRequestTracker,{
																DRAGGING_CREATE_EDGE:"DRAGGING_CREATE_EDGE",
																understandRequest:function(_){
																		if(_.editType!=null)return false;
																		if(_.draggingType!=null)return;
																		if(!this.isInCanvas(_.point)||this.notConnection())return;
																		if(_.eventName=="MOUSE_DOWN"&&this.status=="NONE"){
																			var $=this.findEditPartAt(_);
																			if($!=null&&$.getClass()=="node")
																				if($.canCreateOutgo()){
																					this.temp.editPart=$;
																					_.draggingType=this.DRAGGING_CREATE_EDGE;
																					this.status=this.DRAGGING_CREATE_EDGE}
																				else{try{
																					Gef.activeEditor.getPaletteHelper().resetActivePalette();
																					_.draggingType="FORBIDDEN"}catch(A){}}}
																				else	if((_.eventName=="MOUSE_MOVE"||_.eventName=="MOUSE_UP")&&this.status!="NONE")
																					_.draggingType=this.status;
																					return _.draggingType==this.DRAGGING_CREATE_EDGE},
																processRequest:function(C){
																		if(C.draggingType!=this.DRAGGING_CREATE_EDGE)return;
																		if(C.eventName=="MOUSE_DOWN")this.drag(C);
																		else	if(C.eventName=="MOUSE_MOVE")this.move(C);
																		else if(C.eventName=="MOUSE_UP"){
																			var B=this.getDraggingEdge(),A=this.temp.editPart,_=this.findEditPartAt(C);
																			if(A!=_&&_.getClass()=="node"&&_.canCreateIncome()){
																				var D=this.getViewer().getActivePalette().text,$=this.getModelFactory().createModel(D);
																				$.text="to "+_.getModel().text;
																				C.role={name:"CREATE_EDGE",rect:{x1:B.x1,y1:B.y1,x2:B.x2,y2:B.y2},source:A.getModel(),target:_.getModel(),model:$};
																				this.executeCommand(this.temp.editPart,C)}this.drop(C);
																				this.reset()}},
																drag:function($){
																		this.getDraggingEdge().update(-1,-1,-1,-1)},
																move:function(C){
																		var _=C.point,$=this.temp.editPart.getFigure(),B={x:$.x,y:$.y,w:$.w,h:$.h},A=this.getDraggingEdge();
																		A.updateForDragging(B,_)},
																drop:function($){
																		this.getDraggingEdge().moveToHide()}});
													Gef.ns("Gef.gef.tracker");Gef.gef.tracker.MoveNodeRequestTracker=Gef.extend(Gef.gef.tracker.AbstractRequestTracker,{
																DRAGGING_MOVE_NODE:"DRAGGING_MOVE_NODE",
																understandRequest:function(_){
																		if(_.editType!=null)return false;
																		if(_.draggingType!=null)return;
																		if(!this.isInCanvas(_.point)||this.isConnection())return;
																		if(_.eventName=="MOUSE_DOWN"&&this.status=="NONE"){
																			var $=this.findEditPartAt(_);
																			if($!=null&&$.getClass()=="node"){
																				this.temp={x:_.point.x,y:_.point.y,editPart:$};
																				_.draggingType=this.DRAGGING_MOVE_NODE;
																				this.status=this.DRAGGING_MOVE_NODE}}
																			else if((_.eventName=="MOUSE_MOVE"||_.eventName=="MOUSE_UP")&&this.status!="NONE")
																				_.draggingType=this.status;
																				return _.draggingType==this.DRAGGING_MOVE_NODE},
																processRequest:function(B){
																		if(B.draggingType!=this.DRAGGING_MOVE_NODE)return;
																		if(B.eventName=="MOUSE_DOWN"){
																		if(this.notMultiSelect(B)&&this.hasSelectedNoneOrOne()){
																			var $=this.findEditPartAt(B);
																			this.getSelectionManager().addSelectedNode($)}this.drag(B)}
																		else if(B.eventName=="MOUSE_MOVE")this.move(B);
																		else if(B.eventName=="MOUSE_UP"){
																			var _=this.getDraggingRect(),A=[];
																			Gef.each(this.getSelectedNodes(),function($){A.push($.getModel())});
																		if(B.point.x!=this.temp.x||B.point.y!=this.temp.y){
																			B.role={name:"MOVE_NODE",nodes:A,dx:B.point.x-this.temp.x,dy:B.point.y-this.temp.y};
																			this.executeCommand(this.getContents(),B);
																			this.getSelectionManager().refreshHandles()}
																		else B.draggingType="DRAGGING_MOVE_NODE_WITHOUT_MOVE";
																			this.drop(B);this.reset()}},
																drag:function($){
																			Gef.each(this.getSelectedNodes(),function(_){
																				var B=_.getFigure(),A=B.w,C=B.h,E=B.x+$.point.x-this.temp.x,D=B.y+$.point.y-this.temp.y;
																				this.createDraggingRects().update(A*-1,C*-1,A,C)},this);
																				this.browserListener.dragging=true},
																move:function($){
																			Gef.each(this.getSelectedNodes(),function(A,_){
																				var	D=this.getDraggingRects(_),B=A.getFigure(),E=B.x+$.point.x-this.temp.x,C=B.y+$.point.y-this.temp.y;
																				D.moveTo(E,C)},this)},
																drop:function($){this.removeDraggingRects();
																			this.browserListener.dragging=false}});
											Gef.ns("Gef.gef.tracker");Gef.gef.tracker.MoveEdgeRequestTracker=Gef.extend(Gef.gef.tracker.AbstractRequestTracker,{
																DRAGGING_MOVE_EDGE:"DRAGGING_MOVE_EDGE",
																understandRequest:function(D){
																		if(D.editType!=null)return false;
																		if(D.draggingType!=null)return false;
																		if(!this.isInCanvas(D.point))return	false;
																		if(D.eventName=="MOUSE_DOWN"&&this.status=="NONE"){
																			var B=D.target;
																			if(B.id.indexOf(":")){
																				var E=B.id.split(":"),C=E[0],_=E[1];
																			if(_!="start"&&_!="end")return false;
																				var A=this.getConnectionByConnectionId(C);
																			if(A==null)return false;
																				var $=this.getSelectionManager().resizeEdgeHandle;
																				if($==null)return false;
																				this.temp={editPart:A.editPart,handle:$,direction:_};
																	D.draggingType=this.DRAGGING_MOVE_EDGE;
																	this.status=this.DRAGGING_MOVE_EDGE}}
																	else if((D.eventName=="MOUSE_MOVE"||D.eventName=="MOUSE_UP")&&this.status!="NONE")D.draggingType=this.status;
																	return	D.draggingType==this.DRAGGING_MOVE_EDGE},
																processRequest:function(D){
																		if(D.draggingType!=this.DRAGGING_MOVE_EDGE)return;
																		if(D.eventName=="MOUSE_DOWN")this.drag(D);
																		else if(D.eventName=="MOUSE_MOVE")this.move(D);
																		else if(D.eventName=="MOUSE_UP"){
																			var B=this.getDraggingEdge(),A=this.findEditPartAt(D),E=this.temp.editPart;
																			if(A.getClass()=="node"){
																				var	$=this.temp.direction;
																		if(($=="start"&&A.canCreateOutgo())||($=="end"&&A.canCreateIncome())){
																			var	C=null,_=null;
																			if($=="start"){
																				C=A.getModel();
																				_=E.target.getModel()}
																		else{C=E.source.getModel();_=A.getModel()}D.role={name:"MOVE_EDGE",rect:{x1:B.x1,y1:B.y1,x2:B.x2,y2:B.y2},source:C,target:_};
																		this.executeCommand(E,D)}}this.drop(D);
																		this.reset()}},
																drag:function(E){
																		var B=E.point,_=this.temp.direction,$=this.temp.editPart,A=null,D={};
																		if(_=="start")A=$.getTarget().getFigure();
																		else A=$.getSource().getFigure();
																		var D={x:A.x,y:A.y,w:A.w,h:A.h},C=this.getDraggingEdge();
																		C.updateForMove($.getFigure(),_,B)},
																move:function(E){
																		var	B=E.point,_=this.temp.direction,$=this.temp.editPart,A=null,D={};
																		if(_=="start")A=$.target.figure;
																		else A=$.source.figure;
																		var D={x:A.x,y:A.y,w:A.w,h:A.h},C=this.getDraggingEdge();
																		C.updateForMove($.getFigure(),_,B)},
																drop:function($){this.getDraggingEdge().moveToHide()}});
										Gef.ns("Gef.gef.tracker");Gef.gef.tracker.MoveTextRequestTracker=Gef.extend(Gef.gef.tracker.AbstractRequestTracker,{
																DRAGGING_MOVE_TEXT:"DRAGGING_MOVE_TEXT",
																understandRequest:function(B){
																	if(B.editType!=null)return false;
																	if(B.draggingType!=null){if(this.draggingText!=null)this.draggingText.hide();return}
																	if(!this.isInCanvas(B.point))return;
																	if(B.eventName=="MOUSE_DOWN"&&this.status=="NONE"){
																		var A=B.target,_=A.getAttribute("edgeId");
																		if(_!=null)if(A.tagName=="text"||A.tagName=="textbox"){
																			var	$=null,$=this.getConnectionByConnectionId(_);
																			if($==null)return;this.temp={editPart:$.editPart,x:B.point.x,y:B.point.y};
																			B.draggingType=this.DRAGGING_MOVE_TEXT;
																			this.status=this.DRAGGING_MOVE_TEXT}}
																	else	if((B.eventName=="MOUSE_MOVE"||B.eventName=="MOUSE_UP")&&this.status!="NONE")B.draggingType=this.status;
																		return B.draggingType==this.DRAGGING_MOVE_TEXT},
																processRequest:function(A){
																	if(A.draggingType!=this.DRAGGING_MOVE_TEXT)return;
																	if(A.eventName=="MOUSE_DOWN"){
																		this.getSelectionManager().clearAll();
																		this.drag(A)}
																	else if(A.eventName=="MOUSE_MOVE")this.move(A);
																	else if(A.eventName=="MOUSE_UP"){
																		var $=this.temp.oldX,C=this.temp.oldY,B=$+A.point.x-this.temp.x,_=C+A.point.y-this.temp.y;
																		A.role={name:"MOVE_TEXT",oldTextX:$,oldTextY:C,newTextX:B,newTextY:_,edge:this.temp.editPart};
																		this.executeCommand(this.temp.editPart,A);
																		this.drop(A);this.reset()}},
																drag:function(_){
																	var $=this.getDraggingText();
																	$.refresh();
																	this.temp.oldX=$.edge.textX;
																	this.temp.oldY=$.edge.textY},
																move:function(B){
																	var $=this.getDraggingText(),_=B.point.x-this.temp.x,A=B.point.y-this.temp.y;
																	$.edge.textX=this.temp.oldX+_;
																	$.edge.textY=this.temp.oldY+A;$.refresh()},
																drop:function($){},
																getDraggingText:function(){
																	var	$=this.temp.editPart.getFigure();
																	return	this.getSelectionManager().getDraggingText($)}});
										Gef.ns("Gef.gef.tracker");Gef.gef.tracker.ResizeNodeRequestTracker=Gef.extend(Gef.gef.tracker.AbstractRequestTracker,{
																DRAGGING_RESIZE_NODE:"DRAGGING_RESIZE_NODE",
																understandRequest:function(E){
																	if(E.editType!=null)return false;
																	if(E.draggingType!=null)return false;
																	if(!this.isInCanvas(E.point))return false;
																	if(E.eventName=="MOUSE_DOWN"&&this.status=="NONE"){
																		var	C=E.target;if(C.id.indexOf(":")){
																			var F=C.id.split(":"),_=F[0],A=F[1],B=this.getNodeByNodeId(_);
																			if(B==null)return false;
																			else if(!B.editPart.canResize())return false;
																		var	D=this.getSelectionManager().handles,$=D[B.editPart.getModel().getId()];
																	if($==null)return false;
																		this.temp={editPart:B.editPart,handle:$,direction:A};
																		E.draggingType=this.DRAGGING_RESIZE_NODE;
																		this.status=this.DRAGGING_RESIZE_NODE}}
																	else if((E.eventName=="MOUSE_MOVE"||E.eventName=="MOUSE_UP")&&this.status!="NONE")E.draggingType=this.status;
																	return E.draggingType==this.DRAGGING_RESIZE_NODE},
																processRequest:function(D){
																	if(D.draggingType!=this.DRAGGING_RESIZE_NODE)return;
																	if(D.eventName=="MOUSE_DOWN")this.drag(D);
																	else if(D.eventName=="MOUSE_MOVE")this.move(D);
																	else if(D.eventName=="MOUSE_UP"){
																		var C=this.getDraggingRect(),B=this.temp.editPart,E=this.temp.rect.x,A=this.temp.rect.y,$=this.temp.rect.w,_=this.temp.rect.h;
																		if($<0)$=5;
																		if(_<0)_=5;
																		D.role={name:"RESIZE_NODE",rect:{x:E,y:A,w:$,h:_},node:B.getModel()};
																		this.executeCommand(B,D);this.temp.handle.refresh();
																		this.drop(D);
																		this.reset()}},
																drag:function(A){
																	var _=this.temp.editPart.figure,$=this.temp.direction;
																	if($=="n"){this.temp.x=_.x+_.w/2;this.temp.y=_.y}
																	else if($=="s"){
																		this.temp.x=_.x+_.w/2;
																		this.temp.y=_.y+_.h}
																	else if($=="w"){
																		this.temp.x=_.x;
																		this.temp.y=_.y+_.h/2}
																	else if($=="e"){
																		this.temp.x=_.x+_.w;
																		this.temp.y=_.y+_.h/2}
																	else if($=="nw"){
																		this.temp.x=_.x;this.temp.y=_.y}
																	else if($=="ne"){this.temp.x=_.x+_.w;this.temp.y=_.y}
																	else if($=="sw"){this.temp.x=_.x;this.temp.y=_.y+_.h}
																	else	if($=="se"){this.temp.x=_.x+_.w;this.temp.y=_.y+_.h}
																		this.getDraggingRect().update(_.x,_.y,_.w,_.h)},
																move:function(I){
																	var C=I.point,_=this.temp.editPart.getFigure(),E=this.temp.direction,J=_.x,F=_.y,$=_.w,B=_.h,A=C.x-this.temp.x,G=C.y-this.temp.y;
																	if(E=="n"){F=F+G;B=B-G}
																	else if(E=="s")B=B+G;
																	else if(E=="w"){J=J+A;$=$-A}
																	else if(E=="e")$=$+A;
																	else	if(E=="nw"){J=J+A;$=$-A;F=F+G;B=B-G}
																	else if(E=="ne"){$=$+A;F=F+G;B=B-G}
																	else if(E=="sw"){J=J+A;$=$-A;B=B+G}
																	else if(E=="se"){$=$+A;B=B+G}
																	var H={x:J,y:F,w:$,h:B};
																	this.temp.rect=H;
																	var D=this.getDraggingRect();
																	D.update(H.x,H.y,H.w,H.h)},
																drop:function($){this.getDraggingRect().update(-1,-1,1,1)}});
										Gef.ns("Gef.gef.tracker");Gef.gef.tracker.ResizeEdgeRequestTracker=Gef.extend(Gef.gef.tracker.AbstractRequestTracker,{
													DRAGGING_RESIZE_EDGE:"DRAGGING_RESIZE_EDGE",
													understandRequest:function(I){
																	if(I.editType!=null)return	false;
																	if(I.draggingType!=null)return;
																	if(!this.isInCanvas(I.point))return;
																	if(I.eventName=="MOUSE_DOWN"&&this.status=="NONE"){
																		var	_=I.target,C=_.id;if(C!=null&&C.indexOf(":middle:")!=-1){
																			var G=C.substring(0,C.indexOf(":middle:")),$=this.getConnectionByConnectionId(G);
																			if($==null)return;
																			var	H=C.substring(C.indexOf(":middle:")+":middle:".length).split(","),E=parseInt(H[0],10),K=parseInt(H[1],10),D=this.getSelectionManager().resizeEdgeHandle,B=[];
																			Gef.each($.innerPoints,function($){B.push([$[0],$[1]])});var J=null,F=null,A=null;if(E==K){J=$.innerPoints[E];if(E==0)F=[$.x1,$.y1];else F=$.innerPoints[E-1];if(K==$.innerPoints.length-1)A=[$.x2,$.y2];else A=$.innerPoints[E+1]}else{if(E==-1)F=[$.x1,$.y1];else F=$.innerPoints[E];if(K>=$.innerPoints.length)A=[$.x2,$.y2];else A=$.innerPoints[K];J=[(F[0]+A[0])/2,(F[1]+A[1])/2];$.innerPoints.splice(E+1,0,J);D.modify()}this.temp={editPart:$.editPart,point:J,x:J[0],y:J[1],oldX:I.point.x,oldY:I.point.y,prevIndex:E,nextIndex:K,prev:F,next:A,oldInnerPoints:B};I.draggingType=this.DRAGGING_RESIZE_EDGE;this.status=this.DRAGGING_RESIZE_EDGE}}else if((I.eventName=="MOUSE_MOVE"||I.eventName=="MOUSE_UP")&&this.status!="NONE")I.draggingType=this.status;return I.draggingType==this.DRAGGING_RESIZE_EDGE},processRequest:function(A){if(A.draggingType!=this.DRAGGING_RESIZE_EDGE)return;if(A.eventName=="MOUSE_DOWN")this.drag(A);else if(A.eventName=="MOUSE_MOVE")this.move(A);else if(A.eventName=="MOUSE_UP"){var _=this.temp.editPart;if(this.isSameLine(A.point.x,A.point.y,this.temp.prev[0],this.temp.prev[1],this.temp.next[0],this.temp.next[1]))_.getFigure().innerPoints.splice(this.temp.nextIndex,1);A.role={name:"RESIZE_EDGE",rect:{x:_.figure.x,y:_.figure.y,w:_.figure.w,h:_.figure.h},oldInnerPoints:this.temp.oldInnerPoints,newInnerPoints:_.getFigure().innerPoints};this.executeCommand(_,A);var $=this.getSelectionManager().resizeEdgeHandle;$.modify();this.drop(A);this.reset()}},drag:function($){},move:function(B){var _=B.point.x-this.temp.oldX,A=B.point.y-this.temp.oldY;this.temp.point[0]=this.temp.x+_;this.temp.point[1]=this.temp.y+A;var	$=this.getSelectionManager().resizeEdgeHandle;if($)$.modify();else this.reset()},drop:function($){},isSameLine:function(H,K,_,F,J,A){var $=_-H,B=F-K,E=J-H,I=A-K,C=$*E+B*I,G=Math.sqrt(($*$+B*B)*(E*E+I*I)),D=C/G,L=Math.acos(D)*180/Math.PI;return L>170}});Gef.ns("Gef.gef.tracker");Gef.gef.tracker.MarqueeRequestTracker=Gef.extend(Gef.gef.tracker.AbstractRequestTracker,{DRAGGING_MARQUEE:"DRAGGING_MARQUEE",understandRequest:function(_){if(_.editType!=null)return false;if(_.draggingType!=null)return;if(!this.isInCanvas(_.point))return;if(_.eventName=="MOUSE_DOWN"&&this.status=="NONE"){if(this.isInCanvas(_.point)){var $=_.target;if((Gef.isVml&&$.tagName=="DIV"&&$.getAttribute("id")!=null&&$.getAttribute("id").indexOf("_Gef_")!=-1)||(Gef.isSvg&&$.tagName=="svg")){_.draggingType=this.DRAGGING_MARQUEE;this.status=this.DRAGGING_MARQUEE}}}else if((_.eventName=="MOUSE_MOVE"||_.eventName=="MOUSE_UP")&&this.status!="NONE")_.draggingType=this.status;return _.draggingType==this.DRAGGING_MARQUEE},processRequest:function(A){if(A.draggingType!=this.DRAGGING_MARQUEE)return;if(A.eventName=="MOUSE_DOWN")this.drag(A);else if(A.eventName=="MOUSE_MOVE")this.move(A);else if(A.eventName=="MOUSE_UP"){var _=this.getDraggingRect(),$={x:A.point.x<_.x?A.point.x:_.x,y:A.point.y<_.y?A.point.y:_.y,w:_.w,h:_.h};this.getSelectionManager().selectIn($);this.drop(A);this.reset()}},drag:function(_){var $=_.point;this.getDraggingRect().update($.x,$.y,0,0)},move:function(A){var _=this.getDraggingRect(),$=A.point;_.update(_.x,_.y,$.x-_.x,$.y-_.y)},drop:function($){this.getDraggingRect().update(-90,-90,90,50)}});
								Gef.ns("Gef.gef.tracker");Gef.gef.tracker.DirectEditRequestTracker=Gef.extend(Gef.gef.tracker.AbstractRequestTracker,{
													understandRequest:function(_){
														if(this.status!="NONE")_.editType=this.status;
														if(this.isInCanvas(_.point)&&_.eventName=="DBL_CLICK")
														if(_.target.tagName=="text"||_.target.tagName=="textbox"){
															_.editType="EDIT_START";
															this.status="EDIT_START"}
														if(_.eventName=="MOUSE_DOWN"&&_.target.tagName!="INPUT")
														if(this.status=="ALREADY_START_EDIT"){
															_.editType="EDIT_COMPLETE";
															this.status="EDIT_COMPLETE"}
														if(_.eventName=="KEY_DOWN"){
															var $=_.e.keyCode;
															if($==10||$==13){
																_.editType="EDIT_COMPLETE";
																this.status="EDIT_COMPLETE";
															}
															if($==27){
																_.editType="EDIT_CANCEL";this.status="EDIT_CANCEL";
															}
														}
														return _.editType=="EDIT_START"||_.editType=="ALREADY_START_EDIT"||_.editType=="EDIT_CANCEL"||_.editType=="EDIT_COMPLETE"},
													processRequest:function($){
														if(!$.editType)return;
														if($.editType=="EDIT_START")this.startEdit($);
														else if($.editType=="EDIT_COMPLETE")this.completeEdit($);
														else if($.editType=="EDIT_CANCEL")this.cancelEdit($)},
													startEdit:function(B){
														var	$=this.findEditPartAt(B);
														if($.getClass()=="node"){
															if($.getFigure().updateAndShowText!=null){
																this.getTextEditor().showForNode($.getFigure());
																this.temp.editPart=$;this.status="ALREADY_START_EDIT"}
															else this.status="NONE"}
														else if(this.isText(B.target)){
															var A=B.target.getAttribute("edgeId"),_=this.getConnectionByConnectionId(A);
															this.getTextEditor().showForEdge(_);
															this.temp.editPart=_.editPart;
															this.status="ALREADY_START_EDIT"}},
													completeEdit:function(B){
														if(!this.temp.editPart)return;
														var _=this.temp.editPart,A=this.getTextEditor().getValue();
														if(A!=_.getModel().name){B.role={name:"EDIT_TEXT",text:A};
														this.executeCommand(_,B)}this.getTextEditor().hide();
														var $=this.getSelectionManager().draggingText;if($)$.refresh();
														this.reset()},
													cancelEdit:function($){this.getTextEditor().hide();this.reset()},
													isText:function($){
														return(Gef.isVml&&$.tagName=="textbox")||(Gef.isSvg&&$.tagName=="text")},
													getTextEditor:function(){
														if(!this.textEditor){
															var A=this.browserListener.getViewer().getCanvasLocation(),$=A.x,_=A.y;
															this.textEditor=new Gef.figure.TextEditor($,_)}A=this.browserListener.getViewer().getCanvasLocation();
															this.textEditor.baseX=A.x;this.textEditor.baseY=A.y;
															this.textEditor.show();
															return this.textEditor}});
											Gef.ns("Gef.gef.tracker");Gef.gef.tracker.RemoveRequestTracker=Gef.extend(Gef.gef.tracker.AbstractRequestTracker,{
													understandRequest:function($){
														if($.editType!=null)return	false;
														if($.eventName!="KEY_DOWN")return;$.removeType="REMOVE";
														return $.removeType=="REMOVE"},
													processRequest:function(_){
														if(_.removeType!="REMOVE")return;
														if(_.eventName=="KEY_DOWN"){ // 敲击键盘
															var $=_.e.keyCode;
															// if(_.e.){}
															if($==46){
																_.removeType="REMOVE";
																this.status="REMOVE";
																this.removeAll(_)}
															if(_.e.ctrlKey&&$==65){
																_.removeType="SELECT_ALL";
																this.status="SELECT_ALL";
																this.selectAllNodes(_)}}},
													removeAll:function(C){
														try{var	_=this.getSelectionManager(),$=_.selectedConnection,B=_.items;
														if($!=null){C.role={name:"REMOVE_EDGE"};
															this.executeCommand($,C);_.removeSelectedConnection()}
														else if(B.length>0){C.role={name:"REMOVE_NODES",nodes:B};
														this.executeCommand(this.browserListener.graphicalViewer.getContents(),C);
														_.clearAll()}}catch(A){Gef.error(A)}},
													selectAllNodes:function($){this.getSelectionManager().selectAll()}});
									// 新增的快捷键请求跟踪者
											Gef.ns("Gef.gef.tracker");Gef.gef.tracker.ShortcutKeyTracker=Gef.extend(Gef.gef.tracker.AbstractRequestTracker,{
													understandRequest:function($){
														if($.editType!=null)return	false;
														if(!$.removeType)return false;
														if($.eventName=="KEY_DOWN")return true;
														return false;},
													processRequest:function(_){
														if(_.eventName=="KEY_DOWN"){ // 敲击键盘
															var $=_.e.keyCode;
															if(_.e.ctrlKey&&$==90){ // Ctrl+Z
																					// 的时候撤消
																this.undo();
															}
															else if(_.e.ctrlKey&&$==89){// Ctrl+Y的时候重做
																this.redo();
															}
															}},
													undo:function(){
														var	$=Gef.activeEditor.getGraphicalViewer(),A=$.getBrowserListener(),_=A.getSelectionManager();
														_.clearAll();
														var B=$.getEditDomain().getCommandStack();
														B.undo();
															},
													redo:function(){
														var	$=Gef.activeEditor.getGraphicalViewer(),A=$.getBrowserListener(),_=A.getSelectionManager();
														_.clearAll();
														var B=$.getEditDomain().getCommandStack();
														B.redo();
														}
											});
										// ===================
											Gef.ns("Gef.gef.tracker");Gef.gef.tracker.SelectionRequestTracker=Gef.extend(Gef.gef.tracker.AbstractRequestTracker,{
													understandRequest:function($){if($.editType!=null)return	false;
														if($.draggingType!=null)return false;
														if($.eventName!="MOUSE_UP"||!this.isInCanvas($.point))return	false;
														if(this.browserListener.dragging===true)return false;
															$.selectType="SELECT";return	$.selectType=="SELECT"},
													processRequest:function(B){
														if(B.selectType!="SELECT")return;
														var	$=this.findEditPartAt(B);
														if($.getClass()=="process");
														else if($.getClass()=="node"){
															var _=this.addSelected($,this.isMultiSelect(B));
															if(_){var A=this.createNodeHandle($);A.refresh()}}
														else if($.getClass()=="connection"){
															this.clearAll();this.addSelectedEdge($)}},
													addSelectedEdge:function($){this.getSelectionManager().addSelectedConnection($)},
													removeSelectedEdge:function($){this.getSelectionManager().removeSelectedConnection($)},
													addSelected:function($,_){return this.getSelectionManager().addSelectedNode($,_)},
													removeSelected:function($,_){this.getSelectionManager().removeSelectedNode($,_)},
													clearAll:function(){this.getSelectionManager().clearAll()},
													selectAll:function(){this.getSelectionManager().selectAll()},
													selectIn:function($){this.getSelectionManager().selectIn($)},
													createNodeHandle:function($){return this.getSelectionManager().createNodeHandle($)},
													removeNodeHandle:function($){return this.getSelectionManager.removeNodeHandle($)},
													refreshHandles:function(){this.getSelectionManager.refreshHandles()},
													findEditPartAt:function(A){
															var _=A.point,$=this.getContents();
															Gef.each(this.getNodeLayer().getChildren(),function(B){
																var C=A.target.getAttribute("id");
																if(this.isIn(_,B)&&C!=null&&C.indexOf("_Gef_")!=-1){
																	$=this.getEditPartByFigure(B);
																	return false}},this);
																	Gef.each(this.getConnectionLayer().getChildren(),function(_){if(A.target.id==_.el.id){$=this.getEditPartByFigure(_);return false}},this);return $}});
											// 选择监听器
											Gef.ns("Gef.gef.tracker");Gef.gef.tracker.SelectionListener=Gef.extend(Object,{selectionChanged:Gef.emptyFn});
											Gef.ns("Gef.gef.tracker");Gef.gef.tracker.SelectionListenerTracker=Gef.extend(Gef.gef.tracker.AbstractRequestTracker,{
													understandRequest:function($){
														return $.eventName=="MOUSE_UP"||$.eventName=="KEY_DOWN"},
													processRequest:function(C){
															var _=this.getSelectionManager();
															if(!this.previousSelected)this.previousSelected=[_.getDefaultSelected()];
															var A=_.getCurrentSelected(),D=_.getDefaultSelected(),B=false;
															if(this.previousSelected.length==A.length){
																for(var $=0;$<A.length;$++)if(A[$]!=this.previousSelected[$]){B=true;break}}else B=true;
															if(B===true){Gef.each(this.getSelectionListeners(),function($){$.selectionChanged(A,this.previousSelected,D)});
															this.previousSelected=A}},
													getSelectionListeners:function(){
															if(!this.selectionListeners)this.selectionListeners=[];
															return this.selectionListeners},
													addSelectionListener:function($){this.getSelectionListeners().push($)}});
				// Gef.gef.tracker.DefaultSelectionListener
				Gef.ns("Gef.gef.tracker");Gef.gef.tracker.DefaultSelectionListener=Gef.extend(Gef.gef.tracker.SelectionListener,{
													selectionChanged:function(_,$,B){
															if(_.length==1){
																var A=_[0];
																if(A==B)this.selectDefault(B);
																else if(A.getClass()=="node"){
																	var model =A.getModel();// 先更新formpanel
																	App.propertyManager.updateForm(model);
																	this.selectNode(A);
																	}
																else this.selectConnection(A)}else this.selectDefault(B)},
													selectNode:Gef.emptyFn,
													selectConnection:Gef.emptyFn,selectDefault:Gef.emptyFn});
					Gef.gef.tracker.ToolTracker=Gef.extend(Gef.gef.tracker.AbstractRequestTracker,{
													isTool:function(A){
															var $=false,_=null;
															Gef.each(this.getSelectedNodes(),function(B){Gef.each(B.getFigure().getTools(),function(B){if(B.isClicked(A)){$=true;_=B;return false}if($===true)return false})});if($===true)this.selectedTool=_;return	$},
													understandRequest:function(_){
															if(_.editType!=null)return false;
															if(_.draggingType!=null)return false;
															if(_.eventName=="MOUSE_DOWN"&&this.status=="NONE"){
																if(this.isTool(_)){var $=this.getSelectedNodes()[0];
																if(!$.canCreateOutgo())return false;else{this.status="TOOL_SELECTED";
																this.draggingType=this.status;
																_.draggingType="tool";return true}}}
															else if(_.eventName=="MOUSE_MOVE"){
																if(this.status=="TOOL_SELECTED"){
																	this.status="TOOL_MOVE";
																	this.draggingType=this.status;
																	_.draggingType="tool";
																	return true}
															else if(this.status=="TOOL_MOVE"){
																_.draggingType="tool";return	true}}
															else if(_.eventName=="MOUSE_UP")
																if(this.status=="TOOL_MOVE"){
																	this.status="TOOL_DROP";
																	this.draggingType=this.status;
																	_.draggingType="tool";
																	return true}
															else	if(this.status=="TOOL_DROP"){
																_.draggingType="tool";return true}return false},
													processRequest:function($){if(!this.status||this.status=="NONE")return;
															if(this.status=="TOOL_SELECTED")this.drag($);
															else if(this.status=="TOOL_MOVE")this.move($);
															else if(this.status=="TOOL_DROP")this.drop($)},
													drag:function($){this.selectedTool.drag(this)},
													move:function($){this.selectedTool.move(this,$)},
													drop:function($){this.selectedTool.drop(this,$);this.reset()}});
											Gef.ns("Gef.tool");Gef.tool.AbstractTool=Gef.extend(Object,{
													getKey:function(){return"abstractTool"},
													getId:function($){if($){this.node=$;this.id=$.getId()+":"+this.getKey()}return this.id},
													render:function(_,$){if(Gef.isVml)this.renderVml(_,$);else this.renderSvg(_,$)},
													renderVml:Gef.emptyFn,
													renderSvg:Gef.emptyFn,
													resize:function(B,A,$,_){
															if(Gef.isVml)this.resizeVml(B,A,$,_);
															else this.resizeSvg(B,A,$,_)},
													resizeVml:Gef.emptyFn,
													resizeSvg:Gef.emptyFn,
													isClicked:function($){if(Gef.isVml)return	this.isClickedVml($);else return this.isClickedSvg($)},
													isClickedVml:Gef.emptyFn,isClickedSvg:Gef.emptyFn,
													drag:Gef.emptyFn,move:Gef.emptyFn,drop:Gef.emptyFn});
											// 边框右边的功能Gef.tool.AbstractImageTool
											Gef.ns("Gef.tool");Gef.tool.AbstractImageTool=Gef.extend(Gef.tool.AbstractTool,{
													getKey:function(){return"abstractImageTool"},
													getUrl:function(){return Gef.IMAGE_ROOT+"../../tools/new_event.png"},
													getNodeConfig:function(){return{text:"node",w:48,h:48}},
													getX:function($){return	$+5},
													getY:function(){return 15},
													renderVml:function(A,_){
														var $=document.createElement("img");
														$.setAttribute("id",this.getId(_));
														$.setAttribute("unselectable","on");
														$.style.position="absolute";
														$.style.left=this.getX(_.w)+"px";
														$.style.top=this.getY()+"px";
														$.style.width="16px";
														$.style.height="16px";
														$.setAttribute("opacity","0.5");
														$.src=this.getUrl();
														A.appendChild($);
														this.el=$;
														$.onmouseover=function(){
																$.setAttribute("opacity","1.0")};
														$.onmouseout=function(){$.setAttribute("opacity","0.5")}},
													renderSvg:function(A,_){
														var $=document.createElementNS(Gef.svgns,"image");
														$.setAttribute("id",this.getId(_));
														$.setAttribute("x",this.getX(_.w));
														$.setAttribute("y",this.getY());
														$.setAttribute("width",16);
														$.setAttribute("height",16);
														$.setAttributeNS(Gef.linkns,"xlink:href",this.getUrl());
														$.setAttribute("opacity","0.5");
														A.appendChild($);
														this.el=$;
														$.addEventListener("mouseover",function(){
															$.setAttribute("opacity","1.0")},false);
															$.addEventListener("mouseout",function(){
																$.setAttribute("opacity","0.5")},false)},
													 resizeVml:function(B,A,$,_){this.el.style.left=this.getX($)+"px"},
													 resizeSvg:function(B,A,$,_){this.el.setAttribute("x",this.getX($))},
													 isClickedVml:function(_){
														var $=_.target,A=$.getAttribute("id");
														if(!A)return false;if($.tagName=="IMG"&&A==this.getId())return true},
													 isClickedSvg:function(_){
														var	$=_.target,A=$.getAttribute("id");
														if(!A)return false;
														if($.tagName=="image"&&A==this.getId())return true},
													drag:function(D){var B=this.getNodeConfig();
														D.getDraggingRect().name=B.text;
														var $=B.w,_=B.h;if(isNaN($)||$<0)$=48;if(isNaN(_)||_<0)_=48;
														var C=$*-1,A=_*-1;D.getDraggingRect().update(C,A,$,_)},
													move:function(D,B){
														var A=D.getDraggingRect(),_=B.point,C=_.x-A.w/2,$=_.y-A.h/2;
														A.moveTo(C,$)},
													drop:function(H,F){
														var E=H.getDraggingRect();
														if(H.isInCanvas(F.point)){
															var _=E.name;F.role={name:"CREATE_NODE",rect:{x:F.point.x-E.w/2,y:F.point.y-E.h/2,w:E.w,h:E.h},node:H.getModelFactory().createModel(_)};
															var $=new Gef.commands.CompoundCommand();
															$.addCommand(new Gef.gef.command.CreateNodeCommand(F.role.node,H.getContents().getModel(),F.role.rect));
															var C=this.node.editPart.getModel(),D=F.role.node,A=H.getModelFactory().createModel(this.getConnectionModelName());
															A.text="to "+D.text;
															$.addCommand(new Gef.gef.command.CreateConnectionCommand(A,C,D));
															H.getCommandStack().execute($)}var G=E.w*-1,B=E.h*-1;E.moveTo(G,B)}});
											// 边缘的流转工具Gef.tool.AbstractEdgeTool
											Gef.ns("Gef.tool");Gef.tool.AbstractEdgeTool=Gef.extend(Gef.tool.AbstractImageTool,{
													getKey:function(){return"abstractEdgeTool"},
													getUrl:function(){return Gef.IMAGE_ROOT+"../../tools/edges.png"},
													getX:function($){return $+5},
													getY:function(){return 40},
													drag:function(A){
														var _=this.node,$=_.editPart;
														if($!=null&&$.getClass()=="node")if($.canCreateOutgo())A.temp.editPart=$;A.getDraggingEdge().update(-1,-1,-1,-1)},
													move:function(D,C){
														var _=C.point,$=D.temp.editPart.getFigure(),B={x:$.x,y:$.y,w:$.w,h:$.h},A=D.getDraggingEdge();
														A.updateForDragging(B,_)},
													drop:function(E,C){
														var B=E.getDraggingEdge(),A=E.temp.editPart,_=E.findEditPartAt(C);
														if(A!=_&&_.getClass()=="node"&&_.canCreateIncome()){
														var D=this.getConnectionModelName(),$=E.getModelFactory().createModel(D);
														$.text="to "+_.getModel().text;
														C.role={name:"CREATE_EDGE",rect:{x1:B.x1,y1:B.y1,x2:B.x2,y2:B.y2},
													source:A.getModel(),target:_.getModel(),model:$};
														E.executeCommand(E.temp.editPart,C)}E.getDraggingEdge().moveToHide()}});
											// XML序列器 重要
											Gef.ns("Gef.gef.xml");Gef.gef.xml.XmlSerializer=function($){
														this.model=$;
														this.map={"node":Gef.xml.AbstractWrapper}};
														Gef.gef.xml.XmlSerializer.prototype={
															serialize:function(){
																var $=[];
																this.appendToBuffer($);
																return Gef.join($)},
															appendToBuffer:function($){
																$.push("<?xml version='1.0' encoding='UTF-8'?>\n");
																$.push("<node>\n");
																this.appendBody($);
																$.push("</node>")},
															appendBody:function($){
																Gef.each(this.model.getChildren(),function(_){
																		var A=this.getWrapper(_);
																		A.appendBuffer($)},this)},
															getWrapper:function(_){
																var	A=_.type,$=this.map[A];
																if(!$)return{appendBuffer:Gef.emptyFn};
																else return new $(_)}};
			Gef.ns("Gef.gef.xml");Gef.gef.xml.AbstractWrapper=function($){this.node=$};
											Gef.gef.xml.AbstractWrapper.prototype={
															appendBuffer:function($){
																this.appendHeader($);
																this.appendAttributes($);
																var _=[];this.appendBody(_);
																this.appendFooter($,_)},
															appendHeader:function($){
																$.push("  <",this.node.getType())},
															appendAttributes:function($){
																var _=this.node;
																$.push(" text='",_.text,"' g='",_.x,",",_.y,",",_.w,",",_.h,"'")},
															appendBody:function($){
																Gef.each(this.node.getOutgoingConnections(),function(_){
																	$.push("	<transition");
																	if(_.text!=null&&_.text!="")$.push(" name='",_.text);
																	$.push("' to='",_.getTarget().text,"'/>\n")})},
															appendFooter:function($,_){
																if(_.length==0)$.push("/>\n");
																else	$.push(">\n",Gef.join(_),"  </",this.node.getType(),">\n")}};
											// xml反序列化
										    Gef.ns("Gef.gef.xml");Gef.gef.xml.XmlDeserializer=Gef.extend(Object,{
															constructor:function($){
																var A=null;
																$=this.replaceIllegalSymbol($);
																if(typeof(DOMParser)=="undefined"){
																	A=new ActiveXObject("Microsoft.XMLDOM");
																	A.async="false";
																	A.loadXML($);
																}
																else{
																	var _=new DOMParser();
																	A=_.parseFromString($,"application/xml");
																	_=null;
																}
																this.xdoc=A;
															},
															replaceIllegalSymbol:function(srcStrs){
																if(!srcStrs){
																	return null;
																}
																// 替换非法字符，在解组/反序列化前
																var pattern =/\s((name)|(to))=\'([^\/\']*[\/][^\/\']*)+\'/g;
																var matchStrs =srcStrs.match(pattern);
																if(matchStrs){
																	var subPattern=/\s((name)|(to))=\'([^\/\']*[\/][^\/\']*)+\'/;// 把/g去掉，不往下走
																	for(var i=0;i<matchStrs.length;i++){
																		var replacementStr =matchStrs[i].replace(/\//g,"\uff0f");// 把半角的/去掉成全角的／
																		srcStrs=srcStrs.replace(subPattern,replacementStr);
																	}
																}
																if(srcStrs.indexOf('&')!=-1){// 如果文件含有半角的&就把它替换成全角的
																	srcStrs=srcStrs.replace(/&/g,"\uff06");// 暂时没有考虑jbpm的表达式里面出现半角的&符号的时候
																}
																return srcStrs;
															}
															});
								Gef.ns("Gef.layer");Gef.layer.Layer=Gef.extend(Gef.figure.GroupFigure,{
															LAYER_MASK:"LAYER_MASK",
															LAYER_LABEL:"LAYER_LABEL",
															LAYER_DRAGGING:"LAYER_DRAGGING",
															LAYER_HANDLE:"LAYER_HANDLE",
															LAYER_NODE:"LAYER_NODE",
															LAYER_CONNECTION:"LAYER_CONNECTION",
															LAYER_SNAP:"LAYER_SNAP",
															LAYER_GRID:"LAYER_GRID",
															constructor:function($){
																this.name=$;
																this.id=$;
																Gef.layer.Layer.superclass.constructor.call(this)},
															getName:function(){return this.name}});
											Gef.ns("Gef.layer");Gef.layer.GridLayer=Gef.extend(Gef.layer.Layer,{});
											Gef.ns("Gef.model");
											Gef.model.Model=Gef.extend(Object,{
															constructor:function($){
																this.listeners=[];$=$?$:{};
																Gef.apply(this,$)},
															addChangeListener:function($){this.listeners.push($)},
															removeChangeListener:function($){this.listeners.remove($)},
															notify:function(A,_){for(var $=0;$<this.listeners.length;$++)this.listeners[$].notifyChanged(A,_)},
															getId:function(){
																if(this.id==null)this.id=Gef.id();
																return this.id},
															getType:function(){
																if(this.type==null)this.type="node";return this.type},
															getEditPart:function(){return this.editPart},
															setEditPart:function($){
																this.editPart=$}});
											Gef.ns("Gef.model");
											Gef.model.ModelChangeListener=Gef.extend(Object,{notifyChanged:Gef.emptyFn});
					Gef.ns("Gef.model");
					Gef.model.NodeModel=Gef.extend(Gef.model.Model,{
															CHILD_ADDED:"CHILD_ADDED",
															NODE_MOVED:"NODE_MOVED",
															NODE_RESIZED:"NODE_RESIZED",
															TEXT_UPDATED:"TEXT_UPDATED",
															CONNECTION_SOURCE_ADDED:"CONNECTION_SOURCE_ADDED",
															CONNECTION_TARGET_ADDED:"CONNECTION_TARGET_ADDED",
															CHILD_REMOVED_FROM_PARENT:"CHILD_REMOVED_FROM_PARENT",
															constructor:function($){
																this.text="untitled";
																this.x=0;this.y=0;this.w=0;this.h=0;this.children=[];this.outgoingConnections=[];
																this.incomingConnections=[];
																Gef.model.NodeModel.superclass.constructor.call(this,$)},
															getText:function(){return this.text},
															setParent:function($){
																this.parent=$},getParent:function(){return this.parent},
															setChildren:function($){this.children=$},
															getChildren:function(){return this.children},
															addChild:function($){
																this.children.push($);
																$.setParent(this);
																this.notify(this.CHILD_ADDED,$)},
															removeChild:function($){
																this.children.remove($);
																$.setParent(null);
																$.notify("CHILD_REMOVED_FROM_PARENT",$)},
															getOutgoingConnections:function(){
																return this.outgoingConnections},
															getIncomingConnections:function(){return this.incomingConnections},
															addOutgoingConnection:function($){
																if($.getSource()==this&&this.outgoingConnections.indexOf($)==-1){this.outgoingConnections.push($);
																this.notify(this.CONNECTION_SOURCE_ADDED)}},
															addIncomingConnection:function($){
																if($.getTarget()==this&&this.incomingConnections.indexOf($)==-1){this.incomingConnections.push($);
																this.notify(this.CONNECTION_TARGET_ADDED)}},
															removeOutgoingConnection:function($){
																if($.getSource()==this&&this.outgoingConnections.indexOf($)!=-1)this.outgoingConnections.remove($)},
															removeIncomingConnection:function($){if($.getTarget()==this&&this.incomingConnections.indexOf($)!=-1)this.incomingConnections.remove($)},
															moveTo:function(_,$){
																this.x=_;this.y=$;
																this.notify(this.NODE_MOVED)},
															resize:function(B,A,$,_){
																this.x=B;this.y=A;this.w=$;this.h=_;
																this.notify(this.NODE_RESIZED)},
															updateText:function($){
																this.text=$;this.notify(this.TEXT_UPDATED)},
															removeForParent:function(){
																this.parent.removeChild(this);
																this.notify(this.CHILD_REMOVED_FROM_PARENT)}});
												Gef.ns("Gef.model");Gef.model.ConnectionModel=Gef.extend(Gef.model.Model,{
															RECONNECTED:"RECONNECTED",
															DISCONNECTED:"DISCONNECTED",
															CONNECTION_RESIZED:"CONNECTION_RESIZED",
															CONNECTION_TEXT_UPDATED:"CONNECTION_TEXT_UPDATED",
															TEXT_POSITION_UPDATED:"TEXT_POSITION_UPDATED",
															constructor:function($){
																this.x1=0;this.y1=0;this.x2=0;this.y2=0;this.text="untitled";
																this.textX=0;this.textY=0;this.innerPoints=[];
																Gef.model.ConnectionModel.superclass.constructor.call(this,$)},
															getText:function(){return this.text},
															getSource:function(){return this.source},setSource:function($){this.source=$},
															getTarget:function(){return	this.target},setTarget:function($){this.target=$},
															reconnect:function(){
																this.notify(this.RECONNECTED);
																this.source.addOutgoingConnection(this);
																this.target.addIncomingConnection(this)},
															disconnect:function(){
																this.notify(this.DISCONNECTED);
																this.source.removeOutgoingConnection(this);
																this.target.removeIncomingConnection(this)},
															resizeConnection:function($){
																this.innerPoints=$;this.notify(this.CONNECTION_RESIZED)},
															updateText:function($){
																this.text=$;this.notify(this.CONNECTION_TEXT_UPDATED)},
															updateTextPosition:function(_,$){
																this.textX=_;this.textY=$;
																this.notify(this.TEXT_POSITION_UPDATED)}});
													// 编辑器工厂类
													// JBPM4EditPartFactory重点
								Gef.ns("Gef.jbpm4");Gef.jbpm4.JBPM4EditPartFactory=Gef.extend(Gef.gef.EditPartFactory,{
															createEditPart:function($){
																switch($){
																	case"process":return new Gef.jbpm4.editpart.ProcessEditPart($);
																	case"start":return new Gef.jbpm4.editpart.StartEditPart($);
																	case"end":return new Gef.jbpm4.editpart.EndEditPart($);
																	case"cancel":return new Gef.jbpm4.editpart.CancelEditPart($);
																	case"error":return new Gef.jbpm4.editpart.ErrorEditPart($);
																	case"state":return new	Gef.jbpm4.editpart.StateEditPart($);
																	case"hql":return new Gef.jbpm4.editpart.HqlEditPart($);
																	case"sql":return new	Gef.jbpm4.editpart.SqlEditPart($);
																	case"java":return new	Gef.jbpm4.editpart.JavaEditPart($);
																	case"script":return new Gef.jbpm4.editpart.ScriptEditPart($);
																	case"task":return new Gef.jbpm4.editpart.NewTaskEditPart($);
																	case"decision":return new Gef.jbpm4.editpart.DecisionEditPart($);
																	case"fork":return new	Gef.jbpm4.editpart.ForkEditPart($);
																	case"join":return new Gef.jbpm4.editpart.JoinEditPart($);
																	case"custom":return	new Gef.jbpm4.editpart.CustomEditPart($);
																	case"mail":return new Gef.jbpm4.editpart.MailEditPart($);
																	case"stage":return new Gef.jbpm4.editpart.StageEditPart($);
																	case"subProcess":return new Gef.jbpm4.editpart.NewSubProcessEditPart($);
																	case"group":return new Gef.jbpm4.editpart.GroupEditPart($);
																	case"transition":return new Gef.jbpm4.editpart.TransitionEditPart($);
																	case"jms":return	new Gef.jbpm4.editpart.JmsEditPart($);
																	case"ruleDecision":return	new Gef.jbpm4.editpart.RuleDecisionEditPart($);
																	case"rules":return new Gef.jbpm4.editpart.RulesEditPart($);default:return null}}});
											// 模型工厂类,JBPM4ModelFactory
								Gef.ns("Gef.jbpm4");Gef.jbpm4.JBPM4ModelFactory=Gef.extend(Gef.gef.ModelFactory,{
														getId:function($){
															if(this.map==null)this.map={};
															if(this.map[$]==null)
																this.map[$]=1;
															else 
																this.map[$]++;
															return	$+" "+this.map[$]},
														reset:function(){delete this.map;this.map={}},
														createModel:function($){
															var _=this.getId($);
															switch($){
																case"process":return new	Gef.jbpm4.model.ProcessModel({id:_,text:_});
																case"start":return new Gef.jbpm4.model.StartModel({id:_,text:_.replace(/start/,"\u5f00\u59cb\u73af\u8282")});
																case"end":return new Gef.jbpm4.model.EndModel({id:_,text:_.replace(/end/,"\u7ed3\u675f\u73af\u8282")});
																case"cancel":return new Gef.jbpm4.model.CancelModel({id:_,text:_});
																case"error":return	new Gef.jbpm4.model.ErrorModel({id:_,text:_});
																case"state":return new Gef.jbpm4.model.StateModel({id:_,text:_.replace(/state/,"\u72b6\u6001\u8282\u70b9")});
																case"hql":return	new Gef.jbpm4.model.HqlModel({id:_,text:_});
																case"sql":return new Gef.jbpm4.model.SqlModel({id:_,text:_});
																case"java":return new Gef.jbpm4.model.JavaModel({id:_,text:_});
																case"script":return new	Gef.jbpm4.model.ScriptModel({id:_,text:_});
																case"task":return new Gef.jbpm4.model.TaskModel({id:_,text:_.replace(/task/,"\u5ba1\u6279\u73af\u8282")});
																case"decision":return	new Gef.jbpm4.model.DecisionModel({id:_,text:_.replace(/decision/,"\u51b3\u7b56\u73af\u8282")});
																case"fork":return new Gef.jbpm4.model.ForkModel({id:_,text:_.replace(/fork/,"\u5e76\u884c\u8282\u70b9")});
																case"join":return new Gef.jbpm4.model.JoinModel({id:_,text:_.replace(/join/,"\u6c47\u805a\u8282\u70b9")});
																case"custom":return new Gef.jbpm4.model.CustomModel({id:_,text:_});
																case"mail":return new	Gef.jbpm4.model.MailModel({id:_,text:_});
																case"stage":return new	Gef.jbpm4.model.StageModel({id:_,text:_.replace(/stage/,"\u9636\u6bb5")});
																case"subProcess":return new Gef.jbpm4.model.SubProcessModel({id:_,text:_.replace(/subProcess/,"\u5b50\u6d41\u7a0b")});
																case"group":return new Gef.jbpm4.model.GroupModel({id:_,text:_});
																case"transition":return new Gef.jbpm4.model.TransitionModel({id:_,text:_});
																case"jms":return new Gef.jbpm4.model.JmsModel({id:_,text:_});
																case"ruleDecision":return new Gef.jbpm4.model.RuleDecisionModel({id:_,text:_});
																case"rules":return new Gef.jbpm4.model.RulesModel({id:_,text:_});
																default:return null}}});
								Gef.ns("Gef.jbpm4");Gef.jbpm4.JBPM4PaletteHelper=Gef.extend(Gef.gef.support.PaletteHelper,{
											constructor:function($){this.editor=$},
											createSource:function(){
													// 创建Palette
													var $=this;return{
													title:"palette",
													// 创建工具选项
													buttons:[{text:"export",handler:function(){Gef.showMessage("toolbar.export",$.editor.serial())}},// 导出功能
															 {text:"clear",handler:function(){$.editor.clear()}},// 清除功能
															 {text:"reset",handler:function(){$.editor.reset()}}],
													groups:[{title:"Operations",// 操作
															items:[{text:"Select",iconCls:"gef-tool-select",creatable:false},// 选择
															{text:"Marquee",iconCls:"gef-tool-marquee",creatable:false}]},
															{title:"Activities",
																items:[ {text:"transition",iconCls:"gef-tool-transition",creatable:false,isConnection:true},// 跃迁
																		{text:"start",iconCls:"gef-tool-start",w:48,h:48},// 开始节点
																		{text:"end",iconCls:"gef-tool-end",w:48,h:48},// 结束节点
																		{text:"cancel",iconCls:"gef-tool-cancel",w:48,h:48},// 取消结束节点
																		{text:"error",iconCls:"gef-tool-error",w:48,h:48},
																		{text:"state",iconCls:"gef-tool-state",w:90,h:50},
																		{text:"hql",iconCls:"gef-tool-hql",w:90,h:50},
																		{text:"sql",iconCls:"gef-tool-sql",w:90,h:50},
																		{text:"java",iconCls:"gef-tool-java",w:90,h:50},
																		{text:"script",iconCls:"gef-tool-script",w:90,h:50},
																		{text:"task",iconCls:"gef-tool-task",w:90,h:50},
																		{text:"decision",iconCls:"gef-tool-decision",w:48,h:48},
																		{text:"fork",iconCls:"gef-tool-fork",w:48,h:48},
																		{text:"join",iconCls:"gef-tool-join",w:48,h:48},
																		{text:"mail",iconCls:"gef-tool-mail",w:90,h:50},
																		{text:"stage",iconCls:"gef-tool-mail",w:90,h:50},
																		{text:"custom",iconCls:"gef-tool-custom",w:90,h:50},
																		{text:"subProcess",iconCls:"gef-tool-subProcess",w:90,h:50},
																		{text:"group",iconCls:"gef-tool-group",w:90,h:50},
																		{text:"jms",iconCls:"gef-tool-jms",w:90,h:50},
																		{text:"ruleDecision",iconCls:"gef-tool-ruleDecision",w:48,h:48},
																		{text:"rules",iconCls:"gef-tool-rules",w:90,h:50}]}]}},
											getSource:function(){
													if(!this.source)this.source=this.createSource();
													return	this.source},
											render:function(L){
													var _=this.getSource(),E=document.createElement("div");
													E.className="gef-drag-handle";
													L.appendChild(E);
													var G=document.createElement("span");
													E.appendChild(G);
													G.unselectable="on";
													G.innerHTML=_.title;
													var	D=this;
													for(var H=0;H<_.buttons.length;H++){
															var B=_.buttons[H],N=document.createElement("a");
													N.href="javascript:void(0);";
													N.onclick=B.handler;
													N.innerHTML="|"+B.text+"|";
													G.appendChild(N)}var K=document.createElement("ul");
													L.appendChild(K);
													for(H=0;H<_.groups.length;H++){
														var	I=_.groups[H],M=document.createElement("li");
														M.className="gef-palette-bar";
														K.appendChild(M);
														var	C=document.createElement("div");
														C.unselectable="on";
														C.innerHTML=I.title;
														M.appendChild(C);
														var O=document.createElement("ul");
														M.appendChild(O);
														for(var J=0;J<I.items.length;J++){
															var $=I.items[J],F=document.createElement("li");
															F.id=$.text;
															F.className="gef-palette-item";
															O.appendChild(F);
															var A=document.createElement("span");
															A.innerHTML=$.text;
															A.className=$.iconCls;
															A.unselectable="on";
															F.appendChild(A)}}},
											getActivePalette:function(){return this.activePalette},
											setActivePalette:function($){this.activePalette=$},
											getPaletteConfig:function(B,_){
																var E=_.parentNode.id;if(!E)return null;
																var C=this.getSource(),A=null;
																Gef.each(C.groups,function($){Gef.each($.items,function($){if($.text==E){A=$;return false}});
																if(A!=null)return false});
																if(!A)return null;
																var $=null;
																if(this.getActivePalette()){
																	var D=this.getActivePalette().text;
																	$=document.getElementById(D);
																	$.style.background="white"}
																this.setActivePalette(A);
																$=document.getElementById(E);
																$.style.background="#CCCCCC";
																if(A.creatable===false)return null;return	A}});
		// Gef.jbpm4.JBPM4Editor
		Gef.ns("Gef.jbpm4");Gef.jbpm4.JBPM4Editor=Gef.extend(Gef.gef.support.DefaultGraphicalEditorWithPalette,{
					constructor:function(){
						this.modelFactory=new Gef.jbpm4.JBPM4ModelFactory();
						this.editPartFactory=new Gef.jbpm4.JBPM4EditPartFactory();
						Gef.jbpm4.JBPM4Editor.superclass.constructor.call(this)},
					getPaletteHelper:function(){
							if(!this.paletteHelper)this.paletteHelper=new Gef.jbpm4.JBPM4PaletteHelper(this);
							return this.paletteHelper},
					serial:function(){
							var $=this.getGraphicalViewer().getContents().getModel();
							var A=new Gef.jbpm4.xml.JBPM4Serializer($);
							var _=A.serialize();
							return _;
							},
					clear:function(){
							var $=this.getGraphicalViewer(),_=$.getContents(),B=$.getBrowserListener(),C=$.getEditDomain().getCommandStack(),A=B.getSelectionManager();
							A.selectAll();
							var D=_.getRemoveNodesCommand({role:{nodes:A.getSelectedNodes()}});
							C.execute(D);
							A.clearAll();
							this.editDomain.editPartRegistry=[]},
					reset:function(){
							this.clear();
							var $=this.getGraphicalViewer(),A=$.getEditDomain().getCommandStack();
							A.flush();
							this.getModelFactory().reset();
							/* 重新打开的函数 resetAndOpen */
							var _=$.getContents();
							_.text="";
							_.key=null;
							_.description=null;
							_.getModel().text="";
							_.getModel().key=null;
							_.getModel().description=null;
							},
					validateJbpm4XmlContent:function(srcStrs){ // 验证XML内容
							var pattern =/((task)|(sub-process))\s*((name)|(to))=\'([^\/\']*[^\/\']*)+\'/g;
							var matchStrs =srcStrs.match(pattern);
							var nameValpattern=/'.+'/;
							var names =[];
							var duplicateName=null;
							if(matchStrs==null)// 没有画任务节点
								return null;
							for(var y=0;y<matchStrs.length;y++){
								var name =nameValpattern.exec(matchStrs[y]).toString().replace(/'/g,"");// 过滤出节点的name属性的值
								names.push(name);
							}
							var count=0;
							for(var i=0;i<names.length;i++){
								for(var j=i;names.length-i>j;j++){  // 冒泡比较法
									if(names[i]==names[j+1]){ // 包含该名称
										count++;
									}
									if(count==1){
										duplicateName=names[i];
										break;
									}
								}
								count=0;
							}
							if(duplicateName){	
								return duplicateName;
							}
							return null;
					},
					// 重新调整画布的宽度和高度
					resetMaxWidthAndHeight:function(processModel){
							var tempXval=0;
							var tempYval=0;
							Gef.each(processModel.getChildren(),function(model){
								if(model.x>tempXval)
									tempXval =model.x;
								if(model.y>tempYval)
									tempYval =model.y;
							});
							var defaultWidth =Ext.fly("__gef_jbpm4__").getWidth();
							if(tempXval>defaultWidth){
								Ext.fly("__gef_jbpm4__").setWidth(tempXval+110);
								Ext.fly("__gef_jbpm4_center__").setWidth(tempXval+100);// 注意这里要比上下都少10个宽度
								Ext.fly("__gef_jbpm4_bottom__").setWidth(tempXval+110);
								Gef.activeEditor.addWidth(tempXval+100);
							}
							var defaultHeight =Ext.fly("__gef_jbpm4__").getHeight();
							if(tempYval>defaultHeight){
								Ext.fly("__gef_jbpm4__").setHeight(tempYval+110);
								Ext.fly("__gef_jbpm4_center__").setHeight(tempYval+100);
								Ext.fly("__gef_jbpm4_right__").setHeight(tempYval+110);
								Gef.activeEditor.addHeight(tempYval+100);
							}
							
					},
					resetAndOpen:function(_){// 重设和打开
							this.reset();
							var A=new Gef.jbpm4.xml.JBPM4Deserializer(_);
							var $=A.decode();
							var B={};
							Gef.each($.getChildren(),function(A){
								var E=A.getType();
								D=A.text;
								if(!D)return true;
								var F=E+"	";
								if(D.indexOf(F)!=0)return true;
								var _=D.substring(F.length);
								$=parseInt(_);
								if(isNaN($))return true;
								var C=B[E];
								if(typeof C=="undefined"||$>C) B[E]=$;
								});
							this.getModelFactory().map=B;
							this.getGraphicalViewer().setContents($);
							this.getGraphicalViewer().getContents().refresh();
							this.resetMaxWidthAndHeight($);
							}
					});
		
//-------------------------------------------------------------------------		
Gef.ns("Gef.jbpm4");
Gef.jbpm4.JBPM4EditorInput=Gef.extend(Gef.ui.EditorInput,{
			constructor:function($){
				if(!$)	$="process";
				this.processModel=$},
			readXml:function($){
				var _=new Gef.jbpm4.xml.JBPM4Deserializer($);
				this.processModel=_.decode()},
			getName:function(){return this.processModel.name},
			getObject:function(){return this.processModel}});
//--------------------------------------------------------------------------	
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.ProcessEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){return new Gef.jbpm4.figure.ProcessFigure()},
			getClass:function(){return"process"},
			canCreate:function(_){
				var $=true;
				if(_.getType()=="start")
					Gef.each(this.children,function(_){
					if(_.getModel().type=="start"){
						Gef.showMessage("validate.only_one_start","只能创建一个开始节点.");
						$=false;return false}
					});
				return $}});
//--------------------------------------------------------------------------
// 开始节点编辑部分
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.StartEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),
				$=new Gef.jbpm4.figure.StartFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;
				return	$},
			canCreateOutgo:function(){
					if(this.getOutgoingConnections().length==0)return true;
					else{Gef.showMessage("validate.start_only_one_outgo","开始节点只能有一个向外的连线.");return false}},
			canCreateIncome:function(){Gef.showMessage("validate.start_no_income","开始节点不能有向内的连线.");return false},
			canResize:function(){return false}});
//--------------------------------------------------------------------------
	// 新的任务节点部分
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.NewTaskEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),
				$=new Gef.jbpm4.figure.NewTaskFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;return	$},
			canResize:function(){return false}});
//--------------------------------------------------------------------------
Gef.ns("Gef.jbpm4.editpart");Gef.jbpm4.editpart.NewSubProcessEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),
				$=new Gef.jbpm4.figure.NewSubProcessFigure({x:this.model.x,y:this.model.y,name:this.model.text,subProcessKey:_.subProcessKey});
				$.editPart=this;
				return	$},
			canResize:function(){return false}});
//--------------------------------------------------------------------------
// 结束节点编辑部分
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.EndEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),$=new Gef.jbpm4.figure.EndFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;return $},
			canCreateOutgo:function(){Gef.showMessage("validate.end_no_outgo","\u7ed3\u675f\u8282\u70b9\u4e0d\u80fd\u6709\u5411\u5916\u8fde\u7ebf.");return false},
			canResize:function(){return false}});
//--------------------------------------------------------------------------
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.CancelEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),$=new Gef.jbpm4.figure.CancelFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;return $},
			canCreateOutgo:function(){Gef.showMessage("validate.cancel_no_outgo","\u53d6\u6d88\u8282\u70b9\u4e0d\u80fd\u6709\u5411\u5916\u8fde\u7ebf.");return false},
			canResize:function(){return false}});
//--------------------------------------------------------------------------
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.ErrorEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),$=new Gef.jbpm4.figure.ErrorFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;return $},
			canCreateOutgo:function(){Gef.showMessage("validate.error_no_outgo","\u9519\u8bef\u8282\u70b9\u4e0d\u80fd\u6709\u5411\u5916\u8fde\u7ebf.");return false},
			canResize:function(){return false}});
//--------------------------------------------------------------------------
	// 状态节点
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.StateEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),$=new Gef.jbpm4.figure.StateFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;return $}});
//--------------------------------------------------------------------------
// HQL节点
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.HqlEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),$=new Gef.jbpm4.figure.HqlFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;return $}});
//--------------------------------------------------------------------------
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.SqlEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),$=new Gef.jbpm4.figure.SqlFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;return $}});
//--------------------------------------------------------------------------
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.JavaEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var	_=this.getModel(),$=new	Gef.jbpm4.figure.JavaFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;return $}});
//--------------------------------------------------------------------------
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.ScriptEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),
				$=new Gef.jbpm4.figure.ScriptFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;return $}});
//--------------------------------------------------------------------------
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.TaskEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){var	_=this.getModel(),$=new	Gef.jbpm4.figure.TaskFigure({x:this.model.x,y:this.model.y,name:this.model.text});
			$.editPart=this;return $}});
//--------------------------------------------------------------------------
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.DecisionEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),$=new Gef.jbpm4.figure.DecisionFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;return $},
			canResize:function(){return false}});
//--------------------------------------------------------------------------
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.ForkEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),$=new Gef.jbpm4.figure.ForkFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;return	$},
			canResize:function(){return false}});
//--------------------------------------------------------------------------
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.JoinEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),$=new Gef.jbpm4.figure.JoinFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;return $},
			canResize:function(){return false}});
//--------------------------------------------------------------------------
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.CustomEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),
				$=new Gef.jbpm4.figure.CustomFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;return $}});
//--------------------------------------------------------------------------
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.MailEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),
				$=new Gef.jbpm4.figure.MailFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;return	$}});
//--------------------------------------------------------------------------
// 增加stage editpart Gef.jbpm4.editpart.StageEditPart
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.StageEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),
				$=new Gef.jbpm4.figure.StageFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;
				return	$},
			canCreateOutgo:function(){return false;},
			canCreateIncome:function(){return false;}	
				});
//--------------------------------------------------------------------------
Gef.ns("Gef.jbpm4.editpart");
Gef.jbpm4.editpart.SubProcessEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),
				$=new Gef.jbpm4.figure.SubProcessFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;
				return $}});
//--------------------------------------------------------------------------
	Gef.ns("Gef.jbpm4.editpart");
	Gef.jbpm4.editpart.GroupEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){var	_=this.getModel(),$=new	Gef.jbpm4.figure.GroupNodeFigure({x:this.model.x,y:this.model.y,name:this.model.text});
			$.editPart=this;return $}});
//--------------------------------------------------------------------------	
	Gef.ns("Gef.jbpm4.editpart");
	Gef.jbpm4.editpart.TransitionEditPart=Gef.extend(Gef.gef.editparts.ConnectionEditPart,{
			createFigure:function(){
				var _=this.getModel(),$=new Gef.jbpm4.figure.TransitionFigure(this.getSource().getFigure(),this.getTarget().getFigure());
				$.innerPoints=_.innerPoints;$.name=_.text;$.textX=_.textX;$.textY=_.textY;$.editPart=this;$.conditional=_.condition?true:false;return $}});
//--------------------------------------------------------------------------	
	Gef.ns("Gef.jbpm4.editpart");
	Gef.jbpm4.editpart.JmsEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),$=new Gef.jbpm4.figure.JmsFigure({x:this.model.x,y:this.model.y,name:this.model.text});$.editPart=this;return $}});
//--------------------------------------------------------------------------	
	Gef.ns("Gef.jbpm4.editpart");
	Gef.jbpm4.editpart.RuleDecisionEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){
				var _=this.getModel(),$=new Gef.jbpm4.figure.RuleDecisionFigure({x:this.model.x,y:this.model.y,name:this.model.text});
				$.editPart=this;return	$},
			canResize:function(){return false}});
//--------------------------------------------------------------------------	
	Gef.ns("Gef.jbpm4.editpart");
	Gef.jbpm4.editpart.RulesEditPart=Gef.extend(Gef.gef.editparts.NodeEditPart,{
			createFigure:function(){var _=this.getModel(),$=new Gef.jbpm4.figure.RulesFigure({x:this.model.x,y:this.model.y,name:this.model.text});
			$.editPart=this;return $}});
//--------------------------------------------------------------------------	
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.ProcessModel=Gef.extend(Gef.model.NodeModel,{type:"process"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.StartModel=Gef.extend(Gef.model.NodeModel,{type:"start"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.EndModel=Gef.extend(Gef.model.NodeModel,{type:"end"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.CancelModel=Gef.extend(Gef.model.NodeModel,{type:"cancel"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.ErrorModel=Gef.extend(Gef.model.NodeModel,{type:"error"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.StateModel=Gef.extend(Gef.model.NodeModel,{type:"state"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.HqlModel=Gef.extend(Gef.model.NodeModel,{type:"hql"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.SqlModel=Gef.extend(Gef.model.NodeModel,{type:"sql"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.JavaModel=Gef.extend(Gef.model.NodeModel,{type:"java"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.ScriptModel=Gef.extend(Gef.model.NodeModel,{type:"script"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.TaskModel=Gef.extend(Gef.model.NodeModel,{type:"task"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.DecisionModel=Gef.extend(Gef.model.NodeModel,{type:"decision"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.ForkModel=Gef.extend(Gef.model.NodeModel,{type:"fork"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.JoinModel=Gef.extend(Gef.model.NodeModel,{type:"join"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.CustomModel=Gef.extend(Gef.model.NodeModel,{type:"custom"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.StageModel=Gef.extend(Gef.model.NodeModel,{type:"stage"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.MailModel=Gef.extend(Gef.model.NodeModel,{type:"mail"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.SubProcessModel=Gef.extend(Gef.model.NodeModel,{type:"subProcess"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.GroupModel=Gef.extend(Gef.model.NodeModel,{type:"group"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.TransitionModel=Gef.extend(Gef.model.ConnectionModel,{type:"transition"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.JmsModel=Gef.extend(Gef.model.NodeModel,{type:"jms"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.RuleDecisionModel=Gef.extend(Gef.model.NodeModel,{type:"ruleDecision"});
	Gef.ns("Gef.jbpm4.model");Gef.jbpm4.model.RulesModel=Gef.extend(Gef.model.NodeModel,{type:"rules"});
	Gef.ns("Gef.jbpm4.figure");Gef.jbpm4.figure.AbstractNodeFigure=Gef.extend(Gef.figure.NodeFigure,{

getTools:function(){
				if(!this.tools)this.tools=[new Gef.jbpm4.tool.TaskTool(),new Gef.jbpm4.tool.EndTool(),new Gef.jbpm4.tool.GatewayTool(),new Gef.jbpm4.tool.LineTool()];return this.tools}});
	// stage node figure
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.StageNodeFigure=Gef.extend(Gef.figure.NodeFigure,{
			getTools:function(){
				if(!this.tools)this.tools=[new Gef.jbpm4.tool.TaskTool(),new Gef.jbpm4.tool.EndTool(),new Gef.jbpm4.tool.GatewayTool(),new Gef.jbpm4.tool.LineTool()];return this.tools}});
	// ==============
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.AbstractImageFigure=Gef.extend(Gef.figure.ImageNodeFigure,{
			getTools:function(){
				if(!this.tools)this.tools=[new Gef.jbpm4.tool.TaskTool(),new Gef.jbpm4.tool.EndTool(),new Gef.jbpm4.tool.GatewayTool(),new	Gef.jbpm4.tool.LineTool()];
				return this.tools}});
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.ProcessFigure=Gef.extend(Gef.figure.NoFigure,{});
	// 开始节点图形
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.StartFigure=Gef.extend(Gef.jbpm4.figure.AbstractImageFigure,{
			constructor:function($){
				Gef.jbpm4.figure.StartFigure.superclass.constructor.call(this,$);
				this.url=Gef.IMAGE_ROOT+"start_event_empty.png"}});
	// 新增加的任务节点图形是用图片的
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.NewTaskFigure=Gef.extend(Gef.jbpm4.figure.AbstractNodeFigure,{
			renderVml:function(){ // 重写renderVml方法
				var url=Gef.IMAGE_ROOT+"new_task_pic.png";
				var A=document.createElement("v:group");
				A.style.left=this.x;
				A.style.top=this.y;
				A.style.width=this.w;
				A.style.height=this.h;
				A.setAttribute("coordsize",this.w+","+this.h);
				this.el=A;
				var _=document.createElement("v:rect");
				_.style.position="absolute";
				_.style.zIndex=100;
				_.style.left="5px";
				_.style.top="5px";
				_.style.width=(this.w-10)+"px";
				_.style.height=(this.h-10)+"px";
				_.setAttribute("id",Gef.id());
				_.setAttribute("arcsize",0.2);
				// _.setAttribute("fillcolor","#FFFFFF");
				_.setAttribute("filled","false");// 不填充颜色
				_.setAttribute("strokecolor","#FFFFFF");
				_.setAttribute("strokeweight","1");
				_.style.verticalAlign="middle";
				// _.style.display="none";
				// 方框背景显示图片
				// <v:stroke filltype="pattern" src="shili/fyw2.jpg" opacity="1"
				// startarrow="none" endarrow="none"/><v:imagedata id=img1
				// src="shili/fyw2.jpg"/>
				var img =document.createElement("v:imagedata");
				img.setAttribute("id",Gef.id());
				img.setAttribute("src",url);
				_.appendChild(img);
				A.appendChild(_);
				this.rectEl=_;
				// A.appendChild(img);
				// this.rectEl=img;
				var B=this.getTextPosition(this.w,this.h),$=document.createElement("v:textbox");
				$.style.textAlign="center";
				$.style.fontFamily="Verdana";
				$.style.fontSize="12px";
				// $.style.verticalAlign="bottom";
				$.setAttribute("id",Gef.id());
				$.innerHTML=this.name;
				_.appendChild($);
				this.textEl=$}
	});
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.NewSubProcessFigure=Gef.extend(Gef.jbpm4.figure.AbstractNodeFigure,{
			renderVml:function(){ // 重写renderVml方法
				var url=Gef.IMAGE_ROOT+"zlc.png";
				var A=document.createElement("v:group");
				A.style.left=this.x;
				A.style.top=this.y;
				A.style.width=this.w;
				A.style.height=this.h;
				A.setAttribute("coordsize",this.w+","+this.h);
				this.el=A;
				var _=document.createElement("v:rect");
				_.style.position="absolute";
				_.style.zIndex=101;
				_.style.left="5px";
				_.style.top="5px";
				_.style.width=(this.w-10)+"px";
				_.style.height=(this.h-10)+"px";
				_.setAttribute("id",Gef.id());
				_.setAttribute("arcsize",0.2);
				// _.setAttribute("fillcolor","#FFFFFF");
				_.setAttribute("filled","false");// 不填充颜色
				_.setAttribute("strokecolor","#FFFFFF");
				if(this.subProcessKey!=null&&this.subProcessKey!="")// 已经选择子流程
					_.strokecolor="red";
				_.setAttribute("strokeweight","1");
				_.style.verticalAlign="middle";
				// _.style.display="none";
				// 方框背景显示图片
				var img =document.createElement("v:imagedata");
				img.setAttribute("id",Gef.id());
				img.setAttribute("src",url);
				_.appendChild(img);
				A.appendChild(_);
				this.rectEl=_;
				var B=this.getTextPosition(this.w,this.h),$=document.createElement("v:textbox");
				$.style.textAlign="center";
				$.style.fontFamily="Verdana";
				// figure.rectEl.setAttribute("strokecolor","red");//使得子流程的边框变成红色
				$.style.fontSize="9px";
				// $.style.verticalAlign="bottom";
				$.setAttribute("id",Gef.id());
				$.innerHTML=this.name;
				_.appendChild($);
				this.textEl=$}
	});

	// 结束节点图形
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.EndFigure=Gef.extend(Gef.figure.ImageNodeFigure,{
			constructor:function($){
				Gef.jbpm4.figure.EndFigure.superclass.constructor.call(this,$);
				this.url=Gef.IMAGE_ROOT+"end_event_terminate.png"}});
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.CancelFigure=Gef.extend(Gef.figure.ImageNodeFigure,{
			constructor:function($){Gef.jbpm4.figure.CancelFigure.superclass.constructor.call(this,$);
			this.url=Gef.IMAGE_ROOT+"end_event_cancel.png"}});
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.ErrorFigure=Gef.extend(Gef.figure.ImageNodeFigure,{
			constructor:function($){
				Gef.jbpm4.figure.ErrorFigure.superclass.constructor.call(this,$);
				this.url=Gef.IMAGE_ROOT+"end_event_error.png"}});
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.StateFigure=Gef.extend(Gef.jbpm4.figure.AbstractNodeFigure,{});
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.HqlFigure=Gef.extend(Gef.jbpm4.figure.AbstractNodeFigure,{});
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.SqlFigure=Gef.extend(Gef.jbpm4.figure.AbstractNodeFigure,{});
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.JavaFigure=Gef.extend(Gef.jbpm4.figure.AbstractNodeFigure,{});
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.ScriptFigure=Gef.extend(Gef.jbpm4.figure.AbstractNodeFigure,{});
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.TaskFigure=Gef.extend(Gef.jbpm4.figure.AbstractNodeFigure,{});
	Gef.ns("Gef.jbpm4.figure");
	Gef.jbpm4.figure.DecisionFigure=Gef.extend(Gef.jbpm4.figure.AbstractImageFigure,{
			constructor:function($){
				Gef.jbpm4.figure.DecisionFigure.superclass.constructor.call(this,$);
				this.url=Gef.IMAGE_ROOT+"juezhe.png"}});
	Gef.ns("Gef.jbpm4.figure");Gef.jbpm4.figure.ForkFigure=Gef.extend(Gef.jbpm4.figure.AbstractImageFigure,{
			constructor:function($){
				Gef.jbpm4.figure.ForkFigure.superclass.constructor.call(this,$);
				this.url=Gef.IMAGE_ROOT+"bingxing.png"}});
	Gef.ns("Gef.jbpm4.figure");Gef.jbpm4.figure.JoinFigure=Gef.extend(Gef.jbpm4.figure.AbstractImageFigure,{
			constructor:function($){
				Gef.jbpm4.figure.JoinFigure.superclass.constructor.call(this,$);
				this.url=Gef.IMAGE_ROOT+"huiju.png"}});
	Gef.ns("Gef.jbpm4.figure");Gef.jbpm4.figure.CustomFigure=Gef.extend(Gef.jbpm4.figure.AbstractNodeFigure,{});
	Gef.ns("Gef.jbpm4.figure");Gef.jbpm4.figure.MailFigure=Gef.extend(Gef.jbpm4.figure.AbstractNodeFigure,{});
	// StageFigure 增加
	Gef.ns("Gef.jbpm4.figure");Gef.jbpm4.figure.StageFigure=Gef.extend(Gef.figure.NodeFigure,{
			renderVml:function(){ // 重写renderVml方法
											var A=document.createElement("v:group");
											A.style.left=this.x;
											A.style.top=this.y;
											A.style.width=this.w;
											A.style.height=this.h;
											A.setAttribute("coordsize",this.w+","+this.h);
											this.el=A;
											var _=document.createElement("v:rect");
											_.style.position="absolute";
											_.style.zIndex=-1;
											_.style.left="5px";
											_.style.top="5px";
											_.style.width=(this.w-10)+"px";
											_.style.height=(this.h-10)+"px";
											_.setAttribute("id",Gef.id());
											_.setAttribute("arcsize",0.2);
											// _.setAttribute("fillcolor","#FFFFFF");
											_.setAttribute("filled","false");// 不填充颜色
											_.setAttribute("strokecolor","#03689A");
											_.setAttribute("strokeweight","2");
											_.style.verticalAlign="middle";
											A.appendChild(_);
											this.rectEl=_;
											var B=this.getTextPosition(this.w,this.h),$=document.createElement("v:textbox");
											$.style.textAlign="center";
											$.style.fontFamily="Verdana";
											$.style.fontSize="12px";
											$.setAttribute("id",Gef.id());
											$.innerHTML=this.name;
											_.appendChild($);
											this.textEl=$}
	});
	Gef.ns("Gef.jbpm4.figure");Gef.jbpm4.figure.SubProcessFigure=Gef.extend(Gef.jbpm4.figure.AbstractNodeFigure,{});
	Gef.ns("Gef.jbpm4.figure");Gef.jbpm4.figure.GroupNodeFigure=Gef.extend(Gef.figure.NodeFigure,{});
	Gef.ns("Gef.jbpm4.figure");Gef.jbpm4.figure.TransitionFigure=Gef.extend(Gef.figure.EdgeFigure,{});
	Gef.ns("Gef.jbpm4.figure");Gef.jbpm4.figure.JmsFigure=Gef.extend(Gef.jbpm4.figure.AbstractNodeFigure,{});
	Gef.ns("Gef.jbpm4.figure");Gef.jbpm4.figure.RuleDecisionFigure=Gef.extend(Gef.jbpm4.figure.AbstractImageFigure,{
			constructor:function($){
				Gef.jbpm4.figure.RuleDecisionFigure.superclass.constructor.call(this,$);
				this.url=Gef.IMAGE_ROOT+"gateway_exclusive.png"}});
	Gef.ns("Gef.jbpm4.figure");Gef.jbpm4.figure.RulesFigure=Gef.extend(Gef.jbpm4.figure.AbstractNodeFigure,{});
	// 任务工具图片
	Gef.ns("Gef.jbpm4.tool");Gef.jbpm4.tool.TaskTool=Gef.extend(Gef.tool.AbstractImageTool,{
			getKey:function(){return"taskTool"},
			getUrl:function(){return Gef.IMAGE_ROOT+"../../tools/new_task.png"},
			getNodeConfig:function(){return{text:"task",w:90,h:50}},
			getY:function(){return 0},getConnectionModelName:function(){return"transition"}});
	// 结束工具图片
	Gef.ns("Gef.jbpm4.tool");Gef.jbpm4.tool.EndTool=Gef.extend(Gef.tool.AbstractImageTool,{
			getKey:function(){return"endTool"},
			getUrl:function(){return Gef.IMAGE_ROOT+"../../tools/new_event.png"},
			getNodeConfig:function(){return{text:"end",w:48,h:48}},
			getY:function(){return 20},
			getConnectionModelName:function(){return"transition"}});
	// 决策节点图片
	Gef.ns("Gef.jbpm4.tool");Gef.jbpm4.tool.GatewayTool=Gef.extend(Gef.tool.AbstractImageTool,{
			getKey:function(){return"gatewayTool"},
			getUrl:function(){return Gef.IMAGE_ROOT+"../../tools/new_gateway_xor_data.png"},
			getNodeConfig:function(){return{text:"decision",w:48,h:48}},getY:function(){return 40},
			getConnectionModelName:function(){return"transition"}});
	// 流转工具图片
	Gef.ns("Gef.jbpm4.tool");Gef.jbpm4.tool.LineTool=Gef.extend(Gef.tool.AbstractEdgeTool,{
			getKey:function(){return"lineTool"},
			getY:function(){return 60},
			getConnectionModelName:function(){return"transition"}});
	//流程类型
	Gef.flowtype="N/A";
	// jbpm4 xml序列化器 extends XmlSerializer
	Gef.ns("Gef.jbpm4.xml");
	Gef.jbpm4.xml.JBPM4Serializer=Gef.extend(Gef.gef.xml.XmlSerializer,{
			constructor:function($){
				this.model=$;
				this.map={"start":Gef.jbpm4.xml.StartWrapper,
						  "end":Gef.jbpm4.xml.EndWrapper,
						  "cancel":Gef.jbpm4.xml.CancelWrapper,
						  "error":Gef.jbpm4.xml.ErrorWrapper,
						  "state":Gef.jbpm4.xml.StateWrapper,
						  "task":Gef.jbpm4.xml.TaskWrapper,
						  "decision":Gef.jbpm4.xml.DecisionWrapper,
						  "fork":Gef.jbpm4.xml.ForkWrapper,
						  "join":Gef.jbpm4.xml.JoinWrapper,
						  "hql":Gef.jbpm4.xml.HqlWrapper,
						  "sql":Gef.jbpm4.xml.SqlWrapper,
						  "java":Gef.jbpm4.xml.JavaWrapper,
						  "script":Gef.jbpm4.xml.ScriptWrapper,
						  "mail":Gef.jbpm4.xml.MailWrapper,
						  "stage":Gef.jbpm4.xml.StageWrapper,
						  "custom":Gef.jbpm4.xml.CustomWrapper,
						  "subProcess":Gef.jbpm4.xml.SubProcessWrapper,
						  "jms":Gef.jbpm4.xml.JmsWrapper,
						  "ruleDecision":Gef.jbpm4.xml.RuleDecisionWrapper,
						  "rules":Gef.jbpm4.xml.RulesWrapper}},
			appendToBuffer:function($){
				$.push("<?xml version='1.0' encoding='UTF-8'?>\n");
				$.push("<process");
				if(this.model.text)
					$.push(" name='"+this.model.text+"'"); // name
				if(typeof this.model.key=="string"&&this.model.key!=null&&this.model.key.trim().length!=0)
					$.push(" key='"+this.model.key+"'");// key
				if(typeof	this.model.version=="string"&&this.model.version!=null&&this.model.version.trim().length!=0)
					$.push(" version='"+this.model.version+"'");// version
				if(typeof this.model.description=="string"&&this.model.description!=null&&this.model.description.trim().length!=0)
					$.push(" description='"+this.model.description+"'");// description
					
								
					$.push(" flowtype='"+(Gef.flowtype!="N/A"?Gef.flowtype:this.model.flowtype)+"'");// flowtype
				
				$.push(" xmlns='http://jbpm.org/4.4/jpdl'>\n");
				//全局的事件处理
				if(this.model.events){
					Gef.each(this.model.events,function(_){						
						$.push("    <on event=\"",_.name,"\">\n");
				        $.push("	 <event-listener class=\"",_.classname,"\"/>\n");
				        $.push("    </on>\n")},this);
				}
				if(this.model.timers){
					Gef.each(this.model.timers,function(_){
						$.push("    <timer duedate=\"",_.duedate,"\" repeat=\"",_.repeat,"\" duedatetime=\"",_.duedatetime,"\">\n");
				        $.push("	    <description>",_.description,"</description>\n");
				        $.push("	   <event-listener class=\"",_.classname,"\"/>\n");
				        $.push("    </timer>\n")},this);
				}
				if(this.model.swimlanes){
					Gef.each(this.model.swimlanes,function(_){
						$.push("	 <swimlane name=\"",_.name,"\" assignee=\"",_.assignee,"\" candidate-users=\"",_.candidateUsers,"\" candidate-groups=\"",_.candidateGroups,"\">\n");
				        $.push("	  <description>",_.description,"</description>\n");
				        $.push("    </swimlane>\n")},this);
				}
				this.appendBody($);
				$.push("</process>")}});

	Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.AbstractNodeWrapper=Gef.extend(Gef.gef.xml.AbstractWrapper,{
			appendAttributes:function($){
				var _=this.node;
				_.text=this.replaceIllegalSymbol(_.text);
				$.push(" name='",_.text,"' g='");
				if(_.type=="task"){// 如果是task任务节点，把它的边框设为48x48的大小
						$.push((_.x-5),",",(_.y-5),",",60,",",48,"'");
						return;
					}
				if(_.type=="start"||_.type=="end"||_.type=="cancel"||_.type=="error"||_.type=="decision"||_.type=="fork"||_.type=="join"){
						$.push(_.x,",",_.y,",",_.w,",",_.h,"'");
				}
				else $.push((_.x-5),",",(_.y-5),",",(_.w),",",(_.h),"'")},
			// 替换非法符号 增加
			replaceIllegalSymbol:function(srcStr){
				if(srcStr==null){
					return null;
				}
				var result =null;
				result=srcStr.replace(/&/g,"\uff06");// 把&转换成全角的&
				result=result.replace(/\//g,"\uff0f");
				return result;
			},
			appendBody:function($){
				if(typeof this.node.description=="string"&&this.node.description.trim().length!=0)
					$.push("	 <description>"+this.node.description+"</description>\n");
				//结点的事件处理
				if(this.node.events){
					Gef.each(this.node.events,function(_){
						if(_.name=="assignment-handler"){
							$.push("	<assignment-handler class=\"",_.classname,"\"/>\n");
						}else{
							$.push("	<on event=\"",_.name,"\">\n");
						    $.push("	    <event-listener class=\"",_.classname,"\"/>\n");
						    $.push("	</on>\n")
						}						
					    
					},this);
				}
				if(this.node.timers)
					Gef.each(this.node.timers,function(_){
						$.push("    <timer duedate=\"",_.duedate,"\"	repeat=\"",_.repeat,"\"	duedatetime=\"",_.duedatetime,"\">\n");
					    $.push("	     <description>",_.description,"</description>\n");
					    $.push("	    <event-listener class=\"",_.classname,"\"/>\n");
					    $.push("	</timer>\n")},this);
				    Gef.each(this.node.getOutgoingConnections(),function(_){
				    	$.push("	<transition");
					    if(_.text!=null&&_.text!="")
					    	$.push(" name='",_.text,"'");
					    if(_.innerPoints.length!=0||_.textX!=0||_.textY!=0){
					    	$.push(" g='");
				    Gef.each(_.innerPoints,function(B,A){
					    $.push(parseInt(B[0],10),",",parseInt(B[1],10));
					if(A!=_.innerPoints.length-1)$.push(";")});
					var A=this.getTextPosition(_);
					$.push(A);
					$.push("'")}
					$.push(" to='",this.replaceIllegalSymbol(_.getTarget().text),"'");// 替换非法字符
					if(this.notEmpty(_.condition)){$.push(">\n");$.push("  <condition expr='",_.condition,"'/>\n");
					$.push("</transition>\n")}else $.push("/>\n")},this)},
			getTextPosition:function(B){
				var C=B.getSource(),F=new	Geom.Rect(parseInt(C.x,10),parseInt(C.y,10),parseInt(C.w,10),parseInt(C.h,10)),R=B.getTarget(),H=new Geom.Rect(parseInt(R.x,10),parseInt(R.y,10),parseInt(R.w,10),parseInt(R.h,10)),L=new Geom.Line(parseInt(F.x,10)+parseInt(F.w,10)/2,parseInt(F.y,10)+parseInt(F.h,10)/2,parseInt(H.x,10)+parseInt(H.w,10)/2,parseInt(H.y,10)+parseInt(H.h,10)/2),E=F.getCrossPoint(L),_=H.getCrossPoint(L);
				if(!E||!_)return"";var I=(E.x+_.x)/2,K=(E.y+_.y)/2;
				if(B.innerPoints.length>0){
					var A=B.innerPoints[0],D=B.innerPoints[B.innerPoints.length-1],G=[];
					G.push([E.x,E.y]);Gef.each(B.innerPoints,function($){G.push([$[0],$[1]])});
					G.push([_.x,_.y]);var $=G.length,M=0,J=0;
					if(($%2)==0){var P=G[$/2-1],O=G[$/2];
					M=(P[0]+O[0])/2;J=(P[1]+O[1])/2}else{M=G[($-1)/2][0];
					J=G[($-1)/2][1]}var Q=parseInt(B.textX+I-M,10),N=parseInt(B.textY+K-J,10);
					return":"+Q+","+N}else	if(B.textX!=0&&B.textY!=0)return parseInt(B.textX,10)+","+parseInt(B.textY,10);else return""},
			notEmpty:function($){return typeof $!="undefined"&&$.trim().length!=0}});
	// JBPM4反序列化器
	Gef.ns("Gef.jbpm4.xml");
	Gef.jbpm4.xml.JBPM4Deserializer=Gef.extend(Gef.gef.xml.XmlDeserializer,{
			decode:function(){
				var $=new Gef.jbpm4.model.ProcessModel();
				this.modelMap={};
				this.domMap={};
				try{
					this.parseRoot($)
				}catch(_){}
				delete this.modelMap;
				delete this.domMap;
				return $},
			parseRoot:function($){
					var _=this.xdoc.documentElement;
					/*
					 * 重新打开时设定初始值
					 */
					$.text=_.getAttribute("name");
					$.key=_.getAttribute("key");
					$.version=_.getAttribute("version");
					$.description=this.getElementContent(_,"description");
					
					$.flowtype=_.getAttribute("flowtype");
					this.bindEvents(_,$);
					this.bindTimers(_,$);
					this.bindSwimlanes(_,$);
					Gef.each(_.childNodes,function(_){this.parseNode(_,$)},this);
	Gef.each($.getChildren(),function($){
		this.parseConnections($)},this)},
		// 解释所有节点 ,导入的时候解释的
		parseNode:function($,_){
			var A=$.nodeName;
			switch($.nodeName){
				case"start":this.parseStart($,_);break;
				case"end":this.parseEnd($,_);break;
				case"end-cancel":this.parseCancel($,_);break;
				case"end-error":this.parseError($,_);break;
				case"decision":this.parseDecision($,_);break;
				case"fork":this.parseFork($,_);break;
				case"join":this.parseJoin($,_);break;
				case"hql":this.parseHql($,_);break;
				case"sql":this.parseSql($,_);break;
				case"state":this.parseState($,_);break;
				case"task":this.parseTask($,_);break;
				case"java":this.parseJava($,_);break;
				case"script":this.parseScript($,_);break;
				case"mail":this.parseMail($,_);break;
				// 增加stage
				case"stage":this.parseStage($,_);break;
				case"custom":this.parseCustom($,_);break;
				case"sub-process":this.parseSubProcess($,_);break;
				case"jms":this.parseJms($,_);break;
				case"rule-decision":this.parseRuleDecision($,_);break;
				case"rules":this.parseRules($,_);break}},
		parseConnections:function(_){
			var $=this.domMap[_.text];
			Gef.each($.childNodes,function($){
				if($.nodeName=="transition")this.parseConnection($,_)},this)},parseConnection:function(A,B){var _=new Gef.jbpm4.model.TransitionModel();_.text=A.getAttribute("name");var D=this.getElementAttribute(A,"condition","expr");if(D!=null)_.condition=D;var $=A.getAttribute("to"),C=this.modelMap[$];_.setSource(B);B.addOutgoingConnection(_);_.setTarget(C);C.addIncomingConnection(_);this.bindConnectionLocation(A,_)},bindConnectionLocation:function(A,F){var D=A.getAttribute("g");if(!D)return;var _=D,$=D.split(":");if(D.indexOf(":")!=-1){_=$[1];if($[0].length>0){var E=$[0].split(";"),B=[];Gef.each(E,function($){var _=$.split(",");B.push([parseInt(_[0],10),parseInt(_[1],10)])});F.innerPoints=B}}else _=D;var C=_.split(",");F.textX=parseInt(C[0],10);F.textY=parseInt(C[1],10);this.calculdateTextPosition(F)},calculdateTextPosition:function(B){var C=B.getSource(),F=new Geom.Rect(parseInt(C.x,10),parseInt(C.y,10),parseInt(C.w,10),parseInt(C.h,10)),R=B.getTarget(),H=new Geom.Rect(parseInt(R.x,10),parseInt(R.y,10),parseInt(R.w,10),parseInt(R.h,10)),L=new Geom.Line(parseInt(F.x,10)+parseInt(F.w,10)/2,parseInt(F.y,10)+parseInt(F.h,10)/2,parseInt(H.x,10)+parseInt(H.w,10)/2,parseInt(H.y,10)+parseInt(H.h,10)/2),E=F.getCrossPoint(L),_=H.getCrossPoint(L),I=(E.x+_.x)/2,K=(E.y+_.y)/2;if(B.innerPoints.length>0){var A=B.innerPoints[0],D=B.innerPoints[B.innerPoints.length-1],G=[];G.push([E.x,E.y]);Gef.each(B.innerPoints,function($){G.push([$[0],$[1]])});G.push([_.x,_.y]);var $=G.length,M=0,J=0;if(($%2)==0){var	P=G[$/2-1],O=G[$/2];M=(P[0]+O[0])/2;J=(P[1]+O[1])/2}else{M=G[($-1)/2][0];J=G[($-1)/2][1]}var Q=parseInt(B.textX+I-M,10),N=parseInt(B.textY+K-J,10);B.textX-=I-M;B.textY-=K-J}},
					// 绑定节点位置的函数
					bindNodeLocation:function($,_){
						var B=$.getAttribute("g"),
						C=B.split(",");
						_.x=parseInt(C[0],10);
						_.y=parseInt(C[1],10);
						_.w=parseInt(C[2],10);
						_.h=parseInt(C[3],10);
						var A=_.type;
						if(A=="task"){// 如果是task节点，则变为正常的
							_.w=90;
							_.h=50;
						}
						if(A=="start"||A=="end"||A=="cancel"||A=="error"||A=="decision"||A=="fork"||A=="join");
						else{_.x+=5;_.y+=5}},
					// 绑定事件的函数
						bindEvents:function($,_){
							_.events=[];
							Gef.each($.childNodes,function($){
								if($.nodeName=="on")_.events.push({name:$.getAttribute("event"),classname:this.getElementAttribute($,"event-listener","class")})},this)},
									bindTimers:function($,_){_.timers=[];Gef.each($.childNodes,function($){if($.nodeName=="timer")_.timers.push({duedate:$.getAttribute("duedate"),repeat:$.getAttribute("repeat"),duedatetime:$.getAttribute("duedatetime"),description:this.getElementContent($,"description"),classname:this.getElementContent($,"event-listener","classname")})},this)},bindSwimlanes:function($,_){_.swimlanes=[];Gef.each($.childNodes,function($){if($.nodeName=="swimlane")_.swimlanes.push({name:$.getAttribute("name"),assignee:$.getAttribute("assignee"),candidateUsers:$.getAttribute("candidate-users"),candidateGroups:$.getAttribute("candidate-groups"),description:this.getElementContent($,"description")})},this)},
	getElementContent:function($,_){// 获得元素的内容
		var A=null;
		Gef.each($.childNodes,function($){// 迭代子节点
			if($.nodeName==_){
				// A=$.text; //Firefox不支持#text
				A=$.childNodes[0].nodeValue; // 兼容Firefox
				return false;
			}});
				return A},
				// 获得元素属性
				getElementAttribute:function(_,A,$){
					var B=null;
					Gef.each(_.childNodes,function(_){
						if(_.nodeName==A){B=_.getAttribute($);return false}});
						return B},
							parseStart:function($,A){// 解释开始节点
								var B=new	Gef.jbpm4.model.StartModel(),_=$.getAttribute("name");
								B.text=_;
								B.form=$.getAttribute("form");
								B.description=this.getElementContent($,"description");
								this.bindNodeLocation($,B);
								this.bindEvents($,B);
								this.modelMap[_]=B;
								this.domMap[_]=$;
								A.addChild(B)},
							parseEnd:function($,A){// 解释结束结点
									var B=new Gef.jbpm4.model.EndModel(),_=$.getAttribute("name");
									B.text=_;
									B.ends=$.getAttribute("ends");
									B.state=$.getAttribute("state");
									B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);
									this.bindEvents($,B);
									this.modelMap[_]=B;
									this.domMap[_]=$;
									A.addChild(B)},
							parseCancel:function($,A){// 解释取消结束节点
									var B=new Gef.jbpm4.model.CancelModel(),_=$.getAttribute("name");
									B.text=_;
									B.ends=$.getAttribute("ends");
									B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);
									this.bindEvents($,B);
									this.modelMap[_]=B;
									this.domMap[_]=$;
									A.addChild(B)},
							parseError:function($,A){// 解释错误结束节点
									var B=new Gef.jbpm4.model.ErrorModel(),_=$.getAttribute("name");
									B.text=_;
									B.ends=$.getAttribute("ends");
									B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);
									this.bindEvents($,B);
									this.modelMap[_]=B;
									this.domMap[_]=$;
									A.addChild(B)},
							parseDecision:function($,A){// 解释决策节点
									var B=new Gef.jbpm4.model.DecisionModel(),
									_=$.getAttribute("name");
									B.text=_;
									B.expr=$.getAttribute("expr");
									B.lang=$.getAttribute("lang");
									B.handler=this.getElementAttribute($,"handler","class");
									B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);
									this.bindEvents($,B);
									this.modelMap[_]=B;
									this.domMap[_]=$;
									A.addChild(B)},
							parseFork:function($,A){// 解释分支节点
									var	B=new Gef.jbpm4.model.ForkModel(),_=$.getAttribute("name");
									B.text=_;
									B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);
									this.bindEvents($,B);
									this.modelMap[_]=B;
									this.domMap[_]=$;
									A.addChild(B)},
							parseJoin:function($,A){// 解释合并节点
								    var B=new Gef.jbpm4.model.JoinModel(),_=$.getAttribute("name");
									B.text=_;
									B.multiplicity=$.getAttribute("multiplicity");
									B.lockmode=$.getAttribute("lockmode");
									B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);
									this.bindEvents($,B);
									this.modelMap[_]=B;
									this.domMap[_]=$;
									A.addChild(B)},
							parseHql:function($,A){
									var B=new Gef.jbpm4.model.HqlModel(),_=$.getAttribute("name");
									B.text=_;
									B._var=$.getAttribute("var");
									B.unique=$.getAttribute("unique");
									B.query=this.getElementContent($,"query");
									B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);
									this.bindEvents($,B);
									this.modelMap[_]=B;
									this.domMap[_]=$;
									A.addChild(B)},
							parseSql:function($,A){
									var B=new Gef.jbpm4.model.SqlModel(),_=$.getAttribute("name");
									B.text=_;
									B._var=$.getAttribute("var");
									B.unique=$.getAttribute("unique");
									B.query=this.getElementContent($,"query");
									B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);this.bindEvents($,B);
									this.modelMap[_]=B;
									this.domMap[_]=$;
									A.addChild(B)},
							parseState:function($,A){
									var B=new Gef.jbpm4.model.StateModel(),_=$.getAttribute("name");
									B.text=_;
									B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);
									this.bindEvents($,B);
									this.modelMap[_]=B;
									this.domMap[_]=$;
									A.addChild(B)},
							parseTask:function($,A){
									var B=new Gef.jbpm4.model.TaskModel(),_=$.getAttribute("name");
									B.text=_;
									B.assignee=$.getAttribute("assignee");
									B.candidateUsers=$.getAttribute("candidate-users");
									B.candidateGroups=$.getAttribute("candidate-groups");
									B.swimlane=$.getAttribute("swimlane");
									B.form=$.getAttribute("form");
									B.duedate=$.getAttribute("duedate");
									B.onTransition=$.getAttribute("on-transition");
									B.onTransition=$.getAttribute("on-transition");
									B.completion=$.getAttribute("completion");
									B.notification=this.getElementAttribute($,"notification","template");
									B.reminder=this.getElementAttribute($,"reminder","template");
									B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);
									this.bindEvents($,B);
									this.bindTimers($,B);
									this.modelMap[_]=B;
									this.domMap[_]=$;
									A.addChild(B)},
							parseJava:function($,A){
									var B=new Gef.jbpm4.model.JavaModel(),_=$.getAttribute("name");
									B.text=_;B.classname=$.getAttribute("class");
									B.method=$.getAttribute("method");
									B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);
									this.bindEvents($,B);
									this.modelMap[_]=B;
									this.domMap[_]=$;
									A.addChild(B)},
							parseScript:function($,A){
									var	B=new Gef.jbpm4.model.ScriptModel(),_=$.getAttribute("name");
									B.text=_;
									B.expr=$.getAttribute("expr");
									B.lang=$.getAttribute("lang");
									B._var=$.getAttribute("var");
									B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);
									this.bindEvents($,B);
									this.modelMap[_]=B;
									this.domMap[_]=$;
									A.addChild(B)},
							parseMail:function($,A){
									var B=new Gef.jbpm4.model.MailModel(),_=$.getAttribute("name");
									B.text=_;
									B.template=$.getAttribute("template");
									B.from=this.getElementContent($,"from");
									B.to=this.getElementContent($,"to");
									B.subject=this.getElementContent($,"subject");
									B.content=this.getElementContent($,"content");
									B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);
									this.bindEvents($,B);
									this.modelMap[_]=B;
									this.domMap[_]=$;
									A.addChild(B)},
							// 增加stage 节点
							parseStage:function($,A){
									var B=new Gef.jbpm4.model.StageModel(),_=$.getAttribute("name");
									B.text=_;
									// B.template=$.getAttribute("template");
									// B.from=this.getElementContent($,"from");
									// B.to=this.getElementContent($,"to");
									// B.subject=this.getElementContent($,"subject");
									// B.content=this.getElementContent($,"content");
									// B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);
									this.bindEvents($,B);
									this.modelMap[_]=B;
									this.domMap[_]=$;
									A.addChild(B)},
							parseCustom:function($,A){
									var B=new Gef.jbpm4.model.CustomModel(),_=$.getAttribute("name");
									B.text=_;B.classname=$.getAttribute("class");
									B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);
									this.bindEvents($,B);
									this.modelMap[_]=B;
									this.domMap[_]=$;
									A.addChild(B)},
							parseSubProcess:function($,A){
									var B=new	Gef.jbpm4.model.SubProcessModel(),_=$.getAttribute("name");
									B.text=_;
									B.subProcessId=$.getAttribute("sub-process-id");
									B.subProcessKey=$.getAttribute("sub-process-key");
									B.outcome=$.getAttribute("outcome");
									B.description=this.getElementContent($,"description");
									this.bindNodeLocation($,B);
									this.bindEvents($,B);
									this.bindTimers($,B);
									B.parameterIns=[];
									B.parameterOuts=[];
									Gef.each($.childNodes,function($){
										if($.nodeName=="parameter-in")B.parameterIns.push({_var:$.getAttribute("var"),subvar:$.getAttribute("subvar")});else if($.nodeName=="parameter-out")B.parameterOuts.push({_var:$.getAttribute("var"),subvar:$.getAttribute("subvar")})},this);this.modelMap[_]=B;this.domMap[_]=$;A.addChild(B)},parseJms:function($,A){var	B=new Gef.jbpm4.model.JmsModel(),_=$.getAttribute("name");B.text=_;B.connectionFactory=$.getAttribute("connection-factory");B.destination=$.getAttribute("destination");B.transacted=$.getAttribute("transacted");B.acknowledge=$.getAttribute("acknowledge");B.textObject=this.getElementContent($,"text");B.description=this.getElementContent($,"description");
										this.bindNodeLocation($,B);this.bindEvents($,B);this.bindTimers($,B);this.modelMap[_]=B;this.domMap[_]=$;A.addChild(B)},parseRuleDecision:function($,A){var B=new Gef.jbpm4.model.RuleDecisionModel(),_=$.getAttribute("name");B.text=_;B.description=this.getElementContent($,"description");this.bindNodeLocation($,B);this.bindEvents($,B);this.bindTimers($,B);this.modelMap[_]=B;this.domMap[_]=$;A.addChild(B)},parseRules:function($,A){var B=new Gef.jbpm4.model.RulesModel(),_=$.getAttribute("name");B.text=_;B.factVar=this.getElementAttribute($,"fact","var");B.factExpr=this.getElementAttribute($,"fact","expr");B.description=this.getElementContent($,"description");this.bindNodeLocation($,B);this.bindEvents($,B);this.bindTimers($,B);this.modelMap[_]=B;this.domMap[_]=$;A.addChild(B)}});Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.StartWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{appendAttributes:function($){Gef.jbpm4.xml.StartWrapper.superclass.appendAttributes.call(this,$);var	_=this.node;if(typeof _.form=="string"&&_.form.trim().length!=0)$.push(" form=\""+_.form+"\"")}});Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.EndWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{appendAttributes:function($){Gef.jbpm4.xml.EndWrapper.superclass.appendAttributes.call(this,$);var _=this.node;if(typeof _.ends=="string"&&_.ends.trim().length!=0)$.push(" ends=\""+_.ends+"\"");if(typeof _.state=="string"&&_.state.trim().length!=0)$.push(" state=\""+_.state+"\"")}});Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.CancelWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{appendHeader:function($){$.push("  <end-cancel")},appendFooter:function($,_){if(_.length==0)$.push("/>\n");else $.push(">\n",Gef.join(_),"  </end-cancel>\n")},appendAttributes:function($){Gef.jbpm4.xml.CancelWrapper.superclass.appendAttributes.call(this,$);var _=this.node;if(typeof _.ends=="string"&&_.ends.trim().length!=0)$.push(" ends=\""+_.ends+"\"")}});Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.ErrorWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{appendHeader:function($){$.push("  <end-error")},appendFooter:function($,_){if(_.length==0)$.push("/>\n");else $.push(">\n",Gef.join(_),"  </end-error>\n")},appendAttributes:function($){Gef.jbpm4.xml.ErrorWrapper.superclass.appendAttributes.call(this,$);var _=this.node;if(typeof _.ends=="string"&&_.ends.trim().length!=0)$.push(" ends=\""+_.ends+"\"")}});Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.StateWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{});
			Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.TaskWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{
						appendAttributes:function($){
								Gef.jbpm4.xml.TaskWrapper.superclass.appendAttributes.call(this,$);
								var _=this.node;
								if(typeof _.assignee=="string"&&_.assignee.trim().length!=0)$.push(" assignee=\""+_.assignee+"\"");
								if(typeof _.candidateUsers=="string"&&_.candidateUsers.trim().length!=0)$.push(" candidate-users=\""+_.candidateUsers+"\"");
								if(typeof	_.candidateGroups=="string"&&_.candidateGroups.trim().length!=0)$.push(" candidate-groups=\""+_.candidateGroups+"\"");
								if(typeof	_.swimlane=="string"&&_.swimlane.trim().length!=0)$.push(" swimlane=\""+_.swimlane+"\"");
								if(typeof _.form=="string"&&_.form.trim().length!=0)$.push(" form=\""+_.form+"\"");
								if(typeof _.duedate=="string"&&_.duedate.trim().length!=0)$.push(" duedate=\""+_.duedate+"\"");
								if(typeof _.onTransition=="string"&&_.onTransition.trim().length!=0)$.push("	on-transition=\""+_.onTransition+"\"");
								if(typeof _.completion=="string"&&_.completion.trim().length!=0)$.push("	completion=\""+_.completion+"\"")},
						appendBody:function($){
								Gef.jbpm4.xml.TaskWrapper.superclass.appendBody.call(this,$);
								var _=this.node;
								if(typeof _.notification=="string"&&_.notification.trim().length!=0)$.push("    <notification template=\""+_.notification+"\"/>\n");
								if(typeof _.reminder=="string"&&_.reminder.trim().length!=0)$.push("	   <reminder template=\""+_.reminder+"\"/>\n")}});
			Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.DecisionWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{appendAttributes:function($){Gef.jbpm4.xml.DecisionWrapper.superclass.appendAttributes.call(this,$);var _=this.node;if(typeof _.expr=="string"&&_.expr.trim().length!=0)$.push(" expr=\""+_.expr+"\"");if(typeof _.lang=="string"&&_.lang.trim().length!=0)$.push(" lang=\""+_.lang+"\"")},appendBody:function($){Gef.jbpm4.xml.DecisionWrapper.superclass.appendBody.call(this,$);var _=this.node;if(typeof _.handler=="string"&&_.handler.trim().length!=0)$.push("  <handler class=\""+_.handler+"\"/>\n")}});Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.ForkWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{});Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.JoinWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{appendAttributes:function($){Gef.jbpm4.xml.JoinWrapper.superclass.appendAttributes.call(this,$);var _=this.node;if(typeof _.multiplicity=="string"&&_.multiplicity.trim().length!=0)$.push(" multiplicity=\""+_.multiplicity+"\"");if(typeof _.lockmode=="string"&&_.lockmode.trim().length!=0)$.push(" lockmode=\""+_.lockmode+"\"")}});Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.HqlWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{appendAttributes:function($){Gef.jbpm4.xml.HqlWrapper.superclass.appendAttributes.call(this,$);var _=this.node;if(typeof _._var=="string"&&_._var.trim().length!=0)$.push(" var=\""+_._var+"\"");if(typeof _.unique=="string"&&_.unique.trim().length!=0)$.push(" unique=\""+_.unique+"\"")},appendBody:function($){Gef.jbpm4.xml.HqlWrapper.superclass.appendBody.call(this,$);var _=this.node;if(typeof _.query=="string"&&_.query.trim().length!=0)$.push("  <query>"+_.query+"</query>\n")}});Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.SqlWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{appendAttributes:function($){Gef.jbpm4.xml.SqlWrapper.superclass.appendAttributes.call(this,$);var _=this.node;if(typeof _._var=="string"&&_._var.trim().length!=0)$.push(" var=\""+_._var+"\"");if(typeof _.unique=="string"&&_.unique.trim().length!=0)$.push(" unique=\""+_.unique+"\"")},appendBody:function($){Gef.jbpm4.xml.SqlWrapper.superclass.appendBody.call(this,$);var _=this.node;if(typeof _.query=="string"&&_.query.trim().length!=0)$.push("  <query>"+_.query+"</query>\n")}});Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.JavaWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{appendAttributes:function($){Gef.jbpm4.xml.JavaWrapper.superclass.appendAttributes.call(this,$);var _=this.node;if(typeof _.classname=="string"&&_.classname.trim().length!=0)$.push(" class=\""+_.classname+"\"");if(typeof _.method=="string"&&_.method.trim().length!=0)$.push(" method=\""+_.method+"\"")}});Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.ScriptWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{appendAttributes:function($){Gef.jbpm4.xml.ScriptWrapper.superclass.appendAttributes.call(this,$);var _=this.node;if(_.expr&&_.expr.trim().length!=0)$.push(" expr=\""+_.expr+"\"");if(_.lang&&_.lang.trim().length!=0)$.push("	lang=\""+_.lang+"\"");if(_._var&&_._var.trim().length!=0)$.push(" var=\""+_._var+"\"")}});
			Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.MailWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{
					appendAttributes:function($){Gef.jbpm4.xml.JavaWrapper.superclass.appendAttributes.call(this,$);
					var _=this.node;
					if(typeof _.template=="string"&&_.template.trim().length!=0)$.push(" template=\""+_.template+"\"")},
					appendBody:function($){
						Gef.jbpm4.xml.SqlWrapper.superclass.appendBody.call(this,$);
						var _=this.node;if(typeof _.from=="string"&&_.from.trim().length!=0)$.push("  <from>"+_.from+"</from>");
						if(typeof _.to=="string"&&_.to.trim().length!=0)$.push("  <to>"+_.to+"</to>");
						if(typeof _.subject=="string"&&_.subject.trim().length!=0)$.push("  <subject>"+_.subject+"</subject>");
						if(typeof	_.content=="string"&&_.content.trim().length!=0)$.push("  <content>"+_.content+"</content>")}});
			// 增加StageWrapper
			Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.StageWrapper=Gef.extend(Gef.gef.xml.AbstractWrapper,{
					appendAttributes:function($){
							var _=this.node;
							$.push(" name='",_.text,"' g='");
							$.push((_.x-5),",",(_.y-5),",",(_.w),",",(_.h),"'")}
						});

			Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.CustomWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{
					appendAttributes:function($){
						Gef.jbpm4.xml.CustomWrapper.superclass.appendAttributes.call(this,$);
						var	_=this.node;if(typeof _.classname=="string"&&_.classname.trim().length!=0)$.push(" class=\""+_.classname+"\"")}});
			Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.SubProcessWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{appendHeader:function($){$.push("  <sub-process")},appendFooter:function($,_){if(_.length==0)$.push("/>\n");else $.push(">\n",Gef.join(_),"  </sub-process>\n")},appendAttributes:function($){Gef.jbpm4.xml.SubProcessWrapper.superclass.appendAttributes.call(this,$);var _=this.node;if(typeof _.subProcessId=="string"&&_.subProcessId.trim().length!=0)$.push(" sub-process-id=\""+_.subProcessId+"\"");if(typeof _.subProcessKey=="string"&&_.subProcessKey.trim().length!=0)$.push(" sub-process-key=\""+_.subProcessKey+"\"");if(typeof _.outcome=="string"&&_.outcome.trim().length!=0)$.push("	outcome=\""+_.outcome+"\"")},appendBody:function(_){Gef.jbpm4.xml.SubProcessWrapper.superclass.appendBody.call(this,_);var B=this.node;if(typeof B.parameterIns=="array")for(var $=0;$<B.parameterIns.length;$++){var A=B.parameterIns[$];_.push("  <parameter-in var=\"",A._var,"\" subvar=\"",A.subvar,"\" />\n")}if(typeof B.parameterIns=="array")for($=0;$<B.parameterOuts.length;$++){A=B.parameterOuts[$];_.push("  <parameter-out var=\"",A._var,"\" subvar=\"",A.subvar,"\" />\n")}}});Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.JmsWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{appendAttributes:function($){Gef.jbpm4.xml.JmsWrapper.superclass.appendAttributes.call(this,$);var _=this.node;if(typeof	_.connectionFactory=="string"&&_.connectionFactory.trim().length!=0)$.push(" connection-factory=\""+_.connectionFactory+"\"");if(typeof	_.destination=="string"&&_.destination.trim().length!=0)$.push(" destination=\""+_.destination+"\"");if(typeof _.transacted=="string"&&_.transacted.trim().length!=0)$.push(" transacted=\""+_.transacted+"\"");if(typeof _.acknowledge=="string"&&_.acknowledge.trim().length!=0)$.push(" acknowledge=\""+_.acknowledge+"\"")},appendBody:function($){Gef.jbpm4.xml.JmsWrapper.superclass.appendBody.call(this,$);var _=this.node;if(typeof _.textObject=="string"&&_.textObject.trim().length!=0)$.push("    <text>"+_.textObject+"</text>\n")}});Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.RuleDecisionWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{appendHeader:function($){$.push("  <rule-decision")},appendFooter:function($,_){if(_.length==0)$.push("/>\n");else $.push(">\n",Gef.join(_),"  </rule-decision>\n")}});Gef.ns("Gef.jbpm4.xml");Gef.jbpm4.xml.RulesWrapper=Gef.extend(Gef.jbpm4.xml.AbstractNodeWrapper,{appendBody:function($){Gef.jbpm4.xml.RulesWrapper.superclass.appendBody.call(this,$);var _=this.node;$.push("    <fact");if(typeof _.factVar=="string"&&_.factVar.trim().length!=0)$.push("	var=\"",_.factVar,"\"");if(typeof _.factExpr=="string"&&_.factExpr.trim().length!=0)$.push(" expr=\"",_.factExpr,"\"");$.push("/>\n")}});
			// Gef.jbpm4.ExtEditor
			Gef.jbpm4.ExtEditor=Gef.extend(Gef.jbpm4.JBPM4Editor,{
							createGraphicalViewer:function(){
									return new Gef.jbpm4.ExtGraphicalViewer(this)},
							getPaletteHelper:function(){
									if(!this.paletteHelper)this.paletteHelper=new Gef.jbpm4.ExtPaletteHelper(this);
									return this.paletteHelper},
							addSelectionListener:function($){
									var _=this.getGraphicalViewer().getBrowserListener().trackers;
									_[_.length-1].addSelectionListener($)},
							enable:function(){
									this.getGraphicalViewer().getBrowserListener().enable()},
							disable:function(){
									this.getGraphicalViewer().getBrowserListener().disable()},
							resetAndOpen:function(B){
									Gef.jbpm4.ExtEditor.superclass.resetAndOpen.call(this,B);
									var _=this.getGraphicalViewer().getContents();
									var $=this.getGraphicalViewer().getBrowserListener().trackers;
									var A=$[$.length-1].getSelectionListeners();
									Gef.each(A,function($){$.selectDefault(_)})
								}
							});
		Gef.jbpm4.ExtGraphicalViewer=Gef.extend(Gef.gef.support.DefaultGraphicalViewer,{
							               render:function(){
									             this.canvasEl=Ext.getDom("__gef_jbpm4_center__");
									             this.rootEditPart.render()
									          },
							               getPaletteLocation:function(){
									             if(!this.paletteLocation){
										            var $=Ext.get("__gef_jbpm4_palette__").getBox();
										            this.paletteLocation={x:$.x,y:$.y,w:$.width,h:$.height}
										          }
									             return this.paletteLocation
									          },
							              getCanvasLocation:function(){
										        var $=Ext.get("__gef_jbpm4_center__").getBox(),_=Ext.get("__gef_jbpm4_center__").getScroll();
										        this.canvasLocation={x:$.x,y:$.y,w:$.width,h:$.height};
										        return	this.canvasLocation}
									      });
		// Gef.jbpm4.ExtPaletteHelper ext调色板帮助类
		Gef.jbpm4.ExtPaletteHelper=Gef.extend(Gef.jbpm4.JBPM4PaletteHelper,
										{
										createSource:function(){ // 选择拉出去的时候,显示的画布的内容,删除将无法显示
											return{
												select:{text:"select",creatable:false},
												transition:{text:"transition",creatable:false,isConnection:true},
												start:{text:"start",w:48,h:48},
												end:{text:"end",w:48,h:48},
												cancel:{text:"cancel",w:48,h:48}, // 初始值大小
												error:{text:"error",w:48,h:48},
												state:{text:"state",w:90,h:50},
												task:{text:"task",w:90,h:50},
												decision:{text:"decision",w:48,h:48},
												fork:{text:"fork",w:48,h:48},
												join:{text:"join",w:48,h:48},
												java:{text:"java",w:90,h:50},
												script:{text:"script",w:90,h:50},
												hql:{text:"hql",w:90,h:50},
												sql:{text:"sql",w:90,h:50},
												custom:{text:"custom",w:90,h:50},
												mail:{text:"mail",w:90,h:50},
												stage:{text:"stage",w:90,h:50},
												subProcess:{text:"subProcess",w:90,h:50},
												jms:{text:"jms",w:90,h:50},
												ruleDecision:{text:"ruleDecision",w:48,h:48},
												rules:{text:"rules",w:90,h:50}}},
										getSource:function(){// 点击调色板的色料时创建
												if(!this.source)this.source=this.createSource();
												return this.source},
										render:Gef.emptyFn,
										changeActivePalette:function(_){
												var $=null;
												if(this.getActivePalette()){// 拖入一个节点的时候
													var A=this.getActivePalette().text;
													$=document.getElementById(A+"-img");
													$.style.border=""}
												this.setActivePalette(_);
													$=document.getElementById(_.text+"-img");
													$.style.border="1px dotted black"},
										resetActivePalette:function(){
													this.changeActivePalette({text:"select"})},
										getPaletteConfig:function(A,$){
													var	C=$.parentNode.id;
													if(!C)return null;
													var	B=this.getSource(),_=this.getSource()[C];
													if(!_)return null;
													this.changeActivePalette(_);
													if(_.creatable===false)return null;return _}});
		// Gef.jbpm4.ExtSelectionListener Ext选择监听器
		Gef.jbpm4.ExtSelectionListener=Gef.extend(Gef.gef.tracker.DefaultSelectionListener,{
										constructor:function($){this.propertyGrid=$},
										selectNode:function($){// 在画布选择节点的时候
											var _=$.getModel();
											if(this.propertyGrid)this.propertyGrid.updateForm(_);
											this.model=_},
										selectConnection:function($){
												var _=$.getModel();
												if(this.propertyGrid)this.propertyGrid.updateForm(_);
												this.model=_},
										selectDefault:function($){
												var _=$.getModel();
												if(this.propertyGrid)this.propertyGrid.updateForm(_);
												this.model=_},
										setEditor:function($){
												this.editor=$;
												this.model=$.getGraphicalViewer().getContents().getModel()},
										editText:function(A,_){
												var $=new	Gef.gef.command.EditTextCommand(A,_);
												this.editor.getEditDomain().getCommandStack().execute($)},
										getModel:function(){return this.model}});
										// 初始化下拉列表
										Ext.ux.OneCombo=Ext.extend(Ext.form.ComboBox,
											{initComponent:function(){
												this.readOnly=true;
												this.displayField="text";
												this.valueField="text";
												this.triggerAction="all";
												this.mode="local";
												this.emptyText="请选择";
												this.store=new Ext.data.SimpleStore({expandData:true,fields:["text"]});
											    this.store.loadData(this.data);
											    Ext.ux.OneCombo.superclass.initComponent.call(this)
											    }
										   }
										);										
										Ext.reg("onecombo",Ext.ux.OneCombo);
										
										
	// Ext.onReady(App.init,App) 程序开始时，初始化的函数
	Ext.ns("App");App={webforms:{},init:function(){
											Ext.QuickTips.init();
											this.propertyManager=new App.property.PropertyManager();// 属性管理器
											var	$=new Ext.Viewport({layout:"border",items:[this.createNorth(),this.createSouth(),this.createWest(),this.createEast(),this.createCenter()]});
											this.initEditor();
											setTimeout(function(){
												Ext.get("loading").remove();
												Ext.get("loading-mask").fadeOut({remove:true})},100)},
										initEditor:function(){
													var	A=new Gef.jbpm4.ExtEditor(),$=new Gef.jbpm4.JBPM4EditorInput(),_=new Gef.ui.support.DefaultWorkbenchWindow();
													_.getActivePage().openEditor(A,$);// 打开编辑器
													_.render();
													Gef.activeEditor=A;
													this.propertyManager.initSelectionListener(A)},
										// 北部图片，主页面的顶部
										createNorth:function(){
												var $=new Ext.Panel({region:"north",height:2,html:""});
												App.northPanel=$;
												return $},
										// 创建南部面板
										createSouth:function(){
												var $=this.propertyManager.getBottom();
												App.southPanel=$;
												return $},
										// 创建西部面板
										createWest:function(){
													var $=new App.PalettePanel({collapsible:true});
													App.westPanel=$;
													return $},
										createEast:function(){
													var $=this.propertyManager.getRight();
													App.eastPanel=$;
													return $},
										createCenter:function(){
													var $=new App.CanvasPanel();
													App.centerPanel=$;
													return $},
										getSelectionListener:function(){
													if(!this.selectionListener)this.selectionListener=new	Gef.jbpm4.ExtSelectionListener(null);
													return this.selectionListener}
								};
	
	// Ext 代码运行切点
	Ext.onReady(App.init,App);
	App.CanvasPanel=Ext.extend(Ext.Panel,{
		initComponent:function(){
			this.region="center";
			this.autoScroll=true;
			/* 工具条代码 */
			this.tbar=new Ext.Toolbar([
			 // -------------------------------------------------------------------------------------------
	         {text:"新建",iconCls:"tb-new",handler:function(){
		         var flowName=Gef.activeEditor.getGraphicalViewer().getContents().getModel().text;
		        if(flowName!=null&&""!=flowName){
			        Ext.MessageBox.confirm("信息","当前存在流程为"+flowName+"，是否清除并新建文件",function(btn){
					if(btn=="yes"){
						Gef.activeEditor.reset();
						var graphView=Gef.activeEditor.getGraphicalViewer();
						graphView.getContents().getModel().description="";
						graphView.getContents().getModel().key="";
						graphView.getContents().getModel().text="";
						graphView.getContents().getModel().version="";
						App.propertyManager.updateForm(graphView.getContents().getModel());
					}
			     },this);
			     return;
		    }
		    Gef.activeEditor.reset();
		   }},		
		 // -------------------------------------------------------------------------------------------
		   {text:"下载",iconCls:"tb-download",handler:function(){
			  var A=Gef.activeEditor,
			  $=A.serial();
			  var myMask = new Ext.LoadMask(Ext.getBody(),{msg:"正在处理..."});
			  myMask.show();
			  var flowName=A.getGraphicalViewer().getContents().getModel().text;
			  Ext.Ajax.request({
						url:"/bscp/workflowDesign.do?action=downFlowFile",
						method:"post",
						success:function(resp){
							var result=eval("("+resp.responseText+")");
							myMask.hide();
							if(result.success){
								window.location.href=result.flowFile_url;
							}else{
								Gef.showMessage("下载失败",result.flowFile_url);
							}
						},
						failure:function(resp){
							myMask.hide();
							Gef.showMessage("download.error","下载失败");
						},
						params:{flowName:flowName}
					});
		  }},
		// -------------------------------------------------------------------------------------------
		{text:"复制",iconCls:"tb-prop",handler:function(){
			var A=Gef.activeEditor,
			$=A.serial(),
			graphView=A.getGraphicalViewer();
			Ext.Msg.prompt('信息', '请输入流程名:', function(btn, text){
				if (btn == 'ok'){
				    graphView.getContents().getModel().key=null;
					graphView.getContents().getModel().text=null;
					graphView.getContents().getModel().description=null;
					graphView.getContents().getModel().text=text;
					App.propertyManager.updateForm(graphView.getContents().getModel());
				}
			});
			return;
		}},
		// -------------------------------------------------------------------------------------------
		{text:"上传",iconCls:"tb-upload",handler:function(){// 上传按钮
		    // 验证上传文件是否合法的vtype
			Ext.apply(Ext.form.VTypes,{   
					validuploadfile: function(val, field){
						if(val==null||val=="")	return false;
						var i =val.indexOf(".jpdl.xml");
						if(i==-1)	return false;
						return true;
					},   
					validuploadfileText:"上传的文件类型是jpdl.xml"});
			
			var form = new Ext.form.FormPanel({   
				baseCls: 'x-plain',   
				labelWidth: 80,
				url:"/bscp/workflowDesign.do?action=uploadFlowFile",   
				fileUpload:true,   
				defaultType: 'textfield',
				items: [{
					xtype: 'textfield',
					vtype:'validuploadfile',
					fieldLabel: '流程文件名',   
					name: 'localfile',   
					inputType: 'file',   
					allowBlank: false,   
					blankText: '文件不能为空.',   
					anchor: '90%'  // anchor width by percentage
				}]   
		});     
			var win = new Ext.Window({   
				title: '上传流程文件',   
				width: 400,   
				height:100,   
				minWidth: 300,   
				minHeight: 100,   
				layout: 'fit',   
				plain:true,   
				bodyStyle:'padding:5px;',   
				buttonAlign:'center',   
				items:form,
				modal:true,
				buttons: [{   
					text: '上传',   
					handler: function() {   
						if(form.form.isValid()){
						form.getForm().submit({
						method:"post",
                        success: function(form, action){                     	
                        },       
                        failure: function(){
						  alert("上传失败");						  
                       }   
                    })                
                   }   
                  }   
              },{   
                  text: '关闭',   
                  handler:function(){win.hide();}   
              }]   
            });   
	          win.show(); // 打开上传窗口
		 }}
		// -------------------------------------------------------------------------------------------
		,{text:"部署",iconCls:"tb-webform",handler:function(){
			    Ext.onReady(function() {
			        var a = Ext.MessageBox.wait('此处无法部署流程', '提示'); 
			       (function() {a.hide() }).defer(3000); });
			}},				
		// -------------------------------------------------------------------------------------------
		{text:"导入",iconCls:"tb-import",handler:function(){
			var $=Gef.activeEditor.serial(); // 节点编辑器的val
			if(!this.openWin){
				this.openWin=new Ext.Window({
					title:"xml",
					layout:"fit",
					width:500,
					height:300,
					closeAction:"hide",
					modal:true,
					items:[{id:"__gef_jbpm4_xml_import__",xtype:"textarea"}],
					buttons:[{
						text:"导入",
						handler:function(){
							var $=Ext.getDom("__gef_jbpm4_xml_import__").value;
							Gef.activeEditor.resetAndOpen($);
							this.openWin.hide()},
						scope:this},{
								text:"取消",
								handler:function(){
									this.openWin.hide()},scope:this}]});// window在此束
				this.openWin.on("show",function(){Gef.activeEditor.disable()}); // 打开时事件
			this.openWin.on("hide",function(){Gef.activeEditor.enable()})}  // 隐藏时事件
			this.openWin.show(null,function(){
					Ext.getDom("__gef_jbpm4_xml_import__").value=$})}},
// -------------------------------------------------------------------------------------------
{text:"导出",
	iconCls:"tb-export",
	handler:function(){
			var	$=Gef.activeEditor.serial();// XML文件内容
			if(!this.openWin){
				this.openWin=new Ext.Window({
								title:"jpdl xml 文件内容",
								layout:"fit",
								width:500,
								height:300,
								closeAction:"hide",
								modal:true,
								items:[{id:"__gef_jbpm4_xml_export__",xtype:"textarea"}],
								buttons:[{text:"关闭",handler:function(){this.openWin.hide()},scope:this}]
							});
			this.openWin.on("show",function(){Gef.activeEditor.disable()});			
			this.openWin.on("hide",function(){Gef.activeEditor.enable()})}
			this.openWin.show(null,function(){Ext.getDom("__gef_jbpm4_xml_export__").value=$})
			}
},
// -------------------------------------------------------------------------------------------

{text:"保存",
	iconCls:"tb-save",
	handler:function(){		
            var A=Gef.activeEditor,
            $=A.serial(), // XML文件内容
	        flowName=A.getGraphicalViewer().getContents().getModel().text, // XML中流程名称
	        flowKey=A.getGraphicalViewer().getContents().getModel().key, // XML中流程关键字
	        flowDesc=A.getGraphicalViewer().getContents().getModel().description; // XML中流程描述
            flowVersion=A.getGraphicalViewer().getContents().getModel().version; // XML中流程版本
           var flowtype=A.getGraphicalViewer().getContents().getModel().flowtype;
           
    if(flowName==null||flowName==""){
		Ext.Msg.alert("错误","<font color='red'>请输入流程名</font>",function(){
			// 获得焦点
			var processFormDescriptionText =Ext.getCmp("soa_flow_name");
			if(processFormDescriptionText){
				processFormDescriptionText.focus();
			}
		});
		var model =A.getGraphicalViewer().getContents().getModel();
		App.propertyManager.updateForm(model);// 更新面板和获得焦点
		var processFormDescriptionText =Ext.getCmp("soa_flow_name");
			if(processFormDescriptionText){
				processFormDescriptionText.focus();
		}
		return;
	}else{// 检查是合法性
		// 检查是否含有相同的节点名
		var duplicateName=A.validateJbpm4XmlContent($);
		if(duplicateName){
			Gef.showMessage("save.error_jpdl_same_taskname","流程配置文件不能存在两个相同名称的 <font color='red'>"+duplicateName+"</font>");
			return;
		}else{
			//===================================================================
			 var conn = Ext.lib.Ajax.getConnectionObject().conn;
		     conn.open("POST","/bscp/workflowDesign.do?action=checkFileNameExists",false);
		     conn.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		     conn.send("soa_flow_name="+flowName);
		     var result=eval("("+conn.responseText+")");
		     
			 if(!result.success){ // 存在同名的时候				
				 Ext.Msg.confirm('信息', '流程名已经存在，保存将覆盖原有的流程文件，是否继续？', function(btn){
					   if (btn == 'yes'){						
						//***************************************************************
						   Ext.Ajax.request({
								method:"post",
								url:"/bscp/workflowDesign.do?action=updateFlowDesign",
								success:function(resp){
										try{
											var respText = Ext.util.JSON.decode(resp.responseText);
											if(respText.success==true){
												Ext.Msg.confirm("信息","覆盖成功，是否清空",function($){
													if($=="yes"){
														Gef.activeEditor.getGraphicalViewer().getContents().getModel().description=null;
														Gef.activeEditor.getGraphicalViewer().getContents().getModel().key=null;
														Gef.activeEditor.getGraphicalViewer().getContents().getModel().text=null;
														Gef.activeEditor.getGraphicalViewer().getContents().getModel().version=null;
														Gef.activeEditor.reset();
													}});												
											}else{
												Ext.Msg.alert("错误","覆盖失败")
											}
										}catch(A){
											Gef.error(A)
										}									
									},
									failure:function($){Gef.showMessage("save.failure","覆盖失败");},
									params:{flowName:flowName,flowKey:flowKey,flowDesc:flowDesc,flowVersion:flowVersion,xml:$,flowtype:flowtype}
							});	
						 //***************************************************************
					   }
					},this);				
			}else{// 不同名的时候
				//***************************************************************
				   Ext.Ajax.request({
						method:"post",
						url:"/bscp/workflowDesign.do?action=saveFlowDesign",
						success:function(resp){
								try{
									var respText = Ext.util.JSON.decode(resp.responseText);
									if(respText.success==true){
										Ext.Msg.confirm("信息","保存成功，是否清空",function($){
											if($=="yes"){
												Gef.activeEditor.getGraphicalViewer().getContents().getModel().description=null;
												Gef.activeEditor.getGraphicalViewer().getContents().getModel().key=null;
												Gef.activeEditor.getGraphicalViewer().getContents().getModel().text=null;
												Gef.activeEditor.getGraphicalViewer().getContents().getModel().version=null;
												Gef.activeEditor.reset();
											}});												
									}else{
										Ext.Msg.alert("错误","保存失败:"+respText.msg);
									}
								}catch(A){
									Gef.error(A)
								}									
							},
							failure:function($){Gef.showMessage("save.failure","保存失败");},
							params:{flowName:flowName,flowKey:flowKey,flowDesc:flowDesc,flowVersion:flowVersion,xml:$,flowtype:flowtype}
					});	
				 //***************************************************************
			}			
			//===================================================================
		}		
	  }
	}
},
	// -------------------------------------------------------------------------------------------
	{text:"清空",iconCls:"tb-clear",handler:function(){
			Gef.activeEditor.clear()}},{text:"撤销",iconCls:"tb-undo",handler:function(){
				var	$=Gef.activeEditor.getGraphicalViewer(),A=$.getBrowserListener(),_=A.getSelectionManager();
				_.clearAll();
				var B=$.getEditDomain().getCommandStack();
				B.undo()},scope:this},
	// -------------------------------------------------------------------------------------------
	{text:"重做",iconCls:"tb-redo",handler:function(){
			var $=Gef.activeEditor.getGraphicalViewer(),A=$.getBrowserListener(),_=A.getSelectionManager();
			_.clearAll();
			var B=$.getEditDomain().getCommandStack();
			B.redo()},scope:this},
	// -------------------------------------------------------------------------------------------
	{text:"布局",iconCls:"tb-activity",handler:function(){
				var	$=Gef.activeEditor.getGraphicalViewer(),A=$.getBrowserListener(),_=A.getSelectionManager();
				_.clearAll();
				new Layout(Gef.activeEditor).doLayout()},scope:this},
	// -------------------------------------------------------------------------------------------
	{text:"删除",iconCls:"tb-delete",handler:this.removeSelected,scope:this}				
	]);
	App.CanvasPanel.superclass.initComponent.call(this)},			
			
	// 渲染之后
	afterRender:function(){
				App.CanvasPanel.superclass.afterRender.call(this);
				var $=1500,_=1000;
				Ext.DomHelper.append(this.body,[
					{id:"__gef_jbpm4__",tag:"div",style:"width:"+($+10)+"px;height:"+(_+10)+"px;",children:[{id:"__gef_jbpm4_center__",tag:"div",style:"width:"+$+"px;height:"+_+"px;float:left;"},
					{id:"__gef_jbpm4_right__",tag:"div",style:"width:10px;height:"+_+"px;float:left;background-color:#EEEEEE;cursor:pointer;"},
					{id:"__gef_jbpm4_bottom__",tag:"div",style:"width:"+($+10)+"px;height:10px;float:left;background-color:#EEEEEE;cursor:pointer;"}]}]);
				var B=Ext.fly("__gef_jbpm4_right__");// 向右边移
				B.on("mouseover",function(_){
					var $=_.getTarget();
					$.style.backgroundColor="#F6F7FF";
					$.style.backgroundImage="url(images/arrow/arrow-right.png)"});
				B.on("mouseout",function(_){
					var $=_.getTarget();
					$.style.backgroundColor="#EEEEEE";
					$.style.backgroundImage=""});
				B.on("click",function($){
					Ext.fly("__gef_jbpm4__").setWidth(Ext.fly("__gef_jbpm4__").getWidth()+100);
					Ext.fly("__gef_jbpm4_center__").setWidth(Ext.fly("__gef_jbpm4_center__").getWidth()+100);
					Ext.fly("__gef_jbpm4_bottom__").setWidth(Ext.fly("__gef_jbpm4_bottom__").getWidth()+100);
					Gef.activeEditor.addWidth(100);
					});
					var A=Ext.fly("__gef_jbpm4_bottom__");
				A.on("mouseover",function(_){
							var $=_.getTarget();
							$.style.backgroundColor="#F6F7FF";
							$.style.backgroundImage="url(images/arrow/arrow-bottom.png)"});
				A.on("mouseout",function(_){
							var $=_.getTarget();
							$.style.backgroundColor="#EEEEEE";
							$.style.backgroundImage=""});
				B.on("click",function($){
							Ext.fly("__gef_jbpm4__").setHeight(Ext.fly("__gef_jbpm4__").getHeight()+100);
							Ext.fly("__gef_jbpm4_center__").setHeight(Ext.fly("__gef_jbpm4_center__").getHeight()+100);
							Ext.fly("__gef_jbpm4_right__").setHeight(Ext.fly("__gef_jbpm4_right__").getHeight()+100);
							Gef.activeEditor.addHeight(100)});
				/* 右键弹出的菜单 */
					this.body.on("contextmenu",this.onContextMenu,this)},
							onContextMenu:function($){
									if(!this.contextMenu)this.contextMenu=new Ext.menu.Menu({
										items:[{text:"清空",iconCls:"tb-clear",handler:function(){Gef.activeEditor.reset()}},
											    {text:"删除",iconCls:"tb-remove",handler:this.removeSelected,scope:this}]});$.preventDefault();
		this.contextMenu.showAt($.getXY())},
		showWindow:function(){App.propertyManager.changePropertyStatus("max")},
		removeSelected:function(){
			var $=Gef.activeEditor.getGraphicalViewer(),B=$.getBrowserListener(),A=B.getSelectionManager(),_=A.selectedConnection,D=A.items,C={};
			if(_!=null){
				C.role={name:"REMOVE_EDGE"};
				this.executeCommand(_,C);
				A.removeSelectedConnection()}
			else if(D.length>0){
				C.role={name:"REMOVE_NODES",nodes:D};
				this.executeCommand($.getContents(),C);
				A.clearAll()}},
		executeCommand:function(_,A){
				var $=_.getCommand(A);
				if($!=null)Gef.activeEditor.getGraphicalViewer().getEditDomain().getCommandStack().execute($)}});
	
	
// 调色板面板========================================================================
App.PalettePanel=Ext.extend(Ext.Panel,{
	initComponent:function(){
		this.region="west";
		this.title="活动环节";
		this.iconCls="tb-activity";
		this.width=110;
		this.autoScroll=true;		
		this.createHtml([
		       {name:"select",image:"select32", title:"选择"},
			   {name:"transition", image:"32/flow_sequence", title:"连线"},
			   {name:"stage",image:"32/stage", title:"阶段"},
			   {name:"start",image:"32/start_event_empty",title:"开始"},
		       {name:"end", image:"32/end_event_terminate", title:"结束"},
		       {name:"cancel", image:"32/end_event_cancel", title:"取消"},
		       {name:"error", image:"32/end_event_error",  title:"错误"},
		       {name:"task", image:"32/new_task_pic",   title:"任务"},
		       {name:"subProcess",	image:"32/zlc",   title:"子流程"},
		       {name:"decision",image:"32/juezhe",title:"决策6"},
		       {name:"fork",image:"32/bingxing",title:"并行"},
		       {name:"join",image:"32/huiju",title:"汇聚"},
		       {name:"state",image:"32/task_wait",title:"等待"},
		       {name:"java",image:"32/task_java",title:"JAVA"},
		       {name:"script",image:"32/task_java",title:"脚本"},
		       {name:"hql",image:"32/task_hql",title:"HQL"},
		       {name:"sql",image:"32/task_sql",title:"SQL"},
		       {name:"mail",image:"32/task_empty",title:"邮件"},
		       {name:"custom",image:"32/task_empty",title:"自定义"},
		       {name:"jms",image:"32/task_empty",title:"JMS"},
		       {name:"ruleDecision",image:"32/gateway_exclusive",title:"规则决策"},
		       {name:"rules",image:"32/task_empty",title:"规则"}]);
		App.PalettePanel.superclass.initComponent.call(this)},
	    createHtml:function(C){
			// 列出来的颜料
			var B=Gef.IMAGE_ROOT.replace("48/",""),A="<div id=\"__gef_jbpm4_palette__\" unselectable=\"on\">";
			// 创建div 的调色板
			for(var _=0;_<C.length;_++){
				var $=C[_];
				A+="<div id=\""+$.name+"\" class=\"paletteItem-"+$.name+"\" style=\"text-align:center;font-size:12px;cursor:pointer;\" unselectable=\"on\"><img id=\""+$.name+"-img\" class=\"paletteItem-"+$.name+"\" src=\""+B+$.image+".png\" unselectable=\"on\"><br>"+$.title+"</div>"}
				A+="</div>";
				this.html=A;}});
// 调色板结束==================================================================================
			Layout=function($){
				this.editor=$;
				this.processEditPart=$.getGraphicalViewer().getContents();
				this.processModel=this.processEditPart.getModel()};
				Layout.prototype={doLayout:function(){
					var G=new	Diagram();
					G.init(this.processModel);
					var	E=new TopologicalSorter(G),$=E.getSortedElements(),A=[];
					for(var	_=0;_<$.length;_++)A.push($[_].id);
					var F=new LeftToRightGridLayouter(G,A);
					F.doLayout();
					var D=G.getEdgeMap();
					for(var C in D){
						var	B=D[C];
						new EdgeLayouter(F.grid,B)}G.updateModel()}};
			Diagram=function(){};
			Diagram.prototype={getNodeMap:function(){return this.nodeMap},
			getEdgeMap:function(){return this.edgeMap},
			init:function(C){
				this.process=C;
				this.nodeMap={};
				this.edgeMap={};
				for(var _=0;_<this.process.children.length;_++){
					var $=C.children[_],B=new Node();
					B.id=$.text;
					B.type=$.type;
					B.x=$.x;
					B.y=$.y;
					B.w=$.w;
					B.h=$.h;
					this.nodeMap[B.id]=B}
				for(_=0;_<this.process.children.length;_++){
					$=C.children[_];
					for(var D=0;D<$.getOutgoingConnections().length;D++){
						var A=$.getOutgoingConnections()[D];
						this.createEdge(A)}}},
				createEdge:function(_){
							var	A=_.getSource().text+"_"+_.getTarget().text,$=this.edgeMap[A];
							if(!$){$=new Edge();
							$.id=A;
							$.name=_.text;
							$.source=this.nodeMap[_.getSource().text];
							$.target=this.nodeMap[_.getTarget().text];
							$.source.outgoingLinks.push($);
							$.target.incomingLinks.push($);
							this.edgeMap[A]=$}},
			updateModel:function(){
					for(var A in this.nodeMap){
						var $=this.nodeMap[A],C=this.getModel(A);
						C.x=$.x;
						C.y=$.y;
						C.getEditPart().getFigure().x=C.x;
						C.getEditPart().getFigure().y=C.y;
						for(var _=0;_<$.outgoingLinks.length;_++){
							var B=$.outgoingLinks[_],D=this.getConnectionModel(C,B);
							D.innerPoints=typeof B.innerPoints=="undefined"?[]:B.innerPoints;
							D.textX=0;
							D.textY=0;
							D.getEditPart().getFigure().innerPoints=D.innerPoints;
							D.getEditPart().getFigure().textX=D.textX;
							D.getEditPart().getFigure().textY=D.textY}}this.process.getEditPart().refresh()},
						getModel:function(_){
							var $=null;
							Gef.each(this.process.children,function(A){
								if(A.text==_){$=A;return	false}});
								return	$},getConnectionModel:function($,_){
									var	A=null;
									Gef.each($.getOutgoingConnections(),function($){if($.getTarget().text==_.getTarget().id){A=$;return false}});return A}};Node=function(){this.incomingLinks=[];this.outgoingLinks=[]};Node.prototype={getIncomingLinks:function(){return this.incomingLinks},getOutgoingLinks:function(){return this.outgoingLinks},getPrecedingElements:function(){var _=[];for(var $=0;$<this.incomingLinks.length;$++)_.push(this.incomingLinks[$].source);return _},getFollowingElements:function(){var _=[];for(var $=0;$<this.outgoingLinks.length;$++)_.push(this.outgoingLinks[$].target);return _},isJoin:function(){return this.incomingLinks.length>1},isSplit:function(){return this.outgoingLinks.length>1},prevSplit:function(){var	_=1000,D=0,C=null,B=null,E=this.getPrecedingElements();for(var $=0;$<E.length;$++){var A=E[$];if(A.isSplit())return A;B=A.prevSplit();if(this.isJoin())D=A.backwardDistanceTo(B);if(D<_){C=B;_=D}}return C},backwardDistanceTo:function($){return this._backwardDistanceTo($,[])},_backwardDistanceTo:function(B,D){if(B==this)return 0;if(D.indexOf(this)!=-1)return 1000;var _=1000,$=[];$.push(this);var E=this.getPrecedingElements();for(var A=0;A<E.length;A++){var C=E[A];_=Math.min(_,C._backwardDistanceTo(B,$))}return _==1000?_:_+1}};Edge=function(){this.source=null;this.target=null};Edge.prototype={getSource:function(){return	this.source},getTarget:function(){return this.target},reverseOutgoingAndIncoming:function(){var	$=0,B=this.source,_=this.target;$=B.outgoingLinks.indexOf(this);B.outgoingLinks.splice($,1);$=_.incomingLinks.indexOf(this);_.incomingLinks.splice($,1);var A=_,C=B;A.outgoingLinks.push(this);C.incomingLinks.push(this);this.source=A;this.target=C}};TopologicalSorter=function($){this.diagram=$;this.prepareDataAndSort(true);this.prepareDataAndSort(false)};TopologicalSorter.prototype={getSortedElements:function(){return this.sortedElements},prepareDataAndSort:function($){this.sortedElements=[];this.elementsToSort={};this.backwardsEdges=[];this.elementsToSortCount=0;this.addAllChildren();this.topologicalSort();if($===true)this.backpatchBackwardsEdges();this.reverseBackwardsEdges()},addAllChildren:function(){for(var	$ in this.diagram.nodeMap){var _=this.diagram.nodeMap[$];this.elementsToSort[$]=new SortableLayoutingElement(_);this.elementsToSortCount++}},topologicalSort:function(){var E=0,A=0;while(this.elementsToSortCount>0){var F=this.getFreeElements();if(F.length>0){for(var $=0;$<F.length;$++){var B=F[$];this.sortedElements.push(B.node);this.freeElementsFrom(B);delete this.elementsToSort[B.node.id]}}else{var C=this.getLoopEntryPoint();for($=0;$<C.incomingLinks.length;$++){var	D=C.incomingLinks[$];C.reverseIncomingLinkFrom(D);var _=this.elementsToSort[D];_.reverseOutgoingLinkTo(C.node.id);this.backwardsEdges.push(new BackwardsEdge(D,C.node.id))}}}},backpatchBackwardsEdges:function(){var E=[];for(var B=0;B<this.backwardsEdges.length;B++)E.push(this.backwardsEdges[B]);for(B=0;B<this.backwardsEdges.length;B++){var D=this.backwardsEdges[B],A=D.getSource(),_=D.getTarget(),$=this.diagram.nodeMap[A];while(!($.isJoin()||$.isSplit())){var C=$.getPrecedingElements()[0];_=C.id;E.push(new BackwardsEdge(_,A));$=C;A=_}}this.backwardsEdges=E},reverseBackwardsEdges:function(){var E=this.diagram.edgeMap;for(var B=0;B<this.backwardsEdges.length;B++){var	D=this.backwardsEdges[B],A=D.getSource(),_=D.getTarget(),$=this.diagram.nodeMap[A],F=this.diagram.nodeMap[_],C=this.getEdge(E,$,F);D.setEdge(C);if(C)C.reverseOutgoingAndIncoming()}},getFreeElements:function(){var A=[];for(var _ in this.elementsToSort){var	$=this.elementsToSort[_];if($.isFree())A.push($)}return	A},freeElementsFrom:function(_){for(var	$=0;$<_.outgoingLinks.length;$++){var B=_.outgoingLinks[$],A=this.elementsToSort[B];if(A)A.removeIncomingLinkFrom(_.node.id)}this.elementsToSortCount--},getLoopEntryPoint:function(){for(var _	in this.elementsToSort){var $=this.elementsToSort[_];if($.oldInCount>1&&$.oldInCount>$.incomingLinks.length)return $}throw new Error("Could not	find a valid loop entry	point")},getEdge:function(B,$,C){for(var _=0;_<$.outgoingLinks.length;_++){var A=$.outgoingLinks[_];if(A.getTarget().id==C.id)return A}return null}};SortableLayoutingElement=function(_){this.node=_;this.incomingLinks=[];this.outgoingLinks=[];for(var $=0;$<_.incomingLinks.length;$++)this.incomingLinks.push(_.incomingLinks[$].source.id);for($=0;$<_.outgoingLinks.length;$++)this.outgoingLinks.push(_.outgoingLinks[$].target.id);this.oldInCount=this.incomingLinks.length;this.isJoin=_.isJoin()};SortableLayoutingElement.prototype={isFree:function(){return this.incomingLinks.length==0},removeIncomingLinkFrom:function(_){var	$=this.incomingLinks.indexOf(_);this.incomingLinks.splice($,1)},reverseIncomingLinkFrom:function($){this.removeIncomingLinkFrom($);this.outgoingLinks.push($)},reverseOutgoingLinkTo:function(_){var $=this.outgoingLinks.indexOf(_);this.outgoingLinks.splice($,1);this.incomingLinks.push(_)}};BackwardsEdge=function(_,$){this.source=_;this.target=$};BackwardsEdge.prototype={getEdge:function(){return this.edge},setEdge:function($){this.edge=$},getSource:function(){return this.source},getTarget:function(){return this.target}};LeftToRightGridLayouter=function(_,$){this.diagram=_;this.sortedIds=$};LeftToRightGridLayouter.prototype={doLayout:function(){this.grid=new	Grid();this.layoutElements();this.calcGeometry(this.grid);this.writeGeometry(this.grid);this.diagram.updateModel()},layoutElements:function(){for(var $=0;$<this.sortedIds.length;$++){var B=this.sortedIds[$],A=this.diagram.nodeMap[B],C=A.getPrecedingElements(),_=this.placeElement(A,C);if(A.isJoin()&&C.length!=0)_.getPrevCell().setPackable(false);if(A.isSplit())this.prelayoutSuccessors(A,_)}},placeElement:function(F,I){var L=null;if(I.length==0){this.grid.startCell.value=F;L=this.grid.startCell}else{var A=null,L=this.grid.getCellOfItem(F);if(F.isJoin()){var B=false,G=F.prevSplit();if(G!=null){var H=new	PriorityQueue(F);H.add(G);for(var J=0;J<I.length;J++){var $=I[J];G=$.prevSplit();if(G!=null&&!H.contains(G))H.add(G)}G=null;var	Q=0;for(J=0;J<H.items.length;J++){var D=H.items[J];if(D==F)continue;var	O=0;for(var P=0;P<I.length;P++){$=I[P];if($.backwardDistanceTo(D)<1000)O++}if(O>Q){Q=D;G=D}}B=G!=null}var R=0,S=0,E=0;for(J=0;J<I.length;J++){var $=I[J],K=this.grid.getCellOfItem($);if(K==null)K={getColIndex:function(){return 0}};else{S+=K.getRowIndex();E++}R=Math.max(R,K.getColIndex())}if(B){A=this.grid.getCellOfItem(G).row.cells[R];for(var	C=A;C.value!=G;C=C.getPrevCell())C.setPackable(false)}else if(E==0)A=this.grid.rows[0].above().cells[R];else A=this.grid.rows[S/E].cells[R];if(L!=null&&L.value==F)L.value=null;L=A.after();for(J=0;J<I.length;J++){var	N=I[J],D=this.grid.getCellOfItem(N);if(D==null)continue;var _=D.row.cells[R+1];for(C=_;C!=D;C=C.getPrevCell())C.setPackable(false)}}else if(L==null){var M=I[0];A=this.grid.getCellOfItem(M);L=A.after()}if(L.isFilled()&&L.value!=F){L.row.insertRowBeneath();L=L.beneath()}L.value=F;L.getPrevCell().setPackable(false)}return L},prelayoutSuccessors:function(F,D){var B=D.after(),A=B,G=F.getFollowingElements(),J=null;for(var H=0;H<G.length;H++){var I=G[H];if(I.isJoin())J=I}if(J!=null){var $=G.indexOf(J);G.splice($,1);var C=parseInt(G.length/2,10);G.splice(C,0,J)}var _=parseInt(G.length/2,10);for(H=0;H<_;H++){A.row.insertRowAbove();B.row.insertRowBeneath();A=A.above()}for(H=0;H<G.length;H++){var E=G[H];A.value=E;A=A.beneath();if(A==B&&G.length%2==0)A=A.beneath()}},calcGeometry:function($){$.pack();var E=[];for(var	_=0;_<$.rowCount;_++)E.push(0);var C=[];for(_=0;_<$.colCount;_++)C.push(0);for(_=0;_<$.rowCount;_++){var B=$.rows[_];for(var F=0;F<$.colCount;F++){var D=B.cells[F];if(D.isFilled()){var A=D.value;C[F]=Math.max(C[F],A.w+30);E[_]=Math.max(E[_],A.h+30)}}}this.heightOfRow=E;this.widthOfColumn=C;this.totalWidth=0;this.totalHeight=0;for(_=0;_<$.colCount;_++)this.totalWidth+=C[_];for(_=0;_<$.rowCount;_++)this.totalHeight+=E[_]},writeGeometry:function(B){var J=0,E=0;for(var C=0;C<B.rowCount;C++){var	D=B.rows[C],I=this.heightOfRow[C];for(var F=0;F<B.colCount;F++){var _=D.cells[F],G=this.widthOfColumn[F];if(_.isFilled()){var $=_.value,H=J+G/2-$.w/2,A=E+I/2-$.h/2;$.x=H;$.y=A}J+=G}J=0;E+=I}}};Grid=function(){var _=new Cell(),$=new	Row();$.grid=this;$.addCell(_);this.rows=[$];this.startCell=_;this.colCount=1;this.rowCount=this.rows.length};Grid.prototype={addFirstRow:function(){var _=new Row();_.grid=this;for(var $=0;$<this.rolCount;$++){var A=new Cell();_.addCell(A)}this.rows.unshift(_);this.rowCount=this.rows.length},addLastRow:function(){var _=new Row();_.grid=this;for(var $=0;$<this.rolCount;$++)_.addCell(new Cell());this.rows.push(_);this.rowCount=this.rows.length},addLastCol:function(){for(var $=0;$<this.rowCount;$++){var _=this.rows[$];_.addCell(new Cell())}this.colCount++},getCellOfItem:function(_){for(var $=0;$<this.rowCount;$++){var A=this.rows[$];for(var C=0;C<this.colCount;C++){var B=A.cells[C];if(B.value==_)return B}}return null},pack:function(){var _=false;do{_=false;for(var $=0;$<this.rows.length;$++){var A=this.rows[$];_|=A.tryInterleaveWith(A.getPrevRow())}for($=0;$<this.rows.length;$++){A=this.rows[$];_|=A.tryInterleaveWith(A.getNextRow())}}while(_)}};Cell=function(){this.packable=true};Cell.prototype={isFilled:function(){return typeof this.value!="undefined"&&this.value!=null},isUnpackable:function(){return this.isFilled()||(this.packable===false)},setPackable:function($){this.packable=$},getRowIndex:function(){return this.row.getIndex()},getColIndex:function(){for(var $=0;$<this.row.cells.length;$++)if(this.row.cells[$]==this)return $},after:function(){var $=this.getColIndex();if($==this.row.cells.length-1)this.grid.addLastCol();return this.row.cells[$+1]},above:function(){var _=this.getRowIndex(),$=this.getColIndex();if(_==0)this.row.insertRowAbove();return this.grid.rows[_-1].cells[$]},beneath:function(){var _=this.getRowIndex(),$=this.getColIndex();if(_==this.grid.rowCount-1)this.row.insertRowBeneath();return this.grid.rows[_+1].cells[$]},getPrevCell:function(){var $=this.getColIndex();return this.row.cells[$-1]},getNextCell:function(){var $=this.getColIndex();return this.row.cells[$+1]}};Row=function(){this.cells=[]};Row.prototype={addCell:function($){$.row=this;$.grid=this.grid;this.cells.push($)},getIndex:function(){for(var $=0;$<this.grid.rows.length;$++)if(this.grid.rows[$]==this)return $},insertRowBeneath:function(){var A=new Row();A.grid=this.grid;for(var $=0;$<this.grid.colCount;$++)A.addCell(new Cell());var B=this.getIndex(),_=this.grid.rows;if(B==_.length-1)_.push(A);else _.splice(B+1,0,A);this.grid.rowCount=_.length},insertRowAbove:function(){var A=new Row();A.grid=this.grid;for(var	$=0;$<this.grid.colCount;$++)A.addCell(new Cell());var B=this.getIndex(),_=this.grid.rows;if(B==0)_.unshift(A);else _.splice(B,0,A);this.grid.rowCount=_.length},getPrevRow:function(){var $=this.getIndex();if($>0)return this.grid.rows[$-1];else return null},getNextRow:function(){var $=this.getIndex();if($<this.grid.rows.length)return this.grid.rows[$+1];else	return null},tryInterleaveWith:function(_){if(!this.isInterleaveWith(_))return false;for(var $=0;$<this.cells.length;$++){var A=this.cells[$],B=_.cells[$];if(A.isFilled())_.cells[$]=A;else if(A.isUnpackable())B.setPackable(false)}this._remove();return true},isInterleaveWith:function(_){if(_==null||_==this)return false;else if(_.getPrevRow()!=this&&_.getNextRow()!=this)return false;for(var	$=0;$<this.cells.length;$++){var A=this.cells[$],B=_.cells[$];if(A.isUnpackable()&&B.isUnpackable())return false}return	true},_remove:function(){var $=this.getIndex();this.grid.rows.splice($,1);this.grid.rowCount--}};PriorityQueue=function($){this.ce=$;this.items=[]};PriorityQueue.prototype={add:function(_){this.items.push(_);var $=this.items.length;for(var	A=0;A<$;A++)for(var D=A;D<$;D++){var B=this.items[A],C=this.items[D];if(this.compareTo(B,C)>0){this.items[A]=C;this.items[D]=B}}},compareTo:function($,_){return this.ce.backwardDistanceTo($)-this.ce.backwardDistanceTo(_)},contains:function($){return this.items.indexOf($)!=-1}};EdgeLayouter=function($,_){this.grid=$;this.edge=_;_.innerPoints=[];this.calculateGlobals();this.pickLayoutForEdge()};EdgeLayouter.prototype={calculateGlobals:function(){this.source=this.edge.source;this.target=this.edge.target;this.sourceRelativeCenterX=this.source.w/2;this.sourceRelativeCenterY=this.source.h/2;this.targetRelativeCenterX=this.target.w/2;this.targetRelativeCenterY=this.target.h/2;this.sourceAbsoluteCenterX=this.source.x+this.sourceRelativeCenterX;this.sourceAbsoluteCenterY=this.source.y+this.sourceRelativeCenterY;this.targetAbsoluteCenterX=this.target.x+this.targetRelativeCenterX;this.targetAbsoluteCenterY=this.target.y+this.targetRelativeCenterY;this.sourceAbsoluteX=this.source.x;this.sourceAbsoluteY=this.source.y;this.sourceAbsoluteX2=this.source.x+this.source.w;this.sourceAbsoluteY2=this.source.y+this.source.h;this.targetAbsoluteX=this.target.x;this.targetAbsoluteY=this.target.y;this.targetAbsoluteX2=this.target.x+this.target.w;this.targetAbsoluteY2=this.target.y+this.target.h;this.sourceJoin=this.source.isJoin();this.sourceSplit=this.source.isSplit();this.targetJoin=this.target.isJoin();this.targetSplit=this.target.isSplit();this.backwards=this.sourceAbsoluteCenterX>this.targetAbsoluteCenterX},pickLayoutForEdge:function(){if(this.sourceAbsoluteCenterX==this.targetAbsoluteCenterX){this.setEdgeDirectCenter();return}else if(this.sourceAbsoluteCenterY==this.targetAbsoluteCenterY){if(this.areCellsHorizontalFree())this.setEdgeDirectCenter();else this.setEdgeAroundTheCorner(true);return}if(this.sourceAbsoluteCenterX<=this.targetAbsoluteCenterX&&this.sourceAbsoluteCenterY<=this.targetAbsoluteCenterY){if(this.sourcejoin&&this.sourceSplit){this.setEdgeStepRight();return}else if(this.sourceSplit){this.setEdge90DegreeRightUnderAntiClockwise();return}else	if(this.targetJoin){this.setEdge90DegreeRightUnderClockwise();return}}else if(this.sourceAbsoluteCenterX<=this.targetAbsoluteCenterX&&this.sourceAbsoluteCenterY>this.targetAbsoluteCenterY)if(this.sourcejoin&&this.sourceSplit){this.setEdgeStepRight();return}else if(this.sourceSplit){this.setEdge90DegreeRightAboveClockwise();return}else if(this.targetJoin){this.setEdge90DegreeRightAboveAntiClockwise();return}if(this.sourceJoin&&sourceSplit&&(!this.backwards)){this.setEdgeStepRight();return}if(this.sourceJoin&&sourceSplit){this.setEdgeAroundTheCorner(true);return}this.setEdgeDirectCenter()},areCellsHorizontalFree:function(){var $=null,_=null;if(this.sourceAbsoluteCenterX<this.targetAbsoluteCenterX){$=this.grid.getCellOfItem(this.source);_=this.grid.getCellOfItem(this.target)}else{$=this.grid.getCellOfItem(this.target);_=this.grid.getCellOfItem(this.source)}$=$.getNextCell();while($!=_){if($==null||$.isFilled())return	false;$=$.getNextCell()}return true},setEdgeDirectCenter:function(){var	$=Math.min(this.sourceAbsoluteCenterX,this.targetAbsoluteCenterX),A=Math.min(this.sourceAbsoluteCenterY,this.targetAbsoluteCenterY),_=Math.max(this.sourceAbsoluteCenterX,this.targetAbsoluteCenterX),B=Math.max(this.sourceAbsoluteCenterY,this.targetAbsoluteCenterY)},setEdge90DegreeRightAboveClockwise:function(){this.edge.innerPoints=[[this.sourceAbsoluteCenterX,this.targetAbsoluteCenterY]]},setEdge90DegreeRightAboveAntiClockwise:function(){this.edge.innerPoints=[[this.targetAbsoluteCenterX,this.sourceAbsoluteCenterY]]},setEdge90DegreeRightUnderClockwise:function(){this.edge.innerPoints=[[this.targetAbsoluteCenterX,this.sourceAbsoluteCenterY]]},setEdge90DegreeRightUnderAntiClockwise:function(){this.edge.innerPoints=[[this.sourceAbsoluteCenterX,this.targetAbsoluteCenterY]]},setEdgeAroundTheCorner:function(_){var $=Math.max(this.source.h/2,this.target.h/2)+20;if(_)$*=-1;this.edge.innerPoints=[[this.sourceAbsoluteCenterX,this.sourceAbsoluteCenterY+$],[this.targetAbsoluteCenterX,this.sourceAbsoluteCenterY+$]]}};

//=====================================================================================
	Ext.ns("App.form");
	App.form.AbstractForm=Ext.extend(Object,{
						clearItem:function(_){
							if(typeof	_.items!="undefined"){
								var $=null;
								while(($=_.items.last()))_.remove($,true)}},
						getData:function($){
								var _=[];
								$.each(function($){
									_.push($.data)});return _},
						resetEvent:function(_,A){
							var B=Ext.data.Record.create(["name","classname"]),
							$=new Ext.grid.EditorGridPanel({
								title:"事件配置",
								store:new Ext.data.JsonStore({
									autoLoad:true,
									fields:B,
									data:A.events?A.events:[]}),
									viewConfig:{forceFit:true},
									columns:[
									    {header:"事件类型",
										   dataIndex:"name",
										   editor:new Ext.grid.GridEditor(new Ext.ux.OneCombo({
											   data:["start","end","assignment-handler"]}))},
										{header:"类名",
											dataIndex:"classname",
											editor:new Ext.grid.GridEditor(new Ext.ux.OneCombo({
												data:["com.soa.common.handler.RoleAssignHandler",
												      "com.soa.common.handler.RoleGroupAssignHandler",
												      "please new item insert here"]
												}))}
										],
											
									tbar:[{text:"添加",
										   iconCls:"tb-add",
										   handler:function(){
											    var _=new B({name:"",classname:""});
												$.stopEditing();
												$.getStore().insert(0,_);
												$.startEditing(0,0)}},{
													text:"删除",
													iconCls:"tb-delete",
													handler:function(){
														Ext.Msg.confirm("信息","确定删除？",function(A){
															if(A=="yes"){
																var C=$.getSelectionModel(),
																B=C.getSelectedCell(),
																_=$.getStore().getAt(B[0]);
												$.getStore().remove(_)}})}}],
												listeners:{afteredit:function(_){
													var B=$.getStore();
													B.commitChanges();
													A.events=this.getData(B)},
													scope:this}});
							_.add($)},
							resetSwimlane:function(_,A){
								var B=Ext.data.Record.create(["name","assignee","candidateUsers","candidateGroups","description"]),
								$=new Ext.grid.EditorGridPanel({
									title:"泳道配置",
									store:new Ext.data.JsonStore({autoLoad:true,fields:B,data:A.swimlanes?A.swimlanes:[]}),
									viewConfig:{forceFit:true},
									columns:[{
										header:"泳道名",
										dataIndex:"name",
										editor:new	Ext.grid.GridEditor(new	Ext.form.TextField())},{
											header:"分配人",
											dataIndex:"assignee",
											editor:new Ext.grid.GridEditor(new Ext.form.TextField())},{
												header:"候选人",
												dataIndex:"candidateUsers",
												editor:new Ext.grid.GridEditor(new Ext.form.TextField())},
												{header:"候选群组",
													dataIndex:"candidateGroups",
													editor:new Ext.grid.GridEditor(new Ext.form.TextField())},
													{header:"备注",
														dataIndex:"description",
														editor:new	Ext.grid.GridEditor(new	Ext.form.TextField())}],
														tbar:[{text:"添加",
															iconCls:"tb-add",
															handler:function(){
																var _=new B(
																	{name:"",
																		assignee:"",
																		candidateUsers:"",
																		candidateGroups:"",
																		description:""});
															           $.stopEditing();
															           $.getStore().insert(0,_);
															           $.startEditing(0,0)}},
															{text:"删除",
															 iconCls:"tb-delete",
															 handler:function(){
																 Ext.Msg.confirm("信息","确定要删除?",function(A){
																	 if(A=="yes"){
																		 var C=$.getSelectionModel(),
																		 B=C.getSelectedCell(),
																		 _=$.getStore().getAt(B[0]);
																		 $.getStore().remove(_)}})}}],
															listeners:{afteredit:function(_){
																var B=$.getStore();
																B.commitChanges();
																A.swimlanes=this.getData(B)},
																scope:this}});
								_.add($)},
								resetTimer:function(_,A){
									var B=Ext.data.Record.create(["duedate","repeat","duedatetime","classname","description"]),
									$=new Ext.grid.EditorGridPanel({
										title:"定时器配置",
										xtype:"editorgrid",
										store:new Ext.data.JsonStore({
											autoLoad:true,
											fields:B,
											data:A.timers?A.timers:[]}),
											viewConfig:{forceFit:true},
											columns:[{
												header:"持续日期",
												dataIndex:"duedate",
												editor:new Ext.grid.GridEditor(new Ext.form.TextField())},
												{header:"重复次数",
													dataIndex:"repeat",
													editor:new Ext.grid.GridEditor(new Ext.form.TextField())},
												{header:"持续时间",
														dataIndex:"duedatetime",
														editor:new Ext.grid.GridEditor(new Ext.form.TextField())},								                                                                                                                                                                                                                                                                                                                                             {header:"\u76d1\u542c\u5668\u7c7b\u540d",dataIndex:"classname",editor:new Ext.grid.GridEditor(new Ext.form.TextField())},{header:"\u5907\u6ce8",dataIndex:"description",editor:new Ext.grid.GridEditor(new Ext.form.TextField())}],
									        tbar:[{
									        	text:"添加",
									        	iconCls:"tb-add",
									        	handler:function(){
									        		var _=new B({
									        			duedate:"",
									        			repeat:"",
									        			duedatetime:"",
									        			classname:"",
									        			description:""});
									        		$.stopEditing();
									        		$.getStore().insert(0,_);
									        		$.startEditing(0,0)}},
									        		{text:"删除",
									        			iconCls:"tb-delete",
									        			handler:function(){
									        				Ext.Msg.confirm("信息","确定要删除？",
									        						function(A){
									        					if(A=="yes"){
									        						var C=$.getSelectionModel(),
									        						B=C.getSelectedCell(),
									        						_=$.getStore().getAt(B[0]);
									        						$.getStore().remove(_)}})}}],
									        						listeners:{
									        							afteredit:function(_){
									        								var B=$.getStore();
									        								B.commitChanges();
									        								A.timers=this.getData(B)},
									        						scope:this}});
									_.add($)}});
//=====================================================================================
Ext.ns("App.form");
App.form.CancelForm=Ext.extend(
		App.form.AbstractForm,{
			decorate:function($,_){
				this.clearItem($);
				this.resetBasic($,_);
				this.resetEvent($,_)},
			resetBasic:function($,A){
				var _=new Ext.form.FormPanel({
					title:"基本配置",
					labelWidth:70,
					labelAlign:"right",
					border:false,
					defaultType:"textfield",
					defaults:{anchor:"90%"},
					bodyStyle:{padding:"6px 0 0"},
					items:[
					       {name:"name",fieldLabel:"名称",value:A.text?A.text:"",listeners:{"change":function(_,$){A.text=$}}},
					       {name:"ends",fieldLabel:"结束方式",xtype:"onecombo",data:["processinstance","execution"],value:A.ends?A.ends:"",listeners:{"change":function(_,$){A.ends=$}}},
					       {name:"description",fieldLabel:"备注",
		    xtype:"textarea",
		    value:A.description?A.description:"",
		    listeners:{"change":function(_,$){A.description=$}}}]});
				$.add(_);
				$.activate(_)}});
//=====================================================================================
Ext.ns("App.form");
App.form.CustomForm=Ext.extend(
		App.form.AbstractForm,{
			decorate:function($,_){
				this.clearItem($);
				this.resetBasic($,_);
				this.resetEvent($,_)},
			resetBasic:function($,A){
				var _=new Ext.form.FormPanel({
					title:"基本配置",
					labelWidth:70,
					labelAlign:"right",
					border:false,
					defaultType:"textfield",
					defaults:{anchor:"90%"},
					bodyStyle:{padding:"6px 0 0"},
					items:[
					       {name:"name",fieldLabel:"名称",value:A.text?A.text:"",listeners:{"change":function(_,$){A.text=$}}},
					       {name:"classname",fieldLabel:"类名",value:A.classname?A.classname:"",listeners:{"change":function(_,$){A.classname=$}}},
				           {name:"description",fieldLabel:"备注",xtype:"textarea",value:A.description?A.description:"",listeners:{"change":function(_,$){A.description=$}}}]});
				$.add(_);
				$.activate(_)}});
//=====================================================================================
Ext.ns("App.form");
App.form.DecisionForm=Ext.extend(
		App.form.AbstractForm,{
			decorate:function($,_){
				this.clearItem($);
				this.resetBasic($,_);
				this.resetEvent($,_)},
				resetBasic:function($,A){
					var _=new Ext.form.FormPanel({
						title:"基本配置",
						labelWidth:70,
						labelAlign:"right",
						border:false,
						defaultType:"textfield",
						defaults:{anchor:"90%"},
						bodyStyle:{padding:"6px	0 0"},
						items:[
						       {name:"name",fieldLabel:"名称",value:A.text?A.text:"",
						    		   listeners:{"change":function(_,$){A.text=$}}},				                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	             {name:"expr",fieldLabel:"\u8868\u8fbe\u5f0f",value:A.expr?A.expr:"",listeners:{"change":function(_,$){A.expr=$}}},{name:"handler",fieldLabel:"\u51b3\u7b56\u5904\u7406\u5668",value:A.handler?A.handler:"",listeners:{"change":function(_,$){A.handler=$}}},{name:"description",fieldLabel:"\u5907\u6ce8",xtype:"textarea",value:A.description?A.description:"",listeners:{"change":function(_,$){A.description=$}}}]});$.add(_);$.activate(_)}});
	
//=====================================================================================
Ext.ns("App.form");
App.form.EndForm=Ext.extend(
		App.form.AbstractForm,{
					decorate:function($,_){
						this.clearItem($);
						this.resetBasic($,_);
						this.resetEvent($,_)},
						resetBasic:function($,A){
							var _=new	Ext.form.FormPanel({
									title:"基本配置",
									labelWidth:70,
									labelAlign:"right",
									border:false,
									defaultType:"textfield",
									defaults:{anchor:"90%"},
									bodyStyle:{padding:"6px 0 0"},
									items:[{
										name:"name",
										fieldLabel:"名称",
										value:A.text?A.text:"",
										stripCharsRe:/[\'|\"|\&|\/|,]/g,
										listeners:{"change":function(_,$){A.text=$}}},
										{name:"ends",fieldLabel:"结束方式",xtype:"onecombo",data:["processinstance","execution"],value:A.ends?A.ends:"",listeners:{"change":function(_,$){A.ends=$}}},
										{name:"state",fieldLabel:"结束状态",value:A.state?A.state:"",listeners:{"change":function(_,$){A.state=$}}},
										{name:"description",fieldLabel:"备注",xtype:"textarea",value:A.description?A.description:"",listeners:{"change":function(_,$){A.description=$}}}]});
							$.add(_);$.activate(_)}});
//=====================================================================================		
Ext.ns("App.form");
App.form.ErrorForm=Ext.extend(
		App.form.AbstractForm,{
			decorate:function($,_){
				this.clearItem($);
				this.resetBasic($,_);
				this.resetEvent($,_)},
			resetBasic:function($,A){
				var _=new Ext.form.FormPanel({
					title:"基本配置",
					labelWidth:70,
					labelAlign:"right",
					border:false,
					defaultType:"textfield",
					defaults:{anchor:"90%"},
					bodyStyle:{padding:"6px 0	0"},
					items:[
					       {name:"name",
					    	   fieldLabel:"名称",
					    	   value:A.text?A.text:"",
					    	   listeners:{"change":function(_,$){A.text=$}}},
						  {name:"ends",
					    	  fieldLabel:"结束方式",
					    	  xtype:"onecombo",
					    	  data:["processinstance","execution"],
					    	  value:A.ends?A.ends:"",
					    	  listeners:{"change":function(_,$){A.ends=$}}},
					      {name:"description",
					    		  fieldLabel:"备注",
					    		  xtype:"textarea",
					    		  value:A.description?A.description:"",
					    		  listeners:{"change":function(_,$){A.description=$}}}]});
				$.add(_);
				$.activate(_)}});
//=====================================================================================		
Ext.ns("App.form");
App.form.ForkForm=Ext.extend(
		App.form.AbstractForm,{
			decorate:function($,_){
				this.clearItem($);
				this.resetBasic($,_);
				this.resetEvent($,_)},
			resetBasic:function($,A){
				var _=new Ext.form.FormPanel({
					title:"基本配置",
					labelWidth:70,
					labelAlign:"right",
					border:false,
					defaultType:"textfield",
					defaults:{anchor:"90%"},
					bodyStyle:{padding:"6px 0 0"},
					items:[
					       {name:"name",
					    	   fieldLabel:"名称",
					    	   value:A.text?A.text:"",
					    	   listeners:{"change":function(_,$){A.text=$}}},
					       {name:"description",
					    		   fieldLabel:"备注",
					    		   xtype:"textarea",
					    		   value:A.description?A.description:"",
					    		listeners:{"change":function(_,$){A.description=$}}}]});
				$.add(_);$.activate(_)}});
//=====================================================================================		
Ext.ns("App.form");
App.form.HqlForm=Ext.extend(
		App.form.AbstractForm,{
			decorate:function($,_){
				this.clearItem($);
				this.resetBasic($,_);
				this.resetEvent($,_)},
			resetBasic:function($,A){
				var _=new	Ext.form.FormPanel({
					title:"基本配置",
					labelWidth:70,
					labelAlign:"right",
					border:false,
					defaultType:"textfield",
					defaults:{anchor:"90%"},
					bodyStyle:{padding:"6px 0 0"},
					items:[
					       {name:"name",fieldLabel:"名称",value:A.text?A.text:"",listeners:{"change":function(_,$){A.text=$}}},
					       {name:"var",fieldLabel:"变量",value:A._var?A._var:"",listeners:{"change":function(_,$){A._var=$}}},
					       {name:"unique",fieldLabel:"是否唯一",value:A.unique?A.unique:"",listeners:{"change":function(_,$){A.unique=$}}},
					       {name:"query",fieldLabel:"查询语句",value:A.query?A.query:"",listeners:{"change":function(_,$){A.query=$}}},
					       {name:"description",fieldLabel:"备注",xtype:"textarea",value:A.description?A.description:"",listeners:{"change":function(_,$){A.description=$}}}]});
				$.add(_);
				$.activate(_)}});
//=====================================================================================		
Ext.ns("App.form");App.form.JavaForm=Ext.extend(
		App.form.AbstractForm,{
			decorate:function($,_){
				this.clearItem($);
				this.resetBasic($,_);
				this.resetEvent($,_)},
			resetBasic:function($,A){
				var _=new Ext.form.FormPanel({
					title:"基本配置",
					labelWidth:70,
					labelAlign:"right",
					border:false,
					defaultType:"textfield",
					defaults:{anchor:"90%"},
					bodyStyle:{padding:"6px 0 0"},
					items:[
					       {name:"name",fieldLabel:"名称",value:A.text?A.text:"",listeners:{"change":function(_,$){A.text=$}}},
					       {name:"classname",fieldLabel:"类名",value:A.classname?A.classname:"",listeners:{"change":function(_,$){A.classname=$}}},
					       {name:"method",fieldLabel:"方法",value:A.method?A.method:"",listeners:{"change":function(_,$){A.method=$}}},
					       {name:"description",fieldLabel:"备注",xtype:"textarea",value:A.description?A.description:"",listeners:{"change":function(_,$){A.description=$}}}]});
				$.add(_);
				$.activate(_)}});
//=====================================================================================		
Ext.ns("App.form");
App.form.JoinForm=Ext.extend(
		App.form.AbstractForm,{
			decorate:function($,_){
				this.clearItem($);
				this.resetBasic($,_);
				this.resetEvent($,_)},
			resetBasic:function($,A){
				var _=new Ext.form.FormPanel({
					title:"基本配置",
					labelWidth:70,
					labelAlign:"right",
					border:false,
					defaultType:"textfield",
					defaults:{anchor:"90%"},
					bodyStyle:{padding:"6px 0	0"},
					items:[
					       {name:"name",fieldLabel:"名称",value:A.text?A.text:"",listeners:{"change":function(_,$){A.text=$}}},
					       {name:"multiplicity",fieldLabel:"汇聚数目",value:A.multiplicity?A.multiplicity:"",listeners:{"change":function(_,$){A.multiplicity=$}}},
					       {name:"lockmode",fieldLabel:"锁定模式",xtype:"onecombo",data:["none","read","upgrade","upgrade_nowait","write"],value:A.lockmode?A.lockmode:"",listeners:{"change":function(_,$){A.lockmode=$}}},
					       {name:"description",fieldLabel:"备注",xtype:"textarea",value:A.description?A.description:"",listeners:{"change":function(_,$){A.description=$}}}]});
				$.add(_);
				$.activate(_)}});
//=====================================================================================					
Ext.ns("App.form");
App.form.MailForm=Ext.extend(App.form.AbstractForm,{
						decorate:function($,_){
							this.clearItem($);
							this.resetBasic($,_);
							this.resetEvent($,_)},
						resetBasic:function($,A){
								var _=new Ext.form.FormPanel({
										title:"基本配置",
										labelWidth:70,
										labelAlign:"right",
										border:false,
										defaultType:"textfield",
										defaults:{anchor:"90%"},
										bodyStyle:{padding:"6px 0 0"},
										items:[
												{name:"name",fieldLabel:"名称",value:A.text?A.text:"",listeners:{"change":function(_,$){A.text=$}}},
												{name:"template",fieldLabel:"模板",value:A.template?A.template:"",listeners:{"change":function(_,$){A.template=$}}},
												{name:"from",fieldLabel:"发信人",value:A.from?A.from:"",listeners:{"change":function(_,$){A.from=$}}},
												{name:"to",fieldLabel:"收信人",value:A.to?A.to:"",listeners:{"change":function(_,$){A.to=$}}},
												{name:"subject",fieldLabel:"标题",value:A.subject?A.subject:"",listeners:{"change":function(_,$){A.subject=$}}},
												{name:"content",fieldLabel:"内容",value:A.content?A.content:"",xtype:"htmleditor",listeners:{"change":function(_,$){A.content=$}}},
												{name:"description",fieldLabel:"备注",value:A.description?A.description:"",listeners:{"change":function(_,$){A.description=$}}}]});
												$.add(_);
												$.activate(_)}});
//=====================================================================================
// 增加StageFrom
Ext.ns("App.form");
App.form.StageForm=Ext.extend(App.form.AbstractForm,{
						decorate:function($,_){
							this.clearItem($);
							this.resetBasic($,_);
							this.resetEvent($,_)},
						resetBasic:function($,A){
								var _=new Ext.form.FormPanel({
										title:"基本配置",
										labelWidth:70,
										labelAlign:"right",
										border:false,
										defaultType:"textfield",
										defaults:{anchor:"90%"},
										bodyStyle:{padding:"6px 0 0"},
										items:[
												{name:"name",
												 fieldLabel:"名称",
												 width:250,
												 value:A.text?A.text:"",
												 stripCharsRe:/[\'|\"|\&|\/|,]/g,
												 listeners:{"change":function(_,$){
																			A.text=$;
																			A.editPart.figure.updateAndShowText($);
																			}}}]});
								$.add(_);
								$.activate(_)}});
//=====================================================================================		
Ext.ns("App.form");
App.form.ProcessForm=Ext.extend(App.form.AbstractForm,{
	decorate:function($,_){this.clearItem($);this.resetBasic($,_);this.resetEvent($,_);this.resetSwimlane($,_);this.resetTimer($,_)},
    resetBasic:function($,A){
	    Ext.apply(Ext.form.VTypes,{   
		    fileNameExist: function(val, field){
			     var conn = Ext.lib.Ajax.getConnectionObject().conn;
			     conn.open("POST","/bscp/workflowDesign.do?action=checkFileNameExists",false);
			     conn.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			     conn.send("soa_flow_name="+val);
			     var result=eval("("+conn.responseText+")");
			     return result.success;
		    },   
		    fileNameExistText:"流程名已经存在"});	    
	//....................................................................
	//初始化流程类型    
    var flowTypeStore=new Ext.data.JsonStore({
    	url:"/bscp/workflowDesign.do?action=flowdefTypelist",
    	root:'ftlist',
    	totalProperty:'size',
    	fields: ['dictKey', 'dictName'],
    	autoLoad:true
    });    
	//.................................................................... 
	// 流程属性面板
	var	_=new Ext.form.FormPanel({
		title:"基本配置",
		labelWidth:70,
		labelAlign:"right",
		border:false,
		defaultType:"textfield",
		defaults:{anchor:"90%"},
		bodyStyle:{padding:"6px 0 0"},
		items:[
			   {name:"soa_flow_name",
				   id:"soa_flow_name",
				   fieldLabel:"名称",
				   xtype:"textfield",
				   vtype:"fileNameExist",
			       value:A.text?A.text:"",
			       listeners:{"change":function(_,$,B){A.text=$;}}},
			    {name:"soa_flow_key",
			    	id:"soa_flow_key",
				    fieldLabel:"关键字",
				    xtype:"textfield",
				    value:A.key?A.key:"",
				    listeners:{"change":function(_,$){A.key=$;}}},
			    {name:"soa_flow_version",
			    	id:"soa_flow_version",
				    fieldLabel:"版本",
				    xtype:"textfield",
				    value:A.version?A.version:"",
				    listeners:{"change":function(_,$){A.version=$;}}},
				{name:"soa_flow_type",
					id:"soa_flow_type",
					fieldLabel:"类型",					
					xtype:"combo",
					triggerAction:"all",
				    store:flowTypeStore,
				    displayField:"dictName",
				    valueField:'dictKey',
				    value:A.flowtype?A.flowtype:"",
				    mode:"local",
					listeners:{"change":function(_,$){Gef.flowtype=$;;A.flowtype=$;}}},
				{name:"soa_flow_desc",
				    id:"soa_flow_desc",
					fieldLabel:"描述",
					xtype:"textarea",
					value:A.description?A.description:"",
					listeners:{"change":function(_,$){A.description=$;}}}  
			   ]});
	
	  $.add(_);
	  $.activate(_)}});
		
// 脚本============================================================================================
Ext.ns("App.form");
App.form.ScriptForm=Ext.extend(
			  App.form.AbstractForm,{
				  decorate:function($,_){
					  this.clearItem($);
					  this.resetBasic($,_);
					  this.resetEvent($,_)},
					  resetBasic:function($,A){
						  var	_=new Ext.form.FormPanel({
							  title:"基本配置",
							  labelWidth:70,
							  labelAlign:"right",
							  border:false,
							  defaultType:"textfield",
							  defaults:{anchor:"90%"},
							  bodyStyle:{padding:"6px 0 0"},
							  items:[
							         {name:"name",
								        fieldLabel:"名称",
								        value:A.text?A.text:"",
								        listeners:{"change":function(_,$){A.text=$}}},
									 {name:"expr",
								        	fieldLabel:"表达式",
								        	value:A.expr?A.expr:"",
								        	listeners:{"change":function(_,$){A.expr=$}}},
									 {name:"lang",
								        	fieldLabel:"脚本语言",
								        	value:A.lang?A.lang:"",
								        	listeners:{"change":function(_,$){A.lang=$}}},
									 {name:"description",
								        	fieldLabel:"备注",
								        	xtype:"textarea",
								        	value:A.description?A.description:"",
											listeners:{"change":function(_,$){A.description=$}}}]});
						  $.add(_);
						  $.activate(_)}});
	 
// SQL============================================================================================
Ext.ns("App.form");
App.form.SqlForm=Ext.extend(
			  App.form.AbstractForm,{
				 decorate:function($,_){
					  this.clearItem($);
					  this.resetBasic($,_);
					  this.resetEvent($,_)},
		          resetBasic:function($,A){
		        	  var _=new Ext.form.FormPanel({
		        		  title:"基本配置",
		        		  labelWidth:70,
		        		  labelAlign:"right",
		        		  border:false,
			      defaultType:"textfield",
			      defaults:{anchor:"90%"},
			      bodyStyle:{padding:"6px 0 0"},
			      items:[
			             {name:"name",
			            	 fieldLabel:"名称",
			            	 value:A.text?A.text:"",
					         listeners:{"change":function(_,$){A.text=$}}},
					     {name:"var",
					         fieldLabel:"变量",
					         value:A._var?A._var:"",
					         listeners:{"change":function(_,$){A._var=$}}},
					     {name:"unique",
					         fieldLabel:"是否唯一",
					         value:A.unique?A.unique:"",
					         listeners:{"change":function(_,$){A.unique=$}}},
					     {name:"query",
					         fieldLabel:"查询语句",
					         value:A.query?A.query:"",
					         listeners:{"change":function(_,$){A.query=$}}},
					     {name:"description",
					         fieldLabel:"备注",
					         xtype:"textarea",
					         value:A.description?A.description:"",
					         listeners:{"change":function(_,$){A.description=$}}}]});
		        	  $.add(_);
		        	  $.activate(_)}});
	
// 开始============================================================================================
Ext.ns("App.form");
App.form.StartForm=Ext.extend(App.form.AbstractForm,{
			 decorate:function($,_){
				 this.clearItem($);
				 this.resetBasic($,_);
				 this.resetEvent($,_)},
				 resetBasic:function($,A){
					 var _=new Ext.form.FormPanel(
						{title:"基本配置",
						 labelWidth:70,labelAlign:"right",
						 border:false,
						 defaultType:"textfield",
						 defaults:{anchor:"90%"},
						 bodyStyle:{padding:"6px 0 0"},
						 items:[{name:"name",
						 fieldLabel:"名称",
						 value:A.text?A.text:"",
						 stripCharsRe:/[\'|\"|\&|\/|,]/g,
						 listeners:{"change":function(_,$){A.text=$}}},
						 {name:"form",
							 fieldLabel:"表单",
							 value:A.form?A.form:"",
									 listeners:{"change":function(_,$){A.form=$}}},
									 {name:"description",
										 fieldLabel:"备注",
										 xtype:"textarea",
										 value:A.description?A.description:"",
										 listeners:{"change":function(_,$){A.description=$}}}]});
					 $.add(_);
					 $.activate(_)}});
	
// ============================================================================================
Ext.ns("App.form");
App.form.StateForm=Ext.extend(App.form.AbstractForm,{
		decorate:function($,_){
			this.clearItem($);
		    this.resetBasic($,_);
		    this.resetEvent($,_)},
		resetBasic:function($,A){var _=new Ext.form.FormPanel(
				{title:"基本配置",
					labelWidth:70,
					labelAlign:"right",
					border:false,
					defaultType:"textfield",
					defaults:{anchor:"90%"},
					bodyStyle:{padding:"6px 0 0"},
					items:[{name:"name",
						fieldLabel:"名称",
						value:A.text?A.text:"",
								listeners:{"change":function(_,$){A.text=$}}},
						  {name:"description",
									fieldLabel:"备注",
									xtype:"textarea",
									value:A.description?A.description:"",
											listeners:{"change":function(_,$){A.description=$}}}]});
		$.add(_);
		$.activate(_)}});
// =====================================================================================
Ext.ns("App.form");
App.form.SubProcessForm=Ext.extend(App.form.AbstractForm,{
				decorate:function($,_){
					this.clearItem($);
					this.resetBasic($,_);
					this.resetEvent($,_)},
					resetBasic:function($,A){
	// 子流程属性面板RegExp
	var selectedRowProcessKey=A.subProcessKey;// 选择的流程关键字
	var selectedRowProcessName="";// 选择的流程名
	var _=new Ext.form.FormPanel({
		title:"基本配置",
		labelWidth:70,
		labelAlign:"right",
		border:false,
		defaultType:"textfield",
		defaults:{anchor:"90%"},
		bodyStyle:{padding:"6px 0 0"},
		items:[
			{name:"name",
				fieldLabel:"名称",
				value:A.text?A.text:"",
						stripCharsRe:/[\'|\"|\&|\/|,]/g,
						listeners:{"change":function(_,$){A.text=$;A.editPart.figure.updateAndShowText($);}}},
			{name:"subProcessKey",id:"soa_flow_subprocesskey_098334",
				fieldLabel:"流程模型ID",
				value:A.subProcessKey?A.subProcessKey:"",
				readOnly:false,
			 listeners:{
				"change":function(_,$){
					A.subProcessKey=$;
					},
				"focus":function(tf){// 得到焦点
				if(!this.openWin){
					 var store = new Ext.data.JsonStore({
							url:"/bscp/workflowManage.do?action=findAllFlow",
							root:'flowList',
							totalProperty:'size',
							fields: ['flowId', 'flowKey','flowName','flowVersion','flowDeployId']
					});
					store.load();
					 var grid = new Ext.grid.GridPanel({
						 frame:false,
						 height:400,
						 width:530,
						 store: store,
						 enableHdMenu:false,
						 stripeRows:true,
						 sm: new Ext.grid.RowSelectionModel({
								singleSelect: true,
								listeners: {
									rowselect: {
										fn: function(sm,index,record) {
												selectedRowProcessKey =record.data.flowKey;
												selectedRowProcessName =record.data.flowName;
										}
									}
								}
							}),
						 bbar: new Ext.PagingToolbar({
								pageSize:10,
								store: store
						 }),
						 columns: [
							 {header: "流程编号", dataIndex: 'flowId',width:150},
							 {header: "流程关键字", dataIndex: 'flowKey',width:100},
							 {header: "流程名称", dataIndex: 'flowName',width:100},
							 {header: "流程版本", dataIndex: 'flowVersion',width:90},
							 {header: "部署编号", dataIndex: 'flowDeployId',width:90}							 
							]
					});// GridPanel结束
					
					var selectFormPanel =new Ext.form.FormPanel({
						region:"center",
						labelAlign:'center',
						bodyStyle:'padding:5px',
						border:false,
						labelWidth:100,
						defaults:{anchor:"100%"},						
						items:[grid
							]
					});
				
				this.openWin = new Ext.Window({   
							title: '流程列表',   
							width:570,   
							height:510,   
							minWidth: 300,   
							minHeight: 300,   
							layout: 'fit',   
							plain:true,   
							bodyStyle:'padding:5px;',   
							buttonAlign:'center',
							modal:true,
							items:[selectFormPanel],
							closeAction:"hide",
							closable:true,
							buttons:[{
								text:"确定",
								handler:function(){
									// 确定按钮
									var subProcessKeyCmp =Ext.getCmp("soa_flow_subprocesskey_098334");
									subProcessKeyCmp.setValue(selectedRowProcessKey);
									A.subProcessKey=selectedRowProcessKey;
									if(A.subProcessKey==null||A.subProcessKey==""){
										Ext.Msg.alert('信息', "请选择要嵌套的子流程");
									}
									this.openWin.hide();
									},scope:this},{
								text:"取消",// 取消按钮
								handler:function(){
									selectedRowProcessName="";
									selectedRowProcessKey="";
									this.openWin.close();
									},scope:this}]
					});// window结束
				
					this.openWin.on("show",function(){
							Gef.activeEditor.disable();
					});
					this.openWin.on("hide",function(){
						Gef.activeEditor.enable();
						var subProcessKeyCmp =Ext.getCmp("soa_flow_subprocesskey_098334");
						if(subProcessKeyCmp.getValue()){
							// 更新颜色
							var $=Gef.activeEditor.getGraphicalViewer(),
							A=$.getBrowserListener(),
							selectionManager=A.getSelectionManager();
							var items =selectionManager.getCurrentSelected();
							var editPart =items[0];
							var figure=editPart.getFigure();
							figure.rectEl.setAttribute("strokecolor","red");// 使得子流程的边框变成红色
							var model =editPart.getModel();// SubProcessModel
							var newSubProcessName =selectedRowDepartmentName+"_"+selectedRowProcessName;
							model.text =newSubProcessName;
							figure.textEl.style.fontSize="9px";
							figure.textEl.innerHTML=newSubProcessName;
							var incomingConnections =editPart.getIncomingConnections();
							if(incomingConnections.length>0){
								for(var i=0;i<incomingConnections.length;i++){
									var connModel =incomingConnections[i].getModel();
									connModel.updateText("to_"+newSubProcessName);
								}
							}
							editPart.refreshVisuals();
							}
						});
				}
				this.openWin.show(null,function(){
				
					});
				}}// listeners结束
			},
			{name:"description",
				fieldLabel:"备注",
				xtype:"textarea",
				value:A.description?A.description:"",
						listeners:{"change":function(_,$){A.description=$}}}]});
	       $.add(_);
	       $.activate(_)}});
// =====================================================================================	  
//....................................................................

var roleStore = new Ext.data.JsonStore({
	url:"/bscp/sysRole.do?action=findAllRoles",
	root:'roleList',
	totalProperty:'size',
	fields: ['roleName', 'roleRemark'],
	autoLoad:true
});

var combo = new Ext.form.ComboBox({
	emptyText: "请选择", 
    store:roleStore,
    width:230,height:22,
    valueField:"roleName",
    displayField:"roleRemark",
   // readOnly:true,
    mode: "remote",
    triggerAction:"all", //请设置为"all",否则默认为"query"的情况下，你选择某个值后，再此下拉时，只出现匹配选项，如果设为"all"的话，每次下拉均显示全部选项
    forceSelection: true,//不允许用户自己输入值
    allowBlank:false,
    editable :false,
    listeners : {     
       }   

});

//....................................................................  
Ext.ns("App.form");
App.form.TaskForm=Ext.extend(App.form.AbstractForm,{
					decorate:function($,_){
						this.clearItem($);
						this.resetBasic($,_);
						this.resetAdvance($,_);
						this.resetEvent($,_)},
					// 基本配置
					resetBasic:function($,A){
							var _=new Ext.form.FormPanel({
								title:"基本配置",
								labelWidth:70,
								labelAlign:"right",
								border:false,
								defaultType:"textfield",
								defaults:{anchor:"90%"},
								bodyStyle:{padding:"6px 0 0"},
								items:[
									{name:"name",
									   fieldLabel:"名称",
									   value:A.text?A.text:"",
									   stripCharsRe:/[\'|\"|\&|\/|,]/g,
									   listeners:{"change":function(_,$){
										  A.text=$;
										  A.editPart.figure.updateAndShowText($);}}},
									{name:"assignee",id:"soa_flow_select_task_assignee",
									   fieldLabel:"分配人",
									   value:A.assignee?A.assignee:"",
									   listeners:{"change":function(_,$){A.assignee=$},
										  "focus":function(){
											  //--------------------------------------------------------------
											  var select_user_nick_name="";
											  //.................................
											  var store = new Ext.data.JsonStore({
													url:"/bscp/user.do?action=findAllUser",
													root:'usrList',
													totalProperty:'size',
													fields: ['userCode', 'userNickName','userName']
											  });
											  store.load();
											  var usrGrid = new Ext.grid.GridPanel({
													 frame:false,
													 width:380,
											         height:250,
													 store: store,
													 enableHdMenu:false,
													 stripeRows:true,
													 sm: new Ext.grid.RowSelectionModel({
															singleSelect: true,
															listeners: {
																rowselect: {
																	fn: function(sm,index,record) {																	 
																		select_user_nick_name=record.data.userNickName;																	    
																	}
																}
															}
														}),
													 bbar: new Ext.PagingToolbar({
															pageSize:30,
															store: store,
															displayInfo:true, 
															displayMsg:'第{0}条-第{1}条,共{2}条', 
															emptyMsg:"没有记录" 
													 }),
													 columns: [
														 {header: "用户编号", dataIndex: 'userCode',width:120},
														 {header: "用户呢称", dataIndex: 'userNickName',width:140},
														 {header: "用户全称", dataIndex: 'userName',width:140}														 
														]
												});// GridPanel结束
											  //.................................
											  usrGrid.addListener('rowdblclick', rowclickFn);  
											  function rowclickFn(grid, rowindex, e){        
											        grid.getSelectionModel().each(function(rec){        
											        var task_assigneeCMP =Ext.getCmp("soa_flow_select_task_assignee");
											    	task_assigneeCMP.setValue(rec.get("userNickName"));
													A.assignee=rec.get("userNickName");
													if(A.assignee==null||A.assignee==""){
														Ext.Msg.alert('信息', "请选择用户");
													}else{
														usrwin.close();
													}	
											      });        
											   }  
											  
											  var usrwin = new Ext.Window({
												         title:'用户列表',
												         width:400,
												         height:320,
												         maximizable:false,														
														 buttonAlign:'center',
														 modal:true,
														 items:[usrGrid],
														 closeAction:"hide",
														 closable:true,
														 buttons:[
														           {text:"确定",
																    handler:function(){	
																    	var task_assigneeCMP =Ext.getCmp("soa_flow_select_task_assignee");
																    	task_assigneeCMP.setValue(select_user_nick_name);
																		A.assignee=select_user_nick_name;
																		if(A.assignee==null||A.assignee==""){
																			Ext.Msg.alert('信息', "请选择用户");
																		}else{
																			usrwin.close();
																		}																			
																	},scope:this},																	
																	{text:"取消",
																     handler:function(){
																    	 usrwin.close();
																	 },scope:this}
															]
												    });
											  usrwin.show();
											  //--------------------------------------------------------------
										  }
									   }
								    },
									{name:"candidateUsers",
									    fieldLabel:"候选人列表",id:"soa_flow_select_task_candidateUsers",
									    value:A.candidateUsers?A.candidateUsers:"",
										listeners:{"change":function(_,$){A.candidateUsers=$},
								           "focus":function(){
										  //--------------------------------------------------------------
										  var select_user_nick_name="";
										  //.................................
										  var store = new Ext.data.JsonStore({
												url:"/bscp/user.do?action=findAllUser",
												root:'usrList',
												totalProperty:'size',
												fields: ['userCode', 'userNickName','userName']
										  });
										  store.load();
										  var usrGrid = new Ext.grid.GridPanel({
												 frame:false,
												 width:380,
										         height:250,
												 store: store,
												 enableHdMenu:false,
												 stripeRows:true,
												 sm: new Ext.grid.RowSelectionModel({singleSelect: false}),
												 bbar: new Ext.PagingToolbar({
														pageSize:30,
														store: store,
														displayInfo:true, 
														displayMsg:'第{0}条-第{1}条,共{2}条', 
														emptyMsg:"没有记录" 
												 }),
												 columns: [
													 {header: "用户编号", dataIndex: 'userCode',width:120},
													 {header: "用户呢称", dataIndex: 'userNickName',width:140},
													 {header: "用户全称", dataIndex: 'userName',width:140}														 
													]
											});// GridPanel结束
										  //.................................
										  usrGrid.addListener('rowclick', rowclickFn);  
										  function rowclickFn(grid, rowindex, e){        
										      grid.getSelectionModel().each(function(rec){        
										    	  select_user_nick_name=rec.get("userNickName")+","+select_user_nick_name;       
										      });        
										   }  
										  
										  var usrwin = new Ext.Window({
											         title:'用户列表',
											         width:400,
											         height:320,
											         maximizable:false,														
													 buttonAlign:'center',
													 modal:true,
													 items:[usrGrid],
													 closeAction:"hide",
													 closable:true,
													 buttons:[
													           {text:"确定",
															    handler:function(){	
															    	
															    	var task_assigneeCMP =Ext.getCmp("soa_flow_select_task_candidateUsers");
															    	task_assigneeCMP.setValue(select_user_nick_name);
																	A.candidateUsers=select_user_nick_name;
																	if(A.candidateUsers==null||A.candidateUsers==""){
																		Ext.Msg.alert('信息', "请选择用户");
																	}else{
																		usrwin.close();
																	}																			
																},scope:this},																	
																{text:"取消",
															     handler:function(){
															    	 usrwin.close();
																 },scope:this}
														]
											    });
										  usrwin.show();
										  //--------------------------------------------------------------
								           }
										}},
									{name:"candidateGroups",
										fieldLabel:"用户角色",
										xtype:"combo",
										store:roleStore,
										displayField:"roleRemark",
										valueField:'roleName',
										mode:"local",		
										triggerAction:"all",
										value:A.candidateGroups?A.candidateGroups:"",
										listeners:{"change":function(_,$){A.candidateGroups=$}}},
									{name:"description",fieldLabel:"备注",
										xtype:"textarea",
										value:A.description?A.description:"",
										listeners:{"change":function(_,$){A.description=$}}}]});
							
							$.add(_);
							$.activate(_)},
							
					// 高级配置
					resetAdvance:function($,A){
						var	_=new Ext.form.FormPanel({
							title:"高级配置",
							labelWidth:70,
							labelAlign:"right",
							border:false,
							defaultType:"textfield",
							defaults:{anchor:"90%"},
							bodyStyle:{padding:"6px 0 0"},
							items:[
							       {name:"swimlane",
									  fieldLabel:"泳道",
									  value:A.swimlane?A.swimlane:"",
									  listeners:{"change":function(_,$){A.swimlane=$}}},
								   {name:"form",
									  fieldLabel:"表单",
									  value:A.form?A.form:"",
									  listeners:{"change":function(_,$){A.form=$}}},
								   {name:"notification",
									  fieldLabel:"邮件提示",
									  value:A.notification?A.notification:"",
									  listeners:{"change":function(_,$){A.notification=$}}},
								   {name:"reminder",
									  fieldLabel:"邮件提醒",
									  value:A.reminder?A.reminder:"",
									  listeners:{"change":function(_,$){A.reminder=$}}}]});
							$.add(_)}});
// =====================================================================================			
Ext.ns("App.form");
App.form.TransitionForm=Ext.extend(App.form.AbstractForm,
					{decorate:function($,_){
						this.clearItem($);
						this.resetBasic($,_);
						this.resetEvent($,_)},
					resetBasic:function($,B){
						var _=[];
						_.push({
							name:"name",
							fieldLabel:"名称",
							value:B.text?B.text:"",
							listeners:{"change":function(_,$){
								B.text=$;
								B.editPart.figure.updateAndShowText($)}}});
					   _.push({
						   name:"code",
						   fieldLabel:"编码",
						   value:B.code?B.code:"",
						   listeners:{"change":function(_,$){B.code=$}}});
					   if(B.getSource().type=="decision")
					      _.push({
					    	  xtype:"trigger",
					    	  name:"condition",
					    	  fieldLabel:"条件",
					    	  value:B.condition?B.condition:"",
					    	  onTriggerClick:function(){
					    		  var $=this,
					    		  _=new	Ext.Window({
					    			  title:"编辑表达式",
					    			  layout:"fit",
					    			  width:600,
					    			  height:400,
					    			  items:[new Bpm.ExpressionPanel({
					    				  initValue:$.getValue(),
					    				  versionDbid:Gef.PROCESS_ID,
					    				  nodeId:B.text,
					    				  callback:function(A){
					    					  $.setValue(A);
					    					  var C=A.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&/g,"&amp;").replace(/</g,"&lt;");
					    					  B.condition=C;
					    					  B.editPart.figure.setConditional(typeof C!="undefined"&&C!=null&&C!="");
					    					  _.close()}})]});
					    		  _.show(this)}});
					       _.push({
					    	   name:"description",
					    	   fieldLabel:"备注",
					    	   xtype:"textarea",
					    	   value:B.description?B.description:"",
					    	   listeners:{"change":function(_,$){B.description=$}}});
					       
					       var A=new Ext.form.FormPanel({
					    	   title:"基本配置",
					    	   labelWidth:70,
					    	   labelAlign:"right",
					    	   border:false,
					    	   defaultType:"textfield",
					    	   defaults:{anchor:"90%"},
					    	   bodyStyle:{padding:"6px 0 0"},items:_});
					       
					          $.add(A);
					          $.activate(A)},
					          resetEvent:function(_,A){
					        	  var B=Ext.data.Record.create(["name","classname"]),
					        	  $=new Ext.grid.EditorGridPanel({
					        		  title:"事件配置",
					        		  store:new Ext.data.JsonStore({
					        			  autoLoad:true,
					        			  fields:B,
					        			  data:A.events?A.events:[]}),
					        			  viewConfig:{forceFit:true},
					        			  columns:[{
					        				  header:"事件类型",
					        				  dataIndex:"name",
					        				  editor:new Ext.grid.GridEditor(new Ext.ux.OneCombo({
					        				  data:["进入"]}))},
					        				  {header:"类名",
					        					  dataIndex:"classname",
					        					  editor:new Ext.grid.GridEditor(new Ext.form.TextField())}],
					        					  tbar:[{
					        						  text:"添加",
					        						  iconCls:"tb-add",
					        						  handler:function(){
					        							 var _=new B({name:"",classname:""});
					        								  $.stopEditing();
					        								  $.getStore().insert(0,_);
					        								  $.startEditing(0,0)}},
					        								  {text:"删除",
					        									  iconCls:"tb-delete",
					        									  handler:function(){
					        										  Ext.Msg.confirm("信息","确定删除？",
					        												  function(A){
					        											        if(A=="yes"){
					        											        	var C=$.getSelectionModel(),
					        											        	B=C.getSelectedCell(),
					        											        	_=$.getStore().getAt(B[0]);
					        											        	$.getStore().remove(_)}})}}],
					        							listeners:{
					        							   		afteredit:function(_){
					        									var B=$.getStore();
					        									B.commitChanges();
					        									A.events=this.getData(B)},
					        									scope:this}});
					        	  _.add($)}});
			
// =====================================================================================
Ext.ns("App.form");
App.form.JmsForm=Ext.extend(
					App.form.AbstractForm,{
						decorate:function($,_){
							this.clearItem($);
							this.resetBasic($,_);
							this.resetEvent($,_)},
		   resetBasic:function($,A){
			   var	_=new Ext.form.FormPanel({
				   title:"基本配置",
				   labelWidth:70,
				   labelAlign:"right",
				   border:false,
				   defaultType:"textfield",
				   defaults:{anchor:"90%"},
				   bodyStyle:{padding:"6px 0 0"},
				   items:[{
					   name:"name",
					      fieldLabel:"名称",
					      value:A.text?A.text:"",
						  listeners:{"change":function(_,$){A.text=$}}},
					   {name:"connectionFactory",
						  fieldLabel:"连接工厂",
						  value:A.connectionFactory?A.connectionFactory:"",
						  listeners:{"change":function(_,$){A.connectionFactory=$}}},
					   {name:"destination",fieldLabel:"消息目标",
						  value:A.destination?A.destination:"",
						  listeners:{"change":function(_,$){A.destination=$}}},
					   {name:"transacted",
						  fieldLabel:"事务性",
						  xtype:"onecombo",
						  data:["true","false"],
						  value:A.transacted?A.transacted:"",
						  listeners:{"change":function(_,$){A.transacted=$}}},
					  {name:"acknowledge",
						  fieldLabel:"提醒方式",
						  xtype:"onecombo",
						  data:["auto","client","dups-ok"],
						  value:A.acknowledge?A.acknowledge:"",
						  listeners:{"change":function(_,$){
						  A.acknowledge=$}}},
					 {name:"textObject",
						  fieldLabel:"内容",xtype:"textarea",
						  value:A.textObject?A.textObject:"",
						  listeners:{"change":function(_,$){A.textObject=$}}},
					{name:"description",fieldLabel:"备注",
						  xtype:"textarea",
						  value:A.description?A.description:"",
						  listeners:{"change":function(_,$){A.description=$}}}]});
			   $.add(_);
			   $.activate(_)}});
// =====================================================================================
Ext.ns("App.form");
App.form.RuleDecisionForm=Ext.extend(
					   App.form.AbstractForm,{
						   decorate:function($,_){
							   this.clearItem($);
							   this.resetBasic($,_);
							   this.resetEvent($,_)},
				   resetBasic:function($,A){var _=new Ext.form.FormPanel({
					   title:"基本配置",
					   labelWidth:70,
					   labelAlign:"right",
					   border:false,
					   defaultType:"textfield",
					   defaults:{anchor:"90%"},
					   bodyStyle:{padding:"6px 0 0"},
					   items:[
					       {name:"name",
						      fieldLabel:"名称",
						      value:A.text?A.text:"",
							  listeners:{"change":function(_,$){A.text=$}}},
						   {name:"description",
							  fieldLabel:"备注",
							  xtype:"textarea",
							  value:A.description?A.description:"",
							  listeners:{"change":function(_,$){
							  A.description=$}}}]});
				   $.add(_);
				   $.activate(_)}});
// =====================================================================================
Ext.ns("App.form");
App.form.RulesForm=Ext.extend(
					   App.form.AbstractForm,{decorate:function($,_){
						   this.clearItem($);
						   this.resetBasic($,_);
						   this.resetEvent($,_)},
						   resetBasic:function($,A){
							   var _=new Ext.form.FormPanel({
								   title:"基本配置",
								   labelWidth:70,
								   labelAlign:"right",
								   border:false,
								   defaultType:"textfield",
								   defaults:{anchor:"90%"},
								   bodyStyle:{padding:"6px 0	0"},
								   items:[
								          {name:"name",
									         fieldLabel:"名称",
									         value:A.text?A.text:"",
											 listeners:{"change":function(_,$){A.text=$}}},
										  {name:"factVar",
											 fieldLabel:"变量",
											 value:A.factVar?A.factVar:"",
											 listeners:{"change":function(_,$){A.factVar=$}}},
										   {name:"factExpr",
											  fieldLabel:"表达式",
											  value:A.factExpr?A.factExpr:"",
											  listeners:{"change":function(_,$){A.factExpr=$}}},
										   {name:"description",
											  fieldLabel:"备注",
											  xtype:"textarea",
											  value:A.description?A.description:"",
											  listeners:{"change":function(_,$){
											  A.description=$}}}]});
							   $.add(_);
							   $.activate(_)}});
 // =====================================================================================
Ext.ns("App.property");
App.property.AbstractPropertyPanel=Ext.extend(Ext.Panel,
										{title:"属性面板",
										 iconCls:"tb-prop",
										 layout:"fit",
										 split:true,
										 tools:[{id:"maximize",
											 handler:function($,_,A){A.propertyManager.changePropertyStatus("max")}}],
										 initComponent:function(){
											 var $=new Ext.TabPanel({
												 enableTabScroll:true,
												 layoutOnTabChange:true,
												 defaults:{autoScroll:true}});
											 this.tabPanel=$;this.items=[$];
											 App.property.AbstractPropertyPanel.superclass.initComponent.call(this)},
											 setPropertyManager:function($){this.propertyManager=$},
										 getTabPanel:function(){return this.tabPanel},
										 hide:function(){
											 this.clearItem(this.tabPanel);
											 App.property.AbstractPropertyPanel.superclass.hide.call(this)},
										clearItem:function(_){
											if(typeof _.items!="undefined"){
												var $=null;
												while(($=_.items.last()))_.remove($,true)}}});
// =====================================================================================			
Ext.ns("App.property");
App.property.BottomPanel=Ext.extend(App.property.AbstractPropertyPanel,
				{region:"south",
				height:200,
				draggable:{
					insertProxy:false,
					onDrag:function(_){
						var $=this.proxy.getEl();
						this.x=$.getLeft(true);
						this.y=$.getTop(true)},
						endDrag:function(C){
							var B=this.x,
							$=this.y,
							A=this.panel.propertyManager,
							_=Ext.getBody().getViewSize();
							if($<_.height-200)
								if(B>_.width-200)A.changePropertyStatus("right");
							else 
								A.changePropertyStatus("max")}},
								getStatusName:function(){return"bottom"}});
// =====================================================================================			
Ext.ns("App.property");
App.property.MaxWindow=Ext.extend(Ext.Window,{
				title:"属性面板",
				iconCls:"tb-prop",
				layout:"fit",
				stateful:false,
				closable:false,
				width:500,
				height:400,
				modal:false,
				constrainHeader:true,
				autoScroll:true,
				tools:[{id:"restore",
					handler:function($,_,A){A.propertyManager.changePropertyStatus(A.restore.getStatusName())}}],
					initComponent:function(){
						var $=new	Ext.TabPanel({
							enableTabScroll:true,
							layoutOnTabChange:true});
						this.tabPanel=$;
						this.items=[$];App.property.MaxWindow.superclass.initComponent.call(this)},
						afterRender:function(){
							App.property.MaxWindow.superclass.afterRender.call(this);
							this.dd.endDrag=function(C){
								try{
								  this.win.unghost();
								  var B=C.xy[0],
								  $=C.xy[1],
								  A=this.win.propertyManager,_=Ext.getBody().getViewSize();
								  if($>_.height-200)
									  A.changePropertyStatus("bottom");
								  else 
									  if(B>_.width-200)
										  A.changePropertyStatus("right")
							  }catch(C){Gef.error(C)}}.createDelegate(this.dd)},
							  setPropertyManager:function($){
								  this.propertyManager=$},
								  getTabPanel:function(){return this.tabPanel},
								  clearItem:function(_){
									  if(typeof _.items!="undefined"){
										  var $=null;
										  while(($=_.items.last()))_.remove($,true)}},
										  hide:function(){this.clearItem(this.tabPanel);
										  if(this.el){if(Gef.activeEditor);
										  App.property.MaxWindow.superclass.hide.call(this)}},
										  show:function(){
											  if(Gef.activeEditor);delete this.x;delete this.y;
											  App.property.MaxWindow.superclass.show.call(this)},
											  getStatusName:function(){return"max"},
											  setRestore:function($){this.restore=$}});
	
// =====================================================================================
Ext.ns("App.property");
App.property.RightPanel=Ext.extend(App.property.AbstractPropertyPanel,{
						region:"east",
						width:200,
						draggable:{
							insertProxy:false,
							onDrag:function(_){
								var $=this.proxy.getEl();
								this.x=$.getLeft(true);
								this.y=$.getTop(true)},
								endDrag:function(C){
									var B=this.x,
									$=this.y,
									A=this.panel.propertyManager,
									_=Ext.getBody().getViewSize();
									if(B<_.width-200)
										if($>_.height-200)
											A.changePropertyStatus("bottom");
										else A.changePropertyStatus("max")}},
										getStatusName:function(){return"right"}});
// =====================================================================================
// 属性管理器
Ext.ns("App.property");
App.property.PropertyManager=Ext.extend(Object,{
					constructor:function(){
						this.bottomPanel=new App.property.BottomPanel();
						this.bottomPanel.setPropertyManager(this);
						this.rightPanel=new App.property.RightPanel();
						this.rightPanel.setPropertyManager(this);
						this.maxWindow=new App.property.MaxWindow();
						this.maxWindow.setPropertyManager(this);
						var	$=Cookies.get("_gef_jbpm4_property_status");
						if($!="bottom")$="right";
						this.changePropertyStatus($);
						this.initMap()},
					changePropertyStatus:function($){
							try{
								$=$?$:"right";
								Cookies.set("_gef_jbpm4_property_status",$);
								switch($){
									case"right":this.current=this.rightPanel;
										this.current.show();
										if(this.form)this.form.decorate(this.current.getTabPanel(),this.model);
										this.maxWindow.hide();
										this.bottomPanel.hide();
										if(this.rightPanel.ownerCt)this.rightPanel.ownerCt.doLayout();
									break;
									case"bottom":this.current=this.bottomPanel;
									this.current.show();
									if(this.form)this.form.decorate(this.current.getTabPanel(),this.model);
									this.maxWindow.hide();
									this.rightPanel.hide();
									if(this.rightPanel.ownerCt)this.rightPanel.ownerCt.doLayout();
									break;case"max":this.maxWindow.setRestore(this.current);
									this.current=this.maxWindow;
									this.current.show();
									if(this.form)this.form.decorate(this.current.getTabPanel(),this.model);
									this.bottomPanel.hide();
									this.rightPanel.hide();
									if(this.rightPanel.ownerCt)this.rightPanel.ownerCt.doLayout();break}}catch(_){Gef.error(_)}},
					getBottom:function(){return this.bottomPanel},
					getRight:function(){return this.rightPanel},
					getMax:function(){return	this.max},
					getCurrent:function(){return this.current},
					getSelectionListener:function(){return this.selectionListener},
					initMap:function(){
									this.formMap={
											process:App.form.ProcessForm,
											start:App.form.StartForm,
											end:App.form.EndForm,
											cancel:App.form.CancelForm,
											error:App.form.ErrorForm,
											state:App.form.StateForm,
											task:App.form.TaskForm,
											decision:App.form.DecisionForm,
											fork:App.form.ForkForm,
											join:App.form.JoinForm,
											java:App.form.JavaForm,
											script:App.form.ScriptForm,
											hql:App.form.HqlForm,
											sql:App.form.SqlForm,
											mail:App.form.MailForm,
											stage:App.form.StageForm,
											custom:App.form.CustomForm,
											subProcess:App.form.SubProcessForm,
											transition:App.form.TransitionForm,
											jms:App.form.JmsForm,
											ruleDecision:App.form.RuleDecisionForm,
											rules:App.form.RulesForm,
											auto:App.form.AutoForm,
											countersign:App.form.CounterSignForm}},
					updateForm:function($){
									this.model=$;
									this.form=new this.formMap[$.getType()]();
									this.form.decorate(this.current.getTabPanel(),$)},
					initSelectionListener:function(_){
								this.selectionListener=new Gef.jbpm4.ExtSelectionListener(this);
								_.addSelectionListener(this.selectionListener);
								this.selectionListener.setEditor(_);
								var $=this.selectionListener.getModel();
								this.updateForm($)}});
								var Cookies={};
								Cookies.set=function(E,_){
									var	C=arguments,
									F=arguments.length,
									D=(F>2)?C[2]:null,
									B=(F>3)?C[3]:"/",
									A=(F>4)?C[4]:null,
									$=(F>5)?C[5]:false;
									document.cookie=E+"="+escape(_)+((D==null)?"":("; expires="+D.toGMTString()))+((B==null)?"":("; path="+B))+((A==null)?"":("; domain="+A))+(($==true)?"; secure":"")};
									Cookies.get=function(B){
										var	_=B+"=",D=_.length,C=document.cookie.length,$=0,A=0;
										while($<C){
											A=$+D;
											if(document.cookie.substring($,A)==_)
												return Cookies.getCookieVal(A);
											$=document.cookie.indexOf(" ",$)+1;
											if($==0)break}return null};
								Cookies.clear=function($){
									if(Cookies.get($))
										document.cookie=$+"="+"; " +"expires=Thu, 01-Jan-70 00:00:01 GMT"};
										Cookies.getCookieVal=function(_){var $=document.cookie.indexOf(";",_);
										if($==-1)$=document.cookie.length;
										return unescape(document.cookie.substring(_,$))
										}