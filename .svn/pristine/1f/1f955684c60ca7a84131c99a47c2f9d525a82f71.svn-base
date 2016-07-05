package com.yanbang.security.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.yanbang.controller.BaseController;
import com.yanbang.page.Page;
import com.yanbang.view.JsonView;
import com.yanbang.security.entity.SysPost;
import com.yanbang.security.service.ISysOrgService;
import com.yanbang.security.service.ISysPostService;
import com.yanbang.util.ConstantMethod;

/**
 * 业务控制层<br>
 * 
 * 岗位信息控制器
 * 
 * @author solovejack
 * 
 */
@Controller
@RequestMapping("/sysPost.do")
@Scope("prototype")
public class SysPostController extends BaseController {
	@Autowired
	private ISysPostService sysPostService;
	@Autowired
	private ISysOrgService sysOrgService;

	/**
	 * 岗位列表界面
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=index")
	public ModelAndView index(HttpServletRequest request, ModelMap model)
			throws Exception {
		model.put("defaultId", ConstantMethod.XFJTID);
		return new ModelAndView("security/postOrgIndex");
	}

	/**
	 * 多条件查询、初始化查询
	 */
	@RequestMapping(params = "action=findMutiCondition")
	public ModelAndView findMutiCondition(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows, SysPost post)
			throws Exception {
		Page<SysPost> page = new Page<SysPost>(curPage, pageRows);
		page.setUrl("sysPost.do?action=findMutiCondition");
		page = sysPostService.findAllPost(post, page);
		model.put("page", page);
		model.put("post", post);
		return new ModelAndView("security/postIndex");
	}

	/**
	 * 添加岗位页面
	 */
	@RequestMapping(params = "action=addPost")
	public ModelAndView addPost(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, String orgId) throws Exception {
		model.put("org", sysOrgService.findByPk(orgId));
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		return new ModelAndView("security/postAdd");
	}

	/**
	 * 保存岗位
	 */
	@RequestMapping(params = "action=addSavePost")
	public JsonView addSavePost(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, SysPost post) throws Exception {
		JsonView view = new JsonView();
		try {
			post.setUpdateUser(this.getLoginUserName(request));
			sysPostService.insByPost(post);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 编辑岗位页面
	 */
	@RequestMapping(params = "action=editPost")
	public ModelAndView editPost(HttpServletRequest request, ModelMap model,
			String uuid, Long curPage, Long pageRows) {
		model.put("post", sysPostService.findByPk(uuid));
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		return new ModelAndView("security/postEdit");
	}

	/**
	 * 编辑岗位
	 */
	@RequestMapping(params = "action=editSavePost")
	public JsonView editSavePost(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, SysPost post) throws Exception {
		JsonView view = new JsonView();
		try {
			post.setUpdateUser(this.getLoginUserName(request));
			sysPostService.updByPost(post);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 删除岗位
	 */
	@RequestMapping(params = "action=delPost")
	public ModelAndView delPost(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, String uuids, SysPost post)
			throws Exception {
		uuids = uuids.substring(0, uuids.lastIndexOf(","));
		String[] uuidArray = uuids.split(",");
		String updUser = this.getLoginUserName(request);
		for (int i = 0; i < uuidArray.length; i++) {
			sysPostService.delByPk(uuidArray[i],updUser);
		}
		return this.findMutiCondition(request, model, curPage, pageRows, post);
	}

	/**
	 * 组织机构岗位pop
	 * 
	 * @param request
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=indexPop")
	public ModelAndView indexPop(HttpServletRequest request, ModelMap model)
			throws Exception {
		return new ModelAndView("security/postOrgPop");
	}

	/**
	 * 岗位pop
	 */
	@RequestMapping(params = "action=postPop")
	public ModelAndView postPop(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, SysPost post) throws Exception {
		Page<SysPost> page = new Page<SysPost>(curPage, pageRows);
		page.setUrl("sysPost.do?action=postPop");
		page = sysPostService.findAllPost(post, page);
		model.put("page", page);
		model.put("post", post);
		return new ModelAndView("security/postPop");
	}

	/**
	 * pop多条件查询
	 */
	@RequestMapping(params = "action=postPopQry")
	public ModelAndView postPopQry(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, SysPost post) throws Exception {
		Page<SysPost> page = new Page<SysPost>(curPage, pageRows);
		page.setUrl("sysPost.do?action=postPop");
		page = sysPostService.findAllPost(post, page);
		model.put("page", page);
		model.put("post", post);
		return new ModelAndView("security/postPop");
	}
}
