const userAgent = $request.headers['User-Agent'];
const modifiedUserAgent = userAgent.replace(/(com\.xunmeng\.pinduoduo AppVersion)\/[0-9.]+ (AppBuild)\/[0-9]+ (pversion)\/[0-9]+/, '$1/5.8.1 $2/2004100017 $3');
$done({ headers: { ...$request.headers, 'User-Agent': modifiedUserAgent } });
