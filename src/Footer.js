import React from 'react';
import './index.css';
import logo from './img/logo.png';

function Footer(){
    return(
        <>
        <section className="footer">
            <div className="footerLogo">
<img src={logo} alt="Logo Andre Borelli" className="footerImg">
</img>

        </div>
        <div className="footerInfo">
            <p className="footerParagraph">Projeto Feito por André Borelli Web Develper, todos os direitos  reservados ©.(2024)</p>
        </div>
        </section>
        </>
    );
}

export default Footer;