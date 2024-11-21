import React ,{useState} from 'react';
import '../../index.css';

import munique from '../../lugaresOlimpiadas/munique.jpg';



function FirstSection1972MuniqueMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1972 (Munique - Alemanha)</h4>
<img src={munique} className="sportImg" alt="Imagem Referente a cidade de Munique na Alemanha">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1972 (em alemão: Olympische Sommerspiele 1972), oficialmente conhecidos como os Jogos da XX Olimpíada, foram os Jogos realizados em Munique, cidade mais populosa do estado da Baviera na então Alemanha Ocidental, entre 26 de agosto e 11 de setembro de 1972 e até o começo de setembro estavam sendo considerados os melhores, mais pacíficos e tecnicamente perfeitos de todos os tempos, quando foram transformados no maior pesadelo já ocorrido na história das Olimpíadas.



</p>

<p className="sportParagraph">Com a participação recorde de 121 nações e 7 134 atletas, foram organizados pelos alemães para celebrar a paz e nos seus primeiros dez dias a competição esportiva de alto nível ali realizada maravilhava o mundo. Mas na madrugada do dia 5 de setembro, oito árabes do grupo terrorista Setembro Negro invadiram a vila olímpica, mataram dois membros da equipe de Israel e fizeram outros nove de reféns. O que se seguiu, com a paralisação temporária dos Jogos e a morte de todos os reféns israelitas, ficou conhecido como o Massacre de Munique.






</p>




</div>

</section>



    );
}


export default FirstSection1972MuniqueMobile;