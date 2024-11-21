import React ,{useState} from 'react';
import '../../index.css';

import cidadeDoMexico from '../../lugaresOlimpiadas/cidadedomexico.jpg';



function FirstSection1968CidadeDoMexicoMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1968 (Cidade do México - México)</h4>
<img src={cidadeDoMexico} className="sportImg" alt="Imagem Referente a Cidade do México no México">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1968 (em espanhol: Juegos Olímpicos de Verano de 1968), conhecidos oficialmente como os Jogos da XIX Olimpíada foram realizados na Cidade do México entre 12 e 27 de outubro de 1968. Pela primeira vez os Jogos foram sediados na América Latina e a altitude de 2 300m acima do nível do mar da capital federal mexicana gerou controvérsias sobre os danos que o ar mais rarefeito poderia causar no desempenho dos atletas. Realmente, a altitude prejudicou o desempenho dos atletas nas provas de resistência e de longa distância, como o ciclismo, a natação e a maratona, mas em compensação ajudou a provocar uma chuva de recordes mundiais e olímpicos nos eventos mais curtos e de esforço mais rápido como as corridas de menos de 800m, halterofilismo, lançamento de dardo e outros.


</p>

<p className="sportParagraph">O ano de 1968 foi um ano bastante confuso e violento, com a guerra do Vietnã, a Revolução Cultural na China, a invasão soviética da Tchecoslováquia tendo como consequência a Primavera de Praga, revoltas estudantis, marchas pelos direitos civis e enfrentamentos raciais por todo o planeta. O México também deu sua contribuição ao clima que marcava esta época, quando tropas federais do governo reprimiram com violência centenas de estudantes durante manifestações na Praça das Três Culturas, dez dias antes da cerimônia de abertura dos Jogos, no que ficou conhecido como o Massacre de Tlatelolco, manchando irremediavelmente o espírito olímpico pregado pelo COI e por seu fundador, o Barão de Coubertin, quase provocando o cancelamento do evento.





</p>




</div>

</section>



    );
}


export default FirstSection1968CidadeDoMexicoMobile;