let users = [{
  name: 'vasya',
  age: 31,
  status: false,
  address: { country: 'Ukraine', city: 'Lviv', street: 'Shevchenko', houseNumber: 1 }
}, {
  name: 'petya',
  age: 30,
  status: true,
  address: { country: 'USA', city: 'New York', street: 'East str', houseNumber: 21 }
}, {
  name: 'kolya',
  age: 29,
  status: true,
  address: {country: 'Hungary',  city: 'Budapest', street: 'Kuraku', houseNumber: 78 }
}, {
  name: 'olya',
  age: 28,
  status: false,
  address: {country: 'Czech', city: 'Prague', street: 'Paster', houseNumber: 56 }
}, {
  name: 'max',
  age: 30,
  status: true,
  address: {country: 'Turkey', city: 'Istanbul', street: 'Mikar', houseNumber: 39 }
}, {
  name: 'anya',
  age: 31,
  status: false,
  address: { country: 'Brasil', city: 'Rio', street: 'Ronaldi', houseNumber: 5 }
}, {
  name: 'oleg',
  age: 28,
  status: false,
  address: { country: 'Canada', city: 'Montreal', street: 'Acusto', houseNumber: 90 }
}, {
  name: 'andrey',
  age: 29,
  status: true,
  address: { country: 'Canada', city: 'Quebeck',  street: 'Binaro', houseNumber: 33 }
}, {
  name: 'masha',
  age: 30,
  status: true,
  address: { country: 'Russia', city: 'Moscow', street: 'Gogolia', houseNumber: 1 }
}, {
  name: 'olya',
  age: 31,
  status: false,
  address: { country: 'USA', city: 'Portland', street: 'Forest str', houseNumber: 4 }
}, {
  name: 'max',
  age: 31,
  status: true,
  address: { country: 'Egypt', city: 'Cairo', street: 'Seashore', houseNumber: 45 }
}];

//За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Вставити цей блок на сторінку
for (const user of users) {
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `Ім'я: ${user.name} <br> Вік: ${user.age} <br> Статус:${user.status}`;
    userDiv.style.margin="10px";
    userDiv.style.border="3px solid blue";
    document.body.append(userDiv);
}

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (const user of users) {
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `Ім'я: ${user.name} <br> Вік: ${user.age} <br> Статус:${user.status}`;
    userDiv.style.margin = "10px";
    userDiv.style.border = "3px solid blue";
    document.body.append(userDiv);
    let adressDiv = document.createElement('div');
    adressDiv.style.margin = "10px";
    adressDiv.style.border = "3px solid yellow";
    adressDiv.innerHTML = `Країна: ${user.address.country} <br> Місто: ${user.address.city} <br> Вулиця:${user.address.street}<br>Номер будинку:${user.address.houseNumber}`;
    document.body.append(adressDiv);
}