

class Decorator{
    static drawLine(num,type){
        if(type === 1)
        console.log("=".repeat(num));
    
    else if(type === 2 ){
        console.log("-".repeat(num));
    }
    else if(type === 3){
        console.log("_".repeat(num));
    }
    else{
        console.log("~".repeat(num))
    }
    }

    static presentMenu(welcome){
        this.drawLine(50,2);
        console.log(`${welcome}`);
        this.drawLine(50,2);
    }

    static presentWelcomeMenu(){
        console.log("Главное меню");
        console.log("1.Добавить заметку");
        console.log("2.Глянуть заметки(типо all)");
        console.log("3.Удалить заметку");
        console.log("4.Выйти из программы")
    }

    //  ─ ┐  └ ┘ ├ ┤ ┬ ┴ ┼
    static showFormatNote(note){
        this.drawLine(50,1)
        console.log(`${note.id} * ${note.date}`);
        console.log(`│${note.title}`);
        console.log(`${note.content}`);
        this.drawLine(50,1);
    }

    static showFormatAllNotes(notes){
        console.log("----Все ваши заметки----");
        notes.forEach((note) => {
            this.showFormatNote(note);
    });
    }
}
module.exports = Decorator;