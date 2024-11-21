import React ,{useState} from 'react';
import '../../index.css';

import ciclismoMountainBike from '../../img/ciclismomountainbike.jpeg';



function FirstSectionBadmintonMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Ciclismo Mountain Bike</h4>
<img src={ciclismoMountainBike} className="sportImg" alt="Imagem Referente ao Ciclismo Mountain Bike">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O ciclismo mountain bike é um esporte relativamente novo que surgiu na década de 1970, quando ciclistas da Califórnia decidiram levar suas bicicletas para fora da estrada e explorar novas trilhas. Na década de 1990 foram criadas as primeiras bicicletas capazes de suportar os terrenos mais acidentados e, posteriormente, o hobby decolou, tornando-se rapidamente um esporte por si só. As primeiras competições informais ocorreram no fim da década de 1970, antes do primeiro Mundial oficial ser realizado na década de 1990.      
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1996(Atlanta - EUA).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1996(Atlanta - EUA).

</p>
<p className="sportParagraph">TAGS: PARIS 2024 - UMA MODALIDADE - ATLANTA 1996.



</p>
</div>

</section>



    );
}


export default FirstSectionBadmintonMobile;