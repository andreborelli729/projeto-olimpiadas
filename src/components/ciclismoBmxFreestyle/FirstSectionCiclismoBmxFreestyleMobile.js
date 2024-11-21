import React ,{useState} from 'react';
import '../../index.css';

import ciclismoBmxFreestyle from '../../img/ciclismobmxfreestyle.avif';



function FirstSectionBadmintonMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Ciclismo BMX Freestyle</h4>
<img src={ciclismoBmxFreestyle} className="sportImg" alt="Imagem Referente ao Ciclismo BMX Freestyle">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O ciclismo BMX freestyle nasce do imaginário de crianças e adolescentes da Califórnia na década de 1970, que se inspiraram nos movimentos dos pilotos de BMX Racing da região. O esporte tornou-se cada vez mais popular nas décadas seguintes e foi integrado aos programas de competições de esportes radicais, incluindo o X-Games nos anos 2000 e o FISE (Festival Internacional de Esportes Radicais). A primeira Copa do Mundo de BMX Freestyle foi organizada pelo órgão regulador do ciclismo, a União Ciclística Internacional (UCI), em 2016, como parte da FISE daquele ano.
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 2020(Tóquio - Japão).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 2020(Tóquio - Japão).

</p>
<p className="sportParagraph">TAGS: PARIS 2024 - UMA MODALIDADE - TÓQUIO 2020.  


</p>
</div>

</section>



    );
}


export default FirstSectionBadmintonMobile;