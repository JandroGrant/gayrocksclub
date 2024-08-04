fetch('./weeks.json')
.then(response => response.json())
.then(data => {
    data.forEach(album => {
        const block = document.querySelector(".main");
        let tracklist = ``;

        for (let i = 0; i < album.tracklist.length; i++) {
            tracklist = tracklist + `<li>` + album.tracklist[i] + `</li>`;
        }

        block.insertAdjacentHTML(
            "beforeend",
            `
                <div class="album">
                    <h3> <a href="">${album.week}</a> </h3>
                    <img src="${album.album_art}">
                    <h4>${album.artist} ~ ${album.title}</h4>
                    <h5>${album.runtime} ~ ${album.release_date}</h5>
                    <ol id="${album.id}">
                        ${tracklist}
                    </ol>
                    <hr>
                    <p>${album.summary}</p>
                    <p>~${album.suggestor}</p>
                </div>
            `
        );
    });
});