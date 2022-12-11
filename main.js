const book_arr = [];
const form = document.querySelector(".my-form");
const add_book = document.querySelector('.btn');
const con = document.querySelector(".card-container");
form.style.display = 'none';
add_book.addEventListener('click', () => {
    const display = form.style.display == 'block'? 'none':'block';
    form.style.display = display;
});

const clearForm = () => {
    form.reset();
    form.style.display = 'none';
  }

function createBook(){
    con.textContent = "";
    book_arr.forEach((book)=>{
        
        const div = document.createElement("div");
        const para_title = document.createElement("p");
        const para_author = document.createElement("p");
        const para_page  = document.createElement("p");
        const para_read = document.createElement("p");
        const para_remove = document.createElement("p");
        const remove_btn = document.createElement('button');
        remove_btn.classList.add("card-button");
        div.classList.add("cards");
        remove_btn.textContent = "Remove";
        para_remove.appendChild(remove_btn);
        div.append(para_title, para_author, para_page, para_read, para_remove);        
        remove_btn.addEventListener("submit", (event)=> {
            event.preventDefault();
        });
            
        remove_btn.addEventListener("click", ()=> {     
            div.remove();
        });
        para_title.textContent = book.title;
        para_author.textContent = book.author;
        para_page.textContent = book.page  + " pages";
        if(book.read === "on"){
            para_read.textContent = "Read";
            para_read.style.color = "lightgreen";
        } else{
            para_read.textContent = "Not Read";
            para_read.style.color = "red";
        }
        para_read.addEventListener("click", ()=>{
            if(para_read.textContent == "Read"){
                para_read.textContent = "Not Read";
                para_read.style.color = "red";
            }else{
                para_read.textContent = "Read";
                para_read.style.color = "lightgreen";
            }
        })
        con.appendChild(div);
    })
}
createBook();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const form_data =  new FormData(form);
    const obj = Object.fromEntries(form_data);
    book_arr.push(obj);
    clearForm();
    createBook();
})
