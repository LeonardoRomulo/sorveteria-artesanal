import estilos from '@/app/componentes/menu/Menu.module.css';
import Link from 'next/link';

export default function Menu({ fecharMenu }) {
    return (
        <div className={estilos.menu}>
            <div className={estilos.nav}>
                <Link className={estilos.link_topo} href="/" onClick={fecharMenu}>Home</Link>
                <Link className={estilos.link_topo} href="/Sabores" onClick={fecharMenu}>Sabores</Link>
                <Link className={estilos.link_topo} href="/Sobre" onClick={fecharMenu}>Sobre</Link>
            </div>
        </div>
    );
}