package com.yanbang.config.controller;

import java.util.Collection;

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
import com.yanbang.config.entity.SysDict;
import com.yanbang.config.service.ISysDictService;

/**
 * 业务控制层<br>
 * 
 * 数据字典控制器
 * 
 * @author Tong Baojun
 * 
 */
@Controller
@RequestMapping("/dict.do")
@Scope("prototype")
public class DictController extends BaseController {
	@Autowired
	private ISysDictService sysDictService;

	/**
	 * 首页
	 */
	@RequestMapping(params = "action=index")
	public ModelAndView index(HttpServletRequest request, ModelMap model,
			SysDict dict, Long curPage, Long pageRows) throws Exception {
		if (dict.getDictParentId() == null) {
			dict.setDictParentId(-1l);
		}
		Page<SysDict> page = new Page<SysDict>(curPage, pageRows);
		page.setUrl("dict.do?action=index");
		page = sysDictService.findAllDicts(dict, page);
		model.put("page", page);
		model.put("dict", dict);
		return new ModelAndView("dict/index");
	}
    /**
     * 多条件查询
     */
	@RequestMapping(params = "action=findMutiCondition")
	public ModelAndView findMutiCondition(HttpServletRequest request,
			ModelMap model, SysDict dict, Long curPage, Long pageRows)
			throws Exception {
		Page<SysDict> page = new Page<SysDict>(curPage, pageRows);
		page.setUrl("dict.do?action=index");
		page = sysDictService.findAllDicts(dict, page);
		model.put("page", page);
		model.put("dict", dict);
		return new ModelAndView("dict/index");
	}

	/**
	 * 添加词条页面
	 */
	@RequestMapping(params = "action=addDict")
	public ModelAndView addDict(HttpServletRequest request, ModelMap model,
			String dictParentId, Long curPage, Long pageRows) throws Exception {
		if (dictParentId != null && !"-1".equals(dictParentId.trim())) {
			SysDict parentdict = sysDictService.findByDictCode(Long
					.parseLong(dictParentId));
			Collection<SysDict> childdicts = sysDictService.findChildsDict(Long
					.parseLong(dictParentId));
			int size = 1;
			if (childdicts != null && childdicts.size() > 0) {
				size += childdicts.size();
			}
			String dictKey = parentdict.getDictKey() + "_" + size;
			model.put("dictKey", dictKey);
			model.put("dictGrade", parentdict.getDictGrade() + 1);
			model.put("dictParentId", dictParentId);
		} else {
			model.put("dictKey", "");
			model.put("dictGrade", 1);
			model.put("dictParentId", -1);
		}
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		model.put("dictCode", sysDictService.findDictMaxId());
		return new ModelAndView("dict/addDict");
	}

	/**
	 * 保存词条
	 */
	@RequestMapping(params = "action=saveDict")
	public ModelAndView saveDict(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, SysDict dict) throws Exception {
		sysDictService.saveDict(dict);
		return this.addDict(request, model, dict.getDictParentId() + "",
				curPage, pageRows);
	}

	/**
	 * 编辑词条页面
	 */
	@RequestMapping(params = "action=editDict")
	public ModelAndView editDict(HttpServletRequest request, ModelMap model,
			String dictCode, Long curPage, Long pageRows) {
		model.put("dict",
				sysDictService.findByDictCode(Long.parseLong(dictCode)));
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		return new ModelAndView("dict/editDict");
	}

	/**
	 * 编辑词条
	 */
	@RequestMapping(params = "action=editSaveDict")
	public JsonView editSaveDict(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, SysDict dict) throws Exception {
		JsonView view = new JsonView();
		try {
			sysDictService.updateDict(dict);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 查询指定ID的子词条
	 */
	@RequestMapping(params = "action=findChildsDict")
	public ModelAndView findChildsDict(HttpServletRequest request,
			ModelMap model, String dictCode, Long curPage, Long pageRows)
			throws Exception {
		SysDict dict = sysDictService.findByDictCode(Long.parseLong(dictCode));
		Collection<SysDict> parentDicts = sysDictService.findParentDict(Long
				.parseLong(dictCode));
		model.put("dict", dict);
		model.put("parentDicts", parentDicts);
		SysDict parentDict = new SysDict();
		parentDict.setDictParentId(dict.getDictCode());
		return this.index(request, model, parentDict, curPage, pageRows);

	}

	/**
	 * 删除词条
	 */
	@RequestMapping(params = "action=deleteDict")
	public ModelAndView deleteDict(HttpServletRequest request, ModelMap model,
			String dictParentId, String dictCodes, Long curPage, Long pageRows)
			throws Exception {
		dictCodes = dictCodes.substring(0, dictCodes.lastIndexOf(","));
		String[] arrdictCodes = dictCodes.split(",");
		for (int i = 0; i < arrdictCodes.length; i++) {
			sysDictService.deleteDict(Long.parseLong(arrdictCodes[i]));
		}
		SysDict parentDict = new SysDict();
		parentDict.setDictParentId(Long.parseLong(dictParentId));
		return this.index(request, model, parentDict, curPage, pageRows);
	}
	
	/**
	 * 水尺值班人员pop
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=waterDutyPop")
	public ModelAndView index(HttpServletRequest request, ModelMap model,SysDict dict) throws Exception {
		model.put("list", sysDictService.findChildsDict("WATER_DUTY"));
		model.put("dict", dict);
		return new ModelAndView("dict/waterDutyPop");
	}
}
