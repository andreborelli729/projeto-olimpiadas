import React ,{useState} from 'react';
import '../../index.css';

import maratonaAquatica from '../../img/maratonaaquatica.jpg';



function FirstSectionMaratonaAquaticaMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Maratona Aquática</h4>
<img src={maratonaAquatica} className="sportImg" alt="Imagem Referente a Maratona Aquática">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Nas três primeiras edições dos Jogos Olímpicos modernos, todas as provas da natação aconteciam em águas naturais antes da inclusão das piscinas nos Jogos em 1908. A maratona aquática reapareceu em 1991, quando a modalidade foi oficialmente introduzida no Campeonato Mundial de natação da World Aquatics (a Federação Internacional de Esportes Aquáticos); na época, eram realizados eventos de 25km que levavam mais de cinco horas para serem concluídos. A prova de 10km foi disputada pela primeira vez no Campeonato Mundial de 2001, em Fukuoka, no Japão.

</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 2008(Pequim - China).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 2008(Pequim - China).

</p>
<p className="sportParagraph">TAGS: PARIS 2024 - UMA MODALIDADE - ESPORTE INDIVIDUAL - OURO EM OUTRA EDIÇAO - MEDALHA EM OUTRA EDIÇÃO - PEQUIM 2008 - RIO DE JANEIRO 2016 - TÓQUIO 2020.


</p>
</div>

</section>



    );
}


export default FirstSectionMaratonaAquaticaMobile;