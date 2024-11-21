import React ,{useState} from 'react';
import '../../index.css';

import olimpiadasAntigas from '../../img/olimpiadasantigas.webp';



function FirstSectionOlimpiadasAntigasMobile(){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Olímpiadas Antigas</h4>
<img src={olimpiadasAntigas} className="sportImg" alt="Imagem Referente as Olímpiadas Antigas">


</img>
</div>
<div className="sportInfo">
<p className="sportTitle">História</p>
<p className="sportParagraph">
Os Jogos Olímpicos da Antiguidade eram um festival religioso e atlético da Grécia Antiga, que se realizava de quatro em quatro anos no santuário de Olímpia, em honra de Zeus. A data tradicional atribuída à primeira edição dos Jogos Olímpicos é 776 a.C..

Os Jogos Olímpicos eram os mais importantes Jogos Pan-Helênicos, tendo sido proibidos pelo imperador cristão Teodósio I em 393, por serem uma manifestação de rituais do paganismo. Uma importante fonte sobre os jogos é Pausânias (século II d.C.), autor do livro Descrição da Grécia, um guia da Grécia baseado nas suas viagens pelo território. Outra importante fonte é um tratado sobre a ginástica de Filóstrato de Lemnos (século II-III d.C.).

</p>
</div>

</section>



    );
}


export default FirstSectionOlimpiadasAntigasMobile;