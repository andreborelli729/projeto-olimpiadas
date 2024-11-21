import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';


function ThirdSectionUpdated() {
    return(

<section className="thirdSection">
<div className="thirdSectionColumn1">
<ul>
<h4 className="list-title">Modalidades da Esgrima</h4>
<p className="list-title">Masculino:</p>
<li className="list-item">	Espada individual masculina
</li>
<li className="list-item">	Espada por equipes masculina;
</li>
<li className="list-item">	Florete individual masculino;
</li>
<li className="list-item">Sabre individual masculino.
</li>
</ul>
<ul>
<p className="list-title">Feminino:</p>
<li className="list-item">	Espada individual feminina;
</li>
<li className="list-item">	Espada por equipes feminina;
</li>
<li className="list-item">	Florete individual feminino;
</li>

<li className="list-item">	Florete por equipes feminino;
</li>

<li className="list-item">	Florete individual feminino;Sabre por equipes feminino;

</li>
<li className="list-item">	Sabre individual feminino.
</li>

</ul>
	
</div>
<div className="thirdSectionColumn2">

<h4 className="list-title">Nossos Atletas</h4>
<h5 className="list-title">Masculino:</h5>
<p className="list-item2">Guilherme Amaral Toldo.</p>

<h5 className="list-title">Feminino:</h5>
<p className="list-item2">Mariana Nelz Pistoia, Nathalie Marie Moelhausen.
</p>

<h5 className="list-title">Melhores atletas brasileiros no esporte na edição de 2024 (Paris - França):</h5>
<p className="list-item2">Não houve medalhas para atletas brasileiros na modalidade nessa edição.

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