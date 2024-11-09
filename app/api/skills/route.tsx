import { NextResponse } from 'next/server';
import { query } from '../../../lib/database';

export async function GET(request: Request): Promise<Response> {
  try {
    const skills = await query('skills');
    return NextResponse.json(skills);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Unknown error occurred' }, { status: 500 });
  }
}
