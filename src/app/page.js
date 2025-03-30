import Image from "next/image";
import banner from "../../public/banner-home.png"
import estilos from "./page.module.css";

export default function Home() {
  return (
    <div className={estilos.page}>
      <main>
        <div className={estilos.banner}>
          <Image className={estilos.img_banner} src={banner} alt="banner"></Image>
        </div>
        <div className={estilos.container}>
          <h1>Sorverte Artesanal</h1>
        </div>

      </main>
    </div>
  );
}
