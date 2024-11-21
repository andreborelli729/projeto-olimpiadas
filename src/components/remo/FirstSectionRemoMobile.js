import React ,{useState} from 'react';
import '../../index.css';
import remo from '../../img/remo.jpg';



function FirstSectionRemoMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Remo</h4>
<img src={remo} className="sportImg" alt="Imagem Referente ao Remo">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O remo originalmente servia como meio de transporte no antigo Egito, Grécia e Roma, mas foi apenas na Inglaterra, entre o final do século 17 e início do século 18, que se tornou um esporte. A primeira grande competição de remo foi a agora anual Corrida de Barcos Oxford e Cambridge, que começou em 1829.
          
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:   Desde 1900(Paris - França).

    </p>
<p className="sportParagraph">Ano de inclusão da modalidade masculina:  Desde 1976(Montreal - Canadá).



</p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL OU EM EQUIPE - PARIS 1900 - MONTREAL 1976.



</p>
</div>

</section>



    );
}


export default  FirstSectionRemoMobile;