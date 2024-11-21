import React ,{useState} from 'react';
import '../../index.css';

import losAngeles from '../../lugaresOlimpiadas/losangeles.avif';



function FirstSection1932LosAngelesMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1932 (Los Angeles - EUA)</h4>
<img src={losAngeles} className="sportImg" alt="Imagem Referente a cidade de Los Angeles nos Estados Unidos">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1932 (em inglês: 1932 Summer Olympics), oficialmente Jogos da X Olímpiada foram realizados em Los Angeles, no estado da Califórnia, Estados Unidos, entre 30 de julho e 14 de agosto, com a participação de 1 332 atletas, sendo 126 mulheres, representando 37 países.



</p>
<p className="sportParagraph">Após quase três décadas na Europa, os Jogos Olímpicos atravessaram o Atlântico e a América até a ensolarada Califórnia, a única região do país que tinha sobrevivido economicamente à queda na Bolsa de Valores de Nova Iorque. Por causa da distância e da Grande Depressão, o número de participantes foi menor que os anteriores, mas os Jogos tiveram uma grande qualidade técnica, com a quebra de 18 recordes mundiais, e sendo introduzido o limite máximo de três competidores por país nas provas individuais, regra que perdura até os dias atuais.


</p>




</div>

</section>



    );
}


export default FirstSection1932LosAngelesMobile;