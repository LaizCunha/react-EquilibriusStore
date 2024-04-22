# Equilibrius Store

Este é o repositório para o projeto Equilibrius Store, uma loja virtual que oferece uma variedade de produtos. 
O projeto foi desenvolvido como parte de um desafio de programação do curso de Desenvolvimento Web - Front End da Salvador Tech, ministrado pelo professor Marcley.

## APIs Utilizadas

- Todos os produtos: [https://fakestoreapi.com/products](https://fakestoreapi.com/products)
- Por ID: [https://fakestoreapi.com/products/1](https://fakestoreapi.com/products/1)

## Funcionalidades Principais

O projeto Equilibrius Store possui as seguintes funcionalidades:

1. **Tela de Login:**
   - A tela permite que os usuários insiram seu email e senha.
   - O login só é válido após um email válido e uma senha com 8 ou mais caracteres serem preenchidos.
   - O botão de submissão para fazer login está desativado se o formulário estiver inválido.

2. **Tela Principal de Produtos:**
   - Os produtos são carregados da API e renderizados na tela com imagem, nome e valor.
   - Os produtos são carregados ao inicializar a página.
   - Botões de categoria são fornecidos para filtrar os produtos.
   - Botões "Adicionar ao Carrinho" são fornecidos para cada produto.
   - Cada card permite a adição e remoção da quantidade de itens de cada produto.
   - Um botão de checkout leva para a tela de checkout.
   - O valor total dos produtos é exibido na tela.

3. **Tela de Detalhes de um Produto:**
   - Ao clicar em um card de produto, o usuário é redirecionado para a tela de detalhes desse produto.
   - A tela de detalhes contém imagem, nome, valor, descrição e avaliação do produto selecionado.

4. **Tela de Checkout:**
   - A tela de checkout exibe os dados corretos do carrinho e o preço total.
   - Todos os itens da compra são listados com valor unitário, quantidade e valor total.
   - Os usuários podem remover itens do carrinho, o que altera o valor total da venda.

## Contribuindo

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver alguma sugestão de melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Autor

Este projeto foi desenvolvido por Laiz.
