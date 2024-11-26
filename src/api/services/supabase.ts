import { createClient } from "@supabase/supabase-js";
import { Database } from "../@types/supabase";

// 환경 변수에서 Supabase URL과 API 키를 불러옵니다.
const SUPABASE_URL = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

// Supabase 클라이언트 초기화
export const supabaseClient = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
