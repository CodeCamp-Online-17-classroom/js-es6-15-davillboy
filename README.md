# js-lab-159
### Lab 159 ES6: result5
ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

```JavaScript
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};
let { numPlanets, ...discoveryYears } = planetFacts;
console.log(discoveryYears); // *
```
ชัยรัตน์ ทรัพย์สนอง (ตูน)
