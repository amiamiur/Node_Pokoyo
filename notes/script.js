// Работаем с нодой
const readline = require("readline");

//Обращаемся к фреймворку для работы с переменной
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Работаем с двумя видами кавычек
const NAME_PROJ = '"NOTE"-"BOOK"';

//Функция
let str = `Тебя приветствует приложение ${NAME_PROJ}`;

const addNote = () => {
    rl.question("Введите заголовок", (title) => {
        rl.question("Напишите текст заметки", (context) =>{
            const newNote = {
                id: notes.length + 1,
                title: title,
                content: content,
                date: new Date().toLocaleString()
            };
        }); 
    });
}; //Стрелочная функция