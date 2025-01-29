import { COLORS } from './../helpers/colors.ts';
/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

class Computer{
    public cpu: string = "cpu - Not Defined";
    public ram: string = "ram - Not Defined";
    public storage: string = "storage - Not Defined";
    public gpu?: string = "gpu - Not Defined";

    displayConfiguration(){
        console.log("Computer Configuration: \n" +
            `CPU: ${this.cpu}\n` +
            `RAM: ${this.ram}\n` +
            `Storage: ${this.storage}\n` +
            `GPU: ${this.gpu}`);
    }
}

class ComputerBuilder{
    private computer: Computer = new Computer();

    setCPU(cpu: string){
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram: string){
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string){
        this.computer.storage = storage;
        return this;
    }

    setGPU(gpu: string){
        this.computer.gpu = gpu;
        return this;
    }

    build(){
        return this.computer;
    }
}

function main(){
    const basicComputer = new ComputerBuilder()
        .setCPU("Core Duo 2")
        .setRAM("4GB")
        .setStorage("256GB")
        .build();
    console.log("%cBasic Computer: ", COLORS.blue);
    basicComputer.displayConfiguration();

    console.log("%cGamming Computer: ", COLORS.cyan);
    const gammingComputer = new ComputerBuilder()
        .setCPU("Ryzen 9")
        .setRAM("32GB")
        .setStorage("1TB")
        .setGPU("RTX 3090")
        .build();
    gammingComputer.displayConfiguration();
}

main();