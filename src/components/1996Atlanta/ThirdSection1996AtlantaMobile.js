import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import brasilImg from '../../img/brasil.avif';
import { Link } from 'react-router-dom';




function ThirdSection1996AtlantaMobile() {
    return (

<section className="parisResults">
  <div className="parisFirst">  
<h4 className="item-title">Melhores atletas brasileiros na edição de 1996 (Atlanta - EUA):</h4>
<table className="parisTable">

<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vôlei de Praia(Feminino)</p></td>
  <td className="columnParis"><p className="paris-item">Jaqueline Silva e Sandra Pires.



</p></td>
</tr>
<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vela(Classe Star Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Marcelo Ferreira e Torben Grael.



</p></td>
</tr>
<tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vela(Classe Laser Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Robert Scheidt.




</p></td>
</tr>
<tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
  </img></td>
  <td className="columnParis"><p className="paris-item">Natação(200m Livre Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Gustavo Borges.




</p></td>
</tr>

<tr>
<td><img src={prata} className="parisMedal" alt="medalha de prata">
</img></td>
  <td className="columnParis"><p className="paris-item">Vôlei de Praia(Feminino)</p></td>
  <td className="columnParis"><p className="paris-item">Adriana Samuel e Mônica Rodrigues.




</p></td>
</tr>


<tr>
<td><img src={prata} className="parisMedal" alt="medalha de prata">
</img></td>
  <td className="columnParis"><p className="paris-item">Basquete(Feminino)</p></td>
  <td className="columnParis"><p className="paris-item">Seleção Brasileira Feminina de Basquete




</p></td>
</tr>

<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Judô(Peso Meio Pesado -95kg Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Aurélio Miguel




</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Natacao(100m Livre Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Gustavo Borges.




</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Judô(Peso Meio Leve -65kg)</p></td>
  <td className="columnParis"><p className="paris-item">Henrique Guimarães.




</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Natacao(50m Livre Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Fernando Scherer.




</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Vela(Classe Tornado Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Kiko Pelicano e Lars Grael.




</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Hipismo(Salto por Equipes Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Álvaro Doda de Miranda Neto, André Johannpeter, Luiz Felipe de Azevedo, Rodrigo Pessoa.




</p></td>
</tr>
<tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
  </img></td>
  <td className="columnParis"><p className="paris-item">Futebol(Masculino)</p></td>
  <td className="columnParis"><p className="paris-item">Seleção Brasileira Masculina de Futebol.





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
  <td className="columnParis"><p className="paris-item">Atletismo(4x100m rasos)</p></td>
  <td className="columnParis"><p className="paris-item">André Domingos, Arnaldo Oliveira, Edson Luciano, Robson Caetano.






</p></td>
</tr>



</table>

<p className="sportParagraph">Total: 3 ouro(s), 3 prata(s), 9 bronze(s), 15 medalha(s) ao todo, sendo o 25º país no resultado geral desta edição.</p>


<img src={brasilImg} className="parisBrasil" alt="Bandeira do Brasil"></img>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edições</button>
   </Link>
</div>
</section>

    );

}


export default ThirdSection1996AtlantaMobile;