import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'

// Prisma client'ı başlat
db.$connect()

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST } 