// src/app/layout.tsx

import React from 'react';
import Link from 'next/link';
import './globals.css'; // Importando estilos globais (se necessário)

export const metadata = {
  title: 'Meu Projeto',
  description: 'Uma descrição do meu projeto',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="app-container">
          <header className="header">
            <h1>Meu Projeto</h1>
            <nav className="navigation">
              <ul>
                <li>
                  <Link href="/home">Home</Link>
                </li>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/register">Cadastro</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className="content">{children}</main>
          <footer className="footer">
            <p>© 2024 Meu Projeto. Todos os direitos reservados.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
