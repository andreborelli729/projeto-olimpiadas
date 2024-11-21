import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import brasilImg from '../../img/brasil.avif';
import { Link } from 'react-router-dom';




function ThirdSection2000SydneiMobile() {
    return (

<section className="parisResults">
  <div className="parisFirst">  
<h4 className="item-title">Melhores atletas brasileiros na edição de 2000(Sydnei - Austrália):</h4>
<table className="parisTable">

<tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
  </img></td>
  <td className="columnParis"><p className="paris-item">Judô(Peso Leve -73kg Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Tiago Camilo.



</p></td>
</tr>
<tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
  </img></td>
  <td className="columnParis"><p className="paris-item">Judô(Peso Médio -90kg Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Carlos Honorato.



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
  <td className="columnParis"><p className="paris-item">Vôlei de Prai(Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Ricardo Santos e Zé Marco Melo.




</p></td>
</tr>

<tr>
<td><img src={prata} className="parisMedal" alt="medalha de prata">
</img></td>
  <td className="columnParis"><p className="paris-item">Vela(Classe Laser)</p></td>
  <td className="columnParis"><p className="paris-item">Robert Scheidt.




</p></td>
</tr>


<tr>
<td><img src={prata} className="parisMedal" alt="medalha de prata">
</img></td>
  <td className="columnParis"><p className="paris-item">Atletismo(4x100m Rasos Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">André Domingos, Claudinei Quirino, Cláudio Roberto Souza, Édson Luciano, Vicente Lenílson.




</p></td>
</tr>

<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Natação(4x100m Livre)</p></td>
  <td className="columnParis"><p className="paris-item">Carlos Jayme, Edvaldo Valério, Fernando Scherer, Gustavo Borges.





</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Hipismo(Salto Por Equipes Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Álvaro Doda de Miranda Neto, André Johannpeter, Luiz Felipe de Azevedo, Rodrigo Pessoa.





</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vôlei de Praia(Feminino)</p></td>
  <td className="columnParis"><p className="paris-item"> Adriana Samuel e Sandra Pires.




</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vela(Classe Star Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Marcelo Ferreira e Torben Grael.




</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vôlei(Feminino)</p></td>
  <td className="columnParis"><p className="paris-item">Seleção Brasileira Feminina de Vôlei.




</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Basquete(Feminino)</p></td>
  <td className="columnParis"><p className="paris-item"> Seleção Brasileira Feminina de Basquete.




</p></td>
</tr>




</table>

<p className="sportParagraph">Total: 0 ouro(s), 6 prata(s), 6 bronze(s), 12 medalha(s) ao todo, sendo o 52º país no resultado geral desta edição.</p>


<img src={brasilImg} className="parisBrasil" alt="Bandeira do Brasil"></img>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edições</button>
   </Link>
</div>
</section>

    );

}


export default ThirdSection2000SydneiMobile;