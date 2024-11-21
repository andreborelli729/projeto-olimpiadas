import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';


function ThirdSectionHandebolMobile() {
    return(

<section className="thirdSection">
<div className="thirdSectionColumn1">
<ul>
<h4 className="list-title">Modalidades de Handebol</h4>
<p className="list-title">Masculino/Feminino:</p>
<li className="list-item">Jogo de Quadra em Equipe.
</li>



</ul>




</div>
<div className="thirdSectionColumn2">

<h4 className="list-title">Nossos Atletas</h4>
<h5 className="list-title">Masculino:</h5>
<p className="list-item2">A equipe masculina não se classificou para essa modalidade.</p>

<h5 className="list-title">Feminino:</h5>
<p className="list-item2">Adriana Cardoso, Ana Cláudia Bolzan, Bárbara Arenhardt, Bruna de Paula, Gabriela Bitolo, Giulia Guariero, Jéssica Quintino, Jhenifer dos Santos, Kelly Rosa, Larissa Araújo, Gabriela Moreschi, Marcela Arouinian, Mariana Fernandes, Patrícia Matieli, Renata Arruda, Samara Vieira.
</p>

<h5 className="list-title">Melhores atletas brasileiros no esporte na edição de 2024 (Paris - França):</h5>
<p className="list-item2">A equipe feminina finalizou na 7ª posição.


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

export default ThirdSectionHandebolMobile;