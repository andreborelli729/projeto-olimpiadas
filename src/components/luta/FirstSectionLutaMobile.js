import React ,{useState} from 'react';
import '../../index.css';

import luta from '../../img/luta.jpeg';



function FirstSectionLutaMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Luta</h4>
<img src={luta} className="sportImg" alt="Imagem Referente a Luta Olímpica">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: A luta é um dos esportes mais antigos da história da humanidade – se não o mais antigo. Várias esculturas, relevos e desenhos em cavernas – alguns dos quais datam de cerca de 15.000 anos atrás – mostram lutadores utilizando vários golpes que ainda são usados no esporte atual. A luta foi uma parte fundamental dos antigos Jogos Olímpicos, sendo disputada pela primeira vez em 708 a.C. As lutas livres foram organizadas como um evento próprio em duas modalidades (“luta vertical” e “luta de chão”) e como parte do pentatlo.

A luta moderna consiste em duas modalidades separadas: a greco-romana, um estilo baseado no esporte antigo, e a livre, em um formato mais moderno.

     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:    Desde 1896(Atenas - Grécia), saindo e sendo reintroduzido em 1920(Antuérpia - Bélgica) e estando presente em todos as edições seguintes.

    </p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1900(Paris - França).


</p>
<p className="sportParagraph">PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL - ATENAS 1896 - PARIS 1900.



</p>
</div>

</section>



    );
}


export default FirstSectionLutaMobile;