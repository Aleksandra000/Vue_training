document.addEventListener('DOMContentLoaded', function() {

    const btns = document.querySelectorAll(".btn");
    console.log(btns);
    btns.forEach(btn => btn.addEventListener("click", finishedTask))

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(function (el) {
        el.addEventListener('click', function (e) {
            let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = randomColor;
        })
    });

});

function finishedTask(event) {
    event.preventDefault();

    console.log(this.dataset.id);
    let li = document.querySelector(`li[data-id = "${this.dataset.id}"]`);
    console.log(li);

    li.classList.add("finished");

    this.classList.remove("btn-primary");//lub event.target zamiast this
    this.classList.add("btn-success");
    this.innerText="Zakończone";
    this.removeEventListener("click", finishedTask);
    this.addEventListener("click", blockRefresh);

}

function blockRefresh(e) {
    e.preventDefault();
    console.log("xxx");//sprawia ze po drugim kliknięciu nie odklikują się wszystkie jak przedtem
}