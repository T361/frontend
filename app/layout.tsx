// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Playistan ',
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="heading">
        <nav className="subheading">
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
