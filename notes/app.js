const stats = document.getElementById("stats");
const content = document.getElementById("content");

let notes = [];

async function loadNotes() {
  try {
    const res = await fetch("api/notes");
    notes = await res.json();
    if(notes.length === 0){
        stats.innerText = "У вас отстутсвуют заметки.";
    }
    else{
       stats.innerText = `Заметок ${notes.length}`; 
    }
  } catch (error) {
    console.log("Ощибка", error);
    stats.innerText = `Информации о заметках нет`;
  }
}

async function addNote() {
  const title = prompt("Введите название ");
  const content = prompt("Введите содержание ");
  try {
    await fetch("api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
  } catch (error) {
    console.log("ERROR", error.message);
  }
}

async function showNotes(){
    loadNotes();
    if(notes.length === 0){
        notes_conteiner.innerHTML = '<h2> Пока у вас нет заметок! </h2>';
    }
    let html = '<h2> --- Заметки --- </h2>';
    notes.forEach((note) => {
        html += `
        <div style = "background-color: #030202; color: #008f4a;"> 
        <small> [ ${note.id} ] ${note.date} </small>
        <strong> ${note.title} </strong>
        <p> ~~~~~~~~~~~~~~~~~~~~~~~~~~ </p>
        <strong> ${note.content} </strong>
        </div>
        `;
    });
    notes_conteiner.innerHTML = html;
}

async function deleteNote() {
    loadNotes();
    if(notes.length === 0){
        alert("Пока нечего удалять. Создайте заметку");
    }

    let list = '';
    notes.forEach(note => {
        list += `${note.id}: ${note.title}\n`;
    });
    list = list.trim(); 
}

loadNotes();