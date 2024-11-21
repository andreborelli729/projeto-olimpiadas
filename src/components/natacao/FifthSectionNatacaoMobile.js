import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import { Link } from 'react-router-dom';



function FifthSectionNatacaoMobile () {
    return (

<section className="geralResults">
  
  <h4 className="item-title">Todas as medalhas de atletas brasileiros nesse esporte em todas as olímpiadas:
  </h4>
  <table>
  <tr>
    <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">50m livre Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2008(Pequim - China) </p></td>
    <td className="columnParis"><p className="paris-item">César Cielo.
    </p></td>
  </tr>
  <tr>
    <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">400m medley Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1984(Los Angeles - EUA)</p></td>
    <td className="columnParis"><p className="paris-item">Ricardo Prado.</p></td>
  </tr>


  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">100m livre Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1992(Barcelona - Espanha)</p></td>
    <td className="columnParis"><p className="paris-item">Gustavo Borges.

  
    </p></td>
  </tr>
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">200m livre Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1996(Atlanta - EUA )</p></td>
    <td className="columnParis"><p className="paris-item">Gustavo Borges.

    </p></td>
  </tr>
  
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">400m medley Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2012(Londres - Inglaterra)</p></td>
    <td className="columnParis"><p className="paris-item">Thiago Pereira.

  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">1500m livre Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1952(Helsinque - Finlândia) </p></td>
    <td className="columnParis"><p className="paris-item">Tetsuo Okamoto.

  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">100m livre Masculino </p></td>
    <td className="columnParis"><p className="paris-item">1960(Roma - Itália)</p></td>
    <td className="columnParis"><p className="paris-item"> Manuel dos Santos Júnior.

  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">4x200m livre Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1980(Moscou - URSS)</p></td>
    <td className="columnParis"><p className="paris-item">Cyro Delgado, Djan Madruga, Jorge Fernandes, Marcus Mattioli.


  
  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">50m livre Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1996(Atlanta - EUA) </p></td>
    <td className="columnParis"><p className="paris-item"> Fernando Scherer.



  
  
  
    </p></td>
  </tr>
  

  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">100m livre Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1996(Atlanta - EUA)</p></td>
    <td className="columnParis"><p className="paris-item"> Gustavo Borges.

    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">4x100 livre Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2000(Sydney - Austrália)</p></td>
    <td className="columnParis"><p className="paris-item">Carlos Jayme, Edvaldo Valério, Fernando Scherer, Gustavo Borges.



    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">100m livre Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2008(Pequim - China)</p></td>
    <td className="columnParis"><p className="paris-item">César Cielo.


    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">50m livre Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2012(Londres - Inglaterra)</p></td>
    <td className="columnParis"><p className="paris-item">César Cielo.


    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">50m livre Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2020(Tóquio - Japão)</p></td>
    <td className="columnParis"><p className="paris-item"> Bruno Fratus.

    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">200m livre Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2020(Tóquio - Japão)</p></td>
    <td className="columnParis"><p className="paris-item"> Fernando Scheffer.

    </p></td>
  </tr>
  
 
  </table>
  <p className="total-paris">Total: 1 ouro(s), 4 prata(s), 10 bronze(s), 15 medalha(s) ao todo, sendo o 4º esporte que mais gerou medalhas para o Brasil.</p>
  
  <Link to='/modalidades'>
   <button className="edicoesBtn">Todas as Modalidades</button>
   </Link>
  
  
  </section>

    );
}

export default FifthSectionNatacaoMobile;