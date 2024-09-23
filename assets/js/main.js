// Tapşırıq 1: Massivləri Spread ilə birləşdirmək
// İki massiv yaradın: arr1 = [1, 2, 3] və arr2 = [4, 5, 6].
// Spread operatorundan istifadə edərək arr1 və arr2-ni combinedArr adlı yeni bir massivə birləşdirin.
// Spread edərək combinedArr massivinə bir neçə əlavə rəqəm əlavə edin.

// arr1 = [1, 2, 3];
// arr2 = [4, 5, 6];
// let combineAdd = [...arr1, ...arr2, 7, 8, 9];
// console.log(combineAdd);

// Tapşırıq 2: Massivləri Kopyalamaq və Dəyişmək
// Bir massiv yaradın: originalArr = [10, 20, 30].
// Spread operatorundan istifadə edərək originalArr-in kopyasını yaradın.
// Kopyaya yeni element əlavə edin, amma orijinal massivi dəyişmədən saxlayın.

// originalArr=[10,20,30];
// copyArr=[...originalArr,40,50,60];
// console.log(copyArr);

// Tapşırıq 3: Obyektləri Spread ilə birləşdirmək
// İki obyekt yaradın:
// const person = { name: "John", age: 25 };
// const job = { title: "Developer", company: "TechCorp" };

// const person = { name: "John", age: 25 };
// const job = { title: "Developer", company: "TechCorp" };
// const businesMan = { ...person, ...job };
// console.log(businesMan);

// Tapşırıq 5: Rest ilə Destructuring
// Verilmiş massiv arr = [1, 2, 3, 4, 5]-dən istifadə edərək, destructuring ilə ilk iki elementi a və b dəyişənlərinə təyin edin və qalan elementləri restArr adlı yeni bir massivə yığın.
// Nümunə Nəticə:
// a = 1;
// b = 2;
// restArr = [3, 4, 5];

// arr = [1, 2, 3, 4, 5];

// const [a, b, ...restArr] = arr;
// console.log(restArr);

// apşırıq 6: Funksiya Parametrlərində Rest
// introduce adlı bir funksiya yaradın ki, o, bir name və istənilən sayda hobbi qəbul etsin və rest operatorundan istifadə etsin.
// Funksiya ad və hobbilər haqqında bir mesaj çap etməlidir.
// Nümunə Nəticə:
// js
// introduce('Alice', 'oxumaq', 'piyada gəzmək', 'kod yazmaq');
// // Çıxış: "Salam, mənim adım Alice və mən oxumağı, piyada gəzməyi, kod yazmağı sevirəm."

// Tapşırıq 7: Obyekt Destructuring-də Spread və Rest
// Verilmiş obyekt:
// const person = { name: "Alice", age: 28, city: "Paris", country: "France" };
// Obyekti destructuring ilə name və age dəyişənlərinə təyin edin və qalan xüsusiyyətləri rest operatoru ilə address adlı yeni bir dəyişənə toplayın.
// Nümunə Nəticə:
// name = "Alice";
// age = 28;
// address = { city: "Paris", country: "France" };



// const person = { name: "Alice", age: 28, city: "Paris", country: "France" };

// const { name, age, ...address } = person;

// console.log(name);
// console.log(age);
// console.log(address);
