import React from 'react';
import '../../index.css';



function ThirdSectionJudoMobile() {
    return(

<section className="thirdSection">
<div className="thirdSectionColumn1">
<ul>
<h4 className="list-title">Modalidade(s) do Judô:</h4>
<p className="list-title">Masculino:</p>

<li className="list-item">Peso Leve (-73kg);</li>
<li className="list-item">Peso Médio (-90kg);</li>
<li className="list-item">Peso Pesado(+100kg).</li>



</ul>
<ul>
<p className="list-title">Feminino:</p>
<li className="list-item">Peso Leve (-57kg);</li>
<li className="list-item">Peso Médio (-70kg);</li>
<li className="list-item">Peso Pesado(+78kg).</li>




</ul>
</div>
<div className="thirdSectionColumn2">

<h4 className="list-title">Nossos Atletas</h4>
<h5 className="list-title">Masculino:</h5>
<p className="list-item2">Daniel Cargnin, Guilherme Schimidt, Leonardo Gonçalves, Michel Augusto, Rafael Macedo, Rafael Silva “Baby", Willian Lima.</p>

<h5 className="list-title">Feminino:</h5>
<p className="list-item2">Beatriz Souza, Ketleyn Quadros, Larissa Pimentel, Mayra Aguiar, Natasha Ferreira, Rafaela Silva. </p>

</div>


</section>
    );
}

export default ThirdSectionJudoMobile;