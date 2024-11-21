import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import brasilImg from '../../img/brasil.avif';




function ForthSectionJudoMobile() {
    return (

<section className="parisResults">
  <div className="parisFirst">
<h4 className="item-title">Melhores atletas brasileiros no esporte na edição de 2024 (Paris - França):</h4>
<table className="parisTable">
<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Peso Pesado Feminino</p></td>
  <td className="columnParis"><p className="paris-item">Beatriz Souza.</p></td>
</tr>


<tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
  </img></td>
  <td className="columnParis"><p className="paris-item">Peso Meio Leve Masculino</p></td>
  <td className="columnParis"><p className="paris-item">Willian Lima.</p></td>
</tr>

<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Equipes</p></td>
  <td className="columnParis"><p className="paris-item">Beatriz Souza, Daniel Cargnin, Guilherme Schimidt, Ketleyn Quadros, Larissa Pimenta, Leonardo Gonçalves, Rafael Macedo, Rafael Silva, Rafaela Silva, Willian Lima.
  </p></td>
</tr>


</table>
<img src={brasilImg} className="parisBrasil" alt="Bandeira do Brasil"></img>

</div>
</section>

    );

}


export default ForthSectionJudoMobile;