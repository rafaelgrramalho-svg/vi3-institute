import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metodo M.A.R. | Autoridade Reconhecida em 90 Dias",
  description:
    "O sistema cientifico de 3 pilares que transforma profissionais invisiveis em autoridades reconhecidas — cobrando 3x mais em 90 dias.",
  keywords: [
    "metodo mar",
    "autoridade",
    "posicionamento",
    "freelancer",
    "consultor",
    "cobrar mais",
    "reconhecimento",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
