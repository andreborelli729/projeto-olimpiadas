import React ,{useState} from 'react';
import '../../index.css';

import canoagemDeVelocidade from '../../img/canoagemdevelocidade.avif';



function FirstSectionUpdated (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Canoagem De Velocidade</h4>
<img src={canoagemDeVelocidade} className="sportImg" alt="Imagem Referente a Canoagem de Velocidade">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Durante séculos, as canoas eram utilizadas como meio de transporte (além de ser uma ferramenta útil para a caça e a pesca) na América do Norte, na Sibéria e na Groenlândia. A primeira corrida competitiva registrada de canoagem velocidade ocorreu no Clube de Canoagem British Royal, em 1869.As corridas de canoa e caiaque fazem parte do programa dos Jogos Olímpicos, cada uma delas com regras específicas. Na canoa, os atletas se ajoelham no barco e usam um remo de lâmina única em um lado de cada vez, enquanto no caiaque é preciso ficar sentado e utilizar um remo de lâmina dupla.

As corridas de canoagem velocidade acontecem em águas calmas e apresentam várias distâncias (as provas femininas são de 200m ou 500m, já as masculinas são de 500m ou 1000m) e contam com um, dois ou até quatro atletas por barco.
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas: Desde 1924(Paris - França).
</p>
<p className="sportParagraph">Ano de inclusão da modalidade feminina: Desde 1948(Londres - Inglaterra). </p>
<p className="sportParagraph">TAGS: PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL OU EM EQUIPE - MEDALHA NESSA EDIÇÃO - OURO EM OUTRA EDIÇÃO - MEDALHA EM OUTRA EDIÇÃO- PARIS 1924 - LONDRES 1948 - RIO DE JANEIRO 2016 - TOQUIO 2020.

</p>
</div>

</section>



    );
}


export default FirstSectionUpdated;