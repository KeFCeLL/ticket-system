"use client"

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function SignInForm() {
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true)
      await signIn("google", { callbackUrl })
    } catch (error) {
      console.error("Giriş hatası:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-8 space-y-6">
      <Button
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full"
        variant="outline"
      >
        {loading ? "Giriş yapılıyor..." : "Google ile Giriş Yap"}
      </Button>
    </div>
  )
} 