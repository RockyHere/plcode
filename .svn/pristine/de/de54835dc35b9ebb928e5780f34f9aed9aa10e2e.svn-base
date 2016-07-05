package com.yanbang.security.biz;

import java.util.regex.Pattern;

import com.yanbang.util.MACAddressUtil;

/**
 * 用户状态
 * 
 * @author Tong Baojun
 * 
 */
public class UserCompareBiz {
	private String hostAddress = "";
	private static UserCompareBiz intances = null;

	private UserCompareBiz() {
	}

	public static UserCompareBiz getInstance() {
		if (intances == null) {
			intances = new UserCompareBiz();
		}
		return intances;
	}

	public void setAddress(String address) {
		this.hostAddress = address;
	}

	public boolean validaeAddress() {
		String hostIp = MACAddressUtil.getIPAddress();
		return Pattern.compile("^" + hostAddress).matcher(hostIp).matches();
	}
}
