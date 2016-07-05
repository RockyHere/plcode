package com.yanbang.base.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.base.dao.IBaseIndustryDAO;
import com.yanbang.base.entity.BaseIndustry;
import com.yanbang.page.Page;
import com.yanbang.util.ConstantMethod;
import com.yanbang.util.DateUtil;
import com.yanbang.util.UtilMethod;
@Service
@Transactional
public class IBaseIndustryServiceImpl implements  IBaseIndustryService{
	@Autowired
	private IBaseIndustryDAO sysJobdao;
	
	@Override
	public BaseIndustry findByPk(String uuid) {
		return sysJobdao.findByPk(uuid);
	}

	@Override
	public Collection<BaseIndustry> findAll() {
		return sysJobdao.findAll();
	}

	@Override
	public Collection<BaseIndustry> findAllByFlag() {
		return sysJobdao.findAllByFlag();
	}
	
	@Override
	public Page<BaseIndustry> findAllSysJob(BaseIndustry sysJob, Page<BaseIndustry> page) {
		return sysJobdao.findAllSysJob(sysJob, page);
	}

	@Override
	public void insBySysJob(BaseIndustry sysJob) {
		sysJob.setBas_industry_id(UtilMethod.getUUID());
		sysJob.setCreated_time_zone(DateUtil.Now());
		sysJob.setUseflag(ConstantMethod.FLAG_1);
		sysJobdao.insBySysJob(sysJob);
		
	}

	@Override
	public void updBySysJob(BaseIndustry sysJob) {
		sysJob.setUpdated_time_zone(DateUtil.Now());
		sysJob.setUseflag(ConstantMethod.FLAG_1);
		sysJobdao.updBySysJob(sysJob);
		
	}

	@Override
	public void delByPk(String uuid,String updUser) {
		sysJobdao.delByPk(uuid, updUser, DateUtil.Now());
	}

	@Override
	public void delBySysJob(BaseIndustry sysJob) {
		sysJob.setCreated_time_zone(DateUtil.Now());
		sysJobdao.delBySysJob(sysJob);
	}
}
