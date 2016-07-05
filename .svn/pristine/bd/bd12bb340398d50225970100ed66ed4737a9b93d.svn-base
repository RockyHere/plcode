package com.yanbang.config.dao;

import java.util.Collection;
import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.dao.BaseDAO;
import com.yanbang.page.Page;
import com.yanbang.config.entity.SysDict;

@Repository
@Transactional
public class ISysDictDAOImpl extends BaseDAO implements ISysDictDAO {

	@Override
	public void saveDict(SysDict dict) {
		String strSQL = "insert into sys_dict(dictcode,dictkey,dictname,dictdesc,dictgrade,dictparentid,orderkey,usestatus) values("
				+ this.findDictMaxId()
				+ ",'"
				+ dict.getDictKey()
				+ "','"
				+ dict.getDictName()
				+ "','"
				+ dict.getDictDesc()
				+ "',"
				+ dict.getDictGrade()
				+ ","
				+ dict.getDictParentId()
				+ ","
				+ dict.getOrderKey() + "," + dict.getUseStatus() + ")";
		this.getJdbcTemplate().update(strSQL);
	}

	@Override
	public void deleteDict(Long dictCode) {
		SysDict dict = this.findByDictCode(dictCode);
		String strSQL = "delete from sys_dict where dictkey like '"
				+ dict.getDictKey() + "%'";
		this.getJdbcTemplate().update(strSQL);
	}

	@Override
	public void updateDict(SysDict dict) {
		String strSQL = "update sys_dict set dictkey='" + dict.getDictKey()
				+ "',dictname='" + dict.getDictName() + "',dictdesc='"
				+ dict.getDictDesc() + "',dictgrade=" + dict.getDictGrade()
				+ ",dictparentid=" + dict.getDictParentId() + ",orderkey='"
				+ dict.getOrderKey() + "',usestatus=" + dict.getUseStatus()
				+ " where dictcode=" + dict.getDictCode();
		this.getJdbcTemplate().update(strSQL);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysDict> findAllDict() {
		String strSQL = "select * from sys_dict";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysDict.class));
	}

	@SuppressWarnings({ "deprecation", "unchecked", "rawtypes" })
	@Override
	public Page<SysDict> findAllDicts(SysDict dict, Page<SysDict> page) {
		String strSQL = "select * from sys_dict where 1=1 "
				+ createCondition(dict) + " order by orderkey asc";
		String strCountSQL = "select count(*) from sys_dict where 1=1 "
				+ createCondition(dict);
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		List<SysDict> dictlist = this.getJdbcTemplate().query(paginationSQL,
				new BeanPropertyRowMapper(SysDict.class));
		page.setPageResult(dictlist);
		return page;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public SysDict findByDictCode(Long dictCode) {
		String strSQL = "select * from sys_dict where dictcode=" + dictCode;
		return this.getJdbcTemplate().queryForObject(strSQL,
				new BeanPropertyRowMapper(SysDict.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public SysDict findByDictKey(String dictKey) {
		String strSQL = "select * from sys_dict where dictkey=" + dictKey;
		return this.getJdbcTemplate().queryForObject(strSQL,
				new BeanPropertyRowMapper(SysDict.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysDict> findMutiCondition(SysDict dict) {
		String strSQL = "select * from sys_dict where 1=1 "
				+ this.createCondition(dict);
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysDict.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysDict> findChildsDict(Long parentId) {
		String strSQL = "select * from sys_dict where dictparentid=" + parentId;
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysDict.class));
	}

	@Override
	public Long findDictMaxId() {
		String strSQL = "select nvl(max(dictcode)+1,1) from sys_dict";
		return this.getJdbcTemplate().queryForObject(strSQL, Long.class);
	}

	private String createCondition(SysDict dict) {
		StringBuffer condition = new StringBuffer("");
		String dictKey = dict.getDictKey();
		String dictName = dict.getDictName();
		String dictDesc = dict.getDictDesc();
		Integer dictGrade = dict.getDictGrade();
		Long dictParentId = dict.getDictParentId();
		Integer useStatus = dict.getUseStatus();
		if (dictKey != null && !"".equals(dictKey.trim())) {
			condition.append(" and dictkey like'%").append(dictKey)
					.append("%'");
		}
		if (dictName != null && !"".equals(dictName.trim())) {
			condition.append(" and dictname like '%").append(dictName)
					.append("%'");
		}
		if (dictDesc != null && !"".equals(dictDesc.trim())) {
			condition.append(" and dictdesc like '%").append(dictDesc)
					.append("%'");
		}
		if (dictGrade != null) {
			condition.append(" and dictgrade=").append(dictGrade);
		}
		if (dictParentId != null) {
			condition.append(" and dictparentid=").append(dictParentId);
		}

		if (useStatus != null && useStatus >= 0) {
			condition.append(" and usestatus=").append(useStatus);
		}
		return condition.toString();
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysDict> findChildsDict(String parentKey) {
		String strSQL = "select * from sys_dict where dictParentId in (select dictCode from sys_dict where dictKey='"+parentKey+"')";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysDict.class));
	}
}
