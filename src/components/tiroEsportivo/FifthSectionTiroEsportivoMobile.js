import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import { Link } from 'react-router-dom';



function FifthSectionTiroEsportivoMobile () {
    return (

<section className="geralResults">
  
  <h4 className="item-title">Todas as medalhas de atletas brasileiros nesse esporte em todas as olímpiadas:
  </h4>
  <table>

  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Pistola Rápida 25m</p></td>
    <td className="columnParis"><p className="paris-item">1920(Antuérpia -  Bélgica)</p></td>
    <td className="columnParis"><p className="paris-item">Guilherme Paraense.


  
  
  
    </p></td>
  </tr><tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Pistola Livre 50m</p></td>
    <td className="columnParis"><p className="paris-item">1920(Antuérpia -  Bélgica)</p></td>
    <td className="columnParis"><p className="paris-item">Afrânio da Costa.


  
  
  
    </p></td>
  </tr><tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Pistola de ar 10m</p></td>
    <td className="columnParis"><p className="paris-item">2016(Rio de Janeiro - Brasil)</p></td>
    <td className="columnParis"><p className="paris-item">Felipe Wu.


  
  
  
    </p></td>
  </tr>
  

  

  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Pistola Livre 50m por Equipe</p></td>
    <td className="columnParis"><p className="paris-item">1920(Antuérpia -  Bélgica)</p></td>
    <td className="columnParis"><p className="paris-item">Afrânio da Costa, Dario Barbosa, Fernando Soledade, Guilherme Paraense, Sebastião Wolf.



  
  
  
    </p></td>
  </tr>
  

  

  
  
  
 
  </table>
  <p className="total-paris">Total: 1 ouro(s), 2 prata(s), 1 bronze(s), 4 medalha(s) ao todo, sendo o 13º esporte que mais gerou medalhas para o Brasil.</p>
  <Link to='/modalidades'>
   <button className="edicoesBtn">Todas as Modalidades</button>
   </Link>
  
  
  
  </section>

    );
}

export default  FifthSectionTiroEsportivoMobile;