import './globals.css';

export const metadata = {
  title: 'BTP Solution',
  description: 'BTP Energie website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
