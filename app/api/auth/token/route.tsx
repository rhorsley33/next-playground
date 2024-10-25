import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { code } = await request.json();

  const clientId = process.env.YOUTUBE_CLIENT_ID;
  const clientSecret = process.env.YOUTUBE_CLIENT_SECRET;

  if (!clientSecret) {
    throw new Error('YOUTUBE_CLIENT_SECRET is not defined');
  }
  if (!clientId) {
    throw new Error('YOUTUBE_CLIENT_ID is not defined');
  }

  const redirectUri = 'http://localhost:3000/callback';

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
    }),
  });

  const data = await response.json();
  if (response.ok) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: data }, { status: response.status });
  }
}
