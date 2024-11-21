import React ,{useState} from 'react';
import '../../index.css';
import saltosOrnamentais from '../../img/saltosornamentais.jpg';



function FirstSectionSaltosOrnamentaisMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Saltos Ornamentais</h4>
<img src={saltosOrnamentais} className="sportImg" alt="Imagem Referente aos Saltos Ornamentais">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Nos Jogos Olímpicos, o esporte é disputado em oito categorias: trampolim de 3 metros (individual e sincronizado no masculino e feminino) e plataforma de 10 metros (individual e sincronizado no masculino e feminino). O trampolim de 3 metros permite que os atletas saltem no ar, enquanto o salto mais elevado é realizado em uma plataforma fixa a 10 metros acima da água. As competições individuais e sincronizadas acontecem nas duas alturas.

Um painel de juízes pontua cada mergulho com base em vários critérios, incluindo o quão esteticamente agradáveis são os movimentos do atleta, a complexidade do mergulho e a habilidade de entrar na água. Os saltos sincronizados também são pontuados na forma como os dois competidores combinam seus movimentos.
          
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:   Desde 2000(Sydney - Austrália).

    </p>
<p className="sportParagraph">Ano de inclusão da modalidade masculina:  Desde 2000(Sydney - Austrália).



</p>
<p className="sportParagraph">PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL OU EM EQUIPE - SYDNEY 2000.



</p>
</div>

</section>



    );
}


export default  FirstSectionSaltosOrnamentaisMobile;