const text = "Agnodeep Samal ";
let i = 0;
function t() {
  if (i <= text.length) {
    typing.textContent = text.slice(0, i++);
    setTimeout(t, 60);
  }
}
t();
