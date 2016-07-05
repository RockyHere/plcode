package com.yanbang.base.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.base.dao.IBaseCargoDAO;
import com.yanbang.base.entity.BaseCargo;
import com.yanbang.util.ConstantMethod;
import com.yanbang.util.DateUtil;
import com.yanbang.util.UtilMethod;
@Service
@Transactional
public class IBaseCargoServiceImpl implements  IBaseCargoService{
	@Autowired
	private IBaseCargoDAO cargodao;
	@Override
	public BaseCargo findByPk(String uuid) {
		return cargodao.findByPk(uuid);
	}

	@Override
	public Collection<BaseCargo> findAll() {
		return cargodao.findAll();
	}
	@Override
	public Collection<BaseCargo> findAllByFlag() {
		return cargodao.findAllByFlag();
	}

	@Override
	public void insByData(BaseCargo data) {
		data.setBas_cargo_class_id(UtilMethod.getUUID());
		data.setCreated_time_zone(DateUtil.Now());
		data.setUseflag(ConstantMethod.FLAG_1);
		cargodao.insByData(data);
		
	}

	@Override
	public void updByData(BaseCargo data) {
		data.setUpdated_by_time(DateUtil.Now());
		cargodao.updByData(data);
	}

	@Override
	public void delByPk(String uuid) {
		cargodao.delByPk(uuid);
	}

	@Override
	public void delByData(BaseCargo data) {
		cargodao.delByData(data);
	}
}
