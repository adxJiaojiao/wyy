// pdd-ua.js

$done({
  onRequest: function(request) {
    // 伪装 User-Agent
    request.header['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/14E5239e iOS/16.6.1 Model/iPhone14,2 BundleID/com.xunmeng.pinduoduo AppVersion/4.79.0 AppBuild/1911012218 cURL/7.47.0';
    return {
      requestHeaders: request.headers
    };
  }
});
