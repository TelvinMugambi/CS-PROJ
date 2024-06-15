import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zlezqyunvmbtmtvbtkut.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsZXpxeXVudm1idG10dmJ0a3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyNjM5NTMsImV4cCI6MjAzMTgzOTk1M30.29m34KtwnjHtokVxCkYRNp6s48QyCXiOm_4js1uH7_8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})