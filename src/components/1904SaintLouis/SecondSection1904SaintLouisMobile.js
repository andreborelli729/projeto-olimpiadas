import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import ouro from '../../medals/ouro.png';
import prata from '../../medals/prata.png';
import bronze from '../../medals/bronze.png';
import medalhas from '../../medals/medalhas.png';
import usa from '../../flags/usa.png';
import alemanha from '../../flags/alemanha.png';
import canada from '../../flags/canada.png';
import cuba from '../../flags/cuba.png';
import hungria from '../../flags/hungria.png';




function SecondSection1904SaintLouisMobile(){


    return  (

        <section className="titles-section">
        <div className="results">
        <h4 className="resultsTitle">Resultado Geral de Países em 1904(Saint Louis - EUA)</h4>
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
              <td className="columnType2"><p className="sportLabel">76</p></td>
              <td className="columnType2"><p className="sportLabel">78</p></td>
              <td className="columnType2"><p className="sportLabel">77</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">231</p></td>
            </tr>
            <tr className="rowType1">
              <td className="columnType1"><img src={alemanha} alt="bandeira da Alemanha" className="flagImg"></img><p className="sportLabel">Alemanha</p></td>
              <td className="columnType2"><p className="sportLabel">2º</p></td>
              <td className="columnType2"><p className="sportLabel">4</p></td>
              <td className="columnType2"><p className="sportLabel">5</p></td>
              <td className="columnType2"><p className="sportLabel">6</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">15</p></td>
            </tr>
        
            <tr className="rowType1">
            <td className="columnType1"><img src={canada} alt="bandeira do Canadá" className="flagImg"></img><p className="sportLabel">Canadá</p></td>
            <td className="columnType2"><p className="sportLabel">3º</p></td>
              <td className="columnType2"><p className="sportLabel">4</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">6</p></td>
            </tr>
        
            <tr className="rowType1">
              <td className="columnType1"><img src={cuba} alt="bandeira de Cuba" className="flagImg"></img><p className="sportLabel">Cuba</p></td>
              <td className="columnType2"><p className="sportLabel">4º</p></td>
              <td className="columnType2"><p className="sportLabel">3</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType2"><p className="sportLabel">0</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">3</p></td>
            </tr>
        
            <tr className="rowType1">
              <td className="columnType1"><img src={hungria} alt="bandeira da Hungria" className="flagImg"></img><p className="sportLabel">Hungria</p></td>
              <td className="columnType2"><p className="sportLabel">5º</p></td>
              <td className="columnType2"><p className="sportLabel">2</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType2"><p className="sportLabel">1</p></td>
              <td className="columnType3 columnType3Padding"><p className="sportLabel">4</p></td>
            </tr>
        
        
          </table>
          <h5 className="list-title">Medalistas brasileiros na edição de 1904 (Saint-Louis):</h5>
          <p className="list-item2">Os atletas brasileiros não participaram dessa edição, vindo a participar apenas à partir de 1920 ,ficando de fora novamente em 1928 e participando de todas as edições seguintes.
</p>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edições</button>
   </Link>
          </div>
        </section>
         
        


);

}

export default SecondSection1904SaintLouisMobile;