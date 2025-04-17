import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ['query', 'error', 'warn'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});

// Prisma client'ı başlat
prisma.$connect();

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 