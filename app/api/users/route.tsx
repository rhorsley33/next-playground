import { NextResponse } from 'next/server';
import { query } from '../../../lib/database'; // Your custom query function
import { supabase } from '../../../lib/supabaseClient'; // Import the supabase client

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '10');
  const offset = parseInt(searchParams.get('offset') || '0');
  const searchTerm = searchParams.get('search') || '';
  try {
    const queryText = searchTerm
      ? `WHERE first_name ILIKE $1 OR last_name ILIKE $1 OR email ILIKE $1`
      : '';
    const users = await query('users', queryText, [searchTerm, offset, limit]);
    const { data: totalUsersResult, error: countError } = await supabase
      .from('users')
      .select('id', { count: 'exact' });

    if (countError) {
      throw new Error(countError.message);
    }

    const total = totalUsersResult.length;
    return NextResponse.json({ users, total });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const { first_name, last_name, email, password, age } = await request.json();

  const { data, error } = await supabase
    .from('users')
    .insert([{ first_name, last_name, email, password, age }])
    .select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
