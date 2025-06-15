'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function checkConnection() {
      try {
        const { data, error } = await supabase.from('users').select('*').limit(1)
        if (error) throw error
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setLoading(false)
      }
    }

    checkConnection()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Next.js + Supabase</h1>
        
        {loading ? (
          <p>Checking Supabase connection...</p>
        ) : error ? (
          <div className="text-red-500">
            <p>Error connecting to Supabase:</p>
            <p>{error}</p>
          </div>
        ) : (
          <div className="text-green-500">
            <p>Successfully connected to Supabase!</p>
          </div>
        )}
      </div>
    </main>
  )
}
