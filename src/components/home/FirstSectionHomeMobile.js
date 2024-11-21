import React ,{useState} from 'react';
import '../../index.css';
import home from '../../img/home.webp';




function FirstSectionHandebolMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Seu Guia Geral das Olímpiadas</h4>
<img src={home} className="sportImg" alt="Imagem Referente ao simbolismo das olímpiadas">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Neste site você encontrará um resumo bem elaborado das olímpiadas antigas e modernas, sendo descritos todas as modalidades já praticadas e as edições dos jogos modernos.
     
</p>
<p className="sportParagraph">Este site foi feito de Portfólio por André Amaral Borelli, Web Developer, Front-end, Gestor de TI formado na PUC-Campinas, cidadão brasileiro e também português.

    </p>

</div>

</section>



    );
}


export default FirstSectionHandebolMobile;