import React ,{useState} from 'react';
import '../../index.css';

import ciclismoBmxRacing from '../../img/ciclismobmxracing.jpeg';



function FirstSectionBadmintonMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Ciclismo BMX Racing</h4>
<img src={ciclismoBmxRacing} className="sportImg" alt="Imagem Referente ao Ciclismo BMX Racing">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: As corridas do ciclismo BMX Racing surgiram do sucesso do motocross na Califórnia a partir da década de 1960, quando os jovens começaram a correr com suas bicicletas em pistas improvisadas por todo o estado norte-americano. O BMX Racing começou a se tornar um esporte oficial no início dos anos 1980; em 1981, foi fundada a Federação Internacional de BMX, com o primeiro Mundial da modalidade ocorrendo um ano depois. O BMX foi integrado à União Ciclística Internacional (UCI) em 1993, eliminando assim o primeiro obstáculo para entrar nos Jogos Olímpicos.     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 2008(Pequim - China).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 2008(Pequim - China).

</p>
<p className="sportParagraph">TAGS: PARIS 2024 - UMA MODALIDADE - PEQUIM 2008.


</p>
</div>

</section>



    );
}


export default FirstSectionBadmintonMobile;