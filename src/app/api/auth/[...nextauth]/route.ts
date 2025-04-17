import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Prisma client'ı başlat
prisma.$connect();

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 