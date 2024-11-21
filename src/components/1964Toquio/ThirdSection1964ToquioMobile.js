import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import brasilImg from '../../img/brasil.avif';
import { Link } from 'react-router-dom';



function ThirdSection1964ToquioMobile() {
    return (

<section className="parisResults">
  <div className="parisFirst">
<h4 className="item-title">Melhores atletas brasileiros na edição de 1964 (Tóquio - Japão):</h4>
<table className="parisTable">


<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Basquete(Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Seleção Brasileira masculina de Basquete.


</p></td>
</tr>

</table>
<p className="sportParagraph">Total: 0 ouro(s), 0 prata(s), 1 bronze(s), 1 medalha(s) ao todo, sendo o 35º país no resultado geral desta edição.</p>


<img src={brasilImg} className="parisBrasil" alt="Bandeira do Brasil"></img>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edições</button>
   </Link>
</div>
</section>

    );

}

export default ThirdSection1964ToquioMobile;