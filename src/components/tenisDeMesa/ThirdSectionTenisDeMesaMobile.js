import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';



function ThirdSectionTenisDeMesaMobile() {
    return(

<section className="thirdSection">
<div className="thirdSectionColumn1">
<ul>
<h4 className="list-title">Modalidades do Tênis de Mesa</h4>
<p className="list-title">Masculino/Feminino:</p>
    <li className="list-item">Individual;
    </li>
    <li className="list-item">Equipes.
</li>




</ul>




</div>
<div className="thirdSectionColumn2">

<h4 className="list-title">Nossos Atletas</h4>
<h5 className="list-title">Masculino:</h5>
<p className="list-item2">Guilherme Teodoro, Hugo Calderano, Leonardo Iizuka, Vitor Ishiy.</p>

<h5 className="list-title">Feminino:</h5>
<p className="list-item2">Bruna Takahashi. 
</p>

<h5 className="list-title">Melhores atletas brasileiros no esporte na edição de 2024 (Paris - França):</h5>
<p className="list-item2">Hugo Calderano terminou na quarta colocação do individual masculino, a melhor campanha do tênis de mesa brasileiro na competição.


</p>

<h5 className="list-title">Todas as medalhas de atletas brasileiros nesse esporte em todas as olímpiadas: </h5>
<p className="list-item2">O Brasil nunca ganhou medalhas nesse esporte em nenhuma olímpiada edição.
</p>
<Link to='/modalidades'>
   <button className="modalidadesBtn">Todas as Modalidades</button>
   </Link>
</div>


</section>
    );
}

export default  ThirdSectionTenisDeMesaMobile;