import React ,{useState} from 'react';
import '../../index.css';

import judo from '../../img/judo.jpg';



function FirstSectionJudoMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Judô</h4>
<img src={judo} className="sportImg" alt="Imagem Referente ao Judô">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O judô é uma tradicional arte marcial japonesa derivada do jiu-jitsu, a técnica de combate corpo a corpo dos antigos guerreiros samurais. O Dr. Jigoro Kano é creditado como fundador da disciplina em Tóquio depois de abrir seu primeiro dojo (escola), o kōdōkan, em 1882. Em japonês, a palavra “judô” significa “o caminho suave”, mas o tradicional esporte de luta dificilmente pode ser descrito como tal pois requer um esforço físico considerável. Dr. Kano combinou os princípios filosóficos do judô com métodos de educação física, intelectual e moral, ao mesmo tempo em que eliminou muitos dos aspectos mais perigosos do jiu-jitsu. O judô tornou-se popular na Europa e, particularmente na França, no fim do século 20, tornando-se a primeira arte marcial amplamente praticada fora do Japão.
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1964(Tóquio - Japão).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1992(Barcelona - Espanha). </p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL E EM EQUIPE -  OURO NESSA EDIÇÃO - MEDALHA NESSA EDIÇÃO - OURO EM OUTRA EDIÇÃO - MEDALHA EM OUTRA EDIÇÃO - TÓQUIO 1964 - BARCELONA 1992 - LOS ANGELES 1984 - SEUL 1988 -  ATLANTA 1996- SYDNEY 2000 - ATENAS 2004 - PEQUIM 2008 - LONDRES 2012 - RIO DE JANEIRO 2016 - TÓQUIO 2020. 

</p>
</div>

</section>



    );
}


export default FirstSectionJudoMobile;