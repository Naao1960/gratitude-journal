export default async (request, context) => {
  const ua = request.headers.get('user-agent') || '';
  const isCrawler =
    ua.includes('facebookexternalhit') ||
    ua.includes('Facebot') ||
    ua.includes('Twitterbot') ||
    ua.includes('LinkedInBot') ||
    ua.includes('Slackbot') ||
    ua.includes('Googlebot');

  if (!isCrawler) {
    return context.next();
  }

  const html = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>日々是感謝 | Gratitude Journal</title>
<meta name="description" content="毎日の感謝を記録して、気分の変化を可視化しよう">
<meta property="og:title" content="日々是感謝 | Gratitude Journal">
<meta property="og:description" content="毎日の感謝を記録して、気分の変化を可視化しよう">
<meta property="og:image" content="https://kansyaapli.netlify.app/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="https://kansyaapli.netlify.app">
<meta property="og:type" content="website">
<meta property="og:locale" content="ja_JP">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="日々是感謝 | Gratitude Journal">
<meta name="twitter:description" content="毎日の感謝を記録して、気分の変化を可視化しよう">
<meta name="twitter:image" content="https://kansyaapli.netlify.app/og-image.png">
</head>
<body></body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
};
