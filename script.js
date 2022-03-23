const data = [
    {
        title: "US Dollar",
        sub: "$",
        text: "USD"
    },
    {
        title: "Euro",
        sub: "€",
        text: "EUR"
    },
    {
        title: "Chinese Yuan",
        sub: "¥",
        text: "CNY"
    },
    {
        title: "Thai Baht",
        sub: "฿",
        text: "THB"
    },
    {
        title: "British Pound Sterling",
        sub: "£",
        text: "GBP"
    },
    {
        title: "Ghanaian Cedi",
        sub: "₵",
        text: "GHS"
    },
    {
        title: "Japanese Yen",
        sub: "￥",
        text: "JPY"
    },
    {
        title: "Polish Zloty",
        sub: "zł",
        text: "PLN"
    }
    
];








function pageLoaded() {
    let cardBox = document.getElementById("CardBox");

    for (const card of data) { 
        let cardHTML = `
        <div class="cards">
            <div class="sub">
                <h1>${card.sub}</h1>
            </div>
            <h3>${card.title}</h3>
            <p>${card.text}</p>
            <button>Save 
                <span id="arrow" class="material-icons-outlined">
                arrow_forward
                </span>
            </button>
        </div>`;


            
        cardBox.insertAdjacentHTML("beforeend" , cardHTML);
    }


}




window.addEventListener("load", pageLoaded);