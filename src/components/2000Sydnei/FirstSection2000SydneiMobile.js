import React ,{useState} from 'react';
import '../../index.css';

import sydnei from '../../lugaresOlimpiadas/sydnei.jpg';



function FirstSection2000SydneiMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 2000(Sydnei - Austrália)</h4>
<img src={sydnei} className="sportImg" alt="Imagem Referente a cidade de Sydnei na Austrália">


</img>  
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 2000 (em inglês: 2000 Summer Olympics), oficialmente conhecidos como os Jogos da XXVII Olimpíada, foram um evento multiesportivo realizado em Sydney, capital do estado de Nova Gales do Sul, na Austrália, entre 13 de setembro e 1 de outubro de 2000, com a cerimônia de abertura ocorrendo em 15 de setembro.[1] Foi a segunda vez que as Olimpíadas foram realizadas no hemisfério sul, sendo a primeira em Melbourne em 1956. Apesar de serem oficialmente os Jogos Olímpicos de Verão de 2000, os Jogos de Sydney ocorreram entre o fim do inverno e o início da primavera australiana.


</p>




</div>

</section>



    );
}


export default FirstSection2000SydneiMobile;