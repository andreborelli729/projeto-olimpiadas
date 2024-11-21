import React ,{useState} from 'react';
import '../../index.css';

import londres from '../../lugaresOlimpiadas/londres.jpg';



function FirstSection2012LondresMobile(){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 2012(Londres - Grã-Bretanha)</h4>
<img src={londres} className="sportImg" alt="Imagem Referente a cidade de Londres na Grã-Bretanha">


</img>  
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 2012 (em inglês: 2012 Summer Olympics), oficialmente conhecidos como os Jogos da XXX Olimpíada, mais comumente Londres 2012 foram os Jogos Olímpicos realizados na cidade de Londres, de 27 de julho a 12 de agosto de 2012. Após estes Jogos realizaram-se, na mesma cidade, os Jogos Paralímpicos de Verão de 2012, entre 29 de agosto e 9 de setembro.


</p>
<p className="sportParagraph">Londres foi a primeira cidade a sediar oficialmente os Jogos Olímpicos da Era Moderna, por três vezes – as anteriores foram em 1908 e 1948.


</p>


</div>

</section>



    );
}


export default FirstSection2012LondresMobile;