import React ,{useState} from 'react';
import '../../index.css';

import basquete3x3 from '../../img/basquete3x3.jpg';



function FirstSectionBadmintonMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Basqute 3x3</h4>
<img src={basquete3x3} className="sportImg" alt="Imagem Referente ao Basquete 3x3">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Considerado o esporte urbano número um no mundo, o basquete 3x3 tem suas raízes no basquete de rua – uma variação criativa do jogo na quadra com uma estrutura menos formal. Saindo das quadras ao ar livre para os Jogos Olímpicos, o basquete 3x3 foi estruturado ao longo dos anos pela Federação Internacional de Basquete (FIBA), órgão responsável pelo desenvolvimento do basquete. A criação de eventos como o 3x3 World Tour e a Superliga 3x3 na França reflete a crescente popularidade deste jovem esporte urbano, praticado numa atmosfera eletrizante e estimulado por um DJ e sua música.
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 2020 (Tóquio - Japão)
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina:  Desde 2020 (Tóquio - Japão)
</p>
<p className="sportParagraph">TAGS:PARIS 2024 - UMA MODALIDADE - ESPORTE DE EQUIPE - TOKYO 2020.

</p>
</div>

</section>



    );
}


export default FirstSectionBadmintonMobile;