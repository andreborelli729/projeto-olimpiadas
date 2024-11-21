import React ,{useState} from 'react';
import '../../index.css';
import rugbySevens from '../../img/rugbysevens.avif';



function FirstSectionRugbySevensMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Rugby Sevens</h4>
<img src={rugbySevens} className="sportImg" alt="Imagem Referente ao Rugby Sevens">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O rugby pode ter suas origens nos tempos medievais em vários países europeus, mas foi entre 1845 e 1848 que as regras modernas do rugby foram estabelecidas por alunos de uma escola na cidade inglesa de Rugby e da Universidade de Cambridge. Em 1871, foi criada a primeira federação nacional; dois anos depois, a modalidade de rugby sevens foi desenvolvida por dois açougueiros, Ned Haig e David Sanderson, como um evento de arrecadação de fundos em Melrose, na Escócia. Em 1886, o International Rugby Board (agora conhecido como World Rugby) foi estabelecido.
          
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:   Desde 2016(Rio de Janeiro - Brasil).

    </p>
<p className="sportParagraph">Ano de inclusão da modalidade masculina:  Desde 2016(Rio de Janeiro - Brasil).



</p>
<p className="sportParagraph">TAGS: PARIS 2024 - UMA MODALIDADE -ESPORTE EM EQUIPE - RIO DE JANEIRO 2016.



</p>
</div>

</section>



    );
}


export default  FirstSectionRugbySevensMobile;