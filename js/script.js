// const icons = [
//     {
//       name: 'cat',
//       prefix: 'fa-',
//       type: 'animal',
//       family: 'fas',
//     },
// console.log(icons);

//HTML selector
const cardSection = document.querySelector('#icons .row');

const renderIcons = (array, targetElement) => {

    //Initialize icons template + forEach loop
    let iconsTemplate = '';
    array.forEach((icon, i) => {

        //Gestione dell'offset in pagina
        let offSet = '';
        if (i % 5 == 0) {
            offSet = 'offset-md-1';
        }

        //template
        iconsTemplate += `
        <div class="col col-md-2 ${offSet}">
            <div class="card">
                <div class="card-body">
                    <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.prefix}2x"></i>
                    <h6>${icon.name.toUpperCase()}</h6>
                </div>
            </div>
        </div>
        `;
    });

    //Print on page
    targetElement.innerHTML = iconsTemplate;
};

//Print on page
renderIcons(icons, cardSection)

//Filters
let animals = icons.filter(function (icon) {
    return icon.type == "animal";
});

let vegetables = icons.filter(function (icon) {
    return icon.type == "vegetable";
});

let users = icons.filter(function (icon) {
    return icon.type == "user";
});

let companies = icons.filter(function (icon) {
    return icon.type == "company";
});