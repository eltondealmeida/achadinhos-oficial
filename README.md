<h3 align="center">Ecommerce Achadinhos Oficial - Produtos afiliados</h3>
<div align="center">
![image](https://github.com/user-attachments/assets/a6463544-b2f0-4439-b57a-53288c0d77c3)
</div>

<div align="center">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/eltondealmeida/vitrine-produtos-afiliados">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/eltondealmeida/vitrine-produtos-afiliadoss">
  
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/eltondealmeida/vitrine-produtos-afiliados">
  
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/eltondealmeida/vitrine-produtos-afiliados">
</div>

Bem-vindo a vitrine de produtos Achadinhos oficial, esse projeto foi desenvolvido para ajudar as pessoas que desejam seguir com programas de afiliados e não possui uma vitrine de loja para comportar os links dos produtos e o link de afiliado. 

## Visão geral do projeto

Visto que muitas pessoas estão se filiando a Marketplaces para ganhar comissões em produtos, percebi algumas dificuldades: 
1° - Onde acessar os links dos produtos? 
2° - Como pesquisar e filtrar os produtos? 

Percebi que em vídeos nas redes sociais, onde o influencer dizia “clica no produto de número tal na bio”, ao acessar, era um link com vários links, com vários produtos com um número ao lado apenas e sem miniatura de imagem para encontrar o produto facilmente, causando "cansaço" para encontrar o produto do vídeo visto.

Esse site tem muita coisa legal visando UX/UI, tem responsividade, ou seja, conforme a tela diminui os produtos e botões se adequam, tem um botão de voltar ao topo quando você desce a tela, tem uma regrinha de aparecer de 6 em 6 produtos para ajudar a filtrar os produtos sem "bagunça" na tela, os novos produtos aparecem em primeiro, para manter o site atualizado e o que eu mais gosto: autocompletar, ou seja, conforme você escreve, os produtos relacionados começam a aparecer, sem necessidade de clicar em pesquisar ou algo do tipo. 

Quem quiser dar uma olhada no site publicado com meus produtos, vou deixar o link abaixo.
https://achadinhos-oficial.netlify.app/

Como publiquei o projeto no Netlify, a solução ficou totalmente gratuita e rentável, já que pode gerar renda através dos produtos!

## Primeiros passos para obter o projeto

Para começar a usar a vitrine, siga estas etapas:

1. Clone o repositório: `git clone https://github.com/eltondealmeida/vitrine-produtos-afiliados.git`
2. Instale as dependências:`npm install`
3. Inicie o servidor de desenvolvimento: `npm run dev`
4. Acesse o aplicativo pela url: `http://127.0.0.1:5173/` ou `http://127.0.0.1:5173/home`

   
## Como atualizar o site com seus produtos? 

Com essa vitrine, você só precisa do link de afiliado, nome do produto e link da imagem diretamente pelo site que se filiou (não precisa ficar salvando imagem para inserir no site), o sistema cuida de todo o resto!

Não precisa de banco de dados, não precisa de conhecimento avançado, só precisa seguir o passo a passo abaixo:
*1° Anote o nome dos produtos que gerou o link de afiliado;
*2° Anote o link de afiliado do produto especifico; 
*3º Acesse o produto no Marketplace que se afiliou, clique no produto e na imagem que deseja para sua vitrine, depois é só copiar o link da imagem: 
![image](https://github.com/user-attachments/assets/d39c6398-6ad3-4fc8-9eef-8b677119d727)

*4º Com os 3 dados copiados, acesse aqui pelo Github mesmo o arquivo src/components/product-list.js, clique em editar arquivos:
![image](https://github.com/user-attachments/assets/c5f16ef6-7aeb-46a7-88a4-9f96fbadbf24)
*5º insira ao final da lista do arquivo o novo produto no seguinte padrão:
{ 
    id: Proximo numero na ordem dos produtos, 
    name: 'Nome do produto', 
    imageUrl: 'Link da imagem', 
    productUrl: 'Link de afiliado' 
  },
  
Exemplo:
![image](https://github.com/user-attachments/assets/dbb60bd7-780e-4574-a760-e60f2612f300)

Obs.: Só não esqueça das chaves "{" e "}," a cada novo produto. 

*6° Agora você precisa salvar as alterações dando o commit, o padrão que adotei é o seguinte: 
Novo produto: Nome do produto
Exemplo:
![image](https://github.com/user-attachments/assets/8b146fbd-ef84-4cc6-9c2b-f605501a8034)



## Autor
- [Elton de Almeida Oliveira](https://www.linkedin.com/in/eltondealmeida/)
