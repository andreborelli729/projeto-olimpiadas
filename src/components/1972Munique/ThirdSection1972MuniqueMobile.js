import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import brasilImg from '../../img/brasil.avif';
import { Link } from 'react-router-dom';




function ThirdSection1972MuniqueMobile() {
    return (

<section className="parisResults">
  <div className="parisFirst">
<h4 className="item-title">Melhores atletas brasileiros na edição de 1972 (Munique - Alemanha):</h4>
<table className="parisTable">


<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Atletismo(Salto Triplo Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Nelson Prudêncio.



</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Judo(Peso Meio Pesado -93kg Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Chiaki Ishii.



</p></td>
</tr>

</table>
<p className="sportParagraph">Total: 0 ouro(s), 0 prata(s), 2 bronze(s), 2 medalha(s) ao todo, sendo o 41º país no resultado geral desta edição.</p>


<img src={brasilImg} className="parisBrasil" alt="Bandeira do Brasil"></img>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edições</button>
   </Link>
</div>
</section>

    );

}


export default ThirdSection1972MuniqueMobile;