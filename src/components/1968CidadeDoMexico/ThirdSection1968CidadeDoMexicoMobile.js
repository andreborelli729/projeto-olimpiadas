import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import brasilImg from '../../img/brasil.avif';
import { Link } from 'react-router-dom';



function ThirdSection1968CidadeDoMexicoMobile() {
    return (

<section className="parisResults">
  <div className="parisFirst">
<h4 className="item-title">Melhores atletas brasileiros na edição de 1968 (Cidade do México - México):</h4>
<table className="parisTable">

<tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
  </img></td>
  <td className="columnParis"><p className="paris-item">Atletismo(Salto Triplo Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Nelson Prudêncio.


</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vela (Classe Flying Dutchman Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Burkhard Cordes e Reinaldo Conrad.



</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Boxes(Peso Mosca -51kg Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Servílio de Oliveira.



</p></td>
</tr>

</table>
<p className="sportParagraph">Total: 0 ouro(s), 1 prata(s), 2 bronze(s), 3 medalha(s) ao todo, sendo o 35º país no resultado geral desta edição.</p>


<img src={brasilImg} className="parisBrasil" alt="Bandeira do Brasil"></img>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edições</button>
   </Link>
</div>
</section>

    );

}


export default ThirdSection1968CidadeDoMexicoMobile;