//1ºcriação dos objetos(itens produtos da loja)
//faço tb um array para estoque
const itens = [
    {
        id:0,
        img:'./img/produto.png',
        nomeItem:'camiseta',
        precoItem: 21.99,
        estoque:2,
        qtd:5
    },

    {
        id:1,
        img:'./img/produto2.png',
        nomeItem:'camiseta longa',
        precoItem: 41.99,
        estoque:2,
        qtd:3
    },

    {
        id:2,
        img:'./img/img/produto3.png',
        nomeItem:'vestido',
        precoItem: 121.99,
        estoque:3,
        qtd:0
    },

    {
        id:3,
        img:'./img/produto4.png',
        nomeItem:'calça',
        precoItem: 99.99,
        estoque:2,
        qtd:5
    }
]
//função rsponsavel por povoar a divprodutos do html
function inicializaLoja(){
    const divProdutos = document.querySelector('#produtos') 
    //cria um card de produto com as informações dos objetos e itens na divprodutos
    //card-produto(div) com imagem, nome do produto, link de compra
    for(let i=o;i<itens.length;i++){
        if(itens[i].estoque>0){
           /*divProdutos.innerHTML+=itens[i]+='<img src="'+itens[i].img+'"><br>'
           divProdutos.innerHTML+=itens[i].nomeItem+'<br>'
           divProdutos.innerHTML+=itens[i].precoItem+'<br>'
           divProdutos.innerHTML+=itens[i].estoque+'<br>'
           divProdutos.innerHTML+='<a href="javascript:incluirItem('+items[i].id+')"><i class="fa-solid fa-cart-shopping"></i></a><br><br>'*/

            //Configurando a div do card-prod para essa, para estiliza no css 
            let divItem = document.createElement("div");
            divItem.className="card-prod";
            divItem.innerHTML+='<img src="'+itens[i].img+'"></img><br>'
            divItem.innerHTML+=itens[i].nomeItem+'<br>'
            divItem.innerHTML+=itens[i].precoItem+'<br>'
            divItem.innerHTML+=itens[i].estoque+'<br>'            
            divItem.innerHTML+='<a href="javascript:incluirItem('+itens[i].id+')"><i class="fa-solid fa-cart-shopping"></i></a><br><br>'

            //efetivando a inclusão da div no html     
            divProdutos.appendChild(divItem);
          
        }
    }
}
//inclui somente qtd, mais posso incluir as demais propriedades. 
//recebe como argumento a id do item e varre array com o for, pegando a qtd da id especificada e incrementa a qtd. Chama a função atualizarCarrinho para mostrar o resultado do incremento a divcarrinho
function incluirItem(id){
    for(let i=o;i<itens.length;i++){
        if(itens[i].id==id){
            itens[i].qtd++;
        }
    }
    atualizarCarrinho()
}
/*let preco = item[3].precoItem //let chama variavel igual a posição e a propriedade que quero buscar
console.log(preco)*/

//quando usuario clica no botão de comprar: identificar id do item e incrementar a propriedade qtd
//criando loop de repetição para ler todos os itens, independente da quantidade (uso propriedade length)
/*for(let i=o;i<itens.length;i++){
    itens[3].qtd++;
}*/

//laço de repetição: verifico se a qtide do nomeItem é >o e entro na divcarrinho e incluo esse item, tb posso fazer isso para todos os outros itens(tamanho, qtd,etc). Crio a função atualizarcarrinho.
function atualizarCarrinho(){
    let divItens=document.querySelector('#itens-carrinho')
    //limpando os itens do carrinho
   divItens.innerHTML=""

    for(let i=o;i<itens.length;i++){
        if(itens[i].qtd>0){
            divItens.innerHTML+=itens[i].nomeItem            
            divItens.innerHTML+=itens[i].qtd+'<br>'
        }
    }
    
}
