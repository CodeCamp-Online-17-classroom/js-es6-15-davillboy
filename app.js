// write code here

ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};
let { numPlanets, ...discoveryYears } = planetFacts;
console.log(discoveryYears); // *

ผลลัพธ์
console.log(discoveryYears); จะแสดง Object ที่มีค่าเป็น { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }
เพราะ เนื่องจากตัวแปร discoveryYears ถูกกำหนดค่าด้วยการ Destructure จาก planetFacts object โดยที่
  numPlanets ถูกเก็บไว้ในตัวแปร numPlanets และ ...discoveryYears จับคู่ค่าที่เหลือไว้ใน Object ที่เราเรียกว่า discoveryYears.
