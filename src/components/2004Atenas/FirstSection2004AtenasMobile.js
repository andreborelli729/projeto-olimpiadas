import React ,{useState} from 'react';
import '../../index.css';

import atenas from '../../lugaresOlimpiadas/atenas.jpg';



function FirstSection2004AtenasMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 2004(Atenas - Grécia)</h4>
<img src={atenas} className="sportImg" alt="Imagem Referente a cidade de Atenas na Grécia">


</img>  
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de 2004 (em grego moderno: Θερινοί Ολυμπιακοί Αγώνες 2004, Therinoí Olympiakoí Agó̱nes 2004), conhecidos oficialmente como os Jogos da XXVIII Olimpíada, foram um evento multiesportivo realizado em Atenas, capital da Grécia, entre 11 e 29 de agosto. Foi a segunda edição de Jogos Olímpicos realizada na cidade, 108 anos após a primeira.

</p>

<p className="sportParagraph">Durante os dezoito dias de
disputa, 10 625 atletas de 201 nações competiram em 301 eventos de 28 modalidades.

</p>




</div>

</section>



    );
}


export default FirstSection2004AtenasMobile;