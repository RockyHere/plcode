package com.yanbang.flow.service;

import java.util.Collection;

import javax.jws.WebParam;

import com.yanbang.page.Page;
import com.yanbang.flow.entity.FlowDesign;

/**
 * @title 服务接口
 * 
 *        工作流设计接口
 * @version 1.0
 * @author 徐春福
 * 
 */
public interface IWorkFlowDesignService {
	/**
	 * 查询所有设计的工作流
	 * 
	 * @param page
	 * @return
	 */
	public Page<FlowDesign> findWorkFlowDesign(Page<FlowDesign> page);

	/**
	 * 多条件查询设计的工作流
	 * 
	 * @param page
	 * @param wfd
	 * @return
	 */
	public Page<FlowDesign> findAllFlowDesignByMutiConditon(
			Page<FlowDesign> page, FlowDesign fd);

	/**
	 * 查询不分页的工作流设计
	 * 
	 * @return
	 */
	public Collection<FlowDesign> findAllFlowDesign();

	/**
	 * 根据关键字查询工作流设计
	 * 
	 * @param key
	 * @return
	 */
	public Collection<FlowDesign> findFlowDesignByKey(String key);

	/**
	 * 根据名称查询工作流设计
	 * 
	 * @param name
	 * @return
	 */
	public FlowDesign findFlowDesignByName(String name, String version);

	/**
	 * 根据名称删除工作流设计
	 * 
	 * @param name
	 */
	public void deleteFlowDesign(String name, String version);

	/**
	 * 修改工作流
	 * 
	 * @param name
	 * @param fd
	 */
	public void updateFlowDesign(String name, FlowDesign fd);

	/**
	 * 修改工作流状态
	 * 
	 * @param name
	 */
	public void updateFLowDesignStatus(String name, String status,
			String version);

	/**
	 * 修改流程部署信息
	 * 
	 * @param name
	 * @param deployId
	 * @param deploydatetime
	 * @param deployUser
	 */
	public void updateFlowDeploy(String name, String version, String deployId,
			String deploydatetime, String deployUser);

	/**
	 * 保存工作流
	 * 
	 * @param fd
	 */
	public void saveFlowDesign(@WebParam(name = "fd") FlowDesign fd);

	/**
	 * 判断流程名称是否存在
	 * 
	 * @param flowName
	 * @return
	 */
	public boolean checkFileNameExists(
			@WebParam(name = "flowName") String flowName);
}
