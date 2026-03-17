// Работаем с нодой (импорт)
const readline = require("readline");
const helper = require("./utils/helper");
const Decorator = require("./utils/decorator");

//Обращаемся к фреймворку для работы с переменной
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Работаем с двумя видами кавычек
const NAME_PROJ = '"NOTE"-"BOOK"';

let notes = [];

//Функция
const welcome = `Тебя приветствует приложение ${NAME_PROJ}`;

const welcomeApp = () => {
    Decorator.presentMenu(welcome);
    showMenu();
}

const addNote = () => {
    rl.question("Введите заголовок: ", (title) => {
        rl.question("Напишите текст заметки: ", (context) =>{
            const newNote = {
                id: notes.length + 1,
                title: title,
                content: context,
                date: new Date().toLocaleString()
            };
            notes.push(newNote);
            console.log(`Заметка ${newNote.title} сохранена!`);
            helper.statsNotes(notes);
            showMenu();
        }); 
    });

}; //Стрелочная функция

const showNotes = () => {
    Decorator.showFormatAllNotes(notes);
    showMenu()
};


// Меню программы
const showMenu = () => {
    Decorator.presentWelcomeMenu()
    helper.statsNotes(notes);
    rl.question("Выберите пункт от 1 до 4:", (choice) => {
        switch(choice){
            case '1':
                addNote();
                break;
            case '2':
                showNotes();
                break;
            case '3':
                deleteNote();
            case '4':
                console.log("Завершение программы")

            default:
                console.log("плаки плаки бурмалдаки");
                showMenu();
        }
    });
};

const deleteNote = () => {
    if(notes.length === 0){
        console.log("У вас пока нет бурмалды");
    }
    notes.forEach((note) => {
    console.log(`\n * [${note.id}] * ${note.title} *`);
    });
    rl.question(
        "Введите номер заметки для удаления или 0 для отмены: ",
        (choice) =>{
        let num = parseInt(choice);
        // if (num === 0){
        //     // showMenu();
        // }
       if(num > 0 && num <= notes.length){
        notes.splice(num -1, 1);
        console.log(`Заметка изничтожена O_o`);
        showMenu();
    }   else{
        console.log("Нет подходящей заметки")
        showMenu();
    }
    showMenu();
    },
    );
    showMenu();
};

welcomeApp();