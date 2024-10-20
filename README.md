# 浏览器检测库

### 使用方法如下

#### 1、使用
```
import browserDetect, { compareVersion } from '@bb/browser-detect';
const {
  browserType, // 浏览器类型数据
  browserOS, // 浏览器所处操作系统数据
  browserDevice, // 浏览器所处硬件设备数据
  isInWechatMiniProgram, // 判断当前浏览器是否在微信小程序中
  compareVersion, // 比较两个版本号大小
} = browserDetect(userAgent);
```

#### 2、API
* browserType：浏览器类型数据
```
{
  ie: false, // 是否是ie浏览器
  edge: false, // 是否是edge浏览器
  opera: false, // 是否是欧朋浏览器
  firefox: false, // 是否是火狐浏览器
  chrome: false, // 是否是chrome浏览器
  safari: true, // 是否是safari浏览器
  wechat: false, // 是否是微信内嵌浏览器
  billionbottle: false, // 是否是百瓶内嵌浏览器
  version: 604.1, // 浏览器版本号
}
```
* browserOS：浏览器所处操作系统数据
```
{
  macos: false, // 是否是macos操作系统
  ios: true, // 是否是ios操作系统
  android: false, // 是否是安卓操作系统
  version: '13.4.0', // 操作系统版本号
}
```
* browserDevice：浏览器所处硬件设备数据
```
{
  mobile: true, // 是否是移动终端
  iphone: true, // 是否是iphone终端
  ipad: false, // 是否是ipad终端
}
```
* isInWechatMiniProgram：判断当前浏览器是否在微信小程序中
```
// 无参数
// 返回值：Promise
isInWechatMiniProgram().then(() => {
  console.log('在微信小程序浏览器中');
}).catch(() => {
  console.log('不在微信小程序浏览器中');
});
```
* compareVersion：比较两个版本号大小
```
// 参数一和参数二是两个版本号字符串
// 返回值：number
// 1 - v1 > v2
// 0 - v1 = v2
// -1 - v1 < v2
```
