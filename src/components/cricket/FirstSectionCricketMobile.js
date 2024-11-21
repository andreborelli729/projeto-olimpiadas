import React ,{useState} from 'react';
import '../../index.css';

import cricket from '../../img/cricket.jpg';



function FirstSectionBadmintonMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Cricket</h4>
<img src={cricket} className="sportImg" alt="Imagem Referente ao Cricket">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O críquete (em inglês: cricket) é um desporto que utiliza bola e tacos, cuja origem remonta ao sul da Inglaterra, durante o ano de 1566. Considerado por muitos um desporto parecido com o basebol, foi inspirado num rudimentar jogo rural medieval chamado stoolball. Foi adotado pela nobreza no século XVII.[2] Sofreu muitas transformações ao longo dos anos até se tornar um desporto bastante admirado no Reino Unido, na Índia e no Paquistão.[3]

No Brasil, ficou conhecido como taco, pela semelhança de nomes costuma ser confundido com o croquet, sendo este um desporto totalmente diferente.      
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Apenas em 1900(Paris - França).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Nunca houve categoria feminina nesse esporte nas olímpiadas.

</p>
<p className="sportParagraph">TAGS: PARIS 1900 - UMA MODALIDADE - ESPORTE EM EQUIPE.



</p>
</div>

</section>



    );
}


export default FirstSectionBadmintonMobile;