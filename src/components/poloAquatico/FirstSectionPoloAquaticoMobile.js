import React ,{useState} from 'react';
import '../../index.css';
import poloAquatico from '../../img/poloaquatico.jpg';



function FirstSectionPoloAquaticoMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Polo Aquático</h4>
<img src={poloAquatico} className="sportImg" alt="Imagem Referente ao Polo Aquatico">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O polo aquático era inicialmente um esporte perigoso que se desenvolveu nos rios e lagos da Inglaterra em meados do século 19 como uma versão aquática do rugby. Em 1870, a Associação de Natação de Londres desenvolveu regras para o esporte ser praticado em piscinas cobertas. As regras posteriores desenvolvidas na Escócia enfatizavam o estilo do futebol no esporte em oposição à “variante do rugby”. O polo aquático foi introduzido nos EUA em 1888, onde o estilo de jogo do rugby – semelhante ao do futebol americano – era praticado na água. No entanto, o resto do mundo adotou as regras escocesas do esporte, que formaram a base do polo aquático como conhecemos hoje. A primeira partida internacional ocorreu em 1890 entre Inglaterra e Escócia, com vitória dos escoceses por 4 a 0.
          
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:   Desde 1900(Paris - França).

    </p>
<p className="sportParagraph">Ano de inclusão da modalidade masculina:  Desde 2000(Sydney - Austrália).



</p>
<p className="sportParagraph">TAGS: PARIS 2024 - UMA MODALIDADE - ESPORTE EM EQUIPE - PARIS 1900 - SYDNEY 2000.



</p>
</div>

</section>



    );
}


export default  FirstSectionPoloAquaticoMobile ;