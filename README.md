#Attempting to create sveltekit based mobile application using konstaui(+tailwindcss), capacitorjs and sveltekit. Using adapter-static for prerendered pages.

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Steps used to create this boilerplate:

1.  Create sveltekit project (choose Skeleton project, output folder change www to build)
    adapter-static npm install @svelte/adapter-static@next
2.  Add tailwindcss for sveltekit. ( https://tailwindcss.com/docs/guides/sveltekit)
3.  Add capacitor https://capacitorjs.com/

# create a new sveltekit project in my-app folder

npm create svelte@latest my-app

npm install @capacitor/cli @capacitor/core
npx cap init
npm install @capacitor/ios @capacitor/android
npx cap add ios
npx cap add android
npx cap run android
npx cap run ios

````

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

npm install
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open

## Building

To create a production version of your app:

```bash
npm run build
````

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
