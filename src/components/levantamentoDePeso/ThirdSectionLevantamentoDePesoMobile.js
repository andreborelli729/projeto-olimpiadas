import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';


function ThirdSectionLevantamentoDePesoMobile() {
    return(

<section className="thirdSection">
<div className="thirdSectionColumn1">
<ul>
<h4 className="list-title">Modalidades de Levantamento de Peso</h4>
<p className="list-title">Masculino</p>

<li className="list-item">Arranco: até 61 kg, 73 kg, 89 kg, 102 kg, +102 kg;
</li>
<li className="list-item">Arremesso: até 61 kg, 73 kg, 89 kg, 102 kg.
</li>



</ul>
<ul><p className="list-title">Feminino:</p>

<li className="list-item">Arranco: até 49 kg, 59 kg, 71 kg, 81 kg, +81 kg;

</li>
<li className="list-item">Arremesso: até 49 kg, 59 kg, 71 kg, 81 kg, +81 kg.
</li>



</ul>



</div>
<div className="thirdSectionColumn2">

<h4 className="list-title">Nossos Atletas</h4>
<h5 className="list-title">Masculino:</h5>
<p className="list-item2">Daniel Cargnin, Guilherme Schimidt, Leonardo Gonçalves, Michel Augusto, Rafael Macedo, Rafael Silva, William Lima.</p>

<h5 className="list-title">Feminino:</h5>
<p className="list-item2">Amanda Schott, Laura Amaro.

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

export default ThirdSectionLevantamentoDePesoMobile;