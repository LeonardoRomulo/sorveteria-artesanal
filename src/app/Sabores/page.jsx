import Image from 'next/image';
import estilos from '@/app/Sabores/Sabores.module.css'


export default function Sabores(){
    return(
        <main>
            <section className={estilos.banner}>
                <h1>NOSSOS SABORES</h1>
            </section>
        </main>
    )
}