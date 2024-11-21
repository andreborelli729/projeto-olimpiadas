import React ,{useState} from 'react';
import '../../index.css';

import atenas from '../../lugaresOlimpiadas/atenas.jpg';



function FirstSection1906AtenasEspecialMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição Especial de 1906 (Atenas - Grécia)</h4>
<img src={atenas} className="sportImg" alt="Imagem Referente a cidade de Atenas na Grécia">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Os Jogos Olímpicos Intercalares de 1906 foram um evento multiesportivo internacional celebrado em Atenas, na Grécia. Foi uma edição extraordinária dos Jogos Olímpicos, com pretexto de comemorar o 10º aniversário do recomeço dos jogos em 1896, na cidade de Atenas. Esta edição não é considerada oficial pelo Comité Olímpico Internacional (COI)como os Jogos Olímpicos de Verão de 1906, que seria a quarta, por ser realizada fora do ciclo de quatro anos denominado Olimpíada.
</p>



</div>

</section>



    );
}


export default FirstSection1906AtenasEspecialMobile;