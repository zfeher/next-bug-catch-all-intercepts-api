# NextJS bug: pages catch all route triggers on api call when opened in browser

## To reproduce

1, install deps

```bash
pnpm install
# or
npm install
```

2, start app

```bash
pnpm run dev
# or
npm run dev

# or do a build and start
pnpm run build && pnpm run start
# or
npm run build && npm run start
```

3, open the api in browser

url: [api/hello](http://localhost:3000/api/hello)

Checking the server log you can see that the catch all page and MyApp codes are run. Removing the catch all route page it works as expected (MyApp code is not run). In dev mode this happens with each page reload.
