import { NextResponse } from 'next/server';
import { query } from '../../../lib/database';

interface UsersCountProps {
  count: number;
}

interface PostRequestProps {
  name: string;
  email: string;
  password: string;
  age: number;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '10');
  const offset = parseInt(searchParams.get('offset') || '0');
  const searchTerm = searchParams.get('search') || '';

  let queryText = `SELECT * FROM users`;
  let queryParams = [];

  if (searchTerm) {
    queryText += ` WHERE first_name ILIKE $1 OR last_name ILIKE $1 OR email ILIKE $1`;
    queryParams.push(`%${searchTerm}%`);
  }

  queryText += ` LIMIT $${queryParams.length + 1} OFFSET $${
    queryParams.length + 2
  }`;
  queryParams.push(limit, offset);

  try {
    const users = await query(queryText, queryParams);
    const totalUsers = await query(`SELECT COUNT(*) FROM users`);
    const total = totalUsers;
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
  // TODO: Add validation, sanitization, and error handling
  const { first_name, last_name, email, password, age } = await request.json();
  const newUser = await query(
    `INSERT INTO users (first_name, last_name, email, password, age) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [first_name, last_name, email, password, age]
  );
  return NextResponse.json(newUser);
}
