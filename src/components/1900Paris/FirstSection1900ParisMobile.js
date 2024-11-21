import React ,{useState} from 'react';
import '../../index.css';

import paris from '../../lugaresOlimpiadas/paris.jpg';



function FirstSection1900ParisMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Edição de 1900 (Paris - França)</h4>
<img src={paris} className="sportImg" alt="Imagem Referente a cidade de Paris">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: Os Jogos Olímpicos de Verão de 1900 (em francês: Jeux olympiques d'été de 1900), oficialmente conhecidos como Jogos da II Olimpíada da Era Moderna, realizaram-se em 1900, em Paris, França, terra natal de seu criador, o Barão Pierre de Coubertin. Por questões políticas, os Jogos foram integrados à Exposição Universal de Paris, uma grande feira mundial de comércio realizada pela França na época, e por terem sido diluídos ao longo de mais de quatro meses, entre 14 de maio e 28 de outubro, não tiveram qualquer relevância, sendo considerados um fracasso.

</p>
<p className="sportParagraph">Velódromo de Vincennes
Oficialmente, na França, as Olimpíadas do Barão de Coubertin acabaram batizadas de "Concurso Internacional de Exercícios Físicos e de Esportes", e os participantes chegaram a imaginar menos que participavam de uma celebração esportiva do que de um grande circo de variedades, tantas eram as atividades paralelas nas artes e no comércio oferecidas pela feira. Além disso, Paris não possuía nenhum complexo desportivo olímpico e as provas de atletismo foram disputadas no meio dos bosques e árvores do Bois de Boulogne e a natação em plena correnteza do rio Sena.</p>
</div>

</section>



    );
}


export default FirstSection1900ParisMobile;