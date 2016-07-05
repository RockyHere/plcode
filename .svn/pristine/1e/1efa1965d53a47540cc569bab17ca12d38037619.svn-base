package com.yanbang.licences;

import com.yanbang.util.DESUtil;
import com.yanbang.util.MACAddressUtil;


/**
 * 授权处理类
 * 
 * @author 徐春福
 * 
 */
public final class ProductLicense {

	/**
	 * 解析密钥
	 * 
	 * @param licCode
	 * @return
	 */
	public static String parse(String licCode) {
		return DESUtil.decrypt(licCode, getLicKey());
	}

	/**
	 * 加密密钥
	 * 
	 * @return
	 */
	private static String getLicKey() {
		return MACAddressUtil.getMacAddress();
	}
}
