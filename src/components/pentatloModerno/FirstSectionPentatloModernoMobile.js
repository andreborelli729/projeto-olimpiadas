import React ,{useState} from 'react';
import '../../index.css';

import pentatlo from '../../img/pentatlo.avif';



function FirstSectionPentatloModernoMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Pentatlo Moderno</h4>
<img src={pentatlo} className="sportImg" alt="Imagem Referente ao Pentatlo Moderno">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O pentatlo moderno é o sucessor do antigo pentatlo, que compreendia corrida, salto, lançamento de lança, disco e luta livre. O Barão Pierre de Coubertin, fundador dos Jogos Olímpicos modernos, valorizava bastante o pentatlo dos Jogos antigos e propôs uma competição semelhante para as Olimpíadas modernas: uma que testaria os pontos fortes de um atleta “completo” através de disciplinas mais contemporâneas. A crescente popularidade do esporte resultou na fundação de uma federação internacional, a União Internacional de Pentatlo Moderno (UIPM, em inglês) em 1948. Atualmente, conta com mais de 120 países membros.


</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:Desde 1912(Estocolmo - Suécia).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 2000(Sydney - Austrália).</p>
<p className="sportParagraph">TAGS: PARIS 2024 -UMA MODALIDADE - ESPORTE INDIVIDUAL - MEDALHA EM OUTRA EDIÇÃO - ESTOCOLMO 1912 - SYDNEY 2000 - LONDRES 2012.

</p>
</div>

</section>



    );
}


export default FirstSectionPentatloModernoMobile;