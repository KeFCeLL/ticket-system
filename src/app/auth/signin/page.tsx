import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import SignInForm from "@/components/auth/SignInForm"

export default async function SignInPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Hoş Geldiniz</h1>
          <p className="mt-2 text-gray-600">Hesabınıza giriş yapın</p>
        </div>
        <SignInForm />
      </div>
    </div>
  )
} 