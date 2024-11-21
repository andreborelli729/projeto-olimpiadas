import React ,{useState} from 'react';
import '../../index.css';

import saintLouis from '../../lugaresOlimpiadas/saintlouis.jpg';



function FirstSection1904SaintLouisMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1904 (Saint Louis - EUA)</h4>
<img src={saintLouis    } className="sportImg" alt="Imagem Referente a cidade de Saint Louis nos Estados Unidos">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Jogos Olímpicos de Verão de 1904 (em inglês: 1904 Olympic Games), conhecidos oficialmente como Jogos da III Olímpiada foram os Jogos realizados na cidade de Saint Louis, no estado do Missouri, Estados Unidos. Da mesma maneira que os Jogos anteriores em Paris, eles foram novamente integrados a uma grande exposição e feira de negócios, desta vez a Louisiana Purchase Exhibition, sem nenhuma relação com o esporte. Também como em Paris, os Jogos foram alongados para uma duração de cinco meses, sendo inaugurados em 1 de julho e tendo seu encerramento em 23 de novembro de 1904.


</p>
<p className="sportParagraph">Indignado com a situação, que em tudo repetia a desorganização e o descaso mostrado nos Jogos de Paris quatro anos antes, o Barão Pierre de Coubertin, mesmo recebendo uma carta do Presidente Theodore Roosevelt implorando sua presença, recusou-se a comparecer a St. Louis para a cerimônia de abertura e permaneceu na Europa.
</p>
<p className="sportParagraph">Por causa da grande distância transoceânica, vários países da Europa não comparecerem e os países participantes limitaram-se a 12, com 16 modalidades esportivas sendo disputadas, sendo que mais de três quartos dos 651 atletas presentes (645 homens e 6 mulheres) eram dos próprios Estados Unidos, o que explica a grande quantidade de medalhas conquistadas pelo país anfitrião e a enorme diferença no quadro de medalhas para o segundo colocado.</p>
</div>

</section>



    );
}


export default FirstSection1904SaintLouisMobile;