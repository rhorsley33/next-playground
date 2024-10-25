import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
export async function GET(request: Request): Promise<Response> {
  const playlistId = 'PLtAD_PEdbrpN5Nd6B6f_vnckUJ_msDYB3';
  // Get the URL of the request
  const { searchParams } = new URL(request.url);

  // Access query parameter "accessToken" from the URL
  const accessToken = searchParams.get('query');
  console.log(`Access token: ${accessToken}`);
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    return NextResponse.json(data);
  } else {
    return NextResponse.json(`Error fetching videos: ${response.statusText}`);
  }
}
