import React ,{useState} from 'react';
import '../../index.css';

import roma from '../../lugaresOlimpiadas/roma.jpg';



function FirstSection1960RomaMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1960 (Roma - Itália)</h4>
<img src={roma} className="sportImg" alt="Imagem Referente a cidade de Roma na Itália">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1960 (em italiano: Giochi della XVII Olimpiade), conhecidos oficialmente como os Jogos da XVII Olimpíada foram os Jogos Olímpicos realizados em Roma, a Cidade Eterna, capital da Itália, cinquenta e dois anos após a cidade ser obrigada a desistir da organização dos Jogos por causa de uma erupção do vulcão Vesúvio, que consumiu a maior parte dos recursos do Estado no atendimento às vítimas da catástrofe. Tendo finalmente sua oportunidade, os romanos aproveitaram para juntar a tradição anciã dos gregos com sua própria história. As competições de levantamento de peso foram realizadas na Basílica de Maxêncio, a ginástica nas Termas de Caracala e o Arco de Constantino, o famoso monumento em homenagem ao primeiro imperador romano cristão, marcou a chegada da maratona.

</p>

<p className="sportParagraph">Abertos em 25 de agosto e se estendendo até 11 de setembro, os Jogos de Roma tiveram a participação de 5 348 atletas, com o número expressivo de 611 mulheres entre eles, representando 83 países dos cinco continentes e foram, pioneiramente, transmitidos ao vivo por mais de cem canais de televisão de 18 países da Europa e mostrados em vídeo tape horas depois nos Estados Unidos, Canadá e Japão.




</p>




</div>

</section>



    );
}


export default FirstSection1960RomaMobile ;