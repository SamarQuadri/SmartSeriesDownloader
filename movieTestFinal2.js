const movieName = document.getElementById('movieName');
movieName.addEventListener('input', function (e) {
    e.preventDefault()
    const API_KEY = '50f4b6f4afaba24883e6a59c13648f62';
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
    let api_api = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${movieName.value}&include_adult=false`

    async function getSeries() {
        let response = await fetch(api_api);
        let data = await response.json()
        return data;
    }
    let listTemp = []
    getSeries().then(function (data) {
        for (let series of data.results) {
            // console.log(series);
            listTemp.push(series.name)
        }
        $('#movieName').autocomplete({
            source: listTemp,
            minLength: 1,
            autoFocus: true,
        })
    })

})
let movieSubmit = document.getElementById('movieSubmit');
movieSubmit.addEventListener('click', function () {
    let seasonNum = document.getElementById('seasonNum');
    let episodeNum = document.getElementById('episodeNum');
    let movieTem = document.getElementById('movieTem');
    let movieName = document.getElementById('movieName');
    let splitMovieName = movieName.value.split(" ");
    let firstMovieName = splitMovieName[0];
    let secondMovieName = splitMovieName[1];
    let thirdMovieName = splitMovieName[2];
    let fourthName = splitMovieName[3];
    let fifthName = splitMovieName[4];
    let sixthName = splitMovieName[5];
    let qualityNum = document.querySelectorAll('input[name="qualityNum"]');
    let selectedValueQuality;
    for (let sv of qualityNum) {
        if (sv.checked) {
            selectedValueQuality = sv.value;
            break;
        }
    }
    let listLink = [];
    let link = ''
    if (sixthName == null) {
        if (fifthName == null) {
            if (fourthName == null) {
                if (thirdMovieName == null) {
                    if (secondMovieName == null) {
                        if (firstMovieName == null) {
                            movieTem.innerHTML = 'Please enter a series name';
                        } else {
                            firstMovieName = firstMovieName.charAt(0).toUpperCase() + firstMovieName.slice(1);
                            // All Links
                            let formatVid = ['p.TagName.mkv', 'p.x264.TagName.mkv', 'p.HDTV.TagName.mkv', 'p.HDTV.x264.TagName.mkv', 'p.WEB-DL.x264.TagName.mkv', 'p.WEB.x264.TagName.mkv', 'p.WEBRip.x264.TagName.mkv', 'p.BluRay.x264.TagName.mkv']
                            let serverNameBox = ['drbox', 'downbox']
                            for(let j = 0; j < formatVid.length; j++){
                                for(let k=0; k<serverNameBox.length; k++){    
                                    for (let index = 1; index < 6; index++) {
                                        link = `https://dl${index}.` + serverNameBox[k] + `.xyz/Series/${firstMovieName}/S${seasonNum.value}/${firstMovieName}.S${seasonNum.value}E${episodeNum.value}.${selectedValueQuality}` + formatVid[j] 
                                        listLink.push(link);
                                    }
                                }  
                            }
                            // Inserting the link 
                            for(let i = 0; i<listLink.length; i++){
                                let movTem =  `<a id="movieLinkDwnId` + i + `" target="iframeLink` + i + `" href="` + listLink[i] + `">Link</a>`
                                movieTem.insertAdjacentHTML("beforeend", movTem)
                                
                            }
                            let movieLinkDwnId0 = document.getElementById('movieLinkDwnId0').click();
                            let movieLinkDwnId1 = document.getElementById('movieLinkDwnId1').click();
                            let movieLinkDwnId2 = document.getElementById('movieLinkDwnId2').click();
                            let movieLinkDwnId3 = document.getElementById('movieLinkDwnId3').click();
                            let movieLinkDwnId4 = document.getElementById('movieLinkDwnId4').click();
                            let movieLinkDwnId5 = document.getElementById('movieLinkDwnId5').click();
                            let movieLinkDwnId6 = document.getElementById('movieLinkDwnId6').click();
                            let movieLinkDwnId7 = document.getElementById('movieLinkDwnId7').click();
                            let movieLinkDwnId8 = document.getElementById('movieLinkDwnId8').click();
                            let movieLinkDwnId9 = document.getElementById('movieLinkDwnId9').click();
                            let movieLinkDwnId10 = document.getElementById('movieLinkDwnId10').click();
                            let movieLinkDwnId11 = document.getElementById('movieLinkDwnId11').click();
                            let movieLinkDwnId12 = document.getElementById('movieLinkDwnId12').click();
                            let movieLinkDwnId13 = document.getElementById('movieLinkDwnId13').click();
                            let movieLinkDwnId14 = document.getElementById('movieLinkDwnId14').click();
                            let movieLinkDwnId15 = document.getElementById('movieLinkDwnId15').click();
                            let movieLinkDwnId16 = document.getElementById('movieLinkDwnId16').click();
                            let movieLinkDwnId17 = document.getElementById('movieLinkDwnId17').click();
                            let movieLinkDwnId18 = document.getElementById('movieLinkDwnId18').click();
                            let movieLinkDwnId19 = document.getElementById('movieLinkDwnId19').click();
                            let movieLinkDwnId20 = document.getElementById('movieLinkDwnId20').click();
                            let movieLinkDwnId21 = document.getElementById('movieLinkDwnId21').click();
                            let movieLinkDwnId22 = document.getElementById('movieLinkDwnId22').click();
                            let movieLinkDwnId23 = document.getElementById('movieLinkDwnId23').click();
                            let movieLinkDwnId24 = document.getElementById('movieLinkDwnId24').click();
                            let movieLinkDwnId25 = document.getElementById('movieLinkDwnId25').click();
                            let movieLinkDwnId26 = document.getElementById('movieLinkDwnId26').click();
                            let movieLinkDwnId27 = document.getElementById('movieLinkDwnId27').click();
                            let movieLinkDwnId28 = document.getElementById('movieLinkDwnId28').click();
                            let movieLinkDwnId29 = document.getElementById('movieLinkDwnId29').click();
                            let movieLinkDwnId30 = document.getElementById('movieLinkDwnId30').click();
                            let movieLinkDwnId31 = document.getElementById('movieLinkDwnId31').click();
                            let movieLinkDwnId32 = document.getElementById('movieLinkDwnId32').click();
                            let movieLinkDwnId33 = document.getElementById('movieLinkDwnId33').click();
                            let movieLinkDwnId34 = document.getElementById('movieLinkDwnId34').click();
                            let movieLinkDwnId35 = document.getElementById('movieLinkDwnId35').click();
                            let movieLinkDwnId36 = document.getElementById('movieLinkDwnId36').click();
                            let movieLinkDwnId37 = document.getElementById('movieLinkDwnId37').click();
                            let movieLinkDwnId38 = document.getElementById('movieLinkDwnId38').click();
                            let movieLinkDwnId39 = document.getElementById('movieLinkDwnId39').click();
                            let movieLinkDwnId40 = document.getElementById('movieLinkDwnId40').click();
                            let movieLinkDwnId41 = document.getElementById('movieLinkDwnId41').click();
                            let movieLinkDwnId42 = document.getElementById('movieLinkDwnId42').click();
                            let movieLinkDwnId43 = document.getElementById('movieLinkDwnId43').click();
                            let movieLinkDwnId44 = document.getElementById('movieLinkDwnId44').click();
                            let movieLinkDwnId45 = document.getElementById('movieLinkDwnId45').click();
                            let movieLinkDwnId46 = document.getElementById('movieLinkDwnId46').click();
                            let movieLinkDwnId47 = document.getElementById('movieLinkDwnId47').click();
                            let movieLinkDwnId48 = document.getElementById('movieLinkDwnId48').click();
                            let movieLinkDwnId49 = document.getElementById('movieLinkDwnId49').click();
                            let movieLinkDwnId50 = document.getElementById('movieLinkDwnId50').click();
                            let movieLinkDwnId51 = document.getElementById('movieLinkDwnId51').click();
                            let movieLinkDwnId52 = document.getElementById('movieLinkDwnId52').click();
                            let movieLinkDwnId53 = document.getElementById('movieLinkDwnId53').click();
                            let movieLinkDwnId54 = document.getElementById('movieLinkDwnId54').click();
                            let movieLinkDwnId55 = document.getElementById('movieLinkDwnId55').click();
                            let movieLinkDwnId56 = document.getElementById('movieLinkDwnId56').click();
                            let movieLinkDwnId57 = document.getElementById('movieLinkDwnId57').click();
                            let movieLinkDwnId58 = document.getElementById('movieLinkDwnId58').click();
                            let movieLinkDwnId59 = document.getElementById('movieLinkDwnId59').click();
                            let movieLinkDwnId60 = document.getElementById('movieLinkDwnId60').click();
                            let movieLinkDwnId61 = document.getElementById('movieLinkDwnId61').click();
                            let movieLinkDwnId62 = document.getElementById('movieLinkDwnId62').click();
                            let movieLinkDwnId63 = document.getElementById('movieLinkDwnId63').click();
                            let movieLinkDwnId64 = document.getElementById('movieLinkDwnId64').click();
                            let movieLinkDwnId65 = document.getElementById('movieLinkDwnId65').click();
                            let movieLinkDwnId66 = document.getElementById('movieLinkDwnId66').click();
                            let movieLinkDwnId67 = document.getElementById('movieLinkDwnId67').click();
                            let movieLinkDwnId68 = document.getElementById('movieLinkDwnId68').click();
                            let movieLinkDwnId69 = document.getElementById('movieLinkDwnId69').click();
                            let movieLinkDwnId70 = document.getElementById('movieLinkDwnId70').click();
                            let movieLinkDwnId71 = document.getElementById('movieLinkDwnId71').click();
                            let movieLinkDwnId72 = document.getElementById('movieLinkDwnId72').click();
                            let movieLinkDwnId73 = document.getElementById('movieLinkDwnId73').click();
                            let movieLinkDwnId74 = document.getElementById('movieLinkDwnId74').click();
                            let movieLinkDwnId75 = document.getElementById('movieLinkDwnId75').click();
                            let movieLinkDwnId76 = document.getElementById('movieLinkDwnId76').click();
                            let movieLinkDwnId77 = document.getElementById('movieLinkDwnId77').click();
                            let movieLinkDwnId78 = document.getElementById('movieLinkDwnId78').click();
                            let movieLinkDwnId79 = document.getElementById('movieLinkDwnId79').click();
                            let movieLinkDwnId80 = document.getElementById('movieLinkDwnId80').click();
                        }
                    } else {
                        firstMovieName = firstMovieName.charAt(0).toUpperCase() + firstMovieName.slice(1)
                        secondMovieName = secondMovieName.charAt(0).toUpperCase() + secondMovieName.slice(1);
                        // All Links
                        let formatVid = ['p.TagName.mkv', 'p.x264.TagName.mkv', 'p.HDTV.TagName.mkv', 'p.HDTV.x264.TagName.mkv', 'p.WEB-DL.x264.TagName.mkv', 'p.WEB.x264.TagName.mkv', 'p.WEBRip.x264.TagName.mkv', 'p.BluRay.x264.TagName.mkv']
                        let serverNameBox = ['drbox', 'downbox']
                        for(let j = 0; j < formatVid.length; j++){
                            for(let k=0; k<serverNameBox.length; k++){    
                                for (let index = 1; index < 6; index++) {
                                    link = `https://dl${index}.` + serverNameBox[k] + `.xyz/Series/${firstMovieName}%20${secondMovieName}/S${seasonNum.value}/${firstMovieName}.${secondMovieName}.S${seasonNum.value}E${episodeNum.value}.${selectedValueQuality}` + formatVid[j] 
                                    listLink.push(link);
                                }
                            }  
                        }
                        // Inserting the link 
                        for(let i = 0; i<listLink.length; i++){
                            let movTem =  `<a id="movieLinkDwnId` + i + `" target="iframeLink` + i + `" href="` + listLink[i] + `">Link</a>`
                            movieTem.insertAdjacentHTML("beforeend", movTem)
                            
                        }
                        let movieLinkDwnId0 = document.getElementById('movieLinkDwnId0').click();
                        let movieLinkDwnId1 = document.getElementById('movieLinkDwnId1').click();
                        let movieLinkDwnId2 = document.getElementById('movieLinkDwnId2').click();
                        let movieLinkDwnId3 = document.getElementById('movieLinkDwnId3').click();
                        let movieLinkDwnId4 = document.getElementById('movieLinkDwnId4').click();
                        let movieLinkDwnId5 = document.getElementById('movieLinkDwnId5').click();
                        let movieLinkDwnId6 = document.getElementById('movieLinkDwnId6').click();
                        let movieLinkDwnId7 = document.getElementById('movieLinkDwnId7').click();
                        let movieLinkDwnId8 = document.getElementById('movieLinkDwnId8').click();
                        let movieLinkDwnId9 = document.getElementById('movieLinkDwnId9').click();
                        let movieLinkDwnId10 = document.getElementById('movieLinkDwnId10').click();
                        let movieLinkDwnId11 = document.getElementById('movieLinkDwnId11').click();
                        let movieLinkDwnId12 = document.getElementById('movieLinkDwnId12').click();
                        let movieLinkDwnId13 = document.getElementById('movieLinkDwnId13').click();
                        let movieLinkDwnId14 = document.getElementById('movieLinkDwnId14').click();
                        let movieLinkDwnId15 = document.getElementById('movieLinkDwnId15').click();
                        let movieLinkDwnId16 = document.getElementById('movieLinkDwnId16').click();
                        let movieLinkDwnId17 = document.getElementById('movieLinkDwnId17').click();
                        let movieLinkDwnId18 = document.getElementById('movieLinkDwnId18').click();
                        let movieLinkDwnId19 = document.getElementById('movieLinkDwnId19').click();
                        let movieLinkDwnId20 = document.getElementById('movieLinkDwnId20').click();
                        let movieLinkDwnId21 = document.getElementById('movieLinkDwnId21').click();
                        let movieLinkDwnId22 = document.getElementById('movieLinkDwnId22').click();
                        let movieLinkDwnId23 = document.getElementById('movieLinkDwnId23').click();
                        let movieLinkDwnId24 = document.getElementById('movieLinkDwnId24').click();
                        let movieLinkDwnId25 = document.getElementById('movieLinkDwnId25').click();
                        let movieLinkDwnId26 = document.getElementById('movieLinkDwnId26').click();
                        let movieLinkDwnId27 = document.getElementById('movieLinkDwnId27').click();
                        let movieLinkDwnId28 = document.getElementById('movieLinkDwnId28').click();
                        let movieLinkDwnId29 = document.getElementById('movieLinkDwnId29').click();
                        let movieLinkDwnId30 = document.getElementById('movieLinkDwnId30').click();
                        let movieLinkDwnId31 = document.getElementById('movieLinkDwnId31').click();
                        let movieLinkDwnId32 = document.getElementById('movieLinkDwnId32').click();
                        let movieLinkDwnId33 = document.getElementById('movieLinkDwnId33').click();
                        let movieLinkDwnId34 = document.getElementById('movieLinkDwnId34').click();
                        let movieLinkDwnId35 = document.getElementById('movieLinkDwnId35').click();
                        let movieLinkDwnId36 = document.getElementById('movieLinkDwnId36').click();
                        let movieLinkDwnId37 = document.getElementById('movieLinkDwnId37').click();
                        let movieLinkDwnId38 = document.getElementById('movieLinkDwnId38').click();
                        let movieLinkDwnId39 = document.getElementById('movieLinkDwnId39').click();
                        let movieLinkDwnId40 = document.getElementById('movieLinkDwnId40').click();
                        let movieLinkDwnId41 = document.getElementById('movieLinkDwnId41').click();
                        let movieLinkDwnId42 = document.getElementById('movieLinkDwnId42').click();
                        let movieLinkDwnId43 = document.getElementById('movieLinkDwnId43').click();
                        let movieLinkDwnId44 = document.getElementById('movieLinkDwnId44').click();
                        let movieLinkDwnId45 = document.getElementById('movieLinkDwnId45').click();
                        let movieLinkDwnId46 = document.getElementById('movieLinkDwnId46').click();
                        let movieLinkDwnId47 = document.getElementById('movieLinkDwnId47').click();
                        let movieLinkDwnId48 = document.getElementById('movieLinkDwnId48').click();
                        let movieLinkDwnId49 = document.getElementById('movieLinkDwnId49').click();
                        let movieLinkDwnId50 = document.getElementById('movieLinkDwnId50').click();
                        let movieLinkDwnId51 = document.getElementById('movieLinkDwnId51').click();
                        let movieLinkDwnId52 = document.getElementById('movieLinkDwnId52').click();
                        let movieLinkDwnId53 = document.getElementById('movieLinkDwnId53').click();
                        let movieLinkDwnId54 = document.getElementById('movieLinkDwnId54').click();
                        let movieLinkDwnId55 = document.getElementById('movieLinkDwnId55').click();
                        let movieLinkDwnId56 = document.getElementById('movieLinkDwnId56').click();
                        let movieLinkDwnId57 = document.getElementById('movieLinkDwnId57').click();
                        let movieLinkDwnId58 = document.getElementById('movieLinkDwnId58').click();
                        let movieLinkDwnId59 = document.getElementById('movieLinkDwnId59').click();
                        let movieLinkDwnId60 = document.getElementById('movieLinkDwnId60').click();
                        let movieLinkDwnId61 = document.getElementById('movieLinkDwnId61').click();
                        let movieLinkDwnId62 = document.getElementById('movieLinkDwnId62').click();
                        let movieLinkDwnId63 = document.getElementById('movieLinkDwnId63').click();
                        let movieLinkDwnId64 = document.getElementById('movieLinkDwnId64').click();
                        let movieLinkDwnId65 = document.getElementById('movieLinkDwnId65').click();
                        let movieLinkDwnId66 = document.getElementById('movieLinkDwnId66').click();
                        let movieLinkDwnId67 = document.getElementById('movieLinkDwnId67').click();
                        let movieLinkDwnId68 = document.getElementById('movieLinkDwnId68').click();
                        let movieLinkDwnId69 = document.getElementById('movieLinkDwnId69').click();
                        let movieLinkDwnId70 = document.getElementById('movieLinkDwnId70').click();
                        let movieLinkDwnId71 = document.getElementById('movieLinkDwnId71').click();
                        let movieLinkDwnId72 = document.getElementById('movieLinkDwnId72').click();
                        let movieLinkDwnId73 = document.getElementById('movieLinkDwnId73').click();
                        let movieLinkDwnId74 = document.getElementById('movieLinkDwnId74').click();
                        let movieLinkDwnId75 = document.getElementById('movieLinkDwnId75').click();
                        let movieLinkDwnId76 = document.getElementById('movieLinkDwnId76').click();
                        let movieLinkDwnId77 = document.getElementById('movieLinkDwnId77').click();
                        let movieLinkDwnId78 = document.getElementById('movieLinkDwnId78').click();
                        let movieLinkDwnId79 = document.getElementById('movieLinkDwnId79').click();
                        let movieLinkDwnId80 = document.getElementById('movieLinkDwnId80').click();
                    }
                } else {
                    firstMovieName = firstMovieName.charAt(0).toUpperCase() + firstMovieName.slice(1);
                    secondMovieName = secondMovieName.charAt(0).toUpperCase() + secondMovieName.slice(1);
                    thirdMovieName = thirdMovieName.charAt(0).toUpperCase() + thirdMovieName.slice(1);
                     // All Links
                     let formatVid = ['p.TagName.mkv', 'p.x264.TagName.mkv', 'p.HDTV.TagName.mkv', 'p.HDTV.x264.TagName.mkv', 'p.WEB-DL.x264.TagName.mkv', 'p.WEB.x264.TagName.mkv', 'p.WEBRip.x264.TagName.mkv', 'p.BluRay.x264.TagName.mkv']
                     let serverNameBox = ['drbox', 'downbox']
                     for(let j = 0; j < formatVid.length; j++){
                         for(let k=0; k<serverNameBox.length; k++){    
                             for (let index = 1; index < 6; index++) {
                                 link = `https://dl${index}.` + serverNameBox[k] + `.xyz/Series/${firstMovieName}%20${secondMovieName}%20${thirdMovieName}/S${seasonNum.value}/${firstMovieName}.${secondMovieName}.${thirdMovieName}.S${seasonNum.value}E${episodeNum.value}.${selectedValueQuality}` + formatVid[j] 
                                 listLink.push(link);
                             }
                         }  
                     }
                    // Inserting the link 
                    for(let i = 0; i<listLink.length; i++){
                        let movTem =  `<a id="movieLinkDwnId` + i + `" target="iframeLink` + i + `" href="` + listLink[i] + `">Link</a>`
                        movieTem.insertAdjacentHTML("beforeend", movTem)
                        
                    }
                    let movieLinkDwnId0 = document.getElementById('movieLinkDwnId0').click();
                    let movieLinkDwnId1 = document.getElementById('movieLinkDwnId1').click();
                    let movieLinkDwnId2 = document.getElementById('movieLinkDwnId2').click();
                    let movieLinkDwnId3 = document.getElementById('movieLinkDwnId3').click();
                    let movieLinkDwnId4 = document.getElementById('movieLinkDwnId4').click();
                    let movieLinkDwnId5 = document.getElementById('movieLinkDwnId5').click();
                    let movieLinkDwnId6 = document.getElementById('movieLinkDwnId6').click();
                    let movieLinkDwnId7 = document.getElementById('movieLinkDwnId7').click();
                    let movieLinkDwnId8 = document.getElementById('movieLinkDwnId8').click();
                    let movieLinkDwnId9 = document.getElementById('movieLinkDwnId9').click();
                    let movieLinkDwnId10 = document.getElementById('movieLinkDwnId10').click();
                    let movieLinkDwnId11 = document.getElementById('movieLinkDwnId11').click();
                    let movieLinkDwnId12 = document.getElementById('movieLinkDwnId12').click();
                    let movieLinkDwnId13 = document.getElementById('movieLinkDwnId13').click();
                    let movieLinkDwnId14 = document.getElementById('movieLinkDwnId14').click();
                    let movieLinkDwnId15 = document.getElementById('movieLinkDwnId15').click();
                    let movieLinkDwnId16 = document.getElementById('movieLinkDwnId16').click();
                    let movieLinkDwnId17 = document.getElementById('movieLinkDwnId17').click();
                    let movieLinkDwnId18 = document.getElementById('movieLinkDwnId18').click();
                    let movieLinkDwnId19 = document.getElementById('movieLinkDwnId19').click();
                    let movieLinkDwnId20 = document.getElementById('movieLinkDwnId20').click();
                    let movieLinkDwnId21 = document.getElementById('movieLinkDwnId21').click();
                    let movieLinkDwnId22 = document.getElementById('movieLinkDwnId22').click();
                    let movieLinkDwnId23 = document.getElementById('movieLinkDwnId23').click();
                    let movieLinkDwnId24 = document.getElementById('movieLinkDwnId24').click();
                    let movieLinkDwnId25 = document.getElementById('movieLinkDwnId25').click();
                    let movieLinkDwnId26 = document.getElementById('movieLinkDwnId26').click();
                    let movieLinkDwnId27 = document.getElementById('movieLinkDwnId27').click();
                    let movieLinkDwnId28 = document.getElementById('movieLinkDwnId28').click();
                    let movieLinkDwnId29 = document.getElementById('movieLinkDwnId29').click();
                    let movieLinkDwnId30 = document.getElementById('movieLinkDwnId30').click();
                    let movieLinkDwnId31 = document.getElementById('movieLinkDwnId31').click();
                    let movieLinkDwnId32 = document.getElementById('movieLinkDwnId32').click();
                    let movieLinkDwnId33 = document.getElementById('movieLinkDwnId33').click();
                    let movieLinkDwnId34 = document.getElementById('movieLinkDwnId34').click();
                    let movieLinkDwnId35 = document.getElementById('movieLinkDwnId35').click();
                    let movieLinkDwnId36 = document.getElementById('movieLinkDwnId36').click();
                    let movieLinkDwnId37 = document.getElementById('movieLinkDwnId37').click();
                    let movieLinkDwnId38 = document.getElementById('movieLinkDwnId38').click();
                    let movieLinkDwnId39 = document.getElementById('movieLinkDwnId39').click();
                    let movieLinkDwnId40 = document.getElementById('movieLinkDwnId40').click();
                    let movieLinkDwnId41 = document.getElementById('movieLinkDwnId41').click();
                    let movieLinkDwnId42 = document.getElementById('movieLinkDwnId42').click();
                    let movieLinkDwnId43 = document.getElementById('movieLinkDwnId43').click();
                    let movieLinkDwnId44 = document.getElementById('movieLinkDwnId44').click();
                    let movieLinkDwnId45 = document.getElementById('movieLinkDwnId45').click();
                    let movieLinkDwnId46 = document.getElementById('movieLinkDwnId46').click();
                    let movieLinkDwnId47 = document.getElementById('movieLinkDwnId47').click();
                    let movieLinkDwnId48 = document.getElementById('movieLinkDwnId48').click();
                    let movieLinkDwnId49 = document.getElementById('movieLinkDwnId49').click();
                    let movieLinkDwnId50 = document.getElementById('movieLinkDwnId50').click();
                    let movieLinkDwnId51 = document.getElementById('movieLinkDwnId51').click();
                    let movieLinkDwnId52 = document.getElementById('movieLinkDwnId52').click();
                    let movieLinkDwnId53 = document.getElementById('movieLinkDwnId53').click();
                    let movieLinkDwnId54 = document.getElementById('movieLinkDwnId54').click();
                    let movieLinkDwnId55 = document.getElementById('movieLinkDwnId55').click();
                    let movieLinkDwnId56 = document.getElementById('movieLinkDwnId56').click();
                    let movieLinkDwnId57 = document.getElementById('movieLinkDwnId57').click();
                    let movieLinkDwnId58 = document.getElementById('movieLinkDwnId58').click();
                    let movieLinkDwnId59 = document.getElementById('movieLinkDwnId59').click();
                    let movieLinkDwnId60 = document.getElementById('movieLinkDwnId60').click();
                    let movieLinkDwnId61 = document.getElementById('movieLinkDwnId61').click();
                    let movieLinkDwnId62 = document.getElementById('movieLinkDwnId62').click();
                    let movieLinkDwnId63 = document.getElementById('movieLinkDwnId63').click();
                    let movieLinkDwnId64 = document.getElementById('movieLinkDwnId64').click();
                    let movieLinkDwnId65 = document.getElementById('movieLinkDwnId65').click();
                    let movieLinkDwnId66 = document.getElementById('movieLinkDwnId66').click();
                    let movieLinkDwnId67 = document.getElementById('movieLinkDwnId67').click();
                    let movieLinkDwnId68 = document.getElementById('movieLinkDwnId68').click();
                    let movieLinkDwnId69 = document.getElementById('movieLinkDwnId69').click();
                    let movieLinkDwnId70 = document.getElementById('movieLinkDwnId70').click();
                    let movieLinkDwnId71 = document.getElementById('movieLinkDwnId71').click();
                    let movieLinkDwnId72 = document.getElementById('movieLinkDwnId72').click();
                    let movieLinkDwnId73 = document.getElementById('movieLinkDwnId73').click();
                    let movieLinkDwnId74 = document.getElementById('movieLinkDwnId74').click();
                    let movieLinkDwnId75 = document.getElementById('movieLinkDwnId75').click();
                    let movieLinkDwnId76 = document.getElementById('movieLinkDwnId76').click();
                    let movieLinkDwnId77 = document.getElementById('movieLinkDwnId77').click();
                    let movieLinkDwnId78 = document.getElementById('movieLinkDwnId78').click();
                    let movieLinkDwnId79 = document.getElementById('movieLinkDwnId79').click();
                    let movieLinkDwnId80 = document.getElementById('movieLinkDwnId80').click();
                }
            } else {
                firstMovieName = firstMovieName.charAt(0).toUpperCase() + firstMovieName.slice(1);
                secondMovieName = secondMovieName.charAt(0).toUpperCase() + secondMovieName.slice(1);
                thirdMovieName = thirdMovieName.charAt(0).toUpperCase() + thirdMovieName.slice(1);
                fourthName = fourthName.charAt(0).toUpperCase() + fourthName.slice(1);
                // All Links
                let formatVid = ['p.TagName.mkv', 'p.x264.TagName.mkv', 'p.HDTV.TagName.mkv', 'p.HDTV.x264.TagName.mkv', 'p.WEB-DL.x264.TagName.mkv', 'p.WEB.x264.TagName.mkv', 'p.WEBRip.x264.TagName.mkv', 'p.BluRay.x264.TagName.mkv']
                let serverNameBox = ['drbox', 'downbox']
                for(let j = 0; j < formatVid.length; j++){
                    for(let k=0; k<serverNameBox.length; k++){    
                        for (let index = 1; index < 6; index++) {
                            link = `https://dl${index}.` + serverNameBox[k] + `.xyz/Series/${firstMovieName}%20${secondMovieName}%20${thirdMovieName}%20${fourthName}/S${seasonNum.value}/${firstMovieName}.${secondMovieName}.${thirdMovieName}.${fourthName}.S${seasonNum.value}E${episodeNum.value}.${selectedValueQuality}` + formatVid[j] 
                            listLink.push(link);
                        }
                    }  
                }
               // Inserting the link 
               for(let i = 0; i<listLink.length; i++){
                let movTem =  `<a id="movieLinkDwnId` + i + `" target="iframeLink` + i + `" href="` + listLink[i] + `">Link</a>`
                movieTem.insertAdjacentHTML("beforeend", movTem)
                
            }
            let movieLinkDwnId0 = document.getElementById('movieLinkDwnId0').click();
            let movieLinkDwnId1 = document.getElementById('movieLinkDwnId1').click();
            let movieLinkDwnId2 = document.getElementById('movieLinkDwnId2').click();
            let movieLinkDwnId3 = document.getElementById('movieLinkDwnId3').click();
            let movieLinkDwnId4 = document.getElementById('movieLinkDwnId4').click();
            let movieLinkDwnId5 = document.getElementById('movieLinkDwnId5').click();
            let movieLinkDwnId6 = document.getElementById('movieLinkDwnId6').click();
            let movieLinkDwnId7 = document.getElementById('movieLinkDwnId7').click();
            let movieLinkDwnId8 = document.getElementById('movieLinkDwnId8').click();
            let movieLinkDwnId9 = document.getElementById('movieLinkDwnId9').click();
            let movieLinkDwnId10 = document.getElementById('movieLinkDwnId10').click();
            let movieLinkDwnId11 = document.getElementById('movieLinkDwnId11').click();
            let movieLinkDwnId12 = document.getElementById('movieLinkDwnId12').click();
            let movieLinkDwnId13 = document.getElementById('movieLinkDwnId13').click();
            let movieLinkDwnId14 = document.getElementById('movieLinkDwnId14').click();
            let movieLinkDwnId15 = document.getElementById('movieLinkDwnId15').click();
            let movieLinkDwnId16 = document.getElementById('movieLinkDwnId16').click();
            let movieLinkDwnId17 = document.getElementById('movieLinkDwnId17').click();
            let movieLinkDwnId18 = document.getElementById('movieLinkDwnId18').click();
            let movieLinkDwnId19 = document.getElementById('movieLinkDwnId19').click();
            let movieLinkDwnId20 = document.getElementById('movieLinkDwnId20').click();
            let movieLinkDwnId21 = document.getElementById('movieLinkDwnId21').click();
            let movieLinkDwnId22 = document.getElementById('movieLinkDwnId22').click();
            let movieLinkDwnId23 = document.getElementById('movieLinkDwnId23').click();
            let movieLinkDwnId24 = document.getElementById('movieLinkDwnId24').click();
            let movieLinkDwnId25 = document.getElementById('movieLinkDwnId25').click();
            let movieLinkDwnId26 = document.getElementById('movieLinkDwnId26').click();
            let movieLinkDwnId27 = document.getElementById('movieLinkDwnId27').click();
            let movieLinkDwnId28 = document.getElementById('movieLinkDwnId28').click();
            let movieLinkDwnId29 = document.getElementById('movieLinkDwnId29').click();
            let movieLinkDwnId30 = document.getElementById('movieLinkDwnId30').click();
            let movieLinkDwnId31 = document.getElementById('movieLinkDwnId31').click();
            let movieLinkDwnId32 = document.getElementById('movieLinkDwnId32').click();
            let movieLinkDwnId33 = document.getElementById('movieLinkDwnId33').click();
            let movieLinkDwnId34 = document.getElementById('movieLinkDwnId34').click();
            let movieLinkDwnId35 = document.getElementById('movieLinkDwnId35').click();
            let movieLinkDwnId36 = document.getElementById('movieLinkDwnId36').click();
            let movieLinkDwnId37 = document.getElementById('movieLinkDwnId37').click();
            let movieLinkDwnId38 = document.getElementById('movieLinkDwnId38').click();
            let movieLinkDwnId39 = document.getElementById('movieLinkDwnId39').click();
            let movieLinkDwnId40 = document.getElementById('movieLinkDwnId40').click();
            let movieLinkDwnId41 = document.getElementById('movieLinkDwnId41').click();
            let movieLinkDwnId42 = document.getElementById('movieLinkDwnId42').click();
            let movieLinkDwnId43 = document.getElementById('movieLinkDwnId43').click();
            let movieLinkDwnId44 = document.getElementById('movieLinkDwnId44').click();
            let movieLinkDwnId45 = document.getElementById('movieLinkDwnId45').click();
            let movieLinkDwnId46 = document.getElementById('movieLinkDwnId46').click();
            let movieLinkDwnId47 = document.getElementById('movieLinkDwnId47').click();
            let movieLinkDwnId48 = document.getElementById('movieLinkDwnId48').click();
            let movieLinkDwnId49 = document.getElementById('movieLinkDwnId49').click();
            let movieLinkDwnId50 = document.getElementById('movieLinkDwnId50').click();
            let movieLinkDwnId51 = document.getElementById('movieLinkDwnId51').click();
            let movieLinkDwnId52 = document.getElementById('movieLinkDwnId52').click();
            let movieLinkDwnId53 = document.getElementById('movieLinkDwnId53').click();
            let movieLinkDwnId54 = document.getElementById('movieLinkDwnId54').click();
            let movieLinkDwnId55 = document.getElementById('movieLinkDwnId55').click();
            let movieLinkDwnId56 = document.getElementById('movieLinkDwnId56').click();
            let movieLinkDwnId57 = document.getElementById('movieLinkDwnId57').click();
            let movieLinkDwnId58 = document.getElementById('movieLinkDwnId58').click();
            let movieLinkDwnId59 = document.getElementById('movieLinkDwnId59').click();
            let movieLinkDwnId60 = document.getElementById('movieLinkDwnId60').click();
            let movieLinkDwnId61 = document.getElementById('movieLinkDwnId61').click();
            let movieLinkDwnId62 = document.getElementById('movieLinkDwnId62').click();
            let movieLinkDwnId63 = document.getElementById('movieLinkDwnId63').click();
            let movieLinkDwnId64 = document.getElementById('movieLinkDwnId64').click();
            let movieLinkDwnId65 = document.getElementById('movieLinkDwnId65').click();
            let movieLinkDwnId66 = document.getElementById('movieLinkDwnId66').click();
            let movieLinkDwnId67 = document.getElementById('movieLinkDwnId67').click();
            let movieLinkDwnId68 = document.getElementById('movieLinkDwnId68').click();
            let movieLinkDwnId69 = document.getElementById('movieLinkDwnId69').click();
            let movieLinkDwnId70 = document.getElementById('movieLinkDwnId70').click();
            let movieLinkDwnId71 = document.getElementById('movieLinkDwnId71').click();
            let movieLinkDwnId72 = document.getElementById('movieLinkDwnId72').click();
            let movieLinkDwnId73 = document.getElementById('movieLinkDwnId73').click();
            let movieLinkDwnId74 = document.getElementById('movieLinkDwnId74').click();
            let movieLinkDwnId75 = document.getElementById('movieLinkDwnId75').click();
            let movieLinkDwnId76 = document.getElementById('movieLinkDwnId76').click();
            let movieLinkDwnId77 = document.getElementById('movieLinkDwnId77').click();
            let movieLinkDwnId78 = document.getElementById('movieLinkDwnId78').click();
            let movieLinkDwnId79 = document.getElementById('movieLinkDwnId79').click();
            let movieLinkDwnId80 = document.getElementById('movieLinkDwnId80').click();
            }
        } else {
            firstMovieName = firstMovieName.charAt(0).toUpperCase() + firstMovieName.slice(1);
            secondMovieName = secondMovieName.charAt(0).toUpperCase() + secondMovieName.slice(1);
            thirdMovieName = thirdMovieName.charAt(0).toUpperCase() + thirdMovieName.slice(1);
            fourthName = fourthName.charAt(0).toUpperCase() + fourthName.slice(1);
            fifthName = fifthName.charAt(0).toUpperCase() + fifthName.slice(1);
            // All Links
            let formatVid = ['p.TagName.mkv', 'p.x264.TagName.mkv', 'p.HDTV.TagName.mkv', 'p.HDTV.x264.TagName.mkv', 'p.WEB-DL.x264.TagName.mkv', 'p.WEB.x264.TagName.mkv', 'p.WEBRip.x264.TagName.mkv', 'p.BluRay.x264.TagName.mkv']
            let serverNameBox = ['drbox', 'downbox']
            for(let j = 0; j < formatVid.length; j++){
                for(let k=0; k<serverNameBox.length; k++){    
                    for (let index = 1; index < 6; index++) {
                        link = `https://dl${index}.` + serverNameBox[k] + `.xyz/Series/${firstMovieName}%20${secondMovieName}%20${thirdMovieName}%20${fourthName}%20${fifthName}/S${seasonNum.value}/${firstMovieName}.${secondMovieName}.${thirdMovieName}.${fourthName}.${fifthName}.S${seasonNum.value}E${episodeNum.value}.${selectedValueQuality}` + formatVid[j] 
                        listLink.push(link);
                    }
                }  
            }
            // Inserting the link 
            for(let i = 0; i<listLink.length; i++){
                let movTem =  `<a id="movieLinkDwnId` + i + `" target="iframeLink` + i + `" href="` + listLink[i] + `">Link</a>`
                movieTem.insertAdjacentHTML("beforeend", movTem)
                
            }
            let movieLinkDwnId0 = document.getElementById('movieLinkDwnId0').click();
            let movieLinkDwnId1 = document.getElementById('movieLinkDwnId1').click();
            let movieLinkDwnId2 = document.getElementById('movieLinkDwnId2').click();
            let movieLinkDwnId3 = document.getElementById('movieLinkDwnId3').click();
            let movieLinkDwnId4 = document.getElementById('movieLinkDwnId4').click();
            let movieLinkDwnId5 = document.getElementById('movieLinkDwnId5').click();
            let movieLinkDwnId6 = document.getElementById('movieLinkDwnId6').click();
            let movieLinkDwnId7 = document.getElementById('movieLinkDwnId7').click();
            let movieLinkDwnId8 = document.getElementById('movieLinkDwnId8').click();
            let movieLinkDwnId9 = document.getElementById('movieLinkDwnId9').click();
            let movieLinkDwnId10 = document.getElementById('movieLinkDwnId10').click();
            let movieLinkDwnId11 = document.getElementById('movieLinkDwnId11').click();
            let movieLinkDwnId12 = document.getElementById('movieLinkDwnId12').click();
            let movieLinkDwnId13 = document.getElementById('movieLinkDwnId13').click();
            let movieLinkDwnId14 = document.getElementById('movieLinkDwnId14').click();
            let movieLinkDwnId15 = document.getElementById('movieLinkDwnId15').click();
            let movieLinkDwnId16 = document.getElementById('movieLinkDwnId16').click();
            let movieLinkDwnId17 = document.getElementById('movieLinkDwnId17').click();
            let movieLinkDwnId18 = document.getElementById('movieLinkDwnId18').click();
            let movieLinkDwnId19 = document.getElementById('movieLinkDwnId19').click();
            let movieLinkDwnId20 = document.getElementById('movieLinkDwnId20').click();
            let movieLinkDwnId21 = document.getElementById('movieLinkDwnId21').click();
            let movieLinkDwnId22 = document.getElementById('movieLinkDwnId22').click();
            let movieLinkDwnId23 = document.getElementById('movieLinkDwnId23').click();
            let movieLinkDwnId24 = document.getElementById('movieLinkDwnId24').click();
            let movieLinkDwnId25 = document.getElementById('movieLinkDwnId25').click();
            let movieLinkDwnId26 = document.getElementById('movieLinkDwnId26').click();
            let movieLinkDwnId27 = document.getElementById('movieLinkDwnId27').click();
            let movieLinkDwnId28 = document.getElementById('movieLinkDwnId28').click();
            let movieLinkDwnId29 = document.getElementById('movieLinkDwnId29').click();
            let movieLinkDwnId30 = document.getElementById('movieLinkDwnId30').click();
            let movieLinkDwnId31 = document.getElementById('movieLinkDwnId31').click();
            let movieLinkDwnId32 = document.getElementById('movieLinkDwnId32').click();
            let movieLinkDwnId33 = document.getElementById('movieLinkDwnId33').click();
            let movieLinkDwnId34 = document.getElementById('movieLinkDwnId34').click();
            let movieLinkDwnId35 = document.getElementById('movieLinkDwnId35').click();
            let movieLinkDwnId36 = document.getElementById('movieLinkDwnId36').click();
            let movieLinkDwnId37 = document.getElementById('movieLinkDwnId37').click();
            let movieLinkDwnId38 = document.getElementById('movieLinkDwnId38').click();
            let movieLinkDwnId39 = document.getElementById('movieLinkDwnId39').click();
            let movieLinkDwnId40 = document.getElementById('movieLinkDwnId40').click();
            let movieLinkDwnId41 = document.getElementById('movieLinkDwnId41').click();
            let movieLinkDwnId42 = document.getElementById('movieLinkDwnId42').click();
            let movieLinkDwnId43 = document.getElementById('movieLinkDwnId43').click();
            let movieLinkDwnId44 = document.getElementById('movieLinkDwnId44').click();
            let movieLinkDwnId45 = document.getElementById('movieLinkDwnId45').click();
            let movieLinkDwnId46 = document.getElementById('movieLinkDwnId46').click();
            let movieLinkDwnId47 = document.getElementById('movieLinkDwnId47').click();
            let movieLinkDwnId48 = document.getElementById('movieLinkDwnId48').click();
            let movieLinkDwnId49 = document.getElementById('movieLinkDwnId49').click();
            let movieLinkDwnId50 = document.getElementById('movieLinkDwnId50').click();
            let movieLinkDwnId51 = document.getElementById('movieLinkDwnId51').click();
            let movieLinkDwnId52 = document.getElementById('movieLinkDwnId52').click();
            let movieLinkDwnId53 = document.getElementById('movieLinkDwnId53').click();
            let movieLinkDwnId54 = document.getElementById('movieLinkDwnId54').click();
            let movieLinkDwnId55 = document.getElementById('movieLinkDwnId55').click();
            let movieLinkDwnId56 = document.getElementById('movieLinkDwnId56').click();
            let movieLinkDwnId57 = document.getElementById('movieLinkDwnId57').click();
            let movieLinkDwnId58 = document.getElementById('movieLinkDwnId58').click();
            let movieLinkDwnId59 = document.getElementById('movieLinkDwnId59').click();
            let movieLinkDwnId60 = document.getElementById('movieLinkDwnId60').click();
            let movieLinkDwnId61 = document.getElementById('movieLinkDwnId61').click();
            let movieLinkDwnId62 = document.getElementById('movieLinkDwnId62').click();
            let movieLinkDwnId63 = document.getElementById('movieLinkDwnId63').click();
            let movieLinkDwnId64 = document.getElementById('movieLinkDwnId64').click();
            let movieLinkDwnId65 = document.getElementById('movieLinkDwnId65').click();
            let movieLinkDwnId66 = document.getElementById('movieLinkDwnId66').click();
            let movieLinkDwnId67 = document.getElementById('movieLinkDwnId67').click();
            let movieLinkDwnId68 = document.getElementById('movieLinkDwnId68').click();
            let movieLinkDwnId69 = document.getElementById('movieLinkDwnId69').click();
            let movieLinkDwnId70 = document.getElementById('movieLinkDwnId70').click();
            let movieLinkDwnId71 = document.getElementById('movieLinkDwnId71').click();
            let movieLinkDwnId72 = document.getElementById('movieLinkDwnId72').click();
            let movieLinkDwnId73 = document.getElementById('movieLinkDwnId73').click();
            let movieLinkDwnId74 = document.getElementById('movieLinkDwnId74').click();
            let movieLinkDwnId75 = document.getElementById('movieLinkDwnId75').click();
            let movieLinkDwnId76 = document.getElementById('movieLinkDwnId76').click();
            let movieLinkDwnId77 = document.getElementById('movieLinkDwnId77').click();
            let movieLinkDwnId78 = document.getElementById('movieLinkDwnId78').click();
            let movieLinkDwnId79 = document.getElementById('movieLinkDwnId79').click();
            let movieLinkDwnId80 = document.getElementById('movieLinkDwnId80').click();
        }
    } else {
        firstMovieName = firstMovieName.charAt(0).toUpperCase() + firstMovieName.slice(1);
        secondMovieName = secondMovieName.charAt(0).toUpperCase() + secondMovieName.slice(1);
        thirdMovieName = thirdMovieName.charAt(0).toUpperCase() + thirdMovieName.slice(1);
        fourthName = fourthName.charAt(0).toUpperCase() + fourthName.slice(1);
        fifthName = fifthName.charAt(0).toUpperCase() + fifthName.slice(1);
        sixthName = sixthName.charAt(0).toUpperCase() + sixthName.slice(1);
        // All Links
        let formatVid = ['p.TagName.mkv', 'p.x264.TagName.mkv', 'p.HDTV.TagName.mkv', 'p.HDTV.x264.TagName.mkv', 'p.WEB-DL.x264.TagName.mkv', 'p.WEB.x264.TagName.mkv', 'p.WEBRip.x264.TagName.mkv', 'p.BluRay.x264.TagName.mkv']
        let serverNameBox = ['drbox', 'downbox']
        for(let j = 0; j < formatVid.length; j++){
            for(let k=0; k<serverNameBox.length; k++){    
                for (let index = 1; index < 6; index++) {
                    link = `https://dl${index}.` + serverNameBox[k] + `.xyz/Series/${firstMovieName}%20${secondMovieName}%20${thirdMovieName}%20${fourthName}%20${fifthName}%20${sixthName}/S${seasonNum.value}/${firstMovieName}.${secondMovieName}.${thirdMovieName}.${fourthName}.${fifthName}.${sixthName}.S${seasonNum.value}E${episodeNum.value}.${selectedValueQuality}` + formatVid[j] 
                    listLink.push(link);
                }
            }  
        }
        // Inserting the link 
        for(let i = 0; i<listLink.length; i++){
            let movTem =  `<a id="movieLinkDwnId` + i + `" target="iframeLink` + i + `" href="` + listLink[i] + `">Link</a>`
            movieTem.insertAdjacentHTML("beforeend", movTem)
            
        }
        let movieLinkDwnId0 = document.getElementById('movieLinkDwnId0').click();
        let movieLinkDwnId1 = document.getElementById('movieLinkDwnId1').click();
        let movieLinkDwnId2 = document.getElementById('movieLinkDwnId2').click();
        let movieLinkDwnId3 = document.getElementById('movieLinkDwnId3').click();
        let movieLinkDwnId4 = document.getElementById('movieLinkDwnId4').click();
        let movieLinkDwnId5 = document.getElementById('movieLinkDwnId5').click();
        let movieLinkDwnId6 = document.getElementById('movieLinkDwnId6').click();
        let movieLinkDwnId7 = document.getElementById('movieLinkDwnId7').click();
        let movieLinkDwnId8 = document.getElementById('movieLinkDwnId8').click();
        let movieLinkDwnId9 = document.getElementById('movieLinkDwnId9').click();
        let movieLinkDwnId10 = document.getElementById('movieLinkDwnId10').click();
        let movieLinkDwnId11 = document.getElementById('movieLinkDwnId11').click();
        let movieLinkDwnId12 = document.getElementById('movieLinkDwnId12').click();
        let movieLinkDwnId13 = document.getElementById('movieLinkDwnId13').click();
        let movieLinkDwnId14 = document.getElementById('movieLinkDwnId14').click();
        let movieLinkDwnId15 = document.getElementById('movieLinkDwnId15').click();
        let movieLinkDwnId16 = document.getElementById('movieLinkDwnId16').click();
        let movieLinkDwnId17 = document.getElementById('movieLinkDwnId17').click();
        let movieLinkDwnId18 = document.getElementById('movieLinkDwnId18').click();
        let movieLinkDwnId19 = document.getElementById('movieLinkDwnId19').click();
        let movieLinkDwnId20 = document.getElementById('movieLinkDwnId20').click();
        let movieLinkDwnId21 = document.getElementById('movieLinkDwnId21').click();
        let movieLinkDwnId22 = document.getElementById('movieLinkDwnId22').click();
        let movieLinkDwnId23 = document.getElementById('movieLinkDwnId23').click();
        let movieLinkDwnId24 = document.getElementById('movieLinkDwnId24').click();
        let movieLinkDwnId25 = document.getElementById('movieLinkDwnId25').click();
        let movieLinkDwnId26 = document.getElementById('movieLinkDwnId26').click();
        let movieLinkDwnId27 = document.getElementById('movieLinkDwnId27').click();
        let movieLinkDwnId28 = document.getElementById('movieLinkDwnId28').click();
        let movieLinkDwnId29 = document.getElementById('movieLinkDwnId29').click();
        let movieLinkDwnId30 = document.getElementById('movieLinkDwnId30').click();
        let movieLinkDwnId31 = document.getElementById('movieLinkDwnId31').click();
        let movieLinkDwnId32 = document.getElementById('movieLinkDwnId32').click();
        let movieLinkDwnId33 = document.getElementById('movieLinkDwnId33').click();
        let movieLinkDwnId34 = document.getElementById('movieLinkDwnId34').click();
        let movieLinkDwnId35 = document.getElementById('movieLinkDwnId35').click();
        let movieLinkDwnId36 = document.getElementById('movieLinkDwnId36').click();
        let movieLinkDwnId37 = document.getElementById('movieLinkDwnId37').click();
        let movieLinkDwnId38 = document.getElementById('movieLinkDwnId38').click();
        let movieLinkDwnId39 = document.getElementById('movieLinkDwnId39').click();
        let movieLinkDwnId40 = document.getElementById('movieLinkDwnId40').click();
        let movieLinkDwnId41 = document.getElementById('movieLinkDwnId41').click();
        let movieLinkDwnId42 = document.getElementById('movieLinkDwnId42').click();
        let movieLinkDwnId43 = document.getElementById('movieLinkDwnId43').click();
        let movieLinkDwnId44 = document.getElementById('movieLinkDwnId44').click();
        let movieLinkDwnId45 = document.getElementById('movieLinkDwnId45').click();
        let movieLinkDwnId46 = document.getElementById('movieLinkDwnId46').click();
        let movieLinkDwnId47 = document.getElementById('movieLinkDwnId47').click();
        let movieLinkDwnId48 = document.getElementById('movieLinkDwnId48').click();
        let movieLinkDwnId49 = document.getElementById('movieLinkDwnId49').click();
        let movieLinkDwnId50 = document.getElementById('movieLinkDwnId50').click();
        let movieLinkDwnId51 = document.getElementById('movieLinkDwnId51').click();
        let movieLinkDwnId52 = document.getElementById('movieLinkDwnId52').click();
        let movieLinkDwnId53 = document.getElementById('movieLinkDwnId53').click();
        let movieLinkDwnId54 = document.getElementById('movieLinkDwnId54').click();
        let movieLinkDwnId55 = document.getElementById('movieLinkDwnId55').click();
        let movieLinkDwnId56 = document.getElementById('movieLinkDwnId56').click();
        let movieLinkDwnId57 = document.getElementById('movieLinkDwnId57').click();
        let movieLinkDwnId58 = document.getElementById('movieLinkDwnId58').click();
        let movieLinkDwnId59 = document.getElementById('movieLinkDwnId59').click();
        let movieLinkDwnId60 = document.getElementById('movieLinkDwnId60').click();
        let movieLinkDwnId61 = document.getElementById('movieLinkDwnId61').click();
        let movieLinkDwnId62 = document.getElementById('movieLinkDwnId62').click();
        let movieLinkDwnId63 = document.getElementById('movieLinkDwnId63').click();
        let movieLinkDwnId64 = document.getElementById('movieLinkDwnId64').click();
        let movieLinkDwnId65 = document.getElementById('movieLinkDwnId65').click();
        let movieLinkDwnId66 = document.getElementById('movieLinkDwnId66').click();
        let movieLinkDwnId67 = document.getElementById('movieLinkDwnId67').click();
        let movieLinkDwnId68 = document.getElementById('movieLinkDwnId68').click();
        let movieLinkDwnId69 = document.getElementById('movieLinkDwnId69').click();
        let movieLinkDwnId70 = document.getElementById('movieLinkDwnId70').click();
        let movieLinkDwnId71 = document.getElementById('movieLinkDwnId71').click();
        let movieLinkDwnId72 = document.getElementById('movieLinkDwnId72').click();
        let movieLinkDwnId73 = document.getElementById('movieLinkDwnId73').click();
        let movieLinkDwnId74 = document.getElementById('movieLinkDwnId74').click();
        let movieLinkDwnId75 = document.getElementById('movieLinkDwnId75').click();
        let movieLinkDwnId76 = document.getElementById('movieLinkDwnId76').click();
        let movieLinkDwnId77 = document.getElementById('movieLinkDwnId77').click();
        let movieLinkDwnId78 = document.getElementById('movieLinkDwnId78').click();
        let movieLinkDwnId79 = document.getElementById('movieLinkDwnId79').click();
        let movieLinkDwnId80 = document.getElementById('movieLinkDwnId80').click();
    }
    
})

    