import React ,{useState} from 'react';
import '../../index.css';

import antuerpia from '../../lugaresOlimpiadas/antuerpia.jpg';



function FirstSection1920AntuerpiaMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1920 (Antuérpia - Bélgica)</h4>
<img src={antuerpia} className="sportImg" alt="Imagem Referente a cidade de Antuérpia na Bélgica">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição:Jogos Olímpicos de Verão de 1920 (em francês: Jeux olympiques d'été de 1920; em neerlandês: Olympische Zomerspelen van 1920), oficialmente conhecidos como Jogos da VII Olimpíada, foram os Jogos Olímpicos realizados em Antuérpia, na região da Flandres, na Bélgica, numa homenagem do Comitê Olímpico Internacional ao sofrimento infligido ao povo belga durante a Primeira Guerra Mundial, que inclusive impediu a realização dos Jogos de 1916, anteriormente marcados para Berlim. Atletas de 29 países, num total de 2 561 homens e 65 mulheres, participaram de 24 esportes, num total de 156 eventos. Abertos pelo rei Alberto em 20 de abril, eles duraram até 12 de setembro.


</p>
<p className="sportParagraph">Os Jogos de Antuérpia foram notáveis pelo fato de, neles, ser hasteada, pela primeira vez, a bandeira olímpica (branca com cinco anéis no centro representando os cinco continentes), ter havido uma pioneira revoada de pombos simbolizando a paz e ter sido feito o juramento dos atletas, lido pelo esgrimista e jogador de polo aquático Victor Boin.
</p>

<p className="sportParagraph">Em Antuérpia, o Brasil fez a sua estreia nos Jogos Olímpicos, deixando marcada sua presença ao conquistar três medalhas, uma delas de ouro, no tiro.

</p>



</div>

</section>



    );
}


export default FirstSection1920AntuerpiaMobile;