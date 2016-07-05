package com.yanbang.base.service;

import java.util.Collection;

import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.base.dao.IBaseCustDAO;
import com.yanbang.base.dao.ISysRegionDAO;
import com.yanbang.base.entity.BaseCust;
import com.yanbang.base.entity.BaseCustAccount;
import com.yanbang.base.entity.BaseCustContactsinfo;
import com.yanbang.base.entity.BaseCustEnterprisetype;
import com.yanbang.base.entity.BaseCustReceivinfo;
import com.yanbang.base.entity.BaseIndustry;
import com.yanbang.base.entity.BaseRegion;
import com.yanbang.controller.BaseController;
import com.yanbang.page.Page;
import com.yanbang.util.ConstantMethod;
import com.yanbang.util.DateUtil;
import com.yanbang.util.UtilMethod;

@Service
@Transactional
public class IBaseCustServiceImpl implements IBaseCustService {
	@Autowired
	private IBaseCustDAO sysorgdao;

	@Override
	public BaseCust findByPk(String uuid) {
		return sysorgdao.findByPk(uuid);
	}

	@Override
	public Collection<BaseCust> findAll() {
		return sysorgdao.findAll();
	}

	@Override
	public Collection<BaseCust> findAllByFlag() {
		return sysorgdao.findAllByFlag();
	}

	@Override
	public void delByPk(String uuid) {
		sysorgdao.delByPk(uuid);
	}


	@Override
	public Page<BaseCust> findAllSysJob(BaseCust sysJob, Page<BaseCust> page) {
		return sysorgdao.findAllSysJob(sysJob, page);
	}

	@Override
	public void delByPk(String crm_cust_id, String updUser) {
		sysorgdao.delByPk(crm_cust_id, updUser, DateUtil.Now());
	}

	@Override
	public Page<BaseCustReceivinfo> findAllReceivinfo(
			BaseCustReceivinfo receivinfo, Page<BaseCustReceivinfo> page) {
		// TODO Auto-generated method stub
		return sysorgdao.findAllReceivinfo(receivinfo, page);
	}

	@Override
	public Page<BaseCustContactsinfo> findAllContactsinfo(
			BaseCustContactsinfo contactsinfo, Page<BaseCustContactsinfo> page) {
		// TODO Auto-generated method stub
		return sysorgdao.findAllContactsinfo(contactsinfo, page);
	}

	@Override
	public Page<BaseCustAccount> findAllAccount(BaseCustAccount account,
			Page<BaseCustAccount> page) {
		return sysorgdao.findAllAccount(account, page);
	}

	@Override
	public void insBySysJob(BaseCust cust) {
		cust.setCrm_cust_id(UtilMethod.getUUID());
		cust.setCreated_time_zone(DateUtil.Now());
		cust.setUseflag(ConstantMethod.FLAG_1);
		cust.setDel_flag(ConstantMethod.FLAG_0);
		sysorgdao.insByCust(cust);
		insByRece(cust.getRece(),cust.getCrm_cust_id());
		insByCon(cust.getCon(),cust.getCrm_cust_id());
		insByAcc(cust.getAcc(),cust.getCrm_cust_id());
	}

	// 添加收货人
	public void insByRece(String rece,String id) {
		if("".equals(rece)||rece==null){
			System.out.println("没有添加收货人数据");
			return;
		}
		JSONArray jSONArrayRece = JSONArray.fromObject(rece);
		for (int i = 0; i < jSONArrayRece.size(); i++) {
			JSONObject obj = jSONArrayRece.getJSONObject(i);
			BaseCustReceivinfo mBaseCustReceivinfo = new BaseCustReceivinfo();
			mBaseCustReceivinfo.setCrm_cust_receivinfo_id(UtilMethod.getUUID());
			mBaseCustReceivinfo.setReceive_name(obj.getString("receive_name"));
			mBaseCustReceivinfo.setReceive_idcard(obj
					.getString("receive_idcard"));
			mBaseCustReceivinfo
					.setReceive_phone(obj.getString("receive_phone"));
			mBaseCustReceivinfo.setReceive_mobile(obj
					.getString("receive_mobile"));
			mBaseCustReceivinfo.setReceive_addr(obj.getString("receive_addr"));
			mBaseCustReceivinfo.setReceive_addr_detail(obj
					.getString("receive_addr_detail"));
			mBaseCustReceivinfo
					.setCrm_cust_id(id);
			sysorgdao.insByCustRece(mBaseCustReceivinfo);
		}
	}

	// 添加联系人
	public void insByCon(String con,String id) {
		System.out.println(con);
		if("".equals(con)||con==null){
			System.out.println("没有添加联系人数据");
			return;
		}
		JSONArray jSONArray = JSONArray.fromObject(con);
		for (int i = 0; i < jSONArray.size(); i++) {
			JSONObject obj = jSONArray.getJSONObject(i);
			BaseCustContactsinfo mBaseCustReceivinfo = new BaseCustContactsinfo();
			mBaseCustReceivinfo.setCrm_cust_contactsinfo_id(UtilMethod.getUUID());
			mBaseCustReceivinfo.setEmail(obj.getString("email"));
			mBaseCustReceivinfo.setLinkman(obj
					.getString("linkman"));
			mBaseCustReceivinfo
					.setPosition(obj.getString("position"));
			mBaseCustReceivinfo.setFax(obj
					.getString("fax"));
			mBaseCustReceivinfo.setMobilephone(obj.getString("mobilephone"));
			mBaseCustReceivinfo.setTel(obj
					.getString("tel"));
			mBaseCustReceivinfo
					.setCrm_cust_id(id);
			sysorgdao.insByCustCon(mBaseCustReceivinfo);
		}
	}

	// 添加二级账号
	public void insByAcc(String acc,String id) {
		if("".equals(acc)||acc==null){
			System.out.println("没有添加二级账号数据");
			return;
		}
		JSONArray jSONArray = JSONArray.fromObject(acc);
		for (int i = 0; i < jSONArray.size(); i++) {
			JSONObject obj = jSONArray.getJSONObject(i);
			BaseCustAccount mBaseCustAccount = new BaseCustAccount();
			mBaseCustAccount.setCrm_cust_account_id(UtilMethod.getUUID());
			mBaseCustAccount.setCust_account_name(obj.getString("cust_account_name"));
			mBaseCustAccount.setCust_account_no(obj
					.getString("cust_account_no"));
			mBaseCustAccount
					.setCrm_cust_id(id);
			sysorgdao.insByCustAcc(mBaseCustAccount);
		}
	}

	@Override
	public Collection<BaseRegion> findAllRegionByParentId(String pId) {
		// TODO Auto-generated method stub
		return sysorgdao.getRegionByParentID(pId);
	}

	@Override
	public Collection<BaseCustEnterprisetype> findAllEnterprisetype() {
		return sysorgdao.getEnterprisetype();
	}

	@Override
	public void updBySysJob(BaseCust cust) {
		//cust.setUpdated_time_zone(DateUtil.Now());
		sysorgdao.updByCust(cust);
		
	}

	@Override
	public void delContactsinfoByPk(String uuid, String updUser) {
		sysorgdao.delContactsinfoByPk(uuid, updUser, DateUtil.Now());
		
	}

	@Override
	public void delReceivinfoByPk(String uuid, String updUser) {
		sysorgdao.delReceivinfoByPk(uuid, updUser, DateUtil.Now());
		
	}

	@Override
	public void delAccountByPk(String uuid, String updUser) {
		sysorgdao.delAccountByPk(uuid, updUser, DateUtil.Now());
		
	}

	

	
	//添加单笔客户联系人信息
	@Override
	public void insByContactsinfo(BaseCustContactsinfo contactsinfo) {
		contactsinfo.setCrm_cust_contactsinfo_id(UtilMethod.getUUID());
		contactsinfo.setCreated_time_zone(DateUtil.Now());
		contactsinfo.setUseflag(ConstantMethod.FLAG_1);
		contactsinfo.setDel_flag(ConstantMethod.FLAG_0);
		sysorgdao.insByCustCon(contactsinfo);
	}

	@Override
	public void insByReceivinfo(BaseCustReceivinfo receivinfo) {
		receivinfo.setCrm_cust_receivinfo_id(UtilMethod.getUUID());
		receivinfo.setCreated_time_zone(DateUtil.Now());
		receivinfo.setUseflag(ConstantMethod.FLAG_1);
		receivinfo.setDel_flag(ConstantMethod.FLAG_0);
		sysorgdao.insByCustRece(receivinfo);
	}

	@Override
	public void insByAccount(BaseCustAccount custaccount) {
		custaccount.setCrm_cust_account_id(UtilMethod.getUUID());
		custaccount.setCreated_time_zone(DateUtil.Now());
		custaccount.setUseflag(ConstantMethod.FLAG_1);
		custaccount.setDel_flag(ConstantMethod.FLAG_0);
		sysorgdao.insByCustAcc(custaccount);
	}

	@Override
	public BaseCustContactsinfo findContactsinfoByPk(String uuid) {
		return sysorgdao.findContactsinfoByPk(uuid);
	}
	
	@Override
	public BaseCustReceivinfo findReceivinfoByPk(String uuid) {
		// TODO Auto-generated method stub
		return sysorgdao.findReceivinfoByPk(uuid);
	}

	@Override
	public BaseCustAccount findAccountByPk(String uuid) {
		// TODO Auto-generated method stub
		return sysorgdao.findAccountByPk(uuid);
	}

	@Override
	public void updBySContactsinfo(BaseCustContactsinfo contactsinfo) {
		sysorgdao.updBySContactsinfo(contactsinfo);
		
	}

	@Override
	public void updByReceivinfo(BaseCustReceivinfo receivinfo) {
		sysorgdao.updByReceivinfo(receivinfo);
		
	}

	@Override
	public void updByAccount(BaseCustAccount account) {
		sysorgdao.updByAccount(account);
		
	}

	
}
