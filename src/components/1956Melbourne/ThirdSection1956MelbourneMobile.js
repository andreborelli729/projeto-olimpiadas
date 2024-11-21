import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import brasilImg from '../../img/brasil.avif';
import { Link } from 'react-router-dom';



function ThirdSection1956MelbourneMobile () {
    return (

<section className="parisResults">
  <div className="parisFirst">
<h4 className="item-title">Melhores atletas brasileiros na edição de 1956 (Melbourne - Austrália):</h4>
<table className="parisTable">

<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Atletismo(Salto Triplo Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Adhemar Ferreira da Silva.


</p></td>
</tr>

</table>
<p className="sportParagraph">Total: 1 ouro(s), 0 prata(s), 0 bronze(s), 1 medalha(s) ao todo, sendo o 24º país no resultado geral desta edição.</p>


<img src={brasilImg} className="parisBrasil" alt="Bandeira do Brasil"></img>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edições</button>
   </Link>
</div>
</section>

    );

}


export default ThirdSection1956MelbourneMobile;