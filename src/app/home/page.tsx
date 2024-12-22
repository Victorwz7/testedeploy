// src/app/home/page.tsx
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Bem-vindo ao Meu Projeto!</h1>
      <p>Essa é a página inicial da sua aplicação.</p>

      <div>
        <h3>Navegação:</h3>
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Cadastro</Link>
          </li>
        </ul>
      </div>
      
      <footer>
        <p>© 2024 Meu Projeto. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
