/* eslint-disable no-underscore-dangle */
/**
 * 浏览器类型检测，将会得出当前浏览器类型、内核、版本号、所处操作系统、所处平台
 */
import detectBrowserType from './detect-type';
import detectBrowserOS from './detect-os';
import detectBrowserDevice from './detect-device';
import isInWechatMiniProgram from './detect-wechat';
import { compareVersion as compare } from './util';

/**
 * 浏览器检测方法
 * @param userAgent
 * @return {object}
 */
export const browserDetect = (userAgent) => {
  const agent = userAgent.toLowerCase();
  const browserType = detectBrowserType(agent);
  const browserOS = detectBrowserOS(agent);
  const browserDevice = detectBrowserDevice(agent);
  return {
    browserType,
    browserOS,
    browserDevice,
    isInWechatMiniProgram,
    compareVersion: compare,
  };
};

export const compareVersion = compare;

export default browserDetect;
