import React from 'react';
import '../../index.css';

import { Link } from 'react-router-dom';

import atenas from '../../lugaresOlimpiadas/atenas.jpg';
import paris from '../../lugaresOlimpiadas/paris.jpg';
import saintLouis from '../../lugaresOlimpiadas/saintlouis.jpg';
import londres from '../../lugaresOlimpiadas/londres.jpg';
import estocolmo from '../../lugaresOlimpiadas/estocolmo.jpg';
import antuerpia from '../../lugaresOlimpiadas/antuerpia.jpg';
import amsterdam from '../../lugaresOlimpiadas/amsterdam.jpg';
import losAngeles from '../../lugaresOlimpiadas/losangeles.avif';
import berlim from '../../lugaresOlimpiadas/berlim.jpg';
import helsinque from '../../lugaresOlimpiadas/helsinque.webp';
import melbourne from '../../lugaresOlimpiadas/melbourne.jpg';
import roma from '../../lugaresOlimpiadas/roma.jpg';
import toquio from '../../lugaresOlimpiadas/toquio.jpg';
import cidadeDoMexico from '../../lugaresOlimpiadas/cidadedomexico.jpg';
import munique from '../../lugaresOlimpiadas/munique.jpg';
import montreal from '../../lugaresOlimpiadas/montreal.jpg';
import moscou from '../../lugaresOlimpiadas/moscou.jpg';
import seul from '../../lugaresOlimpiadas/seul.jpg';
import barcelona from '../../lugaresOlimpiadas/barcelona.jpg';
import atlanta from '../../lugaresOlimpiadas/atlanta.jpg';
import sydnei from '../../lugaresOlimpiadas/sydnei.jpg';
import pequim from '../../lugaresOlimpiadas/pequim.jpg';
import rioDeJaneiro from '../../lugaresOlimpiadas/riodejaneiro.jpg';


function FirstSectionEdicoesMobile() {
    return(
        <>
<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edicões das Olímpiadas Modernas</h4>
<Link to='/1896-atenas'>
<figure>

<figcaption className="edicoesTitle">1896 (Atenas - Grécia)</figcaption>
<img src={atenas} alt="imagem referente a cidade de Atenas na Grécia" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1900-paris'>
<figure>

<figcaption className="edicoesTitle">1900 (Paris - França)</figcaption>
<img src={paris} alt="imagem referente a cidade de Paris na França" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1904-saint-louis'>
<figure>

<figcaption className="edicoesTitle">1904 (Saint Louis - EUA</figcaption>
<img src={saintLouis} alt="imagem referente a cidade de Saint Louis nos Estados Unidos" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1906-atenas-especial'>
<figure>

<figcaption className="edicoesTitle">Edição Especial de 1906 (Atenas - Grécia)</figcaption>
<img src={atenas} alt="imagem referente a cidade de Atenas na Grécia" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1908-londres'>
<figure>

<figcaption className="edicoesTitle">1908 (Londres - Grã-Bretanhã)</figcaption>
<img src={londres} alt="imagem referente a cidade de Londres na Grã Bretanhã" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1912-estocolmo'>
<figure>

<figcaption className="edicoesTitle">1912 (Estocolmo - Suécia)</figcaption>
<img src={estocolmo} alt="imagem referente a cidade de Estocolmo na Suécia" className='edicoesImg'></img>
</figure>
</Link>"

<Link to='/1920-antuerpia'>
<figure>

<figcaption className="edicoesTitle">1920(Antuérpia - Bélgica))</figcaption>
<img src={antuerpia} alt="imagem referente a cidade de Antuérpia na Bélgica" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1924-paris'>
<figure>

<figcaption className="edicoesTitle">1924(Paris - Frrança)</figcaption>
<img src={paris} alt="imagem referente a cidade de Paris na França" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1928-amsterdam'>
<figure>

<figcaption className="edicoesTitle">1928 (Amsterdam - Países Baixos)</figcaption>
<img src={amsterdam} alt="imagem referente a cidade de Amsterdam nos Países Baixos" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1932-los-angeles'>
<figure>

<figcaption className="edicoesTitle">1932 (Los Angeles - EUA)</figcaption>
<img src={losAngeles} alt="imagem referente a cidade de Los Angeles nos Estados Unidos" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1936-berlim'>
<figure>

<figcaption className="edicoesTitle">1936 (Berlim - Alemanha)</figcaption>
<img src={berlim} alt="imagem referente a cidade de Berlim na Alemanha" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1948-londres'>
<figure>

<figcaption className="edicoesTitle">1948 (Londres - Grã-Bretanha)</figcaption>
<img src={londres} alt="imagem referente a cidade de Londres na Grã-Bretanha" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1952-helsinque'>
<figure>

<figcaption className="edicoesTitle">1952 (Helsinque - Finlândia)</figcaption>
<img src={helsinque} alt="imagem referente a cidade de Helsinque na Finlândia" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1956-melbourne'>
<figure>

<figcaption className="edicoesTitle">1956 (Melbourne - Austrália)</figcaption>
<img src={melbourne} alt="imagem referente a cidade de Melbourne na Austrália" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1960-roma'>
<figure>

<figcaption className="edicoesTitle">1960 (Roma - Itália)</figcaption>
<img src={roma} alt="imagem referente a cidade de Roma na Itália" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1964-toquio'>
<figure>

<figcaption className="edicoesTitle">1964 (Tóquio - Japão)</figcaption>
<img src={toquio} alt="imagem referente a cidade de Tóquio no Japão" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1968-cidade-do-mexico'>
<figure>

<figcaption className="edicoesTitle">1968 (Cidade do México - México)</figcaption>
<img src={cidadeDoMexico} alt="imagem referente a Cidade do México no México" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1972-munique'>
<figure>

<figcaption className="edicoesTitle">1972 (Munique - Alemanha)</figcaption>
<img src={munique} alt="imagem referente a cidade de Munique na Alemanha" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1976-montreal'>
<figure>

<figcaption className="edicoesTitle">1976 (Montreal - Canadá)</figcaption>
<img src={montreal} alt="imagem referente a cidade de Montreal no Canadá" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1980-urss'>
<figure>

<figcaption className="edicoesTitle">1980 (Moscou - Antiga URSS)</figcaption>
<img src={moscou} alt="imagem referente a cidade de Moscou na antiga União Soviética" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1984-los-angeles'>
<figure>

<figcaption className="edicoesTitle">1984 (Los Angeles - EUA)</figcaption>
<img src={losAngeles} alt="imagem referente a cidade de Los Angeles nos Estados Unidos" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1988-seul'>
<figure>

<figcaption className="edicoesTitle">1988 (Seul - Coréia do Sul)</figcaption>
<img src={seul} alt="imagem referente a cidade de Seul na Coréia do Sul" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1992-barcelona'>
<figure>

<figcaption className="edicoesTitle">1992 (Barcelona - Espanha)</figcaption>
<img src={barcelona} alt="imagem referente a cidade de Barcelona na Espanha" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1996-atlanta'>
<figure>

<figcaption className="edicoesTitle">1996 (Atlanta - EUA)</figcaption>
<img src={atlanta} alt="imagem referente a cidade de Atlanta nos Estados Unidos" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/2000-sydnei'>
<figure>

<figcaption className="edicoesTitle">2000 (Sydnei - Austrália)</figcaption>
<img src={sydnei} alt="imagem referente a cidade de Sydnei na Austrália" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/2004-atenas'>
<figure>

<figcaption className="edicoesTitle">2004 (Atenas - Grécia)</figcaption>
<img src={atenas} alt="imagem referente a cidade de Atenas na Grécia" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/2008-pequim'>
<figure>

<figcaption className="edicoesTitle">2008 (Pequim - China)</figcaption>
<img src={pequim} alt="imagem referente a cidade de Pequim na China" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/2012-londres'>
<figure>

<figcaption className="edicoesTitle">2012 (Londres - Grã-Bretanha)</figcaption>
<img src={londres} alt="imagem referente a cidade de Londres na Grã-Bretanha" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/2016-rio-de-janeiro'>
<figure>

<figcaption className="edicoesTitle">2016 (Rio de Janeiro - Brasil)</figcaption>
<img src={rioDeJaneiro} alt="imagem referente a cidade do Rio de Janeiro no Brasil" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/2020-toquio'>
<figure>

<figcaption className="edicoesTitle">2020 (Tóquio - Japão)</figcaption>
<img src={toquio} alt="imagem referente a cidade de Tóquio no Japão" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/2024-paris'>
<figure>

<figcaption className="edicoesTitle">2024 (Paris - França)</figcaption>
<img src={paris} alt="imagem referente a cidade de TParis na França" className='edicoesImg'></img>
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

export default FirstSectionEdicoesMobile;