<h3 align="center">Ecommerce Achadinhos Oficial - Produtos afiliados</h3>

<div align="center">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/eltondealmeida/vitrine-produtos-afiliados" />
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/eltondealmeida/vitrine-produtos-afiliados" />
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/eltondealmeida/vitrine-produtos-afiliados" />
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/91debfb7-05d1-4f62-8992-ca5739c60563" alt="Achadinhos Oficial" width="400" />
</div>

<p>Bem-vindo a vitrine de produtos Achadinhos oficial, esse projeto foi desenvolvido para ajudar as pessoas que desejam seguir com programas de afiliados e não possui uma vitrine de loja para comportar os links dos produtos e o link de afiliado.</p>

## Visão geral do projeto

<p>Visto que muitas pessoas estão se filiando a Marketplaces para ganhar comissões em produtos, percebi algumas dificuldades:</p>
1. Onde acessar os links dos produtos? <br>
2. Como pesquisar e filtrar os produtos? <br>
<br>
<p>Percebi que nos vídeos de "achadinhos" nas redes sociais, onde os influencers dizem: “clique no produto de número tal na bio”, ao acessar, era um link com vários links, com vários produtos com um número ao lado apenas e sem miniatura de imagem para encontrar o produto facilmente, causando "cansaço" para encontrar o produto do vídeo.</p>

<p>Esse site tem muita coisa legal visando UX/UI, tem responsividade, ou seja, conforme a tela diminui os produtos e botões se adequam, tem um botão de voltar ao topo quando você desce a tela, tem uma regrinha de aparecer de 6 em 6 produtos para ajudar a filtrar os produtos sem "bagunça" na tela, os novos produtos aparecem em primeiro, para manter o site atualizado e o que eu mais gosto: autocompletar, ou seja, conforme você escreve, os produtos relacionados começam a aparecer, sem necessidade de clicar em pesquisar ou algo do tipo.</p>

<p>Quem quiser dar uma olhada no site publicado com meus produtos, vou deixar o link abaixo:</p>

<p align="center"><a href="https://achadinhos-oficial.netlify.app/">achadinhos-oficial.netlify.app</a></p>

<p>Como publiquei o projeto no Netlify, a solução ficou totalmente gratuita e rentável, já que pode gerar renda através dos produtos!</p>

## Primeiros passos para obter o projeto

Para começar a usar a vitrine, siga estas etapas:

1. Clone o repositório: `git clone https://github.com/eltondealmeida/vitrine-produtos-afiliados.git`
2. Instale as dependências: `npm install`
3. Inicie o servidor de desenvolvimento: `npm run dev`
4. Acesse o aplicativo pela url: `http://127.0.0.1:5173/` ou `http://127.0.0.1:5173/home`

## Como atualizar o site com seus produtos?

<p>Com essa vitrine, você só precisa do link de afiliado, nome do produto e link da imagem diretamente pelo site que se filiou (não precisa ficar salvando imagem para inserir no site), o sistema cuida de todo o resto!</p>

<p>Não precisa de banco de dados, não precisa de conhecimento avançado, só precisa seguir o passo a passo abaixo:</p>

1. Anote o nome dos produtos que gerou o link de afiliado;
2. Anote o link de afiliado do produto específico;
3. Acesse o produto no Marketplace que se filiou, clique no produto e na imagem que deseja para sua vitrine, depois é só copiar o link da imagem:

<div align="center">
  <img src="https://github.com/user-attachments/assets/d39c6398-6ad3-4fc8-9eef-8b677119d727" alt="Copiar link da imagem" width="500" />
</div>

4. Com os 3 dados copiados, acesse aqui pelo Github mesmo o arquivo `src/components/product-list.js`, clique em editar arquivos:

<div align="center">
  <img src="https://github.com/user-attachments/assets/c5f16ef6-7aeb-46a7-88a4-9f96fbadbf24" alt="Editar arquivos" width="500" />
</div>

5. Insira ao final da lista do arquivo o novo produto no seguinte padrão:

```js
{ 
    id: Próximo número na ordem dos produtos, 
    name: 'Nome do produto', 
    imageUrl: 'Link da imagem', 
    productUrl: 'Link de afiliado' 
},
```

<div align="center"> <img src="https://github.com/user-attachments/assets/dbb60bd7-780e-4574-a760-e60f2612f300" alt="Exemplo de inserção de produto" width="500" /> </div>
Obs.: Só não esqueça das chaves { e }, a cada novo produto.

Agora você precisa salvar as alterações dando o commit, o padrão que adotei é o seguinte: Novo produto: Nome do produto
Exemplo:

<div align="center"> <img src="https://github.com/user-attachments/assets/8b146fbd-ef84-4cc6-9c2b-f605501a8034" alt="Exemplo de commit" width="500" /> </div>



## Autor
- [Elton de Almeida Oliveira](https://www.linkedin.com/in/eltondealmeida/)
