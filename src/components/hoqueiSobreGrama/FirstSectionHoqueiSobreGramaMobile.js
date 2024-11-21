import React ,{useState} from 'react';
import '../../index.css';

import hoqueiSobreGrama from '../../img/hoqueisobregrama.jpg';



function FirstSectionHoqueiSobreGramaMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Hóquei Sobre Grama</h4>
<img src={hoqueiSobreGrama} className="sportImg" alt="Imagem Referente ao Hóquei Sobre Grama">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O hóquei sobre grama leva o nome da palavra francesa “hocquet” – que significa cajado de pastor, em referência à curva do taco – e tem raízes que remontam à Antiguidade. Existem registros que mostram uma forma primitiva do esporte praticado há 4.000 anos no Egito, com variações no que hoje é a Etiópia (1.000 a.C.) e República Islâmica do Irã (2.000 a.C.).
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:   Desde 1908(Londres - Inglaterra), ficando fora até aparecer novamente em 1928(Amsterdã - Países Baixos) e aparecendo em todas as edições seguintes.


    </p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina:  Desde 1980 (Moscou - URSS).


</p>
<p className="sportParagraph">TAGS: PARIS 2024 - UMA MODALIDADE - ESPORTE DE EQUIPE - LONDRES 1908 - MOSCOU 1980 - AMSTERDAM 1928.



</p>
</div>

</section>



    );
}


export default FirstSectionHoqueiSobreGramaMobile;