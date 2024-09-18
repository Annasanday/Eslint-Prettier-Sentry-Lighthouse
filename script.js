Sentry.onLoad(function () {
  Sentry.init({
    tracesSampleRate: 0.1,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
});

myUndefinedFunction();

for (let i = 0; i < 4; i++) {
  console.log(i);
}

const books = ['Колобок', 'Курочка', 'Лапоть'];
for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}

const fructs = ['apple', 'orange', 'mango'];
for (let i = fructs.length; i > 0; i--) {
  console.log(fructs[i - 1]);
}
