// src/lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Inicializa o cliente Prisma
const prisma = new PrismaClient();

// Evita que o cliente Prisma seja instanciado mais de uma vez
// durante o processo de Hot Reload (no Next.js).
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === 'production') {
  global.prisma = prisma;
} else {
  if (!global.prisma) {
    global.prisma = prisma;
  }
}

export default prisma;
