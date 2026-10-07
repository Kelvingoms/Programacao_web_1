/* let opcao = prompt("digite o combo desejado\n  1 - Combo Bug (Hambúrguer + Refri)\n 2 - Combo Deploy (Pizza + Suco) \n  3 - Combo Sênior (Salada + Água)")

switch (opcao) {
  case "1":
    alert("Pedido confirmado: Combo Bug\nHambúrguer  +Refri\nValor: R$ 19,99");
    break;
  case "2":
    alert("Pedido confirmado: Combo Deploy\nPizza +Suco\nValor: R$ 24,99");
    break;
  case "3":
    alert("Pedido confirmado: Combo Sênior\nSalada+Água\nValor: R$ 9,99");
    break;
  default:
    alert("Essa opção não é valid digite 1,2 ou 3");
} */



    let nome = prompt("qual o seu nome ?")
    let idade = prompt("qual a sua idade?")

    if (idade <18) {
        alert("voce é menor de idade")
    } else {
        alert("voce é maior  de idade então prossiga")
        let plano = prompt("qual plano voce quer assinar, 1 para basico, 2 para o pro ou 3 para VIP?")

         switch (plano) {
        case "1" : alert("parabens beneficio nenhum")

        break

        case "2" : alert("parabens não vai assistir anuncios")

        break

        case "3" : alert("parabens, não vai assistir anuncios e pode personalizar o site")
    }

    }

   