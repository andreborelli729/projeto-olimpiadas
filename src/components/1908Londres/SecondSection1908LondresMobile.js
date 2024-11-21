import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import medalhas from '../../medals/medalhas.png';
import graBretanha from '../../flags/grabretanha.png';
import usa from '../../flags/usa.png';

import suecia from '../../flags/suecia.avif';

import franca from '../../flags/franca.png';
import alemanha from '../../flags/alemanha.png';




function SecondSection1908LondresMobile(){


    return  (

        <section className="titles-section">
        <div className="results">
        <h4 className="resultsTitle">Resultado Geral de Países em 1908(Londres - Inglaterra)</h4>
          <table className="table-results">
            <tr className="results-row">
              <td className="firstColumn"><p className="sportLabel">País</p></td>
              <td className="secondColumn"><p className="sportLabel">Colocação</p></td>
              <td className="thirdColumn"><img src={ouro} alt="medalha de ouro" className="medalImg">
              </img></td>
              <td className="fourthColumn"><img src={prata} alt="medalha de prata" className="medalImg">
              </img></td>
              <td className="fifthColumn"><img src={bronze} alt="medalha de bronze" className="medalImg">
              </img></td>
              <td className="sixthColumn"><img src={medalhas} alt="Total de medalhas" className="medalsImg">
              </img></td>
        
        
            </tr>
            <tr className="rowType1">
            <td className="columnType1"><img src={graBretanha} alt="bandeira da Grã-Bretanha" className="flagImg"></img><p className="sportLabel">Grã-Bretanha</p></td>
            <td className="columnType2"><p className="sportLabel">1º</p></td>
              <td className="columnType2"><p className="sportLabel">56</p></td>
              <td className="columnType2"><p className="sportLabel">51</p></td>
              <td className="columnType2"><p className="sportLabel">59</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">146</p></td>
            </tr>
            <tr className="rowType1">
            <td className="columnType1"><img src={usa} alt="bandeira dos Estados Unidos" className="flagImg"></img><p className="sportLabel">EUA</p></td>
              <td className="columnType2"><p className="sportLabel">2º</p></td>
              <td className="columnType2"><p className="sportLabel">23</p></td>
              <td className="columnType2"><p className="sportLabel">12</p></td>
              <td className="columnType2"><p className="sportLabel">12</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">47</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={suecia} alt="bandeira da Suécia" className="flagImg"></img><p className="sportLabel">Suécia</p></td>
            <td className="columnType2"><p className="sportLabel">3º</p></td>
              <td className="columnType2"><p className="sportLabel">8</p></td>
              <td className="columnType2"><p className="sportLabel">6</p></td>
              <td className="columnType2"><p className="sportLabel">11</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">25</p></td>
            </tr>
        
            <tr className="rowType1">
              <td className="columnType1"><img src={franca} alt="bandeira da França" className="flagImg"></img><p className="sportLabel">França</p></td>
              <td className="columnType2"><p className="sportLabel">4º</p></td>
              <td className="columnType2"><p className="sportLabel">5</p></td>
              <td className="columnType2"><p className="sportLabel">5</p></td>
              <td className="columnType2"><p className="sportLabel">9</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">19</p></td>
            </tr>
        
            <tr className="rowType1">
              <td className="columnType1"><img src={alemanha} alt="bandeira da Alemanha" className="flagImg"></img><p className="sportLabel">Alemanha</p></td>
              <td className="columnType2"><p className="sportLabel">5º</p></td>
              <td className="columnType2"><p className="sportLabel">3</p></td>
              <td className="columnType2"><p className="sportLabel">5</p></td>
              <td className="columnType2"><p className="sportLabel">5</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">13</p></td>
            </tr>
        
        
          </table>
          <h5 className="list-title">Medalistas brasileiros na edição de 1908 (Londres - Grã-Bretanha):</h5>
          <p className="list-item2">Os atletas brasileiros não participaram dessa edição, vindo a participar apenas à partir de 1920 ,ficando de fora novamente em 1928 e participando de todas as edições seguintes.
</p>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edições</button>
   </Link>
          </div>
        </section>
         
        


);

}

export default SecondSection1908LondresMobile;