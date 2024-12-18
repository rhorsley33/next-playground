import { supabase } from './supabaseClient';

export async function query(table, text, params = []) {
  try {
    let query = supabase.from(table).select('*');

    if (text) {
      query = query
        .ilike('first_name', `%${params[0]}%`)
        .or(`last_name.ilike.%${params[0]}%,email.ilike.%${params[0]}%`);
    }
    const start = params[1];
    const end = params[1] + params[2];
    if (params.length >= 2) {
      query = query.range(start, end);
    }
    const { data, error } = await query;

    if (error) {
      throw new Error(`Supabase query error: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error(`Error fetching data from ${table}:`, error);
    throw error;
  }
}
