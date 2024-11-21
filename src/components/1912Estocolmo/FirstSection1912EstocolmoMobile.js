import React ,{useState} from 'react';
import '../../index.css';

import estocolmo from '../../lugaresOlimpiadas/estocolmo.jpg';



function FirstSection1912EstocolmoMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1912 (Estocolmo - Suécia)</h4>
<img src={estocolmo} className="sportImg" alt="Imagem Referente a cidade de Estocolmo na Suécia">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1912 (em sueco: Olympiska sommarspelen 1912), oficialmente conhecidos como Jogos da V Olimpíada, realizaram-se em Estocolmo, capital da Suécia, entre 5 de maio e 27 de julho com a participação de 2 407 atletas, sendo apenas 48 mulheres, de 28 nações. Abertos oficialmente pelo Rei Gustavo V, os já bastante concorridos, prestigiados e famosos Jogos foram um modelo da eficiência sueca e o primeiro a que compareceram atletas de todos os cinco continentes.


</p>
<p className="sportParagraph">Dotados de uma estrutura nunca antes vista, estes foram os primeiros Jogos que utilizaram um, na época, moderno sistema de som com alto-falantes espalhados pelo complexo olímpico e pela cidade, para informar sobre os resultados de cada esporte disputado; além disso, Estocolmo usou pela primeira vez um sistema de fotografias e cronometragem semieletrônica para marcação dos tempos na natação e no atletismo. Foi ainda a ultima edição em que as medalhas douradas foram feitas inteiramente de ouro.
</p>



</div>

</section>



    );
}


export default FirstSection1912EstocolmoMobile;