import React from 'react';

import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import medalhas from '../../medals/medalhas.png';
import usa from '../../flags/usa.png';
import quenia from '../../flags/quenia.avif';
import canada from '../../flags/canada.png';
import paisesBaixos from '../../flags/holanda].png';
import brasil from '../../flags/brasil.avif';



function SecondSectionUpdated(){


    return  (

        <section className="titles-section">
        <div className="results">
        <h4 className="resultsTitle">Melhores Países em 2024(Paris - França)</h4>
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
              <td className="columnType1"><img src={usa} alt="bandeira estados unidos" className="flagImg"></img><p className="sportLabel">EUA</p></td>
              <td className="columnType2"><p className="sportLabel">1º</p></td>
              <td className="columnType2"><p className="sportLabel">14</p></td>
              <td className="columnType2"><p className="sportLabel">11</p></td>
              <td className="columnType2"><p className="sportLabel">9</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">34  </p></td>
            </tr>
            <tr className="rowType1">
              <td className="columnType1"><img src={quenia} alt="bandeira quenia" className="flagImg"></img><p className="sportLabel">Quênia</p></td>
              <td className="columnType2"><p className="sportLabel">2º</p></td>
              <td className="columnType2"><p className="sportLabel">4</p></td>
              <td className="columnType2"><p className="sportLabel">2</p></td>
              <td className="columnType2"><p className="sportLabel">5</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">11</p></td>
            </tr>
        
            <tr className="rowType1">
              <td className="columnType1"><img src={canada} alt="bandeira do canada" className="flagImg"></img><p className="sportLabel">Canadá</p></td>
              <td className="columnType2"><p className="sportLabel">3º</p></td>
              <td className="columnType2"><p className="sportLabel">3</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">5</p></td>
            </tr>
        
            <tr className="rowType1">
              <td className="columnType1"><img src={paisesBaixos} alt="bandeira do canada" className="flagImg"></img><p className="sportLabel">Países Baixos</p></td>
              <td className="columnType2"><p className="sportLabel">4º</p></td>
              <td className="columnType2"><p className="sportLabel">2</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">3</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">6</p></td>
            </tr>
        
            <tr className="rowType1">
              <td className="columnType1"><img src={brasil} alt="bandeira do Brasil" className="flagImg"></img><p className="sportLabel">BRASIL</p></td>
              <td className="columnType2"><p className="sportLabel">20º</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">2</p></td>
            </tr>
        
        
          </table>
          </div>
        </section>
         
        


);

}

export default SecondSectionUpdated;