package com.yanbang.flow.handler;

import java.util.Collection;
import java.util.Set;

import org.jbpm.api.model.OpenExecution;
import org.jbpm.api.task.Assignable;
import org.jbpm.api.task.AssignmentHandler;
import org.jbpm.pvm.internal.task.ParticipationImpl;
import org.jbpm.pvm.internal.task.TaskImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.yanbang.security.entity.SysUser;
import com.yanbang.security.service.ISysUserService;

/**
 * 流程监听器
 * 
 * 根据用户角色选择用户分配任务
 * 
 * @author 徐春福
 * 
 */
public class RoleAssignHandler implements AssignmentHandler {
	private static final long serialVersionUID = 6517323834864651109L;
	protected Logger logger = LoggerFactory.getLogger(getClass());

	@Override
	@SuppressWarnings("resource")
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
		ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext(
				"jbpm-Context.xml");
		ISysUserService userService = (ISysUserService) applicationContext
				.getBean("userService");
		Collection<SysUser> usrlist = userService.findUserByRole(roleValue);
		if (usrlist.size() == 1) {// 只有一个人
			for (SysUser user : usrlist) {
				assignable.setAssignee(user.getUserNickName());
				logger.debug("当前分配用户为一人:" + user.getUserNickName());
			}
		}
		if (usrlist.size() > 1) {// 多于一个人
			for (SysUser user : usrlist) {
				logger.info(roleValue + "---------------->"
						+ user.getUserNickName());
				assignable.addCandidateUser(user.getUserNickName());
				logger.debug("当前分配用户为多人:" + user.getUserNickName());
			}
		}
	}

}
