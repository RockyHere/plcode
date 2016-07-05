package com.yanbang.base.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.yanbang.base.dao.IBaseFinanceDAO;
import com.yanbang.base.entity.BaseFinance;
import com.yanbang.page.Page;
import com.yanbang.util.ConstantMethod;
import com.yanbang.util.DateUtil;
import com.yanbang.util.UtilMethod;
@Service
@Transactional
public class IBaseFinanceServiceImpl implements  IBaseFinanceService{
	@Autowired
	private IBaseFinanceDAO basedao;
	
	@Override
	public BaseFinance findByPk(String uuid) {
		return basedao.findByPk(uuid);
	}

	@Override
	public Collection<BaseFinance> findAll() {
		return basedao.findAll();
	}

	@Override
	public Collection<BaseFinance> findAllByFlag() {
		return basedao.findAllByFlag();
	}
	
	@Override
	public Page<BaseFinance> findAllData(BaseFinance data, Page<BaseFinance> page) {
		return basedao.findAllData(data, page);
	}

	@Override
	public void insByData(BaseFinance data) {
		data.setBas_financialins_id(UtilMethod.getUUID());
		data.setCreated_time_zone(DateUtil.Now());
		data.setUseflag(ConstantMethod.FLAG_1);
		data.setDel_flag(ConstantMethod.FLAG_0);
		basedao.insByData(data);
		
	}

	@Override
	public void updByData(BaseFinance data) {
		data.setUpdated_time_zone(DateUtil.Now());
		basedao.updByData(data);
		
	}

	@Override
	public void delByPk(String uuid,String updUser) {
		basedao.delByPk(uuid, updUser, DateUtil.Now());
	}

	@Override
	public void delByData(BaseFinance data) {
		data.setCreated_time_zone(DateUtil.Now());
		basedao.delByData(data);
	}
}
