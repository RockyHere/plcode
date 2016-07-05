package com.yanbang.security.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.security.dao.ISysOrgDAO;
import com.yanbang.security.entity.SysOrg;
import com.yanbang.util.ConstantMethod;
import com.yanbang.util.DateUtil;
import com.yanbang.util.UtilMethod;
@Service
@Transactional
public class ISysOrgServiceImpl implements  ISysOrgService{
	@Autowired
	private ISysOrgDAO sysorgdao;
	@Override
	public SysOrg findByPk(String uuid) {
		return sysorgdao.findByPk(uuid);
	}

	@Override
	public Collection<SysOrg> findAll() {
		return sysorgdao.findAll();
	}

	@Override
	public Collection<SysOrg> findAllByFlag() {
		return sysorgdao.findAllByFlag();
	}

	@Override
	public void insByOrg(SysOrg org) {
		org.setUuid(UtilMethod.getUUID());
		org.setUpdateTime(DateUtil.Now());
		org.setUseFlag(ConstantMethod.FLAG_1);
		sysorgdao.insByOrg(org);
		
	}

	@Override
	public void updByOrg(SysOrg org) {
		org.setUpdateTime(DateUtil.Now());
		org.setUseFlag(ConstantMethod.FLAG_1);
		sysorgdao.updByOrg(org);
	}

	@Override
	public void delByPk(String uuid) {
		sysorgdao.delByPk(uuid);
	}

	@Override
	public void delByOrg(SysOrg org) {
		sysorgdao.delByOrg(org);
	}
}
