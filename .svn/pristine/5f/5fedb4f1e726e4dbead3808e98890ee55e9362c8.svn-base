/**
 * 加水值班人员pop
 * @param dictName 加水值班人员
 */
function retWaterDutyPop(dictName){
	art.dialog.open('/bscp/dict.do?action=waterDutyPop',{
		id : 'waterDutyPop',
		width : 300,
		height : 600,
		title : '加水值班人员pop',
		close : function() {
		    //获取返回的值
			var retData = art.dialog.data("retData");
			//栏位赋值
			if(retData){
				if(dictName){
					$("#"+dictName).val(retData.dictName);
				}
			}
			//删除art.dialog缓存
			art.dialog.removeData('retData');
		}
	});
}