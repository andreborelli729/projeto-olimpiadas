import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';



function ThirdSectionUpdated() {
    return(

<section className="thirdSection">
<div className="thirdSectionColumn1">
<ul>
<h4 className="list-title">Modalidades do Basquete 3x3:</h4>

<li className="list-item">	Jogo em Equipe Masculino/Feminino.</li>

</ul>
</div>
<div className="thirdSectionColumn2">

<h4 className="list-title">Nossos Atletas</h4>
<h5 className="list-title">Masculino:</h5>
<p className="list-item2">Seleção masculina sofre duas derrotas no Pré-Olímpico Mundial, disputado no Japão, e não vai aos Jogos Olímpicos de Paris 2024. </p>

<h5 className="list-title">Feminino:</h5>
<p className="list-item2">A seleção brasileira feminina de basquete 3x3 acabou superada na fase de semifinal do Pré-Olímpico da modalidade e não disputará os Jogos Olímpicos de Paris-2024.

</p>

<h5 className="list-title">Melhores atletas brasileiros no esporte na edição de 2024 (Paris - França):</h5>
<p className="list-item2">Não houve atletas brasileiros disputando essa modalidade nas olímpiadas 2024 (Paris - França).

</p>

<h5 className="list-title">Todas as medalhas de atletas brasileiros nesse esporte em todas as olímpiadas: </h5>
<p className="list-item2">O Brasil nunca ganhou medalhas nesse esporte em nenhuma olímpiada.
</p>
<Link to='/modalidades'>
   <button className="modalidadesBtn">Todas as Modalidades</button>
   </Link>
</div>


</section>
    );
}

export default ThirdSectionUpdated;