import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import medalhas from '../../medals/medalhas.png';
import alemanha from '../../flags/alemanha.png';
import usa from '../../flags/usa.png';

import hungria from '../../flags/hungria.png';
import italia from '../../flags/italia.png';

import finlandia from '../../flags/finlandia.png';







function SecondSection1936BerlimMobile(){


    return  (

        <section className="titles-section">
        <div className="results">
        <h4 className="resultsTitle">Resultado Geral de Países em 1936(Berlim - Alemanha)</h4>
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
            <td className="columnType1"><img src={alemanha} alt="bandeira da Alemanha" className="flagImg"></img><p className="sportLabel">Alemanha</p></td>
            <td className="columnType2"><p className="sportLabel">1º</p></td>
              <td className="columnType2"><p className="sportLabel">33</p></td>
              <td className="columnType2"><p className="sportLabel">26</p></td>
              <td className="columnType2"><p className="sportLabel">30</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">89</p></td>
            </tr>
            <tr className="rowType1">
            <td className="columnType1"><img src={usa} alt="bandeira dos Estados Unidos" className="flagImg"></img><p className="sportLabel">EUA</p></td>
              <td className="columnType2"><p className="sportLabel">2º</p></td>
              <td className="columnType2"><p className="sportLabel">24</p></td>
              <td className="columnType2"><p className="sportLabel">20</p></td>
              <td className="columnType2"><p className="sportLabel">12</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">56</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={hungria} alt="bandeira da Hungria" className="flagImg"></img><p className="sportLabel">Hungria</p></td>
            <td className="columnType2"><p className="sportLabel">3º</p></td>
              <td className="columnType2"><p className="sportLabel">10 </p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">5</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">16</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={italia} alt="bandeira da Itália" className="flagImg"></img><p className="sportLabel">Itália</p></td>
              <td className="columnType2"><p className="sportLabel">4º</p></td>
              <td className="columnType2"><p className="sportLabel">8</p></td>
              <td className="columnType2"><p className="sportLabel">9</p></td>
              <td className="columnType2"><p className="sportLabel">5</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">22</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={finlandia} alt="bandeira da Finlândia" className="flagImg"></img><p className="sportLabel">Finlândia</p></td>
            <td className="columnType2"><p className="sportLabel">5º</p></td>
              <td className="columnType2"><p className="sportLabel">7</p></td>
              <td className="columnType2"><p className="sportLabel">6</p></td>
              <td className="columnType2"><p className="sportLabel">6</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">19</p></td>
            </tr>
        
        
          </table>
          <h5 className="list-title">Medalistas brasileiros na edição de 1936 (Berlim - Alemanha):</h5>
          <p className="list-item2">Apesar de terem participado, nenhum atleta brasileiro conquistou medalhas nessa edição.
</p>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edições</button>
   </Link>
          </div>
        </section>
         
        


);

}

export default SecondSection1936BerlimMobile;