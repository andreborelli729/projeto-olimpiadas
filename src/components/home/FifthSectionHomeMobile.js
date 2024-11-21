import React from 'react';
import '../../olimpiadasAntigas.css';
import corridaEquestre from '../../img/corridaequestre.jpg';
import { Link } from 'react-router-dom';

function  FifthSectionHomeMobile(){
return(
    <>
<section className="titles-section">
<div className="results">
<h4 className="resultsTitle">Olímpiadas Antigas</h4>
<img src={corridaEquestre} alt="imagem representando corrida equestre,esporte praticado na antiguidade" className="sportImg">
</img>
<p className="resultsTitle">História</p>
<p className="sportParagraph2">
Os Jogos Olímpicos da Antiguidade eram um festival religioso e atlético da Grécia Antiga, que se realizava de quatro em quatro anos no santuário de Olímpia, em honra de Zeus. A data tradicional atribuída à primeira edição dos Jogos Olímpicos é 776 a.C..

Os Jogos Olímpicos eram os mais importantes Jogos Pan-Helênicos, tendo sido proibidos pelo imperador cristão Teodósio I em 393, por serem uma manifestação de rituais do paganismo. Uma importante fonte sobre os jogos é Pausânias (século II d.C.), autor do livro Descrição da Grécia, um guia da Grécia baseado nas suas viagens pelo território. Outra importante fonte é um tratado sobre a ginástica de Filóstrato de Lemnos (século II-III d.C.).

</p>
<Link to='/olimpiadas-antigas'>
   <button className="modalidadesBtn">Veja Mais Sobre Olímpiadas Antigas</button>
   </Link>
    </div>
    </section>

    </>
    );
}

export default FifthSectionHomeMobile;