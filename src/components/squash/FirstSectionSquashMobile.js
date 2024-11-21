import React ,{useState} from 'react';
import '../../index.css';
import squash from '../../img/squash.jpeg';



function FirstSectionSquashMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Squash</h4>
<img src={squash} className="sportImg" alt="Imagem Referente ao Squash">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O squash é um esporte de raquete geralmente praticado por duas pessoas em uma quadra retangular cercada por quatro paredes. O piso é de madeira nobre com as paredes das competições profissionais construídas com vidro de segurança para permitir que os espectadores assistam à ação.

As bolas de squash são feitas de borracha e tendem a saltar pouco. Elas precisam ser aquecidas, batendo repetidamente nas paredes antes da partida.      
          
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:    À partir de 2028(Los Angeles - EUA).
    </p>
<p className="sportParagraph">Ano de inclusão da modalidade masculina:   À partir de 2028(Los Angeles - EUA).



</p>
<p className="sportParagraph">LOS ANGELES 2028 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL OU EM EQUIPE.



</p>
</div>

</section>



    );
}


export default  FirstSectionSquashMobile ;