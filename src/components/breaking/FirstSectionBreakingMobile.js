import React ,{useState} from 'react';
import '../../index.css';

import breaking from '../../img/breaking.jpeg';



function FirstSectionBadmintonMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Breaking</h4>
<img src={breaking} className="sportImg" alt="Imagem Referente ao Breaking">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O breaking é um estilo de dança urbana que se originou nos Estados Unidos na década de 1970. Com raízes na cultura hip hop, o breaking tomou forma nas animadas block parties (festas de quarteirão) do bairro do Bronx, em Nova York, e é caracterizado por movimentos acrobáticos, passos estilizados e pelo papel fundamental do DJ e do MC (mestre de cerimônias) durante as batalhas.

As competições internacionais foram realizadas pela primeira vez na década de 1990, popularizando o estilo de dança tanto entre as comunidades do hip hop quanto para o público em geral ao longo do tempo.</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Apenas em 2024 (Paris - França.).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Apenas em 2024 (Paris - França.)

</p>
<p className="sportParagraph">TAGS: PARIS 2024 - UMA MODALIDADE - ESPORTE INDIVIDUAL.

</p>
</div>

</section>



    );
}


export default FirstSectionBadmintonMobile;