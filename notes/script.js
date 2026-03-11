// Работаем с нодой (импорт)
const readline = require("readline");

//Обращаемся к фреймворку для работы с переменной
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Работаем с двумя видами кавычек
const NAME_PROJ = '"NOTE"-"BOOK"';

let notes = [];

//Функция
let str = `Тебя приветствует приложение ${NAME_PROJ}`;

const addNote = () => {
    rl.question("Введите заголовок", (title) => {
        rl.question("Напишите текст заметки", (context) =>{
            const newNote = {
                id: notes.length + 1,
                title: title,
                content: context,
                date: new Date().toLocaleString()
            };
            notes.push(newNote);
            console.log(`Заметка ${newNote.title} сохранена!`);
            console.log(`Всего заметок: ${notes.length}`);
            showMenu();
        }); 
    });

}; //Стрелочная функция

const showNotes = () => {
    console.log("----Все ваши заметки----");
    notes.forEach((note) => {
        console.log("-".repeat(30));
        console.log(`${note.id} * ${note.date}`);
        console.log(`${note.title}`);
        console.log(`${note.content}`);
        console.log("-".repeat(30));
    });
};

const showMenu = () => {
    console.log(`${str}`);
    console.log("Главное меню");
    console.log(`Всего заметок: ${notes.length}`);
    console.log("1.Добавить заметку");
    console.log("2.Глянуть заметки(типо all)");

    rl.question("Выберите пункт от 1 до 2:", (choice) => {
        switch(choice){
            case '1':
                addNote();
                break;
            case '2':
                showNotes();
                break;
            default:
                console.log("плаки плаки бурмалдаки");
        }
    });
};

showMenu();