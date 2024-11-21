import React ,{useState} from 'react';
import '../../index.css';

import levantamentoDePeso from '../../img/levantamentodepeso.jpg';



function FirstSectionLevantamentoDePesoMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Levantamento De Peso</h4>
<img src={levantamentoDePeso} className="sportImg" alt="Imagem Referente ao Levantamento De Peso">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O levantamento de peso – também conhecido como levantamento de peso Olímpico – existe há milhares de anos, mas o objetivo permanece o mesmo: o atleta que levantar mais peso vence. Evidências do esporte datam do antigo Egito e da Grécia, onde as pessoas levantavam pedras pesadas em competições de força. O levantamento de peso ressurgiu no século 19, quando o primeiro campeonato mundial foi realizado em 1891.
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:    Desde 1896(Atenas - Grécia), saindo e sendo reintroduzido em 1920(Antuérpia - Bélgica) e estando presente em todos as edições seguintes.

    </p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina:  Desde 2000(Sydney - Austrália).


</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL - ATENAS 1896 - SYDNEY 2000 - ARTUÉRPIA 1920.



</p>
</div>

</section>



    );
}


export default FirstSectionLevantamentoDePesoMobile;