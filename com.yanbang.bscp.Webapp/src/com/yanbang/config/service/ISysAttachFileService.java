package com.yanbang.config.service;

import java.util.Collection;

import com.yanbang.config.entity.SysAttachFile;

/**
 * 服务层接口
 * 
 * 文件上传服务接口
 * 
 * @author Tong Baojun
 * 
 */
public interface ISysAttachFileService {
	/**
	 * 保存附件信息
	 * 
	 * @param attachFile
	 * @return
	 */
	public long saveAttachFile(SysAttachFile attachFile);

	/**
	 * 根据附件流水号查询附件信息
	 * 
	 * @param attachFileId
	 * @return
	 */
	public SysAttachFile findAttachFileById(Long attachFileId);

	/**
	 * 根据附件流水号集合查询附件信息列表
	 * 
	 * @param attachFileIds
	 *            格式：id1,id2,...
	 * @return
	 */
	public Collection<SysAttachFile> findAttachFileByIds(String attachFileIds);
}