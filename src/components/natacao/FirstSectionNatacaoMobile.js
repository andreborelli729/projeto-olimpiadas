import React ,{useState} from 'react';
import '../../index.css';

import natacao from '../../img/natacao.jpg';



function FirstSectionNatacaoMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Natação</h4>
<img src={natacao} className="sportImg" alt="Imagem Referente a Natação">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O ato de nadar remonta aos tempos pré-históricos, mas foi apenas no século 19 que se tornou amplamente praticado como esporte competitivo. A National Swimming Society of Great Britain (Sociedade Nacional de Natação da Grã-Bretanha) foi formada em 1837 e começou a realizar as primeiras competições. Na época, a maioria dos nadadores usava o nado peito, ou uma forma dele. Mais tarde, uma variedade maior de estilos foi adicionada às provas de natação, atualmente presente nos Jogos Olímpicos.


</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:Desde 1896(Atenas - Grécia).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1912(Estocolmo - Suécia). </p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL E POR EQUIPES - OURO EM OUTRA EDIÇÃO - MEDALHA EM OUTRA EDIÇÃO - ATENAS 1896 - ESTOCOLMO 1912 - 
HELSINQUE 1952 - ROMA 1960 - MOSCOU 1980 - LOS ANGELES 1984 - BARCELONA 1992 - ATLANTA 1996 - SYDNEY 2000 - PEQUIM 2008 - LONDRES 2012 - TÓQUIO 2020.

</p>
</div>

</section>



    );
}


export default FirstSectionNatacaoMobile;