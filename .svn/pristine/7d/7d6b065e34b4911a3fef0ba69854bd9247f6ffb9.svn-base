package com.yanbang.base.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.base.dao.ISysRegionDAO;
import com.yanbang.base.entity.BaseRegion;
import com.yanbang.util.ConstantMethod;
import com.yanbang.util.DateUtil;
import com.yanbang.util.UtilMethod;
@Service
@Transactional
public class IBaseRegionServiceImpl implements  IBaseRegionService{
	@Autowired
	private ISysRegionDAO sysorgdao;
	@Override
	public BaseRegion findByPk(String uuid) {
		return sysorgdao.findByPk(uuid);
	}

	@Override
	public Collection<BaseRegion> findAll() {
		return sysorgdao.findAll();
	}
	@Override
	public Collection<BaseRegion> findAllByFlag() {
		return sysorgdao.findAllByFlag();
	}

	@Override
	public void insByOrg(BaseRegion org) {
		org.setBas_region_id(UtilMethod.getUUID());
		org.setCreated_time_zone(DateUtil.Now());
		org.setUseFlag(ConstantMethod.FLAG_1);
		sysorgdao.insByOrg(org);
		
	}

	@Override
	public void updByOrg(BaseRegion org) {
		org.setCreated_time_zone(DateUtil.Now());
		org.setUseFlag(ConstantMethod.FLAG_1);
		sysorgdao.updByOrg(org);
	}

	@Override
	public void delByPk(String uuid) {
		sysorgdao.delByPk(uuid);
	}

	@Override
	public void delByOrg(BaseRegion org) {
		sysorgdao.delByOrg(org);
	}
}
