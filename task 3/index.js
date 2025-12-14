const USER_STATUSES = ["vip", "gold", "usual"];
const STATUS_ORDER = { vip: 0, gold: 1, usual: 2 };
const START_DATE = new Date("01/01/1950");

const generateRandomStatus = () => {
  return USER_STATUSES[Math.floor(Math.random() * USER_STATUSES.length)];
};

const generateRandomDate = () => {
  const randomTime = START_DATE.getTime() + Math.random() * (new Date().getTime() - START_DATE.getTime());
  return new Date(randomTime);
};

const createUsers = () => {
  const user = {
    status: generateRandomStatus(),
    date: generateRandomDate(),
  };

  return user;
};

function randomUserList() {
  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push(createUsers());
  }

  users.sort((a, b) => {
    if (STATUS_ORDER[a.status] !== STATUS_ORDER[b.status]) {
      return STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
    }

    return b.date - a.date;
  });

  return users;
}

console.log(randomUserList());
