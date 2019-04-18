//---------------------------------------------------------------

function TeamMember(attributes) {
  this.name = attributes.name;
  this.role = attributes.role;
  this.class = attributes.class;
  this.gender = attributes.gender;
}

const cash = new TeamMember({
    name: 'Cash',
    role: 'UI/UX Dev',
    class: 'Web19',
    gender: 'Male'
});

const stephanie = new TeamMember({
    name: 'Stephanie',
    role: 'Frontend',
    class: 'Web18',
    gender: 'Female'
});

const amarachi = new TeamMember({
    name: 'Amarachi',
    role: 'Frontend',
    class: 'Web18',
    gender: 'Female'
});

const jeremiah = new TeamMember({
    name: 'Jeremiah',
    role: 'Backend',
    class: 'Web17',
    gender: 'Male'
});

const thierry = new TeamMember({
    name: 'Thierry',
    role: 'UI/UX Dev',
    class: 'Web19',
    gender: 'Male'
});

const max = new TeamMember({
    name: 'Max',
    role: 'Team Leader',
    class: 'CS15',
    gender: 'Male'
});


const team = [{
    name: 'Cash',
    role: 'UI/UX Dev',
    class: 'Web19',
    gender: 'Male'
},
{
    name: 'Stephanie',
    role: 'Frontend',
    class: 'Web18',
    gender: 'Female'
},
{
    name: 'Amarachi',
    role: 'Frontend',
    class: 'Web18',
    gender: 'Female'
},
{
    name: 'Jeremiah',
    role: 'Backend',
    class: 'Web17',
    gender: 'Male'
},
{
    name: 'Thierry',
    role: 'UI/UX Dev',
    class: 'Web19',
    gender: 'Male'
},
{
    name: 'Max',
    role: 'Team Leader',
    class: 'CS15',
    gender: 'Male'
}];

let nameAndGender = [];
team.forEach(function(x) {
    return nameAndGender.push(`${x.name} is a ${x.gender}`);
});

console.log(nameAndGender);


const photoMax = document.querySelector('.max');

photoMax.addEventListener('click', function(eventObject) {
    
    console.log(max);

});

const photoSteph = document.querySelector('.stephanie');

photoSteph.addEventListener('click', function(eventObject) {
    
    console.log(stephanie);

});


const photoAmarachi = document.querySelector('.amarachi');

photoAmarachi.addEventListener('click', function(eventObject) {
    
    console.log(amarachi);

});


const photoJeremiah = document.querySelector('.jeremiah');

photoJeremiah.addEventListener('click', function(eventObject) {
    
    console.log(jeremiah);

});


const photoThierry = document.querySelector('.thierry');

photoThierry.addEventListener('click', function(eventObject) {
    
    console.log(thierry);

});


const photoCash = document.querySelector('.cash');

photoCash.addEventListener('click', function(eventObject) {
    
    console.log(cash);

});


