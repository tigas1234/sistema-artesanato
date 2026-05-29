import "./globals.css";

export const metadata = {
  title: "Cassis Uniformes",
  description: "Sistema de artesanato",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}