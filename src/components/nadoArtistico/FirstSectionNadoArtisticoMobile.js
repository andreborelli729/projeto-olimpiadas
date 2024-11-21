import React ,{useState} from 'react';
import '../../index.css';
import nadoArtistico from '../../img/nadoartistico.jpg';



function FirstSectionNadoArtisticoMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Nado Artístico</h4>
<img src={nadoArtistico} className="sportImg" alt="Imagem Referente ao Nado Artístico">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descrição: O nado artístico foi desenvolvido pela combinação de acrobacias aquáticas com música. Embora as primeiras competições fossem organizadas para homens, o nado artístico posteriormente foi associado a atletas mulheres. Depois de várias demonstrações nos EUA no início do século 20, a modalidade cresceu em popularidade e as primeiras competições foram realizadas.
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:   Desde 1984(Los Angeles - EUA).

    </p>
<p className="sportParagraph">Ano de inclusão da modalidade masculina:  Desde 2024(Paris-França).



</p>
<p className="sportParagraph">TAGS: PARIS 2024 - VARIAS CATEGORIAS - ESPORTE COLETIVO - LOS ANGELES 1984.



</p>
</div>

</section>



    );
}


export default  FirstSectionNadoArtisticoMobile ;