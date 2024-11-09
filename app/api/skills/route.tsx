import { NextResponse } from 'next/server';
import { query } from '../../../lib/database';

export async function GET(request: Request): Promise<Response> {
  const skills = await query('SELECT * FROM skills');
  return NextResponse.json(skills);
}
