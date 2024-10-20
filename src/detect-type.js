/**
 * 检测浏览器类型和版本
 */
import { isInWechat } from './util';

export default function (agent) {
  // 初始化浏览器类型信息
  const browserType = {
    ie: false,
    edge: false,
    opera: false,
    firefox: false,
    chrome: false,
    safari: false,
    wechat: false, // 是否处于微信APP内嵌浏览器中
    billionbottle: false, // 是否处于百瓶APP内嵌浏览器中

    version: 'unknown', // 浏览器版本号
  };

  let version = 'unknown'; // 版本号

  // ie
  if (/(msie\s|trident.*rv:)([\w.]+)/.test(agent)) {
    browserType.ie = true;
    // 检测ie浏览器版本
    const v1 = agent.match(/(?:msie\s([\w.]+))/);
    const v2 = agent.match(/(?:trident.*rv:([\w.]+))/);
    if (v1 && v2 && v1[1] && v2[1]) {
      version = Math.max(v1[1] * 1, v2[1] * 1);
    } else if (v1 && v1[1]) {
      version = v1[1] * 1;
    } else if (v2 && v2[1]) {
      version = v2[1] * 1;
    } else {
      version = 0;
    }
  }

  // edge
  if (agent.indexOf('edge') >= 0) {
    browserType.edge = true;
    // 检测edge浏览器版本号
    version = parseFloat(agent.match(/ edge\/(\d+)/)[1]);
  }

  // opera
  // eslint-disable-next-line no-undef
  if (typeof window !== 'undefined' && window.opera && window.opera.version) {
    browserType.opera = true;
    // 检测opera浏览器版本号
    // eslint-disable-next-line no-undef
    version = parseFloat(window.opera.version());
  }

  // firefox
  if (/firefox\/(\d+\.\d)/i.test(agent)) {
    browserType.firefox = true;
    // 检测firefox浏览器版本号
    version = +RegExp.$1;
  }

  // chrome
  if (!browserType.edge && /chrome\/(\d+\.\d)/i.test(agent)) {
    browserType.chrome = true;
    // 检测chrome浏览器版本号
    version = +RegExp.$1;
  }

  // safari
  if (!browserType.edge && /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
    browserType.safari = true;
    // 检测safari浏览器版本号
    version = +(RegExp.$1 || RegExp.$2);
  }

  // 检测浏览器是否为微信内嵌浏览器
  if (isInWechat(agent)) {
    browserType.wechat = true;
  }

  // 检测浏览器是否为百瓶APP内嵌浏览器
  if (agent.indexOf('billionbottle') >= 0) {
    browserType.billionbottle = true;
    // 检测百瓶APP版本号
    const billionBottleMatch = agent.match(/billionbottle\/([\d.]+)/);
    version = billionBottleMatch ? billionBottleMatch[1] : '0.0.0';
  }

  browserType.version = version;
  return browserType;
}
