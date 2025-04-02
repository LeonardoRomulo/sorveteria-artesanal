import estilos from "@/app/componentes/Topo/Topo.module.css";
import Link from "next/link";
import Image from 'next/image';
import Logo from "../../../../public/logo.png";



export default function Topo() {
    return (
        <header className={estilos.topo}>
            <div className={estilos.container_topo}>
                <Link href="/" alt="logo">  
                <Image className={estilos.img_logo} src={Logo} alt="logo da sorverteria" ></Image>
                </Link>
                <nav className={estilos.links_topo}>
                    <Link className={estilos.link_topo} href="/">Home</Link>
                    <Link className={estilos.link_topo} href="/Sabores">Sabores</Link>
                    <Link className={estilos.link_topo} href="/Sobre">Sobre</Link>
                </nav>
            </div>
        </header>

    );
}
