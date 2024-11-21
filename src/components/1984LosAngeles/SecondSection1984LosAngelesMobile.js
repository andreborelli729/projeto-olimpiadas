import React from 'react';

import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import medalhas from '../../medals/medalhas.png';
import usa from '../../flags/usa.png';
import romenia from '../../flags/romenia.png';
import alemanha from '../../flags/alemanha.png';
import china from '../../flags/china.png';
import brasil from '../../flags/brasil.avif';







function SecondSection1984LosAngelesMobile(){


    return  (

        <section className="titles-section">
        <div className="results">
        <h4 className="resultsTitle">Resultado Geral de Países em 1984 (Los Angeles - EUA)</h4>
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
              <td className="columnType2"><p className="sportLabel">83</p></td>
              <td className="columnType2"><p className="sportLabel">61</p></td>
              <td className="columnType2"><p className="sportLabel">30</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">174</p></td>
            </tr>
            <tr className="rowType1">
            <td className="columnType1"><img src={romenia} alt="bandeira da Romênia" className="flagImg"></img><p className="sportLabel">Romênia</p></td>
              <td className="columnType2"><p className="sportLabel">2º</p></td>
              <td className="columnType2"><p className="sportLabel">20</p></td>
              <td className="columnType2"><p className="sportLabel">16</p></td>
              <td className="columnType2"><p className="sportLabel">17</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">53</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={alemanha} alt="bandeira da Alemanha" className="flagImg"></img><p className="sportLabel">Alemanha (Ocidental)</p></td>
            <td className="columnType2"><p className="sportLabel">3º</p></td>
              <td className="columnType2"><p className="sportLabel">17 </p></td>
              <td className="columnType2"><p className="sportLabel">19</p></td>
              <td className="columnType2"><p className="sportLabel">23</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">59</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={china} alt="bandeira da China" className="flagImg"></img><p className="sportLabel">China</p></td>
              <td className="columnType2"><p className="sportLabel">4º</p></td>
              <td className="columnType2"><p className="sportLabel">15</p></td>
              <td className="columnType2"><p className="sportLabel">8</p></td>
              <td className="columnType2"><p className="sportLabel">9</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">32</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={brasil} alt="bandeira do Brasil" className="flagImg"></img><p className="sportLabel">Brasil</p></td>
            <td className="columnType2"><p className="sportLabel">19º</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">5</p></td>
              <td className="columnType2"><p className="sportLabel">2</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">8</p></td>
            </tr>
        
        
          </table>
  
          </div>
        </section>
         
        


);

}

export default SecondSection1984LosAngelesMobile;