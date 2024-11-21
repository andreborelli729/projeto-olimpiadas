import React ,{useState} from 'react';
import '../../index.css';

import taekwondo from '../../img/taekwondo.avif';



function FirstSectionTaekwondoMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Taekwondo</h4>
<img src={taekwondo} className="sportImg" alt="Imagem Referente ao Taekwondo">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">O taekwondo, que se traduz como a “arte de chutar e bater”, é uma arte marcial com raízes que remontam ao período dos Três Reinos da Coreia (57 a.C. a 668 d.C.), quando os guerreiros da Dinastia Silla começaram a desenvolver uma arte marcial conhecida como taekkyon (“pé-mão”). No início do século 20, o taekwondo se tornou a arte marcial dominante praticada na Coreia. O esporte se internacionalizou e, em 1973, foi fundada a Federação Mundial de Taekwondo (agora conhecida como World Taekwondo). Nesse mesmo ano, o primeiro campeonato mundial de taekwondo foi realizado em Seul.


</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 2000(Sydney - Austrália).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 2000(Sydney - Austrália).</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL - MEDALHA NESSA EDIÇÃO - MEDALHA EM OUTRA EDIÇÃO - PEQUIM 2008 - LONDRES 2012.
</p>
</div>

</section>



    );
}


export default FirstSectionTaekwondoMobile ;