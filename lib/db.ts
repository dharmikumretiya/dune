import { PrismaClient } from "@/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";


const connection_string = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connection_string })
export const prisma = new PrismaClient({ adapter })