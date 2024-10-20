/**
 * 比较结果
 */
export enum CompareResult{
  SMALLER = -1, // 第一项比第二项小
  EQUAL = 0, // 第一项和第二项相等
  BIGGER = 1, // 第一项比第二项大
}

/**
 * 比较两个版本号大小
 * @param {string} v1 比如1.0.0
 * @param {string} v2 比如1.0.1
 * @return {CompareResult}
 */

export declare interface compareVersion extends Function {
  (v1: string, v2: string): CompareResult;
}

/**
 * 浏览器检测结果
 */
interface DetectResult {
  // 浏览器类型数据
  browserType: {
    ie: boolean, // 是否是ie浏览器
    edge: boolean, // 是否是edge浏览器
    opera: boolean, // 是否是欧朋浏览器
    firefox: boolean, // 是否是火狐浏览器
    chrome: boolean, // 是否是chrome浏览器
    safari: boolean, // 是否是safari浏览器
    wechat: boolean, // 是否是微信内嵌浏览器
    billionbottle: boolean, // 是否是百瓶内嵌浏览器
    version: string | number, // 浏览器版本号
  },
  // 浏览器所处操作系统数据
  browserOS: {
    macos: boolean, // 是否是macos操作系统
    ios: boolean, // 是否是ios操作系统
    android: boolean, // 是否是安卓操作系统
    version: string | number, // 操作系统版本号
  },
  // 浏览器所处硬件设备数据
  browserDevice: {
    mobile: boolean, // 是否是移动终端
    iphone: boolean, // 是否是iphone终端
    ipad: boolean, // 是否是ipad终端
  },
  // 判断当前浏览器是否在微信小程序中
  isInWechatMiniProgram: () => Promise<void>,
  // 比较两个版本号大小
  compareVersion: compareVersion,
}

export default function (userAgent: string): DetectResult;
