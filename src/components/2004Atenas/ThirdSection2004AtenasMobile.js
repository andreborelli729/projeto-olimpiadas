import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import brasilImg from '../../img/brasil.avif';
import { Link } from 'react-router-dom';




function ThirdSection2004AtenasMobile() {
    return (

<section className="parisResults">
  <div className="parisFirst">  
<h4 className="item-title">Melhores atletas brasileiros na edição de 2004(Atenas - Grécia):</h4>
<table className="parisTable">

<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vela(Classe Laser Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Robert Scheidt.



</p></td>
</tr>
<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vôlei de Praia(Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Emanuel Rego e Ricardo Santos.



</p></td>
</tr>
<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Hipismo(Salto Índividual Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Rodrigo Pessoa.



</p></td>
</tr>
<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vela(Classe Star Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Marcelo Ferreira e T.orben Grael.



</p></td>
</tr>
<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vôlei(Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Seleção Brasileira Masculina de Vôlei.



</p></td>
</tr>
<tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vôlei de Praia(Feminino)</p></td>
  <td className="columnParis"><p className="paris-item">Adriana Behar e Shelda Bedê.



</p></td>
</tr>
<tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
  </img></td>
  <td className="columnParis"><p className="paris-item">Futebol(Feminino)</p></td>
  <td className="columnParis"><p className="paris-item">Seleção Brasileira Feminina de Futebol.




</p></td>
</tr>


<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Judô(Peso Leve -73kg Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Leandro Guilheiro.





</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Judô(Peso Médio -81kg Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Flávio Canto.





</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Atletismo(Maratona Masculina)</p></td>
  <td className="columnParis"><p className="paris-item"> Vanderlei Cordeiro de Lima.






</p></td>
</tr>




</table>

<p className="sportParagraph">Total: 5 ouro(s), 2 prata(s), 3 bronze(s), 10 medalha(s) ao todo, sendo o 16º país no resultado geral desta edição.</p>


<img src={brasilImg} className="parisBrasil" alt="Bandeira do Brasil"></img>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edições</button>
   </Link>
</div>
</section>

    );

}


export default ThirdSection2004AtenasMobile;