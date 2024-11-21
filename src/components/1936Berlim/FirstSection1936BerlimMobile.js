import React ,{useState} from 'react';
import '../../index.css';

import berlim from '../../lugaresOlimpiadas/berlim.jpg';



function FirstSection1936BerlimMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1936 (Berlim - Alemanha)</h4>
<img src={berlim} className="sportImg" alt="Imagem Referente a cidade de Berlim na Alemanha">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1936 (em alemão: Olympische Sommerspiele 1936), conhecidos oficialmente como Jogos da XI Olimpíada foram os Jogos Olímpicos realizados em Berlim, capital e um dos 16 estados da Alemanha, entre 1 e 16 de agosto, com a participação de 3 963 atletas, sendo 328 mulheres, representando 49 países, em 22 modalidades esportivas, tornando-se até então os mais grandiosos, bem realizados, ricos e politicamente explorados Jogos Olímpicos até então.



</p>
<p className="sportParagraph">Abertos com grande pompa no espetacular e moderno Estádio Olímpico de Berlim por Adolf Hitler, esperavam todos que os arianos ganhassem. Um pequeno grupo de atletas negros norte-americanos conquistou a maioria das medalhas do atletismo, a modalidade mais importante dos Jogos, liderados por Jesse Owens, que ganhou quatro medalhas de ouro nos 100 m, 200 m, revezamento 4x100 metros e salto em distância, no mais emblemático episódio da história dos Jogos Olímpicos. Mas por outro lado, a Alemanha liderou o quadro de medalhas, com 33 medalhas de ouro.


</p>




</div>

</section>



    );
}


export default FirstSection1936BerlimMobile;