import React ,{useState} from 'react';
import '../../index.css';

import moscou from '../../lugaresOlimpiadas/moscou.jpg';



function FirstSection1980UrssMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1980 (Moscou - Antiga URSS)</h4>
<img src={moscou} className="sportImg" alt="Imagem Referente a cidade de Montral no Moscou">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1980 (em russo: Летние Олимпийские игры 1980, romanizado: Letniye Olimpiyskiye igry 1980), conhecidos oficialmente como os Jogos da XXII Olimpíada foram os Jogos Olímpicos realizados em Moscou, União Soviética entre 19 de julho e 3 de agosto de 1980, e que contaram com a participação de 5.179 atletas de 80 nações. Esta foi a edição com o menor número de participantes desde Melbourne, em 1956, devido ao maior boicote da história olímpica, quando a influência da política no esporte chegou a seu ponto mais alto e decisivo.





</p>


<p className="sportParagraph">No final de 1979, como protesto contra a invasão soviética do Afeganistão, o presidente norte-americano Jimmy Carter anunciou o boicote de sua nação aos Jogos Olímpicos de Moscou no ano seguinte, convocando seus aliados pelo mundo a darem o mesmo exemplo; 69 países, um número três vezes maior do que as nações africanas que se recusaram a participar dos Jogos anteriores em Montreal por questões raciais, seguiram o caminho dos Estados Unidos, levando estes Jogos a um esvaziamento que afetou bastante o nível técnico de diversas modalidades. Mesmo assim, algumas marcas e desempenhos excepcionais foram realizados e até atletas de países que apoiaram a ação americana acabaram participando individualmente sob a bandeira olímpica.


</p>




</div>

</section>



    );
}


export default FirstSection1980UrssMobile;