import React from 'react';

import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import medalhas from '../../medals/medalhas.png';
import usa from '../../flags/usa.png';
import alemanha from '../../flags/alemanha.png';

import russia from '../../flags/russia.png';
import china from '../../flags/china.png';
import brasil from '../../flags/brasil.avif';


function SecondSection1996AtlantaMobile(){


    return  (

        <section className="titles-section">
        <div className="results">
        <h4 className="resultsTitle">Resultado Geral de Países em 1996 (Atlanta - EUA)</h4>
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
            <td className="columnType1"><img src={usa} alt="bandeira dos Estados Unidos" className="flagImg"></img><p className="sportLabel">EUA</p></td>
            <td className="columnType2"><p className="sportLabel">1º</p></td>
              <td className="columnType2"><p className="sportLabel">44</p></td>
              <td className="columnType2"><p className="sportLabel">32</p></td>
              <td className="columnType2"><p className="sportLabel">25</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">101</p></td>
            </tr>
            <tr className="rowType1">
            <td className="columnType1"><img src={russia} alt="bandeira da Rússia" className="flagImg"></img><p className="sportLabel">Rússia</p></td>
              <td className="columnType2"><p className="sportLabel">2º</p></td>
              <td className="columnType2"><p className="sportLabel">26</p></td>
              <td className="columnType2"><p className="sportLabel">21</p></td>
              <td className="columnType2"><p className="sportLabel">16</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">63</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={alemanha} alt="bandeira da Alemanha" className="flagImg"></img><p className="sportLabel">Alemanha (Oriental)</p></td>
            <td className="columnType2"><p className="sportLabel">3º</p></td>
              <td className="columnType2"><p className="sportLabel">20 </p></td>
              <td className="columnType2"><p className="sportLabel">18</p></td>
              <td className="columnType2"><p className="sportLabel">27</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">65</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={china} alt="bandeira da China" className="flagImg"></img><p className="sportLabel">China</p></td>
              <td className="columnType2"><p className="sportLabel">4º</p></td>
              <td className="columnType2"><p className="sportLabel">16</p></td>
              <td className="columnType2"><p className="sportLabel">22</p></td>
              <td className="columnType2"><p className="sportLabel">12</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">50</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={brasil} alt="bandeira do Brasil" className="flagImg"></img><p className="sportLabel">Brasil</p></td>
            <td className="columnType2"><p className="sportLabel">25º</p></td>
              <td className="columnType2"><p className="sportLabel">3</p></td>
              <td className="columnType2"><p className="sportLabel">3</p></td>
              <td className="columnType2"><p className="sportLabel">9</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">15</p></td>
            </tr>
        
        
          </table>
  
          </div>
        </section>
         
        


);

}

export default SecondSection1996AtlantaMobile;