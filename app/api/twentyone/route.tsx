import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<Response> {
  const twentyOneBase = process.env.NEXT_PUBLIC_DECK_OF_CARDS_API;
  const response = await fetch(`${twentyOneBase}/new/shuffle/?deck_count=1`);

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch data' });
  }

  const data = await response.json();
  return NextResponse.json(data);
}
