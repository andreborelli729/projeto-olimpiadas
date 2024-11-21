import React ,{useState} from 'react';
import '../../index.css';

import ginasticaRitmica from '../../img/ginasticaritmica.jpeg';



function FirstSectionGinasticaRitmicaMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Ginástica Rítmica</h4>
<img src={ginasticaRitmica} className="sportImg" alt="Imagem Referente a Ginástica Rítmica">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: A ginástica é um dos esportes mais antigos que ainda hoje é praticado, com origens que remetem às civilizações antigas. De fato, a Federação Internacional de Ginástica (FIG), fundada em 1881, é a mais antiga federação esportiva internacional do mundo. A ginástica rítmica, no entanto, é uma modalidade bem mais recente, pois evoluiu da ginástica em massa bastante popular na Europa no final do século 19 e início do século 20.

A FIG reconheceu a ginástica rítmica como modalidade em 1961; dois anos depois, o primeiro Campeonato Mundial foi realizado em Budapeste.
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:  Desde 1988(Seul - Coréia do Sul).
    </p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina:  Desde 1988(Seul - Coréia do Sul).

</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL OU EM EQUIPE - SEUL 1988. 



</p>
</div>

</section>



    );
}


export default FirstSectionGinasticaRitmicaMobile;