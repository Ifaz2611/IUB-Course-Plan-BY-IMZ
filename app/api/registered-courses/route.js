export const dynamic = 'force-dynamic';

const REMOTE_URL = 'https://iras.iub.edu.bd:8079/api/v1/registration';

export async function POST(request) {
  let body = {};
  try {
    body = await request.json();
  } catch {
    // ignore if JSON parsing fails
  }

  const studentId = String(body?.studentId || '').trim();
  const token = String(body?.token || '').trim();

  if (!studentId || !token) {
    return Response.json({ message: 'Missing studentId or token' }, { status: 400 });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const remoteUrl = `${REMOTE_URL}/student-registered-courses/${encodeURIComponent(studentId)}/all`;
    const upstream = await fetch(remoteUrl, {
      method: 'GET',
      cache: 'no-store',
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        Origin: 'https://irasv1.iub.edu.bd',
        Referer: 'https://irasv1.iub.edu.bd/'
      }
    });

    clearTimeout(timeoutId);

    const contentType = upstream.headers.get('content-type') || 'application/json; charset=utf-8';
    const text = await upstream.text();

    return new Response(text, {
      status: upstream.status,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'no-store'
      }
    });
  } catch (error) {
    if (error.name === 'AbortError') {
      return Response.json({ message: 'Registered-courses proxy timeout' }, { status: 504 });
    }
    return Response.json(
      { message: 'Registered-courses proxy failed', error: String(error?.message || error) },
      { status: 500 }
    );
  }
}