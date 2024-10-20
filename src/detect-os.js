/**
 * 检测操作系统
 */

export default function (agent) {
  // 初始化浏览器所处操作系统信息
  const browserOS = {
    macos: false,
    ios: false,
    android: false,
    version: '0',
  };

  if (agent.indexOf('macintosh') >= 0) {
    browserOS.macos = true;
  }
  if (agent.match(/\(i[^;]+;( u;)? cpu.+mac os x/)) {
    browserOS.ios = true;
    if (/(\d+(_\d+)+)/.test(agent)) {
      browserOS.version = RegExp.$1.replace(/_/g, '.');
    }
  }
  if (agent.indexOf('android') >= 0 || agent.indexOf('linux') >= 0) {
    browserOS.android = true;
    if (/android\s(\d+(\.\d+)+)/i.test(agent)) {
      browserOS.version = RegExp.$1;
    }
  }
  return browserOS;
}
