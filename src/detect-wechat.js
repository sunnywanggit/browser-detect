/**
 * 检测微信浏览器详细信息
 */
import { isInWechat } from './util';

const isInWechatMiniProgram = () => new Promise((resolve, reject) => {
  // 未处于微信浏览器中则直接返回否
  // eslint-disable-next-line no-undef
  if (!isInWechat(window.navigator.userAgent.toLowerCase())) {
    reject();
    return;
  }
  // 生成检测函数
  const detect = () => {
    // eslint-disable-next-line no-underscore-dangle,no-undef
    if (window.__wxjs_environment === 'miniprogram') {
      resolve();
    } else {
      reject();
    }
  };
  // 如果微信已将环境注入页面则也直接返回
  // eslint-disable-next-line no-undef
  if (window.WeixinJSBridge && window.WeixinJSBridge.invoke) {
    detect();
    return;
  }
  // 监听微信API注入事件
  let detectTimeout = null; // 注入失败监听器
  const listener = () => {
    // 清除定时器
    if (detectTimeout !== null) {
      clearTimeout(detectTimeout);
      detectTimeout = null;
    }
    detect();
  };
  // eslint-disable-next-line no-undef
  document.addEventListener('WeixinJSBridgeReady', listener, false);
  // 开始注入失败监听，如果10秒内未注入完成则判断为失败
  detectTimeout = setTimeout(() => {
    detectTimeout = null;
    // eslint-disable-next-line no-undef
    document.removeEventListener('WeixinJSBridgeReady', listener, false);
    reject();
  }, 1000);
});

export default isInWechatMiniProgram;
