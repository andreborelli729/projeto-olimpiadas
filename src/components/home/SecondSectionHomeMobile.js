import React from 'react';

import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import medalhas from '../../medals/medalhas.png';
import china from '../../flags/china.png';
import usa from '../../flags/usa.png';
import urss from '../../flags/urss.png';
import graBretanha from '../../flags/grabretanha.png';
import brasil from '../../flags/brasil.avif';


function SecondSectionHomeMobile(){


    return  (

        <section className="titles-section">
        <div className="results">
        <h4 className="resultsTitle">Resultado Geral de Todas as Olímpiadas Modernas (De 1896 até 2024)</h4>
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
              <td className="columnType2"><p className="sportLabel">1101</p></td>
              <td className="columnType2"><p className="sportLabel">880 </p></td>
              <td className="columnType2"><p className="sportLabel">781</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">2762</p></td>
            </tr>
            <tr className="rowType1">
            <td className="columnType1"><img src={urss} alt="bandeira da antiga União Soviética" className="flagImg"></img><p className="sportLabel">URSS</p></td>
              <td className="columnType2"><p className="sportLabel">2º</p></td>
              <td className="columnType2"><p className="sportLabel">395</p></td>
              <td className="columnType2"><p className="sportLabel">319</p></td>
              <td className="columnType2"><p className="sportLabel">296</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">1010</p></td>
            </tr>

            <tr className="rowType1">
            <td className="columnType1"><img src={china} alt="bandeira da China" className="flagImg"></img><p className="sportLabel">China</p></td>

            <td className="columnType2"><p className="sportLabel">3º</p></td>
              <td className="columnType2"><p className="sportLabel">302 </p></td>
              <td className="columnType2"><p className="sportLabel">227</p></td>
              <td className="columnType2"><p className="sportLabel">197</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">726</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={graBretanha} alt="bandeira da Grã-Bretanha" className="flagImg"></img><p className="sportLabel">Grã-Bretanha</p></td>
              <td className="columnType2"><p className="sportLabel">4º</p></td>
              <td className="columnType2"><p className="sportLabel">300</p></td>
              <td className="columnType2"><p className="sportLabel">338</p></td>
              <td className="columnType2"><p className="sportLabel">344</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">982</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={brasil} alt="bandeira do Brasil" className="flagImg"></img><p className="sportLabel">Brasil</p></td>
            <td className="columnType2"><p className="sportLabel">32º</p></td>
              <td className="columnType2"><p className="sportLabel">40</p></td>
              <td className="columnType2"><p className="sportLabel">49</p></td>
              <td className="columnType2"><p className="sportLabel">81</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">170</p></td>
            </tr>
        
        
          </table>
  
          </div>
        </section>
         
        


);

}

export default SecondSectionHomeMobile;