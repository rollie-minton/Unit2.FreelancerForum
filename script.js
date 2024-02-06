// === State ===
// Declare arrays to contain all possible names, occupations, and rates for freelancers
const names = ["Alice", "Bob", "Carol", "Orion", "Nicholas", "Lester", "Arun", "Ian", "Gavriel", "Otto", "William", "Kyle", "Easi",];
const occupations = ["Writer", "Teacher", "Programmer",];

// Set max limit of freelancers to be displayed
const maxDisplay = 6;

const state = {
    freelancers: [
    {
        name: "Alice",
        occupation: "Writer",
        price: 30,
    },
    {
        name: "Bob",
        occupation: "Teacher",
        price: 50,
    },
    {
        name: "Carol",
        occupation: "Programmer",
        price: 70,
    }
],
    averagePrice: 0,
};

// === Script ===
render(state);

const freelancerInterval = setInterval(function (){
    addFreelancer(state.freelancers);
    if (state.freelancers.length >= maxDisplay) {
        clearInterval(freelancerInterval);
    }

    updateAveragePrice(state);
    render(state);
}, 1000);

// === Functions ===
function render(state) {
    renderFreelancers(state.freelancers);
    renderAveragePrice(state.averagePrice);
}

function renderFreelancers(freelancers) {
    const alias = freelancers.map((freelancer) =>{
        const element = document.createElement("li");
        const aliasLi = document.createElement("li");

        //aliasLi.IneerHTML = 
        aliasLi.textContent = freelancer.name;
        element.append(aliasLi);

        const jobLi = document.createElement("li");
        jobLi.textContent = freelancer.occupation;
        element.append(jobLi);

        const rateLi = document.createElement("li");
        rateLi.textContent = freelancer.price;
        element.append(rateLi);

        return element;
    });

    const sec = document.querySelector(".name");
    sec.replaceChildren(...freelancers);

}

function renderAveragePrice(price) {
    const rate = document.querySelector(".averagePrice");
    rate.textContent = `$${price.toFixed(2)}`;
}

function addFreelancer(freelancers) {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = 1 + Math.floor(Math.random() * 100);

    freelancers.push({name, occupation, price});
}

function updateAveragePrice(state) {
    const sum = state.freelancers.reduce((acc, freelancer) => acc + freelancer.price, 0);
    state.averagePrice = sum / state.freelancers.length;
}
