import estilos from '@/app/Sabores/Sabores.module.css';
import Image from 'next/image';
import Oreo from '../../../public/sabor-oreo.png';
import Pistache from '../../../public/sabor-pistache.png';
import Cookies from '../../../public/sabor-cookies-avela.png';
import Kiwi from '../../../public/sabor-kiwi.png';
import Morango from '../../../public/sabor-morango.png';
import Limao from '../../../public/sabor-limao.png';

export default function Sabores() {
    return (
        <main>
            <section className={estilos.banner}>
                <h1>NOSSOS SABORES</h1>
            </section>

            <section className={estilos.sabores_sorvertes}>
                <h2>SABORES DE SORVETES</h2>
                <div className={estilos.container}>
                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={Oreo} alt ='sorverte de oreo'></Image>
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor de Oreo. Uma explosão de sabor</p>
                    </div>

                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={Pistache} alt='sorverte de oreo'></Image>
                        <h3>Sorvete de Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>

                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={Cookies} alt='sorverte de oreo'></Image>
                        <h3>Sorvete Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={Kiwi} alt='sorverte de oreo'></Image>
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>

                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={Morango} alt='sorverte de oreo'></Image>
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>

                    <div className={estilos.card}>
                        <Image className={estilos.img_card} src={Limao} alt='sorverte de oreo'></Image>
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}