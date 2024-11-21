import React from 'react';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import medalhas from '../../medals/medalhas.png';
import { Link } from 'react-router-dom';


function FifthSectionVelaMobile() {
    return (

<section className="geralResults">
  
  <h4 className="item-title">Todas as medalhas de atletas brasileiros nesse esporte em todas as olímpiadas:
  </h4>
  <table>
  <tr>
    <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe 470</p></td>
    <td className="columnParis"><p className="paris-item">1980(Moscou - URSS)</p></td>
    <td className="columnParis"><p className="paris-item">Eduardo Penido e Marcos Soares.</p></td>
  </tr>
 
  <tr>
    <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe Tornado</p></td>
    <td className="columnParis"><p className="paris-item">1980(Moscou - URSS)</p></td>
    <td className="columnParis"><p className="paris-item">Alexandre Welter e Lars Björkström
    </p></td>
  </tr>
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe Laser</p></td>
    <td className="columnParis"><p className="paris-item">1996(Atlanta - EUA)</p></td>
    <td className="columnParis"><p className="paris-item">Robert Scheidt.
    </p></td>
  </tr>
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe Star</p></td>
    <td className="columnParis"><p className="paris-item">1996(Atlanta - EUA)</p></td>
    <td className="columnParis"><p className="paris-item">Marcelo Ferreira e Torben Grael
    </p></td>
  </tr>
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe Laser</p></td>
    <td className="columnParis"><p className="paris-item">2012(Londres - Inglaterra)</p></td>
    <td className="columnParis"><p className="paris-item">Robert Scheidt.
  
    </p></td>
  </tr>
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe Star</p></td>
    <td className="columnParis"><p className="paris-item">2012(Londres - Inglaterra)</p></td>
    <td className="columnParis"><p className="paris-item">Marcelo Ferreira e Torben Grael.	
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe 49er FX</p></td>
    <td className="columnParis"><p className="paris-item">2016(Rio de Janeiro - Brasil) </p></td>
    <td className="columnParis"><p className="paris-item">Kahena Kunze e Martine Grael.
  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={ouro} className="parisMedal" alt="medalha de ouro">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe 49er FX</p></td>
    <td className="columnParis"><p className="paris-item">2020(Tóquio - Japão)</p></td>
    <td className="columnParis"><p className="paris-item">Kahena Kunze e Martine Grael.
  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe Soling</p></td>
    <td className="columnParis"><p className="paris-item">1984(Los Angeles - EUA)</p></td>
    <td className="columnParis"><p className="paris-item">Daniel Adler, Ronaldo Senfft e Torben Grael.

  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item"> Classe Laser</p></td>
    <td className="columnParis"><p className="paris-item">2000(Sydney - Austrália)</p></td>
    <td className="columnParis"><p className="paris-item">Robert Scheidt.

  
  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={prata} className="parisMedal" alt="medalha de prata">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe Star</p></td>
    <td className="columnParis"><p className="paris-item">2008(Pequim - China)</p></td>
    <td className="columnParis"><p className="paris-item">Bruno Prada e Robert Scheidt.
  
  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe Flying Dutchman</p></td>
    <td className="columnParis"><p className="paris-item">1968(Cidade do México - México)</p></td>
    <td className="columnParis"><p className="paris-item">Burkhard Cordes e Reinaldo Conrad.
  
  
  
    </p></td>
  
  
  </tr>
  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe Flying Dutchman</p></td>
    <td className="columnParis"><p className="paris-item">1972(Montreal - Canadá)</p></td>
    <td className="columnParis"><p className="paris-item">Peter Ficker e Reinaldo Conrad.
  
  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe Star</p></td>
    <td className="columnParis"><p className="paris-item">1988(Seul - Coréia do Sul)</p></td>
    <td className="columnParis"><p className="paris-item">Nelson Falcão e Torben Grael.
  
  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe Tornado</p></td>
    <td className="columnParis"><p className="paris-item">1988(Seul - Coréia do Sul)</p></td>
    <td className="columnParis"><p className="paris-item">Clinio Freitas e Lars Grael.
  
  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe Tornado</p></td>
    <td className="columnParis"><p className="paris-item">1996(Atlanta - EUA)</p></td>
    <td className="columnParis"><p className="paris-item">Kiko Pelicano e Lars Grael.
  
  
  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe Star</p></td>
    <td className="columnParis"><p className="paris-item">2000(Sydney - Austrália)</p></td>
    <td className="columnParis"><p className="paris-item">Marcelo Ferreira e Torben Grael.

    
  
  
  
  
    </p></td>
  </tr>
  
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe 470</p></td>
    <td className="columnParis"><p className="paris-item">2008(Pequim - China)</p></td>
    <td className="columnParis"><p className="paris-item">Fernanda Oliveira e Isabel Swan.
  
  
  
  
    </p></td>
  </tr>
  <tr>
  <td><img src={bronze} className="parisMedal" alt="medalha de bronze">
    </img></td>
    <td className="columnParis"><p className="paris-item">Classe Star</p></td>
    <td className="columnParis"><p className="paris-item">2012(Londres - Inglaterra)</p></td>
    <td className="columnParis"><p className="paris-item">Bruno Prada e Robert Scheidt.
  
  
  
  
    </p></td>
  </tr>

  </table>
  <p className="total-paris">Total: 8 ouro(s), 3 prata(s), 8 bronze(s), 19 medalha(s) ao todo, sendo o 3º esporte que mais gerou medalhas para o Brasil.</p>
  
  <Link to='/modalidades'>
   <button className="edicoesBtn">Todas as Modalidades</button>
   </Link>
  
  </section>

    );
}

export default FifthSectionVelaMobile;