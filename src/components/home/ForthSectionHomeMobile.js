import React from 'react';
import '../../index.css';

import { Link } from 'react-router-dom';

import futebol from '../../img/futebol.jpg';
import vela from '../../img/vela.avif';
import volei from '../../img/volei.avif';


function ForthSectionHomeMobile() {

    return(
<>
<section className="thirdSection">
<div className="sportBanner">
<h4 className="sportTitle2">Todas as Modalidades das Olímpiadas Modernas</h4>

<Link to='/futebol'>
<figure>

<figcaption className="edicoesTitle2">Futebol</figcaption>
<img src={futebol} alt="imagem referente a modalidade Futebol" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/surfe'>
<figure>

<figcaption className="edicoesTitle2">Vela</figcaption>
<img src={vela} alt="imagem referente a modalidade Vela" className='edicoesImg'></img>
</figure>
</Link>
<Link to='/volei'>
<figure>

<figcaption className="edicoesTitle2">Volei</figcaption>
<img src={volei} alt="imagem referente a modalidade Volei" className='edicoesImg'></img>
</figure>
</Link>
   
   <Link to='/modalidades'>
   <button className="modalidadesBtn">Todas as Modalidades</button>
   </Link>
    </div>
</section>
</>

    );
}


export default ForthSectionHomeMobile;