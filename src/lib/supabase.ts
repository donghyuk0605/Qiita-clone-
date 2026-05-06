import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:54321';
// Vercelデプロイ時など、環境変数が未設定の場合のビルドエラーを防ぐためのフォールバック
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy_key_to_prevent_build_error';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
