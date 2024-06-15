import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { StyleSheet, View, Alert, Text, TextInput } from 'react-native'
import COLORS from '../constants/color';
import Button from '../components/Button';
import { Session } from '@supabase/supabase-js'
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from './Avatar'


export default function Account({ session }: { session: Session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [website, setWebsite] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')

  useEffect(() => {
    if (session) getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', session?.user.id)
        .single()
      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string
    website: string
    avatar_url: string
  }) {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const updates = {
        id: session?.user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      const { error } = await supabase.from('profiles').upsert(updates)

      if (error) {
        throw error
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView>

    
        <View style={{ marginBottom: 12 }}>
            <View>
                <Avatar
                    size={200}
                    url={avatarUrl}
                    onUpload={(url: string) => {
                    setAvatarUrl(url)
                    updateProfile({ username, website, avatar_url: url })
                    }}
                />
            </View>
            <Text style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8
            }}>Email</Text>

            <View style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22
            }}>
                <TextInput
                    value={session?.user?.email}
                    style={{
                        width: "100%"
                    }}
                    aria-disabled
                />
            </View>

            <Text style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8
            }}>Username</Text>

            <View style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22
            }}>
                <TextInput
                    value={username || ''} 
                    style={{
                        width: "100%"
                    }}
                    aria-disabled
                />
            </View>
        </View>
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})