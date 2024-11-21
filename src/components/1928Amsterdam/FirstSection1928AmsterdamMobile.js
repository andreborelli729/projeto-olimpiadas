import React ,{useState} from 'react';
import '../../index.css';

import amsterdam from '../../lugaresOlimpiadas/amsterdam.jpg';



function FirstSection1928AmsterdamMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1928 (Amsterdam - Países Baixos)</h4>
<img src={amsterdam} className="sportImg" alt="Imagem Referente a cidade de Amsterdam nos Países Baixos">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1928 (em neerlandês: Olympische Zomerspelen 1928) , oficialmente Jogos da IX Olimpíada foram os Jogos Olímpicos realizados na cidade de Amesterdão, nos Países Baixos, entre 17 de maio e 12 de agosto de 1928, num clima de paz e prosperidade que viria a anteceder vinte anos de guerras e incertezas econômicas, com a participação de 2 833 atletas, entre eles 277 mulheres, representando 46 países, dois a mais que os Jogos anteriores, disputando dezesseis modalidades esportivas.


</p>

<p className="sportParagraph">Nestes Jogos, as mulheres puderam finalmente passar a competir no atletismo e a norte-americana Betty Robinson foi a primeira mulher a conquistar uma medalha de ouro neste esporte, na prova dos 100 metros rasos.


</p>




</div>

</section>



    );
}


export default FirstSection1928AmsterdamMobile;