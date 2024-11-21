import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import brasilImg from '../../img/brasil.avif';
import { Link } from 'react-router-dom';



function ThirdSection1988SeulMobile() {
    return (

<section className="parisResults">
  <div className="parisFirst">  
<h4 className="item-title">Melhores atletas brasileiros na edição de 1988 (Seul - Coréia do Sul):</h4>
<table className="parisTable">

<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Judô(Peso Meio Pesado -95kg Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Aurélio Miguel.



</p></td>
</tr>
<tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
  </img></td>
  <td className="columnParis"><p className="paris-item">Atletismo(800m Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Joaquim Cruz.



</p></td>
</tr>
<tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
  </img></td>
  <td className="columnParis"><p className="paris-item">Futebol(Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Seleção Brasileira masculina de Futebol.




</p></td>
</tr>



<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vela(Classe Star Masculina)</p></td>
  <td className="columnParis"><p className="paris-item">Nelson Falcão e Torben Grael.


</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vela(Classe Tornado)</p></td>
  <td className="columnParis"><p className="paris-item">Clinio Freitas e Lars Grael.


</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Atletismo(200m Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Robson Caetano.


</p></td>
</tr>
</table>
<p className="sportParagraph">Total: 1 ouro(s), 2 prata(s), 3 bronze(s), 6 medalha(s) ao todo, sendo o 24º país no resultado geral desta edição.</p>


<img src={brasilImg} className="parisBrasil" alt="Bandeira do Brasil"></img>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edições</button>
   </Link>
</div>
</section>

    );

}


export default ThirdSection1988SeulMobile;