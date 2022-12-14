
// // fetch github api 
fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
        // console.log(data[0]);
        // console.log(data[0].avatar_url);
        // console.log(data[0].login);
        // console.log(data[0].html_url);

        // **********************************card-1************************************
        document.getElementById("profile1")
            .setAttribute("src", data[0].avatar_url);

        document.getElementById("username1")
            .innerText = data[0].login;

        document.getElementById("visit-profile1")
            .setAttribute("href", data[0].html_url);

        // **********************************card-2************************************
        document.getElementById("profile2")
            .setAttribute("src", data[3].avatar_url);

        document.getElementById("username2")
            .innerText = data[3].login;

        document.getElementById("visit-profile2")
            .setAttribute("href", data[3].html_url);

        // **********************************card-3************************************

        document.getElementById("profile3")
            .setAttribute("src", data[7].avatar_url);

        document.getElementById("username3")
            .innerText = data[7].login;

        document.getElementById("visit-profile3")
            .setAttribute("href", data[7].html_url);

        // **********************************card-4************************************
        document.getElementById("profile4")
            .setAttribute("src", data[16].avatar_url);

        document.getElementById("username4")
            .innerText = data[16].login;

        document.getElementById("visit-profile4")
            .setAttribute("href", data[16].html_url);

        // **********************************card-5************************************
        document.getElementById("profile5")
            .setAttribute("src", data[9].avatar_url);

        document.getElementById("username5")
            .innerText = data[9].login;

        document.getElementById("visit-profile5")
            .setAttribute("href", data[9].html_url);

        // **********************************card-6************************************
        document.getElementById("profile6")
            .setAttribute("src", data[22].avatar_url);

        document.getElementById("username6")
            .innerText = data[22].login;

        document.getElementById("visit-profile6")
            .setAttribute("href", data[22].html_url);


        // **********************************card-7************************************
        document.getElementById("profile7")
            .setAttribute("src", data[13].avatar_url);

        document.getElementById("username7")
            .innerText = data[13].login;

        document.getElementById("visit-profile7")
            .setAttribute("href", data[13].html_url);


        // **********************************card-8************************************
        document.getElementById("profile8")
            .setAttribute("src", data[15].avatar_url);

        document.getElementById("username8")
            .innerText = data[15].login;

        document.getElementById("visit-profile8")
            .setAttribute("href", data[15].html_url);


        // **********************************card-9************************************
        document.getElementById("profile9")
            .setAttribute("src", data[18].avatar_url);

        document.getElementById("username9")
            .innerText = data[18].login;

        document.getElementById("visit-profile9")
            .setAttribute("href", data[18].html_url);

        // **********************************card-10************************************
        document.getElementById("profile10")
            .setAttribute("src", data[20].avatar_url);

        document.getElementById("username10")
            .innerText = data[20].login;

        document.getElementById("visit-profile10")
            .setAttribute("href", data[20].html_url);
    });