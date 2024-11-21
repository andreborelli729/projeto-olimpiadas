import React from 'react';

import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import medalhas from '../../medals/medalhas.png';
import china from '../../flags/china.png';
import usa from '../../flags/usa.png';
import japao from '../../flags/japao.png';
import australia from '../../flags/australia.png';
import brasil from '../../flags/brasil.avif';


function SecondSection2024ParisMobile(){


    return  (

        <section className="titles-section">
        <div className="results">
        <h4 className="resultsTitle">Resultado Geral de Países em 2012(Londres - Grã-Bretanha)</h4>
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
              <td className="columnType2"><p className="sportLabel">40</p></td>
              <td className="columnType2"><p className="sportLabel">44</p></td>
              <td className="columnType2"><p className="sportLabel">42</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">126</p></td>
            </tr>
            <tr className="rowType1">
            <td className="columnType1"><img src={china} alt="bandeira da China" className="flagImg"></img><p className="sportLabel">China</p></td>
              <td className="columnType2"><p className="sportLabel">2º</p></td>
              <td className="columnType2"><p className="sportLabel">40</p></td>
              <td className="columnType2"><p className="sportLabel">27</p></td>
              <td className="columnType2"><p className="sportLabel">24</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">91</p></td>
            </tr>

            <tr className="rowType1">
            <td className="columnType1"><img src={japao} alt="bandeira do Japão" className="flagImg"></img><p className="sportLabel">Japão</p></td>

            <td className="columnType2"><p className="sportLabel">3º</p></td>
              <td className="columnType2"><p className="sportLabel">20 </p></td>
              <td className="columnType2"><p className="sportLabel">12</p></td>
              <td className="columnType2"><p className="sportLabel">13</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">45</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={australia} alt="bandeira da Austrália" className="flagImg"></img><p className="sportLabel">Austrália</p></td>
              <td className="columnType2"><p className="sportLabel">4º</p></td>
              <td className="columnType2"><p className="sportLabel">18</p></td>
              <td className="columnType2"><p className="sportLabel">19</p></td>
              <td className="columnType2"><p className="sportLabel">16</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">53</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={brasil} alt="bandeira do Brasil" className="flagImg"></img><p className="sportLabel">Brasil</p></td>
            <td className="columnType2"><p className="sportLabel">20º</p></td>
              <td className="columnType2"><p className="sportLabel">3</p></td>
              <td className="columnType2"><p className="sportLabel">7</p></td>
              <td className="columnType2"><p className="sportLabel">10</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">20</p></td>
            </tr>
        
        
          </table>
  
          </div>
        </section>
         
        


);

}

export default SecondSection2024ParisMobile;