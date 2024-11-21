import React ,{useState} from 'react';
import '../../index.css';

import paris from '../../lugaresOlimpiadas/paris.jpg';



function FirstSection2024ParisMobile(){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 2024(Paris - França)</h4>
<img src={paris} className="sportImg" alt="Imagem Referente a cidade de Paris na França">


</img>  
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 2024 (em francês: Les Jeux olympiques d'été de 2024), oficialmente denominados Jogos da XXXIII Olimpíada (em francês: Jeux de la XXXIIIe Olympiade) e comumente conhecidos como Paris 2024, foi um evento multiesportivo internacional realizado de 26 de julho (data da cerimônia de abertura) a 11 de agosto de 2024 na França, com Paris como principal cidade anfitriã e 16 outras cidades espalhadas pela França Metropolitana, além de uma subsede no Taiti — uma ilha dentro do país ultramarino francês e da coletividade ultramarina da Polinésia Francesa.



</p>
<p className="sportParagraph">A cidade de Paris foi escolhida como sede na 131.ª Sessão do Comitê Olímpico Internacional (COI) em Lima, Peru, em 13 de setembro de 2017. Após múltiplas desistências que deixaram apenas Paris e Los Angeles na disputa, o COI aprovou um processo para defini-las como locais de realização dos Jogos de 2024 e 2028 respectivamente. Tendo anteriormente sediado os Jogos de 1900 e de 1924, Paris se tornará a segunda cidade, depois de Londres (que foi a anfitriã em 1908, 1948 e 2012), a sediar três vezes os Jogos Olímpicos de Verão. Paris 2024 também marca o centenário de Paris 1924, e estes Jogos Olímpicos são os sextos organizados pela França (três de verão e três de inverno), e os primeiros Jogos Olímpicos franceses desde os Jogos Olímpicos de Inverno de 1992 em Albertville. Em 2024 os Jogos Olímpicos de Verão retornam ao tradicional ciclo olímpico de quatro anos, já que os Jogos de 2020, em Tóquio, foram adiados em um ano devido à pandemia de COVID-19.


</p>


</div>

</section>



    );
}


export default FirstSection2024ParisMobile;