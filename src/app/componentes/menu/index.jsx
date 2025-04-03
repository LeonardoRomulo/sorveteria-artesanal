import estilos from '@/app/componentes/menu/Menu.module.css'
import Link from 'next/link';

export default function Menu(){
    return(
        <div className={estilos.menu}>
            <div className={estilos.nav}>
            <Link className={estilos.link_topo} href="/">Home</Link>
            <Link className={estilos.link_topo} href="/Sabores">Sabores</Link>
            <Link className={estilos.link_topo} href="/Sobre">Sobre</Link>
            </div>
        </div>
    )
}