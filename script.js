fetch("data.json")
    .then(rep => {

        return rep.json()
    })
    .then(data => {
        // a ce niveau on devrait avoir dans la console les infos de météo pour Saint Etienne ! on teste ?
        console.log(data)
        afficheRecette(data)

    });


function afficheRecette(tableauRecettes) {

    //recuperer chaque recette
    tableauRecettes.forEach(recette => {


        // récuperer les ingrédients de la recettee
        let ingredientsListe = "";

        recette.ingredients.forEach(ingredient => {
            ingredientsListe += `<li> ${ingredient.quantite} ${ingredient.unite} ${ingredient.aliment} </li>`
            console.log(ingredientsListe)
        });


        // recuperer les etzapes de la rectte
        let etapesListe = "";

        recette.etapes.forEach(etape => {
            etapesListe += `<li> ${etape.descEtape}`
            console.log(etapesListe)
        });

        let recetteCard = `
        <div class="w-100 flex justify-start align-center">
            <h2 class="m-16 coul1 font">${recette.nom}</h2>
            <i class="ph-fill ph-heart m-16 i">
                <p></p>
            </i>
            <i class="ph-fill ph-share-network m-16 i">
                <p></p>
            </i>
        </div>

        <div class="w-20 flex align-center justify-start">

            <div class="border-radius-15 w-100">
                <img src="${recette.img[0]}" alt="" class="w-100">
                <h2 class="w-100 bg1 coulw font">${recette.nom}</h2>
            </div>

            <div class="flex space-between align-center">
                <img src="${recette.img[1]}" alt="" class="w-30">
                <img src="${recette.img[2]}" alt="" class="w-30">
                <img src="${recette.img[3]}" alt="" class="w-30">

            </div>
        </div>

        <div class="w-25 flex space-between align-center">
            <div class="w-100 flex space-between align-center">
                <div class="w-30 flex justify-start align-center">
                <i class="ph-fill ph-fork-knife">   
                </i>
                <p class="w-25 coul1 font">${recette.portions} part(s)</p>
                </div>

                <div class="w-30 justify-start align-center">
                <i class="ph-fill ph-flame">   
                </i>
                <p class="w-25 coul1 font">${recette.tempCuisson}</p>
                </div>

                <div class="w-30 justify-start align-center">
                <i class="ph-fill ph-alarm"></i>
                <p class="w-25 coul1 font">${recette.tempCuisson}</p>
                </div>
            </div>

            <div>
                <h3 class=" coul1">Détails</h3>
                <p class="mb-32 coul2">${recette.desc}}</p>

                <h3 class=" coul1">Ingrédients</h3>
                <ul class=" coulb">

                ${ingredientsListe}
                </ul>


            </div>

        </div>

        <div class="w-50">
            <h3 class=" coul1">Étapes</h3>
            <ol class=" coulb">
                ${etapesListe}
            </ol>
        
        
        
        
        `
        document.querySelector("#container").innerHTML += recetteCard;

    });
}