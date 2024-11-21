import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import medalhas from '../../medals/medalhas.png';
import { Link } from 'react-router-dom';


function FifthSectionUpdated () {
    return (

<section className="geralResults">
  
  <h4 className="item-title">Todas as medalhas de atletas brasileiros nesse esporte em todas as olímpiadas:
  </h4>
  <table>
  <tr>
    <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Argolas Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2012(Londres - Inglaterra)</p></td>
    <td className="columnParis"><p className="paris-item">Arthur Zanetti.
    </p></td>
  </tr>
  <tr>
    <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Salto sobre Mesa Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2020(Tóquio - Japão)</p></td>
    <td className="columnParis"><p className="paris-item">Rebeca Andrade.</p></td>
  </tr>


  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Solo feminino</p></td>
    <td className="columnParis"><p className="paris-item">2024(Paris - França)</p></td>
    <td className="columnParis"><p className="paris-item">Rebeca Andrade.

  
    </p></td>
  </tr>
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Solo masculino</p></td>
    <td className="columnParis"><p className="paris-item">2016(Rio de Janeiro - Brasil)</p></td>
    <td className="columnParis"><p className="paris-item">Diego Hypólito.

    </p></td>
  </tr>
  
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Argolas masculino</p></td>
    <td className="columnParis"><p className="paris-item">2016(Rio de Janeiro - Brasil)</p></td>
    <td className="columnParis"><p className="paris-item">Arthur Zanetti.

  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Individual Geral feminino</p></td>
    <td className="columnParis"><p className="paris-item">2020(Tóquio - Japão)</p></td>
    <td className="columnParis"><p className="paris-item">Rebeca Andrade.

  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Individual Geral feminino</p></td>
    <td className="columnParis"><p className="paris-item">2024(Paris - França)</p></td>
    <td className="columnParis"><p className="paris-item"> Rebeca Andrade.
  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Solo masculino</p></td>
    <td className="columnParis"><p className="paris-item">2016(Rio de Janeiro - Brasil)</p></td>
    <td className="columnParis"><p className="paris-item">Arthur Nory Mariano.

  
  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Disputa por Equipes feminino</p></td>
    <td className="columnParis"><p className="paris-item">2024(Paris - França)</p></td>
    <td className="columnParis"><p className="paris-item">Rebeca Andrade, Flávia Saraiva, Jade Barbosa, Júlia Soares e Lorrane Oliveira.

  
  
  
    </p></td>
  </tr>
  


 
  </table>
  <p className="total-paris">Total: 3 ouro(s), 5 prata(s), 2 bronze(s), 10 medalha(s) ao todo, sendo o 7º esporte que mais gerou medalhas para o Brasil.</p>
  
  <Link to='/modalidades'>
   <button className="edicoesBtn">Todas as Modalidades</button>
   </Link>
  
  
  </section>

    );
}

export default FifthSectionUpdated;