import { NextResponse } from 'next/server';
import { query } from '../../../lib/database';

interface UsersCountProps {
  count: number;
}

export async function GET() {
  const limit = 10;
  const offset = 0;
  try {
    const users = await query(`SELECT * FROM users LIMIT $1 OFFSET $2`, [
      limit,
      offset,
    ]);

    const totalUsers = (await query(
      `SELECT COUNT(*) FROM users`
    )) as unknown as UsersCountProps[];

    const total = Number(totalUsers[0].count);

    return NextResponse.json({ users, total });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
