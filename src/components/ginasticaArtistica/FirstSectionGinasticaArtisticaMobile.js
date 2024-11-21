import React ,{useState} from 'react';
import '../../index.css';

import ginasticaArtistica from '../../img/ginasticaartistica.avif';



function FirstSectionUpdated (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Ginástica Artística</h4>
<img src={ginasticaArtistica} className="sportImg" alt="Imagem Referente a Ginástica Artística">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Fundada em 1881, a Federação Internacional de Ginástica é a mais antiga federação esportiva internacional do mundo. A origem da ginástica remonta à antiguidade, quando era recomendada pelos filósofos como forma de aliar o exercício físico à atividade intelectual. O esporte cresce em popularidade durante o século 19 com a formação de um número crescente de eventos, incluindo a competição de ginástica no ressurgimento dos Jogos Olímpicos de Atenas, em 1896.
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1896(Atenas - Grécia).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1928(Amsterdã - Países Baixos). </p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL E POR EQUIPE - OURO NESSA EDIÇÃO - MEDALHA NESSA EDIÇÃO - OURO EM OUTRAS EDIÇÕES - MEDALHAS EM OUTRAS EDIÇÕES - ATENAS 1986 - AMSTERDAM 1928 - LONDRES 2012 - RIO DE JANEIRO 2016 - TÓQUIO 2020.

</p>
</div>

</section>



    );
}


export default FirstSectionUpdated;