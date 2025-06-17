// Деструктуризація об'єкта з HW-11
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

apartment.owner = {
  name: "Henry",
  phone: "982-126-1588",
  email: "henry.carter@aptmail.com",
};

//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;

//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[apartment.tags.length - 1];

//   const bracketAptRating = apartment["rating"];
//   const bracketAptDescr = apartment["descr"];
//   const bracketAptPrice = apartment["price"];
//   const bracketAptTags = apartment["tags"];

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};

//   console.log(apartment);

const {
  imgUrl,
  rating: aptRating,
  descr: aptDescr,
  price: aptPrice,
  tags: aptTags,
  owner: { name: ownerName, phone: ownerPhone, email: ownerEmail },
  area,
  rooms,
  location: { country, city },
} = apartment;

const numberOfTags = aptTags.length;
const firstTag = aptTags[0];
const lastTag = aptTags[aptTags.length - 1];

console.log(
  imgUrl,
  aptRating,
  aptDescr,
  aptPrice,
  aptTags,
  numberOfTags,
  firstTag,
  lastTag,
  ownerName,
  ownerPhone,
  ownerEmail,
  area,
  rooms,
  country,
  city
);


// Деструктуризація об'єктів з HW-12
const officeETasks = {
  Zhenya: 12,
  Ira: 15,
  Katya: 8,
  Polina: 24,
  Vlad: 18,
};

function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }
  return bestEmployee;
}

console.log(findBestEmployee(officeETasks));


const hotelESalaries = {
  Linda: 45000,
  Anton: 62000,
  Nastia: 59000,
  Dima: 70000,
  Sergey: 42000,
};

function countTotalSalary(employees) {
  let total = 0;
  for (const [, salary] of Object.entries(employees)) {
    total += salary;
  }
  return total;
}
console.log(countTotalSalary(hotelESalaries));


const countries = [
  { country: "Bulgaria", weather: "sunny", population: 6800000 },
  { country: "Germany", weather: "rainy" },
  { country: "Denmark", weather: "foggy", population: 6000000 },
];

function getAllPropValues(arr, prop) {
  const arrValues = [];
  for (const object of arr) {
    const { [prop]: value } = object;
    if (value !== undefined) {
      arrValues.push(value);
    }
  }
  return arrValues;
}
console.log(getAllPropValues(countries, "country"));
console.log(getAllPropValues(countries, "weather"));
console.log(getAllPropValues(countries, "population"));


const products = [
  { name: "cake", price: 80, quantity: 5 },
  { name: "sweets", price: 70, quantity: 18 },
  { name: "strawberry", price: 200, quantity: 22 },
  { name: "bread", price: 50, quantity: 6 },
];

function calculateTotalPrice(allProducts, productName) {
  for (const { name, price, quantity } of allProducts) {
    if (name === productName) {
      return price * quantity;
    }
  }
}
console.log(calculateTotalPrice(products, "cake"));
console.log(calculateTotalPrice(products, "sweets"));
console.log(calculateTotalPrice(products, "strawberry"));
console.log(calculateTotalPrice(products, "bread"));


const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],
  lastId: 0,

  createTransaction(amount, type) {
    this.lastId += 1;
    return {
      id: this.lastId,
      amount,
      type,
    };
  },

  deposit(amount) {
    if (amount <= 0) {
      console.log("Сума для поповнення має бути більшою за 0 грн");
      return;
    }
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    console.log(
      `Баланс успішно поповнено на ${amount} грн! Поточний баланс: ${this.balance} грн`
    );
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів на рахунку");
      return;
    }
    if (amount <= 0) {
      console.log("Сума для зняття має бути більшою за 0 грн");
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    console.log(
      `${amount} грн успішно знято з балансу! Поточний баланс: ${this.balance} грн`
    );
  },

  getBalance() {
    console.log(`Поточний баланс: ${this.balance} грн`);
    return;
  },

  getTransactionDetails(id) {
    for (let y = 0; y < this.transactions.length; y += 1) {
      if (this.transactions[y].id === id) {
        return this.transactions[y];
      }
    }
    return null;
  },

  getTransactionTotal(type) {
    let total = 0;
    for (let u = 0; u < this.transactions.length; u += 1) {
      if (this.transactions[u].type === type) {
        total += this.transactions[u].amount;
      }
    }
    return total;
  },
};
account.deposit(7000);
account.withdraw(8500);
account.deposit(3000);
account.withdraw(4000);
account.getBalance();
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));


// ЗАВДАННЯ З ПОПЕРЕДНЬОГО ЗАНЯТТЯ
// Провести глибоку деструктуризацію об’єкту
const musicLibrary = {
  count: 2,
  artists: [
    {
      name: "The Beatles",
      albums: [
        {
          title: "Sgt. Pepper's Lonely Hearts Club Band",
          year: 1967,
          tracks: [
            { title: "With a Little Help from My Friends", duration: "2:44" },
            { title: "Lucy in the Sky with Diamonds", duration: "3:28" },
            { title: "A Day in the Life", duration: "5:33" },
          ],
        },
        {
          title: "Abbey Road",
          year: 1969,
          tracks: [
            { title: "Come Together", duration: "4:19" },
            { title: "Something", duration: "3:01" },
            { title: "Here Comes the Sun", duration: "3:06" },
          ],
        },
      ],
    },
    {
      name: "Pink Floyd",
      albums: [
        {
          title: "The Wall",
          year: 1979,
          tracks: [
            { title: "Another Brick in the Wall, Part 2", duration: "3:59" },
            { title: "Comfortably Numb", duration: "6:23" },
            { title: "Hey You", duration: "4:40" },
          ],
        },
        {
          title: "Dark Side of the Moon",
          year: 1973,
          tracks: [
            { title: "Speak to Me/Breathe", duration: "3:58" },
            { title: "Time", duration: "7:06" },
            { title: "Money", duration: "6:22" },
          ],
        },
      ],
    },
  ],
};

const {
  count,
  artists: [
    {
      name: beatlesName,
      albums: [
        {
          title: firstBeatlesAlbumTitle,
          year: firstBeatlesAlbumYear,
          tracks: [
            {
              title: firstBeatlesTrackTitle1,
              duration: firstBeatlesTrackDuration1,
            },
            {
              title: secondBeatlesTrackTitle1,
              duration: secondBeatlesTrackDuration1,
            },
            {
              title: thirdBeatlesTrackTitle1,
              duration: thirdBeatlesTrackDuration1,
            },
          ],
        },
        {
          title: secondBeatlesAlbumTitle,
          year: secondBeatlesAlbumYear,
          tracks: [
            {
              title: firstBeatlesTrackTitle2,
              duration: firstBeatlesTrackDuration2,
            },
            {
              title: secondBeatlesTrackTitle2,
              duration: secondBeatlesTrackDuration2,
            },
            {
              title: thirdBeatlesTrackTitle2,
              duration: thirdBeatlesTrackDuration2,
            },
          ],
        },
      ],
    },
    {
      name: floydName,
      albums: [
        {
          title: firstFloydAlbumTitle,
          year: firstFloydAlbumYear,
          tracks: [
            {
              title: firstFloydTrackTitle1,
              duration: firstFloydTrackDuration1,
            },
            {
              title: secondFloydTrackTitle1,
              duration: secondFloydTrackDuration1,
            },
            {
              title: thirdFloydTrackTitle1,
              duration: thirdFloydTrackDuration1,
            },
          ],
        },
        {
          title: secondFloydAlbumTitle,
          year: secondFloydAlbumYear,
          tracks: [
            {
              title: firstFloydTrackTitle2,
              duration: firstFloydTrackDuration2,
            },
            {
              title: secondFloydTrackTitle2,
              duration: secondFloydTrackDuration2,
            },
            {
              title: thirdFloydTrackTitle2,
              duration: thirdFloydTrackDuration2,
            },
          ],
        },
      ],
    },
  ],
} = musicLibrary;
console.log(
  count,
  beatlesName,
  firstBeatlesAlbumTitle,
  firstBeatlesAlbumYear,
  firstBeatlesTrackTitle1,
  firstBeatlesTrackDuration1,
  secondBeatlesTrackTitle1,
  secondBeatlesTrackDuration1,
  thirdBeatlesTrackTitle1,
  thirdBeatlesTrackDuration1
);
console.log(
  secondBeatlesAlbumTitle,
  secondBeatlesAlbumYear,
  firstBeatlesTrackTitle2,
  firstBeatlesTrackDuration2,
  secondBeatlesTrackTitle2,
  secondBeatlesTrackDuration2,
  thirdBeatlesTrackTitle2,
  thirdBeatlesTrackDuration2
);
console.log(
  floydName,
  firstFloydAlbumTitle,
  firstFloydAlbumYear,
  firstFloydTrackTitle1,
  firstFloydTrackDuration1,
  secondFloydTrackTitle1,
  secondFloydTrackDuration1,
  thirdFloydTrackTitle1,
  thirdFloydTrackDuration1
);
console.log(
  secondFloydAlbumTitle,
  secondFloydAlbumYear,
  firstFloydTrackTitle2,
  firstFloydTrackDuration2,
  secondFloydTrackTitle2,
  secondFloydTrackDuration2,
  thirdFloydTrackTitle2,
  thirdFloydTrackDuration2
);