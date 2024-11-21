import React ,{useState} from 'react';
import '../../index.css';

import beisebol from '../../img/beisebol.avif';



function FirstSectionBadmintonMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Beisebol</h4>
<img src={beisebol} className="sportImg" alt="Imagem Referente ao Beisebol">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O beisebol teria sido jogado pela primeira vez em Surrey, Inglaterra, em 1749, antes de atravessar o Atlântico e chegar aos Estados Unidos na década de 1770.

A primeira liga profissional organizada do esporte, a National Association of Professional Base Ball Players, foi fundada em 1875. O esporte é amplamente reconhecido como o esporte nacional dos EUA.

Em 1887, em Chicago, o repórter George Hancock elaborou regras para o esporte depois de ver torcedores das Universidades de Yale e Harvard acertarem uma luva de boxe com um cabo de vassoura durante uma partida de futebol americano.

Ele o chamou de "beisebol indoor" com a ideia de permitir que os jogadores praticassem no inverno, embora logo tenha sido transferido para áreas externas de menores dimensões do que as necessárias para o beisebol propriamente dito.

Ele foi renomeado softball em 1926 e ganhou popularidade principalmente entre crianças e mulheres.
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1992(Barcelona - Espanha), fazendo presença também nas edições de 1996(Atlanta - EUA), 2000(Sydney- Australia), 2004(Atenas - Grécia), 2008(Pequim - China) e 2020 Tóquio - Japão). Na edição de 2024 não haverá o esporte.
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1996(Atlanta - EUA), fazendo presença também nas edições de 2000(Sydney- Australia), 2004(Atenas - Grécia), 2008(Pequim - China) e 2020 (Tóquio - Japão)

</p>
<p className="sportParagraph">TAGS: TÓQUIO 2020 - MAIS DE UMA MODALIDADE - ESPORTE EM EQUIPE - BARCELONA 1992 - ATLANTA 1996 - SYDNEY 2000 - ATENAS 2004 - PEQUIM 2008.

</p>
</div>

</section>



    );
}


export default FirstSectionBadmintonMobile;