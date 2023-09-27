const userAgent = $request.headers['User-Agent'];
const modifiedUserAgent = userAgent.replace(/iPhone.+?Mobile/, 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Model/iPhone14,2 phh_ios_version/6.78.0 phh_ios_build/202309172217 pversion/0');
$done({ headers: { ...$request.headers, 'User-Agent': modifiedUserAgent } });
