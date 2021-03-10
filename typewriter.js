// const sentence = ["hello there from lighthouse labs"];

// for (const char of sentence) {
//   setTimeout(() => {
//   process.stdout.write(char);
//   }, 1000)
// }


const sentence = "hello there from lighthouse labs";
let delay = 1000;
for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i]
  setTimeout(() => {
  process.stdout.write(char);
  }, delay)
  delay += 50;
}