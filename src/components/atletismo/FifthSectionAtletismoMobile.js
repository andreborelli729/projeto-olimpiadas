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
    <td className="columnParis"><p className="paris-item">Salto Triplo</p></td>
    <td className="columnParis"><p className="paris-item">1952 (Helsinque - Finlândia)</p></td>
    <td className="columnParis"><p className="paris-item">Adhemar Ferreira da Silva.</p></td>
  </tr>
  <tr>
    <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Salto Triplo</p></td>
    <td className="columnParis"><p className="paris-item">1956 (Melbourne - Austrália)</p></td>
    <td className="columnParis"><p className="paris-item">Adhemar Ferreira da Silva.</p></td>
  </tr>
  <tr>
    <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">800 Metros</p></td>
    <td className="columnParis"><p className="paris-item">1984(Los Angeles - EUA)</p></td>
    <td className="columnParis"><p className="paris-item">Joaquim Carvalho Cruz.
    </p></td>
  </tr>
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Salto em Distância</p></td>
    <td className="columnParis"><p className="paris-item">2008 (Pequim - China)</p></td>
    <td className="columnParis"><p className="paris-item">Maurren Higa Maggi.
    </p></td>
  </tr>
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Salto com Vara</p></td>
    <td className="columnParis"><p className="paris-item">2016 (Rio de Janeiro - Brasil)</p></td>
    <td className="columnParis"><p className="paris-item">Thiago Braz.
    </p></td>
  </tr>
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Salto Triplo</p></td>
    <td className="columnParis"><p className="paris-item">1968(Cidade do México - México)</p></td>
    <td className="columnParis"><p className="paris-item">Nelson Prudêncio.
  
    </p></td>
  </tr>
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">800 Metros</p></td>
    <td className="columnParis"><p className="paris-item">1988(Seul - Coréia do Sul)</p></td>
    <td className="columnParis"><p className="paris-item">Joaquim Carvalho Cruz.
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Revezamento 4x100 Metros</p></td>
    <td className="columnParis"><p className="paris-item">2000(Sydney - Austrália)</p></td>
    <td className="columnParis"><p className="paris-item">André Domingos, Claudinei Quirino, Edson Luciano Ribeiro e Vicente Lenilson.
  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Marcha Atlética</p></td>
    <td className="columnParis"><p className="paris-item">2024(Paris - França)</p></td>
    <td className="columnParis"><p className="paris-item">Caio Bonfim.
  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Salto em Altura</p></td>
    <td className="columnParis"><p className="paris-item">1952(Helsinque - Finlândia)</p></td>
    <td className="columnParis"><p className="paris-item">José Telles da Conceição.
  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Salto Triplo</p></td>
    <td className="columnParis"><p className="paris-item">1972(Munique - Alemanha)</p></td>
    <td className="columnParis"><p className="paris-item">Nelson Prudêncio.
  
  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Salto Triplo</p></td>
    <td className="columnParis"><p className="paris-item">1976(Montreal - Canadá)</p></td>
    <td className="columnParis"><p className="paris-item">João Carlos de Oliveira.
  
  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Salto Triplo</p></td>
    <td className="columnParis"><p className="paris-item">1980 (Moscou - URSS)</p></td>
    <td className="columnParis"><p className="paris-item">João Carlos de Oliveira.
  
  
  
    </p></td>
  
  
  </tr>
  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">200 Metros</p></td>
    <td className="columnParis"><p className="paris-item">1988(Seul - Coréia do Sul)</p></td>
    <td className="columnParis"><p className="paris-item">Robson Caetano da Silva.
  
  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Revezamento 4x100 Metros</p></td>
    <td className="columnParis"><p className="paris-item">1996(Atlanta - EUA)</p></td>
    <td className="columnParis"><p className="paris-item">André Domingos, Arnaldo Oliveira, Edson Luciano Ribeiro e Robson Caetano.
  
  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Maratona</p></td>
    <td className="columnParis"><p className="paris-item">2004 (Atenas - Grécia)</p></td>
    <td className="columnParis"><p className="paris-item">Vanderlei Cordeiro de Lima
  
  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Revezamento 4x100 Metros</p></td>
    <td className="columnParis"><p className="paris-item">2008(Pequim - China)</p></td>
    <td className="columnParis"><p className="paris-item">Lucimar Moura, Rosangela Santos, Rosemar Coelho e Thaíssa Presti
  
  
  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">400 Metros Com Barreiras</p></td>
    <td className="columnParis"><p className="paris-item">2020(Tóquio - Japão)</p></td>
    <td className="columnParis"><p className="paris-item">Alison dos Santos.
    
  
  
  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Salto Com Vara</p></td>
    <td className="columnParis"><p className="paris-item">2020(Tóquio - Japão)</p></td>
    <td className="columnParis"><p className="paris-item">Thiago Braz.
  
  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Revezamento 4x100 Metros</p></td>
    <td className="columnParis"><p className="paris-item">2008(Pequim - China)</p></td>
    <td className="columnParis"><p className="paris-item">Bruno Lins, José Moreira (Codó), Sandro Viana e Vicente Lenílson.
  
  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">400m com barreira</p></td>
    <td className="columnParis"><p className="paris-item">2024(Paris - França)</p></td>
    <td className="columnParis"><p className="paris-item">Alison dos Santos.
  
  
  
  
    </p></td>
  </tr>
  </table>
  <p className="total-paris">Total: 5 ouro(s), 4 prata(s), 12 bronze(s), 21 medalha(s) ao todo, sendo o 2º esporte que mais gerou medalhas para o Brasil.</p>
  
  <Link to='/modalidades'>
   <button className="edicoesBtn">Todas as Modalidades</button>
   </Link>
  
  
  </section>

    );
}

export default FifthSectionUpdated;