package com.yanbang.util;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections.map.ListOrderedMap;

import com.yanbang.config.entity.SysDict;

/**
 * 常量方法
 * 
 * @author lijie
 * 
 */
public class ConstantMethod {
    /**
     * 海关接口开关(true：开启；false：关闭)
     */
	 public static  final Boolean INTHGFLAG=true;
	 
	 /**
	  * 通过map转换
	  * @param map
	  * @return
	  */
	 public static final List<SysDict> getSysDictList(Map<String,String> map){
	    	List<SysDict> list = new ArrayList<SysDict>();
	    	for(Map.Entry<String, String> entry : map.entrySet()){
	    		SysDict sysDict = new SysDict();
	        	sysDict.setDictKey(entry.getKey());
	            sysDict.setDictName(entry.getValue());
	    		list.add(sysDict);
	    	}
	    	return list;
	 }
	 
	 /*s*****************鑫和鑫丰*****************************/	
	/**
	 * 鑫丰集团ID（组织机构）
	 */
	 public static final String XFJTID="3b87d34279344945aa275984996f191e";
    /**
     * 鑫和码头公司id（组织机构）
     */
	 public static  final String XHMTID="8bc8dacc5ea64008b76f96f4c99a0c34";
    /**
     * 默认密码
     */
	 public static final String DEFAULTPWD="123456";
	 /**
	  * 珠海港鑫和码头 987uytrewqasdfghjkloiuytrewqawer
	  */
	 public static final String ZHGXTM="987uytrewqasdfghjkloiuytrewqawer";
	 /**
	  * 珠海高栏 67878trewqasdfghjkloiuytrewqawer
	  */
	 public static final String ZHGL="67878trewqasdfghjkloiuytrewqawer";
	 
	 /**
	  * 嘉信车队ID和名称 
	  */
	 public static final String JXCDID="34808e424dfc4691b5bd697ac0cec3a5";
	 public static final String JXCDNAME="嘉信港务";
	 /*s*****************港口费用*****************************/
	 	/**
	     * 其他(港口费用类型)
	     */
		 public static  final String OTHERID="8bc8d0005ea64008b76f96f4c99a0c34";
		 /**
		     * 其他(港口费用类型)
		     */
		public static  final String GKZXF="8bc8d0005ea69998b76f96f4c99a0c34";
		 /**
	     * feeCode(港口费用类型（港口装卸费）)
	     */
	public static  final String GKZXFCODE="A005";
	 /**
     * feeCode(港口费用类型（港口装卸费）)
     */
	public static  final String OTHERCODE="A099";
	  /**
     * 港口费
     * return map
     */
    public static final Map<String,String> getFeeTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(GKZXFCODE, "港口装卸费");
    	map.put(OTHERCODE, "其他");
    	return map;
    }
    /**
     * 港口费list
     * @return list
     */
    public static final List<SysDict> getFeeTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map = getFeeTypeMap();
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
	/*s*****************有效标示*****************************/
	/**
	 * 无效
	 */
    public static final String FLAG_0="0";
    /**
     * 有效
     */
    public static final String FLAG_1="1";
    /**
     * 全部(用于查询)
     */
    public static final String FLAG_2="2";
    /**
     * 标识状态
     * return map
     */
    public static final Map<String,String> getUseFlagMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(FLAG_0, "无效");
    	map.put(FLAG_1, "有效");
    	map.put(FLAG_2, "全部");
    	return map;
    }
    /**
     * 标识状态list
     * @return list
     */
    public static final List<SysDict> getUseFlagList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map = getUseFlagMap();
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e**********************************************/
    
	/*s*****************状态标示*****************************/
	/**
	 * A
	 */
    public static final String FLAG_A="A";
    /**
     * B
     */
    public static final String FLAG_B="B";
    /**
     * C
     */
    public static final String FLAG_C="C";
    /**
     * D
     */
    public static final String FLAG_D="D";
    /*e**********************************************/
    
    /*s*****************作业班别*****************************/
	 /**
	 * 作业工班
	 * 一班,二班，三班
	 */
   public static final String TASKORG_A1="A1";
   public static final String TASKORG_A2="A2";
   public static final String TASKORG_A3="A3";
   /**
    * 装卸班组
    * return map
    */
   public static final Map<String,String> getTaskOrgMap(){
   	@SuppressWarnings("unchecked")
	Map<String,String> map=ListOrderedMap.decorate(new HashMap<String,String>());
   	map.put(TASKORG_A1, "一班");
   	map.put(TASKORG_A2, "二班");
   	map.put(TASKORG_A3, "三班");
   	return map;
   }
   /*s*****************作业班组*****************************/
   public static final String TASKORG_1="1";
   public static final String TASKORG_2="2";
   public static final String TASKORG_3="3";
   /**
    * 加水班组
    * return map
    */
   public static final Map<String,String> getTaskWaterOrgMap(){
   	@SuppressWarnings("unchecked")
	Map<String,String> map=ListOrderedMap.decorate(new HashMap<String,String>());
   	map.put(TASKORG_1, "一班");
   	map.put(TASKORG_2, "二班");
   	map.put(TASKORG_3, "三班");
   	return map;
   }
    /*s*****************作业票类型*****************************/
    /**
     * 作业票类型map
     * return map
     */
    public static final Map<String,String> getTicketTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(FLAG_A, "合同");
    	map.put(FLAG_B, "台班");
    	map.put(FLAG_C, "杂项");
    	return map;
    }
    /**
     * 作业票类型list
     * @return list
     */
    public static final List<SysDict> getTicketTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map = getTicketTypeMap();
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e*********************************************/
    
    /*s*****************作业票录入状态*****************************/
    /**
     * 作业票录入状态map
     * return map
     */
    public static final Map<String,String> getTicketFlagMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put("0", "待理货录入");
    	map.put("1", "待理货确认");
    	map.put("2", "已理货确认");
    	map.put("5", "已实绩确认");
    	return map;
    }
    /**
     * 作业票录入状态list
     * @return list
     */
    public static final List<SysDict> getTicketFlagList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map = getTicketFlagMap();
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e*********************************************/
    
    /*s*****************作业票装卸出勤班别类型*****************************/
    /**
     * 作业票装卸出勤班别类型map
     * return map
     */
    public static final Map<String,String> getHandlingTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(FLAG_A, "白班");
    	//map.put(FLAG_B, "中班");
    	map.put(FLAG_C, "晚班");
    	return map;
    }
    /**
     * 作业票装卸出勤班别类型list
     * @return list
     */
    public static final List<SysDict> getHandlingTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map = getHandlingTypeMap();
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e*********************************************/
    
    /*s*****************状态类型*****************************/
    /**
     * 未提交
     */
    public static final String STATUSFLAG_0="0";
    /**
     * 待审核
     */
    public static final String STATUSFLAG_1="1";
    /**
     * 审核中
     */
    public static final String STATUSFLAG_2="2";
    /**
     * 审核完成
     */
    public static final String STATUSFLAG_3="3";
    /**
     * 作废
     */
    public static final String STATUSFLAG_4="4";
    /*e**********************************************/
    
    /*s*****************合同类型*****************************/
    /**
     * 港口作业协议
     */
    public static final String CONTRACTTYPE_A="A";
    /**
     * 保税仓协议
     */
    public static final String CONTRACTTYPE_B="B";
    /**
     * 堆场租赁合同
     */
    public static final String CONTRACTTYPE_C="C";
    /**
     * 转运(加高)协议
     */
    public static final String CONTRACTTYPE_D="D";
    /**
     * 清仓清理合同
     */
    public static final String CONTRACTTYPE_E="E";
    /**
     * 车辆环保合同
     */
    public static final String CONTRACTTYPE_F="F";
    /**
     * 运营管理委托合同
     */
    public static final String CONTRACTTYPE_G="G";
    /**
     * 其它合同
     */
    public static final String CONTRACTTYPE_Z="Z";
    
    /**
     * 合同类型CONTRACTTYPE_A
     * return map
     */
    public static final Map<String,String> getContractTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(CONTRACTTYPE_A, "港口作业协议");
    	map.put(CONTRACTTYPE_B, "保税仓协议");
    	map.put(CONTRACTTYPE_C, "租赁合同");
    	map.put(CONTRACTTYPE_D, "转运(加高)合同");
    	map.put(CONTRACTTYPE_E, "清仓清理合同");
    	map.put(CONTRACTTYPE_F, "车辆环保合同");
    	map.put(CONTRACTTYPE_G, "运营管理委托合同");
    	map.put(CONTRACTTYPE_Z, "其它");
    	 return map;
    }
    /**
     * 合同类型
     * @return list
     */
    public static final List<SysDict> getContractTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map = getContractTypeMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e**********************************************/
   
    /*s*****************贸易类型*****************************/
    /**
     * 外贸
     */
    public static final String TRADETYPE_0="0";
    /**
     * 内贸
     */
    public static final String TRADETYPE_1="1";
    /**
     * 贸易类型map
     * return map
     */
    public static final Map<String,String> getTradeTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(TRADETYPE_0, "外贸");
    	map.put(TRADETYPE_1, "内贸");
    	 return map;
    }
    /**
     * 贸易类型list
     * @return list
     */
    public static final List<SysDict> getTradeTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getTradeTypeMap();
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e**********************************************/
    
    /*s*****************进出口类型*****************************/
    /**
     * 进口
     */
    public static final String IMPORTTYPE_0="0";
    /**
     * 出口
     */
    public static final String IMPORTTYPE_1="1";
    /**
     * 进出口类型map
     * return map
     */
    public static final Map<String,String> getImportTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(TRADETYPE_0, "进口");
    	map.put(TRADETYPE_1, "出口");
    	 return map;
    }
    /**
     * 进出口类型list
     * @return list
     */
    public static final List<SysDict> getImportTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getImportTypeMap();
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e**********************************************/
    
    /*s*****************船舶预报状态类型*****************************/
    /**
     * 未提交
     */
    public static final String YB0100="YB0100";
    /**
     * 已预报
     */
    public static final String YB0200="YB0200";
    /**
     * 抵港
     */
    public static final String YB0300="YB0300";
    /**
     * 开工
     */
    public static final String YB0310="YB0310";
    /**
     * 完工
     */
    public static final String YB0400="YB0400";
    /**
     * 离港
     */
    public static final String YB0500="YB0500";
    /**
     * 船舶预报状态类型map
     * return map
     */
    public static final Map<String,String> getForecastMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(YB0100, "未提交");
    	map.put(YB0200, "已预报");
    	map.put(YB0300, "抵港");
    	map.put(YB0310, "开工");
    	map.put(YB0400, "完工");
    	map.put(YB0500, "离港");
    	return map;
    }
    /**
     * 船舶预报状态类型list
     * @return list
     */
    public static final List<SysDict> getForecastList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getForecastMap();
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e**********************************************/
    
    /*s***************** 船舶预报 状态选择 **************/
    /**
     * （船舶预报 状态选择）1.单种状态。
     */
    public static final String BOATFORECASTPAGEFLAG_A="A";
    /**
     * （船舶预报 状态选择）1.包含状态：已预报；2.涉及页面：卸船委托书录入页面、抵港增加页面。
     */
    public static final String BOATFORECASTPAGEFLAG_B="B";
    /**
     * （船舶预报 状态选择）1.包含状态：在港；2.涉及页面：抵港登记页面。
     */
    public static final String BOATFORECASTPAGEFLAG_C="C";
    /**
     * （船舶预报 状态选择）1.包含状态：已预报、在港；2.涉及页面：抵港编辑页面。
     */
    public static final String BOATFORECASTPAGEFLAG_D="D";
    /**
     * （船舶预报 状态选择）1.包含状态：在港、开工、完工；2.涉及页面：加水签证、系解缆、杂项作业、工班水尺。
     */
    public static final String BOATFORECASTPAGEFLAG_E="E";
    /**
     * （船舶预报 状态选择）1.包含状态：>=单种状态；2.涉及页面：预报页面。
     */
    public static final String BOATFORECASTPAGEFLAG_F="F";
    /**
     * （船舶预报 状态选择）1.包含状态：已预报，在港、开工、完工；2卸船委托书
     */
    public static final String BOATFORECASTPAGEFLAG_G="G";
    /*e***************** 船舶预报 状态选择 **************/
    
    /*s*****************预报货物明细状态类型*****************************/
    /**
     * 预报
     */
    public static final String HW0100="HW0100";
    /**
     * 已办委托
     */
    public static final String HW0200="HW0200";
    /**
     * 开工
     */
    public static final String HW0300="HW0300";
    /**
     * 完货
     */
    public static final String HW0400="HW0400";
    /**
     * 清场
     */
    public static final String HW0500="HW0500";
    /**
     * 预报货物明细状态类型map
     * return map
     */
    public static final Map<String,String> getItemFinishFlagMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(HW0100, "预报");
    	map.put(HW0200, "已办委托");
    	map.put(HW0300, "开工");
    	map.put(HW0400, "完货");
    	map.put(HW0500, "清场");
    	return map;
    }
    /**
     * 预报货物明细状态类型list
     * @return list
     */
    public static final List<SysDict> getItemFinishFlagList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getItemFinishFlagMap();
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e**********************************************/
    
    /*s*****************港口属性*****************************/
    /**
     * 干散货(港口属性)
     */
    public static final String PORTPROPERTY_A="A";
    /**
     * 件杂货(港口属性)
     */
    public static final String PORTPROPERTY_B="B";  
    /*e*****************港口属性*****************************/
    
    /*s*****************车型*****************************/
    /**
     * 小车车型
     */
    public static final String CARTYPE_A="A";   
    /**
     * 中车车型
     */
    public static final String CARTYPE_B="B";   
    /**
     * 大车车型
     */
    public static final String CARTYPE_C="C";
    
    /**
     * 车辆类型map
     * @return
     */
     public static final Map<String,String> getCarInfoCarTypemap(){
     	Map<String,String> map = new HashMap<String,String>();
     	map.put(CARTYPE_A, "自卸车");
     	map.put(CARTYPE_B, "铲车");
     	map.put(CARTYPE_C, "勾机");
     	return map;
     }
     
     /**
      * 车辆类型list
      * @return
      */
     public static final List<SysDict> getCarInfoTypeList(){
     	List<SysDict> list = new ArrayList<SysDict>();
     	Map<String,String> map = getCarInfoCarTypemap();
     	
     	for(Map.Entry<String, String> entry : map.entrySet()){
     		SysDict sysDict = new SysDict();
         	sysDict.setDictKey(entry.getKey());
             sysDict.setDictName(entry.getValue());
     		list.add(sysDict);
     	}
     	return list;
     }
    /*e*****************车型*****************************/
    
    /*s*****************客户类型*****************************/
    /**
     * 货主(客户类型)
     */
    public static final String customType_A="A";
    /**
     * 货代(客户类型)
     */
    public static final String customType_B="B";
    /**
     * 船代(客户类型)
     */
    public static final String customType_C="C";
    /**
     * 船主(客户类型)
     */
    public static final String customType_D="D";
    /**
     * 商检(客户类型)
     */
    public static final String customType_E="E";
    /**
     * 边检(客户类型)
     */
    public static final String customType_F="F";
    /**
     * 海关(客户类型)
     */
    public static final String customType_G="G";
    /**
     * 海事(客户类型)
     */
    public static final String customType_H="H";
    /**
     * 银行(客户类型)
     */
    public static final String customType_I="I";
    /**
     * 其他(客户类型)
     */
    public static final String customType_Z="Z";
    
    /**
     * 客户属性map
     * @return
     */
    public static final Map<String,String> getCustomTypeMap(){
    	Map<String,String> map = new HashMap<String,String>();
    	map.put(customType_A, "货主");
    	map.put(customType_B, "货代");
    	map.put(customType_C, "船代");
    	map.put(customType_D, "船主");
    	map.put(customType_E, "商检");
    	map.put(customType_F, "边检");
    	map.put(customType_G, "海关");
    	map.put(customType_H, "海事");
    	map.put(customType_I, "银行");
    	map.put(customType_Z, "其他");   	
    	return map;
    }
    
    /**
     * 客户属性list
     * @return
     */
    public static final List<SysDict> getCustomTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map = getCustomTypeMap();
        for (Map.Entry<String, String> entry : map.entrySet()) {
        	SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
            list.add(sysDict);
        }
        return list;
    }
    /*e*****************客户类型*****************************/
    
    /*s*****************货物信息*****************************/
    /**
     * 大类(货物信息级别)
     */
    public static final String LEVEL_0="0";
    /**
     * 中类(货物信息级别)
     */
    public static final String LEVEL_1="1";  
    /**
     * 小类(货物信息级别)
     */
    public static final String LEVEL_2="2";
    
    /**
     * 货物信息级别Map
     * @return
     */
    public static final Map<String,String> getItemLevelMap(){
    	Map<String,String> map = new HashMap<String,String>();
    	map.put( LEVEL_0, "大类");
    	map.put(LEVEL_1, "中类");
    	map.put(LEVEL_2, "小类");
    	return map;
    }
    /**
     * 货物信息级别List
     * @return
     */
    public static final List<SysDict> getItemLevelList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map = getItemLevelMap();
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e*****************货物信息*****************************/
    
    /*s*****************泊位生产类型*****************************/
    /**
     * 泊位生产类型（A）
     * 
     */
    public static final String   ManuType_A="A";
    /**
     * 泊位生产类型（B）
     * 
     */
    public static final String   ManuType_B="B";
    /**
     * 泊位生产类型（C）
     * 
     */
    public static final String   ManuType_C="C";
    
    /**
     * 生产类型
     * return map
     */
    public static final Map<String,String> getManuTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(ManuType_A, "A泊位生产类型");
    	map.put(ManuType_B, "B泊位生产类型");
    	map.put(ManuType_C, "C泊位生产类型");
    	 return map;
    }
    
    /**
     * 泊位生产类型
     * @return List
     */
    public static final List<SysDict> getManuTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map = getManuTypeMap();
        for (Map.Entry<String, String> entry : map.entrySet()) {
        	SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
            list.add(sysDict);
        }
        return list;
    }
    /*e*****************泊位生产类型*****************************/
    
    /*s*****************泊位结构类型*****************************/
    /**
     * 泊位结构类型（A）
     * 
     */
    public static final String  CONTRUCTTYPE_A="A";
    /**
     * 泊位结构类型（B）
     * 
     */
    public static final String   CONTRUCTTYPE_B="B";
    /**
     * 泊位结构类型（C）
     * 
     */
    public static final String   CONTRUCTTYPE_C="C";
    
    /**
     * 结构类型
     * return map
     */
    public static final Map<String,String> getContructTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(CONTRUCTTYPE_A, "AAA泊位结构类型");
    	map.put(CONTRUCTTYPE_B, "BBB泊位结构类型");
    	map.put(CONTRUCTTYPE_C, "CCC泊位结构类型");
    	 return map;
    }
    
    /**
     * 结构类型list
     * @return
     */
    public static final List<SysDict> getContructTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map = getContructTypeMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	
    	return list;
    }
    /*e*****************泊位结构类型*****************************/
    
    /*s*****************泊位服务类型*****************************/
    /**
     * 泊位服务类型（A）
     * 
     */
    public static final String SERVICETYPE_A="A";
    /**
     * 泊位服务类型（B）
     * 
     */
    public static final String   SERVICETYPE_B="B";
    /**
     * 泊位服务类型（C）
     * 
     */
    public static final String   SERVICETYPE_C="C";
    
    /**
     * 服务类型
     * return map
     */
    public static final Map<String,String> getServiceTpyeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(SERVICETYPE_A, "AAA服务类型");
    	map.put(SERVICETYPE_B, "BBB服务类型");
    	map.put(SERVICETYPE_C, "CCC服务类型");
    	 return map;
    }
    
    
    /**
     * 服务类型list
     * @return
     */
    public static final List<SysDict> getServiceTpyeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map = getServiceTpyeMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	
    	return list;
    }
    /*e*****************泊位服务类型*****************************/
    
    /*s*****************泊位岸壁机械种类*****************************/
    /**
     * 泊位岸壁机械种类（A）
     * 
     */
    public static final String MACHTYPE_A="A";
    /**
     * 泊位岸壁机械种类（B）
     * 
     */
    public static final String MACHTYPE_B="B";
    /**
     * 泊位岸壁机械种类型（C）
     * 
     */
    public static final String MACHTYPE_C="C";
    
    /**
     * 岸壁机械种类型
     * return map
     */
    public static final Map<String,String> getMachTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(MACHTYPE_A, "AAA泊位岸壁机械种类型");
    	map.put(MACHTYPE_B, "BBB泊位岸壁机械种类型");
    	map.put(MACHTYPE_C, "CCC泊位岸壁机械种类型");
    	 return map;
    }
    
    
    /**
     * 岸壁机械种类型
     * @return list
     */
    public static final List<SysDict> getMachTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map = getMachTypeMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	
    	return list;
    }
    /*e*****************泊位岸壁机械种类*****************************/
    
    /*s*****************学历（员工表）degress**************/
    public static final String DEGRESS_A="A";// A:博士
    public static final String DEGRESS_B="B";// B 硕士
    public static final String DEGRESS_C="C";// C 本科
    public static final String DEGRESS_D="D";// D 大专
    public static final String DEGRESS_E="E";// E技工
    public static final String DEGRESS_F="F";// F初中
    public static final String DEGRESS_Z="Z";// G其他
    
    /**
     * 学历Map
     * @return
     */
    public static final Map<String,String> getSysEmployeeDegressMap(){
    	Map<String,String> map = new HashMap<String,String>();
    	map.put(DEGRESS_A, "博士");
    	map.put(DEGRESS_B, "硕士");
    	map.put(DEGRESS_C, "本科");
    	map.put(DEGRESS_D, "大专");
    	map.put(DEGRESS_E, "技工");
    	map.put(DEGRESS_F, "初中");
    	map.put(DEGRESS_Z, "其他");
    	return map;
    }
    /**
     * 学历List
     * @return
     */
    public static final List<SysDict> getSysEmployeeDegressList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map = getSysEmployeeDegressMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e***********************************************/
    
    /*s*****************（船舶信息表）船盖种类 coverType**************/
    public static final String COVERtYPE_A="A";// A:船盖种类A
    public static final String COVERtYPE_B="B";// B 船盖种类B
    public static final String COVERtYPE_C="C";// C 船盖种类C
  
    /**
     * 船盖coverType
     * return map
     */
    public static final Map<String,String> getCoverTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(COVERtYPE_A, "船盖种类A");
    	map.put(COVERtYPE_B, "船盖种类B");
    	map.put(COVERtYPE_C, "船盖种类c");
    	
    	 return map;
    }
    /**
     * 船盖类型
     * @return list
     */
    public static final List<SysDict> getCoverTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getCoverTypeMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	
    	return list;
    }
    /*e***********************************************/  
    
    /*s*****************（船舶信息表）船类型 shipType**************/
    public static final String SHIPTYPE_A="A";// A:船种类A
    public static final String SHIPTYPE_B="B";// B 船种类B
    public static final String SHIPTYPE_C="C";// C 船种类C
  
    /**
     * 船shipType
     * return map
     */
    public static final Map<String,String> getShipTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(SHIPTYPE_A, "船种类A");
    	map.put(SHIPTYPE_B, "船种类B");
    	map.put(SHIPTYPE_C, "船种类c");
    	
    	 return map;
    }
    
    /**
     * 船shipType
     * @return list
     */
    public static final List<SysDict> getShipTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getShipTypeMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	
    	return list;
    }
    /*e***********************************************/ 
    /*s*****************（合同信息）contractFlag**************/
    /**
     * 草稿
     */
    public static final String CONTRACTFLAG_0100="HT0100";
    /**
     * 退回
     */ 
    public static final String CONTRACTFLAG_0101="HT0101";
    /**
     * 已送审
     */ 
    public static final String CONTRACTFLAG_0200="HT0200";
    /**
     * 审批中
     */ 
    public static final String CONTRACTFLAG_0300="HT0300";
   
    /**
     * 完成
     */ 
    public static final String CONTRACTFLAG_0500="HT0500";
    /**
     * 作废
     */ 
    public static final String CONTRACTFLAG_0600="HT0600";
    
    /**
     * 合同信息contractFlagMap
     * return map
     */
    public static final Map<String,String> getContractFlagMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(CONTRACTFLAG_0100, "草稿");
    	map.put(CONTRACTFLAG_0200, "已送审");
    	map.put(CONTRACTFLAG_0300, "审批中·");
    	map.put(CONTRACTFLAG_0101, "退回");
    	map.put(CONTRACTFLAG_0500, "完成");
    	map.put(CONTRACTFLAG_0600, "作废");
    	 return map;
    }
    
    /**
     * 合同状态
     * @return list
     */
    public static final List<SysDict> getContractFlagList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getContractFlagMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	
    	return list;
    }
  
    /*e***********************************************/
    
    /*s*****************（合同信息）重量结算模式 settleType**************/
    /**
     * CIQ
     */
    public static final String SETTLETYPE_A="A";
    /**
     * 提单量
     */
    public static final String SETTLETYPE_B="B";
    /**
     * 第三方水尺
     */
    public static final String SETTLETYPE_C="C";
    /**
     * 地磅
     */
    public static final String SETTLETYPE_D="D";
    /**
     * 客户提供量
     */
    public static final String SETTLETYPE_E="E";
    
    /**
     * 合同信息 settleType(重量结算模式)
     * return map
     */
    public static final Map<String,String> getSettleTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(SETTLETYPE_A, "CIQ");
    	map.put(SETTLETYPE_B, "提单量");
    	map.put(SETTLETYPE_C, "第三方水尺量");
    	map.put(SETTLETYPE_D, "地磅");
    	map.put(SETTLETYPE_E, "客户提供量");
    	 return map;
    }
    
    /**
     * 合同settleType(重量结算模式)
     * @return list
     */
    public static final List<SysDict>  getSettleTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getSettleTypeMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	
    	return list;
    }
    /*e******************(合同信息）重量结算模式 settleType***************/ 
    
    
    /*e***********************************************/
    
    /*s*****************（火车预报）finishFlag状态**************/
    public static final String FINISHFALG_A="HC0100";// 未提交
    public static final String FINISHFALG_B="HC0200";// 已预报
    public static final String FINISHFALG_C="HC0300";// 完工
    
    /**
     * 火车预报状态
     * return map
     */
    public static final Map<String,String> getFinishFlagMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(FINISHFALG_A, "未提交");
    	map.put(FINISHFALG_B, "已预报");
    	map.put(FINISHFALG_C, "完工");
    	 return map;
    }
    
    /**
     * 火车预报状态
     * @return list
     */
    public static final List<SysDict>  getFinishFlagList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getFinishFlagMap();
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e******************(火车预报）***************/ 
    //预报类型（用于火车预报明细、港口作业合同）
    /**
     * 汽车
     */
    public static final String FORECASTTYPE_0 ="0";
    /**
     * 火车
     */
    public static final String FORECASTTYPE_1="1";
    /**
     * 船舶
     */
    public static final String FORECASTTYPE_2="2";
    
    /**
     * 预报类型
     * return map
     */
    public static final Map<String,String> getforecasTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(FORECASTTYPE_0, "汽车");
    	map.put(FORECASTTYPE_1, "火车");
    	map.put(FORECASTTYPE_2, "船舶");
    	return map;
    }
    
    //预报类型（用于船舶预报明细、工班、出入库、库存）
    /**
     * 汽车
     */
    public static final String FORECASTTYPE_B ="B";
    /**
     * 火车
     */
    public static final String FORECASTTYPE_C="C";
    /**
     * 船舶
     */
    public static final String FORECASTTYPE_A="A";
    
    /**
     * 预报类型
     * return map
     */
    public static final Map<String,String> getforecasTypeTwoMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(FORECASTTYPE_A, "船舶");
    	map.put(FORECASTTYPE_B, "汽车");
    	map.put(FORECASTTYPE_C, "火车");
    	return map;
    }
    /**
     * 预报类型转换
     * @param forecasType
     * @return
     */
    public static final String getforecasType(String forecasType){
    	if(FORECASTTYPE_0.equals(forecasType)){
    		return FORECASTTYPE_B;
    	}else if(FORECASTTYPE_1.equals(forecasType)){
    		return FORECASTTYPE_C;
    	}else if(FORECASTTYPE_2.equals(forecasType)){
    		return FORECASTTYPE_A;
    	}
    	return "";
    }
    
    /**
     * 火车/汽车
     * @return list
     */
    public static final List<SysDict>  getforecasTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getforecasTypeMap();
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e******************(火车/汽车）***************/ 
    /*s*****************（集港/疏港）STORETYPE状态**************/
    /**
     * 集港
     */
    public static final String STORETYPE_0 ="0";
    /**
     * 疏港
     */
    public static final String STORETYPE_1="1";
    
    /**
     * 集港/疏港
     * return map
     */
    public static final Map<String,String> getStoreTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(STORETYPE_0, "集港");
    	map.put(STORETYPE_1, "疏港");
    	return map;
    }
    
    /**
     * 集港/疏港
     * @return list
     */
    public static final List<SysDict> getStoreTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getStoreTypeMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e******************(火车/汽车）***************/ 
    /*s*****************（实绩的状态）CONFIRMFLAG状态**************/
    /**
     * 未审核
     */
    public static final String CONFIRMFLAG_0 ="0";
    /**
     * 已审核
     */
    public static final String CONFIRMFLAG_1="1";
    
    /**
     * 未审核/已审核
     * return map
     */
    public static final Map<String,String> getConfirmFlagMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(CONFIRMFLAG_0, "未审核");
    	map.put(CONFIRMFLAG_1, "已审核");
    	
    	 return map;
    }
    
    /**
     * 集港/疏港
     * @return list
     */
    public static final List<SysDict> getConfirmFlagList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getConfirmFlagMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e******************(火车/汽车）***************/ 
    /*s*****************（运输方式）transportTypeCode**************/
    /**
     * 汽车直卸（卸船理货）
     */
    public static final String TRANSPORTTYPECODE_A="A";
    /**
     * 皮带直卸（卸船理货）
     */
    public static final String TRANSPORTTYPECODE_B="B";
    /**
     * 汽车入库（卸船理货）
     */
    public static final String TRANSPORTTYPECODE_C="C";
    /**
     * 皮带入库（卸船理货）
     */
    public static final String TRANSPORTTYPECODE_D="D";
    /**
     * 汽车装船（装船理货）
     */
    public static final String TRANSPORTTYPECODE_E="E";    
    /**
     * 皮带装船（装船理货）
     */
    public static final String TRANSPORTTYPECODE_F="F";
    /**
     * 斗轮机取料（直出作业单）
     */
    public static final String TRANSPORTTYPECODE_G="G";
    /**
     * 汽车出库（直出作业单）
     */
    public static final String TRANSPORTTYPECODE_H="H";
    /**
     * 汽车送货（直出作业单）
     */
    public static final String TRANSPORTTYPECODE_I="I";
    /**
     * 皮带卸卡（火车集港）
     */
    public static final String TRANSPORTTYPECODE_J="J";
    /**
     * 汽车卸卡（火车集港）
     */
    public static final String TRANSPORTTYPECODE_K="K";
    /**
     * 皮带装卡（火车疏港）
     */
    public static final String TRANSPORTTYPECODE_L="L";
    /**
     * 汽车装卡（火车疏港）
     */
    public static final String TRANSPORTTYPECODE_M="M";
    /**
     * 汽车转场（火车疏港）
     */
    public static final String TRANSPORTTYPECODE_N="N";
    /**
     * 汽车自提（直出作业单）
     */
    public static final String TRANSPORTTYPECODE_O="O";
    /**
     * 运输方式
     * return map
     */
    public static final Map<String,String> getTransportTypeCodeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(TRANSPORTTYPECODE_A, "汽车直卸");
    	map.put(TRANSPORTTYPECODE_B, "皮带直卸");
    	map.put(TRANSPORTTYPECODE_C, "汽车入库");
    	map.put(TRANSPORTTYPECODE_D, "皮带入库");
    	map.put(TRANSPORTTYPECODE_E, "汽车装船");
    	map.put(TRANSPORTTYPECODE_F, "皮带装船");
    	map.put(TRANSPORTTYPECODE_G, "斗轮机取料");
    	map.put(TRANSPORTTYPECODE_H, "汽车出库");
    	map.put(TRANSPORTTYPECODE_I, "汽车送货");
    	map.put(TRANSPORTTYPECODE_J, "皮带卸卡");
    	map.put(TRANSPORTTYPECODE_K, "汽车卸卡");
    	map.put(TRANSPORTTYPECODE_L, "皮带装卡");
    	map.put(TRANSPORTTYPECODE_M, "汽车装卡");
    	map.put(TRANSPORTTYPECODE_N, "汽车转场");
    	map.put(TRANSPORTTYPECODE_O, "汽车自提");
    	 return map;
    }
    /**
     * 运输方式
     * @return list
     */
    public static final List<SysDict>  getTransportTypeCodeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getTransportTypeCodeMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    
    /**
     * 运输方式
     * @param code(1:卸船理货；1a：直卸；1b：入库；2：装船理货；3：直送粤钢；4：火车集港；5：汽车集港；6：火车疏港；7：汽车疏港)
     * @return
     */
    public static final Map<String,String> getTransportTypeCodeMap(String code){
    	Map<String,String> map=new HashMap<String,String>();
    	if("1".equals(code)){
    		map.put(TRANSPORTTYPECODE_A, "汽车直卸");
        	map.put(TRANSPORTTYPECODE_B, "皮带直卸");
    		map.put(TRANSPORTTYPECODE_C, "汽车入库");
        	map.put(TRANSPORTTYPECODE_D, "皮带入库");
    	}else if("1a".equals(code)){
    		map.put(TRANSPORTTYPECODE_A, "汽车直卸");
        	map.put(TRANSPORTTYPECODE_B, "皮带直卸");
    	}else if("1b".equals(code)){
    		map.put(TRANSPORTTYPECODE_C, "汽车入库");
        	map.put(TRANSPORTTYPECODE_D, "皮带入库");
    	}else if("2".equals(code)){
    		map.put(TRANSPORTTYPECODE_E, "汽车装船");
        	map.put(TRANSPORTTYPECODE_F, "皮带装船");
    	}else if("3".equals(code)){
    		map.put(TRANSPORTTYPECODE_G, "斗轮机取料");
    		map.put(TRANSPORTTYPECODE_I, "汽车送货");
    		map.put(TRANSPORTTYPECODE_O, "汽车自提");
    	}else if("4".equals(code)){
    		map.put(TRANSPORTTYPECODE_J, "皮带卸卡");
        	map.put(TRANSPORTTYPECODE_K, "汽车卸卡");
    	}
    	else if("5".equals(code)){
    		map.put(TRANSPORTTYPECODE_C, "汽车入库");
    	}else if("6".equals(code)){
    		map.put(TRANSPORTTYPECODE_L, "皮带装卡");
        	map.put(TRANSPORTTYPECODE_M, "汽车装卡");
    	}else if("7".equals(code)){
        	map.put(TRANSPORTTYPECODE_H, "汽车出库");
    	}
    	 return map;
    }
    /**
     * 运输方式
     * @return list
     */
    public static final List<SysDict>  getTransportTypeCodeList(String code){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getTransportTypeCodeMap(code);
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    
    /*s*****************作业类别*****************************/
    /**
     * 卸船(作业类别)
     */
    public static final String TASKTYPENAME_A="A";
    /**
     * 装船(作业类别)
     */
    public static final String TASKTYPENAME_B="B";
    /**
     * 装卡(作业类别-疏)
     */
    public static final String TASKTYPENAME_C="C";
    /**
     * 装汽车(作业类别-疏)
     */
    public static final String TASKTYPENAME_D="D";
    /**
     * 转堆(作业类别)
     */
    public static final String TASKTYPENAME_E="E";
    /**
     * 卸卡(作业类别-集)
     */
    public static final String TASKTYPENAME_F="F";
    /**
     * 卸汽车(作业类别-集)
     */
    public static final String TASKTYPENAME_G="G";
    /**
     * 直送粤钢(作业类别)
     */
    public static final String TASKTYPENAME_H="H";
    /**
     * 汽车送货(作业类别)
     */
    public static final String TASKTYPENAME_I="I";
    /**
     * 其他(作业类别)
     */
    public static final String TASKTYPENAME_Z="Z";
    
    /**
     * 作业类别名称Map
     * @return
     */
    public static final Map<String,String> getTaskTypeNameMap(){
    	Map<String,String> map = new HashMap<String,String>();
    	map.put(TASKTYPENAME_A, "卸船");
    	map.put(TASKTYPENAME_B, "装船");
    	map.put(TASKTYPENAME_C, "装卡");
    	map.put(TASKTYPENAME_D, "装车");
    	map.put(TASKTYPENAME_E, "转堆");
    	map.put(TASKTYPENAME_F, "卸卡");
    	map.put(TASKTYPENAME_G, "卸车");
    	map.put(TASKTYPENAME_H, "直送粤钢");
    	map.put(TASKTYPENAME_I, "汽车送货");
    	map.put(TASKTYPENAME_Z, "其他");
    	return map;
    }
    /**
     * 作业类别名称List
     * @return
     */
    public static final List<SysDict> getTaskTypeNameList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map = getTaskTypeNameMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	return list;
    }
    /*e*****************作业类别*****************************/
    
    /*s******************(重量类型)***************/ 
    public static final String WEIGHTTYPE_A="A";//皮带重量
    public static final String WEIGHTTYPE_B="B";//过磅量
    public static final String WEIGHTTYPE_C="C";//提单量
    public static final String WEIGHTTYPE_D="D";//CIQ
    public static final String WEIGHTTYPE_E="E";//轨道衡    
    public static final String WEIGHTTYPE_F="F";//水尺量
    public static final String WEIGHTTYPE_G="G";//其他 
    public static final String WEIGHTTYPE_H = "H";//装车楼
    
    /**
     * 重量类型
     * return map
     */
    public static final Map<String,String> getWeightTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
//    	map.put(WEIGHTTYPE_A, "皮带重量");
//    	map.put(WEIGHTTYPE_B, "过磅量");
    	map.put(WEIGHTTYPE_C, "提单量");
    	map.put(WEIGHTTYPE_D, "CIQ");
//    	map.put(WEIGHTTYPE_E, "轨道衡");
    	map.put(WEIGHTTYPE_F, "过磅量");
//    	map.put(WEIGHTTYPE_G, "其他");
//    	map.put(WEIGHTTYPE_H, "装车楼");
    	 return map;
    }
    /**
     * 重量类型
     * @return list
     */
    public static final List<SysDict>  getWeightTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getWeightTypeMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	
    	return list;
    }
    
    /*s*****************(计划状态)confirmFlag**************/
    /**
     * 草稿
     */
    public static final String  CONFIRMFLAG_A="PL0100";
    /**
     * 已发送
     */
    public static final String CONFIRMFLAG_B="PL0200";
    
    /**
     * 计划状态
     * return map
     */
    public static final Map<String,String> getPlanConfirmFlagMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(CONFIRMFLAG_A, "草稿");
    	map.put(CONFIRMFLAG_B, "已发送");
    	 return map;
    }
    /**
     * 计划状态
     * @return list
     */
    public static final List<SysDict>  getPlanConfirmFlagList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getPlanConfirmFlagMap();
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	
    	return list;
    }
    /*s*****************(计划状态)confirmFlag**************/
    /**
     * 草稿态
     */
    public static final String ZT0100="ZT0100";
    /**
     * 审核中
     */
    public static final String ZT0200="ZT0200";
    /**
     * 已审核
     */
    public static final String ZT0300="ZT0300";
    /**
     * 审核状态
     * return map
     */
    public static final Map<String,String> getCheckFlagMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(ZT0100, "草稿态");
    	map.put(ZT0200, "审核中");
    	map.put(ZT0300, "已审核");
    	
    	 return map;
    }
    /**
     * 审核状态
     * @return list
     */
    public static final List<SysDict>  getCheckFlagList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getCheckFlagMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	
    	return list;
    }
 
    /**
	 * 直卸
	 */
    public static final String INPUTTYPE_A="A";
    /**
     * 入库
     */
    public static final String INPUTTYPE_B="B";
    
    public static final Map<String,String> getInputTypeMap(){
    	Map<String,String> map=new HashMap<String,String>();
    	map.put(INPUTTYPE_A, "直卸");
    	map.put(INPUTTYPE_B, "入库");
    	
    	return map;
    }
    /**
     * 入库类型
     * @return list
     */
    public static final List<SysDict>  getInputTypeList(){
    	List<SysDict> list = new ArrayList<SysDict>();
    	Map<String,String> map =  getInputTypeMap();
    	
    	for(Map.Entry<String, String> entry : map.entrySet()){
    		SysDict sysDict = new SysDict();
        	sysDict.setDictKey(entry.getKey());
            sysDict.setDictName(entry.getValue());
    		list.add(sysDict);
    	}
    	
    	return list;
    }
    
       /**
   	   * 是
   	   */
       public static final String YESNO_Y="1";
       /**
        * 否
        */
       public static final String YESNO_N="0";
       
       public static final Map<String,String> getYesNoMap(){
       	Map<String,String> map=new HashMap<String,String>();
       	map.put(YESNO_Y, "是");
       	map.put(YESNO_N, "否");
       	
       	return map;
       }
       
       /**
        * 确认类型
        * @return list
        */
       public static final List<SysDict>  getYesNoList(){
       	List<SysDict> list = new ArrayList<SysDict>();
       	Map<String,String> map =  getYesNoMap();
       	
       	for(Map.Entry<String, String> entry : map.entrySet()){
       		SysDict sysDict = new SysDict();
           	sysDict.setDictKey(entry.getKey());
               sysDict.setDictName(entry.getValue());
       		list.add(sysDict);
       	}
       	
       	return list;
       }
       
       /**
        * 状态（deal 0=未办理；1=已办理）
        */
       public static final String DEAL_Y="1";
       public static final String DEAL_N="0";
       
       public static final Map<String,String> getDealZTMap(){
    	   Map<String,String> map = new HashMap<String,String>();
    	   map.put(DEAL_Y, "已办理");
    	   map.put(DEAL_N, "未办理");
    	   return map;
       }
       /**
        * 结算费用类型代码
        */
       /**
        * 加水外贸费用类型代码
        */
       public static final String Z001="Z001";
       /**
        * 加水内贸费用类型代码
        */
       public static final String Z002="Z002";
       /**
        * 靠泊外贸费用类型代码
        */
       public static final String Z003="Z003";
       /**
        * 靠泊内贸费用类型代码
        */
       public static final String Z004="Z004";
       /**
        * 靠泊外贸费用类型代码(按照元/小时)
        */
       public static final String Z005="Z005";
       /**
        * 靠泊内贸费用类型代码(按照元/天)
        */
       public static final String Z006="Z006";
       /**
        * 价格类型(0=同一价格,1=内外贸价格)
        */
       public static final String PRICETYPE_1="1";
       public static final String PRICETYPE_0="0";
       
       public static final Map<String,String> getPriceTypeMap(){
    	   Map<String,String> map = new HashMap<String,String>();
    	   map.put(PRICETYPE_0, "同一价格");
    	   map.put(PRICETYPE_1, "内外贸价格");
    	   return map;
       }
       /*s*****************(合同状态)useFlag**************/
       /**
        * 无效
        */
       public static final String USEFlag_0="0";
       /**
        * 有效
        */
       public static final String USEFlag_1="1";
       /**
        * 草稿
        */
       public static final String USEFlag_2="2";
       /**
        * 审核状态
        * return map
        */
       public static final Map<String,String> getFlagMap(){
       	Map<String,String> map=new HashMap<String,String>();
       	map.put(USEFlag_0, "无效");
       	map.put(USEFlag_1, "有效");
       	map.put(USEFlag_2, "草稿");
       	
       	 return map;
       }
       /**
        * 审核状态
        * @return list
        */
       public static final List<SysDict>  getFlagList(){
       	List<SysDict> list = new ArrayList<SysDict>();
       	Map<String,String> map =  getFlagMap();
       	
       	for(Map.Entry<String, String> entry : map.entrySet()){
       		SysDict sysDict = new SysDict();
           	sysDict.setDictKey(entry.getKey());
               sysDict.setDictName(entry.getValue());
       		list.add(sysDict);
       	}
       	
       	return list;
       }
    
       /*s*****************(卸船委托书状态)unloadshipassignflag**************/
       /**
        * 已办理
        */
       public static final String WT0100="WT0100";
       /**
        * 已开工
        */
       public static final String WT0200="WT0200";
       /**
        * 作业完毕
        */
       public static final String WT0300="WT0300";
       /**
        * 已结算
        */
       public static final String WT0400="WT0400";
       /**
        * 卸船委托书状态
        * return map
        */
       public static final Map<String,String> getUnloadShipAssignFlagMap(){
       	Map<String,String> map=new HashMap<String,String>();
       	map.put(WT0100, "已办理");
       	map.put(WT0200, "已开工");
       	map.put(WT0300, "作业完毕");
       	map.put(WT0400, "已结算");
       	return map;
       }
       
       /*s*****************(港口作业合同状态)loadshipassignflag**************/
       /**
        * 已办理
        */
       public static final String HT0100="HT0100";
       /**
        * 已开工
        */
       public static final String HT0200="HT0200";
       /**
        * 作业完毕
        */
       public static final String HT0300="HT0300";
       /**
        * 港口作业合同状态
        * return map
        */
       public static final Map<String,String> getLoadShipAssignFlagMap(){
       	Map<String,String> map=new HashMap<String,String>();
       	map.put(HT0100, "已办理");
       	map.put(HT0200, "已开工");
       	map.put(HT0300, "作业完毕");
       	return map;
       }
       /*s*****************(AB计划)planType**************/
       /**
        * 直卸钢厂
        */   
       public static final String planType_A="A";
       /**
        * ※卸货堆存(鑫和)※
        */   
       public static final String planType_B="B";
       /**
        * ※卸货同时取料※
        */   
       public static final String planType_C="C";
       /**
        * ※放行后取料※
        */   
       public static final String planType_D="D";
       /*s*****************(船舶信息)tradeCode**************/
       private static final String TRADECODE_0="0";
       private static final String TRADECODE_1="1";
       public static final Map<String,String> getBoatTradeCode(){
    	   Map<String,String> map = new HashMap<String,String>();
    	   map.put(TRADECODE_0, "远洋船");
    	   map.put(TRADECODE_1, "国内船");
    	   return map;
       }
       /*s*****************(当前状态)m_uploadFlag**************/
       /**
        *   原始数据
        */
       public static final String M_UPLOADFLAG_0="0";
       /**
        * 未上传
        */
       public static final String M_UPLOADFLAG_1="1";
       /**
        * 上传成功
        */
       public static final String M_UPLOADFLAG_2="2";
       /**
        * 上传失败
        */
       public static final String M_UPLOADFLAG_3="3";
       /**
        * 当前状态
        * return map
        */
       public static final Map<String,String> getMuploadFlagMap(){
       		Map<String,String> map=new HashMap<String,String>();
       		map.put(M_UPLOADFLAG_1, "未上传");
       		map.put(M_UPLOADFLAG_2, "上传成功");
       		map.put(M_UPLOADFLAG_3, "上传失败");
       		return map;
       }
       
       public static final Map<String,String> getMuploadFlagMap1(){
          	Map<String,String> map=new HashMap<String,String>();
        	map.put(M_UPLOADFLAG_0, "原始数据");
           	map.put(M_UPLOADFLAG_1, "未上传");
           	map.put(M_UPLOADFLAG_2, "上传成功");
           	map.put(M_UPLOADFLAG_3, "上传失败");
          	return map;
          }
       /**
        * 当前状态
        * @return list
        */
       public static final List<SysDict>  getMuploadFlagList1(){
       	List<SysDict> list = new ArrayList<SysDict>();
       	Map<String,String> map =  getMuploadFlagMap1();
       	for(Map.Entry<String, String> entry : map.entrySet()){
       		SysDict sysDict = new SysDict();
           	sysDict.setDictKey(entry.getKey());
               sysDict.setDictName(entry.getValue());
       		list.add(sysDict);
       	}
       	return list;
       }
       /**
        * 当前状态
        * @return list
        */
       public static final List<SysDict>  getMuploadFlagList(){
       	List<SysDict> list = new ArrayList<SysDict>();
       	Map<String,String> map =  getMuploadFlagMap();
       	for(Map.Entry<String, String> entry : map.entrySet()){
       		SysDict sysDict = new SysDict();
           	sysDict.setDictKey(entry.getKey());
               sysDict.setDictName(entry.getValue());
       		list.add(sysDict);
       	}
       	return list;
       }
       /*s*****************(皮带预设  动作类别)inOutFlag**************/
	   	public static final String INFBOATLAG = "1";//装船
	   	public static final String OUTBOATFLAG = "0";//卸船
	   	public static final String INFTRAINLAG = "3";//装火车
	   	public static final String OUTTRAINFLAG = "2";//卸火车
		/**
		 * 动作原因标志 return map
		 */
		public static final Map<String, String> getInOutFlagMap() {
			Map<String, String> map = new HashMap<String, String>();
			map.put(OUTBOATFLAG, "卸船");
			map.put(INFBOATLAG, "装船");
			map.put(INFTRAINLAG, "装火车");
			map.put(OUTTRAINFLAG, "卸火车");
			return map;
		}
}
