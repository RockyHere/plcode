package com.yanbang.util;

import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.Enumeration;
import java.util.Formatter;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 机器网络地址
 * 
 * @author 徐春福
 * 
 */
public final class MACAddressUtil {
	/**
	 * 获取当前机器物理地址
	 * 
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public static String getMacAddress() {
		String macAddress = "AA-AA-AA-AA-AA-AA";
		final Pattern HARDWARE_PATTERN = Pattern
				.compile(
						"(.*wireless.*)|(.*tunnel.*)|(.*atapi.*)|(.*bluetooth.*)|(.*vnic.*)|(.*vmnet.*)",
						2);
		try {
			for (Enumeration networkInterfaces = NetworkInterface
					.getNetworkInterfaces(); networkInterfaces
					.hasMoreElements();) {
				NetworkInterface ni = (NetworkInterface) networkInterfaces
						.nextElement();
				if (ni != null && !ni.isVirtual() && !ni.isLoopback()
						&& ni.isUp()) {
					byte hardwareAddress[] = ni.getHardwareAddress();
					if (hardwareAddress != null && hardwareAddress.length != 2) {
						boolean isMacAddressLegal = false;
						byte abyte0[];
						int j = (abyte0 = hardwareAddress).length;
						for (int i = 0; i < j; i++) {
							byte b = abyte0[i];
							if (b > 0) {
								continue;
							}
							isMacAddressLegal = true;
							break;
						}
						if (isMacAddressLegal) {
							String hardwareName = ni.getDisplayName();
							if (hardwareName != null
									&& hardwareName.length() != 0) {
								Matcher matcher = HARDWARE_PATTERN
										.matcher(hardwareName);
								if (!matcher.lookingAt()) {
									macAddress = parseMacAddress(hardwareAddress);
									macAddress = macAddress
											.replaceAll(":", "-").toUpperCase();
								}
							}
						}
					}
				}
			}

		} catch (SocketException e) {
			e.printStackTrace();
		}
		return macAddress != null ? macAddress : buildMacAddress();
	}

	/**
	 * 解析物理地址
	 * 
	 * @param bytes
	 * @return
	 */
	private static String parseMacAddress(byte bytes[]) {
		StringBuffer sb = new StringBuffer();
		if (bytes != null) {
			byte abyte0[];
			int j = (abyte0 = bytes).length;
			for (int i = 0; i < j; i++) {
				byte b = abyte0[i];
				sb.append((new StringBuilder(String.valueOf(String.format(
						"%02x", new Object[] { Byte.valueOf(b) }))))
						.append(":").toString());
			}
			sb.deleteCharAt(sb.length() - 1);
		}
		return sb.toString();
	}

	/**
	 * 产生物理地址
	 * 
	 * @return
	 */
	@SuppressWarnings("resource")
	public static String buildMacAddress() {
		try {
			String macAddress = "";
			InetAddress address = InetAddress.getLocalHost();
			NetworkInterface ni = NetworkInterface.getByInetAddress(address);
			ni.getInetAddresses().nextElement().getAddress();
			byte[] mac = ni.getHardwareAddress();
			Formatter formatter = new Formatter();
			for (int i = 0; i < mac.length; i++) {
				macAddress = formatter.format(Locale.getDefault(), "%02X%s",
						mac[i], (i < mac.length - 1) ? "-" : "").toString();
			}
			return macAddress;
		} catch (Exception ex) {
			return "unKnown";
		}
	}

	/**
	 * 获取当前机器IP地址
	 * 
	 * @return
	 */
	public static String getIPAddress() {
		try {
			InetAddress address = InetAddress.getLocalHost();
			return address.getHostAddress();
		} catch (Exception ex) {
			return "127.0.0.1";
		}
	}

}
