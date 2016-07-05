package com.yanbang.flow.dao;

import java.io.InputStream;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import org.jbpm.api.task.Task;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.simple.ParameterizedRowMapper;
import org.springframework.stereotype.Repository;

import com.yanbang.dao.BaseDAO;
import com.yanbang.page.Page;
import com.yanbang.flow.entity.DeployWorkFlow;
import com.yanbang.flow.entity.FlowDesign;
import com.yanbang.flow.entity.WorkFLowHistoryForm;
import com.yanbang.flow.entity.WorkFlowHistoryActivity;
import com.yanbang.flow.entity.WorkFlowHistoryDetail;
import com.yanbang.flow.entity.WorkFlowHistoryInstance;
import com.yanbang.flow.entity.WorkFlowHistoryProcess;
import com.yanbang.flow.entity.WorkFlowHistoryTask;
import com.yanbang.flow.entity.WorkFlowTask;
import com.yanbang.flow.service.JbpmFlowService;
import com.yanbang.security.entity.SysRole;
import com.yanbang.security.entity.SysUser;

@SuppressWarnings("deprecation")
@Repository
public class IWorkFlowManageDAOImpl extends BaseDAO implements
		IWorkFlowManageDAO {
	private JbpmFlowService flowService = JbpmFlowService.getInstance();

	@Override
	public String deploy(String jpdlFile, String jdplPNGImageFile) {
		return flowService.deploy(jpdlFile, jdplPNGImageFile);
	}

	@Override
	public String deploy(String jpdlZipFile) {
		return flowService.deploy(jpdlZipFile);
	}

	@Override
	public void suspendFlow(String deploymentId) {
		flowService.suspendFlow(deploymentId);
	}

	@Override
	public void resumeFlow(String deploymentId) {
		flowService.resumeFlow(deploymentId);
	}

	@Override
	public void deleteFlow(String deploymentId) {
		flowService.deleteFlow(deploymentId);
	}

	@Override
	public void deleteFlowCascade(String deploymentId) {
		flowService.deleteFlowCascade(deploymentId);
	}

	@Override
	public void deleteFlowInstance(String processInstanceId) {
		flowService.deleteFlowInstance(processInstanceId);
	}

	@Override
	public void endFlowInstance(String processInstanceId, String state) {
		flowService.endFlowInstance(processInstanceId, state);
	}

	@Override
	public void nextStep(String executionId) {
		flowService.nextStep(executionId);
	}

	@Override
	public void backStep(String taskId, String flowName) {
		flowService.backStep(taskId, flowName);
	}

	@Override
	public String startWorkFlow(Map<String, Object> variable, String flowKey) {
		return flowService.startWorkFlow(variable, flowKey);
	}

	@Override
	public List<WorkFlowTask> findPersonalTasks(String userNickName) {
		List<Task> list = flowService.findPersonalTasks(userNickName);
		List<WorkFlowTask> retlist = new ArrayList<WorkFlowTask>();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		for (Task task : list) {
			WorkFlowTask wftask = new WorkFlowTask();
			wftask.setTaskId(task.getId());
			wftask.setTaskExecuteId(task.getExecutionId());
			wftask.setTaskCreateDate(format.format(task.getCreateTime()));
			String curNodeName = flowService.getFlowCurLoaction(task
					.getExecutionId());
			wftask.setCurNodeName(curNodeName);
			retlist.add(wftask);
		}

		for (WorkFlowTask wftask : retlist) {
			String strSQL = "select a.key,a.name,a.version,a.flowtype,b.bussiessId,b.extendsField1,b.extendsField2  from  flow_design a, flow_info b  where a.deployid=b.deployid and  b.flowid='"
					+ wftask.getTaskExecuteId() + "'";
			try {
				FlowDesign design = this.getJdbcTemplate().queryForObject(
						strSQL, new ParameterizedRowMapper<FlowDesign>() {
							@Override
							public FlowDesign mapRow(ResultSet rs, int rowNum)
									throws SQLException {
								FlowDesign design = new FlowDesign();
								design.setKey(rs.getString("key"));
								design.setName(rs.getString("name"));
								design.setVersion(rs.getInt("version"));
								design.setFlowType(rs.getString("flowtype"));
								design.setRemark(rs.getString("bussiessId")); // 扩展字段
								design.setDescription(rs
										.getString("extendsField1")); // 扩展字段
								design.setContent(rs.getString("extendsField2")); // 扩展字段
								return design;
							}
						});
				wftask.setTaskFLowKey(design.getKey());
				wftask.setTaskFlowName(design.getName());
				wftask.setTaskFlowTypeId(design.getFlowType());
				wftask.setTaskFlowVersion(design.getVersion() + "");
				wftask.setBussiessId(design.getRemark()); // 扩展字段
				wftask.setExtendsField1(design.getDescription()); // 扩展字段
				wftask.setExtendsField2(design.getContent()); // 扩展字段

				try {
					String sql2 = "select dictName from sys_dict where dictkey='"
							+ wftask.getTaskFlowTypeId() + "'";
					String dictName = this.getJdbcTemplate()
							.query(sql2, new ParameterizedRowMapper<String>() {
								@Override
								public String mapRow(ResultSet rs, int rowNum)
										throws SQLException {
									return rs.getString("dictName");
								}
							}).get(0);
					wftask.setTaskFlowTypeName(dictName);
				} catch (Exception ex) {
					wftask.setTaskFlowTypeName("N/A");
					ex.printStackTrace();
				}
			} catch (Exception ex) {
				wftask.setTaskFLowKey("N/A");
				wftask.setTaskFlowName("N/A");
				wftask.setTaskFlowTypeId("N/A");
				wftask.setTaskFlowVersion("N/A");
				ex.printStackTrace();
			}
		}

		return retlist;
	}

	@SuppressWarnings({ "static-access", "rawtypes" })
	@Override
	public List<WorkFlowTask> findTransPersonalTasks(String userNickName,
			String flowType) {
		String strSQL = "select a.dbid_ taskId,a.execution_id_ taskExecuteId,a.activity_name_ curNodeName,b.unitid taskFLowUnitId,b.bussiessid from  flow_task a, flow_info b where a.execution_id_=b.flowId and a.assignee_='"
				+ userNickName
				+ "' and  a.execution_id_ like '"
				+ flowType
				+ "%'";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper().newInstance(WorkFlowTask.class));
	}

	@Override
	public List<WorkFlowTask> findGroupTasks(String userNickName) {
		// 根据用户查询用户的角色信息
		String userRolesSQL = "select rolecode from sys_userrole where useruuid in(select uuid from sys_user where usernickname='"
				+ userNickName + "')";
		Collection<SysRole> rolelist = this.getJdbcTemplate().query(
				userRolesSQL, new ParameterizedRowMapper<SysRole>() {
					@Override
					public SysRole mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						SysRole role = new SysRole();
						role.setRoleCode(rs.getLong("rolecode")); // 角色编号
						return role;
					}
				});

		List<WorkFlowTask> retlist = new ArrayList<WorkFlowTask>();
		for (SysRole role : rolelist) {
			// 根据角色任务
			String groupSQL = "SELECT a.DBID_,a.EXECUTION_ID_,a.CREATE_ FROM  FLOW_TASK a, FLOW_INFO b WHERE a.DBID_ IN(SELECT TASK_ FROM  FLOW_PARTICIPATION WHERE GROUPID_ ='"
					+ role.getRoleCode() + "') and a.EXECUTION_ID_=b.flowId";
			List<WorkFlowTask> tmptasklist = this.getJdbcTemplate().query(
					groupSQL, new ParameterizedRowMapper<WorkFlowTask>() {
						@Override
						public WorkFlowTask mapRow(ResultSet rs, int rowNum)
								throws SQLException {
							WorkFlowTask wftask = new WorkFlowTask();
							wftask.setTaskId(rs.getString("DBID_"));
							wftask.setTaskExecuteId(rs
									.getString("EXECUTION_ID_"));
							wftask.setTaskCreateDate(rs.getString("CREATE_"));
							return wftask;
						}
					});
			for (WorkFlowTask tmpTask : tmptasklist) {
				String curNodeName = flowService.getFlowCurLoaction(tmpTask
						.getTaskExecuteId());
				tmpTask.setCurNodeName(curNodeName);
				retlist.add(tmpTask);
			}
		}

		for (WorkFlowTask wftask : retlist) {
			String strSQL = "select a.key,a.name,a.version,a.flowtype,b.bussiessId,b.extendsField1,b.extendsField2  from  flow_design a, flow_info b  where a.deployid=b.deployid and a.orgid=b.orgid and b.flowid='"
					+ wftask.getTaskExecuteId() + "'";
			try {
				FlowDesign design = this.getJdbcTemplate().queryForObject(
						strSQL, new ParameterizedRowMapper<FlowDesign>() {
							@Override
							public FlowDesign mapRow(ResultSet rs, int rowNum)
									throws SQLException {
								FlowDesign design = new FlowDesign();
								design.setKey(rs.getString("key"));
								design.setName(rs.getString("name"));
								design.setVersion(rs.getInt("version"));
								design.setFlowType(rs.getString("flowtype"));
								design.setRemark(rs.getString("bussiessId")); // 扩展字段
								design.setDescription(rs
										.getString("extendsField1")); // 扩展字段
								return design;
							}
						});
				wftask.setTaskFLowKey(design.getKey());
				wftask.setTaskFlowName(design.getName());
				wftask.setTaskFlowTypeId(design.getFlowType());
				wftask.setTaskFlowVersion(design.getVersion() + "");
				wftask.setBussiessId(design.getRemark()); // 扩展字段
				wftask.setExtendsField1(design.getDescription()); // 扩展字段
				wftask.setExtendsField2(design.getFlowType()); // 扩展字段

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
					wftask.setTaskFlowTypeName(dictName);
				} catch (Exception ex) {
					wftask.setTaskFlowTypeName("N/A");
					ex.printStackTrace();
				}
			} catch (Exception ex) {
				wftask.setTaskFLowKey("N/A");
				wftask.setTaskFlowName("N/A");
				wftask.setTaskFlowTypeId("N/A");
				wftask.setTaskFlowVersion("N/A");
				ex.printStackTrace();
			}
		}

		return retlist;
	}

	@SuppressWarnings({ "static-access", "rawtypes" })
	@Override
	public List<WorkFlowTask> findTransGroupTasks(String userNickName,
			String flowType) {
		List<WorkFlowTask> retlist = new ArrayList<WorkFlowTask>();
		// 根据用户查询用户的角色信息
		String userRolesSQL = "select rolecode from sys_userrole where useruuid in(select uuid from sys_user where usernickname='"
				+ userNickName + "')";
		Collection<SysRole> rolelist = this.getJdbcTemplate().query(
				userRolesSQL, new ParameterizedRowMapper<SysRole>() {
					@Override
					public SysRole mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						SysRole role = new SysRole();
						role.setRoleCode(rs.getLong("rolecode")); // 角色编号
						return role;
					}
				});
		for (SysRole role : rolelist) {
			// 根据角色和单位查询任务
			String groupSQL = "SELECT a.dbid_ taskId,a.execution_id_ taskExecuteId,a.activity_name_ curNodeName,b.unitid taskFLowUnitId,b.bussiessid FROM  flow_task a, flow_info b WHERE a.execution_id_=b.flowId and a.dbid_ IN(SELECT TASK_ FROM  flow_participation WHERE groupid_ ='"
					+ role.getRoleName()
					+ "') and a.execution_id_ like '"
					+ flowType + "%'";
			List<WorkFlowTask> tmptasklist = this.getJdbcTemplate()
					.query(groupSQL,
							new BeanPropertyRowMapper()
									.newInstance(WorkFlowTask.class));
			for (WorkFlowTask tmpTask : tmptasklist) {
				retlist.add(tmpTask);
			}
		}

		return retlist;
	}

	@Override
	public void takeTask(String taskId, String userNickName) {
		flowService.takeTask(taskId, userNickName);
	}

	@Override
	public void completeTask(String taskId) {
		flowService.completeTask(taskId);
	}

	@Override
	public void completeTask(String taskId, Map<String, Object> variable) {
		flowService.completeTask(taskId, variable);
	}

	@SuppressWarnings({ "static-access", "rawtypes" })
	@Override
	public void completeTask(String taskId, String transitionName) {
		if (transitionName.contains("结束")) {
			WorkFLowHistoryForm workflowHisForm = new WorkFLowHistoryForm();
			// 查询流程任务信息
			String taskSQL = "select dbid_ lastTaskId,name_ lastNodeName,assignee_ lastNodeUserNickName,execution_id_ flowInstanceId,execution_ flowDBID from  flow_task where dbid_="
					+ taskId;
			workflowHisForm = this.getJdbcTemplate().queryForObject(
					taskSQL,
					new BeanPropertyRowMapper()
							.newInstance(WorkFLowHistoryForm.class));
			// 查询最后节点的角色
			try {
				String roleSQL = "select groupid_ from  flow_participation where task_="
						+ workflowHisForm.getLastTaskId()
						+ " and type_='candidate' and groupid_ is not null and userid_ is null";
				String roleName = this.getJdbcTemplate().queryForObject(
						roleSQL, String.class);
				workflowHisForm.setLastNodeRoleKey(roleName);
			} catch (Exception RoE) {
				workflowHisForm.setLastNodeRoleKey("N/A");
			}

			try {
				String hisSQL = "select dbversion_ dbVersion ,procdefid_ flowId,hisactinst_ hisactinst from  flow_execution where dbid_="
						+ workflowHisForm.getFlowDBID();
				WorkFLowHistoryForm wfh = this
						.getJdbcTemplate()
						.queryForObject(
								hisSQL,
								new BeanPropertyRowMapper()
										.newInstance(WorkFLowHistoryForm.class));
				workflowHisForm.setFlowId(wfh.getFlowId());
				workflowHisForm.setDbVersion(wfh.getDbVersion());
				workflowHisForm.setHisactinst(wfh.getHisactinst());
			} catch (Exception hisE) {
				workflowHisForm.setFlowId("N/A");
				workflowHisForm.setDbVersion("N/A");
				workflowHisForm.setHisactinst("N/A");
			}
			String strSQL = "Insert into  flow_hist_form(FLOWID,FLOWDBID,LASTTASKID,LASTNODEROLEKEY,LASTNODEUSERNICKNAME,LASTNODENAME,DBVERSION,HISACTINST,FLOWINSTANCEID) "
					+ " values ('"
					+ workflowHisForm.getFlowId()
					+ "',"
					+ workflowHisForm.getFlowDBID()
					+ ","
					+ workflowHisForm.getLastTaskId()
					+ ",'"
					+ workflowHisForm.getLastNodeRoleKey()
					+ "','"
					+ workflowHisForm.getLastNodeUserNickName()
					+ "','"
					+ workflowHisForm.getLastNodeName()
					+ "',"
					+ workflowHisForm.getDbVersion()
					+ ","
					+ workflowHisForm.getHisactinst()
					+ ",'"
					+ workflowHisForm.getFlowInstanceId() + "')";
			this.getJdbcTemplate().update(strSQL);
		}
		flowService.completeTask(taskId, transitionName);
	}

	@Override
	public String getFlowCurLoaction(String executeId) {
		return flowService.getFlowCurLoaction(executeId);
	}

	@Override
	public String getFlowVariables(String executeId, String key) {
		return flowService.getFlowVariables(executeId, key);
	}

	@Override
	public void updateFlowVariable(String executeId, String key, Object value) {
		flowService.updateFlowVariable(executeId, key, value);
	}

	@Override
	public void createFlowVariable(String executeId, String key, Object value) {
		flowService.createFlowVariable(executeId, key, value);
	}

	@Override
	public void createTaskVariable(String taskId, Map<String, Object> variable) {
		flowService.createTaskVariable(taskId, variable);
	}

	@Override
	public String getTaskVariable(String taskId, String key) {
		return flowService.getTaskVariable(taskId, key);
	}

	@Override
	public Page<DeployWorkFlow> findWorkFlows(Page<DeployWorkFlow> page) {
		List<DeployWorkFlow> pageResult = new ArrayList<DeployWorkFlow>();
		List<DeployWorkFlow> deployAlllist = flowService
				.findAllDeployWorkflow();
		page.paginationProcess(new Long(deployAlllist.size()));
		int startIndex = page.getStartIndex().intValue();
		int endIndex = page.getEndIndex().intValue();
		if (endIndex > deployAlllist.size()) {
			endIndex = deployAlllist.size();
		}
		for (int index = (startIndex - 1); index < endIndex; index++) {
			DeployWorkFlow dwf = deployAlllist.get(index);
			String flowName = dwf.getFlowName();
			String version = dwf.getFlowVersion();
			FlowDesign fd = findFlowDesignByName(flowName, version);
			if (fd != null) {
				dwf.setFlowDeploymentDatetime(fd.getDeployDatetime());
				dwf.setFlowType(fd.getFlowType());
				dwf.setFlowDesc(fd.getDescription());
			}
			pageResult.add(dwf);
		}
		page.setPageResult(pageResult);
		return page;
	}

	@Override
	public Collection<DeployWorkFlow> findAllWorkFlow() {
		return flowService.findAllDeployWorkflow();
	}

	@Override
	public Page<DeployWorkFlow> findAllWorkFlowsByMutiConditon(
			Page<DeployWorkFlow> page, DeployWorkFlow wfm) {
		try {
			String flowName = wfm.getFlowName();
			String flowKey = wfm.getFlowKey();
			String flowType = wfm.getFlowType();
			String flowStatus = wfm.getFlowStatus();
			// ----------------------------------------------------------------------------
			List<DeployWorkFlow> deployAlllist = flowService
					.findAllDeployWorkflow();
			List<DeployWorkFlow> firstFilterResult = new ArrayList<DeployWorkFlow>();
			for (DeployWorkFlow pd : deployAlllist) {
				String version = pd.getFlowVersion();
				FlowDesign fd = findFlowDesignByName(pd.getFlowName(), version);
				if (fd != null) {
					pd.setFlowDeploymentDatetime(fd.getDeployDatetime());
					pd.setFlowType(fd.getFlowType());
					pd.setFlowDesc(fd.getDescription());
				}
				if (flowName != null && !"".equals(flowName.trim())) {
					if (pd.getFlowName().equals(flowName)) {
						if (flowKey != null && !"".equals(flowKey.trim())) {
							if (pd.getFlowKey().equals(flowKey)) {
								firstFilterResult.add(pd);
							}
						} else {
							firstFilterResult.add(pd);
						}
					}
				} else {
					if (flowKey != null && !"".equals(flowKey.trim())) {
						if (pd.getFlowKey().equals(flowKey)) {
							firstFilterResult.add(pd);
						}
					} else {
						firstFilterResult.add(pd);
					}
				}
			}
			List<DeployWorkFlow> secondFilterResult = new ArrayList<DeployWorkFlow>();
			// 在第一次过滤的基础上过滤第二次
			for (DeployWorkFlow pd : firstFilterResult) {
				if (!"all".equals(flowType)) {
					if (pd.getFlowType().equals(flowType)) {
						if (!"all".equals(flowStatus)) {
							if (pd.getFlowStatus().equals(flowStatus)) {
								secondFilterResult.add(pd);
							}
						} else {
							secondFilterResult.add(pd);
						}
					}
				} else {
					if (!"all".equals(flowStatus)) {
						if (pd.getFlowStatus().equals(flowStatus)) {
							secondFilterResult.add(pd);
						}
					} else {
						secondFilterResult.add(pd);
					}
				}
			}
			// ===================================================================
			page.paginationProcess(new Long(secondFilterResult.size()));
			int startIndex = page.getStartIndex().intValue();
			int endIndex = page.getEndIndex().intValue();
			if (endIndex > secondFilterResult.size()) {
				endIndex = secondFilterResult.size();
			}
			List<DeployWorkFlow> pageResult = new ArrayList<DeployWorkFlow>();
			for (int index = (startIndex - 1); index < endIndex; index++) {
				DeployWorkFlow dwf = secondFilterResult.get(index);
				pageResult.add(dwf);
			}
			page.setPageResult(pageResult);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return page;
	}

	/**
	 * 查看流程设计信息
	 * 
	 * @param name
	 * @return
	 */
	private FlowDesign findFlowDesignByName(String name, String version) {
		try {
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
							design.setCreatedatetime(rs
									.getString("createdatetime"));
							design.setCreateusername(rs
									.getString("createusername"));
							design.setStatus(rs.getInt("status"));
							design.setPath(rs.getString("path"));
							design.setContent(rs.getString("content"));
							design.setRemark(rs.getString("remark"));
							design.setFlowType(rs.getString("flowtype"));
							design.setDeployId(rs.getString("deployid"));
							design.setDeployDatetime(rs
									.getString("deploydatetime"));
							design.setDeployUsername(rs
									.getString("deployusername"));
							return design;
						}
					});

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
			return design;
		} catch (Exception ex) {
			return null;
		}
	}

	@Override
	public InputStream findImage(String deploymentId) {
		return flowService.findImage(deploymentId);
	}

	@Override
	public Collection<String> getIncomingTransitions(String taskId,
			String flowKey, String verison) {
		return flowService.getIncomingTransitions(taskId, flowKey, verison);
	}

	@Override
	public Collection<String> getOutcomingTransitions(String taskId,
			String flowKey, String verison) {
		return flowService.getOutcomingTransitions(taskId, flowKey, verison);
	}

	@Override
	public Long getCurTaskId(String executeId) {
		try {
			String strSQL = "select dbid_ from  flow_task where execution_id_='"
					+ executeId + "'";
			return this.getJdbcTemplate().queryForLong(strSQL);
		} catch (Exception ex) {
			return new Long(-1);
		}
	}

	@Override
	public Collection<WorkFlowHistoryActivity> findWorkFlowHistoryActivityInstance(
			String processId) {
		return flowService.findWorkFlowHistoryActivityInstance(processId);
	}

	@Override
	public Collection<WorkFlowHistoryProcess> findWorkFlowHistoryProcessInstance(
			String processId) {
		return flowService.findWorkFlowHistoryProcessInstance(processId);
	}

	@Override
	public Collection<WorkFlowHistoryTask> findWorkFlowHistoryTask(
			String executionId) {
		return flowService.findWorkFlowHistoryTask(executionId);
	}

	@Override
	public Collection<WorkFlowHistoryDetail> findWorkFlowHistoryDetail(
			String processId) {
		return flowService.findWorkFlowHistoryDetail(processId);
	}

	@Override
	public Collection<WorkFlowHistoryInstance> findAllHistoryWorkFlow(
			String executId) {
		String strSQL = "select c.historytaskid taskId,a.execution_ executId,a.type_ curNodeType,b.assignee_ assignee,c.processuser processUser,c.processoper processOper,c.processsuggestion processSuggestion,b.state_ taskState,a.transition_ transition,a.activity_name_ activityName,to_char(a.start_,'yyyy-mm-dd hh24:mi:ss') taskStartTime,to_char(a.end_,'yyyy-mm-dd hh24:mi:ss') taskendTime,a.duration_ taskDurTime,to_char(b.create_,'yyyy-mm-dd hh24:mi:ss') taskCreateTime,to_char(b.end_,'yyyy-mm-dd hh24:mi:ss') taskAllEndTime,b.duration_ taskAllDurTime";
		strSQL += " from  flow_hist_actinst a, flow_hist_task b, flow_process c";
		strSQL += " where a.htask_ =b.dbid_ and a.execution_=b.execution_ and c.historytaskid=b.dbid_ and a.execution_=c.flowid  and a.execution_='"
				+ executId + "'";
		strSQL += " order by a.execution_,c.processkey";

		Collection<WorkFlowHistoryInstance> list = this.getJdbcTemplate()
				.query(strSQL,
						new ParameterizedRowMapper<WorkFlowHistoryInstance>() {
							@Override
							public WorkFlowHistoryInstance mapRow(ResultSet rs,
									int rowNum) throws SQLException {
								WorkFlowHistoryInstance history = new WorkFlowHistoryInstance();
								history.setTaskId(rs.getString("taskId"));
								history.setExecutId(rs.getString("executId"));
								history.setCurNodeType(rs
										.getString("curNodeType"));
								history.setAssignee(rs.getString("assignee"));
								history.setProcessUser(rs
										.getString("processUser"));
								history.setProcessOper(rs
										.getString("processOper"));
								history.setProcessSuggestion(rs
										.getString("processSuggestion"));
								String taskState = rs.getString("taskState");
								if (taskState != null) {
									history.setTaskState("completed"
											.equals(taskState) ? "完成" : "");
								} else {
									history.setTaskState("终止");
								}
								history.setTransition(rs
										.getString("transition"));
								history.setActivityName(rs
										.getString("activityName"));
								history.setTaskStartTime(rs
										.getString("taskStartTime"));
								history.setTaskendTime(rs
										.getString("taskendTime"));
								history.setTaskDurTime(convertMillSeconds(rs
										.getLong("taskDurTime")));
								history.setTaskCreateTime(rs
										.getString("taskCreateTime"));
								history.setTaskAllEndTime(rs
										.getString("taskAllEndTime"));
								history.setTaskAllDurTime(convertMillSeconds(rs
										.getLong("taskAllDurTime")));
								history.setAssignee(history.getProcessUser());
								return history;
							}
						});
		return list;
	}

	@Override
	public Page<WorkFlowHistoryProcess> findHistoryWorkFlows(String flowTypeId,
			Page<WorkFlowHistoryProcess> page) {
		// c.deployment_与d.deployid类型不匹配，所以要用to_char强制转换
		String strSQL = "select a.id_,a.procdefid_,to_char(a.start_,'yyyy-mm-dd hh24:mi:ss') startdate,to_char(a.end_,'yyyy-mm-dd hh24:mi:ss') enddate,a.duration_,a.state_,a.endactivity_,d.key,d.version,d.flowtype,d.name";
		strSQL += " from  flow_hist_procinst a, flow_info b , flow_deployprop c, flow_design d";
		strSQL += " where a.id_=b.flowid and a.state_='ended' and a.procdefid_=c.stringval_ and to_char(c.deployment_)=to_char(d.deployid) ";
		if (flowTypeId != null && !"".equals(flowTypeId.trim())) {
			strSQL += " and d.flowtype='" + flowTypeId + "'";
		}
		strSQL += " order by a.end_ desc";
		String strCountSQL = "select count(*) from  flow_hist_procinst a, flow_info b , flow_deployprop c, flow_design d";
		strCountSQL += " where a.id_=b.flowid and a.state_='ended' and a.procdefid_=c.stringval_ and to_char(c.deployment_)=to_char(d.deployid)";
		if (flowTypeId != null && !"".equals(flowTypeId.trim())) {
			strCountSQL += " and d.flowtype='" + flowTypeId + "'";
		}
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		Collection<WorkFlowHistoryProcess> list = this.getJdbcTemplate().query(
				paginationSQL,
				new ParameterizedRowMapper<WorkFlowHistoryProcess>() {
					@Override
					public WorkFlowHistoryProcess mapRow(ResultSet rs,
							int rowNum) throws SQLException {
						WorkFlowHistoryProcess history = new WorkFlowHistoryProcess();
						history.setInstanceId(rs.getString("id_"));
						history.setDefinitionId(rs.getString("procdefid_"));
						history.setEndActivityName(rs.getString("endactivity_"));
						history.setFlowTypeId(rs.getString("flowtype"));
						history.setKey(rs.getString("key"));
						history.setStartTime(rs.getString("startdate"));
						history.setEndTime(rs.getString("enddate"));
						history.setDuration(convertMillSeconds(rs
								.getLong("duration_")));
						history.setState(rs.getString("state_").equals("ended") ? "完成"
								: "活动");
						history.setVersion(rs.getString("version"));
						history.setFlowName(rs.getString("name"));
						history.setFlowTypeName("N/A");
						return history;
					}
				});
		for (WorkFlowHistoryProcess wfhp : list) {
			try {
				String sql2 = "select dictName from sys_dict where dictkey='"
						+ wfhp.getFlowTypeId() + "'";
				String dictName = this.getJdbcTemplate()
						.query(sql2, new ParameterizedRowMapper<String>() {
							@Override
							public String mapRow(ResultSet rs, int rowNum)
									throws SQLException {
								return rs.getString("dictName");
							}
						}).get(0);
				wfhp.setFlowTypeName(dictName);
			} catch (Exception ex) {
				ex.printStackTrace();
				wfhp.setFlowTypeName("N/A");
			}
		}
		page.setPageResult(list);
		return page;
	}

	@Override
	public Page<WorkFlowHistoryProcess> findHistoryWorkFlowsByMutiConditon(
			Page<WorkFlowHistoryProcess> page, WorkFlowHistoryProcess wfhi) {

		String condtionSQL = "";
		if (wfhi.getFlowTypeId() != null
				&& !"".equals(wfhi.getFlowTypeId().trim())) {
			condtionSQL = condtionSQL + " and d.flowtype= '"
					+ wfhi.getFlowTypeId() + "'";
		}
		if (wfhi.getStartTime() != null
				&& !"".equals(wfhi.getStartTime().trim())) {
			condtionSQL = condtionSQL
					+ " and to_char(a.start_,'yyyy-mm-dd')>='"
					+ wfhi.getStartTime() + "'";
		}
		if (wfhi.getEndTime() != null && !"".equals(wfhi.getEndTime().trim())) {
			condtionSQL = condtionSQL + " and to_char(a.end_,'yyyy-mm-dd')<='"
					+ wfhi.getEndTime() + "'";
		}
		// c.deployment_与d.deployid类型不匹配，所以要用to_char强制转换
		String strSQL = "select a.id_,a.procdefid_,to_char(a.start_,'yyyy-mm-dd hh24:mi:ss') startdate,to_char(a.end_,'yyyy-mm-dd hh24:mi:ss') enddate,a.duration_,a.state_,a.endactivity_,d.key,d.version,d.flowtype,d.name";
		strSQL += " from  flow_hist_procinst a, flow_info b , flow_deployprop c, flow_design d";
		strSQL += " where a.id_=b.flowid and a.state_='ended' and a.procdefid_=c.stringval_ and to_char(c.deployment_)=to_char(d.deployid)";
		strSQL += condtionSQL;
		strSQL += " order by a.end_ desc";
		String strCountSQL = "select count(*) from  flow_hist_procinst a, flow_info b , flow_deployprop c, flow_design d";
		strCountSQL += " where a.id_=b.flowid and a.state_='ended' and a.procdefid_=c.stringval_ and to_char(c.deployment_)=to_char(d.deployid)";
		strCountSQL += condtionSQL;
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		Collection<WorkFlowHistoryProcess> list = this.getJdbcTemplate().query(
				paginationSQL,
				new ParameterizedRowMapper<WorkFlowHistoryProcess>() {
					@Override
					public WorkFlowHistoryProcess mapRow(ResultSet rs,
							int rowNum) throws SQLException {
						WorkFlowHistoryProcess history = new WorkFlowHistoryProcess();
						history.setInstanceId(rs.getString("id_"));
						history.setDefinitionId(rs.getString("procdefid_"));
						history.setEndActivityName(rs.getString("endactivity_"));
						history.setFlowTypeId(rs.getString("flowtype"));
						history.setKey(rs.getString("key"));
						history.setStartTime(rs.getString("startdate"));
						history.setEndTime(rs.getString("enddate"));
						history.setDuration(convertMillSeconds(rs
								.getLong("duration_")));
						history.setState(rs.getString("state_").equals("ended") ? "完成"
								: "活动");
						history.setVersion(rs.getString("version"));
						history.setFlowName(rs.getString("name"));
						history.setFlowTypeName("N/A");
						return history;
					}
				});

		for (WorkFlowHistoryProcess wfhp : list) {
			try {
				String sql2 = "select dictName from sys_dict where dictkey='"
						+ wfhp.getFlowTypeId() + "'";
				String dictName = this.getJdbcTemplate()
						.query(sql2, new ParameterizedRowMapper<String>() {
							@Override
							public String mapRow(ResultSet rs, int rowNum)
									throws SQLException {
								return rs.getString("dictName");
							}
						}).get(0);
				wfhp.setFlowTypeName(dictName);
			} catch (Exception ex) {
				ex.printStackTrace();
				wfhp.setFlowTypeName("N/A");
			}
		}
		page.setPageResult(list);
		return page;
	}

	@Override
	public Collection<WorkFlowTask> findOtherPersonTask(String userNickName) {
		String strSQL = "select distinct a.id_,d.assignee_,c.deployid,d.dbid_,to_char(d.create_,'yyyy-mm-dd hh24:mi:ss') create_,c.bussiessId,c.extendsField1,c.extendsField2 from  flow_hist_procinst a, flow_hist_task b, flow_info c, flow_task d where a.id_=b.execution_ and a.id_=c.flowId and c.flowId=d.execution_id_ and a.state_='active' and b.assignee_='"
				+ userNickName + "' and d.assignee_!='" + userNickName + "'";
		Collection<WorkFlowTask> list = this.getJdbcTemplate().query(strSQL,
				new ParameterizedRowMapper<WorkFlowTask>() {
					@Override
					public WorkFlowTask mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						WorkFlowTask task = new WorkFlowTask();
						task.setTaskId(rs.getString("dbid_"));
						task.setTaskExecuteId(rs.getString("id_"));
						task.setAssignee(rs.getString("assignee_"));
						task.setDeployid(rs.getString("deployid"));
						task.setTaskCreateDate(rs.getString("create_"));
						task.setBussiessId(rs.getString("bussiessId"));
						task.setExtendsField1(rs.getString("extendsField1"));
						task.setExtendsField2(rs.getString("extendsField2"));
						return task;
					}
				});
		for (WorkFlowTask wftask : list) {
			String curNodeName = flowService.getFlowCurLoaction(wftask
					.getTaskExecuteId());
			wftask.setCurNodeName(curNodeName);

			String strdSQL = "select a.key,a.name,a.version,a.orgid,a.flowtype,a.flowunitid  from  flow_design a, flow_info b  where a.deployid=b.deployid and a.orgid=b.orgid and b.flowid='"
					+ wftask.getTaskExecuteId() + "'";
			try {
				FlowDesign design = this.getJdbcTemplate().queryForObject(
						strdSQL, new ParameterizedRowMapper<FlowDesign>() {
							@Override
							public FlowDesign mapRow(ResultSet rs, int rowNum)
									throws SQLException {
								FlowDesign design = new FlowDesign();
								design.setKey(rs.getString("key"));
								design.setName(rs.getString("name"));
								design.setVersion(rs.getInt("version"));
								design.setFlowType(rs.getString("flowtype"));
								return design;
							}
						});
				wftask.setTaskFLowKey(design.getKey());
				wftask.setTaskFlowName(design.getName());
				wftask.setTaskFlowTypeId(design.getFlowType());
				wftask.setTaskFlowVersion(design.getVersion() + "");

				try {
					String sql = "select username from sys_user where usernickname='"
							+ wftask.getAssignee() + "'";
					String userRealName = this.getJdbcTemplate()
							.queryForObject(sql, String.class);
					wftask.setAssignee(userRealName);
				} catch (Exception ex) {
					wftask.setAssignee("N/A");
					ex.printStackTrace();
				}

				try {
					String sql2 = "select dictName from sys_dict where dictkey='"
							+ wftask.getTaskFlowTypeId() + "' ";
					String dictName = this.getJdbcTemplate()
							.query(sql2, new ParameterizedRowMapper<String>() {
								@Override
								public String mapRow(ResultSet rs, int rowNum)
										throws SQLException {
									return rs.getString("dictName");
								}
							}).get(0);
					wftask.setTaskFlowTypeName(dictName);
				} catch (Exception ex) {
					wftask.setTaskFlowTypeName("N/A");
					ex.printStackTrace();
				}
			} catch (Exception ex) {
				wftask.setTaskFLowKey("N/A");
				wftask.setTaskFlowName("N/A");
				wftask.setTaskFlowTypeId("N/A");
				wftask.setTaskFlowVersion("N/A");
				ex.printStackTrace();
			}
		}

		return list;
	}

	@SuppressWarnings({ "static-access", "rawtypes" })
	@Override
	public Collection<WorkFlowTask> findTransOtherPersonTask(
			String userNickName, String flowType) {
		String strSQL = "select d.assignee_ assignee,c.unitid taskFLowUnitId,d.dbid_ taskId,c.bussiessId,d.activity_name_ curNodeName,d.execution_id_ taskExecuteId from  flow_hist_procinst a, flow_hist_task b, flow_info c, flow_task d where a.id_=b.execution_ and a.id_=c.flowId and c.flowId=d.execution_id_ and a.state_='active' and b.assignee_='"
				+ userNickName
				+ "' and (d.assignee_!='"
				+ userNickName
				+ "'  or d.assignee_ is null) and d.execution_id_ like '"
				+ flowType
				+ "%' group by d.assignee_ ,c.unitid ,d.dbid_ ,c.bussiessId,d.activity_name_ ,d.execution_id_ ";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper().newInstance(WorkFlowTask.class));
	}

	@Override
	public Collection<WorkFlowTask> findFinishedPersonTask(String userNickName) {
		String strSQL = "select id_,to_char(start_,'yyyy-mm-dd hh24:mi:ss') start_,to_char(end_,'yyyy-mm-dd hh24:mi:ss') end_,duration_ from  flow_hist_procinst where state_='ended' and id_ in (select distinct execution_ from  flow_hist_task where assignee_='"
				+ userNickName + "')";
		Collection<WorkFlowTask> list = this.getJdbcTemplate().query(strSQL,
				new ParameterizedRowMapper<WorkFlowTask>() {
					@Override
					public WorkFlowTask mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						WorkFlowTask task = new WorkFlowTask();
						task.setTaskExecuteId(rs.getString("id_"));
						task.setStartDate(rs.getString("start_"));
						task.setEndDate(rs.getString("end_"));
						task.setDuration(convertMillSeconds(rs
								.getLong("duration_")));
						return task;
					}
				});
		for (WorkFlowTask wftask : list) {
			String strdSQL = "select a.key,a.name,a.version,a.flowtype,b.bussiessId,b.extendsField1,b.extendsField2  from  flow_design a, flow_info b  where a.deployid=b.deployid and a.orgid=b.orgid and b.flowid='"
					+ wftask.getTaskExecuteId() + "'";
			try {
				FlowDesign design = this.getJdbcTemplate().queryForObject(
						strdSQL, new ParameterizedRowMapper<FlowDesign>() {
							@Override
							public FlowDesign mapRow(ResultSet rs, int rowNum)
									throws SQLException {
								FlowDesign design = new FlowDesign();
								design.setKey(rs.getString("key"));
								design.setName(rs.getString("name"));
								design.setVersion(rs.getInt("version"));
								design.setFlowType(rs.getString("flowtype"));
								design.setRemark(rs.getString("bussiessId")); // 扩展字段
								design.setDescription(rs
										.getString("extendsField1")); // 扩展字段
								design.setContent(rs.getString("extendsField2")); // 扩展字段
								return design;
							}
						});
				wftask.setTaskFLowKey(design.getKey());
				wftask.setTaskFlowName(design.getName());
				wftask.setTaskFlowTypeId(design.getFlowType());
				wftask.setTaskFlowVersion(design.getVersion() + "");
				wftask.setBussiessId(design.getRemark()); // 扩展字段
				wftask.setExtendsField1(design.getDescription()); // 扩展字段
				wftask.setExtendsField2(design.getContent()); // 扩展字段

				try {
					String sql2 = "select dictName from sys_dict where dictkey='"
							+ wftask.getTaskFlowTypeId() + "' ";
					String dictName = this.getJdbcTemplate()
							.query(sql2, new ParameterizedRowMapper<String>() {
								@Override
								public String mapRow(ResultSet rs, int rowNum)
										throws SQLException {
									return rs.getString("dictName");
								}
							}).get(0);
					wftask.setTaskFlowTypeName(dictName);
				} catch (Exception ex) {
					wftask.setTaskFlowTypeName("N/A");
					ex.printStackTrace();
				}
			} catch (Exception ex) {
				wftask.setTaskFLowKey("N/A");
				wftask.setTaskFlowName("N/A");
				wftask.setTaskFlowTypeId("N/A");
				wftask.setTaskFlowVersion("N/A");
				ex.printStackTrace();
			}
		}

		return list;
	}

	@Override
	public Collection<WorkFlowTask> findTransFinishedPersonTask(
			String userNickName, String flowType) {
		String strSQL = "select a.id_,to_char(a.start_,'yyyy-mm-dd hh24:mi:ss') start_,to_char(a.end_,'yyyy-mm-dd hh24:mi:ss') end_,a.duration_ ,b.bussiessId from  flow_hist_procinst a,  flow_info b where a.id_=b.flowId and a.state_='ended' and a.id_ in (select distinct execution_ from  flow_hist_task where assignee_='"
				+ userNickName + "') and a.id_ like '" + flowType + "%'";
		return this.getJdbcTemplate().query(strSQL,
				new ParameterizedRowMapper<WorkFlowTask>() {
					@Override
					public WorkFlowTask mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						WorkFlowTask task = new WorkFlowTask();
						task.setTaskExecuteId(rs.getString("id_"));
						task.setStartDate(rs.getString("start_"));
						task.setEndDate(rs.getString("end_"));
						task.setDuration(convertMillSeconds(rs
								.getLong("duration_")));
						task.setBussiessId(rs.getString("bussiessId"));
						return task;
					}
				});
	}

	/**
	 * 将时间毫秒转化为字符串
	 * 
	 * @param ms
	 * @return
	 */
	private String convertMillSeconds(long ms) {
		String ret = "N/A";
		if (ms <= 60000) {
			ret = "<1 分钟";
		} else if (ms <= 3600000) {
			ret = (ms / 60000) + " 分钟";
		} else if (ms <= 86400000) {
			ret = (ms / 3600000) + " 小时";
		} else {
			ret = (ms / 86400000) + " 天";
		}
		return ret;
	}

	@Override
	public String findDeployId(String flowKey) {
		try {
			String strSQL = "select deployid from  flow_design where key='"
					+ flowKey + "' and rownum=1";

			return this.getJdbcTemplate().queryForObject(strSQL, String.class);
		} catch (Exception ex) {
			return "N/A";
		}
	}

	@Override
	public String createGroup(String groupName) {
		return flowService.createGroup(groupName);
	}

	@Override
	public String createUser(String userId, String givenName, String familyName) {
		try {
			flowService.createUser(userId, givenName, familyName);
			String arrUserId[] = userId.split("#");
			String strSQL = "select DBID_ from  FLOW_ID_USER where DBVERSION_='"
					+ arrUserId[0] + "' and GIVENNAME_='" + givenName + "'";
			return this.getJdbcTemplate().queryForLong(strSQL) + "";
		} catch (Exception ex) {
			return "N/A";
		}
	}

	@Override
	public void createMembership(String userId, String groupId) {
		flowService.createMembership(userId, groupId);
	}

	@Override
	public String findCurTaskNodeRoleValue(String taskId) {
		try {
			String strSQL = "select groupid_ from  flow_participation where task_='"
					+ taskId + "' and groupid_ is not null";
			return this.getJdbcTemplate().queryForObject(strSQL, String.class);
		} catch (Exception ex) {
			return "N/A";
		}
	}

	@SuppressWarnings({ "static-access", "rawtypes" })
	@Override
	public void undoFinishedTask(String flowInstanceId) {
		String findSQL = "select * from  flow_hist_form where flowInstanceId='"
				+ flowInstanceId + "'";
		WorkFLowHistoryForm workflowHisForm = this.getJdbcTemplate()
				.queryForObject(
						findSQL,
						new BeanPropertyRowMapper()
								.newInstance(WorkFLowHistoryForm.class));
		if (workflowHisForm != null) {
			// 恢复实例
			String strSQL1 = "Insert into  flow_execution (DBID_,CLASS_,DBVERSION_,ACTIVITYNAME_,PROCDEFID_,HASVARS_,NAME_,KEY_,ID_,STATE_,SUSPHISTSTATE_,PRIORITY_,HISACTINST_,PARENT_,INSTANCE_,SUPEREXEC_,SUBPROCINST_,PARENT_IDX_) values ("
					+ workflowHisForm.getFlowDBID()
					+ ",'pvm',"
					+ workflowHisForm.getDbVersion()
					+ ",'"
					+ workflowHisForm.getLastNodeName()
					+ "','"
					+ workflowHisForm.getFlowId()
					+ "',1,null,null,'"
					+ flowInstanceId
					+ "','active-root',null,0,"
					+ workflowHisForm.getHisactinst()
					+ ",null,"
					+ workflowHisForm.getFlowDBID() + ",null,null,null)";
			// 恢复任务
			String strSQL5 = "Insert into  flow_task (DBID_,CLASS_,DBVERSION_,NAME_,DESCR_,STATE_,SUSPHISTSTATE_,ASSIGNEE_,FORM_,PRIORITY_,CREATE_,DUEDATE_,PROGRESS_,SIGNALLING_,EXECUTION_ID_,ACTIVITY_NAME_,HASVARS_,SUPERTASK_,EXECUTION_,PROCINST_,SWIMLANE_,TASKDEFNAME_) values ("
					+ workflowHisForm.getLastTaskId()
					+ ",'T',1,'"
					+ workflowHisForm.getLastNodeName()
					+ "',null,'open',null,'"
					+ workflowHisForm.getLastNodeUserNickName()
					+ "',null,0,to_timestamp(sysdate,'DD-MON-RR HH.MI.SS.FF AM'),null,null,1,'"
					+ flowInstanceId
					+ "','"
					+ workflowHisForm.getLastNodeName()
					+ "',0,null,"
					+ workflowHisForm.getFlowDBID()
					+ ","
					+ workflowHisForm.getFlowDBID()
					+ ",null,'"
					+ workflowHisForm.getLastNodeName() + "')";
			// 恢复角色信息
			String strSQL6 = "Insert into  flow_participation (DBID_,DBVERSION_,GROUPID_,USERID_,TYPE_,TASK_,SWIMLANE_) values ("
					+ (workflowHisForm.getLastTaskId() + 1)
					+ ",0,'"
					+ workflowHisForm.getLastNodeRoleKey()
					+ "',null,'candidate',"
					+ workflowHisForm.getLastTaskId()
					+ ",null)";
			// 恢复状态 ended
			String strSQL7 = "update  flow_hist_procinst set state_='active' where id_='"
					+ flowInstanceId + "'";
			// 删除记录表
			String strSQL8 = "delete from  flow_hist_form where flowinstanceId='"
					+ flowInstanceId + "'";

			String arrSql[] = { strSQL1, strSQL5, strSQL6, strSQL7, strSQL8 };
			this.getJdbcTemplate().batchUpdate(arrSql);
		}
	}

	@SuppressWarnings({ "static-access", "rawtypes" })
	@Override
	public Collection<SysUser> findUserNameByRole(String taskId) {
		String strSQL = "select usercode,userNickName,userName from sys_user a,flow_participation b where a.userNickName=b.userid_  and b.task_='"
				+ taskId + "' and b.userid_ is not null  and a.userstatus=0";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper().newInstance(SysUser.class));
	}
}
