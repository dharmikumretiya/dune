import { PrismaClient } from "@/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";


const connection_string = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connection_string })
const prisma = new PrismaClient({ adapter })