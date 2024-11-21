import React ,{useState} from 'react';
import '../../index.css';

import toquio from '../../lugaresOlimpiadas/toquio.jpg';



function FirstSection1964ToquioMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1964 (Tóquio - Japão)</h4>
<img src={toquio} className="sportImg" alt="Imagem Referente a cidade de Tóquio no Japão">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1964 (em japonês: 第十八回オリンピック競技大会 Dai Jūhachi-kai Orinpikku Kyōgi Taikai), conhecidos oficialmente como os Jogos da XVIII Olimpíada foram os Jogos Olímpicos realizados em Tóquio, no Japão, entre 10 e 24 de outubro de 1964, os primeiros a ser realizados na Ásia. A cidade já tinha conquistado o direito de realizá-los em 1940, mas a invasão da China pelo Japão os transferiu para Helsinque, na Finlândia. Com a eclosão da II Guerra Mundial em 1939, os Jogos de 1940 foram cancelados.


</p>

<p className="sportParagraph">Abertos pelo Imperador Hirohito em pessoa, com a presença de 5.151 atletas de 93 nações, o momento mais simbólico do evento foi a entrada no estádio, carregando a tocha olímpica, do jovem Yoshinori Sakai, de 19 anos, nascido em Hiroshima no dia 6 de agosto de 1945, o mesmo dia em que a bomba atômica foi detonada sobre a cidade. Sua escolha foi uma homenagem às vítimas do holocausto nuclear e um apelo à paz mundial.




</p>




</div>

</section>



    );
}


export default FirstSection1964ToquioMobile;