import { PrismaClient } from "@/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";


const connection_stirng = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connection_stirng })
const prisma = new PrismaClient({ adapter })