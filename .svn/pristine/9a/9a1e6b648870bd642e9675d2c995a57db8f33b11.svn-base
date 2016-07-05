package com.yanbang.config.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yanbang.config.dao.ISysConfigDAO;

@Service
public class ISysConfigServiceImpl implements ISysConfigService {
	@Autowired
	private ISysConfigDAO sysConfigDAO;

	@Override
	public String findValueBykey(String key) {
		return sysConfigDAO.findValueBykey(key);
	}

}
