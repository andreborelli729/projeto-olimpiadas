import React ,{useState} from 'react';
import '../../index.css';

import londres from '../../lugaresOlimpiadas/londres.jpg';



function FirstSection1908LondresMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1908 (Londres - Grã-Bretanha)</h4>
<img src={londres} className="sportImg" alt="Imagem Referente a cidade de Londres na Grã-Bretanha">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1908 (em inglês: 1908 Summer Olympics), oficialmente denominados Jogos da IV Olimpíada foram realizados em Londres, no Reino Unido, entre 27 de abril e 31 de outubro de 1908 com a participação de 2 008 atletas, entre eles 37 mulheres, de 22 nações.

</p>
<p className="sportParagraph">Após a realização dos Jogos Intercalares de 1906 na Grécia, considerados não-oficiais e que não tiveram seus resultados computados pelo Comitê Olímpico Internacional, originalmente esta edição deveria ser realizada em Roma, mas uma erupção do vulcão Vesúvio obrigou as autoridades italianas a usar todos seus recursos econômicos para combater os efeitos da tragédia e a desistir de sediar os Jogos, que acabaram por serem transferidos para a capital britânica.
</p>



</div>

</section>



    );
}


export default FirstSection1908LondresMobile;