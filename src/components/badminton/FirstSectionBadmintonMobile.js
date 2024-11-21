import React ,{useState} from 'react';
import '../../index.css';

import badminton from '../../img/badminton.jpg';



function FirstSectionBadmintonMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Badminton</h4>
<img src={badminton} className="sportImg" alt="Imagem Referente ao Badminton">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O badminton é um esporte de raquete cujas origens exatas ainda são um mistério sedutor. Evoluiu de um jogo antigo de battledores (raquetes) e peteca, um passatempo popular na Europa, principalmente entre as classes abastadas. No entanto, não se sabe exatamente quando battledore e peteca se transformaram no esporte competitivo do badminton. Uma teoria plausível é que o badminton foi jogado pela primeira vez na casa senhorial do Duque de Beaufort em Gloucestershire em algum momento no início da década de 1860 e, portanto, recebeu o nome de sua propriedade: Casa Badminton. O jogo viajou para a Índia, onde se tornou um esporte popular em quartéis militares temporários e, gradualmente, se espalhou pelas colônias britânicas e depois para a Europa e o Leste Asiático. Hoje, o badminton é um esporte global com apelo generalizado para pessoas de todas as idades e habilidades.</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1992(Barcelona - Espanha).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1992(Barcelona - Espanha).
</p>
<p className="sportParagraph">TAGS:PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL OU DE EQUIPE - BARCELONA 1992.

</p>
</div>

</section>



    );
}


export default FirstSectionBadmintonMobile;