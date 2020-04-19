const main = function () {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const clubListElement = document.querySelector("#clubList");

    const onButtonSearchClicked = function () {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchClub(searchElement.value);
        // console.log(searchElement.value);
    };

    const renderResult = function (results) {
        clubListElement.innerHTML = "";
        results.forEach(function (club) {

            const {name, fanArt, description} = club;

            const clubElement = document.createElement("div");
            clubElement.setAttribute("class", "club");

            clubElement.innerHTML = `<img class="fan-art-club" src=" ${fanArt} " alt="Fan Art">
                <div class="club-info">
                <h2> ${name} </h2>
                <p> ${description} </p>
                 </div>`;
            clubListElement.appendChild(clubElement);
        })

        const [irfan] = results;

        const {name: nama_klub} = irfan;
        console.log(nama_klub);
    };

    const fallbackResult = function (message) {
        clubListElement.innerHTML = "";
        clubListElement.innerHTML += `<h2 class="placeholder"> ${message} </h2>`
                console.log(message);

    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};