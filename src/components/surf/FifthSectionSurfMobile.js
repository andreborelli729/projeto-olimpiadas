import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import { Link } from 'react-router-dom';



function FifthSectionSurfMobile () {
    return (

<section className="geralResults">
  
  <h4 className="item-title">Todas as medalhas de atletas brasileiros nesse esporte em todas as olímpiadas:
  </h4>
  <table>


  

  
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Surfe Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2020(Tóquio - Japão)</p></td>
    <td className="columnParis"><p className="paris-item">Ítalo Ferreira.

  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Surfe Feminino </p></td>
    <td className="columnParis"><p className="paris-item">2024(Paris - França)</p></td>
    <td className="columnParis"><p className="paris-item"> Tatiana Weston-Webb
  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Surfe Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2024(Paris - França)</p></td>
    <td className="columnParis"><p className="paris-item">Gabriel Medina.


  
  
  
    </p></td>
  </tr>
  

  

  
  
  
 
  </table>
  <p className="total-paris">Total: 1 ouro(s), 1 prata(s), 1 bronze(s), 3 medalha(s) ao todo, sendo o 14º esporte que mais gerou medalhas para o Brasil.</p>
  
  
  <Link to='/modalidades'>
   <button className="edicoesBtn">Todas as Modalidades</button>
   </Link>
  
  </section>

    );
}

export default  FifthSectionSurfMobile ;