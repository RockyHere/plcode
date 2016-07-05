package com.yanbang.config.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yanbang.config.dao.ISysAttachFileDAO;
import com.yanbang.config.entity.SysAttachFile;
import com.yanbang.util.AssertUtil;

@Service
public class ISysAttachFileServiceImpl implements ISysAttachFileService {
	@Autowired
	private ISysAttachFileDAO attachFileDAO;

	@Override
	public long saveAttachFile(SysAttachFile attachFile) {
		return attachFileDAO.saveAttachFile(attachFile);
	}

	@Override
	public SysAttachFile findAttachFileById(Long attachFileId) {
		return attachFileDAO.findAttachFileById(attachFileId);
	}

	@Override
	public Collection<SysAttachFile> findAttachFileByIds(String attachFileIds) {
		//因业务表中存储的附件id前都加","，故需去掉逗号
		if(AssertUtil.isInval(attachFileIds)){
			return null;
		}
		attachFileIds = attachFileIds.substring(1);
		return attachFileDAO.findAttachFileByIds(attachFileIds);
	}

}
