package com.yanbang.licences;

import com.yanbang.util.DateUtil;


/**
 * 授权处理类
 * 
 * @author 徐春福
 * 
 */
public final class ValidateLicense {
	public static boolean isLicenceNoExpired(String licenceCode) {
		String exp = getExpirationDate(licenceCode);
		return convert("101010011000101011000111000").equals(exp);
	}

	public static boolean isLicenceDateExpired(String licenceCode) {
		String curDate = DateUtil.getCurrentDate();
		String expDate = getExpirationDate(licenceCode);
		return Long.parseLong(expDate) < Long.parseLong(curDate);
	}

	public static String getExpirationDate(String licenceCode) {
		try {
			licenceCode = ProductLicense.parse(licenceCode);
			return licenceCode.substring(33, licenceCode.indexOf("@", 33));
		} catch (Exception ex) {
			return convert("1001100110111011101010101");
		}
	}

	/**
	 * 转化数字
	 * 
	 * @param strCriterion
	 * @return
	 */
	private static String convert(String strCriterion) {
		int iForever = 0;
		for (char c : strCriterion.toCharArray()) {
			iForever = iForever * 2 + (c == '1' ? 1 : 0);
		}
		return iForever + "";
	}
}
