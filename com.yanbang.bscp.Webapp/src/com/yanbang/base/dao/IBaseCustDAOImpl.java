package com.yanbang.base.dao;

import java.util.Collection;
import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.base.entity.BaseCust;
import com.yanbang.base.entity.BaseCustAccount;
import com.yanbang.base.entity.BaseCustContactsinfo;
import com.yanbang.base.entity.BaseCustEnterprisetype;
import com.yanbang.base.entity.BaseCustReceivinfo;
import com.yanbang.base.entity.BaseIndustry;
import com.yanbang.base.entity.BaseRegion;
import com.yanbang.dao.BaseDAO;
import com.yanbang.page.Page;
import com.yanbang.util.AssertUtil;
import com.yanbang.util.ConstantMethod;

@Repository
@Transactional
public class IBaseCustDAOImpl extends BaseDAO implements IBaseCustDAO {

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public BaseCust findByPk(String uuid) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("select * from CRM_CUST where CRM_CUST_ID='" + uuid + "'")
				.append(" and useFlag='" + ConstantMethod.FLAG_1
						+ "' order by CREATED_TIME_ZONE");
		return this.getJdbcTemplate().queryForObject(strSQL.toString(),
				new BeanPropertyRowMapper(BaseCust.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<BaseCust> findAll() {
		String strSQL = "select * from BAS_REGION";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(BaseRegion.class));

	}

	@SuppressWarnings({ "deprecation", "unchecked", "rawtypes" })
	@Override
	public Page<BaseCust> findAllSysJob(BaseCust sysJob, Page<BaseCust> page) {
		/*
		 * String strSQL =
		 * "select * from BAS_INDUSTRY order by industry_Code asc"; String
		 * strCountSQL = "select count(*) from BAS_INDUSTRY ";
		 * page.paginationProcess
		 * (this.getJdbcTemplate().queryForLong(strCountSQL)); String
		 * paginationSQL = page.getPaginationSQL(strSQL); List<BaseIndustry>
		 * menulist = this.getJdbcTemplate().query(paginationSQL, new
		 * BeanPropertyRowMapper(BaseIndustry.class));
		 * page.setPageResult(menulist); return page;
		 */

		String strSQL = "select * from CRM_CUST where 1=1 "
				+ this.createCondition(sysJob);
		String strCountSQL = "select count(*) from CRM_CUST where 1=1 "
				+ this.createCondition(sysJob);
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		List<BaseCust> list = this.getJdbcTemplate().query(paginationSQL,
				new BeanPropertyRowMapper(BaseCust.class));
		page.setPageResult(list);
		return page;
	}

	/**
	 * 客户页面查询条件sql
	 * 
	 * @param sysJbo
	 * @return
	 */
	private String createCondition(BaseCust sysJob) {
		StringBuffer condition = new StringBuffer(" and  useflag='"
				+ ConstantMethod.FLAG_1 + "'");
		condition.append(" and DEL_FLAG = '").append(ConstantMethod.FLAG_0)
				.append("'");
		// 若无组织机构id，则不查询职位
		// System.out.print("sysJob"+sysJob.getParentId());
		if (AssertUtil.isVal(sysJob.getState_code())) {
			condition.append(" and STATE_CODE = '")
					.append(sysJob.getState_code()).append("'");
		}else if(AssertUtil.isVal(sysJob.getCity_code())){
			condition.append(" and CITY_CODE = '")
			.append(sysJob.getCity_code()).append("'");
		}else if(AssertUtil.isVal(sysJob.getRegion_code())){
			condition.append(" and REGION_CODE = '")
			.append(sysJob.getRegion_code()).append("'");
			
		}else if(AssertUtil.isVal(sysJob.getCust_type())){
			condition.append(" and CUST_TYPE = '")
			.append(sysJob.getCust_type()).append("'");
		}else if(AssertUtil.isVal(sysJob.getCust_name())){
			condition.append(" and CUST_NAME like'%")
			.append(sysJob.getCust_name()).append("%'");
		}else {
			// condition.append(" and parentId is null");
			condition.append(" and 1=2");
			return condition.toString();
		}
		/*
		 * if (AssertUtil.isVal(sysJob.getIndustry_code())) {
		 * condition.append(" and industry_code like'%")
		 * .append(sysJob.getIndustry_code()).append("%'"); } if
		 * (AssertUtil.isVal(sysJob.getIndustry_name())) {
		 * condition.append(" and industry_name like '%")
		 * .append(sysJob.getIndustry_name()).append("%'"); }
		 */
		//condition.append(" order by audit_date asc");
		return condition.toString();
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<BaseCust> findAllByFlag() {
		String strSQL = "select * from BAS_REGION where useFlag='"
				+ ConstantMethod.FLAG_1 + "'";
		// String strSQL = "select * from BAS_REGION";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(BaseRegion.class));
	}


	@Override
	public void delByPk(String crm_cust_id) {

		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update CRM_CUST set del_flag='")
				.append(ConstantMethod.FLAG_1).append("' where crm_cust_id='")
				.append(crm_cust_id).append("'");
		System.out.print(strSQL);
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@Override
	public void delByPk(String crm_cust_id, String updateUser, String updateTime) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update CRM_CUST set del_Flag='")
				.append(ConstantMethod.FLAG_1).append("',updated_by_user='")
				.append(updateUser).append("',updated_time_zone='")
				.append(updateTime).append("' where crm_cust_id='")
				.append(crm_cust_id).append("'");
		System.out.print(strSQL);
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@SuppressWarnings({ "deprecation", "unchecked", "rawtypes" })
	@Override
	public Page<BaseCustReceivinfo> findAllReceivinfo(
			BaseCustReceivinfo receivinfo, Page<BaseCustReceivinfo> page) {
		String strSQL = "select * from CRM_CUST_RECEIVINFO where 1=1 "
				+ this.createReceivinfo(receivinfo);
		String strCountSQL = "select count(*) from CRM_CUST_RECEIVINFO where 1=1 "
				+ this.createReceivinfo(receivinfo);
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		System.out.println(strSQL);
		List<BaseCustReceivinfo> list = this.getJdbcTemplate().query(
				paginationSQL,
				new BeanPropertyRowMapper(BaseCustReceivinfo.class));
		page.setPageResult(list);
		return page;
	}

	/**
	 * 收货人页面查询条件sql
	 * 
	 * @param sysJbo
	 * @return
	 */
	private String createReceivinfo(BaseCustReceivinfo receivinfo) {
		StringBuffer condition = new StringBuffer(" and  useflag='"
				+ ConstantMethod.FLAG_1 + "'");
		condition.append(" and del_flag = '").append(ConstantMethod.FLAG_0)
				.append("'").append(" and crm_cust_id = '").append(receivinfo.getCrm_cust_id())
				.append("'");
		return condition.toString();
	}

	@SuppressWarnings({ "deprecation", "unchecked", "rawtypes" })
	@Override
	public Page<BaseCustContactsinfo> findAllContactsinfo(
			BaseCustContactsinfo contactsinfo, Page<BaseCustContactsinfo> page) {
		String strSQL = "select * from CRM_CUST_CONTACTSINFO where 1=1 "
				+ this.createContactsinfo(contactsinfo);
		String strCountSQL = "select count(*) from CRM_CUST_CONTACTSINFO where 1=1 "
				+ this.createContactsinfo(contactsinfo);
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		System.out.println(strSQL);
		List<BaseCustContactsinfo> list = this.getJdbcTemplate().query(
				paginationSQL,
				new BeanPropertyRowMapper(BaseCustContactsinfo.class));
		page.setPageResult(list);
		return page;
	}

	/**
	 * 联系人页面查询条件sql
	 * 
	 * @param sysJbo
	 * @return
	 */
	private String createContactsinfo(BaseCustContactsinfo receivinfo) {
		StringBuffer condition = new StringBuffer(" and  useflag='"
				+ ConstantMethod.FLAG_1 + "'");
		condition.append(" and del_flag = '").append(ConstantMethod.FLAG_0)
				.append("'").append(" and crm_cust_id = '").append(receivinfo.getCrm_cust_id())
				.append("'");
		return condition.toString();
	}

	@SuppressWarnings({ "deprecation", "unchecked", "rawtypes" })
	@Override
	public Page<BaseCustAccount> findAllAccount(BaseCustAccount account,
			Page<BaseCustAccount> page) {
		// TODO Auto-generated method stub
		String strSQL = "select * from CRM_CUST_ACCOUNT where 1=1 "
				+ this.createAccount(account);
		String strCountSQL = "select count(*) from CRM_CUST_ACCOUNT where 1=1 "
				+ this.createAccount(account);
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		System.out.println(strSQL);
		List<BaseCustAccount> list = this.getJdbcTemplate()
				.query(paginationSQL,
						new BeanPropertyRowMapper(BaseCustAccount.class));
		page.setPageResult(list);
		return page;
	}

	/**
	 * 二级账号页面查询条件sql
	 * 
	 * @param sysJbo
	 * @return
	 */
	private String createAccount(BaseCustAccount account) {
		StringBuffer condition = new StringBuffer(" and  useflag='"
				+ ConstantMethod.FLAG_1 + "'");
		condition.append(" and del_flag = '").append(ConstantMethod.FLAG_0)
				.append("'").append(" and crm_cust_id = '").append(account.getCrm_cust_id())
				.append("'");
		return condition.toString();
	}

	@Override
	public void insByCust(BaseCust cust) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append(
				"insert into CRM_CUST ("
				+ "CRM_CUST_ID,"
				+ "CUST_CODE,"
				+ "CUST_NAME,"
				+ "CUST_NAME_EN,"
				+ "USEFLAG,"
				+ "MEMO,"
				+ "CUST_ADDR_EN,"
				+ "CUST_ALIAS,"
				+ "RELATE_INDUSTRY,"
				+ "CUST_DESCRIPTION,"
				+ "REG_CAPITAL,"
				+ "ESTABLISH_DATE,"
				+ "IC_REG_CODE,"
				+ "CUST_PRO,"
				+ "CUST_TYPE,"
				+ "CUST_GROUP,"
				+ "CUST_PRIMARYBUSINESS,"
				+ "DEL_FLAG,"
				+ "COUNTRY_CODE,"
				+ "STATE_CODE,CITY_CODE,"
				+ "REGION_CODE,"
				+ "CREATED_TIME_ZONE,"
				+ "IS_BUY,"
				+ "IS_SALE,"
				+ "IS_LOGISTICS,"
				+ "CREATED_BY_USER,"
				+ "LEGAL_REPRESENTATIVE,"
				+ "FAX_NO,"
				+ "ORG_CODE,"
				+ "CUST_ADDR_CN) values('")
				.append(cust.getCrm_cust_id()).append("','")
				.append(cust.getCust_code()).append("','")
				.append(cust.getCust_name()).append("','")
				.append(cust.getCust_name_en()).append("','")
				.append(cust.getUseflag()).append("','")
				.append(cust.getMemo()).append("','")
				.append(cust.getCust_addr_en()).append("','")
				.append(cust.getCust_alias()).append("','")
				.append(cust.getRelate_industry()).append("','")
				.append(cust.getCust_description()).append("','")
				.append(cust.getReg_capital()).append("','")
				.append(cust.getEstablish_date()).append("','")
				.append(cust.getIc_reg_code()).append("','")
				.append(cust.getCust_pro()).append("','")
				.append(cust.getCust_type()).append("','")
				.append(cust.getCust_group()).append("','")
				.append(cust.getCust_primarybusiness()).append("','")
				.append(cust.getDel_flag()).append("','")
				.append(cust.getCountry_code()).append("','")
				.append(cust.getState_code()).append("','")
				.append(cust.getCity_code()).append("','")
				.append(cust.getRegion_code()).append("','")
				.append(cust.getCreated_time_zone()).append("','")
				.append(cust.getIs_buy()).append("','")
				.append(cust.getIs_sale()).append("','")
				.append(cust.getIs_logistics()).append("','")
				.append(cust.getCreated_by_user()).append("','")
				.append(cust.getLegal_representative()).append("','")
				.append(cust.getFax_no()).append("','")
				.append(cust.getOrg_code()).append("','")
				.append(cust.getCust_addr_cn()).append("')");
		System.out.print("添加客户"+strSQL.toString());
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@Override
	public void insByCustRece(BaseCustReceivinfo receivinfo) {
		// TODO Auto-generated method stub
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append(
				"insert into CRM_CUST_RECEIVINFO ("
				+ "CRM_CUST_RECEIVINFO_ID,"
				+ "RECEIVE_NAME,"
				+ "RECEIVE_IDCARD,"
				+ "RECEIVE_PHONE,"
				+ "RECEIVE_MOBILE,"
				+ "RECEIVE_ADDR,"
				+ "CRM_CUST_ID,"
				+ "CREATED_BY_USER,"
				+ "CREATED_TIME_ZONE,"
				+ "del_flag,"
				+ "USEFLAG,"
				+ "RECEIVE_ADDR_DETAIL"
				+ ") values('")
				.append(receivinfo.getCrm_cust_receivinfo_id()).append("','")
				.append(receivinfo.getReceive_name()).append("','")
				.append(receivinfo.getReceive_idcard()).append("','")
				.append(receivinfo.getReceive_phone()).append("','")
				.append(receivinfo.getReceive_mobile()).append("','")
				.append(receivinfo.getReceive_addr()).append("','")
				.append(receivinfo.getCrm_cust_id()).append("','")
				.append(receivinfo.getCreated_by_user()).append("','")
				.append(receivinfo.getCreated_time_zone()).append("','")
				.append(receivinfo.getDel_flag()).append("','")
				.append(receivinfo.getUseflag()).append("','")
				.append(receivinfo.getReceive_addr_detail()).append("')");
		System.out.println(strSQL.toString());
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@Override
	public void insByCustCon(BaseCustContactsinfo contactsinfo) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append(
				"insert into CRM_CUST_CONTACTSINFO (CRM_CUST_CONTACTSINFO_ID,LINKMAN,POSITION,MOBILEPHONE,TEL,EMAIL,CRM_CUST_ID,USEFLAG,DEL_FLAG,CREATED_BY_USER,CREATED_TIME_ZONE,FAX) values('")
				.append(contactsinfo.getCrm_cust_contactsinfo_id())
				.append("','").append(contactsinfo.getLinkman()).append("','")
				.append(contactsinfo.getPosition()).append("','")
				.append(contactsinfo.getMobilephone()).append("','")
				.append(contactsinfo.getTel()).append("','")
				.append(contactsinfo.getEmail()).append("','")
				.append(contactsinfo.getCrm_cust_id()).append("','")
				.append(contactsinfo.getUseflag()).append("','")
				.append(contactsinfo.getDel_flag()).append("','")
				.append(contactsinfo.getCreated_by_user()).append("','")
				.append(contactsinfo.getCreated_time_zone()).append("','")
				.append(contactsinfo.getFax()).append("')");
		System.out.print(strSQL.toString());
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@Override
	public void insByCustAcc(BaseCustAccount account) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append(
				"insert into CRM_CUST_ACCOUNT (crm_cust_account_id,cust_account_name,CUST_ACCOUNT_NO,CRM_CUST_ID,CREATED_BY_USER,CREATED_TIME_ZONE,del_flag,USEFLAG,MEMO) values('")
				.append(account.getCrm_cust_account_id()).append("','")
				.append(account.getCust_account_name()).append("','")
				.append(account.getCust_account_no()).append("','")
				.append(account.getCrm_cust_id()).append("','")
				.append(account.getCreated_by_user()).append("','")
				.append(account.getCreated_time_zone()).append("','")
				.append(account.getDel_flag()).append("','")
				.append(account.getUseflag()).append("','")
				.append(account.getMemo()).append("')");
		System.out.print(strSQL.toString());
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<BaseRegion> getRegionByParentID(String PId) {
		String strSQL = "select * from BAS_REGION where parentId='" + PId + "'";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(BaseRegion.class));

	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<BaseCustEnterprisetype> getEnterprisetype() {
		String strSQL = "select * from BAS_ENTERPRISETYPE";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(BaseCustEnterprisetype.class));
	}

	@Override
	public void updByCust(BaseCust cust) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update CRM_CUST set ")
				.append("CUST_CODE='" + cust.getCust_code())
				.append("',CUST_NAME='" + cust.getCust_name())
				.append("',CUST_NAME_EN='" + cust.getCust_name_en())
				.append("',MEMO='" + cust.getMemo())
				.append("',CUST_ADDR_EN='" + cust.getCust_addr_en())
				.append("',CUST_ALIAS='" + cust.getCust_alias())
				.append("',RELATE_INDUSTRY='" + cust.getRelate_industry())
				.append("',CUST_DESCRIPTION='" + cust.getCust_description())
				.append("',REG_CAPITAL='" + cust.getReg_capital())
				.append("',ESTABLISH_DATE='" + cust.getEstablish_date())
				.append("',IC_REG_CODE='" + cust.getIc_reg_code())
				.append("',CUST_PRO='" + cust.getCust_pro())
				.append("',CUST_TYPE='" + cust.getCust_type())
				.append("',CUST_GROUP='" + cust.getCust_group())
				.append("',CUST_PRIMARYBUSINESS='"
						+ cust.getCust_primarybusiness())
				.append("',COUNTRY_CODE='" + cust.getCountry_code())
				.append("',STATE_CODE='" + cust.getState_code())
				.append("',CITY_CODE='" + cust.getCity_code())
				.append("',REGION_CODE='" + cust.getRegion_code())
				.append("',CUST_ADDR_CN='" + cust.getCust_addr_cn())
				.append("',IS_BUY='" + cust.getIs_buy())
				.append("',IS_SALE='" + cust.getIs_sale())
				.append("',IS_LOGISTICS='" + cust.getIs_logistics())
				.append("',LEGAL_REPRESENTATIVE='" + cust.getLegal_representative())
				.append("',FAX_NO='" + cust.getFax_no())
				.append("',ORG_CODE='" + cust.getOrg_code())
				.append("' where CRM_CUST_ID='" + cust.getCrm_cust_id() + "'");
		System.out.print("编辑客户"+strSQL.toString());
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@Override
	public void delContactsinfoByPk(String uuid, String updateUser,
			String updateTime) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update CRM_CUST_CONTACTSINFO set DEL_FLAG='")
				.append(ConstantMethod.FLAG_1).append("',updated_by_user='")
				.append(updateUser).append("',updated_time_zone='")
				.append(updateTime).append("' where crm_cust_contactsinfo_id='")
				.append(uuid).append("'");
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@Override
	public void delReceivinfoByPk(String uuid, String updateUser,
			String updateTime) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update CRM_CUST_RECEIVINFO set DEL_FLAG='")
				.append(ConstantMethod.FLAG_1).append("',UPDATED_BY_USER='")
				.append(updateUser).append("',UPDATED_TIME_ZONE='")
				.append(updateTime).append("' where CRM_CUST_RECEIVINFO_ID='")
				.append(uuid).append("'");
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@Override
	public void delAccountByPk(String uuid, String updateUser, String updateTime) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update CRM_CUST_ACCOUNT set DEL_FLAG='")
				.append(ConstantMethod.FLAG_1).append("',UPDATED_BY_USER='")
				.append(updateUser).append("',UPDATED_TIME_ZONE='")
				.append(updateTime).append("' where CRM_CUST_ACCOUNT_ID='")
				.append(uuid).append("'");
		this.getJdbcTemplate().update(strSQL.toString());
		
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public BaseCustContactsinfo findContactsinfoByPk(String uuid) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append(
				"select * from CRM_CUST_CONTACTSINFO where CRM_CUST_CONTACTSINFO_ID='"
						+ uuid + "'").append(
				" and useflag='" + ConstantMethod.FLAG_1 + "'");
		System.out.print(strSQL.toString());
		return this.getJdbcTemplate().queryForObject(strSQL.toString(),
				new BeanPropertyRowMapper(BaseCustContactsinfo.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public BaseCustReceivinfo findReceivinfoByPk(String uuid) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append(
				"select * from CRM_CUST_RECEIVINFO where CRM_CUST_RECEIVINFO_ID='"
						+ uuid + "'").append(
				" and useflag='" + ConstantMethod.FLAG_1 + "'");
		System.out.print(strSQL.toString());
		return this.getJdbcTemplate().queryForObject(strSQL.toString(),
				new BeanPropertyRowMapper(BaseCustReceivinfo.class));
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public BaseCustAccount findAccountByPk(String uuid) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append(
				"select * from CRM_CUST_ACCOUNT where CRM_CUST_ACCOUNT_ID='"
						+ uuid + "'").append(
				" and useflag='" + ConstantMethod.FLAG_1 + "'");
		System.out.print(strSQL.toString());
		return this.getJdbcTemplate().queryForObject(strSQL.toString(),
				new BeanPropertyRowMapper(BaseCustAccount.class));
	}

	@Override
	public void updBySContactsinfo(BaseCustContactsinfo contactsinfo) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update CRM_CUST_CONTACTSINFO set ")
				.append("LINKMAN='" + contactsinfo.getLinkman())
				.append("',POSITION='" + contactsinfo.getPosition())
				.append("',MOBILEPHONE='" + contactsinfo.getMobilephone())
				.append("',TEL='" + contactsinfo.getTel())
				.append("',FAX='" + contactsinfo.getFax())
				.append("',EMAIL='" + contactsinfo.getEmail())
				.append("' where CRM_CUST_CONTACTSINFO_ID='" + contactsinfo.getCrm_cust_contactsinfo_id() + "'");
		this.getJdbcTemplate().update(strSQL.toString());
		
	}

	@Override
	public void updByReceivinfo(BaseCustReceivinfo receivinfo) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update CRM_CUST_RECEIVINFO set ")
				.append("RECEIVE_NAME='" + receivinfo.getReceive_name())
				.append("',RECEIVE_IDCARD='" + receivinfo.getReceive_idcard())
				.append("',RECEIVE_PHONE='" + receivinfo.getReceive_phone())
				.append("',RECEIVE_MOBILE='" + receivinfo.getReceive_mobile())
				.append("',RECEIVE_ADDR='" + receivinfo.getReceive_addr())
				.append("',RECEIVE_ADDR_DETAIL='" + receivinfo.getReceive_addr_detail())
				.append("' where CRM_CUST_RECEIVINFO_ID='" + receivinfo.getCrm_cust_receivinfo_id() + "'");
		this.getJdbcTemplate().update(strSQL.toString());
		
	}

	@Override
	public void updByAccount(BaseCustAccount account) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update CRM_CUST_ACCOUNT set ")
				.append("CUST_ACCOUNT_NAME='" + account.getCust_account_name())
				.append("',CUST_ACCOUNT_NO='" + account.getCust_account_no())
				.append("',MEMO='" + account.getMemo())
				.append("' where CRM_CUST_ACCOUNT_ID='" + account.getCrm_cust_account_id() + "'");
		this.getJdbcTemplate().update(strSQL.toString());
		
	}
}
