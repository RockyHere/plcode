package com.yanbang.security.controller;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.yanbang.controller.BaseController;
import com.yanbang.view.JsonView;
import com.yanbang.security.entity.SysOrg;
import com.yanbang.security.service.ISysOrgService;
import com.yanbang.util.AssertUtil;
import com.yanbang.util.UtilMethod;

/**
 * 业务控制层<br>
 * 
 * 组织机构控制器
 * 
 * @author yechuncheng
 * 
 */
@Controller
@RequestMapping("/sysOrg.do")
@Scope("prototype")
public class SysOrgController extends BaseController {
	@Autowired
	private ISysOrgService sysOrgService;

	/**
	 * 组织机构界面
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=index")
	public ModelAndView index(HttpServletRequest request, ModelMap model)
			throws Exception {
		return new ModelAndView("security/orgIndex");
	}

	/**
	 * 组织机构 树初始化
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=query")
	public JsonView query(HttpServletRequest request) throws Exception {
		JsonView view = new JsonView();
		try {
			view.setProperty("resultlist", this.getTreeStr());
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 保存
	 * 
	 * @param request
	 * @param org
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=saveOrg")
	public JsonView saveOrg(HttpServletRequest request, SysOrg org)
			throws Exception {
		JsonView view = new JsonView();
		try {
			org.setUpdateUser(this.getLoginUserName(request));
			if (AssertUtil.isVal(org.getUuid())) {
				sysOrgService.updByOrg(org);
			} else {
				org.setUuid(UtilMethod.getUUID());
				sysOrgService.insByOrg(org);
			}
			view.setProperty("result", "succ");
			view.setProperty("uuid", org.getUuid());
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 删除
	 * 
	 * @param request
	 * @param uuid
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=delOrg")
	public JsonView delOrg(HttpServletRequest request, String uuid)
			throws Exception {
		JsonView view = new JsonView();
		try {
			sysOrgService.delByPk(uuid);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 组织机构pop
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=indexPop")
	public ModelAndView indexPop(HttpServletRequest request, ModelMap model)
			throws Exception {
		return new ModelAndView("security/orgPop");
	}

	/**
	 * 组织机构查询树 (页面跳转)（该页面为内嵌页面）
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=orgQueryTree")
	public ModelAndView orgQueryTree(HttpServletRequest request, ModelMap model,String defaultId)
			throws Exception {
		model.put("defaultId", AssertUtil.isVal(defaultId)?defaultId:"");
		return new ModelAndView("security/orgQueryTree");
	}
	
	/**
	 * 组织机构 树初始化(pop)
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=queryPop")
	public JsonView queryPop(HttpServletRequest request) throws Exception {
		JsonView view = new JsonView();
		try {
			view.setProperty("resultlist", this.getTreeStr());
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 获取Org的树
	 * 
	 * @return
	 * @throws Exception
	 */
	private String getTreeStr() throws Exception {
		StringBuffer str = new StringBuffer();
		str.append("[{'id':'root','pId':'','name':'组织机构','tip':'组织机构', 'open':true}");
		// 机械表循环，无父节点，则设置pId为root。
		Collection<SysOrg> list = sysOrgService.findAllByFlag();
		for (SysOrg org : list) {
			str.append(",{'id':'" + org.getUuid())
					.append("', 'pId':'"
							+ (AssertUtil.isVal(org.getParentId()) ? org
									.getParentId() : "root"))
					.append("', 'name':'" + org.getOrgCode() + "_"
							+ org.getOrgName())
					.append("', 'tip':'" + org.getOrgName()).append("'}");
		}
		str.append("]");
		return str.toString();
	}
}
