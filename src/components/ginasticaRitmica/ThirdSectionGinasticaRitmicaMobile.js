import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';



function ThirdSectionGinasticaRitmicaMobile() {
    return(

<section className="thirdSection">
<div className="thirdSectionColumn1">
<ul>
<h4 className="list-title">Modalidades de Ginástica de Trampolim</h4>
<p className="list-title">Feminino:</p>
<li className="list-item">	Individual;
</li>
<li className="list-item">	Conjunto.
</li>


</ul>




</div>
<div className="thirdSectionColumn2">

<h4 className="list-title">Nossos Atletas</h4>
<h5 className="list-title">Masculino:</h5>
<p className="list-item2">Homens não disputam essa modalidade.</p>

<h5 className="list-title">Feminino:</h5>
<p className="list-item2">Bárbara Galvão, Déborah Medrado, Duda Arakaki, Giovanna Silva, Nicole Pírcio, Sofia Madeira.
</p>

<h5 className="list-title">Melhores atletas brasileiros no esporte na edição de 2024 (Paris - França):</h5>
<p className="list-item2">Os atletas brasileiros não levaram nenhuma medalha na modalidade nessa edição.

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

export default ThirdSectionGinasticaRitmicaMobile;