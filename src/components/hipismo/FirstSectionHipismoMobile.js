import React ,{useState} from 'react';
import '../../index.css';

import hipismo from '../../img/hipismo.jpg';



function FirstSectionHipismoMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Hipismo</h4>
<img src={hipismo} className="sportImg" alt="Imagem Referente ao Hipismo">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: As competições de hipismo tiveram origem na Grécia Antiga, onde se pensava que era necessária uma parceria perfeita entre cavaleiro e cavalo para sobreviver em batalha. O adestramento foi, portanto, desenvolvido como uma forma de treinar os cavalos para a guerra. Provas equestres sugiram nos Jogos Olímpicos antigos como corridas de bigas, um espetáculo ousado e emocionante. A arte da equitação caiu em esquecimento até seu ressurgimento na Renascença. O adestramento atingiu seu auge com a criação da mundialmente famosa Escola Espanhola de Equitação em Viena, em 1729, que lançou as bases para a modalidade moderna.
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1900 (Paris - França), sendo cortado de 1904( Saint Louis - EUA)  e 1908(Londres - Inglaterra)e voltando em 1912 (Estocolmo - Suecia) e aparecendo em todas as edições seguintes.

</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1952 (Helsinque - Finlândia) em algumas modalidades e em 1964(Tóquio - Japão) podendo participar de todas as modalidades equestres.

</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE -ESPORTE INDIVIDUAL OU POR EQUIPE - OURO EM OUTRA EDIÇÃO - MEDALHAS EM OUTRAS EDIÇÕES - HELSINQUE 1952 - ATLANTA 1996 - SYDNEY 2000  - ATENAS 2004.


</p>
</div>

</section>



    );
}


export default FirstSectionHipismoMobile;