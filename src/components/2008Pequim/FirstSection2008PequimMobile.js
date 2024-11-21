import React ,{useState} from 'react';
import '../../index.css';

import pequim from '../../lugaresOlimpiadas/pequim.jpg';



function FirstSection2008PequimMobile(){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 2008(Pequim - China)</h4>
<img src={pequim} className="sportImg" alt="Imagem Referente a cidade de Pequim na China">


</img>  
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 2008 (em mandarim: 第二十九届夏季奥林匹克运动会; Dì Èrshíjiǔ Jiè Xiàjì Àolínpǐkè Yùndònghuì) oficialmente conhecidos como os Jogos da XXIX Olimpíada, foram um evento multiesportivo realizado em Pequim, na República Popular da China, de 8 (à exceção do futebol, que teve início em 6 de agosto) a 24 de agosto de 2008. Um total de 10 942 atletas competiram nos 302 eventos dos 28 esportes, totalizando um evento a mais que os Jogos de 2004, em Atenas.[1] Os Jogos de Pequim marcaram a primeira ocasião em que uma edição dos Jogos Olímpicos, seja ela de Verão ou Inverno, foi realizada na China, que foi a 22ª nação a abrigar o evento.

</p>



</div>

</section>



    );
}


export default FirstSection2008PequimMobile;