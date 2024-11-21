import React from 'react';

import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import medalhas from '../../medals/medalhas.png';
import urss from '../../flags/urss.png';

import usa from '../../flags/usa.png';

import australia from '../../flags/australia.png';
import hungria from '../../flags/hungria.png';




import brasil from '../../flags/brasil.avif';






function SecondSection1956MelbourneMobile(){


    return  (

        <section className="titles-section">
        <div className="results">
        <h4 className="resultsTitle">Resultado Geral de Países em 1956(Melbourne - Austrália)</h4>
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
              <td className="columnType2"><p className="sportLabel">37</p></td>
              <td className="columnType2"><p className="sportLabel">29</p></td>
              <td className="columnType2"><p className="sportLabel">32</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">98</p></td>
            </tr>
            <tr className="rowType1">
            <td className="columnType1"><img src={usa} alt="bandeira dos Estados Unidos" className="flagImg"></img><p className="sportLabel">EUA</p></td>
              <td className="columnType2"><p className="sportLabel">2º</p></td>
              <td className="columnType2"><p className="sportLabel">32</p></td>
              <td className="columnType2"><p className="sportLabel">25</p></td>
              <td className="columnType2"><p className="sportLabel">17</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">74</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={australia} alt="bandeira da Austrália" className="flagImg"></img><p className="sportLabel">Austrália</p></td>
            <td className="columnType2"><p className="sportLabel">3º</p></td>
              <td className="columnType2"><p className="sportLabel">13 </p></td>
              <td className="columnType2"><p className="sportLabel">8</p></td>
              <td className="columnType2"><p className="sportLabel">14</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">35</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={hungria} alt="bandeira da Hungria" className="flagImg"></img><p className="sportLabel">Hungria</p></td>
              <td className="columnType2"><p className="sportLabel">4º</p></td>
              <td className="columnType2"><p className="sportLabel">9</p></td>
              <td className="columnType2"><p className="sportLabel">10</p></td>
              <td className="columnType2"><p className="sportLabel">7</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">26</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={brasil} alt="bandeira do Brasil" className="flagImg"></img><p className="sportLabel">Brasil</p></td>
            <td className="columnType2"><p className="sportLabel">24º</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">1</p></td>
            </tr>
        
        
          </table>
  
          </div>
        </section>
         
        


);

}

export default SecondSection1956MelbourneMobile;