import React ,{useState} from 'react';
import '../../index.css';

import losAngeles from '../../lugaresOlimpiadas/losangeles.avif';



function FirstSection1984LosAngelesMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1984 (Los Angeles - EUA)</h4>
<img src={losAngeles} className="sportImg" alt="Imagem Referente a cidade de Los Angeles nos Estados Unidos">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1984 (em inglês: 1984 Summer Olympics), conhecidos oficialmente como os Jogos da XXIII Olimpíada, foram os Jogos Olímpicos realizados na cidade de Los Angeles, no estado da Califórnia, Estados Unidos, entre 28 de julho e 12 de agosto de 1984. Esta edição, assim como a anterior, também sofreu com um boicote, mas desta vez dos países do antigo bloco socialista, em retaliação ao boicote liderado pelos norte-americanos aos Jogos de Moscou, realizados quatro anos antes. Dos países do antigo bloco socialista somente Romênia, Benim e a República Popular do Congo e as então neutras República Popular da China e Iugoslávia, que havia sediado meses antes os Jogos Olímpicos de Inverno de 1984, participaram dos Jogos.





</p>


<p className="sportParagraph">Apesar do boicote, que mais uma vez prejudicou o nível técnico de várias modalidades dominadas pelos europeus do leste e pelos cubanos, Los Angeles foi candidata única para sede destes Jogos, devido ao receio geral provocado pelos grandes prejuízos econômicos sofridos por Montreal em seus Jogos de 1976 - recebeu a presença de um número recorde de atletas, 6 829 (1 566 mulheres, outro recorde) de 140 países e teve cobertura de mais de 9 mil jornalistas de todo mundo.



</p>




</div>

</section>



    );
}


export default FirstSection1984LosAngelesMobile;