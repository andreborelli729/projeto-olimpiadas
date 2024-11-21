import React ,{useState} from 'react';
import '../../index.css';

import basquete from '../../img/basquete.jpg';



function FirstSectionUpdated (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Basquete</h4>
<img src={basquete} className="sportImg" alt="Imagem Referente ao Atletismo">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O basquete é um esporte praticado por duas equipes de cinco jogadores em uma quadra retangular coberta. Os atletas usam as mãos para controlar a bola e marcar pontos, lançando a bola até um aro suspenso a 3,05m do chão. As partidas Olímpicas de basquete são divididas em quatro períodos de 10 minutos. As equipes se alternam entre ataque e defesa e devem demonstrar resistência, agilidade, força e, claro, muito habilidade em quadra.
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1936(Berlim - Alemanha).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1976(Montreal - Canadá)

</p>
<p className="sportParagraph">TAGS:PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE DE EQUIPE - MEDALHAS EM OUTRA EDIÇÕES - BERLIM 1936 -MONTREAL 1976 - LONDRES 1948 -  ROMA 1960 - TÓQUIO 1964- ATLANTA 1996 - SYDNEY 2000.


</p>
</div>

</section>



    );
}


export default FirstSectionUpdated;