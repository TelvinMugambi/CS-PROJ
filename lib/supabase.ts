import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lmefkdyeodvnjlazcwhv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtZWZrZHllb2R2bmpsYXpjd2h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMzQ0NTEsImV4cCI6MjAzMTgxMDQ1MX0.n_Wzn5FoXvXcTFH0vOPx9Qot-ymuuFFmTRvPSJ7ymc4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})