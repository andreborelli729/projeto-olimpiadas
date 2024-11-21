import React ,{useState} from 'react';
import '../../index.css';

import ciclismoDeEstrada from '../../img/ciclismodeestrada.jpg';



function FirstSectionBadmintonMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Ciclismo de Estrada</h4>
<img src={ciclismoDeEstrada} className="sportImg" alt="Imagem Referente ao Ciclismo de Estrada">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O ciclismo é composto por várias modalidades, refletindo tanto o seu passado quanto o seu futuro – e o ciclismo de estrada é a forma mais antiga desse esporte. Durante o século 19, o ciclismo teve um aumento de popularidade graças à invenção do sistema de corrente e engrenagem. As primeiras corridas foram organizadas anos depois, com o primeiro evento documentado em 1868 no Parque Saint Cloud, em Paris. Posteriormente, as federações nacionais de ciclismo começaram a se estabelecer e uma federação internacional, conhecida como União Ciclística Internacional, foi criada em 1900 para supervisionar a organização das várias modalidades.
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1896(Atenas - Grécia).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1984(Los Angeles - EUA).

</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL OU EM EQUIPE - ATENAS 1986 - LOS ANGELES 1984.



</p>
</div>

</section>



    );
}


export default FirstSectionBadmintonMobile;