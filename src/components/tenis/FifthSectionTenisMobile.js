import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import { Link } from 'react-router-dom';



function FifthSectionTenisMobile () {
    return (

<section className="geralResults">
  
  <h4 className="item-title">Todas as medalhas de atletas brasileiros nesse esporte em todas as olímpiadas:
  </h4>
  <table>


  

  

  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Dupla Feminina</p></td>
    <td className="columnParis"><p className="paris-item">2020(Tóquio - Japão)</p></td>
    <td className="columnParis"><p className="paris-item">Laura Pigossi e Luisa Stefani.


  
  
  
    </p></td>
  </tr>
  

  

  
  
  
 
  </table>
  <p className="total-paris">Total: 0 ouro(s), 0 prata(s), 1 bronze(s), 1 medalha(s) ao todo, sendo o 18º esporte que mais gerou medalhas para o Brasil.</p>
  
  
  <Link to='/modalidades'>
   <button className="edicoesBtn">Todas as Modalidades</button>
   </Link>
  
  </section>

    );
}

export default  FifthSectionTenisMobile;