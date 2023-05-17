# Jogo-da-Vaca
Jogo feito em JS no Projeto Desenvolve 2023, logo no ínicio da trilha de S.I.

É um jogo, cujo o personagem (uma vaca) precisa atravessar a rua e não ser atingida pelos objetos (carros). 
O objetivo é chegar na calçada do outro lado sem sofrer nenhuma batida, caso aconteça alguma colisão, o jogo reinicia. Se o personagem conseguir chegar do outro lado, é somado um ponto no placar.
É um jogo de lógica para aprendizado de Java Script. A realização desse projeto foi de fácil entendimento, pois a didática utilizada pelo professor era bem objetiva. 

# Explicação de algumas partes dentro do código:

Cada imagem tem um tamanho (size) X e Y.
Para cada tamanho se tem uma proporção, para que as imagens coubessem dentro da imagem primária (rua) e fazer com que o jogo se tornasse mais coerente.
Os personagens (vaca e os carros) possuem hitbox (deteccção de colisões) para que o programa conseguisse visualizar quando o carro batesse no personagem principal.
O placar faz o crédito das pontuações automáticamente a cada vez que o personagem chega ao fim do trajeto. Se o personagem chegar sem encostar nos carros, é somado um ponto. Se acabar colidindo é retirado um ponto.
Caso o personagem perca todos os pontos, o jogo acaba.
O programa possui também uma trilha sonora tematizada com os anos 80. 
Para cada colisão um efetito sonoro de batida é acionado e para cada ponto somado, um som de crédito também é acionado.

Foi um projeto simples, porém muito divertido de ser realizado.
