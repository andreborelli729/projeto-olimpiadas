import React ,{useState} from 'react';
import '../../index.css';

import melbourne from '../../lugaresOlimpiadas/melbourne.jpg';



function FirstSection1956MelbourneMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1956 (Melbourne - Austrália)</h4>
<img src={melbourne} className="sportImg" alt="Imagem Referente a cidade de Melbourne na Austrália">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1956 (em inglês: 1956 Summer Olympics), conhecidos oficialmente como os Jogos da XVI Olimpíada foram os primeiros Jogos Olímpicos a finalmente atravessarem a linha do Equador e instalarem-se no Hemisfério Sul, mais precisamente no Melbourne Cricket Ground, na cidade de Melbourne, capital do estado de Vitória, Austrália, que foi eleita cidade-sede por apenas um voto de diferença, entre os dias 22 de novembro a 8 de dezembro, com a participação de 72 nações, representadas por 3 314 atletas, sendo 376 mulheres.



</p>






</div>

</section>



    );
}


export default FirstSection1956MelbourneMobile ;