import React ,{useState} from 'react';
import '../../index.css';

import atenas from '../../lugaresOlimpiadas/atenas.jpg';



function FirstSection1896AtenasMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1896 (Atenas - Grécia)</h4>
<img src={atenas} className="sportImg" alt="Imagem Referente a cidade Atenas">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Disputado nos primeiros Jogos Olímpicos da antiguidade, o atletismo é um dos esportes mais antigos já registrados, com os nomes dos campeões documentados desde 776 a.C. Os Jogos Olímpicos da antiguidade incluíam provas como corridas e um pentatlo que consistia em corrida, salto em distância, lançamento de disco, lançamento de dardo e luta. Os primeiros eventos dos tempos modernos que podem ser comparados às competições de atletismo como conhecemos hoje ocorreram em 1840 em Shropshire, Inglaterra. Outros campeonatos deste tipo começaram a prosperar e se espalhar na década de 1880, principalmente na Inglaterra, EUA e Europa. Em 1912, foi criada a IAAF (agora conhecida como World Athletics), federação internacional que supervisiona as competições internacionais de atletismo.</p>
</div>

</section>



    );
}


export default FirstSection1896AtenasMobile;