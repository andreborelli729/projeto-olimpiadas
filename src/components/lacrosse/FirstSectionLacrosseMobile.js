import React ,{useState} from 'react';
import '../../index.css';

import lacrosse from '../../img/lacrosse.jpg';



function FirstSectionLacrosseMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Lacrosse</h4>
<img src={lacrosse} className="sportImg" alt="Imagem Referente ao Lacrosse">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descriçaõ: Lacrosse é um esporte praticado entre equipes, bastante popular na América do Norte, principalmente nos Estados Unidos e Canadá. A principal particularidade deste esporte é o uso de bastões com uma espécie de cesto em uma das extremidades, onde os jogadores devem carregar a bola durante o jogo.
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:  Apenas em 1904(Saint-Louis - EUA) e 1908(Londres - Inglaterra) e poderá voltar em 2028(Los Angeles - EUA).


    </p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina:  À partir de 2028(Los Angeles - EUA).


</p>
<p className="sportParagraph">TAGS: OS ANGELES 2028 - UMA MODALIDADE - ESPORTE COLETIVO - SAINT LOUIS 1904 - LONDRES 1908.



</p>
</div>

</section>



    );
}


export default FirstSectionLacrosseMobile;