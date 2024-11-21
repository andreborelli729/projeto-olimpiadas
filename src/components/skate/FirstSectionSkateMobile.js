import React ,{useState} from 'react';
import '../../index.css';

import skate from '../../img/skate.avif';



function FirstSectionSkateMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Skate</h4>
<img src={skate} className="sportImg" alt="Imagem Referente ao Skate">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Descrição: O skate é um esporte jovem e espetacular que se desenvolveu nos EUA na década de 1950 conforme a cultura do surfe se popularizava. Fazia parte do underground, cultura alternativa da década de 1980, e anda de mãos dadas com valores de liberdade, rebelião e emoção. O esporte continuou a se desenvolver e tornou-se mais acessível no início do século 21, revelando-se um grande sucesso entre os jovens.

</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 2020(Tóquio - Japão).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 2020(Tóquio - Japão).</p>
<p className="sportParagraph">ARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL - MEDALHA NESSA EDIÇÃO - MEDALHA EM OUTRA EDIÇÃO - TÓQUIO 2020.

</p>
</div>

</section>



    );
}


export default FirstSectionSkateMobile;