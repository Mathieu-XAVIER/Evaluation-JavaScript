window.addEventListener('DOMContentLoaded', (event) => {
    //   BOUTONS
    let reset = document.getElementById('reset');
    let addToDoButton = document.getElementById('add');

    //    BLOCK DE CONTENUS
    let taskContainer = document.getElementById('taskContainer');
    let catContainer = document.getElementById('categorieContainer');
    let dateContainer = document.getElementById('dateContainer');
    let deleteContainer = document.getElementById('removeContainer');

    // CHAMP DE DONNEES
    let inputField = document.getElementById('inputField');
    let date = document.getElementById('date');
    let categorie = document.getElementById('categorie');


    // FONCTION POUR AJOUTER DES TACHES 
    addToDoButton.addEventListener('click', function () {
        if (categorie.value === inputField.value || categorie.value === date.value || date.value === inputField.value) {
            alert('Champs incorrect');
        } else {


            // TACHE
            var paragraph = document.createElement('p');
            paragraph.classList.add('paragraph-styling');
            paragraph.innerText = inputField.value;
            taskContainer.appendChild(paragraph);


            paragraph.addEventListener('click', function () {
                taskContainer.removeChild(paragraph);
            })

            // CATEGORIE
            var cate = document.createElement('p');
            cate.classList.add('paragraph-styling');
            cate.innerText = categorie.value;
            catContainer.appendChild(cate);

            // DATE
            var paragraphe = document.createElement('p');
            paragraphe.classList.add('paragraph-styling');
            paragraphe.innerText = date.value;
            dateContainer.appendChild(paragraphe);

            // BOUTON RETIRER LES TACHES
            var btn = document.createElement('p');
            btn.classList.add('paragraph-styling');
            btn.innerText = "Retirer la tache";
            deleteContainer.appendChild(btn);

            btn.addEventListener('click', function () {
                taskContainer.removeChild(paragraph);
                dateContainer.removeChild(paragraphe);
                catContainer.removeChild(cate);
                deleteContainer.removeChild(btn);
            })
        }
    })


    // BOUTON REINITIALISER LES TACHES
    reset.addEventListener('click', function () {
        location.reload();
    })
})