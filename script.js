// === State ===
// Declare arrays to contain all possible names, occupations, and rates for freelancers
const names = ["Alice", "Bob", "Carol", "Orion", "Nicholas", "Lester", "Arun", "Ian", "Gavriel", "Otto", "William", "Kyle", "Easi"];
const occupations = ["Writer", "Teacher", "Programmer"];
const prices = [30, 40, 50, 60, 70, 80, 90, 100]
// Set max limit of freelancers to be displayed
const maxDisplay = 6;

const state = {
    freelncers: [
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

// === Functions ===
function render(state) {
    renderFreelancers(state.freelancers);
    renderAvgPrice(state.averagePrice);
}
function renderFreelancers(freelancers) {
    const alias = document.querySelector("name");
    const aliasElements = freelancers.map((freelancers) =>{
        const element = document.createElement("li");
        element.classList.add(freelancers.name);
        return element;
    });
    alias.replaceChildren(...aliasElements);

    const job = document.querySelector("occupation");
    const jobElements = freelancers.map((freelancers) =>{
        const element = document.createElement("li");
        element.classList.add(freelancers.occupation);
        return element;
    });
    job.replaceChildren(...jobElements);


    const rate = document.querySelector("startPrice");
    const rateElements = freelancers.map((freelancers) =>{
        const element = document.createElement("li");
        element.classList.add(freelancers.price);
        return element;
    });
    rate.replaceChildren(...rateElements);
}

