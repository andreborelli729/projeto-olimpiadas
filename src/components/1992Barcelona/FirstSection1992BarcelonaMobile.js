import React ,{useState} from 'react';
import '../../index.css';

import barcelona from '../../lugaresOlimpiadas/barcelona.jpg';



function FirstSection1992BarcelonaMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1992 (Barcelona - Espanha)</h4>
<img src={barcelona} className="sportImg" alt="Imagem Referente a cidade de Barcelona na Espanha">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1992 (em espanhol: Juegos Olímpicos de Verano de 1992; em catalão: Jocs Olímpics d'estiu de 1992), oficialmente conhecido como os Jogos da XXV Olimpíada, foram realizados em Barcelona, na Catalunha, Espanha, cidade do então presidente do Comitê Olímpico Internacional, Juan Antonio Samaranch, entre 25 de julho e 9 de agosto daquele ano. Foi a primeira edição desde Munique 1972 em que todos os Comitês Olímpicos Nacionais estiveram presentes, totalizando 169 nações que enviaram 9 356 atletas.

</p>


<p className="sportParagraph">Como consequência da mudança geopolítica mundial naquele momento, esta foi a primeira edição dos Jogos Olímpicos de Verão desde 1972 a não sofrer qualquer tipo ou ameaça de boicote. Em relação ao panorama político, um mês e meio antes dos Jogos Olímpicos de Inverno daquele ano, a União Soviética entrou em colapso e seis estados optaram por formar uma Equipe Unificada, composta pela Rússia, Ucrânia, Bielorrússia, Cazaquistão, Armênia e Uzbequistão. O mesmo ocorreu nos Jogos de Verão, com a adição de mais quatro países: Azerbaijão, Geórgia, Quirguistão e Turcomenistão. Os três países bálticos Estônia, Letônia e Lituânia optaram por enviar suas delegações em separado.

</p>

</div>

</section>



    );
}


export default FirstSection1992BarcelonaMobile;