package com.yanbang.flow.handler;

import java.util.Set;

import org.jbpm.api.model.OpenExecution;
import org.jbpm.api.task.Assignable;
import org.jbpm.api.task.AssignmentHandler;
import org.jbpm.pvm.internal.task.ParticipationImpl;
import org.jbpm.pvm.internal.task.TaskImpl;

/**
 * 流程监听器
 * 
 * 根据用户角色设置角色组
 * 
 * @author 徐春福
 * 
 */
public class RoleGroupAssignHandler implements AssignmentHandler {
	private static final long serialVersionUID = -1672475481159515224L;

	@Override
	public void assign(Assignable assignable, OpenExecution execution)
			throws Exception {
		// 获取当前节点设置的角色
		Set<ParticipationImpl> set = ((TaskImpl) assignable)
				.getParticipations();
		String roleValue = "N/A";
		for (ParticipationImpl part : set) {
			if ("candidate".equals(part.getType())) {
				roleValue = part.getGroupId();
			}
		}
		assignable.addCandidateGroup(roleValue);
	}

}
