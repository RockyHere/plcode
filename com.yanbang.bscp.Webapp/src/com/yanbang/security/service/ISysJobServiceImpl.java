package com.yanbang.security.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.page.Page;
import com.yanbang.security.dao.ISysJobDAO;
import com.yanbang.security.entity.SysJob;
import com.yanbang.util.ConstantMethod;
import com.yanbang.util.DateUtil;
import com.yanbang.util.UtilMethod;
@Service
@Transactional
public class ISysJobServiceImpl implements  ISysJobService{
	@Autowired
	private ISysJobDAO sysJobdao;
	
	@Override
	public SysJob findByPk(String uuid) {
		return sysJobdao.findByPk(uuid);
	}

	@Override
	public Collection<SysJob> findAll() {
		return sysJobdao.findAll();
	}

	@Override
	public Collection<SysJob> findAllByFlag() {
		return sysJobdao.findAllByFlag();
	}
	
	@Override
	public Page<SysJob> findAllSysJob(SysJob sysJob, Page<SysJob> page) {
		return sysJobdao.findAllSysJob(sysJob, page);
	}

	@Override
	public void insBySysJob(SysJob sysJob) {
		sysJob.setUuid(UtilMethod.getUUID());
		sysJob.setUpdateTime(DateUtil.Now());
		sysJob.setUseFlag(ConstantMethod.FLAG_1);
		sysJobdao.insBySysJob(sysJob);
		
	}

	@Override
	public void updBySysJob(SysJob sysJob) {
		sysJob.setUpdateTime(DateUtil.Now());
		sysJobdao.updBySysJob(sysJob);
		
	}

	@Override
	public void delByPk(String uuid,String updUser) {
		sysJobdao.delByPk(uuid, updUser, DateUtil.Now());
	}

	@Override
	public void delBySysJob(SysJob sysJob) {
		sysJob.setUpdateTime(DateUtil.Now());
		sysJobdao.delBySysJob(sysJob);
	}
}
