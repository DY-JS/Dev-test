"use strict";

//Данные для заданий
let testData = [
  1,
  2,
  1990,
  85,
  24,
  "Vasya",
  "colya@example.com",
  "Rafshan",
  "ashan@example.com",
  true,
  false,
];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
let testData3 = [
  {
    name: "Vasya",
    email: "vasya@example.com",
    age: 20,
    skills: {
      php: 0,
      js: -1,
      madness: 10,
      rage: 10,
    },
  },
  {
    name: "Dima",
    email: "dima@example.com",
    age: 34,
    skills: {
      php: 5,
      js: 7,
      madness: 3,
      rage: 2,
    },
  },
  {
    name: "Colya",
    email: "colya@example.com",
    age: 46,
    skills: {
      php: 8,
      js: -2,
      madness: 1,
      rage: 4,
    },
  },
  {
    name: "Misha",
    email: "misha@example.com",
    age: 16,
    skills: {
      php: 6,
      js: 6,
      madness: 5,
      rage: 2,
    },
  },
  {
    name: "Ashan",
    email: "ashan@example.com",
    age: 99,
    skills: {
      php: 0,
      js: 10,
      madness: 10,
      rage: 1,
    },
  },
  {
    name: "Rafshan",
    email: "rafshan@example.com",
    age: 11,
    skills: {
      php: 0,
      js: 0,
      madness: 0,
      rage: 10,
    },
  },
];

let testData4 = [
  {
    name: "Vasya",
    email: "vasya@example.com",
    age: 20,
  },
  {
    name: "Dima",
    email: "dima@example.com",
    age: 34,
  },
  {
    name: "Colya",
    email: "colya@example.com",
    age: 46,
  },
  {
    name: "Misha",
    email: "misha@example.com",
    age: 16,
  },
  {
    name: "Ashan",
    email: "ashan@example.com",
    age: 99,
  },
  {
    name: "Rafshan",
    email: "rafshan@example.com",
    age: 11,
  },
  1,
  2,
  1990,
  85,
  24,
  "Vasya",
  "colya@example.com",
  "Rafshan",
  "ashan@example.com",
  true,
  false,
  [
    [
      [
        [
          1,
          2,
          1990,
          85,
          24,
          "Vasya",
          "colya@example.com",
          "Rafshan",
          "ashan@example.com",
          true,
          false,
          [
            {
              name: "Rafshan",
              email: "rafshan@example.com",
              age: 11,
            },
          ],
        ],
      ],
    ],
  ],
];

//1 (1бал)
//Сделать функцию поиска значений в массиве.

// Синтаксис: array_find(arr: array, search: string|regex): string|number[]|null
// Пример:
// let result = array_find(testData, '/^raf*/i') // ["Rafshan"]
// let result2 = array_find(testData, "Rafshan") // ["Rafshan"]

const array_find = (arr, str) => {
  let regex;
  if (str[0] === "/") {
    let s = str.split("/");
    regex = new RegExp(
      s[1],
      (str[str.length - 1] !== "/" && str[str.length - 1]) || null
    );
  }
  const res = arr.filter((elem) => {
    if (
      regex instanceof RegExp &&
      typeof elem === "string" &&
      elem.match(regex)
    )
      return true;
    if (elem === str) return true;
  });
  return res;
};

console.log(array_find(testData, "Rafshan"));

//-------------------------------------------------------------

// 2 (1бал)
// Сделать функцию подсчета среднего значения, с возможностью исключения не числовых значений

// Синтаксис: array_avg(arr: array[, skipNaN: bool = false]): number
// Пример:
// let result = array_avg(testData2) // ~265
// let result2 = array_avg(testData) // ~420
// let result3 = array_avg(testData, true) // ~191

const array_avg = (arr) => {
  const res = arr.filter((elem) => typeof elem === "number");
  console.log(res);
  return res.reduce((sum, el) => sum + el) / res.length;
};

console.log(array_avg(testData, true));

//------------------------------------------------------------

// 3 (1бал)
// Сделать функцию которая разбивает массив на подмассивы указанной длинны.

// Синтаксис: array_chunk(arr: array, count: number): any[]
// Пример:
// let result = array_chunk(testData2, 2) // [[1, 2], [1990, 85], [24, 5], [7, 8.1]]

const array_chunk = (arr, num) => {
  let res = [];
  while (arr.length) res.push(arr.splice(0, num));
  return res;
};

//------------------------------------------------------------

// 4 (1бал)
// Сделать функцию которая обрезает массив до указанного значения.

// Синтаксис: array_skip_until(arr: array, value: any): any[]
// Пример:
// let result = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
// let result2 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
// let result3 = array_skip_until(testData, "asd") // []

//let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

const array_skip_until = (arr, value) => {
  return arr.indexOf(value) >= 0 ? arr.slice(arr.indexOf(value)) : [];
};

//------------------------------------------------------------
// 5 (1бал)
// Сделать функцию для проверки существования значения в не нормализированном списке данных.

// Синтаксис: array_contains(arr: array, search: string|regex): bool
// Пример:
// let result = array_contains(testData4, '/^raf.*/i') // true
// let result2 = array_contains(testData4, '/^azaza.*/i') // false

const array_contains = (arr, search) => {
  let regex;
  if (search[0] === "/") {
    let s = search.split("/");
    regex = new RegExp(
      s[1],
      (search[search.length - 1] !== "/" && search[search.length - 1]) || null
    );
  }
  if (regex instanceof RegExp)
    return arr.some((elem) => typeof elem === "string" && elem.match(regex));
  return arr.includes(search);
};

//------------------------------------------------------------
// 6 (1бал)
// Сделать функцию для получения данных с массивов по указанному пути (аминь).

// Синтаксис: array_get(arr: array, path:string): any
// Пример:
// let result = array_get(testData4, '[5].name') // "Rafshan"
// let result2 = array_get(testData4, '[17][0][0][0][11][0]') // {name: "Rafshan", email: "rafshan@example.com", age: 11}
// let result3 = array_get(testData4, '[17][0][0][0][11][0][name]') // "Rafshan"

const array_get = (arr, path) => {
  let res;
  for (let key in arr) {
    if (Array.isArray(arr[key])) res = array_get(arr[key], path);
                                                                    // ПОЛНОЕ ФИАСКО. ХОТЕЛОСЬ БЫ ВЗГЛЯНУТЬ НА РЕШЕНИЕ!
    else res = arr[path];
  }
};

////--------------------------------------------------------------------------

// 7 (1бал)
// Сделать функцию для поиска значений и пути к нему в не нормализированном списке данных (аминь).

// Синтаксис: array_search(arr: array, search: string|regex[, path:string = '']): [path: string, value: string|number][]
// Пример:
// let result = array_search(testData4, '/^raf.*/i') // [["[5].name", "Rafshan"], ["[13]", "Rafshan"], ["[17][0][0][0][7]", "Rafshan"], ["[17][0][0][0][11][0].name", "Rafshan"]]
// let result2 = array_search(testData4, '/^raf.*/i', '[17][0][0][0]') // [["[17][0][0][0][7]", "Rafshan"], ["[17][0][0][0][11][0].name", "Rafshan"]]

//// ТАКЖЕ ХОТЕЛОСЬ БЫ ВЗГЛЯНУТЬ НА РЕШЕНИЕ!

//--------------------------------------------------------------

// 8 (1бал)
// Создать функцию которая создает объект на основании двух представленных массивов используя один как ключи, а другой как значения.
// Не подходящие ключи массивов должны быть исключены.

// Синтаксис: array_combine(keys: array, values: array): Object
// Пример:
// let result = array_combine(testData, testData2) // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}

const array_combine = (keys, values) => {
  const l = Math.max(keys.length, values.length);
  let res = {};
  for (let i = 0; i < l; i++) {
    typeof keys[i] !== "boolean" && (res[keys[i]] = values[i]);
  }
  return res;
};

console.log(array_combine(testData, testData2));

//------------------------------------------------------------

// array_combine(testData, testData2)

// 9 (1бал)
// Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.

// Доступные шаблоны:
// 'string' => строки,                                          //ПОНЯЛ ЧАСТИЧНО
// 'number' => числа,
// 'int' => целые числа,
// 'float' => числа с плавающей точкой,
// 'bool' => true | false,
// 'function' => функция,
// 'array' => массив,
// Object => объект {name: 'string'}
// Синтаксис: array_normalize(arr: array, shema: string|Object[, transform: bool = false]): any[]
// Пример:
// let result = array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result2 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result3 = array_normalize(testData4, {age: 'float'}) // []
// let result4 = array_normalize(testData4, {age: 'float'}, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]

//--------------------------------------------------------------------------------------------

// 10 (1бал)
// Сделать функцию которая сможет делать срез данных с ассоциативного массива.

// Синтаксис: array_pluck(arr: array, path: string): any[]
// Пример:
// let result = array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
// let result2 = array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]

const array_pluck = (arr, path) => {
  let res = [];

  arr.forEach((elem) => {
    if (elem instanceof Object)
      res = array_pluck(Object.keys(elem), path.split("."));
    elem.hasOwnProperty(path) && res.push(elem[path]);
  });
  return res;
};

console.log(array_pluck(testData3, "skills.php"));

//-----------------------------------------------------------------------------
// 11 (1бал)
// Сделать функцию которая возвращает уникальные элементы массива.

// Синтаксис: array_unique(arr: array): any[]
// Пример:
// let result = array_unique(testData.concat(testData2)) // [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]

const array_unique = (arr) => {
  return [...new Set(arr)];
};

console.log(array_unique(testData.concat(testData2)));

// 12 (1бал)
// Сделать функцию которая создает массив указанной длинны и заполняет его переданными значениями.

// Синтаксис: array_fill(lenght: number, value: any): any[]
// Пример:
// let result = array_fill(5, 'string') // ['string', 'string', 'string', 'string', 'string']

const array_fill = (length, value) => {
  return Array(length).fill(value);
};

console.log(array_fill(5, "string"));

// 19 (1 бал)
// Вывести в консоль по 4 значения из переданного массива с интервалом в 2 секунды.

let arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  "Vasya",
  "|",
  "123",
  9,
  10,
  11,
  12,
  13,
  14,
  15,
];

const outPut = (arr) => {
  let res = [];
  while (arr.length) {
    res.push(arr.splice(0, 4));
  }

  res.forEach((el, i) => {
    setTimeout(() => {
      console.log(el.join(" "));
    }, (i + 2) * 1000);
  });
};

outPut(arr);

//-----------------------------------------------------

// 20 (1 бал)
// С помощью коллекции преобразовать данные testData4 в следующий вид

// ["Rafshan", "Misha", "Vasya", "Dima", "Colya", "Ashan"]

const newData = (arr) => {
  return arr.filter((elem) => elem.hasOwnProperty("name")).map((el) => el.name);
};

console.log(newData(testData4));

//----------------------------------------------------------------

// 21 (1 бал)
// На основании данных testData3 вывести последовательно в консоль имена программистов сгруппированных и отсортированных по их навыкам:

// ----- PHP -----
// "Colya"
// .....
// ----- JS ------
// ......

const sortSkills = (arr) => {
  let skills = ["php", "js", "madness", "rage"];
  let out = "";
  function sort(ar, s) {
    let newArr = [...ar];
    newArr.sort((a, b) => {
      return b.skills[s] - a.skills[s];
    });
    return newArr.map((person) => person["name"]);
  }

  skills.forEach((skill) => {
    out += `----${skill}----\n${sort(arr, skill).join("\n")}\n`;
  });

  return out;
};

console.log(sortSkills(testData3));
