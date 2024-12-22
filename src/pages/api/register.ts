// src/api/register.ts
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    // Verifica se os dados foram passados corretamente
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Nome, email e senha são obrigatórios.' });
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      // Cria o usuário no banco
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
      return res.status(201).json(user);
    } catch {
      return res.status(500).json({ error: 'Erro ao criar o usuário.' });
    }
  } else {
    return res.status(405).json({ error: 'Método não permitido.' });
  }
}
