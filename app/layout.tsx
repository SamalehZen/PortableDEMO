import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portable Demo',
  description: 'Démo publique du composant Rota-le',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
