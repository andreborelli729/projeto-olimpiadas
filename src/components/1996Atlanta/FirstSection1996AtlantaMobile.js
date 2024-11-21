import React ,{useState} from 'react';
import '../../index.css';

import atlanta from '../../lugaresOlimpiadas/atlanta.jpg';



function FirstSection1996AtlantaMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1996 (Atlanta - EUA)</h4>
<img src={atlanta} className="sportImg" alt="Imagem Referente a cidade de Atlanta nos Estados Unidos">


</img>  
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1996 (em inglês: 1996 Summer Olympic Games), oficialmente conhecidos como os Jogos da XXVI Olimpíada, foram os Jogos realizados em Atlanta, capital do estado de Geórgia, nos Estados Unidos, entre 19 de julho e 4 de agosto de 1996. Marcaram os 100 anos dos Jogos Olímpicos da Era Moderna, sendo abertos pelo presidente dos Estados Unidos Bill Clinton. Os então 197 Comitês Olímpicos Nacionais filiados ao Comitê Olímpico Internacional enviaram suas delegações, num total de 10 318 atletas, sendo 3 512 deles mulheres, competindo em 30 esportes.


</p>


<p className="sportParagraph">A comunidade olímpica internacional acreditava ser direito de Atenas, uma das candidatas e berço tanto dos Jogos da antiguidade quanto da Era Moderna, de sediar os Jogos no seu centenário. Entretanto, os delegados do Comitê Olímpico Internacional, na 96.ª Sessão da entidade em 18 de setembro de 1990, em Tóquio, elegeram Atlanta como sede com 51 votos, contra 35 da cidade grega.

</p>

</div>

</section>



    );
}


export default FirstSection1996AtlantaMobile;