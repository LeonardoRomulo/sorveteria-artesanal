'use client';
import { useState } from 'react';
import Menu from '../../componentes/menu'
import estilos from "@/app/componentes/Topo/Topo.module.css";
import Link from "next/link";
import Image from 'next/image';
import Logo from "../../../../public/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";


export default function Topo() {

    const [abrirMenu, setAbrirMenu] = useState(false);

    function atualizarMenu() {
        setAbrirMenu(!abrirMenu);
    }

    return (
        <header className={estilos.topo}>
            <div className={estilos.container_topo}>
                {abrirMenu && (
                    <Menu fecharMenu={() => setAbrirMenu(false)} />
                )}

                <button className={estilos.botao} onClick={atualizarMenu}>{abrirMenu ? <IoCloseSharp size={50} /> : <IoMenuSharp size={50} />}</button>
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
