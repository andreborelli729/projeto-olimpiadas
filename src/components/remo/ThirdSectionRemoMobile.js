import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';



function ThirdSectionRemoMobile() {
    return(

<section className="thirdSection">
<div className="thirdSectionColumn1">
<ul>
<h4 className="list-title">Modalidades do Remo</h4>
<p className="list-title">Masculino/Feminino:</p>
    <li className="list-item">Single Skiff (M1x);
    </li>
    <li className="list-item">Double Skiff (M2x);
</li>
<li className="list-item">Four Skiff (M4x);
</li>
<li className="list-item">Dois Sem (M2-);
</li>
<li className="list-item">Quatro Sem (M4-);
</li>
<li className="list-item">Oito Com (M8+);
</li>
<li className="list-item">Single Skiff (W1x);
</li>
<li className="list-item">Double Skiff (W2x);
</li>
<li className="list-item">Four Skiff (W4x);
</li>
<li className="list-item">Dois Sem (W2-).
</li>




</ul>




</div>
<div className="thirdSectionColumn2">

<h4 className="list-title">Nossos Atletas</h4>
<h5 className="list-title">Masculino:</h5>
<p className="list-item2">Lucas Verthein.</p>

<h5 className="list-title">Feminino:</h5>
<p className="list-item2">Beatriz Tavares.
</p>

<h5 className="list-title">Melhores atletas brasileiros no esporte na edição de 2024 (Paris - França):</h5>
<p className="list-item2">Nenhum atleta brasileiro conquistou medalha na modalidade nesta edição.


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

export default  ThirdSectionRemoMobile;