import React ,{useState} from 'react';
import '../../index.css';

import ginasticaDeTrampolim from '../../img/ginasticadetrampolim.jpeg';



function FirstSectionBadmintonMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Ginástica De Trampolim</h4>
<img src={ginasticaDeTrampolim} className="sportImg" alt="Imagem Referente a Ginástica de Trampolim">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: A ginástica de trampolim foi inventada em 1934 por George Nissen, um ginasta americano, depois de acompanhar acrobatas de trapézio realizando manobras ao cair em redes de segurança; ele, então, construiu o primeiro protótipo de trampolim para criar suas acrobacias. Inicialmente utilizado como equipamento para treinar astronautas e atletas de outros esportes acrobáticos, a ginástica de trampolim rapidamente se tornou imensamente popular como uma modalidade por si só. Os primeiros campeonatos mundiais de ginástica de trampolim foram organizados em Londres, em 1964, e o esporte ingressou na Federação Internacional de Ginástica 34 anos depois, em 1998.
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 2000(Sydney - Austrália).
    </p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 2000(Sydney - Austrália).

</p>
<p className="sportParagraph">TAGS: PARIS 2024 - UMA MODALIDADE - ESPORTE INDIVIDUAL - SYDNEY 2000.



</p>
</div>

</section>



    );
}


export default FirstSectionBadmintonMobile;