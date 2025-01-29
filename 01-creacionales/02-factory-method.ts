/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
    prepare(): void;
}

class ChickenBurger implements Hamburger {
    prepare(): void {
        console.log("Preparing a delicious %cChicken Burger 🍔", COLORS.yellow);
    }
}

class BeefBurger implements Hamburger {
    prepare(): void {
        console.log("Preparing a delicious %cBeef Burger 🍔", COLORS.brown);
    }
}
class BeanBurger implements Hamburger {
    prepare(): void {
        console.log("Preparing a delicious %cBean Burger 🍔", COLORS.green);
    }
}

abstract class HamburgerStore {

    protected abstract createHamburger(): Hamburger;

    orderHamburger():void {
        const hamburger = this.createHamburger();
        hamburger.prepare();
    }
}

class ChickenBurgerStore extends HamburgerStore {
    override createHamburger(): Hamburger {
        return new ChickenBurger();
    }
}
class BeefBurgerRestauran extends HamburgerStore {
    override createHamburger(): Hamburger {
        return new BeefBurger();
    }
}
class BeanBurgerStore extends HamburgerStore {
    override createHamburger(): Hamburger {
        return new BeanBurger();
    }
}


function main() {
    let restaurant: HamburgerStore;
    const burgerType = prompt("What type of burger do you want? (chicken/beef/bean) .");
    switch (burgerType) {
        case "chicken":
            restaurant = new ChickenBurgerStore();
            break;
        case "beef":
            restaurant = new BeefBurgerRestauran();
            break;
        case "bean":
            restaurant = new BeanBurgerStore();
            break
        default:
            throw new Error("Sorry, we don't have that burger type 😢");
            break;
    }
    restaurant.orderHamburger();
}

main();