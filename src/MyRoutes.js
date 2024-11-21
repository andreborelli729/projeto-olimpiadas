import React from 'react';
import App from './App';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Edicoes from './pages/Edicoes';
import Modalidades from './pages/Modalidades.js';
import OlimpiadasAntigas from './pages/OlimpiadasAntigas.js';
import Home from './pages/Home.js';

import Atenas1896 from './pages/1896Atenas';
import Paris1900 from './pages/1900Paris';
import SaintLouis1904 from './pages/1904SaintLouis';
import AtenasEspecial1906 from './pages/1906AtenasEspecial';
import Londres1908 from './pages/1912Londres';
import Estocolmo1912 from './pages/1908Estocolmo';
import Antuerpia1920 from './pages/1920Antuerpia';
import Paris1924 from './pages/1924Paris';
import Amsterdam1928 from './pages/1928Amsterdam';
import LosAngeles1932 from './pages/1932LosAngeles';
import Berlim1936 from './pages/1936Berlim';
import Londres1948 from './pages/1948Londres';
import Helsinque1952 from './pages/1952Helsinque';
import Melbourne1956 from './pages/1956Melbourne';
import Roma1960 from './pages/1960Roma';
import Toquio1964 from './pages/1964Toquio';
import CidadeDoMexico1968 from './pages/1968CidadeDoMexico';
import Munique1972 from './pages/1972Munique';
import Montreal1976 from './pages/1976Montreal';
import Urss1980 from './pages/1980Urss';
import LosAngeles1984 from './pages/1984LosAngeles';
import Seul1988 from './pages/1988Seul';
import Barcelona1992 from './pages/1992Barcelona';
import Atlanta1996 from './pages/1996Atlanta';
import Sydnei2000 from './pages/2000Sydnei';
import Atenas2004 from './pages/2004Atenas';
import Pequim2008 from './pages/2008Pequim';
import Londres2012 from './pages/2012Londres';
import RioDeJaneiro2016 from './pages/2016RioDeJaneiro';
import Toquio2020 from './pages/2020Toquio';
import Paris2024 from './pages/2024Paris';

import Atletismo from './pages/Atletismo.js';
import Badminton from './pages/Badminton.js';
import Basquete from './pages/Basquete.js';
import Basquete3x3 from './pages/Basquete3x3.js';
import Beisebol from './pages/Beisebol.js';
import Boxe from './pages/Boxe.js';
import Breaking from './pages/Breaking.js';
import CanoagemDeVelocidade from './pages/CanoagemDeVelocidade.js';
import CanoagemSlalom from './pages/CanoagemSlalom.js';
import CiclismoBmxFreestyle from './pages/CiclismoBmxFreestyle.js';
import CiclismoBmxRacing from './pages/CiclismoBmxRacing.js';
import CiclismoDeEstrada from './pages/CiclismoDeEstrada.js';
import CiclismoDePista from './pages/CiclismoDePista.js';
import CiclismoMountainBike from './pages/CiclismoMountainBike.js';
import Cricket from './pages/Cricket.js';
import Escalada from './pages/Escalada.js';
import Esgrima from './pages/Esgrima.js';
import FlagFootball from './pages/FlagFootball.js';
import Futebol from './pages/Futebol.js';
import GinasticaArtistica from './pages/GinasticaArtistica.js';
import GinasticaDeTrampolim from './pages/GinasticaDeTrampolim.js';
import GinasticaRitmica from './pages/GinasticaRitmica.js';
import Golfe from './pages/Golfe.js';
import Handebol from './pages/Handebol.js';
import Hipismo from './pages/Hipismo.js';
import HoqueiSobreGrama from './pages/HoqueiSobreGrama.js';
import Judo from './pages/Judo.js';
import Karate from './pages/Karate.js';
import Lacrosse from './pages/Lacrosse.js';
import LevantamentoDePeso from './pages/LevantamentoDePeso.js';
import Luta from './pages/Luta.js';
import MaratonaAquatica from './pages/MaratonaAquatica.js';
import NadoArtistico from './pages/NadoArtistico.js';
import Natacao from './pages/Natacao.js';
import PentatloModerno from './pages/PentatloModerno.js';
import PoloAquatico from './pages/PoloAquatico.js';
import Remo from './pages/Remo.js';
import RugbySevens from './pages/RugbySevens.js';
import SaltosOrnamentais from './pages/SaltosOrnamentais.js';
import Skate from './pages/Skate.js';
import Squash from './pages/Squash.js';
import Surfe from './pages/Surf.js';
import Taekwondo from './pages/Taekwondo.js';
import Tenis from './pages/Tenis.js';
import TenisDeMesa from './pages/TenisDeMesa.js';
import TiroComArco from './pages/TiroComArco.js';
import TiroEsportivo from './pages/TiroEsportivo.js';
import Triatlo from './pages/Triatlo.js';
import Vela from './pages/Vela.js';
import Volei from './pages/Volei.js';
import VoleiDePraia from './pages/VoleiDePraia.js';
import Footer from './Footer.js';


function MyRoutes() {
    return(
<Router>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/edicoes" element={<Edicoes/>}></Route>
        <Route path="/modalidades" element={<Modalidades/>}></Route>
        <Route path="/olimpiadas-antigas" element={<OlimpiadasAntigas/>}></Route>

        
        
      
        <Route path="/1896-atenas" element={<Atenas1896/>}></Route>
        <Route path="/1900-paris" element={<Paris1900/>}></Route>
        <Route path="/1904-saint-louis" element={<SaintLouis1904/>}></Route>
        <Route path="/1906-atenas-especial" element={<AtenasEspecial1906/>}></Route>
        <Route path="/1908-londres" element={<Londres1908/>}></Route>
        <Route path="/1912-estocolmo" element={<Estocolmo1912/>}></Route>
        <Route path="/1920-antuerpia" element={<Antuerpia1920/>}></Route>
        <Route path="/1924-paris" element={<Paris1924/>}></Route>
        <Route path="/1928-amsterdam" element={<Amsterdam1928/>}></Route>
        <Route path="/1932-los-angeles" element={<LosAngeles1932/>}></Route>
        <Route path="/1936-berlim" element={<Berlim1936/>}></Route>
        <Route path="/1948-londres" element={<Londres1948/>}></Route>
        <Route path="/1952-helsinque" element={<Helsinque1952/>}></Route>
        <Route path="/1956-melbourne" element={<Melbourne1956/>}></Route>
        <Route path="/1960-roma" element={<Roma1960/>}></Route>
        <Route path="/1964-toquio" element={<Toquio1964/>}></Route>
        <Route path="/1968-cidade-do-mexico" element={<CidadeDoMexico1968/>}></Route>
        <Route path="/1972-munique" element={<Munique1972/>}></Route>
        <Route path="/1976-montreal" element={<Montreal1976/>}></Route>
        <Route path="/1980-urss" element={<Urss1980/>}></Route>
        <Route path="/1984-los-angeles" element={<LosAngeles1984/>}></Route>
        <Route path="/1988-seul" element={<Seul1988/>}></Route>
        <Route path="/1992-barcelona" element={<Barcelona1992/>}></Route>
        <Route path="/1996-atlanta" element={<Atlanta1996/>}></Route>
        <Route path="/2000-sydnei" element={<Sydnei2000/>}></Route>
        <Route path="/2004-atenas" element={<Atenas2004/>}></Route>
        <Route path="/2008-pequim" element={<Pequim2008/>}></Route>
        <Route path="/2012-londres" element={<Londres2012/>}></Route>
        <Route path="/2016-rio-de-janeiro" element={<RioDeJaneiro2016/>}></Route>
        <Route path="/2020-toquio" element={<Toquio2020/>}></Route>
        <Route path="/2024-paris" element={<Paris2024/>}></Route>

        <Route path="/atletismo" element={<Atletismo/>}></Route>
        <Route path="/badminton" element={<Badminton/>}></Route>
        <Route path="/basquete" element={<Basquete/>}></Route>
        <Route path="/basquete3x3" element={<Basquete3x3/>}></Route>
        <Route path="/beisebol" element={<Beisebol/>}></Route>
        <Route path="/boxe" element={<Boxe/>}></Route>
        <Route path="/breaking" element={<Breaking/>}></Route>
        <Route path="/canoagem-de-velocidade" element={<CanoagemDeVelocidade/>}></Route>
        <Route path="/canoagem-slalom" element={<CanoagemSlalom/>}></Route>
        <Route path="/ciclismo-bmx-freestyle" element={<CiclismoBmxFreestyle/>}></Route>
        <Route path="/ciclismo-bmx-racing" element={<CiclismoBmxRacing/>}></Route>
        <Route path="/ciclismo-de-estrada" element={<CiclismoDeEstrada/>}></Route>
        <Route path="/ciclismo-de-pista" element={<CiclismoDePista/>}></Route>
        <Route path="/ciclismo-mountain-bike" element={<CiclismoMountainBike/>}></Route>
        <Route path="/cricket" element={<Cricket/>}></Route>
        <Route path="/escalada" element={<Escalada/>}></Route>
        <Route path="/esgrima" element={<Esgrima/>}></Route>
        <Route path="/flag-football" element={<FlagFootball/>}></Route>
        <Route path="/futebol" element={<Futebol/>}></Route>
        <Route path="/ginastica-artistica" element={<GinasticaArtistica/>}></Route>
        <Route path="/ginastica-ritmica" element={<GinasticaRitmica/>}></Route>
        <Route path="/ginastica-de-trampolim" element={<GinasticaDeTrampolim/>}></Route>
        <Route path="/golfe" element={<Golfe/>}></Route>
        <Route path="/handebol" element={<Handebol/>}></Route>
        <Route path="/hipismo" element={<Hipismo/>}></Route>
        <Route path="/hoquei-sobre-grama" element={<HoqueiSobreGrama/>}></Route>
        <Route path="/judo" element={<Judo/>}></Route>
        <Route path="/karate" element={<Karate/>}></Route>
        <Route path="/lacrosse" element={<Lacrosse/>}></Route>
        <Route path="/levantamento-de-peso" element={<LevantamentoDePeso/>}></Route>
        <Route path="/luta" element={<Luta/>}></Route>
        <Route path="/maratona-aquatica" element={<MaratonaAquatica/>}></Route>
        <Route path="/nado-artistico" element={<NadoArtistico/>}></Route>

        <Route path="/natacao" element={<Natacao/>}></Route>
        <Route path="/pentatlo-moderno" element={<PentatloModerno/>}></Route>
        <Route path="/polo-aquatico" element={<PoloAquatico/>}></Route>
        <Route path="/remo" element={<Remo/>}></Route>
        <Route path="/rugby-sevens" element={<RugbySevens/>}></Route>
        <Route path="/saltos-ornamentais" element={<SaltosOrnamentais/>}></Route>
        <Route path="/skate" element={<Skate/>}></Route>
        <Route path="/squash" element={<Squash/>}></Route>
        <Route path="/surfe" element={<Surfe/>}></Route>
        <Route path="/taekwondo" element={<Taekwondo/>}></Route>
        <Route path="/tenis" element={<Tenis/>}></Route>
        <Route path="/tenis-de-mesa" element={<TenisDeMesa/>}></Route>
        <Route path="/tiro-com-arco" element={<TiroComArco/>}></Route>
        <Route path="/tiro-esportivo" element={<TiroEsportivo/>}></Route>
        <Route path="/triatlo" element={<Triatlo/>}></Route>
        <Route path="/vela" element={<Vela/>}></Route>
        <Route path="/volei" element={<Volei/>}></Route>
        <Route path="/volei-de-praia" element={<VoleiDePraia/>}></Route>





















    
    
    
    
    
    </Routes>
    <Footer/>
</Router>

    );
}

export default MyRoutes;