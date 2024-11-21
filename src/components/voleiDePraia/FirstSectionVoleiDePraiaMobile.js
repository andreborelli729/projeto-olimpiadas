import React ,{useState} from 'react';
import '../../index.css';

import voleiDePraia from '../../img/voleidepraia.avif';



function FirstSectionVoleiDePraiaMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Volei de Praia</h4>
<img src={voleiDePraia} className="sportImg" alt="Imagem Referente ao Volei de Praia">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Uma variação do vôlei jogado na areia apareceu pela primeira vez nas praias de Santa Monica, Califórnia, em 1920. O primeiro torneio de vôlei de praia aconteceu em 1947 e o primeiro circuito foi lançado na década de 1950, envolvendo centenas de jogadores nas praias californianas. A primeira associação de jogadores profissionais foi estabelecida na década de 1980 e o primeiro torneio internacional sancionado pela Federação Internacional de Vôlei (FIVB) foi realizado em 1987.


 

</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1996(Atlanta - EUA).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1996(Atlanta - EUA).</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE EM GRUPO - OURO NESSA EDIÇÃO - MEDALHAS EM OUTRAS EDIÇÕES - OURO EM OUTRAS EDIÇÕES - ATLANTA 1996 - SYDNEY 2000 - ATENAS 2004 - PEQUIM 2008 - LONDRES 2012 - RIO DE JANEIRO 2016.

</p>
</div>

</section>



    );
}


export default FirstSectionVoleiDePraiaMobile;