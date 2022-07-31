import { PrismaClient } from '@prisma/client';

let prismaa;

if (process.env.NODE_ENV === 'production') {
  prismaa = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prismaa = global.prisma;
}

const prisma = prismaa;
export default prisma;
