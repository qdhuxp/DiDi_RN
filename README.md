**React Native 仿滴滴打车** 
--------

用于学习React Native技术而作，纯属技术研究。App中所有Page都是使用React Native编写，实际上滴滴打车App使用了很多H5页面保证跨平台特性，所以实现方式跟本项目中的方式不一样。

本项目共实现以下功能：
1. 青桔骑行页面UI框架，实现地图定位、浮动滑动列表功能；
2. 打车页面UI框架，实现地图定位、浮动滑动列表功能、逆地理编码显示定位地址等；
3. 安全中心页面，实现部分滴滴网页展示功能；
4. 用户中心页面，模仿用户登录后展示的内容；
5. 城市选择页面，按照字母顺序显示中国城市列表，可以根据名称、拼音、字母进行搜索；
6. 消息中心页面，模仿滴滴App中的消息列表；
7. 条码扫码页面，可以扫描QR码；

效果图
--------
![image](https://github.com/qdhuxp/DiDi_RN/blob/master/Demo/sidebar.gif)
![image](https://github.com/qdhuxp/DiDi_RN/blob/master/Demo/city_picker.gif)
![image](https://github.com/qdhuxp/DiDi_RN/blob/master/Demo/message_center.gif)
![image](https://github.com/qdhuxp/DiDi_RN/blob/master/Demo/barcode.gif)
![image](https://github.com/qdhuxp/DiDi_RN/blob/master/Demo/bike.gif)
![image](https://github.com/qdhuxp/DiDi_RN/blob/master/Demo/taxi.gif)
![image](https://github.com/qdhuxp/DiDi_RN/blob/master/Demo/taxi_floatPanel.gif)
![image](https://github.com/qdhuxp/DiDi_RN/blob/master/Demo/safe_center.gif)

如何使用
--------
* 本项目使用了高德地图，运行之前需要申请高德地图key，参考如下网址<br />
  [如何申请key](https://lbs.amap.com/api/webservice/guide/create-project/get-key).

  注意： 项目中要高德的逆地理编码功能，必须申请“web服务”类型的key，同时还要申请“Android平台”类型的key。
  
  Key的安装方法参考[react-native-amap-geolocation](https://qiuxiang.github.io/react-native-amap-geolocation/#/)和[react-native-amap3d](https://github.com/qiuxiang/react-native-amap3d)项目中的描述。
  
* 运行 yarn 安装所有依赖库<br />

* 运行 ``yarn android``查看运行效果<br />
    
使用到的库
---------------

* [react-navigation](https://reactnavigation.org/): 用来实现页面导航效果。
* [ant-design](https://rn.mobile.ant.design/)：UI组件。
* [native-base](https://nativebase.io/)：UI组件，由于ant-design总是无法显示Icon，所以引入这个库主要使用了其中的Icon资源。
* [fortawesome](https://github.com/FortAwesome/react-native-fontawesome): 用于显示Icon，以后可以去掉。
* [react-native-amap-geolocation](https://github.com/qiuxiang/react-native-amap-geolocation)：逆地理编码，获取地点名称。
* [react-native-amap3d](https://github.com/qiuxiang/react-native-amap3d)：高德地图组件。
* [react-native-animatable](https://github.com/oblador/react-native-animatable)：实现部分动画效果。
* [react-native-largelist-v3](https://github.com/bolan9999/react-native-largelist)：显示城市列表数据。
* [react-native-permissions](https://github.com/zoontek/react-native-permissions)：用户权限管理。
* [react-native-progress](https://github.com/oblador/react-native-progress)：webview底下的加载进度条。
* [react-native-qrcode-scanner](https://github.com/moaazsidat/react-native-qrcode-scanner)：实现QR码扫描功能。
* [react-native-snap-carousel](https://github.com/archriss/react-native-snap-carousel)：图片轮播效果。
* [react-native-webview](https://github.com/react-native-webview/react-native-webview)：用于显示网页的webview组件。
* [rn-sliding-up-panel](https://github.com/octopitus/rn-sliding-up-panel)：Bike和Taxi中的滑动面板。
