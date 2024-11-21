import React ,{useState} from 'react';
import '../../index.css';

import rioDeJaneiro from '../../lugaresOlimpiadas/riodejaneiro.jpg';



function FirstSection2016RioDeJaneiroMobile(){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 2016(Rio de Janeiro - Brasil)</h4>
<img src={rioDeJaneiro} className="sportImg" alt="Imagem Referente a cidade do Rio De Janeiro no Brasil">


</img>  
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 2016 conhecidos oficialmente como os Jogos da XXXI Olimpíada, mais comumente Rio 2016, foi um evento multiesportivo realizado no segundo semestre de 2016, na cidade do Rio de Janeiro, capital do estado homônimo, no Brasil. A escolha da sede foi feita durante a 121ª Sessão do Comitê Olímpico Internacional (COI), que aconteceu em Copenhague, Dinamarca, em 2 de outubro de 2009. Foram os primeiros Jogos Olímpicos de Verão sob a presidência de Thomas Bach[5] e a oitava vez que o Brasil sediou um grande evento multiesportivo.


</p>
<p className="sportParagraph">Foi a primeira edição dos Jogos Olímpicos sediados na América do Sul e a segunda na América Latina e nos trópicos, depois dos Jogos Olímpicos na Cidade do México em 1968.[6] Foi ainda a quarta vez que os Jogos Olímpicos de Verão ocorreram em uma estação climática diferente (Sydney 2000 foi parcialmente no inverno e na primavera australiana, e Tóquio 1964 e Cidade do México 1968 no outono), mas a primeira que decorreram integralmente no inverno local.[7] Pois os Jogos Rio 2016 ocorreram durante o inverno brasileiro, uma vez que a cidade localiza-se no hemisfério sul.


</p>


</div>

</section>



    );
}


export default FirstSection2016RioDeJaneiroMobile;