import React from 'react';
import '../../index.css';

import { Link } from 'react-router-dom';

import rioDeJaneiro from '../../lugaresOlimpiadas/riodejaneiro.jpg';
import paris from '../../lugaresOlimpiadas/paris.jpg';
import atlanta from '../../lugaresOlimpiadas/atlanta.jpg';

function ThirdSectionHomeMobile(){
    return(
        <>
        <section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edicões das Olímpiadas Modernas</h4>
<Link to='/2016-rio-de-janeiro'>
<figure>

<figcaption className="edicoesTitle">2016 (Rio de Janeiro - Brasil)</figcaption>
<img src={rioDeJaneiro} alt="imagem referente a cidade do Rio de Janeiro no Brasil" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/2024-paris'>
<figure>

<figcaption className="edicoesTitle">2024 (Paris - França)</figcaption>
<img src={paris} alt="imagem referente a cidade de Paris na França" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/1996-atlanta'>
<figure>

<figcaption className="edicoesTitle">1996 (Atlanta - EUA)</figcaption>
<img src={atlanta} alt="imagem referente a cidade de Atlanta nos Estados Unidos" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/edicoes'>
   <button className="edicoesBtn">Todas as Edicoes</button>
   </Link>
    
</div>
</section>
        </>
    );
}


export default ThirdSectionHomeMobile;