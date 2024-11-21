import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';


function ThirdSectionLutaMobile() {
    return(

<section className="thirdSection">
<div className="thirdSectionColumn1">
<ul>
<h4 className="list-title">Modalidades de Luta</h4>
<p className="list-title">Masculino/Feminino</p>

<li className="list-item">Luta Greco-Romana;
</li>
<li className="list-item">Luta Livre.
</li>



</ul>

</div>
<div className="thirdSectionColumn2">

<h4 className="list-title">Nossos Atletas</h4>
<h5 className="list-title">Masculino:</h5>
<p className="list-item2">Não tivemos atletas masculinos na modalidade nesta edição.</p>

<h5 className="list-title">Feminino:</h5>
<p className="list-item2">Giullia Penalber.


</p>

<h5 className="list-title">Melhores atletas brasileiros no esporte na edição de 2024 (Paris - França):</h5>
<p className="list-item2">O Brasil não ganhou medalhas na modalidade nessa edição.


</p>

<h5 className="list-title">Todas as medalhas de atletas brasileiros nesse esporte em todas as olímpiadas: </h5>
<p className="list-item2">O Brasil nunca ganhou medalhas nesse esporte em nenhuma olímpiada.edição.
</p>
<Link to='/modalidades'>
   <button className="modalidadesBtn">Todas as Modalidades</button>
   </Link>
</div>


</section>
    );
}

export default ThirdSectionLutaMobile;