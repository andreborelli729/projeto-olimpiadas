import React ,{useState} from 'react';
import '../../index.css';

import canoagemSlalom from '../../img/canoagemSlalom.jpg';



function FirstSectionBadmintonMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Canoagem Slalom</h4>
<img src={canoagemSlalom} className="sportImg" alt="Imagem Referente ao Badminton">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição:
Durante séculos, as canoas eram utilizadas como meio de transporte (além de ser uma ferramenta útil para a caça e a pesca) na América do Norte, na Sibéria e na Groenlândia. O esporte de canoagem slalom foi imaginado a partir do esqui slalom e começou na Suíça, em 1932. As primeiras competições foram realizadas em águas calmas, mas depois mudaram para rápidas corredeiras. </p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1972 (Munique - Alemanha) e se consolidou em 1992 (Barcelona - Espanha).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 2004 (Atenas - Grécia).
</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL - MUNIQUE 1972 - ATENAS 2004.


</p>
</div>

</section>



    );
}


export default FirstSectionBadmintonMobile;