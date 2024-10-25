import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.YOUTUBE_CLIENT_ID;
  const redirectUri = 'http://localhost:3000/callback';
  const scope = 'https://www.googleapis.com/auth/youtube.readonly';
  const responseType = 'code';
  const accessType = 'offline';

  const googleAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&access_type=${accessType}`;

  return NextResponse.redirect(googleAuthUrl);
}
