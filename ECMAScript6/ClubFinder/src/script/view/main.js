import '../component/search-bar.js';

import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("#clubList");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result)
        }catch(pesan){
            fallbackResult(pesan);
        }

        // console.log(searchElement.value);
    };

    const renderResult = results => {
        clubListElement.innerHTML = "";
        results.forEach( club => {

            const {strTeam, strTeamBadge, strDescriptionEN} = club;

            const clubElement = document.createElement("div");
            clubElement.setAttribute("class", "club");

            clubElement.innerHTML = `<img class="fan-art-club" src=" ${strTeamBadge} " alt="Fan Art">
                <div class="club-info">
                <h2> ${strTeam} </h2>
                <p> ${strDescriptionEN} </p>
                 </div>`;
            clubListElement.appendChild(clubElement);
        })

        const [irfan] = results;

        const {strTeam: nama_klub} = irfan;
        console.log(results);
    };

    const fallbackResult = message => {
        clubListElement.innerHTML = "";
        clubListElement.innerHTML += `<h2 class="placeholder"> ${message} </h2>`
                console.log(message);

    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;