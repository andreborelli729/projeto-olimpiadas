import React ,{useState} from 'react';
import '../../index.css';

import golfe from '../../img/golfe.jpg';



function FirstSectionGolfeMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Golfe</h4>
<img src={golfe} className="sportImg" alt="Imagem Referente ao Golfe">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descriçao: O golfe foi um dos primeiros esportes modernos a estruturar suas regras em 1744 em Edimburgo, na Escócia. No final do século 19, foram estabelecidos os primeiros torneios femininos. Atualmente, existem mais de 60 milhões de golfistas e mais de 30.000 campos de golfe em todo o mundo.
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:  Desde quando faz parte das olímpiadas: Desde 1900(Paris - França), porém estando presente apenas nas edições de 1904(Saint Louis - EUA), 2016(Rio de Janeiro - Brasil), 2020(Tóquio- Japão) e 2024(Paris - França).
    </p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina:  Desde 1900(Paris - França).


</p>
<p className="sportParagraph">TAGS: PARIS 2024 - UMA MODALIDADE - ESPORTE INDIVIDUAL - PARIS 1900 - SAINT LOUIS 1904 - RIO DE JANEIRO 2016 - TOQUIO 2020.



</p>
</div>

</section>



    );
}


export default FirstSectionGolfeMobile;