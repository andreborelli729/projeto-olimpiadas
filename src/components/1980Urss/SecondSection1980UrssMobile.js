import React from 'react';

import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import medalhas from '../../medals/medalhas.png';
import urss from '../../flags/urss.png';
import alemanha from '../../flags/alemanha.png';
import bulgaria from '../../flags/bulgaria.png';
import cuba from '../../flags/cuba.png';
import brasil from '../../flags/brasil.avif';







function SecondSection1980UrssMobile(){


    return  (

        <section className="titles-section">
        <div className="results">
        <h4 className="resultsTitle">Resultado Geral de Países em 1980 (Moscou - Antiga URSS)</h4>
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
            <td className="columnType1"><img src={urss} alt="bandeira da Antiga União Soviética" className="flagImg"></img><p className="sportLabel">URSS</p></td>
            <td className="columnType2"><p className="sportLabel">1º</p></td>
              <td className="columnType2"><p className="sportLabel">80</p></td>
              <td className="columnType2"><p className="sportLabel">69</p></td>
              <td className="columnType2"><p className="sportLabel">46</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">195</p></td>
            </tr>
            <tr className="rowType1">
            <td className="columnType1"><img src={alemanha} alt="bandeira da Alemanha" className="flagImg"></img><p className="sportLabel">Alemanha (Oriental)</p></td>
              <td className="columnType2"><p className="sportLabel">2º</p></td>
              <td className="columnType2"><p className="sportLabel">47</p></td>
              <td className="columnType2"><p className="sportLabel">37</p></td>
              <td className="columnType2"><p className="sportLabel">42</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">126</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={bulgaria} alt="bandeira da Bulgária" className="flagImg"></img><p className="sportLabel">Bulgária</p></td>
            <td className="columnType2"><p className="sportLabel">3º</p></td>
              <td className="columnType2"><p className="sportLabel">8 </p></td>
              <td className="columnType2"><p className="sportLabel">16</p></td>
              <td className="columnType2"><p className="sportLabel">17</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">41</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={cuba} alt="bandeira de Cuba" className="flagImg"></img><p className="sportLabel">Cuba</p></td>
              <td className="columnType2"><p className="sportLabel">4º</p></td>
              <td className="columnType2"><p className="sportLabel">8</p></td>
              <td className="columnType2"><p className="sportLabel">7</p></td>
              <td className="columnType2"><p className="sportLabel">5</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">20</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={brasil} alt="bandeira do Brasil" className="flagImg"></img><p className="sportLabel">Brasil</p></td>
            <td className="columnType2"><p className="sportLabel">17º</p></td>
              <td className="columnType2"><p className="sportLabel">2</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType2"><p className="sportLabel">2</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">4</p></td>
            </tr>
        
        
          </table>
  
          </div>
        </section>
         
        


);

}

export default SecondSection1980UrssMobile;