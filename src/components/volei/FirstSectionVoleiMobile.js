import React ,{useState} from 'react';
import '../../index.css';

import volei from '../../img/volei.avif';



function FirstSectionVoleiMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Volei</h4>
<img src={volei} className="sportImg" alt="Imagem Referente ao Volei">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: William G. Morgan, diretor de educação física da ACM (Associação Cristã de Moços) e aluno da Faculdade de Springfield, é creditado como criador do jogo de vôlei em 1895 em Holyoke, Massachusetts.

O mintonette (como o vôlei foi chamado na época) foi projetado para ser um passatempo interno que pudesse ser apreciado por membros mais velhos da ACM e tirou algumas de suas características de outros esportes, como tênis e handebol.

O vôlei tornou-se popular rapidamente e logo se desenvolveu em outros países no início do século 20, primeiro no Canadá e depois em Cuba e no Japão. Os primeiros conjuntos de regras para o esporte foram desenvolvidos no início de 1900, e a primeira federação internacional (Federação Internacional de Vôlei, FIVB) surgiu em 1947. O primeiro campeonato mundial masculino aconteceu no ano seguinte, com a competição feminina estreando em 1952.
 

</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1964(Tóquio - Japão).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1964(Tóquio - Japão).</p>
<p className="sportParagraph">TAGS: PARIS 2024 - UMA MODALIDADE - ESPORTE EM GRUPO - MEDALHA NESSA EDIÇÃO - OURO EM OUTRA EDIÇÃO - MEDALHA EM OUTRA EDIÇAÕ - TÓQUIO 1964 - LOS ANGELES 1984 - BARCELONA 1992 - ATLANTA 1996 - SYDNEY 2000 - ATENAS 2004 - PEQUIM 2008 - LONDRES 2012 - RIO DE JANEIRO 2016 - TÓQUIO 2020.

</p>
</div>

</section>



    );
}


export default FirstSectionVoleiMobile;