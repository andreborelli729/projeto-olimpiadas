import React ,{useState} from 'react';
import '../../index.css';

import handebol from '../../img/handebol.jpg';



function FirstSectionHandebolMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Handebol</h4>
<img src={handebol} className="sportImg" alt="Imagem Referente ao Handebol">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O handebol foi praticado pela primeira vez no final do século 19 na Escandinávia e na Alemanha, onde o handebol de campo também ganhava reconhecimento como esporte. G. Wallström introduziu a modalidade na Suécia em 1910. As duas versões do esporte foram praticadas até 1966, quando o handebol de quadra começou a substituir o handebol de campo.
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:  Desde 1936 (Berlim - Alemanha).

    </p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina:  Desde 1976(Montreau - Canadá).


</p>
<p className="sportParagraph">TAGS: PARIS 2024 -  UMA MODALIDADE - ESPORTE EM EQUIPE - BERLIM 1936 - MOSCOU 1976.



</p>
</div>

</section>



    );
}


export default FirstSectionHandebolMobile;