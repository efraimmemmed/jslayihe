const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const sortBtn = document.getElementById("sortBtn");
const list = document.getElementById("list");
const sortImg = document.getElementById("sortImg");
let flag = true;
let ascendingOrder = true;

sortBtn.addEventListener("click", () => {
    if (flag) {
        sortImg.src = "img/Frame.svg";
        console.log(sortImg.src)
        flag = !flag
    } else{
        sortImg.src = "img/Frame2.svg";
        console.log(sortImg.src)
        flag = !flag
    }

    const items = Array.from(list.children).sort((a, b) => {
        const aValue = a.firstElementChild.textContent.toLowerCase();
        const bValue = b.firstElementChild.textContent.toLowerCase();

        if (aValue < bValue) {
            return ascendingOrder ? -1 : 1;
        } else if (aValue > bValue) {
            return ascendingOrder ? 1 : -1;
        } else {
            return 0;
        }
    });

    list.innerHTML = "";
    items.forEach((item) => {
        list.appendChild(item);
    });
    ascendingOrder = !ascendingOrder;
});

clearBtn.addEventListener("click", () => {
    input.value = "";
});
addBtn.addEventListener("click", () => {
    if (input.value !== "") {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = input.value;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "x";
        deleteBtn.addEventListener("click", () => {
            list.removeChild(li);
        });
        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = "";
    }
});

