import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import { Link } from 'react-router-dom';



function FifthSectionVoleiDePraiaMobile () {
    return (

<section className="geralResults">
  
  <h4 className="item-title">Todas as medalhas de atletas brasileiros nesse esporte em todas as olímpiadas:
  </h4>
  <table>


  

  
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Feminino</p></td>
    <td className="columnParis"><p className="paris-item">1996(Atlanta - EUA)</p></td>
    <td className="columnParis"><p className="paris-item">Jaqueline Silva e Sandra Pires.

  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2004(Atenas - Grécia)</p></td>
    <td className="columnParis"><p className="paris-item"> Emanuel Rego e Ricardo Santos.
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item"> Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2016(Rio de Janeiro - Brasil)</p></td>
    <td className="columnParis"><p className="paris-item">Alison Cerutti e Bruno Schmidt.



  
  
  
    </p></td>
  </tr>
  

  

  
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2024(Paris - França)</p></td>
    <td className="columnParis"><p className="paris-item"> Ana Patrícia Ramos e Duda Lisboa.

    </p></td>
  </tr>
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Feminino</p></td>
    <td className="columnParis"><p className="paris-item"> 1996(Atlanta - EUA)</p></td>
    <td className="columnParis"><p className="paris-item">Adriana Samuel e Mônica Rodrigues.



    </p></td>
  </tr>
<tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata"> 
    </img></td>
    <td className="columnParis"><p className="paris-item"> Feminino </p></td>
    <td className="columnParis"><p className="paris-item"> 2000(Sydney - Austrália)</p></td>
    <td className="columnParis"><p className="paris-item">Adriana Behar e Shelda Bedê.



    </p></td>
  </tr>  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2000(Sydney - Austrália) </p></td>
    <td className="columnParis"><p className="paris-item">Ricardo Santos e Zé Marco Melo.



    </p></td>
  </tr>  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Feminino</p></td>
    <td className="columnParis"><p className="paris-item"> 2004(Atenas - Grécia) </p></td>
    <td className="columnParis"><p className="paris-item">Adriana Behar e Shelda Bedê.




    </p></td>
  </tr>  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2008(Pequim - China) </p></td>
    <td className="columnParis"><p className="paris-item">Fabio Luiz Magalhães e Márcio Araújo.




    </p></td>
  </tr>
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2012(Londres - Inglaterra)</p></td>
    <td className="columnParis"><p className="paris-item">Alison Cerutti e Emanuel Rego.




    </p></td>
  </tr>
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2016(Rio de Janeiro - Brasil)</p></td>
    <td className="columnParis"><p className="paris-item">Ágatha Bednarczuk e Bárbara Seixas.




    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2000(Sydney - Austrália)</p></td>
    <td className="columnParis"><p className="paris-item">Adriana Samuel e Sandra Pires.




    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2008(Pequim - China)</p></td>
    <td className="columnParis"><p className="paris-item">Emanuel Rego e Ricardo Santos.




    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2012(Londres - Inglaterra)</p></td>
    <td className="columnParis"><p className="paris-item">Juliana Silva e Larissa França.





    </p></td>
  </tr>

  </table>
  <p className="total-paris">Total: 4 ouro(s), 7 prata(s), 3 bronze(s), 14 medalha(s) ao todo, sendo o 5º esporte que mais gerou medalhas para o Brasil.</p>
  
  
  <Link to='/modalidades'>
   <button className="edicoesBtn">Todas as Modalidades</button>
   </Link>
  
  </section>

    );
}

export default FifthSectionVoleiDePraiaMobile;