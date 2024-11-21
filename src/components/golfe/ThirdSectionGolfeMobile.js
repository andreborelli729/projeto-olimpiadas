import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';



function ThirdSectionGolfeMobile() {
    return(

<section className="thirdSection">
<div className="thirdSectionColumn1">
<ul>
<h4 className="list-title">Modalidades de Ginástica de Trampolim</h4>
<p className="list-title">Masculino/Feminino:</p>
<li className="list-item">	Golfe
</li>



</ul>




</div>
<div className="thirdSectionColumn2">

<h4 className="list-title">Nossos Atletas</h4>
<h5 className="list-title">Masculino:</h5>
<p className="list-item2">Nenhum atleta brasileiro participou dessa ou de qualquer outra edição de golfe em qualquer olímpiada.</p>

<h5 className="list-title">Feminino:</h5>
<p className="list-item2">Nenhum atleta brasileiro participou dessa ou de qualquer outra edição de golfe em qualquer olímpiada.
</p>

<h5 className="list-title">Melhores atletas brasileiros no esporte na edição de 2024 (Paris - França):</h5>
<p className="list-item2">Não houve atletas brasileiros nessa edição.


</p>

<h5 className="list-title">Todas as medalhas de atletas brasileiros nesse esporte em todas as olímpiadas: </h5>
<p className="list-item2">Nunca houve atletas brasileiros disputando esse esporte em qualquer edição.
</p>
<Link to='/modalidades'>
   <button className="modalidadesBtn">Todas as Modalidades</button>
   </Link>
</div>


</section>
    );
}

export default ThirdSectionGolfeMobile;