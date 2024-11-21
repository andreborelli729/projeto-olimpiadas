import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import { Link } from 'react-router-dom';



function FifthSectionSkateMobile () {
    return (

<section className="geralResults">
  
  <h4 className="item-title">Todas as medalhas de atletas brasileiros nesse esporte em todas as olímpiadas:
  </h4>
  <table>


  

  
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Street Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2020(Tóquio - Japão) </p></td>
    <td className="columnParis"><p className="paris-item">Kelvin Hoefler.

  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Steet Feminino </p></td>
    <td className="columnParis"><p className="paris-item">2020(Tóquio - Japão)</p></td>
    <td className="columnParis"><p className="paris-item"> Rayssa Leal.
  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Park Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2020(Tóquio -Japão)</p></td>
    <td className="columnParis"><p className="paris-item">Pedro Barros.


  
  
  
    </p></td>
  </tr>
  

  

  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Street Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2024(França - Paris)</p></td>
    <td className="columnParis"><p className="paris-item"> Rayssa Leal.

    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Park Masculino</p></td>
    <td className="columnParis"><p className="paris-item"> 2024(França - Paris) </p></td>
    <td className="columnParis"><p className="paris-item">Augusto Akio.


    </p></td>
  </tr>
  
 
  </table>
  <p className="total-paris">Total: 0 ouro(s), 3 prata(s), 2 bronze(s), 5 medalha(s) ao todo, sendo o 11º esporte que mais gerou medalhas para o Brasil.</p>
  
  <Link to='/modalidades'>
   <button className="edicoesBtn">Todas as Modalidades</button>
   </Link>
  
  
  </section>

    );
}

export default FifthSectionSkateMobile;