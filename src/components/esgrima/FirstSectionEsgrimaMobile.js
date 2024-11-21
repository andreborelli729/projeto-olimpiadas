import React ,{useState} from 'react';
import '../../index.css';

import esgrima from '../../img/esgrima.jpg';



function FirstSectionBadmintonMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Esgrima</h4>
<img src={esgrima} className="sportImg" alt="Imagem Referente a Esgrima">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: As origens da esgrima podem ser encontradas nas lutas de espadas, praticadas por milhares de anos – como evidenciada pela descoberta de esculturas representando esgrimistas que datam de aproximadamente 1.190 a.C., encontradas em um templo perto de Luxor, no Egito.

Estimulada por mestres italianos, alemães e franceses, a esgrima fez a transição de uma forma de treinamento militar para um esporte no século 14 ou 15. Hoje, a esgrima é praticada em todo o mundo, gerando uma competição acirrada não apenas na Europa, mas também na Ásia, Oceania, Américas e África. A Federação Internacional de Esgrima é composta atualmente por 157 federações nacionais. 
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1896(Atenas - Grécia).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1924 (Paris - França).

</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL OU EM EQUIPE - ATENAS 1896 - PARIS 1924.



</p>
</div>

</section>



    );
}


export default FirstSectionBadmintonMobile;