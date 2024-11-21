import React ,{useState} from 'react';
import '../../index.css';

import surfe from '../../img/surfe.jpeg';



function FirstSectionSurfMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Surfe</h4>
<img src={surfe} className="sportImg" alt="Imagem Referente ao Surfe">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Os surfistas realizam manobras e truques em uma onda e são avaliados por cinco juízes com base na variedade, tipo e dificuldade da apresentação. Os surfistas também são julgados pela velocidade, força e fluxo (a forma como ele conecta perfeitamente seus movimentos de uma manobra a outra). As shortboards (pranchas curtas) são as pranchas de surfe escolhidas para os Jogos Olímpicos. Menores do que as longboards, elas são mais rápidas e manipuláveis, o que as tornam ideais para realizar manobras espetaculares.

</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 2020(Tóquio - Japão).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 2020(Tóquio - Japão).</p>
<p className="sportParagraph">PARIS 2024 - UMA MODALIDADE - ESPORTE INDIVIDUAL - MEDALHA NESSA EDIÇÃO - OURO EM OUTRA EDIÇÃO - TÓQUIO 2020.
</p>
</div>

</section>



    );
}


export default FirstSectionSurfMobile;