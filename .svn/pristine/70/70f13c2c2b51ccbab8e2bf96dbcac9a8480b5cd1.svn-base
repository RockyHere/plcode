package com.yanbang.flow.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;

import org.springframework.jdbc.core.simple.ParameterizedRowMapper;
import org.springframework.stereotype.Repository;

import com.yanbang.dao.BaseDAO;
import com.yanbang.page.Page;
import com.yanbang.flow.entity.FlowDesign;
import com.yanbang.util.DateUtil;

@SuppressWarnings("deprecation")
@Repository
public class IWorkFlowDesignDAOImpl extends BaseDAO implements
		IWorkFlowDesignDAO {
	@Override
	public Page<FlowDesign> findWorkFlowDesign(Page<FlowDesign> page) {
		String strSQL = "select key,name,version,description,createdatetime,createusername,status,path,content,remark,flowtype,deployid,deploydatetime,deployusername from flow_design  order by name asc";
		String strCountSQL = "select count(*) from  flow_design ";
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		Collection<FlowDesign> list = this.getJdbcTemplate().query(
				paginationSQL, new ParameterizedRowMapper<FlowDesign>() {
					@Override
					public FlowDesign mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						FlowDesign design = new FlowDesign();
						design.setKey(rs.getString("key"));
						design.setName(rs.getString("name"));
						design.setVersion(rs.getInt("version"));
						design.setDescription(rs.getString("description"));
						design.setCreatedatetime(rs.getString("createdatetime"));
						design.setCreateusername(rs.getString("createusername"));
						design.setStatus(rs.getInt("status"));
						design.setPath(rs.getString("path"));
						design.setContent(rs.getString("content"));
						design.setRemark(rs.getString("remark"));
						design.setFlowType(rs.getString("flowtype"));
						design.setDeployId(rs.getString("deployid"));
						design.setDeployDatetime(rs.getString("deploydatetime"));
						design.setDeployUsername(rs.getString("deployusername"));
						return design;
					}
				});

		for (FlowDesign design : list) {

			try {
				String sql2 = "select dictName from sys_dict where dictkey='"
						+ design.getFlowType() + "' ";
				String dictName = this.getJdbcTemplate()
						.query(sql2, new ParameterizedRowMapper<String>() {
							@Override
							public String mapRow(ResultSet rs, int rowNum)
									throws SQLException {
								return rs.getString("dictName");
							}
						}).get(0);
				design.setFlowType(dictName);
			} catch (Exception ex) {
				ex.printStackTrace();
				design.setFlowType("N/A");
			}
		}

		page.setPageResult(list);
		return page;
	}

	@Override
	public Page<FlowDesign> findAllFlowDesignByMutiConditon(
			Page<FlowDesign> page, FlowDesign fd) {

		String condtionSQL = "";
		if (fd.getKey() != null && !"".equals(fd.getKey().trim())) {
			condtionSQL = condtionSQL + " and key like '%" + fd.getKey() + "%'";
		}
		if (fd.getName() != null && !"".equals(fd.getName().trim())) {
			condtionSQL = condtionSQL + " and name like '%" + fd.getName()
					+ "%' ";
		}
		if (!fd.getFlowType().equals("-2")) {
			condtionSQL = condtionSQL + " and flowtype like '%"
					+ fd.getFlowType() + "%' ";
		}
		if (fd.getStatus() != -2) {
			condtionSQL = condtionSQL + " and status=" + fd.getStatus();
		}

		String strSQL = "select key,name,version,description,createdatetime,createusername,status,path,content,remark,flowtype,deployid,deploydatetime,deployusername from  flow_design where 1=1 ";
		strSQL += condtionSQL;
		strSQL += " order by name asc";

		String strCountSQL = "select count(*) from  flow_design where 1=1 ";
		strCountSQL += condtionSQL;
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		Collection<FlowDesign> list = this.getJdbcTemplate().query(
				paginationSQL, new ParameterizedRowMapper<FlowDesign>() {
					@Override
					public FlowDesign mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						FlowDesign design = new FlowDesign();
						design.setKey(rs.getString("key"));
						design.setName(rs.getString("name"));
						design.setVersion(rs.getInt("version"));
						design.setDescription(rs.getString("description"));
						design.setCreatedatetime(rs.getString("createdatetime"));
						design.setCreateusername(rs.getString("createusername"));
						design.setStatus(rs.getInt("status"));
						design.setPath(rs.getString("path"));
						design.setContent(rs.getString("content"));
						design.setRemark(rs.getString("remark"));
						design.setFlowType(rs.getString("flowtype"));
						design.setDeployId(rs.getString("deployid"));
						design.setDeployDatetime(rs.getString("deploydatetime"));
						design.setDeployUsername(rs.getString("deployusername"));
						return design;
					}
				});
		for (FlowDesign design : list) {
			try {
				String sql2 = "select dictName from sys_dict where dictkey='"
						+ design.getFlowType() + "' ";
				String dictName = this.getJdbcTemplate()
						.query(sql2, new ParameterizedRowMapper<String>() {
							@Override
							public String mapRow(ResultSet rs, int rowNum)
									throws SQLException {
								return rs.getString("dictName");
							}
						}).get(0);
				design.setFlowType(dictName);
			} catch (Exception ex) {
				ex.printStackTrace();
				design.setFlowType("N/A");
			}
		}
		page.setPageResult(list);
		return page;
	}

	@Override
	public Collection<FlowDesign> findAllFlowDesign() {
		String strSQL = "select key,name,version,description,createdatetime,createusername,status,path,content,remark,flowtype,deployid,deploydatetime,deployusername from  flow_design  order by createdatetime desc";
		Collection<FlowDesign> list = this.getJdbcTemplate().query(strSQL,
				new ParameterizedRowMapper<FlowDesign>() {
					@Override
					public FlowDesign mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						FlowDesign design = new FlowDesign();
						design.setKey(rs.getString("key"));
						design.setName(rs.getString("name"));
						design.setVersion(rs.getInt("version"));
						design.setDescription(rs.getString("description"));
						design.setCreatedatetime(rs.getString("createdatetime"));
						design.setCreateusername(rs.getString("createusername"));
						design.setStatus(rs.getInt("status"));
						design.setPath(rs.getString("path"));
						design.setContent(rs.getString("content"));
						design.setRemark(rs.getString("remark"));
						design.setFlowType(rs.getString("flowtype"));
						design.setDeployId(rs.getString("deployid"));
						design.setDeployDatetime(rs.getString("deploydatetime"));
						design.setDeployUsername(rs.getString("deployusername"));
						return design;
					}
				});
		for (FlowDesign design : list) {
			try {
				String sql2 = "select dictName from sys_dict where dictkey='"
						+ design.getFlowType() + "' ";
				String dictName = this.getJdbcTemplate()
						.query(sql2, new ParameterizedRowMapper<String>() {
							@Override
							public String mapRow(ResultSet rs, int rowNum)
									throws SQLException {
								return rs.getString("dictName");
							}
						}).get(0);
				design.setFlowType(dictName);
			} catch (Exception ex) {
				ex.printStackTrace();
				design.setFlowType("N/A");
			}
		}
		return list;
	}

	@Override
	public Collection<FlowDesign> findFlowDesignByKey(String key) {
		String strSQL = "select key,name,version,description,createdatetime,createusername,status,path,content,remark,flowtype,deployid,deploydatetime,deployusername from  flow_design  where key='"
				+ key + "' order by createdatetime desc";
		Collection<FlowDesign> list = this.getJdbcTemplate().query(strSQL,
				new ParameterizedRowMapper<FlowDesign>() {
					@Override
					public FlowDesign mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						FlowDesign design = new FlowDesign();
						design.setKey(rs.getString("key"));
						design.setName(rs.getString("name"));
						design.setVersion(rs.getInt("version"));
						design.setDescription(rs.getString("description"));
						design.setCreatedatetime(rs.getString("createdatetime"));
						design.setCreateusername(rs.getString("createusername"));
						design.setStatus(rs.getInt("status"));
						design.setPath(rs.getString("path"));
						design.setContent(rs.getString("content"));
						design.setRemark(rs.getString("remark"));
						design.setFlowType(rs.getString("flowtype"));
						design.setDeployId(rs.getString("deployid"));
						design.setDeployDatetime(rs.getString("deploydatetime"));
						design.setDeployUsername(rs.getString("deployusername"));
						return design;
					}
				});
		for (FlowDesign design : list) {
			try {
				String sql2 = "select dictName from sys_dict where dictkey='"
						+ design.getFlowType() + "'";
				String dictName = this.getJdbcTemplate()
						.query(sql2, new ParameterizedRowMapper<String>() {
							@Override
							public String mapRow(ResultSet rs, int rowNum)
									throws SQLException {
								return rs.getString("dictName");
							}
						}).get(0);
				design.setFlowType(dictName);
			} catch (Exception ex) {
				ex.printStackTrace();
				design.setFlowType("N/A");
			}
		}
		return list;
	}

	@Override
	public void deleteFlowDesign(String name, String version) {
		String sql = "delete from  flow_design where name='" + name
				+ "' and version=" + version;
		this.getJdbcTemplate().update(sql);
	}

	@Override
	public void updateFlowDesign(String name, FlowDesign fd) {
		try {
			String strsql = "select count(*) from flow_design where name='"
					+ fd.getName() + "' and version='" + fd.getVersion() + "'";
			int count = this.getJdbcTemplate().queryForInt(strsql);
			if (count == 1) {
				String sql = "update  flow_design set key='" + fd.getKey()
						+ "',description='" + fd.getDescription()
						+ "',createusername='" + fd.getCreateusername()
						+ "',status=" + fd.getStatus() + ",path='"
						+ fd.getPath() + "',content=?,remark='"
						+ fd.getRemark() + "' where version='"
						+ fd.getVersion() + "' and  name='" + name + "'";
				this.getJdbcTemplate().update(sql, fd.getContent());
			} else {
				String sql = "insert into  flow_design(key,name,version,description,createdatetime,createusername,status,path,content,remark,flowtype,deployid,deploydatetime,deployusername) values('"
						+ fd.getKey()
						+ "','"
						+ fd.getName()
						+ "',"
						+ fd.getVersion()
						+ ",'"
						+ fd.getDescription()
						+ "','"
						+ DateUtil.getCurrDateTime()
						+ "','"
						+ fd.getCreateusername()
						+ "',"
						+ fd.getStatus()
						+ ",'"
						+ fd.getPath()
						+ "',?,'"
						+ fd.getRemark()
						+ "','"
						+ fd.getFlowType() + "','N/A','N/A','N/A')";
				this.getJdbcTemplate().update(sql, fd.getContent());
			}
		} catch (Exception ex) {
			throw new RuntimeException(ex.getMessage());
		}
	}

	@Override
	public void updateFLowDesignStatus(String name, String status,
			String version) {
		String sql = "update  flow_design set status='" + status
				+ "' where name='" + name + "' and version=" + version;
		this.getJdbcTemplate().update(sql);
	}

	@Override
	public void updateFlowDeploy(String name, String version, String deployId,
			String deploydatetime, String deployUser) {
		String sql = "update  flow_design set deployid='" + deployId
				+ "',deploydatetime='" + deploydatetime + "',deployusername='"
				+ deployUser + "' where name='" + name + "' and version="
				+ version;
		this.getJdbcTemplate().update(sql);
	}

	@Override
	public void saveFlowDesign(FlowDesign fd) {
		String sql = "insert into  flow_design(key,name,version,description,createdatetime,createusername,status,path,content,remark,flowtype,deployid,deploydatetime,deployusername) values('"
				+ fd.getKey()
				+ "','"
				+ fd.getName()
				+ "',"
				+ fd.getVersion()
				+ ",'"
				+ fd.getDescription()
				+ "','"
				+ DateUtil.getCurrDateTime()
				+ "','"
				+ fd.getCreateusername()
				+ "',"
				+ fd.getStatus()
				+ ",'"
				+ fd.getPath()
				+ "',?,'"
				+ fd.getRemark()
				+ "','"
				+ fd.getFlowType()
				+ "','N/A','N/A','N/A')";
		this.getJdbcTemplate().update(sql, fd.getContent());
	}

	@Override
	public boolean checkFileNameExists(String flowName) {
		String strCountSQL = "select count(*) from  flow_design where name='"
				+ flowName + "'";
		long count = this.getJdbcTemplate().queryForLong(strCountSQL);
		return count == 0 ? true : false;
	}

	@Override
	public FlowDesign findFlowDesignByName(String name, String version) {
		String strSQL = "select key,name,version,description,createdatetime,createusername,status,path,content,remark,flowtype,deployid,deploydatetime,deployusername from  flow_design  where  name='"
				+ name + "' and version=" + version;
		FlowDesign design = this.getJdbcTemplate().queryForObject(strSQL,
				new ParameterizedRowMapper<FlowDesign>() {
					@Override
					public FlowDesign mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						FlowDesign design = new FlowDesign();
						design.setKey(rs.getString("key"));
						design.setName(rs.getString("name"));
						design.setVersion(rs.getInt("version"));
						design.setDescription(rs.getString("description"));
						design.setCreatedatetime(rs.getString("createdatetime"));
						design.setCreateusername(rs.getString("createusername"));
						design.setStatus(rs.getInt("status"));
						design.setPath(rs.getString("path"));
						design.setContent(rs.getString("content"));
						design.setRemark(rs.getString("remark"));
						design.setFlowType(rs.getString("flowtype"));
						design.setDeployId(rs.getString("deployid"));
						design.setDeployDatetime(rs.getString("deploydatetime"));
						design.setDeployUsername(rs.getString("deployusername"));
						return design;
					}
				});

		try {
			String sql2 = "select dictName from sys_dict where dictkey='"
					+ design.getFlowType() + "' ";
			String dictName = this.getJdbcTemplate()
					.query(sql2, new ParameterizedRowMapper<String>() {
						@Override
						public String mapRow(ResultSet rs, int rowNum)
								throws SQLException {
							return rs.getString("dictName");
						}
					}).get(0);
			design.setFlowType(dictName);
		} catch (Exception ex) {
			ex.printStackTrace();
			design.setFlowType("N/A");
		}
		return design;
	}
}
