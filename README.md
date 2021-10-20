# TikTakToe
Projeto Tik Tak Toe (Jogo da Velha) construído utilizando html, css, JQuery.

### Telas
- Tela Inicial: Botão Play
![image](https://user-images.githubusercontent.com/72417905/138018209-19aa775b-5ea6-4075-9f25-0f1db6159e55.png)

Apresenta uma interface simples, seu funcionamento é utilizando as funções "Click" e "Style" do JQuery.

- Tela do jogo: Tabuleiro
![image](https://user-images.githubusercontent.com/72417905/138018464-a8796a0f-714e-42f2-a086-5cad5a3a8ed4.png)

Utiliza de 9 spans estilizados para terem as bordas removidas
Funciona usando o eventHandler do JQuery combinada com a função "click".

A cada jogada, são armazenadas as posições já utilizadas em dois arrays (um para x e outro para o).

Jogar, altera o texto e aciona a vez do próximo jogador.

![image](https://user-images.githubusercontent.com/72417905/138019162-62fdfca0-c65c-41cd-8cd2-cf14c6f1eefd.png)


Eles são responsáveis por não permitir lances repetidos e também por verificar se aquela jogada gerou algum vencedor.

![image](https://user-images.githubusercontent.com/72417905/138018990-5e3ebbb3-9196-47ec-85c8-1834e9ed0a16.png)
![image](https://user-images.githubusercontent.com/72417905/138019026-23b0ab0a-bb99-4f95-b8f8-dc63d060cd3d.png)

A função acima, é responsável por verificar os vencedores usando um array configurado com todas as posições vencedoras possíveis.
