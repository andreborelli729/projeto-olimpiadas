import React ,{useState} from 'react';
import '../../index.css';
import tiroComArco from '../../img/tirocomarco.jpg';



function FirstSectionTiroComArcoMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Tiro Com Arco</h4>
<img src={tiroComArco} className="sportImg" alt="Imagem Referente ao Tiro com Arco">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O tiro com arco é um dos esportes mais antigos praticados atualmente e está intimamente ligado ao desenvolvimento da civilização humana. Historicamente, o tiro com arco é usado para caça e guerra; a evidência mais antiga de seu uso vem de alguns locais da África do Sul, como a Caverna de Sibudu, onde foram encontradas pontas de flechas datadas de aproximadamente 64.000 anos. Os primeiros torneios registrados de tiro com arco ocorreram na China durante a dinastia Zhou (1027 – 256 a.C.) Em 1931, o esporte evoluiu em todo o mundo e foi fundada a Federação Internacional de Tiro com Arco, atualmente conhecida como World Archery.
          
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:   Desde 1900(Paris - França), sendo permanente após 1972(Munique - Alemanha).

    </p>
<p className="sportParagraph">Ano de inclusão da modalidade masculina: Desde 1972(Munique - Alemanha).



</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL OU EM EQUIPE - PARIS 1900 - MUNIQUE 1972.



</p>
</div>

</section>



    );
}


export default  FirstSectionTiroComArcoMobile;