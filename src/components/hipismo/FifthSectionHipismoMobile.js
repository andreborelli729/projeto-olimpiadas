import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import { Link } from 'react-router-dom';



function FifthSectionHipismoMobile () {
    return (

<section className="geralResults">
  
  <h4 className="item-title">Todas as medalhas de atletas brasileiros nesse esporte em todas as olímpiadas:
  </h4>
  <table>
  <tr>
    <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Salto Individual Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2004(Atenas - Grécia)</p></td>
    <td className="columnParis"><p className="paris-item">Rodrigo Pessoa.
    </p></td>
  </tr>
  <tr>
    <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Salto por Equipes Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1996(Atlanta - EUA)</p></td>
    <td className="columnParis"><p className="paris-item">Álvaro Doda de Miranda Neto, André Johannpeter, Luiz Felipe de Azevedo, Rodrigo Pessoa.
    </p></td>
  </tr>


  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Salto por Equipes Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2000(Sydney - Austrália)</p></td>
    <td className="columnParis"><p className="paris-item">Álvaro Doda de Miranda Neto, André Johannpeter, Luiz Felipe de Azevedo, Rodrigo Pessoa.


  
    </p></td>
  </tr>
 
  


 
  </table>
  <p className="total-paris">Total: 1 ouro(s), 0 prata(s), 2 bronze(s), 3 medalha(s) ao todo, sendo o 15º esporte que mais gerou medalhas para o Brasil.</p>
  
  
  <Link to='/modalidades'>
   <button className="edicoesBtn">Todas as Modalidades</button>
   </Link>
  
  </section>

    );
}

export default FifthSectionHipismoMobile;