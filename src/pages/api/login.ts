// src/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }

    try {
      // Verifica se o usuário existe
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }

      // Verifica a senha
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Senha inválida.' });
      }

      // Retorna os dados do usuário (normalmente você retornaria um token JWT ou algo similar)
      return res.status(200).json({ message: 'Login bem-sucedido', user });
    } catch {
      return res.status(500).json({ error: 'Erro ao realizar o login.' });
    }
  } else {
    return res.status(405).json({ error: 'Método não permitido.' });
  }
}
