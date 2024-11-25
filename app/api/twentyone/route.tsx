import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<Response> {
  let response: Response | undefined;
  if (request.url.includes('action=new')) {
    const twentyOneBase = process.env.NEXT_PUBLIC_DECK_OF_CARDS_API;
    response = await fetch(`${twentyOneBase}/new/shuffle/?deck_count=1`);
  } else if (request.url.includes('draw')) {
    const deckId = new URL(request.url).searchParams.get('deckId');
    response = await fetch(`${process.env.NEXT_PUBLIC_DECK_OF_CARDS_API}/${deckId}/draw/?count=2`);
  }
  if (!response || !response.ok) {
    return NextResponse.json({ error: 'Failed to fetch data' });
  }

  const data = await response.json();
  return NextResponse.json(data);
}
