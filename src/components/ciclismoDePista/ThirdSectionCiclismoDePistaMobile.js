import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';



function ThirdSectionUpdated() {
    return(

<section className="thirdSection">
<div className="thirdSectionColumn1">
<ul>
<h4 className="list-title">Modalidades do Ciclismo de Estrada</h4>
<p className="list-title">Masculino/Feminino:</p>
<li className="list-item">	Madison: Duas pessoas se revezam para percorrer 50 km;
</li>
<li className="list-item">	Keirin: Os atletas percorrem boa parte do percurso acompanhados por uma bicicleta motorizada;
</li>
<li className="list-item">	Velocidade individual: Corrida individual;
</li>
<li className="list-item">	Omnium: Os atletas disputam cinco provas diferentes, como perseguição individual, corrida de pontos, scratch, contrarrelógio e flying lap;

</li>
<li className="list-item">	Velocidade por equipes: Corrida por equipes.
</li>

</ul>
	
</div>
<div className="thirdSectionColumn2">

<h4 className="list-title">Nossos Atletas</h4>
<h5 className="list-title">Masculino:</h5>
<p className="list-item2">Não houve atletas masculinos classificados para essa modalidade nas olímpiadas.</p>

<h5 className="list-title">Feminino:</h5>
<p className="list-item2">Não houve atletas masculinos classificados para essa modalidade nas olímpiadas.
</p>

<h5 className="list-title">Melhores atletas brasileiros no esporte na edição de 2024 (Paris - França):</h5>
<p className="list-item2">Não houve atletas masculinos classificados para essa modalidade nas olímpiadas.
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