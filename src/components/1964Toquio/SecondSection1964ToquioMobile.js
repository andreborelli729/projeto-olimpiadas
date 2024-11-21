import React from 'react';

import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import medalhas from '../../medals/medalhas.png';
import usa from '../../flags/usa.png';
import urss from '../../flags/urss.png';
import japao from '../../flags/japao.png';
import alemanha from '../../flags/alemanha.png';
import brasil from '../../flags/brasil.avif';






function SecondSection1964ToquioMobile(){


    return  (

        <section className="titles-section">
        <div className="results">
        <h4 className="resultsTitle">Resultado Geral de Países em 1964(Tóquio - Japão)</h4>
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
              <td className="columnType2"><p className="sportLabel">36</p></td>
              <td className="columnType2"><p className="sportLabel">26</p></td>
              <td className="columnType2"><p className="sportLabel">28</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">90</p></td>
            </tr>
            <tr className="rowType1">
            <td className="columnType1"><img src={urss} alt="bandeira da Antiga União Soviética" className="flagImg"></img><p className="sportLabel">URSS</p></td>
              <td className="columnType2"><p className="sportLabel">2º</p></td>
              <td className="columnType2"><p className="sportLabel">30</p></td>
              <td className="columnType2"><p className="sportLabel">31</p></td>
              <td className="columnType2"><p className="sportLabel">35</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">96</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={japao} alt="bandeira do Japão" className="flagImg"></img><p className="sportLabel">Japão</p></td>
            <td className="columnType2"><p className="sportLabel">3º</p></td>
              <td className="columnType2"><p className="sportLabel">16 </p></td>
              <td className="columnType2"><p className="sportLabel">5</p></td>
              <td className="columnType2"><p className="sportLabel">8</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">29</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={alemanha} alt="bandeira da Alemanha" className="flagImg"></img><p className="sportLabel">Alemanha</p></td>
              <td className="columnType2"><p className="sportLabel">4º</p></td>
              <td className="columnType2"><p className="sportLabel">10</p></td>
              <td className="columnType2"><p className="sportLabel">22</p></td>
              <td className="columnType2"><p className="sportLabel">18</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">50</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={brasil} alt="bandeira do Brasil" className="flagImg"></img><p className="sportLabel">Brasil</p></td>
            <td className="columnType2"><p className="sportLabel">35º</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">1</p></td>
            </tr>
        
        
          </table>
  
          </div>
        </section>
         
        


);

}

export default SecondSection1964ToquioMobile;