import { createContext, useCallback, useEffect, useState } from 'react'

import { supabase } from '../libs/supabase'

type User = {
  id: string
  name: string
  email: string
  avatar: string
}

type AuthContextData = {
  user: User | null
  signInWithDiscord(): void
  signOut(): void
}

export const AuthContext = createContext({} as AuthContextData)

type UserProviderProps = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const getUser = async () => {
      const response = await supabase.auth.getUser()

      if (response.error) {
        setUser(null)
      }

      const userData = response.data.user

      if (userData) {
        const {
          id,
          user_metadata: { name, email, avatar_url }
        } = userData

        return setUser({
          id,
          name,
          email,
          avatar: avatar_url
        })
      }

      return setUser(null)
    }

    getUser()
  }, [])

  const signInWithDiscord = useCallback(async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'discord'
    })
  }, [])

  const signOut = useCallback(async () => {
    await supabase.auth.signOut()
  }, [])

  return (
    <AuthContext.Provider value={{ user, signInWithDiscord, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
