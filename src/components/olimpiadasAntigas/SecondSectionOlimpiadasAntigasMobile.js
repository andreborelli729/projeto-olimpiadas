import React from 'react';
import '../../olimpiadasAntigas.css';
import corridaPedestre from '../../img/corridapedestreantiga.jpg';
import corridaEquestre from '../../img/corridaequestre.jpg';
import lutaAntiga from '../../img/lutaantiga.jpeg';
import pentatloAntigo from '../../img/pentatloantigo.webp';




function SecondSectionOlimpiadasAntigasMobile(){

    return(

        <>
        <section className="titles-section">
        <div className="results">
        <h4 className="resultsTitle">Esportes Práticados nas Olímpiadas Antigas</h4>
        <figure>
         <figcaption><p className="esporteAntigoTitle">Corrida Pedestre</p></figcaption>   
        <img src={corridaPedestre} className="esporteAntigoImg" alt="Imagem Referente a Corrida Pedestre Práticado nas Olímpiadas Antigas"></img>
        <figcaption><p className="esporteAntigoDescription">As corridas pedestres incluíam quatro tipos de corridas: o estádio, o diaulo (ou duplo estádio), o dólico e o hoplitódromo (ou corrida com armas). O estádio era a prova mais antiga e de maior prestígio, já que o seu vencedor daria o seu nome aos jogos. Consistia numa corrida de 192 metros, o comprimento do estádio; diaulo correspondia a uma corrida de 384 metros. Quanto ao dólico, era uma corrida que variava entre os 7 e os 24 estádios. A corrida com armas variava entre os 2 e os 4 estádios e nela os atletas levavam o capacete e o escudo dos hoplitas, o que poderia ser penoso dado o peso que representava este armamento. Para evitar a fraude, os escudos usados pelos atletas eram guardados no Templo de Zeus, de modo a evitar que alguém corresse com um escudo que fosse mais leve.</p></figcaption>
        </figure>

        <figure>
         <figcaption><p className="esporteAntigoTitle">Corridas Equestres</p></figcaption>   
        <img src={corridaEquestre} className="esporteAntigoImg" alt="Imagem Referente a Corrida Equestre Práticado nas Olímpiadas Antigas"></img>
        <figcaption><p className="esporteAntigoDescription">Este tipo de prova incluía as corridas de bigas ou de cavalo de sela. Nas primeiras poderiam usar-se dois cavalos (bigas) ou quatro cavalos (quadrigas). As quadrigas teriam sido introduzidas nos Jogos Olímpicos pela primeira vez em 680 a.C. e as corridas de cavalo de sela em 648 a.C.. Uma corrida de carros consistia em doze voltas ao hipódromo, tendo cada volta entre 823 e 914 metros; a corrida de cavalo era uma volta do hipódromo.

Não eram os homens que tinham vencido as corridas que recebiam as coroas, mas os donos dos cavalos, dado que estes implicavam custos que só os mais ricos poderiam suportar. Assim, algumas mulheres com posses e políticos tornaram-se vencedores destas corridas, sem nunca terem participado nelas.
</p></figcaption>
        </figure>

        
        <figure>
         <figcaption><p className="esporteAntigoTitle">Luta, Pugiláto e Pancrácio</p></figcaption>   
        <img src={lutaAntiga} className="esporteAntigoImg" alt="Imagem Referente a Luta, Pugiláto e Pancrácio Práticado nas Olímpiadas Antigas"></img>
        <figcaption><p className="esporteAntigoDescription">Na luta grega era necessário provocar três vezes a queda do adversário para se consagrar vencedor. Considerava-se que tinha ocorrido uma queda quando as costas, ombros ou peito do adversário tinham tocado o chão. Antes de iniciarem a luta os concorrentes untavam o corpo com azeite e deitavam um pouco de terra para evitar que a pele se tornasse escorregadia. A prova não possuía um tempo limite. Era permitido partir os dedos do adversário, mas não era permitido realizar ataques na região genital ou recorrer a mordeduras. Existiam provas reservadas aos homens adultos e aos rapazes.

A prática do pugilato na Grécia Antiga remonta ao século VIII a.C.. Apenas se poderia atacar com os punhos e os concorrentes envolviam os dedos com tiras de couro. Não existiam assaltos nem categorias baseadas no peso dos atletas. O jogo terminava quando um dos atletas ficava inconsciente ou colocava um dedo no ar em sinal de desistência.

O pancrácio era uma combinação da luta e do pugilato, sendo o seu resultado uma prova extremamente violenta, cujos concorrentes poderiam mesmo vir a morrer. Tudo era permitido, com exceção de enfiar dedos nos olhos, atacar a região genital, arranhar ou morder. A vitória ocorria quando um dos atletas já não conseguia continuar a lutar, levantando um dedo para que o juiz percebesse.

Para cada um destes desportos, existiam provas reservadas aos homens adultos e aos rapazes.

</p></figcaption>
        </figure>
        
         
        <figure>
         <figcaption><p className="esporteAntigoTitle">Pentatlo</p></figcaption>   
        <img src={pentatloAntigo} className="esporteAntigoImg" alt="Imagem Referente a Pentatlo Práticado nas Olímpiadas Antigas"></img>
        <figcaption><p className="esporteAntigoDescription">O pentatlo dos Gregos antigos era diferente do pentatlo moderno, sendo composto pelo lançamento do disco, lançamento do dardo, salto em comprimento, a corrida de estádio (semelhante aos 200 m) e a luta.

O disco lançado pelos atletas pesava cerca de 9,5 quilos e poderia ser feito de pedra, ferro ou bronze. O vencedor era aquele que conseguia lançar o disco o mais longe possível e o vencedor era também considerado um herói. Quanto ao dardo possuía a altura de um homem e era feito em madeira. No salto em comprimento recorria-se a quatro halteres que impulsionavam o atleta na subida e que eram depois atirados quando este descia.

Caso um atleta tivesse vencido as três primeiras provas do pentatlo, não se realizavam as duas últimas.


</p></figcaption>
        </figure>
        </div>
        </section>
        </>
    );
}


    export default SecondSectionOlimpiadasAntigasMobile;