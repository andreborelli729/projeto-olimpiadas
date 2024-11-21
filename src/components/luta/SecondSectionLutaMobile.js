import React from 'react';

import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import medalhas from '../../medals/medalhas.png';
import japao from '../../flags/japao.png';
import ira from '../../flags/ira.png';
import usa from '../../flags/usa.png';
import bulgaria from '../../flags/bulgaria.png';
import cuba from '../../flags/cuba.png';





function SecondSectionLutaMobile(){


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
              <td className="columnType1"><img src={japao} alt="bandeira do Japão" className="flagImg"></img><p className="sportLabel">Japão</p></td>
              <td className="columnType2"><p className="sportLabel">1º</p></td>
              <td className="columnType2"><p className="sportLabel">8</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">2</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">11</p></td>
            </tr>
            <tr className="rowType1">
              <td className="columnType1"><img src={ira} alt="bandeira da República Islâmica do Irã" className="flagImg"></img><p className="sportLabel">República Islâmica do Irã</p></td>
              <td className="columnType2"><p className="sportLabel">2º</p></td>
              <td className="columnType2"><p className="sportLabel">2</p></td>
              <td className="columnType2"><p className="sportLabel">4</p></td>
              <td className="columnType2"><p className="sportLabel">2</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">8</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={usa} alt="bandeira dos Estados Unidos" className="flagImg"></img><p className="sportLabel">Estados Unidos</p></td>
            <td className="columnType2"><p className="sportLabel">3º</p></td>
              <td className="columnType2"><p className="sportLabel">2</p></td>
              <td className="columnType2"><p className="sportLabel">2</p></td>
              <td className="columnType2"><p className="sportLabel">3</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">7</p></td>
            </tr>
            <tr className="rowType1">
              <td className="columnType1"><img src={bulgaria} alt="bandeira da Bulgária" className="flagImg"></img><p className="sportLabel">Bulgária</p></td>
              <td className="columnType2"><p className="sportLabel">4º</p></td>
              <td className="columnType2"><p className="sportLabel">2</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">2</p></td>
            </tr>
            <tr className="rowType1">
              <td className="columnType1"><img src={cuba} alt="bandeira de Cuba" className="flagImg"></img><p className="sportLabel">Cuba</p></td>
              <td className="columnType2"><p className="sportLabel">5º</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">3</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">5</p></td>
            </tr>
          </table>
          </div>
        </section>
         
        


);

}

export default SecondSectionLutaMobile;