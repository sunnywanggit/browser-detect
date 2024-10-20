/**
 * 检测浏览器所处设备
 */

export default function (agent) {
  // 初始化浏览器所处设备信息
  const browserDevice = {
    mobile: false, // 当前浏览器是否处在移动终端中
    iphone: false,
    ipad: false,
  };

  if (agent.match(/applewebkit.*mobile.*/)) {
    browserDevice.mobile = true;
  }
  if (agent.indexOf('iphone') >= 0) {
    browserDevice.iphone = true;
  }
  if (agent.indexOf('ipad') >= 0) {
    browserDevice.ipad = true;
  }
  return browserDevice;
}
