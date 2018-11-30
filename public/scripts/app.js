$(document).ready(function() {
    console.log("Let's get coding!");
    $('form').on('submit', function(e) {
        e.preventDefault();

        var playerSearch = $('.player-input').val();
        var dodgerUrl = `/api/dodgerplayers/${playerSearch}`

        $.ajax({
            method: "GET",
            url: dodgerUrl,
            success: onSuccess,
            error: onerror
        });

        function onSuccess (response) {
            console.log(response);
            $('.display-player').empty();

            playerImage = `<img src="${response.image}">`;
            playerName = `<h2>${response.name}</h2>`;
            playerTown = `<p>${response.hometown}</p>`;
            playerRole = `<p>${response.position}</p>`;
            $('.display-player').append(playerName);
            $('.display-player').append(playerImage);
            $('.display-player').append(playerTown);
            $('.display-player').append(playerRole);

        }
    })
});