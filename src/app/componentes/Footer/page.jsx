import estilos from '@/app/componentes/Footer/Footer.module.css';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';

export default function Footer() {
    return (
        <footer className={estilos.rodape}>
            <div className={estilos.rodape_contatos}>
                <Image className={estilos.logo} src={Logo} alt='logo do rodape' ></Image>
                <div className={estilos.container}>
                    <h3>Endereço</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>

                <div className={estilos.container}>
                    <h3>Contato</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>

                <div className={estilos.container}>
                    <h3>Horários</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <p className={estilos.dev} > Gelateria. Orgulhosamente desenvolvido por Leonardo Rômulo</p>
        </footer>
    );
}