import React from 'react';
import '../../index.css';

import { Link } from 'react-router-dom';

import atletismo from '../../img/atletismo2.avif';
import badminton from '../../img/badminton.jpg';
import basquete from '../../img/basquete.jpg';
import basquete3x3 from '../../img/basquete3x3.jpg';
import beisebol from '../../img/beisebol.avif';
import boxe from '../../img/boxe.jpeg';
import breaking from '../../img/breaking.jpeg';
import canoagemDeVelocidade from '../../img/canoagemdevelocidade.avif';
import canoagemSlalom from '../../img/canoagemSlalom.jpg';
import ciclismoBmxFreestyle from '../../img/ciclismobmxfreestyle.avif';
import ciclismoBmxRacing from '../../img/ciclismobmxracing.jpeg';
import ciclismoDeEstrada from '../../img/ciclismodeestrada.jpg';
import ciclismoDePista from '../../img/ciclismodepista.jpeg';
import ciclismoMountainBike from '../../img/ciclismomountainbike.jpeg';
import cricket from '../../img/cricket.jpg';
import escalada from '../../img/escalada.avif';
import esgrima from '../../img/esgrima.jpg';
import flagFootball from '../../img/flagfootball.avif';
import futebol from '../../img/futebol.jpg';
import ginasticaArtistica from '../../img/ginasticaartistica.avif';
import ginasticaDeTrampolim from '../../img/ginasticadetrampolim.jpeg';
import ginasticaRitmica from '../../img/ginasticaritmica.jpeg';
import golfe from '../../img/golfe.jpg';
import handebol from '../../img/handebol.jpg';
import hipismo from '../../img/hipismo.jpg';
import hoqueiSobreGrama from '../../img/hoqueisobregrama.jpg';
import judo from '../../img/judo.jpg';
import karate from '../../img/karate.avif';
import lacrosse from '../../img/lacrosse.jpg';
import levantamentoDePeso from '../../img/levantamentodepeso.jpg';
import luta from '../../img/luta.jpeg';
import maratonaAquatica from '../../img/maratonaaquatica.jpg';
import nadoArtistico from '../../img/nadoartistico.jpg';
import natacao from '../../img/natacao.jpg';
import pentatloModerno from '../../img/pentatlo.avif';
import poloAquatico from '../../img/poloaquatico.jpg';
import remo from '../../img/remo.jpg';
import rugbySevens from '../../img/rugbysevens.avif';
import saltosOrnamentais from '../../img/saltosornamentais.jpg';
import skate from '../../img/skate.avif';
import squash from '../../img/squash.jpeg';
import surfe from '../../img/surfe.jpeg';
import taekwondo from '../../img/taekwondo.avif';
import tenis from '../../img/tenis.avif';
import tenisDeMesa from '../../img/tenisdemesa.jpeg';
import tiroComArco from '../../img/tirocomarco.jpg';
import tiroEsportivo from '../../img/tiroesportivo.jpg';
import triatlo from '../../img/triatlo.webp';
import vela from '../../img/vela.avif';
import volei from '../../img/volei.avif';
import voleiDePraia from '../../img/voleidepraia.avif';
import GinasticaRitmica from '../../pages/GinasticaRitmica';




function FirstSectionModalidadesMobile() {
    return(
        <>
<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Todas as Modalidades das Olímpiadas Modernas</h4>
<Link to='/atletismo'>
<figure>

<figcaption className="edicoesTitle">Atletismo</figcaption>
<img src={atletismo} alt="imagem referente ao Atletismo" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/badminton'>
<figure>

<figcaption className="edicoesTitle">Badminton</figcaption>
<img src={badminton} alt="imagem referente a modalidade Badminton" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/basquete'>
<figure>

<figcaption className="edicoesTitle">Basquete</figcaption>
<img src={basquete} alt="imagem referente a modalidade Basquete" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/basquete3x3'>
<figure>

<figcaption className="edicoesTitle">Basquete 3x3</figcaption>
<img src={basquete3x3} alt="imagem referente a modalidade Basquete 3 por 3" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/beisebol'>
<figure>

<figcaption className="edicoesTitle">Beisebol/ Softbol</figcaption>
<img src={beisebol} alt="imagem referente a modalidade Beisebol e Softbol" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/boxe'>
<figure>

<figcaption className="edicoesTitle">Boxe</figcaption>
<img src={boxe} alt="imagem referente a modalidade Boxe" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/breaking'>
<figure>

<figcaption className="edicoesTitle">Breaking</figcaption>
<img src={breaking} alt="imagem referente a modalidade Breaking" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/canoagem-de-velocidade'>
<figure>

<figcaption className="edicoesTitle">Canoagem de Velocidade</figcaption>
<img src={canoagemDeVelocidade} alt="imagem referente a modalidade Canoagem de Velocidae" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/canoagem-slalom'>
<figure>

<figcaption className="edicoesTitle">Canoagem Slalom</figcaption>
<img src={canoagemSlalom} alt="imagem referente a modalidade Canoagem Slalom" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/ciclismo-bmx-freestyle'>
<figure>

<figcaption className="edicoesTitle">Ciclismo BMX Freestyle</figcaption>
<img src={ciclismoBmxFreestyle} alt="imagem referente a modalidade Ciclismo BMX Freestyle" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/ciclismo-bmx-racing'>
<figure>

<figcaption className="edicoesTitle">Ciclismo BMX Racing</figcaption>
<img src={ciclismoBmxRacing} alt="imagem referente a modalidade Ciclismo BMX Racing" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/ciclismo-de-estrada'>
<figure>

<figcaption className="edicoesTitle">Ciclismo de Estrada</figcaption>
<img src={ciclismoDeEstrada} alt="imagem referente a modalidade Ciclismo de Estrada" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/ciclismo-de-pista'>
<figure>

<figcaption className="edicoesTitle">Ciclismo de Pista</figcaption>
<img src={ciclismoDePista} alt="imagem referente a modalidade Ciclismo de Pista" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/ciclismo-mountain-bike'>
<figure>

<figcaption className="edicoesTitle">Ciclismo Mountain Bike</figcaption>
<img src={ciclismoMountainBike} alt="imagem referente a modalidade Ciclismo Mountain Bike" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/cricket'>
<figure>

<figcaption className="edicoesTitle">Cricket</figcaption>
<img src={cricket} alt="imagem referente a modalidade Cricket" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/escalada'>
<figure>

<figcaption className="edicoesTitle">Escalada</figcaption>
<img src={escalada} alt="imagem referente a modalidade Escalada" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/esgrima'>
<figure>

<figcaption className="edicoesTitle">Esgrima</figcaption>
<img src={esgrima} alt="imagem referente a modalidade Esgrima" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/flag-football'>
<figure>

<figcaption className="edicoesTitle">Flag Football</figcaption>
<img src={flagFootball} alt="imagem referente a modalidade Flag Football" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/futebol'>
<figure>

<figcaption className="edicoesTitle">Futebol</figcaption>
<img src={futebol} alt="imagem referente a modalidade Futebol" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/ginastica-artistica'>
<figure>

<figcaption className="edicoesTitle">Ginástica Artística</figcaption>
<img src={ginasticaArtistica} alt="imagem referente a modalidade Ginástica Artística" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/ginastica-de-trampolim'>
<figure>

<figcaption className="edicoesTitle">Ginástica de Trampolim</figcaption>
<img src={ginasticaDeTrampolim} alt="imagem referente a modalidade Ginastica de Trampolim" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/ginastica-ritmica'>
<figure>

<figcaption className="edicoesTitle">Ginástica Rítmica</figcaption>
<img src={ginasticaRitmica} alt="imagem referente a modalidade Ginpastica Rítmica" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/golfe'>
<figure>

<figcaption className="edicoesTitle">Golfe</figcaption>
<img src={golfe} alt="imagem referente a modalidade Golfe" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/handebol'>
<figure>

<figcaption className="edicoesTitle">Handebol</figcaption>
<img src={handebol} alt="imagem referente a modalidade Handebol" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/hipismo'>
<figure>

<figcaption className="edicoesTitle">Hipismo</figcaption>
<img src={hipismo} alt="imagem referente a modalidade Hipismo" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/hoquei-sobre-grama'>
<figure>

<figcaption className="edicoesTitle">Hóquei Sobre Grama</figcaption>
<img src={hoqueiSobreGrama} alt="imagem referente a modalidade Hóquei Sobre Grama" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/judo'>
<figure>

<figcaption className="edicoesTitle">Judô</figcaption>
<img src={judo} alt="imagem referente a modalidade Judô" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/karate'>
<figure>

<figcaption className="edicoesTitle">Karatê</figcaption>
<img src={karate} alt="imagem referente a modalidade Karatê" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/lacrosse'>
<figure>

<figcaption className="edicoesTitle">Lacrosse</figcaption>
<img src={lacrosse} alt="imagem referente a modalidade Lacrosse" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/levantamento-de-peso'>
<figure>

<figcaption className="edicoesTitle">Levantamento de Peso</figcaption>
<img src={levantamentoDePeso} alt="imagem referente a modalidade Levantamento de Peso" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/luta'>
<figure>

<figcaption className="edicoesTitle">Luta Olímpica</figcaption>
<img src={luta} alt="imagem referente a modalidade Luta" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/maratona-aquatica'>
<figure>

<figcaption className="edicoesTitle">Maratona Aquática</figcaption>
<img src={maratonaAquatica} alt="imagem referente a modalidade Maratona Aquática" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/nado-artistico'>
<figure>

<figcaption className="edicoesTitle">Nado Artístico</figcaption>
<img src={nadoArtistico} alt="imagem referente a modalidade Nado Artístico" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/natacao'>
<figure>

<figcaption className="edicoesTitle">Natacao</figcaption>
<img src={natacao} alt="imagem referente a modalidade Natacao" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/pentatlo-moderno'>
<figure>

<figcaption className="edicoesTitle">Pentatlo Moderno</figcaption>
<img src={pentatloModerno} alt="imagem referente a modalidade Pentatlo Moderno" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/polo-aquatico'>
<figure>

<figcaption className="edicoesTitle">Polo Aquático</figcaption>
<img src={poloAquatico} alt="imagem referente a modalidade Polo Aquatico" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/remo'>
<figure>

<figcaption className="edicoesTitle">Remo</figcaption>
<img src={remo} alt="imagem referente a modalidade Remo" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/rugby-sevens'>
<figure>

<figcaption className="edicoesTitle">Rugby Sevens</figcaption>
<img src={rugbySevens} alt="imagem referente a modalidade Rugby Sevens" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/saltos-ornamentais'>
<figure>

<figcaption className="edicoesTitle">Saltos Ornamentais</figcaption>
<img src={saltosOrnamentais} alt="imagem referente a modalidade Saltos Ornamentais" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/skate'>
<figure>

<figcaption className="edicoesTitle">Skate</figcaption>
<img src={skate} alt="imagem referente a modalidade Skate" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/squash'>
<figure>

<figcaption className="edicoesTitle">Squash</figcaption>
<img src={squash} alt="imagem referente a modalidade Squash" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/surfe'>
<figure>

<figcaption className="edicoesTitle">Surfe</figcaption>
<img src={surfe} alt="imagem referente a modalidade Surfe" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/taekwondo'>
<figure>

<figcaption className="edicoesTitle">Taekwondo</figcaption>
<img src={taekwondo} alt="imagem referente a modalidade Taekwondo" className='edicoesImg'></img>
</figure>
</Link>
]<Link to='/tenis'>
<figure>

<figcaption className="edicoesTitle">Tênis</figcaption>
<img src={tenis} alt="imagem referente a modalidade Tênis" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/tenis-de-mesa'>
<figure>

<figcaption className="edicoesTitle">Tênis de Mesa</figcaption>
<img src={tenisDeMesa} alt="imagem referente a modalidade Tênis" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/tiro-com-arco'>
<figure>

<figcaption className="edicoesTitle">Tiro Com Arco</figcaption>
<img src={tiroComArco} alt="imagem referente a modalidade Tiro Com Arco" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/tiro-esportivo'>
<figure>

<figcaption className="edicoesTitle">Tiro Esportivo</figcaption>
<img src={tiroEsportivo} alt="imagem referente a modalidade Tiro Esportivo" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/triatlo'>
<figure>

<figcaption className="edicoesTitle">Triatlo</figcaption>
<img src={triatlo} alt="imagem referente a modalidade Triatlo" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/vela'>
<figure>

<figcaption className="edicoesTitle">Vela</figcaption>
<img src={vela} alt="imagem referente a modalidade Vela" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/volei'>
<figure>

<figcaption className="edicoesTitle">Volei</figcaption>
<img src={volei} alt="imagem referente a modalidade Volei" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/volei-de-praia'>
<figure>

<figcaption className="edicoesTitle">Volei de Praia</figcaption>
<img src={voleiDePraia} alt="imagem referente a modalidade Volei de Praia" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/'>
   <button className="edicoesBtn">Voltar a Página Inicial</button>
   </Link>
</div>
</section>

</>
    );
}

export default FirstSectionModalidadesMobile;