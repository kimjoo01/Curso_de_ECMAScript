function newUser(name, age, country) {
    var name = name || 'oscar';
    var age = age || 34;
    var country = country || 'co'
    console.log(name, age, country);
}

newUser();
newUser('sergio', 35, 'ES');

function newAdmin (name = 'jose', age = 45, country = 'EC') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Eduardo', 55 ,'MX');