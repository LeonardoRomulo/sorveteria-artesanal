import Image from "next/image";
import banner from "../../public/banner-home.png"
import estilos from "./page.module.css";
import sabores from '../../public/banner-sabores.jpg';
import eventos from '../../public/eventos-image.jpg';
import sobre from '../../public/sobre-image.jpg'

export default function Home() {
  return (
    <div className={estilos.page}>
      <main>
        <section className={estilos.banner}>
          <Image className={estilos.img_banner} src={banner} alt="banner"></Image>
        </section>
        <div className={estilos.container}>
          <h1>Sorverte Artesanal</h1>
        </div>

        <section>
          <div className={estilos.container_card}>
            <div className={estilos.box_card}>

              <div className={estilos.card}>
                <Image className={estilos.img_sabores} src={sabores} alt="sorverte banner sobre"></Image>
              </div>

              <div className={estilos.card_info}>
                <h2>Nossos Sabores</h2>
                <h4>Novos e deliciosos!</h4>
                <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                </p>
              </div>
            </div>

            <div className={estilos.box_card}>

              <div className={estilos.card_info}>
                <h2>Nossos Sabores</h2>
                <h4>Novos e deliciosos!</h4>
                <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                </p>

              </div>
              <div className={estilos.card}>
                <Image className={estilos.img_sabores} src={eventos} alt="sorverte banner sobre"></Image>
              </div>

            </div>

            <div className={estilos.box_card}>

              <div className={estilos.card}>
                <Image className={estilos.img_sabores} src={sobre} alt="sorverte banner sobre"></Image>
              </div>

              <div className={estilos.card_info}>
                <h2>Nossos Sabores</h2>
                <h4>Novos e deliciosos!</h4>
                <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
