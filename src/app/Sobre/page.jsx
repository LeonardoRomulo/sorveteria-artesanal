import Image from 'next/image';
import estilos from '@/app/Sobre/Sobre.module.css';
import SobreImg from '../../../public/sobre-image.jpg';
import Sorveteria from '../../../public/sorveteria.jpg'


export default function Sobre() {
    return (
        <main>
            <section className={estilos.section_banner}>
                <div className={estilos.banner}>
                    <h1>A GELATERIA</h1>
                </div>
            </section>

            <section className={estilos.sobre_nos}>
                <div className={estilos.sobre_titulo}>
                    <h2>Sobre Nós</h2>
                    <h3>Nós simplesmente amamos sorvete!</h3>
                    <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvere produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final so sorvete. Vendemos tanto para varejo como para atacado.</p>
                    <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                </div>
            </section>

            <section className={estilos.section_sorveteria}>

                <Image className={estilos.img1} src={SobreImg} alt="clientes tomando sroverte na loja"></Image>
                <Image className={estilos.img2} src={Sorveteria} alt='foto interna da sorveteria'></Image>

            </section>
        </main>
    )
}
