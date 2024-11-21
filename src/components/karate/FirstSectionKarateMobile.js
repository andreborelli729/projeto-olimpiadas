import React ,{useState} from 'react';
import '../../index.css';

import karate from '../../img/karate.avif';



function FirstSectionKarateMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Karate</h4>
<img src={karate} className="sportImg" alt="Imagem Referente ao Karate">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O caratê, ou karate, é uma antiga arte marcial japonesa que desenvolve técnicas de socos, chutes e outros tipos de golpe. A palavra "karate" traduz-se como "mãos vazias", indicando sua natureza de técnica de combate sem o uso de armas. Hoje, vai além da autodefesa, tornando-se um esporte praticado em competições olímpicas, divididas entre as modalidades de kata e kumite.

Além das técnicas físicas, o caratê possui uma dimensão filosófica significativa, refletida nos princípios que os praticantes seguem.
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:  Apenas em 2020(Tóquio - Japão).

    </p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina:  Apenas em 2020(Tóquio - Japão).


</p>
<p className="sportParagraph">TAGS: TOKYIO 2020 - MAIS DE UMA MODALIDADE.



</p>
</div>

</section>



    );
}


export default FirstSectionKarateMobile;