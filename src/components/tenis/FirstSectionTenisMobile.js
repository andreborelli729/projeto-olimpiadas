import React ,{useState} from 'react';
import '../../index.css';

import tenis from '../../img/tenis.avif';



function FirstSectionTenisMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Tênis</h4>
<img src={tenis} className="sportImg" alt="Imagem Referente ao Tenis">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O precursor do tênis foi o “jeu de paume”, ou “jogo da mão”, que se originou na França no século 11. Era jogado no pátio de um mosteiro e envolvia o uso da palma da mão para acertar uma bola contra as paredes e telhados inclinados. O tênis como conhecemos hoje foi desenvolvido na Inglaterra do século 19. Como a popularidade do esporte ultrapassou a do croquet, o All England Croquet Club permitiu que seus gramados fossem usados para o tênis. Várias federações nacionais foram criadas em todo o mundo durante o século 19, culminando no nascimento da Federação Internacional de Tênis de Grama – agora conhecida como Federação Internacional de Tênis – em 1913.

</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1896(Atenas - Grécia).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1900(Paris - França).
</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL E POR EQUIPE - MEDALHAS EM OUTRAS EDIÇÕES - ATENAS 1896 - PARIS 1900 - TÓQUIO 2020.

</p>
</div>

</section>



    );
}


export default FirstSectionTenisMobile;