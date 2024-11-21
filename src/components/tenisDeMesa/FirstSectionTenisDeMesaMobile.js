import React ,{useState} from 'react';
import '../../index.css';
import tenisDeMesa from '../../img/tenisdemesa.jpeg';



function FirstSectionTenisDeMesaMobile (){
    return (

<section className="sportSection">
<div className="sportBanner">
<h4 className="sportTitle">Tênis de Mesa</h4>
<img src={tenisDeMesa} className="sportImg" alt="Imagem Referente ao Tênis de Mesa">


</img>
</div>
<div className="sportInfo">
<p className="sportParagraph">Descriçaõ: O tênis de mesa é derivado do tênis de grama e foi inicialmente jogado como entretenimento após jantares entre famílias inglesas de classe alta, que usavam tudo o que encontravam como equipamento. Na época, colocavam livros sobre uma mesa para servir de rede, as tampas das caixas de charutos como raquetes e uma rolha arredondada de garrafa de champanhe como bola. Felizmente, os equipamentos de tênis de mesa foram evoluindo com o tempo e, em 1926, foram organizadas competições em Berlim e Londres, dando origem aos primeiros campeonatos mundiais que aconteceram em Londres naquele mesmo ano. Extremamente popular na Ásia, o tênis de mesa é jogado por mais de 40 milhões de pessoas, tornando-o um dos esportes mais populares do mundo.
          
     
</p>
<p className="sportParagraph">Desde quando faz parte das olímpiadas:   Desde 1988(Seul - Coréia do Sul).

    </p>
<p className="sportParagraph">Ano de inclusão da modalidade masculina: Desde 1988(Seul - Coréia do Sul).



</p>
<p className="sportParagraph">PARIS 2024 - MAIS DE UMA MODALIDADE - ESPORTE INDIVIDUAL OU POR EQUIPE - SEUL 1988.



</p>
</div>

</section>



    );
}


export default  FirstSectionTenisDeMesaMobile;