import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import brasilImg from '../../img/brasil.avif';
import { Link } from 'react-router-dom';




function ThirdSection1980UrssMobile() {
    return (

<section className="parisResults">
  <div className="parisFirst">
<h4 className="item-title">Melhores atletas brasileiros na edição de 1980 (Moscou - Antiga URSS):</h4>
<table className="parisTable">

<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vela(Classe 470 Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Eduardo Penido e Marcos Soares.



</p></td>
</tr>
<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vela(Classe Tornado Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Alexandre Welter e Lars Björkström.



</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Natação(4x200m Livre Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Cyro Delgado, Djan Madruga, Jorge Fernandes, Marcus Mattioli.



</p></td>
</tr>

<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Atletismo(Salto Triplo Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">João Carlos de Oliveira.



</p></td>
</tr>

</table>
<p className="sportParagraph">Total: 2 ouro(s), 0 prata(s), 2 bronze(s), 4 medalha(s) ao todo, sendo o 17º país no resultado geral desta edição.</p>


<img src={brasilImg} className="parisBrasil" alt="Bandeira do Brasil"></img>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edições</button>
   </Link>
</div>
</section>

    );

}


export default ThirdSection1980UrssMobile;