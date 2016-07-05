package com.yanbang.flow.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yanbang.controller.BaseController;
import com.yanbang.view.JsonView;
import com.yanbang.config.entity.SysDict;
import com.yanbang.config.service.ISysDictService;
import com.yanbang.flow.entity.WorkFlowTask;
import com.yanbang.flow.service.IWorkFlowManageService;
import com.yanbang.security.entity.SysUser;

/**
 * @title 工作流控制器
 * 
 *        流程事务处理
 * @version 1.0
 * @author 徐春福
 * 
 */
@Controller
@RequestMapping("/workflowTask.do")
@Scope("prototype")
public class WorkFlowTaskController extends BaseController {
	@Autowired
	private IWorkFlowManageService workFlowManageService;
	@Autowired
	private ISysDictService dictService;

	/**
	 * 我的事务
	 * 
	 * @param request
	 * @param curPage
	 * @param pageRows
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=queryMyTask")
	public JsonView queryMyTask(HttpServletRequest request) throws Exception {
		SysUser user = (SysUser) this.getLoginUser(request);
		JsonView view = new JsonView();
		try {
			// **********************************************************************
			HashMap<String, Integer> map = new HashMap<String, Integer>();
			//
			map.put("centerpaycheck", 0);// 直接支付
			map.put("grantclaimscheck", 0);// 授权支付
			map.put("specheck", 0);// 专项支付
			map.put("serpcheck", 0);// 正常支付
			map.put("reimbursecheck", 0);// 结算报销
			map.put("indicatorcheck", 0);// 指标调剂
			map.put("budgetcheck", 0);// 预算
			map.put("projectcheck", 0);// 项目库
			map.put("fundplancheck", 0);// 计划用款

			// 查询个人任务
			List<WorkFlowTask> personTasklist = workFlowManageService
					.findPersonalTasks(user.getUserNickName());
			// 查询组任务
			List<WorkFlowTask> groupTasklist = workFlowManageService
					.findGroupTasks(user.getUserNickName());
			boolean isContain = false; // 是否相同的任务

			if (personTasklist != null && personTasklist.size() > 0
					&& groupTasklist != null && groupTasklist.size() > 0) {

				for (WorkFlowTask task : personTasklist) {
					isContain = false;
					for (WorkFlowTask tempTask : groupTasklist) {
						if (tempTask.getTaskId().equals(task.getTaskId())) {
							isContain = true;
							break;
						}

					}
					if (!isContain) { // 相同任务只出现一次
						groupTasklist.add(task);
					}
				}
			}

			for (WorkFlowTask task : groupTasklist) {
				if (task.getBussiessId() != null
						&& !task.getBussiessId().equals("")
						&& !task.getBussiessId().equals("N/A")) {
					String key = task.getTaskFLowKey().split("_")[0];
					int value = map.get(key) + 1;
					map.put(key, value);

				}
			}
			// **********************************************************************
			view.setProperty("result", "succ");
			view.setProperty("page", map);
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 我的事务列表
	 * 
	 * @param request
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=myTasklist")
	public String myTasklist(HttpServletRequest request, ModelMap model)
			throws Exception {
		SysUser user = (SysUser) this.getLoginUser(request);
		// --------------------------------------------
		SysDict dict = new SysDict();
		dict.setDictKey("FLOW_TYPE");
		dict.setDictGrade(2);
		model.put("ftlist", dictService.findMutiCondition(dict));

		// **********************************************************************
		List<WorkFlowTask> allWftList = new ArrayList<WorkFlowTask>(); // 我的任务列表
		// 查询个人任务
		List<WorkFlowTask> personTasklist = workFlowManageService
				.findPersonalTasks(user.getUserNickName());
		// 把个人任务给总任务集合
		for (WorkFlowTask task : personTasklist) {
			allWftList.add(task);
		}
		// 查询组任务
		List<WorkFlowTask> groupTasklist = workFlowManageService
				.findGroupTasks(user.getUserNickName());
		for (WorkFlowTask gtask : groupTasklist) {
			if (personTasklist.size() > 0) {

				boolean flag = true;
				for (WorkFlowTask ptask : personTasklist) {
					if (ptask.getTaskId().equals(gtask.getTaskId())) {
						flag = false;
					}
				}
				if (flag) {// 相同任务只出现一次
					allWftList.add(gtask);
				}
			} else {
				allWftList.add(gtask);
			}
		}
		// **********************************************************************
		model.put("wftlist", allWftList);
		return "workflow/myTasklist";
	}

	/**
	 * 他人的事务
	 * 
	 * @param request
	 * @param curPage
	 * @param pageRows
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=queryOtherTask")
	public JsonView queryOtherTask(HttpServletRequest request, Long pageRows)
			throws Exception {
		SysUser user = (SysUser) this.getLoginUser(request);
		String userNickName = user.getUserNickName();
		JsonView view = new JsonView();
		try {
			HashMap<String, Integer> map = new HashMap<String, Integer>();
			map.put("centerpaycheck", 0);// 直接支付
			map.put("grantclaimscheck", 0);// 授权支付
			map.put("specheck", 0);// 专项支付
			map.put("serpcheck", 0);// 正常支付
			map.put("reimbursecheck", 0);// 结算报销
			map.put("indicatorcheck", 0);// 指标调剂
			map.put("budgetcheck", 0);// 预算
			map.put("projectcheck", 0);// 项目库
			map.put("fundplancheck", 0);// 计划用款

			Collection<WorkFlowTask> wftlist = workFlowManageService
					.findOtherPersonTask(userNickName);

			for (WorkFlowTask task : wftlist) {
				if (task.getBussiessId() != null
						&& !task.getBussiessId().equals("")
						&& !task.getBussiessId().equals("N/A")) {
					String key = task.getTaskFLowKey().split("_")[0];
					int value = map.get(key) + 1;
					map.put(key, value);

				}
			}

			view.setProperty("result", "succ");
			view.setProperty("page", map);
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 他人的事务列表
	 * 
	 * @param request
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=otherTasklist")
	public String otherTasklist(HttpServletRequest request, ModelMap model)
			throws Exception {
		SysUser user = (SysUser) this.getLoginUser(request);
		String userNickName = user.getUserNickName();
		Collection<WorkFlowTask> wftlist = workFlowManageService
				.findOtherPersonTask(userNickName);
		model.put("wftlist", wftlist);
		return "workflow/otherTasklist";
	}

	/**
	 * 完成的事务
	 * 
	 * @param request
	 * @param curPage
	 * @param pageRows
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=queryFinishedTask")
	public JsonView queryFinishedTask(HttpServletRequest request, Long pageRows)
			throws Exception {
		SysUser user = (SysUser) this.getLoginUser(request);
		String userNickName = user.getUserNickName();
		JsonView view = new JsonView();
		try {
			Collection<WorkFlowTask> wftlist = workFlowManageService
					.findFinishedPersonTask(userNickName);
			view.setProperty("result", "succ");
			view.setProperty("page", wftlist);
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 完成的事务列表
	 * 
	 * @param request
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=finishedTasklist")
	public String finishedTasklist(HttpServletRequest request, ModelMap model)
			throws Exception {
		SysUser user = (SysUser) this.getLoginUser(request);
		String userNickName = user.getUserNickName();
		Collection<WorkFlowTask> wftlist = workFlowManageService
				.findFinishedPersonTask(userNickName);
		model.put("wftlist", wftlist);
		return "workflow/finishedTasklist";
	}
}
