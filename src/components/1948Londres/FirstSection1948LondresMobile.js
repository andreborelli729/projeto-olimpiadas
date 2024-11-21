import React ,{useState} from 'react';
import '../../index.css';

import londres from '../../lugaresOlimpiadas/londres.jpg';



function FirstSection1948LondresMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1948 (Londres - Grã-Bretanha)</h4>
<img src={londres} className="sportImg" alt="Imagem Referente a cidade de Londres na Grã-Bretanha">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1948 (em inglês: 1948 Summer Olympics), conhecidos oficialmente como Jogos da XIV Olimpíada, foram os Jogos Olímpicos realizados pela segunda vez em Londres de 29 de julho a 14 de agosto daquele ano, doze anos depois da última edição devido à Segunda Guerra Mundial. Assim como os Jogos de 1920 tinham acontecido em Antuérpia, como uma homenagem do Comitê Olímpico Internacional ao sofrimento do povo belga durante a Primeira Guerra Mundial, Londres teve a honraria de sediá-los pela segunda vez em virtude do martírio que a cidade havia sofrido durante a guerra, especialmente com os bombardeios perpetrados pela Luftwaffe entre 1940–41 que devastaram a capital inglesa.



</p>
<p className="sportParagraph">Depois de seis anos de um conflito com milhões de vítimas e um custo financeiro impossível de se calcular, tanto a Europa quanto o Reino Unido estavam arrasadas economicamente, o que tornou extremamente árdua a tarefa de organizar os Jogos. De qualquer modo, os organizadores conseguiram fazer um evento digno, restaurando o famoso Estádio de Wembley para servir como palco central dos Jogos Olímpicos, que contou com a participação de 59 nações, com a presença de 4 104 atletas, 390 deles sendo mulheres, em 19 modalidades e foram abertos pelo Rei Jorge VI em pessoa.




</p>




</div>

</section>



    );
}


export default FirstSection1948LondresMobile;