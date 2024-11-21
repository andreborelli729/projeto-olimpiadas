import React from 'react';
import '../../olimpiadasAntigas.css';
import { Link } from 'react-router-dom';

function ThirdSectionOlimpiadasAntigasMobile() {
    return(

        <>
        <section className="thirdSection">
        <h3 className="resultsTitle">Curiosidades das Olímpiadas Antigas</h3>
        <p className="esporteAntigoDescription">
        O período áureo dos Jogos Olímpicos antigos correspondeu ao século V a.C.. As perturbações que a Guerra do Peloponeso gerou na Grécia teriam inevitavelmente consequência sobre os jogos: Élide, que até então tinha mantido uma atitude politicamente neutra, aliou-se a Atenas durante este conflito e baniu os Espartanos do evento. Em 424 a.C., sob a ameaça de invasão de Esparta, os jogos tiveram que ser realizados sob proteção de tropas. Embora Esparta não tivesse chegado a invadir o santuário, este episódio revela que o conceito da "trégua sagrada" tinha sido esquecido.

        </p>
        <p className="esporteAntigoDescription">

        Em 365 a.C. a Arcádia, ajudada por Pisa (inimiga de Élide), conquistou o santuário; as duas cidades organizaram os jogos de 364 a.C.. Élide tentou recuperar o santuário recorrendo à força; o conflito gerado levaria à pilhagem dos templos do Áltis. Élide acabaria por retomar o controle do santuário porque se temia a fúria dos deuses, tendo as Olimpíadas de 364 a.C. sido consideradas inválidas.  
</p>
<p className="esporteAntigoDescription">

            
Em 336 a.C., depois das cidades gregas terem sido conquistadas por Filipe II da Macedónia e pelo seu filho Alexandre Magno, foi construído no Altis o Filipéion, um edifício onde se encontravam estátuas de Alexandre e da sua família feitas de ouro e marfim, materiais que até então tinham sido reservados às estátuas dos deuses.

</p>
<p className="esporteAntigoDescription">
Em 146 a.C. a Grécia foi conquistada pelos romanos. Para financiar a sua guerra contra Mitrídates VI do Ponto, o general romano Sula saqueou o Áltis (bem como os santuários de Delfos e do Epidauro). Em 80 a.C., como forma de celebrar o sucesso da sua guerra, Sula transferiu os jogos para Roma, mas depois da sua morte em 78 a.C. os jogos regressaram a Olímpia. Durante um breve período da era romana os jogos retomaram a sua vitalidade.
            
</p>

<h5 className="esporteAntigoTitle">Local</h5>
<p className="esporteAntigoDescription">Os Jogos Olímpicos decorriam no santuário de Zeus em Olímpia que era feito de mármore cristalizado situado na região ocidental do Peloponeso, a cerca de 15 quilômetros do Mar Jônio, próximo da confluência dos rios Alfeus e Cladeos. Este santuário retira o seu nome ao Monte Olimpo (que se situa longe do local, na Tessália, norte da Grécia), ponto mais elevado da Grécia continental e que era na mitologia grega a residência das divindades.

O núcleo de Olímpia era o Áltis, um bosque sagrado. No centro do bosque existia um templo em estilo dórico dedicado a Zeus, que foi construído entre 468 e 456 a.C., em cujo interior se encontrava uma estátua colossal do deus da autoria de Fídias e que era considerada uma das Sete Maravilhas do Mundo Antigo.
</p>
<h5 className="esporteAntigoTitle">Vestimentas</h5>
<p className="esporteAntigoDescription">
Durante as antigas Olimpíadas gregas, os atletas competiam despidos. Essa prática era parte da celebração da beleza do corpo humano e também simbolizava a pureza do espírito esportivo. Além disso, competir sem roupas era considerado um tributo aos deuses e uma maneira de homenagear o corpo humano em sua forma mais natural.
</p>
<h5 className="esporteAntigoTitle">Participantes</h5>
<p className="esporteAntigoDescription">
Não poderiam participar nos jogos os estrangeiros (os "bárbaros" segundo a mitologia grega), os escravos e as mulheres - sugere-se que somente a sacerdotisa de Deméter poderia estar presente no altar em homenagem à deusa. As mulheres que violassem a regra seriam atiradas do alto do Monte Tipéon. Havia uma competição exclusivamente feminina, a Heraea, nome dado em homenagem à Hera, mulher de Zeus. Conta-se o caso de uma mulher, Calipatira, que, em 404 a.C., vestida com roupas masculinas, disfarçou-se de treinador para entrar no ginásio e ver seu filho, Psídoro de Túrio, lutar. O filho venceu a prova e a mãe, comemorando a vitória, deixou cair seu disfarce, revelando ser mulher. Ela foi absolvida por vir de uma família de campeões olímpicos, mas a partir desse acontecimento, os treinadores também passaram a se apresentar nus nas competições. Houve mulheres consideradas campeãs, porém, nas provas de cavalos, onde era declarado vencedor o dono do cavalo, não os condutores.

</p>
<p className="esporteAntigoDescription">

Os atletas eram de uma forma geral oriundos das classes mais favorecidas e tinham sido iniciados no desporto desde tenra idade. Não vinham apenas da Grécia continental, mas de todos os pontos do mundo grego que na Antiguidade incluía as colônias espalhadas pelas costas do Mediterrâneo e do Mar Negro. Os vencedores eram alvo da homenagem da sua cidade: poderiam receber alimentação gratuita, terem estátuas erguidas em sua honra e serem cantados pelos poetas.
</p>
<Link to='/'>
   <button className="modalidadesBtn">Voltar para Página Inicial</button>
   </Link>
        </section>
        
        </>
    );
}

export default ThirdSectionOlimpiadasAntigasMobile;