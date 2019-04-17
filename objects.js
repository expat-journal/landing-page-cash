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


console.log(cash);
console.log(stephanie);
console.log(amarachi);
console.log(jeremiah);
console.log(thierry);
console.log(max);
