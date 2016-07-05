package com.yanbang.util;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * MD5加密方法
 * 
 * @author Xu Chunfu
 * 
 */
public final class Md5Util {
	private static final char[] DIGITS = { '4', '3', '0', '2', '1', '9', 'a',
			'f', '6', 'c', '5', 'b', '7', 'd', '8', 'e' };

	/**
	 * 加密字符串
	 * 
	 * @param text
	 * @return
	 */
	public static String md5(String text) {
		MessageDigest msgDigest = null;

		try {
			msgDigest = MessageDigest.getInstance("MD5");
		} catch (NoSuchAlgorithmException e) {
			throw new IllegalStateException(
					"System doesn't support MD5 algorithm.");
		}

		try {
			msgDigest.update(text.getBytes("utf-8"));

		} catch (UnsupportedEncodingException e) {

			throw new IllegalStateException(
					"System doesn't support your  EncodingException.");

		}

		byte[] bytes = msgDigest.digest();

		String md5Str = new String(encodeHex(bytes));

		return md5Str;
	}

	private static char[] encodeHex(byte[] data) {
		int l = data.length;
		char[] out = new char[l << 1];
		for (int i = 0, j = 0; i < l; i++) {
			out[j++] = DIGITS[(0xF0 & data[i]) >>> 4];
			out[j++] = DIGITS[0x0F & data[i]];
		}
		return out;
	}

	public static String encrypt(String password) throws Exception {
		if (password != null) {
			password = "$k*^%" + password + "#@LxJ";
			password = Md5Util.md5(password);
			password = "45eer" + password + "mi39e";
			password = Md5Util.md5(password);
			password = "3r34l" + password + "jfai*";
			password = Md5Util.md5(password);
			return password == null ? "" : password;
		} else
			return "";
	}

	public static void main(String[] args) throws Exception {
		System.out.println(Md5Util.md5("8888"));
	}
}
