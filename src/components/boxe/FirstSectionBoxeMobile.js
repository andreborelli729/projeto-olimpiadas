import React ,{useState} from 'react';
import '../../index.css';

import boxe from '../../img/boxe.jpeg';



function FirstSectionUpdated (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Boxe</h4>
<img src={boxe} className="sportImg" alt="Imagem Referente ao Boxe">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: A origem exata do boxe é desconhecida, embora algumas das primeiras evidências venham de artefatos sumérios encontrados no atual Iraque, datando do terceiro milênio antes de Cristo. O boxe foi introduzido nos Jogos Olímpicos antigos em 688 a.C., em que os pugilistas usavam tiras de couro macio para amarrarem e protegerem as mãos e antebraços. </p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1904(St Louis - EUA).

</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 2012(Londres - Inglaterra).</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL - MEDALHA NESSA EDIÇÃO - MEDALHAS EM OUTRAS EDIÇÕES - OURO EM OUTRA EDIÇÃO - ST LOUIS 1904 - LONDRES 2012 - CIDADE DO MÉXICO 1968 - RIO DE JANEIRO 2016 - TÓQUIO 2020 .

</p>
</div>

</section>



    );
}


export default FirstSectionUpdated;