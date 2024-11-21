import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import { Link } from 'react-router-dom';



function FifthSectionJudoMobile () {
    return (

<section className="geralResults">
  
  <h4 className="item-title">Todas as medalhas de atletas brasileiros nesse esporte em todas as olímpiadas:
  </h4>
  <table>
  <tr>
    <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Pesado Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1988(Seul - Coréia do Sul) </p></td>
    <td className="columnParis"><p className="paris-item">Aurélio Miguel.
    </p></td>
  </tr>
  <tr>
    <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Meio Leve Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1992(Barcelona - Espanha)</p></td>
    <td className="columnParis"><p className="paris-item">Rogério Sampaio.</p></td>
  </tr>


  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Ligeiro Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2012(Londres - Inglaterra)</p></td>
    <td className="columnParis"><p className="paris-item">Sarah Menezes.

  
    </p></td>
  </tr>
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Leve Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2016(Rio de Janeiro - Brasil)</p></td>
    <td className="columnParis"><p className="paris-item">Rafaela Silva.

    </p></td>
  </tr>
  
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Pesado Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2024(Paris - França)</p></td>
    <td className="columnParis"><p className="paris-item">Beatriz Souza.

  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Meio Pesado Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1984(Los Angeles - EUA) </p></td>
    <td className="columnParis"><p className="paris-item">Douglas Vieira.

  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Meio Pesado Masculino </p></td>
    <td className="columnParis"><p className="paris-item">1988(Seul - Coréia do Sul)</p></td>
    <td className="columnParis"><p className="paris-item"> Douglas Vieira.
  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Leve Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2000(Sydney - Austrália)</p></td>
    <td className="columnParis"><p className="paris-item">Tiago Camilo.


  
  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Médio Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2000(Sydney - Austrália)</p></td>
    <td className="columnParis"><p className="paris-item"> Carlos Honorato.


  
  
  
    </p></td>
  </tr>
  

  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Meio Pesado Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1972(Munique - Alemanha)</p></td>
    <td className="columnParis"><p className="paris-item"> Chiaki Ishii.

    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Médio Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1984(Los Angeles - EUA)</p></td>
    <td className="columnParis"><p className="paris-item">Walter Carmona.


    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Médio Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1988(Seul - Coréia do Sul)</p></td>
    <td className="columnParis"><p className="paris-item">Luiz Onmura.


    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Meio Leve Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1996(Atlanta - EUA)</p></td>
    <td className="columnParis"><p className="paris-item">Henrique Guimarães.


    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Meio Pesado Masculino</p></td>
    <td className="columnParis"><p className="paris-item">1996(Atlanta - EUA)</p></td>
    <td className="columnParis"><p className="paris-item"> Aurélio Miguel.

    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Meio Médio Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2000(Sydney - Austrália)</p></td>
    <td className="columnParis"><p className="paris-item"> Flávio Canto.

    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Leve Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2004(Atenas - Grécia)</p></td>
    <td className="columnParis"><p className="paris-item"> Leandro Guilheiro.

    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso  Médio Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2004(Atenas - Grécia)</p></td>
    <td className="columnParis"><p className="paris-item"> Flávio Canto.


    </p></td>
  </tr>

  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Leve Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2008(Pequim - China)</p></td>
    <td className="columnParis"><p className="paris-item"> Ketleyn Quadros.


    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Leve Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2008(Pequim - China)</p></td>
    <td className="columnParis"><p className="paris-item"> Leandro Guilheiro.


    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Super Médio Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2008(Pequim - China)</p></td>
    <td className="columnParis"><p className="paris-item"> Tiago Camilo.


    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Ligeiro Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2012(Londres - Inglaterra)</p></td>
    <td className="columnParis"><p className="paris-item">Felipe Kitadai.


    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Meio Pesado Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2012(Londres - Inglaterra)</p></td>
    <td className="columnParis"><p className="paris-item">Mayra Aguiar.


    </p></td>
  </tr>

  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Pesado Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2012(Londres - Inglaterra)</p></td>
    <td className="columnParis"><p className="paris-item">Rafael Silva.


    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Meio Pesado Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2016(Rio de Janeiro - Brasil)</p></td>
    <td className="columnParis"><p className="paris-item">Mayra Aguiar.


    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Pesado Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2016(Rio de Janeiro - Brasil)</p></td>
    <td className="columnParis"><p className="paris-item">Rafael Silva.


    </p></td>
  </tr>
  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Meio Leve Masculino</p></td>
    <td className="columnParis"><p className="paris-item">2020(Tóquio - Japão)</p></td>
    <td className="columnParis"><p className="paris-item">Daniel Cargnin.


    </p></td>
  </tr>

  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Peso Meio Pesado Feminino</p></td>
    <td className="columnParis"><p className="paris-item">2020(Tóquio - Japão)</p></td>
    <td className="columnParis"><p className="paris-item">Mayra Aguiar.



    </p></td>
  </tr>

  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze"> 
    </img></td>
    <td className="columnParis"><p className="paris-item">Equipes</p></td>
    <td className="columnParis"><p className="paris-item">2024(Paris - França)</p></td>
    <td className="columnParis"><p className="paris-item">Beatriz Souza, Daniel Cargnin, Guilherme Schimidt, Ketleyn Quadros, Larissa Pimenta, Leonardo Gonçalves, Rafael Macedo, Rafael Silva, Rafaela Silva, Willian Lima.





    </p></td>
  </tr>
 
  </table>
  <p className="total-paris">Total: 5 ouro(s), 4 prata(s), 19 bronze(s), 28 medalha(s) ao todo, sendo o 1º esporte que mais gerou medalhas para o Brasil.</p>
  
  
  <Link to='/modalidades'>
   <button className="edicoesBtn">Todas as Modalidades</button>
   </Link>
  
  </section>

    );
}

export default FifthSectionJudoMobile;