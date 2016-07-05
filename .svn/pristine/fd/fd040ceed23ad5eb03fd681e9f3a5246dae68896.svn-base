package com.yanbang.security.dao;

import java.util.Collection;

import com.yanbang.security.entity.SysPostEmp;
import com.yanbang.security.model.PostEmpModel;

/**
 * 持久层接口
 * 
 * 岗位员工关联DAO接口
 * 
 * @author solovejack
 * 
 */
public interface ISysPostEmpDAO {
	/**
	 * 根据员工获取岗位信息列表
	 * @param empId
	 * @return 岗位信息列表
	 */
    public Collection<PostEmpModel> queryPostByEmp(String empId);
    
    /**
     * 新增岗位员工关联信息
     * @param postEmp
     */
    public void insByPostEmp(SysPostEmp postEmp);
    
    /**
     * 保存岗位员工关联信息
     * @param postEmp
     */
    public void updByPostEmp(SysPostEmp postEmp);
    
    /**
     * 删除岗位员工关联信息
     * @param postEmp
     */
    public void delByPostEmp(SysPostEmp postEmp);
    
    /**
     * 删除岗位员工关联信息
     * @param uuid
     */
    public void delByPk(String uuid);
}
