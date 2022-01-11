// VARIAVEIS

let file = document.getElementById('flImage');
var publicar = document.getElementById('publica');

var wrapper = document.getElementById("myHTMLWrapper");
var myHTML = '';


function readJSONFile() {
    var ajax = new XMLHttpRequest();

    ajax.open("GET", "js/corpo.json");

    ajax.responseType = "json";

    ajax.send();

    ajax.addEventListener("readystatechange", function () {

        if (ajax.readyState === 4 && ajax.status === 200) {

            var resposta = ajax.response;
            var localWeb = JSON.parse(localStorage.getItem('imgData'));

            if (localWeb == null) {

                getJson(resposta);

                resposta.map(res => {
                    let template = `
                    <div class="m-2 mt-3 rounded shadow p-2 bg">
                      <div>
                        <img class="rounded-circle post-foto shadow d-inline-block fixed" src="${res.fotoPerfil}" />
        
                        <div class="d-inline-block">
                          <h5 class="user-name">
                            <a id="nome1">Anônimo</a>
                          </h5>
                        </div>
                      </div>
                      <hr />
                      <img class="post-size post-size-profile" src="${res.postPhoto}" />
                      <p></p>
                      <div class="container">
                        <div class="row">
                          <button class="btn btn-cor btn-post col-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="22" fill="currentColor"
                              class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                              <path
                                d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                            </svg>
                          </button>
                          <button class="btn btn-cor btn-post col-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="22" fill="currentColor"
                              class="bi bi-heart-fill" viewBox="0 0 16 16">
                              <path fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                          </button>
                          <button class="btn btn-cor btn-post col-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="22" fill="currentColor"
                              class="bi bi-share-fill" viewBox="0 0 16 16">
                              <path
                                d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                            </svg>
                          </button>
                          <button class="btn btn-cor btn-post col-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="22" fill="currentColor"
                              class="bi bi-chat-square-text-fill" viewBox="0 0 16 16">
                              <path
                                d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    `;
                    myHTML += template;
                });
            }
            else {

                localWeb.map(res => {
                    let template = `
                    <div class="m-2 mt-3 rounded shadow p-2 bg">
                      <div>
                        <img class="rounded-circle post-foto shadow d-inline-block fixed" src="${res.fotoPerfil}" />
        
                        <div class="d-inline-block">
                          <h5 class="user-name">
                            <a id="nome1">Anônimo</a>
                          </h5>
                        </div>
                      </div>
                      <hr />
                      <img class="post-size post-size-profile" src="${res.postPhoto}" />
                      <p></p>
                      <div class="container">
                        <div class="row">
                          <button class="btn btn-cor btn-post col-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="22" fill="currentColor"
                              class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                              <path
                                d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                            </svg>
                          </button>
                          <button class="btn btn-cor btn-post col-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="22" fill="currentColor"
                              class="bi bi-heart-fill" viewBox="0 0 16 16">
                              <path fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                          </button>
                          <button class="btn btn-cor btn-post col-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="22" fill="currentColor"
                              class="bi bi-share-fill" viewBox="0 0 16 16">
                              <path
                                d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                            </svg>
                          </button>
                          <button class="btn btn-cor btn-post col-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="22" fill="currentColor"
                              class="bi bi-chat-square-text-fill" viewBox="0 0 16 16">
                              <path
                                d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    `;
                    myHTML += template;
                });
            }

            wrapper.innerHTML = myHTML;
        }
    });
}

function getJson(collection) {
    return localStorage.setItem('imgData', JSON.stringify(collection));
}

function updateJson(newObj) {

    let collection = JSON.parse(localStorage.getItem('imgData'));

    collection.unshift(newObj);

    return localStorage.setItem('imgData', JSON.stringify(collection));
}


function previewFile() {

    let obj = {};
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        obj = {
            username: "Anônimo",
            fotoPerfil: "img/profile.jpg",
            descricao: "",
            postPhoto: reader.result
        };

        updateJson(obj);
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        obj = {
            username: "Anônimo",
            fotoPerfil: "img/profile.jpg",
            descricao: "",
            postPhoto: ""
        };

        updateJson(obj);
    }

}

publicar.addEventListener('click', () => {
    previewFile();
    document.location.reload(true);
});


readJSONFile();












