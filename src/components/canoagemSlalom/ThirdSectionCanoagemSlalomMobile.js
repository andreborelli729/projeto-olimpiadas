import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';


function ThirdSectionUpdated() {
    return(

<section className="thirdSection">
<div className="thirdSectionColumn1">
<ul>
<h4 className="list-title">Modalidades da Canoagem Slalom</h4>
<p className='list-title'>Masculino/Feminino:</p>
<li className="list-item">	C1 - CANOA 1 PESSOA</li>

<li className="list-item">	 K1 - CAIAQUE UMA PESSOA</li>

	<li className="list-item">K1 EXTREMO CROSS</li>
</ul>
	
</div>
<div className="thirdSectionColumn2">

<h4 className="list-title">Nossos Atletas</h4>
<h5 className="list-title">Masculino:</h5>
<p className="list-item2">Pepe Gonçalves. </p>

<h5 className="list-title">Feminino:</h5>
<p className="list-item2">Ana Sátila.
</p>

<h5 className="list-title">Melhores atletas brasileiros no esporte na edição de 2024 (Paris - França):</h5>
<p className="list-item2">Nenhum atleta brasileiro ganhou na modalidade nessa edição das olímpiadas.

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