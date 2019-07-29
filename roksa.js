(async () => {
  const m = new Map();
  let t = 1000;
  let isRoksified = false;

  async function foo() {
    const elems = Array.from(document.querySelectorAll("*"))
    .filter((s) => s.children.length === 0);

    if (!isRoksified) {

      elems.forEach(s => {
        m.set(s, s.innerText);
        s.innerText = "Roksolana";
      });

      isRoksified = true

    } else {

      elems.forEach(s => {
        s.innerText = m.get(s)
      });

      isRoksified = false

    }

    t += 500;

    return await new Promise((res) => setTimeout(res, isRoksified ? t : t / 2));
  }

  while (true) {
    await foo()
  }
})()


