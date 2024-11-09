import { NextResponse } from 'next/server';
import { query } from '../../../lib/database';

export async function GET(request: Request): Promise<Response> {
  try {
    const skills = await query('skills');
    return NextResponse.json(skills);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
