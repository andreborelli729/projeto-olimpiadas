import React ,{useState} from 'react';
import '../../index.css';

import escalada from '../../img/escalada.avif';



function FirstSectionBadmintonMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Escalada</h4>
<img src={escalada} className="sportImg" alt="Imagem Referente a Escalada">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: A escalada esportiva é um esporte moderno que se tornou bastante popular nos últimos 20 anos. É um esporte jovem e misto – com 39% dos atletas com menos de 18 anos – praticado tanto ao ar livre como em um formato mais urbano em local fechado. Existem mais de 25 milhões de praticantes em 150 países em todo o mundo.

Em 1985, um grupo de escaladores se reuniu em Bardonecchia, perto de Turim, na Itália, para um evento chamado “SportRoccia”, que se tornou na primeira competição organizada de Lead (guiada), em que os atletas escalam em um determinado limite de tempo. Um ano depois, a primeira competição em uma parede de escalada artificial foi realizada em Vaulx-em-Velin, perto de Lyon, na França.     
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 2020(Tóquio - Japão).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 2020(Tóquio - Japão).

</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL - TOQUIO 2020.



</p>
</div>

</section>



    );
}


export default FirstSectionBadmintonMobile;