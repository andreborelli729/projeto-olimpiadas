import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import brasilImg from '../../img/brasil.avif';
import { Link } from 'react-router-dom';




function ThirdSection1920AntuerpiaMobile() {
    return (

<section className="parisResults">
  <div className="parisFirst">
<h4 className="item-title">Melhores atletas brasileiros na edição de 1920 (Antuérpia - Bélgica):</h4>
<table className="parisTable">
<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Tiro Esportivo(Pistola Rápida 25m)</p></td>
  <td className="columnParis"><p className="paris-item">Guilherme Paraense</p></td>
</tr>
<tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
  </img></td>
  <td className="columnParis"><p className="paris-item">Tiro Esportivo(Pistola Livre 50m)</p></td>
  <td className="columnParis"><p className="paris-item">Afrânio da Costa</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Tiro Esportivo (Pistola Livre 50m por Equipe)</p></td>
  <td className="columnParis"><p className="paris-item">Afrânio da Costa, Dario Barbosa, Fernando Soledade, Guilherme Paraense, Sebastião Wolf

</p></td>
</tr>

</table>
<p className="sportParagraph">Total: 1 ouro(s), 1 prata(s), 1 bronze(s), 3 medalha(s) ao todo, sendo o 15º país no resultado geral desta edição.</p>

<img src={brasilImg} className="parisBrasil" alt="Bandeira do Brasil"></img>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edições</button>
   </Link>
</div>
</section>

    );

}


export default ThirdSection1920AntuerpiaMobile;