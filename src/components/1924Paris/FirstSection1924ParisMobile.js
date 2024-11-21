import React ,{useState} from 'react';
import '../../index.css';

import paris from '../../lugaresOlimpiadas/paris.jpg';



function FirstSection1924ParisMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1924 (Paris - França)</h4>
<img src={paris} className="sportImg" alt="Imagem Referente a cidade de Paris na França">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1924 (em francês: Jeux olympiques d'été de 1924), oficialmente Jogos da VIII Olimpíada, foram os Jogos Olímpicos realizados em Paris, França, entre 4 de maio e 27 de julho, com a participação de 3 089 atletas, entre eles 135 mulheres, representando 44 países,um recorde até então, para felicidade e glória de Pierre de Coubertin, que via os Jogos voltarem à sua terra natal, após vinte anos, bastante revigorados, com a presença de mil jornalistas e a primeira transmissão radiofônica das provas. Estes foram os últimos Jogos organizados sob a presidência do Barão de Coubertin.


</p>




</div>

</section>



    );
}


export default FirstSection1924ParisMobile;