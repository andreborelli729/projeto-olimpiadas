import React ,{useState} from 'react';
import '../../index.css';

import vela from '../../img/vela.avif';



function FirstSectionVelaMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Vela</h4>
<img src={vela} className="sportImg" alt="Imagem Referente a Vela">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: As regatas internacionais de vela começaram em 1851, quando membros do New York Yacht Club decidiram participar de uma competição na Inglaterra. Para isso, eles construíram uma escuna de 101 pés chamada America, navegaram até Inglaterra e ganharam um troféu chamado Copa dos Cem Guinéus. O troféu foi, então, renomeado para “America’s Cup” em homenagem ao navio vitorioso e sua tripulação.</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1900(Paris - França), estando fora apenas na edição de 1904 (Saint Louis - EUA).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1900(Paris - França), porém em 1988(Seul - Coréia do Sul) teve o primeiro evento exclusivamente feminino.
</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL OU EM EQUIPE - OURO EM OUTRAS EDIÇÕES - MEDALHA EM OUTRAS EDIÇÕES - PARIS 1900 - CIDADE DO MEXICO 1968 - MONTREAL 1972 - SMOSCOU 1980 - LOS ANGELES 1984 - SEUL 1988, ATLANTA 1996 - SYDNEY 2000 - PEQUIM 2008 - LONDRES 2012 - RIO DE JANEIRO 20016 - TÓQUIO 2020.

</p>
</div>

</section>



    );
}


export default FirstSectionVelaMobile;