

class Decorator{
    static drawLine(){
        console.log("-".repeat(42));
    }

    static presentMenu(welcome){
        this.drawLine();
        console.log(`${welcome}`);
        this.drawLine();
    }
}
module.exports = Decorator;