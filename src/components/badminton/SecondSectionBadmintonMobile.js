import React from 'react';

import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import medalhas from '../../medals/medalhas.png';
import china from '../../flags/china.png';
import republicadacoreia from '../../flags/republicadacoreia.avif';
import dinamarca from '../../flags/dinamarca.png';
import chinataipei from '../../flags/chinataipei.avif';
import tailandia from '../../flags/tailândia.png';




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
              <td className="columnType1"><img src={china} alt="bandeira da China" className="flagImg"></img><p className="sportLabel">China</p></td>
              <td className="columnType2"><p className="sportLabel">1º</p></td>
              <td className="columnType2"><p className="sportLabel">2</p></td>
              <td className="columnType2"><p className="sportLabel">3</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">5  </p></td>
            </tr>
            <tr className="rowType1">
              <td className="columnType1"><img src={republicadacoreia} alt="bandeira da República da Córeia" className="flagImg"></img><p className="sportLabel">República da Coréia</p></td>
              <td className="columnType2"><p className="sportLabel">2º</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">2</p></td>
            </tr>
        
            <tr className="rowType1">
              <td className="columnType1"><img src={dinamarca} alt="bandeira da Dinamarca" className="flagImg"></img><p className="sportLabel">Dinamarca</p></td>
              <td className="columnType2"><p className="sportLabel">3º</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">1</p></td>
            </tr>
        
            <tr className="rowType1">
              <td className="columnType1"><img src={chinataipei} alt="bandeira da província de Taipei - China" className="flagImg"></img><p className="sportLabel">Taipei - China</p></td>
              <td className="columnType2"><p className="sportLabel">3º</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">1</p></td>
            </tr>
        
            <tr className="rowType1">
              <td className="columnType1"><img src={tailandia} alt="bandeira da Tailândia" className="flagImg"></img><p className="sportLabel">Tailândia</p></td>
              <td className="columnType2"><p className="sportLabel">5º</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">1</p></td>
            </tr>
        
        
          </table>
          </div>
        </section>
         
        


);

}

export default SecondSectionUpdated;