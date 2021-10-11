$(document).ready(() => {
  const casasX = [];
  const casasY = [];
  let play = $("#jogar");

  play.click(() => {
    let container = $("#container");
    let jogo = $("#jogo");

    jogo.css({ display: "flex" });
    container.css({ display: "none" });
  });
  $(".tabuleiro").click(() => {
    var item = $(".tabuleiro td");
    item.on("click", Jogar);
  });

  function Jogar() {
    let text = $("#mostradorDeVez");

    if (casasX.length <= casasY.length) 
    {
      if ($(this).children().length > 0) {
        alert("Não selecione uma casa que já tenha sido escolhida");
        return false;
      }

      text.html("Vez do jogador de O");
      var image = $("<img />").attr("src", "../images/letra-x.png");
      casasX.push(parseInt($(this).attr("id").slice(4, 5)));
    } else {

      if ($(this).children().length > 0) {
        alert("Não selecione uma casa que já tenha sido escolhida");
        return false;
      }

      text.html("Vez do jogador de X");
      var image = $("<img />").attr("src", "../images/dry-clean.png");
      casasY.push(parseInt($(this).attr("id").slice(4, 5)));
    }

    image.appendTo($(this));

    VerificarVitoria(casasX, casasY);

    return false;
  }
  function VerificarVitoria(casasX, casasY) {
    var posicoesVitoriosas = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    for (let i = 0; i < posicoesVitoriosas.length; i++) {
      if (
        casasX.includes(posicoesVitoriosas[i][0]) &&
        casasX.includes(posicoesVitoriosas[i][1]) &&
        casasX.includes(posicoesVitoriosas[i][2])
      ) {
        $("#jogo").css({ display: "none" });
        $("#vitoria-X").css({ display: "flex" });
        $("#vitoria-X").click(() => {
          location.reload();
        });
      } else if (
        casasY.includes(posicoesVitoriosas[i][0]) &&
        casasY.includes(posicoesVitoriosas[i][1]) &&
        casasY.includes(posicoesVitoriosas[i][2])
      ) {
        $("#jogo").css({ display: "none" });
        $("#vitoria-O").css({ display: "flex" });
        $("#vitoria-O").click(() => {
          location.reload();
        });
      }
    }
    if (
      (casasX.length == 5 && casasY.length == 4) ||
      (casasX.length == 4 && casasY.length == 5)
    ) {
      $("#jogo").css({ display: "none" });
      $("#velha").css({ display: "flex" });
      $("#velha").click(() => {
        location.reload();
      });
    } else return false;
  }
});
