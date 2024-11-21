import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';



function ThirdSectionUpdated() {
    return(

<section className="thirdSection">
<div className="thirdSectionColumn1">
<ul>
<h4 className="list-title">Modalidades do Badminton</h4>

<li className="list-item">	Individual feminino e masculino; </li>

<li className="list-item">	Duplas masculinas, femininas;</li>

	<li className="list-item">Duplas misto.</li>
</ul>
	
</div>
<div className="thirdSectionColumn2">

<h4 className="list-title">Nossos Atletas</h4>
<h5 className="list-title">Masculino:</h5>
<p className="list-item2">Ygor Coelho </p>

<h5 className="list-title">Feminino:</h5>
<p className="list-item2">Juliana Viana.
</p>

<h5 className="list-title">Melhores atletas brasileiros no esporte na edição de 2024 (Paris - França):</h5>
<p className="list-item2">A jovem piauiense, de 19 anos, representou o Brasil nos Jogos Olímpicos de Paris-2024 e conquistou a primeira vitória de uma mulher brasileira no badminton em Olimpíadas. Ela teve pela frente na estreia Sayane Lima e ganhou por 2 sets a 0, parciais de 21/12 e 21/7
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