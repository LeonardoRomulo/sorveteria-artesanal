import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import "./globals.css";


export const metadata = {
  title: "Sorverteria Artesanal",
  description: "A melhor sorverteria agora perto de você",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
