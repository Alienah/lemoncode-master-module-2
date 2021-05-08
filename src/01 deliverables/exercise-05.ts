console.log("************** DELIVERABLE 05 *********************");

// ### 5. Slot Machine

// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un **contador de monedas** que automáticamente se irá incrementando conforme vayamos jugando.

// Cuando se llame al **método play** el número de monedas se debe incrementar de forma automática y debe generar **tres booleanos aleatorios** que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean `true`, y por tanto deberá mostrarse por consola el mensaje:

// ```js
// "Congratulations!!!. You won <número de monedas> coins!!";
// ```

// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina.
// En caso contrario deberá mostrar otro mensaje:

// ```js
// "Good luck next time!!".
// ```

// #### Ejemplo de uso

// ```js
// class SlothMachine {
//   /* ... */
// }

// const machine1 = new SlothMachine();
// machine1.play(); // "Good luck next time!!"
// machine1.play(); // "Good luck next time!!"
// machine1.play(); // "Congratulations!!!. You won 3 coins!!"
// machine1.play(); // "Good luck next time!!"
// machine1.play(); // "Congratulations!!!. You won 2 coins!!"
// ```

class SlothMachine {
  private totalCoins: number;

  constructor() {
    this.totalCoins = 0;
  }

  private getResults(): Array<boolean> {
    const list = [null,null,null];
    return list.map((item) => item = Boolean(Math.round(Math.random())));
  }

  private sumCoin(): void {
    this.totalCoins += 1;
  }

  private resetCoins(): void {
    this.totalCoins = 0;
  }

  private checkIsWinner(): Boolean {
    const results = this.getResults();
    return results.filter((result) => result).length === 3;
  }

  public play(): void {
    this.sumCoin();
    const hasWon = this.checkIsWinner();
    if (hasWon) {
      console.log(`Congratulations!!!. You won ${this.totalCoins} coins!!`);
      this.resetCoins();
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();


