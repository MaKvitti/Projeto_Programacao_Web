//Função simples para 'finalizar' cadastro
function soMostra(){
    window.alert("Cadastro efeturado com sucesso");
}

var QualPost= 'post_0';
var NumeroPost = 0;

//Função para 'postar' dinamicamente na div 'Post'
function post(){

        //Lista de posts
        var ListaPost = Array();
        ListaPost['post_0']= Array();
        ListaPost['post_0'][0] = 'Rio Claro Basquete reformula elenco para o NBB-12 ';
        ListaPost['post_0'][1] = '22 de setembro de 2019';
        ListaPost['post_0'][2] = 'Essa semana, o Rio Claro Basquete anunciou a saída de cinco atletas que disputaram o Campeonato Paulista e não vão mais fazer parte do elenco para o Novo Basquete Brasil 12. Tiveram os contratos encerrados Márcio Dornelles, Rafael Soleira, Léo Pegaia, Alef e o norte-americano Cameron Tatum.Por outro lado, a diretoria acertou o primeiro reforço para a disputa do nacional. Trata-se do armador argentino Fábian Sahdi, de 30 anos, que disputou o último NBB por São José e teve uma média de 7,3 assistências por partida.O Leão estreia no Novo Basquete Brasil no próximo dia 12 contra a Unifacisa, na Paraíba, às 16 horas. No dia 14, às 19h30, o desafio será contra o Basquete Cearense mais uma vez fora de casa.A estreia dentro de casa será no dia 22 contra Minas no Felipão e logo em seguida mais três jogos diante dos torcedores. No dia 26 contra o Pinheiros, dia 30 contra Brasília e dia 5 contra o Corinthians.';
        ListaPost['post_0'][3] = 'Leo Bauer';
        ListaPost['post_0'][4] = 'img/Post/Imagem1.jpg';

        ListaPost['post_1']= Array();
        ListaPost['post_1'][0] = 'Rio Claro Basquete vai para o tudo ou nada em SP contra o Pinheiros';
        ListaPost['post_1'][1] = '15 de setembro de 2019';
        ListaPost['post_1'][2] = 'Na última sexta-feira (13), o Rio Claro Basquete recebeu o Pinheiros no Ginásio do Felipão e perdeu uma ótima oportunidade de sair na frente em busca de uma vaga na próxima fase do Campeonato Paulista de Basquete. Os comandados de Fernando Penna estiveram a frente do placar durante boa parte da partida, mas com erros em alguns lances capitais deixaram a vitória escapar. Melhor para o Pinheiros, que abriu 1 a 0 nos playoffs de oitavas de final.  O maior problema para o Leão é que, para se classificar, o time terá que decidir tudo fora de casa e não basta vencer uma vez. Para chegar às quartas de final, o Rio Claro Basquete precisará ganhar duas partidas seguidas contra o Pinheiros na capital paulista.';
        ListaPost['post_1'][3] = 'João Pedro Granado';
        ListaPost['post_1'][4] = 'img/Post/Imagem1.jpg';

        ListaPost['post_2']= Array();
        ListaPost['post_2'][0] = 'Rio Claro Basquete recebe o Pinheiros no início do playoff';
        ListaPost['post_2'][1] = '13 de setembro de 2019';
        ListaPost['post_2'][2] = 'Começa na noite desta sexta-feira (13), às 20h, o playoff oitavas de final entre Rio Claro Basquete e Pinheiros pelo Campeonato Paulista. A disputa será em melhor de três jogos com o time de São Paulo tendo a vantagem de jogar na próxima segunda (16) e quarta (18) os jogos que definem a série em seus domínios.Para o confronto, o técnico Fernando Penna terá todo o elenco à disposição, com: pivôs Gerson, Ansaloni e Lucão, ala/pivô Soleira, Pastor e Márcio Dornelles, e armador Jeferson Campos, Alef, Korie Lucious, Cameron Tatum e Enzo Ruiz, além dos atletas da base Eduardo Sanches, Fernando e Bruno. O armador Léo Pegaia se recupera de lesão e deve voltar a ficar à disposição.';
        ListaPost['post_2'][3] = 'Leo Bauer';
        ListaPost['post_2'][4] = 'img/Post/Imagem1.jpg';

        ListaPost['post_3']= Array();
        ListaPost['post_3'][0] = 'Rio Claro Basquete encara o Paulistano no Ginásio Felipão';
        ListaPost['post_3'][1] = '4 de setembro de 2019';
        ListaPost['post_3'][2] = 'O Rio Claro Basquete volta à quadra nesta quarta-feira (4), às 20h, contra o Paulistano no Ginásio Felipe Karam na última partida do Leão em casa na primeira fase do Campeonato Paulista de Basquete. Os comandos de Fernando Penna vêm de vitória sobre o São João da Boa Vista por 71 a 67 e ocupam a quinta colocação do grupo B, com quatro vitórias e quatro derrotas.Os 13 times estão divididos em dois grupos que jogam em turno e returno dentro de seus grupos, sendo que os dois primeiros de cada grupo avançam diretamente às quartas de final. As demais equipes se enfrentam nas oitavas em um playoff (o terceiro de um grupo contra o sexto do outro, e o quarto contra o quinto) para definir mais quatro classificados.';
        ListaPost['post_3'][3] = 'Leo Bauer';
        ListaPost['post_3'][4] = 'img/Post/Imagem1.jpg';


    if(typeof ListaPost[QualPost]=='undefined'){

        window.alert("Volte mais tarde para novidades!!!");

    }
    else{
            //Titulo
            var TituloPost = document.createElement('h3');//Cria o elemento 
            TituloPost.innerHTML = ListaPost[QualPost][0];//Conteudo a ser mostrado
            TituloPost.setAttribute("class","letra");//Add qualquer atributo ao elemento
            document.getElementById("post").appendChild(TituloPost);//onde colocar
            //Data
            var DataPost = document.createElement('p');
            DataPost.innerHTML = ListaPost[QualPost][1];
            DataPost.setAttribute("class","data-postagem");
            document.getElementById("post").appendChild(DataPost);
            //Corpo
            var CorpoPost = document.createElement('p');
            CorpoPost.innerHTML= ListaPost[QualPost][2];
            CorpoPost.setAttribute("class","corpo-postagem");
            document.getElementById("post").appendChild(CorpoPost);
            //Imagem do Post
            var ImgPost = document.createElement('img');
            ImgPost.setAttribute("src",ListaPost[QualPost][4]);
            ImgPost.setAttribute("class","img-postagem");
            document.getElementById("post").appendChild(ImgPost);
            //Autor
            var AutorPost = document.createElement('p');
            AutorPost.innerHTML = ListaPost[QualPost][3];
            AutorPost.setAttribute("class","quem-postou");
            document.getElementById("post").appendChild(AutorPost);
            

    }
    
}   

function add(){
    NumeroPost++;
    QualPost= 'post_'+NumeroPost;
    post();

}

function imgGrande(){

    var ImgGaleria = document.createElement('img');
    ImgGaleria.setAttribute("src",'img/Logo-Rio-Claro.png');
    ImgGaleria.setAttribute("id","im2");
    document.getElementById("fotogrande").appendChild(ImgGaleria);

}
