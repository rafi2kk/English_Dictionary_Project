function searchWord() {

    let word = document.getElementById("wordInput").value.toLowerCase();

    let result = document.getElementById("result");

    let dictionary = {
        apple: "Яблоко",
        book: "Книга",
        water: "Вода",
        computer: "Компьютер",
        student: "Студент"
    };

    if (dictionary[word]) {
        result.innerHTML = dictionary[word];
    } else {
        result.innerHTML = "Word not found";
    }
}


let dictionary = {
    apple: "Яблоко",
    book: "Книга",
    water: "Вода",
    computer: "Компьютер",
    student: "Студент",
    teacher: "Учитель",
    phone: "Телефон",
    window: "Окно",
    table: "Стол"
};