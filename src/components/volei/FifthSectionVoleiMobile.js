import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import { Link } from 'react-router-dom';



function FifthSectionVoleiMobile () {
    return (

<section className="geralResults">
  
  <h4 className="item-title">Todas as medalhas de atletas brasileiros nesse esporte em todas as olímpiadas:
  </h4>
  <table>


  

  
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1992(Barcelona - Espanha) </p></td>
    <td className="columnParis"><p className="paris-item">Seleção Brasileira masculina de Vôlei.

  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2004(Atenas - Grécia)</p></td>
    <td className="columnParis"><p className="paris-item"> Seleção Brasileira masculina de Vôlei.
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2008(Pequim - China)</p></td>
    <td className="columnParis"><p className="paris-item">Seleção Brasileira feminina de Vôlei.



  
  
  
    </p></td>
  </tr>
  

  

  
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2012(Londres - Inglaterra)</p></td>
    <td className="columnParis"><p className="paris-item"> Seleção Brasileira feminina de Vôlei

    </p></td>
  </tr>
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Masculino</p></td>
    <td className="columnParis"><p className="paris-item"> 2016(Rio de Janeiro - Brasil </p></td>
    <td className="columnParis"><p className="paris-item">Seleção Brasileira masculina de Vôlei.



    </p></td>
  </tr>
<tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Masculino</p></td>
    <td className="columnParis"><p className="paris-item"> 1984(Los Angeles - EUA)</p></td>
    <td className="columnParis"><p className="paris-item">Seleção Brasileira masculina de Vôlei.



    </p></td>
  </tr>  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2008(Pequim - China) </p></td>
    <td className="columnParis"><p className="paris-item">Seleção Brasileira masculina de Vôlei.



    </p></td>
  </tr>  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Masculino</p></td>
    <td className="columnParis"><p className="paris-item"> 2012(Londres - Inglaterra) </p></td>
    <td className="columnParis"><p className="paris-item">Seleção Brasileira masculina de Vôlei.



    </p></td>
  </tr>  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2020(Tóquio - Japão) </p></td>
    <td className="columnParis"><p className="paris-item">Seleção Brasileira feminina de Vôlei.



    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Feminino</p></td>
    <td className="columnParis"><p className="paris-item">1996(Atlanta - EUA)</p></td>
    <td className="columnParis"><p className="paris-item">Seleção Brasileira feminina de Vôlei.



    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2000(Sydney - Austrália)</p></td>
    <td className="columnParis"><p className="paris-item">Seleção Brasileira feminina de Vôlei.



    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2024(França - Paris)</p></td>
    <td className="columnParis"><p className="paris-item">Seleção Brasileira feminina de Vôlei.



    </p></td>
  </tr>
  </table>
  <p className="total-paris">Total: 5 ouro(s), 4 prata(s), 3 bronze(s), 12 medalha(s) ao todo, sendo o 6º esporte que mais gerou medalhas para o Brasil.</p>
  
  <Link to='/modalidades'>
   <button className="edicoesBtn">Todas as Modalidades</button>
   </Link>
  
  
  </section>

    );
}

export default FifthSectionVoleiMobile;