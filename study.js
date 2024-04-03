function main() {
  const a = {
    a: 1,
    b: 2,
    c: 3,
  };

  const b = [1, 2, 3];

  a[100] = 100;
  a.a = 5;
  b[100] = 100;

  console.log(a);
  console.log(b);
}
main();
