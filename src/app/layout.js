import "./globals.css";
import Topo from '@/app/componentes/Topo/index.jsx';
import Footer from '@/app/componentes/Footer/page.jsx'

export const metadata = {
  title: "Gelateria",
  description: "A melhor sorverteria agora perto de você",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
