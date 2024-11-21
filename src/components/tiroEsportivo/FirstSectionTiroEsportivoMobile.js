import React ,{useState} from 'react';
import '../../index.css';

import tiroEsportivo from '../../img/tiroesportivo.jpg';
import { Link } from 'react-router-dom';



function FirstSectionTiroEsportivoMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Tiro Esportivo</h4>
<img src={tiroEsportivo} className="sportImg" alt="Imagem Referente ao Tiro Esportivo">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O tiro esportivo é um esporte Olímpico desde a primeira edição dos Jogos modernos e é praticado na Europa há centenas de anos. Alguns clubes alemães possuem mais de quinhentos anos. Hoje, o tiro esportivo é um esporte popular em todo o mundo, com atletas de mais de 100 países participando de suas categorias a cada edição dos Jogos Olímpicos.

</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1896(Atenas - Grécia), ficando de fora apenas dos jogos de 1904(Saint Louis - EUA) e 1928(Amsterdã - Países Baixos).


</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1968(Cidade do México - México).
</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE -ESPORTE INDIVIDUAL - MEDALHAS EM OUTRA EDIÇÕES - OURO EM OUTRAS EDIÇÕES  - ATENAS 1896 - CIDADE DO MÉXICO 1968 - ANTUÉRPIA 1920 - RIO DE JANEIRO 2016.

</p>
<Link to='/modalidades'>
   <button className="edicoesBtn">Todas as Modalidades</button>
   </Link>
</div>

</section>



    );
}


export default FirstSectionTiroEsportivoMobile;