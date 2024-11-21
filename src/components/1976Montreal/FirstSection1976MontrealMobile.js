import React ,{useState} from 'react';
import '../../index.css';

import montral from '../../lugaresOlimpiadas/montreal.jpg';



function FirstSection1976MontrealMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1976 (Montreal - Canadá)</h4>
<img src={montral} className="sportImg" alt="Imagem Referente a cidade de Montral no Canadá">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1976 (em francês: Les XXIes olympiques d'été), conhecidos oficialmente como os Jogos da XXI Olimpíada, foram os Jogos Olímpicos realizados em Montreal, a maior cidade da província de Quebec, no Canadá, entre 17 de julho e 1 de agosto de 1976. Montreal é a segunda cidade francófona a sediar os Jogos de Verão depois de Paris. Com a participação de 6 804 atletas de 92 nações competindo em 21 esportes, estes foram os primeiros Jogos marcados por um grande boicote. Lideradas pela República do Congo, 26 nações africanas, o Iraque e a Guiana se recusaram a participar deles, em protesto pelo Comitê Olímpico Internacional não suspender a Nova Zelândia, que havia autorizado sua seleção nacional de rugby a excursionar pela África do Sul, que se encontrava suspensa da comunidade internacional por causa da política racista do Apartheid.



</p>


<p className="sportParagraph">A escolha de Montreal como sede dos Jogos, contra a candidatura de cidades importantes como Los Angeles e Moscou, não foi feliz no resultado final, apesar da boa organização e total segurança – reflexos dos ocorridos nos Jogos de Munique em 1972.


</p>
<p className="sportParagraph">
Financeiramente os Jogos foram um fracasso, causando o maior prejuízo econômico da história do evento até Atenas 2004, totalizando mais de 2 bilhões de dólares americanos em dívidas, levando a cidade a demorar mais de 40 anos para conseguir quitar as dívidas relacionadas ao evento.


</p>




</div>

</section>



    );
}


export default FirstSection1976MontrealMobile;