import React ,{useState} from 'react';
import '../../index.css';

import flagFootball from '../../img/flagfootball.avif';



function FirstSectionBadmintonMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Flag Football</h4>
<img src={flagFootball} className="sportImg" alt="Imagem Referente ao Flag Football">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Flag football é uma variante do futebol americano ( futebol americano ou futebol canadense, dependendo da localização) onde, em vez de derrubar os jogadores no chão, o time defensivo deve remover uma bandeira ou cinto de bandeira do portador da bola ("retirada da bandeira") para encerrar uma descida . No flag football, o contato é limitado entre os jogadores. O esporte tem um forte público amador com várias competições nacionais e internacionais a cada ano patrocinadas por várias associações, mas é mais popularmente praticado na América, onde foi inventado.   
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: À partir de 2028(Los Angeles - EUA).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: À partir de 2028(Los Angeles - EUA).

</p>
<p className="sportParagraph">TAGS: LOS ANGELES 2028 - UMA MODALIDADE - ESPORTE COLETIVO.



</p>
</div>

</section>



    );
}


export default FirstSectionBadmintonMobile;