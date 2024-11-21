import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import brasilImg from '../../img/brasil.avif';
import { Link } from 'react-router-dom';




function ThirdSection1960RomaMobile () {
    return (

<section className="parisResults">
  <div className="parisFirst">
<h4 className="item-title">Melhores atletas brasileiros na edição de 1960 (Roma - Itália):</h4>
<table className="parisTable">

<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Natação(100m Livre Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Manuel dos Santos Júnior.


</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Basquete(Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Seleção Brasileira masculina de Basquete.


</p></td>
</tr>

</table>
<p className="sportParagraph">Total: 0 ouro(s), 0 prata(s), 2 bronze(s), 2 medalha(s) ao todo, sendo o 39º país no resultado geral desta edição.</p>


<img src={brasilImg} className="parisBrasil" alt="Bandeira do Brasil"></img>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edições</button>
   </Link>
</div>
</section>

    );

}


export default ThirdSection1960RomaMobile;