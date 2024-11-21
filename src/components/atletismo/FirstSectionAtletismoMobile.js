import React ,{useState} from 'react';
import '../../index.css';

import atletismoImg from '../../img/atletismo2.avif';



function FirstSectionUpdated (){
    return (
<>
<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Atletismo</h4>
<img src={atletismoImg} className="sportImg" alt="Imagem Referente ao Atletismo">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Disputado nos primeiros Jogos Olímpicos da antiguidade, o atletismo é um dos esportes mais antigos já registrados, com os nomes dos campeões documentados desde 776 a.C. Os Jogos Olímpicos da antiguidade incluíam provas como corridas e um pentatlo que consistia em corrida, salto em distância, lançamento de disco, lançamento de dardo e luta. Os primeiros eventos dos tempos modernos que podem ser comparados às competições de atletismo como conhecemos hoje ocorreram em 1840 em Shropshire, Inglaterra. Outros campeonatos deste tipo começaram a prosperar e se espalhar na década de 1880, principalmente na Inglaterra, EUA e Europa. Em 1912, foi criada a IAAF (agora conhecida como World Athletics), federação internacional que supervisiona as competições internacionais de atletismo.</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1986 (ATENAS - GRÉCIA).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1928 (AMSTERDÃ - PAÍSES BAIXOS) </p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL E DE EQUIPE - MEDALHA(S) NESSA EDIÇÃO - OURO EM OUTRA EDIÇÃO - MEDALHA EM OUTRA EDIÇÃO - ATENAS 1986 -AMSTERDAM 1928 - HELSINQUE 1952 - MELBOURNE 1956 - CIDADE DO MÉXICO 1968 - MUNIQUE 1972 - -MONTREAL 1976 - MOSCOU 1980  -  LOS ANGELES 1984 - SEUL 1988 - ATLANTA 1996  - SYDNEY 2000 -ATENAS 2004  - PEQUIM 2008 - RIO DE JANEIRO 2016 - TÓQUIO 2020.

</p>
</div>

</section>

</>

    );
}


export default FirstSectionUpdated;