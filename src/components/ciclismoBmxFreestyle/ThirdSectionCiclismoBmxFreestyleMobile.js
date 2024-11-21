import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';



function ThirdSectionUpdated() {
    return(

<section className="thirdSection">
<div className="thirdSectionColumn1">
<ul>
<h4 className="list-title">Modalidades do Ciclismo BMX Freestyle</h4>
<p className="list-title">Masculino/Feminino:</p>
<li className="list-item">	BMX Freestyle. </li>


</ul>
	
</div>
<div className="thirdSectionColumn2">

<h4 className="list-title">Nossos Atletas</h4>
<h5 className="list-title">Masculino:</h5>
<p className="list-item2">Bala Loka. </p>

<h5 className="list-title">Feminino:</h5>
<p className="list-item2">Não temos atletas femininos nessa modalidade das olímpiadas.
</p>

<h5 className="list-title">Melhores atletas brasileiros no esporte na edição de 2024 (Paris - França):</h5>
<p className="list-item2">Foi o primeiro brasileiro a representar o país na modalidade em Jogos Olímpicos.
Na primeira corrida, Bala Loka acertou todas as manobras e fez 90.2 pontos. 
Na final, Bala Loka ficou sem medalha, após obter 88.88 ponto.
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