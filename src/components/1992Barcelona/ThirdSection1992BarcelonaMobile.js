import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import brasilImg from '../../img/brasil.avif';
import { Link } from 'react-router-dom';



function ThirdSection1992BarcelonaMobile() {
    return (

<section className="parisResults">
  <div className="parisFirst">  
<h4 className="item-title">Melhores atletas brasileiros na edição de 1992 (Barcelona - Espanha):</h4>
<table className="parisTable">

<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Judô(Peso Meio Leve -65kg Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Rogério Sampaio.



</p></td>
</tr>
<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vôlei(Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Seleção Brasileira masculina de Vôlei.



</p></td>
</tr>
<tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
  </img></td>
  <td className="columnParis"><p className="paris-item">Natação(100m Livre Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Gustavo Borges.




</p></td>
</tr>




</table>
<p className="sportParagraph">Total: 2 ouro(s), 1 prata(s), 0 bronze(s), 3 medalha(s) ao todo, sendo o 25º país no resultado geral desta edição.</p>


<img src={brasilImg} className="parisBrasil" alt="Bandeira do Brasil"></img>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edições</button>
   </Link>
</div>
</section>

    );

}


export default ThirdSection1992BarcelonaMobile;