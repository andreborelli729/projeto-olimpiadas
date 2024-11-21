import React ,{useState} from 'react';
import '../../index.css';

import futebol from '../../img/futebol.jpg';



function FirstSectionUpdated (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Futebol</h4>
<img src={futebol} className="sportImg" alt="Imagem Referente ao Futebol">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Embora o futebol tenha suas raízes na China antiga, a versão moderna do jogo nasceu nas ruas da Inglaterra medieval antes de se tornar no esporte mais popular do mundo.

Os (vários) jogos antigos de futebol na Inglaterra medieval envolviam uma grande massa de pessoas que tentavam arrastar uma bexiga de porco – por qualquer meio possível – a marcadores em extremidades opostas na cidade. Tais eventos eram bastante conhecidos tanto por serem violentos quanto populares. No século 16, as escolas inglesas estabeleceram as regras do futebol moderno, transformando assim o que eram tumultos de multidão em um esporte padronizado.</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1900(Paris - França) excluindo-se a edição de 1932(Los Angeles - EUA).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1996(Atlanta - EUA). </p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE EM GRUPO - MEDALHA NESSA EDIÇÃO - OURO EM OUTRAS EDIÇÕES - MEDALHAS EM OUTRAS EDIÇÕES - PARIS 1900 - ATLANTA 1996 - LOS ANGELES 1984 - SEUL 1988 - ATENAS 2004, PEQUIM 2008, LONDRES 2012, RIO DE JANEIRO 2016, TÓQUIO 2020.

</p>
</div>

</section>



    );
}


export default FirstSectionUpdated;