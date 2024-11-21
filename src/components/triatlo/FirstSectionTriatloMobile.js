import React ,{useState} from 'react';
import '../../index.css';
import triatlo from '../../img/triatlo.webp';



function FirstSectionTriatloMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Triatlo</h4>
<img src={triatlo} className="sportImg" alt="Imagem Referente ao Triatlo">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Embora seja composto por três modalidades há muito tempo estabelecidas, o triatlo ainda é um esporte jovem, inventado apenas na década de 1970 pelo San Diego Track Club como treino alternativo à atividade tradicional em pista. O clube realizou o primeiro evento oficial de triatlo em 1974, que contou com uma corrida de 8,5km, ciclismo de 8km e uma prova de natação com pouco menos de 550m. O esporte cresceu em popularidade ao longo da década de 1980 e, em 1989, a União Internacional de Triatlo (ITU, em inglês) foi fundada em Avignon, na França, que também foi o local do primeiro campeonato mundial realizado no final daquele mesmo ano.
          
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:  Desde 2000(Sydney - Austrália).

    </p>
<p className="sportParagraph">Ano de inclusão da modalidade masculina: Desde 2000(Sydney - Austrália).



</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL OU EM EQUIPE - SYDNEY 2000.



</p>
</div>

</section>



    );
}


export default  FirstSectionTriatloMobile;