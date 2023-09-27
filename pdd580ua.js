const userAgent = $request.headers['User-Agent'];
const modifiedUserAgent = userAgent.replace(/iPhone.+?Mobile/, 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 iOS/16.6.1 Model/iPhone14,2 BundleID/com.xunmeng.pinduoduo AppVersion/5.8.1 AppBuild/2004100017 pversion/0');
$done({ headers: { ...$request.headers, 'User-Agent': modifiedUserAgent } });
