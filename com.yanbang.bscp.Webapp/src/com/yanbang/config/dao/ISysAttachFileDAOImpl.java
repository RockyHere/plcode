package com.yanbang.config.dao;

import java.util.Collection;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.dao.BaseDAO;
import com.yanbang.config.entity.SysAttachFile;

@Repository
@Transactional
public class ISysAttachFileDAOImpl extends BaseDAO implements ISysAttachFileDAO {

	@Override
	public long saveAttachFile(SysAttachFile attachFile) {
		try {
			long attachId = this.findNextId();
			StringBuffer strSQL = new StringBuffer("");
			strSQL.append("insert into sys_attachfile(attachFileId,origFileName,relativeURL,attachfileComment,attachfileUser,attachfileTime) values(")
				  .append(attachId).append(",'")
				  .append(attachFile.getOrigFileName()).append("','")
				  .append(attachFile.getRelativeURL()).append("','")
				  .append(attachFile.getAttachfileComment()).append("','")
				  .append(attachFile.getAttachfileUser()).append("','")
				  .append(attachFile.getAttachfileTime()).append("')");
			this.getJdbcTemplate().update(strSQL.toString());
			return attachId;
		} catch (Exception ex) {
			throw new RuntimeException("保存附件信息异常:" + ex.getMessage());
		}
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public SysAttachFile findAttachFileById(Long attachFileId) {
		String strSQL = "select * from sys_attachfile where attachFileId="
				+ attachFileId;
		return this.getJdbcTemplate().queryForObject(strSQL,
				new BeanPropertyRowMapper(SysAttachFile.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysAttachFile> findAttachFileByIds(String attachFileIds) {
		String strSQL = "select * from sys_attachfile where attachFileId in ("
				+ attachFileIds + ")";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysAttachFile.class));
	}

	@SuppressWarnings({ "deprecation" })
	private long findNextId() {
		String strSQL = "select nvl(max(attachFileId),0)+1 from sys_attachfile";
		return this.getJdbcTemplate().queryForLong(strSQL);
	}
}
