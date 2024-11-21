import React ,{useState} from 'react';
import '../../index.css';

import toquio from '../../lugaresOlimpiadas/toquio.jpg';



function FirstSection2020ToquioMobile(){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 2020(Tóquio - Japão)</h4>
<img src={toquio} className="sportImg" alt="Imagem Referente a cidade de Tóquio no Japão">


</img>  
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 2020 (japonês: 第三十二回オリンピック競技大会; Hepburn: Dai Sanjūni-kai Orinpikku Kyōgi Taikai?), conhecidos oficialmente como os Jogos da XXXII Olimpíada, mais comumente Tóquio 2020, foi um evento multiesportivo realizado durante o verão de 2021 devido à pandemia de COVID-19, na região metropolitana de Tóquio, Japão. A escolha da sede foi feita durante a 125ª Sessão do Comitê Olímpico Internacional, que aconteceu em Buenos Aires, Argentina, em 7 de setembro de 2013.


</p>
<p className="sportParagraph">A região metropolitana de Tóquio sediou os Jogos Olímpicos de Verão de 1964, sendo assim, a primeira cidade a sediar os Jogos Olímpicos duas vezes na Ásia. Além disso, esta foi a quarta edição dos Jogos a serem realizados no Japão. Juntamente com os Jogos de Verão de 1964, o Japão já sediou duas vezes os Jogos Olímpicos de Inverno. A primeira vez foi Sapporo 1972 e a segunda vez foi Nagano 1998.


</p>


</div>

</section>



    );
}


export default FirstSection2020ToquioMobile;