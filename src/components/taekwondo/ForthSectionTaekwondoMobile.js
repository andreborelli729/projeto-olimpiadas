import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import brasilImg from '../../img/brasil.avif';




function ForthSectionTaekwondoMobile() {
    return (

<section className="parisResults">
  <div className="parisFirst">
<h4 className="item-title">Melhores atletas brasileiros no esporte na edição de 2024 (Paris - França):</h4>
<table className="parisTable">

<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Peso Leve (-68kg) Masculino</p></td>
  <td className="columnParis"><p className="paris-item"> Edival Pontes.</p></td>
</tr>


</table>
<img src={brasilImg} className="parisBrasil" alt="Bandeira do Brasil"></img>

</div>
</section>

    );

}


export default ForthSectionTaekwondoMobile;