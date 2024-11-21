import React ,{useState} from 'react';
import '../../index.css';

import ciclismoDePista from '../../img/ciclismodepista.jpeg';



function FirstSectionBadmintonMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Ciclismo de Pista</h4>
<img src={ciclismoDePista} className="sportImg" alt="Imagem Referente ao Ciclismo de Pista">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: As primeiras bicicletas foram inventadas na década de 1850 e eram bem diferentes das bicicletas que conhecemos hoje. Mas foi somente nos anos 1870 que as primeiras competições de ciclismo em pistas de madeira foram realizadas, com a primeira corrida de seis dias acontecendo em Londres, em 1878. O ciclismo de pista cresceu rapidamente em popularidade e continuou a se desenvolver com a criação da Associação Internacional de Ciclismo em 1892 e a organização do primeiro Mundial em Chicago, em 1893.      
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1896(Atenas - Grécia).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1988(Seul - Coréia do  Sul).

</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL OU EM EQUIPE - ATENAS 1896 - SEUL 1988.



</p>
</div>

</section>



    );
}


export default FirstSectionBadmintonMobile;