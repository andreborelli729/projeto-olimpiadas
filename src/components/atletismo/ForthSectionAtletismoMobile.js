import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import brasilImg from '../../img/brasil.avif';




function ForthSectionUpdated() {
    return (

<section className="parisResults">
  <div className="parisFirst">
<h4 className="item-title">Melhores atletas brasileiros no esporte na edição de 2024 (Paris - França):</h4>
<table className="parisTable">
<tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
  </img></td>
  <td className="columnParis"><p className="paris-item">Marcha Atlética</p></td>
  <td className="columnParis"><p className="paris-item">Caio Bonfim</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">400m com barreiras</p></td>
  <td className="columnParis"><p className="paris-item">Alison dos Santos</p></td>
</tr>

</table>
<img src={brasilImg} className="parisBrasil" alt="Bandeira do Brasil"></img>

</div>
</section>

    );

}


export default ForthSectionUpdated;