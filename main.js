//Øvelse 10: Brug JavaScript's Fetch med Dropbox API
//
// Opret en simpel HTML-side med en knap.
// Når knappen klikkes, skal du bruge JavaScript's fetch til at sende en GET-forespørgsel for at hente alle filer og mapper i din "TestMappe".
// Vis filerne og mapperne på siden.
// Dokumentation: I dit repository inkluder den JavaScript-kode og html, du har skrevet.
// HUSK: du må ikke ligge din “Access Token” på github, så slet den inden du pusher din kode.

document.addEventListener("DOMContentLoaded", () => {

    const fetchButton = document.getElementById("fetchButton");

    const resultDiv = document.getElementById("results");

    const accessToken = "Insert Access Token here";

    fetchButton.addEventListener("click", () => {

        const apiEndpoint = "https://api.dropboxapi.com/2/files/list_folder";

        const path = "/TestMappe";

        fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Authorization": "Bearer" + accessToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                path: path
            })
        })
            .then(response => response.json())
            .then(data => {
                const entries = data.entries;
                let resultHTML = " ";

                if (entries.length > 0) {
                    entries.forEach(entry => {
                        resultHTML += `${entry.name} (${entry[".tag"]})<br>`;
                    });
                } else {
                    resultHTML = "There was no folders or files found";
                }
                resultDiv.innerHTML = resultHTML;
            });
    });
});

