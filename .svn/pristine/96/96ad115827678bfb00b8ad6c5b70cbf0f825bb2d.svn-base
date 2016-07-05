package com.yanbang.flow.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;

import org.springframework.jdbc.core.simple.ParameterizedRowMapper;
import org.springframework.stereotype.Repository;

import com.yanbang.dao.BaseDAO;
import com.yanbang.flow.entity.FlowProcess;
import com.yanbang.util.DateUtil;

@SuppressWarnings("deprecation")
@Repository
public class IWorkFlowProcessDAOImpl extends BaseDAO implements
		IWorkFlowProcessDAO {

	@Override
	public void saveWorkFlowProcess(FlowProcess flowProcess) {
		String strSQL = "insert into flow_process(processkey,processuser,processoper,processsuggestion,processdatetime,processnodename,processremark,flowid,historyTaskId) values("
				+ findNextProcesskey()
				+ ",'"
				+ flowProcess.getProcessuser()
				+ "','"
				+ flowProcess.getProcessoper()
				+ "','"
				+ flowProcess.getProcesssuggestion()
				+ "','"
				+ DateUtil.getCurrDateTime()
				+ "','"
				+ flowProcess.getProcessnodename()
				+ "','"
				+ flowProcess.getProcessremark()
				+ "','"
				+ flowProcess.getFlowid()
				+ "',"
				+ flowProcess.getHistoryTaskId() + ")";
		this.getJdbcTemplate().update(strSQL);
	}

	@Override
	public void deleteWorkFlowProcess(String processInstanceId) {
		String strSQL = "delete from flow_process where flowid='"
				+ processInstanceId + "'";
		this.getJdbcTemplate().update(strSQL);
	}

	@Override
	public Collection<FlowProcess> findFlowProcessByFlowId(String flowId) {
		String strSQL = "select processkey,processuser,processoper,processsuggestion,processdatetime,processnodename,processremark,flowid,historyTaskId from flow_process where flowid='"
				+ flowId + "' order by processkey";
		return this.getJdbcTemplate().query(strSQL,
				new ParameterizedRowMapper<FlowProcess>() {
					@Override
					public FlowProcess mapRow(ResultSet rs, int rowNum)
							throws SQLException {
						FlowProcess process = new FlowProcess();
						process.setProcesskey(rs.getInt("processkey"));
						process.setProcessuser(rs.getString("processuser"));
						process.setProcessoper(rs.getString("processoper"));
						process.setProcesssuggestion(rs
								.getString("processsuggestion"));
						process.setProcessdatetime(rs
								.getString("processdatetime"));
						process.setProcessnodename(rs
								.getString("processnodename"));
						process.setProcessremark(rs.getString("processremark"));
						process.setFlowid(rs.getString("flowid"));
						process.setHistoryTaskId(rs.getLong("historyTaskId"));
						return process;
					}
				});
	}

	private Long findNextProcesskey() {
		String strSQL = "select max(processkey)+1 from flow_process";
		return this.getJdbcTemplate().queryForLong(strSQL);
	}
}
