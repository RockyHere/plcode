package com.yanbang.flow.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import org.jbpm.api.model.ActivityCoordinates;
import org.springframework.jdbc.core.simple.ParameterizedRowMapper;
import org.springframework.stereotype.Repository;

import com.yanbang.dao.BaseDAO;
import com.yanbang.page.Page;
import com.yanbang.flow.entity.FlowDesign;
import com.yanbang.flow.entity.FlowInfo;
import com.yanbang.flow.entity.WorkFlowActivity;
import com.yanbang.flow.entity.WorkFlowInstance;
import com.yanbang.flow.service.JbpmFlowService;

@Repository
@SuppressWarnings({ "deprecation"})
public class IWorkFlowInfoDAOImpl extends BaseDAO implements IWorkFlowInfoDAO {
	private JbpmFlowService flowService = JbpmFlowService.getInstance();

	@Override
	public Page<WorkFlowInstance> findWorkFlowInstance(
			Page<WorkFlowInstance> page, String status) {
		// 查询流程实例子集合
		Map<String, WorkFlowInstance> flowInstanceMap = flowService
				.findAllProcessInstance();
		String strSQL = "select processid,flowid,deployid,startDate,startUsr,status,bussiessId,extendsField1,extendsField2 from flow_info where  status='"
				+ status + "'";
		Collection<WorkFlowInstance> flowInfolist = this.getJdbcTemplate()
				.query(strSQL, new ParameterizedRowMapper<WorkFlowInstance>() {
					@Override
					public WorkFlowInstance mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						WorkFlowInstance instance = new WorkFlowInstance();
						instance.setProcessId(rs.getString("processid"));
						instance.setFlowId(rs.getString("flowid"));
						instance.setDeployId(rs.getString("deployId"));
						instance.setStartDate(rs.getString("startDate"));
						instance.setStartUsr(rs.getString("startUsr"));
						instance.setStatus(rs.getString("status"));
						instance.setBussiessId(rs.getString("bussiessId"));
						instance.setExtendsField1(rs.getString("extendsField1"));
						instance.setExtendsField2(rs.getString("extendsField2"));
						return instance;
					}
				});

		// 保留未完成的流程
		ArrayList<WorkFlowInstance> retlist = new ArrayList<WorkFlowInstance>();
		for (WorkFlowInstance wfi : flowInfolist) {
			try {
				WorkFlowInstance tmp = flowInstanceMap.get(wfi.getFlowId());
				wfi.setCurFlowNodeName(tmp.getCurFlowNodeName());
				wfi.setCurTaskId(tmp.getCurTaskId());
				wfi.setCurTaskUserNickName(tmp.getCurTaskUserNickName());
			} catch (Exception ex) {
				wfi.setCurFlowNodeName("N/A");
				wfi.setCurTaskId("N/A");
				wfi.setCurTaskUserNickName("N/A");
			}

			try {
				String str1 = "select username from sys_user where usernickname='"
						+ wfi.getStartUsr() + "'";
				String usrName1 = this.getJdbcTemplate().queryForObject(str1,
						String.class);
				wfi.setStartUsr(usrName1);
			} catch (Exception ue) {
				System.out.println("error:" + ue.getMessage());
			}

			try {
				String str2 = "select username from sys_user where usernickname='"
						+ wfi.getCurTaskUserNickName() + "'";
				String usrName2 = this.getJdbcTemplate().queryForObject(str2,
						String.class);
				wfi.setCurTaskUserNickName(usrName2);
			} catch (Exception ue) {
				System.out.println("error:" + ue.getMessage());
			}
			try {
				String strdesignSQL = "select flowtype,key,name,version from flow_design where key=(select distinct key from  flow_design  where  deployid="
						+ wfi.getDeployId()
						+ ") and version=(select max(version) from flow_design where key=(select distinct key from  flow_design  where  deployid="
						+ wfi.getDeployId() + "))";
				FlowDesign design = this.getJdbcTemplate().queryForObject(
						strdesignSQL, new ParameterizedRowMapper<FlowDesign>() {
							@Override
							public FlowDesign mapRow(ResultSet rs, int rowNum)
									throws SQLException {
								FlowDesign design = new FlowDesign();
								design.setFlowType(rs.getString("flowtype"));
								design.setKey(rs.getString("key"));
								design.setName(rs.getString("name"));
								design.setVersion(rs.getInt("version"));
								return design;
							}
						});
				wfi.setFlowName(design.getName());
				wfi.setFlowKey(design.getKey());
				wfi.setFlowVersion(design.getVersion() + "");
				try {
					String sqlflowtype = "select dictname from sys_dict where dictkey='"
							+ design.getFlowType() + "'";
					String flowtype = this.getJdbcTemplate().queryForObject(
							sqlflowtype, String.class);
					wfi.setFlowType(flowtype);
				} catch (Exception ex) {
					wfi.setFlowType("N/A");
				}
			} catch (Exception ex) {
				wfi.setFlowName("N/A");
				wfi.setFlowKey("N/A");
			}
			// 如果流程已经完成将不显示
			if (!flowService.processInstanceIsEnd(wfi.getFlowId())) {
				retlist.add(wfi);
			}
		}
		// *******************************************************************************
		Collection<WorkFlowInstance> pageResult = new ArrayList<WorkFlowInstance>();
		page.paginationProcess(new Long(retlist.size()));
		int startIndex = page.getStartIndex().intValue();
		int endIndex = page.getEndIndex().intValue();
		if (endIndex > retlist.size()) {
			endIndex = retlist.size();
		}
		for (int index = (startIndex - 1); index < endIndex; index++) {
			WorkFlowInstance wfi = retlist.get(index);
			pageResult.add(wfi);
		}
		page.setPageResult(pageResult);
		// ***************************************************************************
		return page;
	}

	@Override
	public Page<WorkFlowInstance> findWorkFlowInstanceMutiConditon(
			Page<WorkFlowInstance> page, WorkFlowInstance instance,
			String status) {
		// 查询流程实例子集合
		Map<String, WorkFlowInstance> flowInstanceMap = flowService
				.findAllProcessInstance();
		String strSQL = "select processid,flowid,deployid,startDate,startUsr,status,bussiessId,extendsField1,extendsField2 from  flow_info where  status='"
				+ status + "'";
		String conditionSQL = "";
		if (instance.getFlowId() != null
				&& !"".equals(instance.getFlowId().trim())) {
			conditionSQL = conditionSQL + " and flowid like '%"
					+ instance.getFlowId() + "%'";
		}
		strSQL = strSQL + conditionSQL;
		Collection<WorkFlowInstance> flowInfolist = this.getJdbcTemplate()
				.query(strSQL, new ParameterizedRowMapper<WorkFlowInstance>() {
					@Override
					public WorkFlowInstance mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						WorkFlowInstance instance = new WorkFlowInstance();
						instance.setProcessId(rs.getString("processid"));
						instance.setFlowId(rs.getString("flowid"));
						instance.setDeployId(rs.getString("deployId"));
						instance.setStartDate(rs.getString("startDate"));
						instance.setStartUsr(rs.getString("startUsr"));
						instance.setStatus(rs.getString("status"));
						instance.setBussiessId(rs.getString("bussiessId"));
						instance.setExtendsField1(rs.getString("extendsField1"));
						instance.setExtendsField2(rs.getString("extendsField2"));
						return instance;
					}
				});

		// 保留未完成的流程
		ArrayList<WorkFlowInstance> retlist = new ArrayList<WorkFlowInstance>();
		for (WorkFlowInstance wfi : flowInfolist) {
			try {
				WorkFlowInstance tmp = flowInstanceMap.get(wfi.getFlowId());
				wfi.setCurFlowNodeName(tmp.getCurFlowNodeName());
				wfi.setCurTaskId(tmp.getCurTaskId());
				wfi.setCurTaskUserNickName(tmp.getCurTaskUserNickName());
			} catch (Exception ex) {
				wfi.setCurFlowNodeName("N/A");
				wfi.setCurTaskId("N/A");
				wfi.setCurTaskUserNickName("N/A");
			}

			try {
				String strdesignSQL = "select flowtype,key,name,version from flow_design where key=(select distinct key from  flow_design  where  deployid="
						+ wfi.getDeployId()
						+ ") and version=(select max(version) from flow_design where key=(select distinct key from  flow_design  where  deployid="
						+ wfi.getDeployId() + "))";
				FlowDesign design = this.getJdbcTemplate().queryForObject(
						strdesignSQL, new ParameterizedRowMapper<FlowDesign>() {
							@Override
							public FlowDesign mapRow(ResultSet rs, int rowNum)
									throws SQLException {
								FlowDesign design = new FlowDesign();
								design.setFlowType(rs.getString("flowtype"));
								design.setKey(rs.getString("key"));
								design.setName(rs.getString("name"));
								design.setVersion(rs.getInt("version"));
								return design;
							}
						});
				wfi.setFlowName(design.getName());
				wfi.setFlowKey(design.getKey());
				wfi.setFlowVersion(design.getVersion() + "");
				try {
					String sqlflowtype = "select dictname from sys_dict where dictkey='"
							+ design.getFlowType() + "'";
					String flowtype = this.getJdbcTemplate().queryForObject(
							sqlflowtype, String.class);
					wfi.setFlowType(flowtype);
				} catch (Exception ex) {
					wfi.setFlowType("N/A");
				}
			} catch (Exception ex) {
				wfi.setFlowName("N/A");
				wfi.setFlowKey("N/A");
			}
			// 如果流程已经完成将不显示
			if (!flowService.processInstanceIsEnd(wfi.getFlowId())) {
				if (instance.getFlowType().equals("all")
						|| instance.getFlowType().equals(wfi.getFlowType())) {
					retlist.add(wfi);
				}
			}
		}
		// *******************************************************************************
		Collection<WorkFlowInstance> pageResult = new ArrayList<WorkFlowInstance>();
		page.paginationProcess(new Long(retlist.size()));
		int startIndex = page.getStartIndex().intValue();
		int endIndex = page.getEndIndex().intValue();
		if (endIndex > retlist.size()) {
			endIndex = retlist.size();
		}
		for (int index = (startIndex - 1); index < endIndex; index++) {
			WorkFlowInstance wfi = retlist.get(index);
			pageResult.add(wfi);
		}
		page.setPageResult(pageResult);
		// ***************************************************************************
		return page;
	}

	@Override
	public void saveWorkFlowInfo(FlowInfo flowInfo) {
		String strSQL = "insert into  flow_info(processid,flowid,deployId,startDate,startUsr,status,bussiessId,extendsField1,extendsField2) values(HIBERNATE_SEQUENCE.NEXTVAL,'"
				+ flowInfo.getFlowid()
				+ "','"
				+ flowInfo.getDeployId()
				+ "','"
				+ flowInfo.getStartDate()
				+ "','"
				+ flowInfo.getStartUsr()
				+ "','active','"
				+ flowInfo.getBussiessId()
				+ "','"
				+ flowInfo.getExtendsField1()
				+ "','"
				+ flowInfo.getExtendsField2() + "')";
		this.getJdbcTemplate().update(strSQL);
	}

	@Override
	public void deleteWorkFlowInfo(String processId) {
		String strSQL = "delete from  flow_info where  flowid='" + processId
				+ "'";
		this.getJdbcTemplate().update(strSQL);
	}

	@Override
	public void updateWorkFlowStatus(String status, String processId) {
		String strSQL = "update  flow_info set status='" + status
				+ "' where  flowid='" + processId + "'";
		this.getJdbcTemplate().update(strSQL);
	}

	@Override
	public FlowInfo findFlowInfoByBase(String processId) {
		String strSQL = "select processid,flowid,deployId,startDate,startUsr,status,bussiessId,extendsField1,extendsField2 from  flow_info where  processid='"
				+ processId + "'";
		return this.getJdbcTemplate().queryForObject(strSQL,
				new ParameterizedRowMapper<FlowInfo>() {
					@Override
					public FlowInfo mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						FlowInfo flow = new FlowInfo();
						flow.setProcessid(rs.getString("processid"));
						flow.setFlowid(rs.getString("flowid"));
						flow.setDeployId(rs.getString("deployId"));
						flow.setStartDate(rs.getString("startDate"));
						flow.setStartUsr(rs.getString("startUsr"));
						flow.setStatus(rs.getString("status"));
						flow.setBussiessId(rs.getString("bussiessId"));
						flow.setExtendsField1(rs.getString("extendsField1"));
						flow.setExtendsField2(rs.getString("extendsField2"));
						return flow;
					}
				});
	}

	@Override
	public List<WorkFlowInstance> findWorkFlowInstanceMutiConditon(
			WorkFlowInstance conditionForm) {
		// 未完成的流程
		List<WorkFlowInstance> results = new ArrayList<WorkFlowInstance>();

		StringBuffer sqlSB = new StringBuffer(
				"select processid,flowid,deployid,startDate,startUsr,status,bussiessId,extendsField1,extendsField2 from  flow_info where ");
		String flowId = conditionForm.getFlowId();
		String deployId = conditionForm.getDeployId();
		String startUsr = conditionForm.getStartUsr();
		String status = conditionForm.getStatus();
		String bussinessId = conditionForm.getBussiessId();
		String extendsField1 = conditionForm.getExtendsField1();
		String extendsField2 = conditionForm.getExtendsField2();

		if (flowId != null && !"".equals(flowId.trim())) {
			sqlSB.append(" and flowid='").append(flowId).append("'");
		}
		if (deployId != null && !"".equals(deployId.trim())) {
			sqlSB.append(" and deployid='").append(deployId).append("'");
		}
		if (startUsr != null && !"".equals(startUsr.trim())) {
			sqlSB.append(" and startusr='").append(startUsr).append("'");
		}
		if (status != null && !"".equals(status.trim())) {
			sqlSB.append(" and status='").append(status).append("'");
		}
		if (bussinessId != null && !"".equals(bussinessId.trim())) {
			sqlSB.append(" and bussinessid='").append(bussinessId).append("'");
		}
		if (extendsField1 != null && !"".equals(extendsField1.trim())) {
			sqlSB.append(" and extendsfield1='").append(extendsField1)
					.append("'");
		}
		if (extendsField2 != null && !"".equals(extendsField2.trim())) {
			sqlSB.append(" and extendsfield2='").append(extendsField2)
					.append("'");
		}
		List<WorkFlowInstance> list = this.getJdbcTemplate().query(
				sqlSB.toString(),
				new ParameterizedRowMapper<WorkFlowInstance>() {
					@Override
					public WorkFlowInstance mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						WorkFlowInstance instance = new WorkFlowInstance();
						instance.setProcessId(rs.getString("processid"));
						instance.setFlowId(rs.getString("flowid"));
						instance.setDeployId(rs.getString("deployId"));
						instance.setStartDate(rs.getString("startDate"));
						instance.setStartUsr(rs.getString("startUsr"));
						instance.setStatus(rs.getString("status"));
						instance.setBussiessId(rs.getString("bussiessId"));
						instance.setExtendsField1(rs.getString("extendsField1"));
						instance.setExtendsField2(rs.getString("extendsField2"));
						return instance;
					}
				});

		// 查询流程实例子集合
		Map<String, WorkFlowInstance> flowInstanceMap = flowService
				.findAllProcessInstance();

		for (WorkFlowInstance wfi : list) {
			try {
				WorkFlowInstance tmp = flowInstanceMap.get(wfi.getFlowId());
				// 设置流程当前节点名称
				wfi.setCurFlowNodeName(tmp.getCurFlowNodeName());
				wfi.setCurTaskId(tmp.getCurTaskId());
				wfi.setCurTaskUserNickName(tmp.getCurTaskUserNickName());
			} catch (Exception ex) {
				wfi.setCurFlowNodeName("N/A");
				wfi.setCurTaskId("N/A");
				wfi.setCurTaskUserNickName("N/A");
			}
			try {
				String sql = "select dictname from sys_dict where dictkey=(select flowtype from  flow_design where deployid='"
						+ wfi.getDeployId() + "')";
				String dictname = this.getJdbcTemplate()
						.query(sql, new ParameterizedRowMapper<String>() {
							@Override
							public String mapRow(ResultSet rs, int rowNum)
									throws SQLException {
								return rs.getString("dictname");
							}
						}).get(0);
				wfi.setFlowType(dictname);
			} catch (Exception ex) {
				wfi.setFlowType("N/A");
			}

			try {
				String strdesignSQL = "select key,name from  flow_design  where  deployid='"
						+ wfi.getDeployId() + "'";
				FlowDesign design = this.getJdbcTemplate().queryForObject(
						strdesignSQL, new ParameterizedRowMapper<FlowDesign>() {
							@Override
							public FlowDesign mapRow(ResultSet rs, int rowNum)
									throws SQLException {
								FlowDesign design = new FlowDesign();
								design.setKey(rs.getString("key"));
								design.setName(rs.getString("name"));
								return design;
							}
						});
				wfi.setFlowName(design.getName());
				wfi.setFlowKey(design.getKey());
			} catch (Exception ex) {
				wfi.setFlowName("N/A");
				wfi.setFlowKey("N/A");
			}

			// 如果流程已经完成将不显示
			if (!flowService.processInstanceIsEnd(wfi.getFlowId())) {
				results.add(wfi);
			}
		}

		return results;

	}

	@Override
	public List<WorkFlowActivity> findHistoryActivity(String processId,
			String flowKey, String version) {
		return flowService.findHistoryActivityInfo(processId, flowKey, version);
	}

	@Override
	public WorkFlowActivity findCurrentActivity(String processId) {
		ActivityCoordinates coordinate = flowService
				.findActivityCoordinates(processId);
		WorkFlowActivity instance = new WorkFlowActivity();
		instance.setX(coordinate.getX());
		instance.setY(coordinate.getY());
		instance.setWidth(coordinate.getWidth());
		instance.setHeight(coordinate.getHeight());
		return instance;
	}

}
