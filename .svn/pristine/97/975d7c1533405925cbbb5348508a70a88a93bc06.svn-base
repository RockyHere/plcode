package com.yanbang.security.dao;
import java.util.Collection;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.dao.BaseDAO;
import com.yanbang.security.entity.SysOrg;
import com.yanbang.util.AssertUtil;
import com.yanbang.util.ConstantMethod;


@Repository
@Transactional
public class ISysOrgDAOImpl extends BaseDAO implements ISysOrgDAO{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public SysOrg findByPk(String uuid) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("select * from sys_org where uuid='"+uuid+"'")
		.append(" and useFlag='"+ConstantMethod.FLAG_1+"' order by orgcode");
		return this.getJdbcTemplate().queryForObject(strSQL.toString(),new BeanPropertyRowMapper(SysOrg.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysOrg> findAll() {
		String strSQL = "select * from sys_org order by orgcode";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysOrg.class));
		
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysOrg> findAllByFlag() {
		String strSQL = "select * from sys_org where useFlag='"+ConstantMethod.FLAG_1+"' order by orgcode";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysOrg.class));
	}

	@Override
	public void insByOrg(SysOrg org) {
		 StringBuffer strSQL = new StringBuffer("");
		strSQL.append("insert into sys_org (UUID,ORGCODE,ORGNAME,LEGALPERSON,TELEPHONE,ADDRESS,LINKMAN,ORGPROPERTY,REGMONEY,ORGRANGE,DESCRIPTION,USEFLAG,ORGTYPE,PARENTID,COMMENTS,UPDATEUSER,UPDATETIME ) values('")
	      .append(org.getUuid()).append("','")
	      .append(org.getOrgCode()).append("','")
	      .append(org.getOrgName()).append("','")
	      .append(org.getLegalPerson()).append("','")
	      .append(org.getTelephone()).append("','")
	      .append(org.getAddress()).append("','")
	      .append(org.getLinkMan()).append("','")
	      .append(org.getOrgProperty()).append("',")
	      .append(org.getRegMoney()).append(",'")
	      .append(org.getOrgRange()).append("','")
	      .append(org.getDescription()).append("','")
	      .append(org.getUseFlag()).append("','")
	      .append(org.getOrgType()).append("','")
	      .append(org.getParentId()).append("','")
	      .append(org.getComments()).append("','")
	      .append(org.getUpdateUser()).append("','")
	      .append(org.getUpdateTime()).append("')");
	this.getJdbcTemplate().update(strSQL.toString());
		
	}

	@Override
	public void updByOrg(SysOrg org) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update sys_org set ")
		      .append("ORGCODE='"+org.getOrgCode())
		      .append("',ORGNAME='"+org.getOrgName())
              .append("',LEGALPERSON='"+org.getLegalPerson())
              .append("',TELEPHONE='"+org.getTelephone())
              .append("',ADDRESS='"+org.getAddress())
              .append("',LINKMAN='"+org.getLinkMan())  
              .append("',ORGPROPERTY='"+org.getOrgProperty())
              .append("',REGMONEY="+org.getRegMoney())
              .append(",ORGRANGE='"+org.getOrgRange())
              .append("',DESCRIPTION='"+org.getDescription())
              .append("',USEFLAG='"+org.getUseFlag()) 
               .append("',ORGTYPE='"+org.getOrgType())
              .append("',PARENTID='"+org.getParentId())
              .append("',COMMENTS='"+org.getComments())
              .append("',UPDATEUSER='"+org.getUpdateUser())
              .append("',UPDATETIME='"+org.getUpdateTime()) 
		     .append("' where uuid='").append(org.getUuid()).append("'");	
		this.getJdbcTemplate().update(strSQL.toString());	
		
	}

	@Override
	public void delByPk(String uuid) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update sys_org set useFlag='").append(ConstantMethod.FLAG_0)
		 .append("' where uuid='").append(uuid).append("'");
		this.getJdbcTemplate().update(strSQL.toString());
		
	}

	@Override
	public void delByOrg(SysOrg org) {
			if(AssertUtil.isVal(org)){
				StringBuffer strSQL = new StringBuffer("");
				strSQL.append("update sys_org set useFlag='"+ConstantMethod.FLAG_0)
	                  .append("',updateUser='").append(org.getUpdateUser())
	                  .append("',updateTime='").append(org.getUpdateTime())
				      .append("' where uuid in (select uuid from sys_org start with uuid = '"+org.getUuid()+"' connect by prior uuid = parentid)");
				this.getJdbcTemplate().update(strSQL.toString());
		}
	}
		
	}


