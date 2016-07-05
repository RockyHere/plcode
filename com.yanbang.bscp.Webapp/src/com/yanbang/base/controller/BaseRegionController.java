package com.yanbang.base.controller;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.yanbang.base.entity.BaseRegion;
import com.yanbang.base.service.IBaseRegionService;
import com.yanbang.controller.BaseController;
import com.yanbang.view.JsonView;
import com.yanbang.security.entity.SysOrg;
import com.yanbang.security.service.ISysOrgService;
import com.yanbang.util.AssertUtil;
import com.yanbang.util.UtilMethod;

/**
 * 业务控制层<br>
 * 
 * 地理区域管理控制器
 * 
 * @author zhouyibin
 * 
 */
@Controller
@RequestMapping("/baseRegion.do")
@Scope("prototype")
public class BaseRegionController extends BaseController {
	@Autowired
	private IBaseRegionService sysOrgService;

	/**
	 * 地理区域管理界面
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=index")
	public ModelAndView index(HttpServletRequest request, ModelMap model)
			throws Exception {
		return new ModelAndView("base/regionIndex");
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
	public JsonView saveOrg(HttpServletRequest request, BaseRegion org)
			throws Exception {
		JsonView view = new JsonView();
		try {
			org.setCreated_by_user(this.getLoginUserName(request));
			if (AssertUtil.isVal(org.getBas_region_id())) {
				sysOrgService.updByOrg(org);
			} else {
				org.setBas_region_id(UtilMethod.getUUID());
				sysOrgService.insByOrg(org);
			}
			view.setProperty("result", "succ");
			view.setProperty("uuid", org.getBas_region_id());
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
		return new ModelAndView("base/regionPop");
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
	public ModelAndView orgQueryTree(HttpServletRequest request,
			ModelMap model, String defaultId) throws Exception {
		model.put("defaultId", AssertUtil.isVal(defaultId) ? defaultId : "");
		return new ModelAndView("base/regionQueryTree");
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
		str.append("[{'id':'root','pId':'','name':'国家','country_name_eg':'','memo':'','tip':'国家', 'open':true}");
		// 机械表循环，无父节点，则设置pId为root。
		Collection<BaseRegion> list = sysOrgService.findAllByFlag();
		for (BaseRegion org : list) {
			str.append(",{'id':'" + org.getBas_region_id())
					.append("', 'pId':'"
							+ (AssertUtil.isVal(org.getParentId()) ? org
									.getParentId() : "root"))
					.append("', 'name':'" + org.getCountry_code() + "_"
							+ org.getCountry_name())
							.append("', 'country_name_eg':'" + org.getCountry_name_eg())
							.append("', 'memo':'" +org.getMemo())
					.append("', 'tip':'" + org.getCountry_name()).append("'}");
		}
		str.append("]");
		return str.toString();
	}
}
