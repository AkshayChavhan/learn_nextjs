This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

====================================================================================================================================

## nextjs01_introduction

> What is Next Js ?

- an open-source JavaScript framework used for building web applications
- The React Framework for the web apps
- based on reactjs library
- many extra features added in nextjs over reactjs
- like routing , middlewares etc.
- Used to make Single-page application.

> Why Nextjs ?
> -Make big prokects easily and quickly
> -Inbuild features like

- SSR (Server Side Rendering)
- SSR helps in SEO
  -Many feature where added such as
- Routing
- CSS Support
- Middleware etc.

* Built-in optimizations features

Know more about features
Server-Side Rendering (SSR): Next.js allows for server-side rendering of React components, which means that the initial
rendering of a page can happen on the server rather than in the user's browser. This can lead to improved performance and SEO,
as search engines can more easily index the content of the pages.

Static Site Generation (SSG): Next.js also supports static site generation, where pages can be pre-rendered at build time as
static HTML files. This can lead to even faster page load times, as there is no need for server-side rendering on each request.

Routing: Next.js includes a file-based routing system. You can create pages simply by adding components in a designated "pages"
directory with file-based routes. For example, creating a file named "about.js" in the "pages" directory automatically generates
a route for "/about" on your website.

Automatic Code Splitting: Next.js automatically splits your JavaScript code into smaller, more manageable chunks. This improves
performance by loading only the code required for the current page, reducing the initial load time.

API Routes: Next.js provides an easy way to create API endpoints, allowing you to build backend functionality alongside your frontend
code within the same project.

CSS Support: Next.js offers various options for styling, including CSS modules, styled-components, and support for CSS-in-JS libraries.
You can choose the styling approach that best suits your project.

Extensibility: Next.js is highly extensible, and you can integrate it with various plugins, libraries, and data fetching methods.

Deployment: Deploying a Next.js application is straightforward. You can host it on various platforms, including Vercel, Netlify, AWS, and others.

Next.js is popular among developers for its performance optimizations, developer-friendly features, and the ability to build modern web
applications with ease. It has gained widespread adoption in the React ecosystem and is a solid choice for building both server-rendered
and static websites and web applications.

---

===================================================================

## nextjs02_installation and setup nextjs

- Download and install Nodejs
- Install Nextjs with npx
- Config Nextjs setup
- run project

There are a few ways to install Next.js, depending on your project requirements and preferences. Below are the primary methods to install Next.js:

1 > Using create-next-app (Recommended): This is the officially recommended way to create a new Next.js project. It provides a streamlined setup process.
To use this method, you need to have Node.js and npm (Node Package Manager) installed. You can create a new Next.js project using the following command:

> > > npx create-next-app your-app-name

This command will set up a new Next.js project with all the necessary dependencies and configurations.

2 > Manual Installation: If you prefer a more manual approach or need to integrate Next.js into an existing project, you can set up Next.js from scratch.
Here are the basic steps:

Create a new directory for your project.

Navigate to the project directory and initialize it as a Node.js project by running npm init -y.

Install Next.js and React using npm:

> > > npm install next react react-dom

Create a pages directory in your project's root folder to define your routes and pages.

You can then add a script to your package.json to start your Next.js development server. For example:

> > > "scripts": {
> > > "dev": "next dev"
> > > }

You can run your development server with npm run dev.

3 > Cloning from a Starter Template: There are various starter templates and boilerplates available on GitHub that provide preconfigured Next.js setups for specific use cases. You can clone one of these templates to get started quickly.

4 > Using npm or yarn: You can also create a Next.js project without using create-next-app by running the following command in your project directory:

Using npm: npm install next react react-dom

Using yarn: yarn add next react react-dom

After installing the required dependencies, you can configure your project as needed and start building your Next.js application.

The first method using create-next-app is the simplest and recommended way to start a new Next.js project. However, you may choose one of the other methods based on your project's specific requirements and your level of familiarity with Next.js and project setup.

HERE WE ARE INSTALLING NEXTJS :->
npx create-next-app blog
Need to install the following packages:
create-next-app@13.5.6
Ok to proceed? (y) y
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/_)? … No / Yes
✔ What import alias would you like configured? … @/_
Creating a new Next.js app in /home/l910009/Documents/workspace/learn_nextjs/nextjs_full_tut/blog.

---

===================================================================

## nextjs03_first program

> what is use of "use client" in nextjs ?

- Client Components enable you to add client-side interactivity to your application. In Next.js, they are pre-rendered on the server and hydrated on the client. The “use client” directive is a convention to declare a boundary between a Server and Client Component module graph.

for example :-

<!--
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
-->

Use cases:

Add interactivity and event listeners (onClick(), onChange(), etc)
Use State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc)
Use browser-only APIs
Use custom hooks that depend on state, effects, or browser-only APIs
Use React Class components

> What are Components based on rendering in Nextjs ?
> -Server Component : -

        -> REnder on server side
        -> By default , all components are server components
        -> they are closer to the backend
        -> So BE - related logic and code should write in server component

-Client Components : -
-> Render on the Client side
-> can make client components with "use client" directive.
-> All UI related code and event should be written here

---

===================================================================

## nextjs04_basic-routing

Basic routing | File based routing

-The folder name will match with the route name
-page.js should be present in every folder

for example:-
localhost:3000/login
src/login/page.js

localhost:3000/about
src/about/page.js

---

===================================================================

## nextjs05_Linking and Navigation in Nextjs

next/link : - It is used for linking between pages

'use client'

import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {

const router = useRouter();
return (
<main>
<h1>Welcome to Home Page</h1>

      {/* Linking */}
      <Link href="/login">Go to Login Page</Link>
      <br />
      <Link href="/about">Go to About Page</Link>

      {/* Navigation */}
      <button onClick={() => router.push("/login")}>Go to login page</button>
    </main>

)
}

===================================================================

## nextjs06_Nested Routing

Normal Routing
--> localhost:3000/about
=> src/about/page.js

Nested Routing
-->localhost:3000/about/aboutcollage
=> src/about/aboutcollage/page.js

\*\*\* if post learnjs is variable one.
--> localhost:3000/blog/learnjs
=> src/blog/[...slug].js

===================================================================

## nextjs09_DYNAMIC Routing

\*\*\* if post learnjs is variable one.
--> localhost:3000/studentlist/akshay
=> src/studentlist/[student]/page.js

'use client'

export default function StudentDetail(props){

    return(
        <h1>Welcome to student details of {props.params.student}</h1>
    )

}

===================================================================

## next10_catch all segments of routes in nextjs

In Next.js, you can define dynamic routes using segments. These segments are parts of the URL that can vary, allowing you to create dynamic pages and handle different parameters. Dynamic routing with segments is achieved by creating files and directories with square brackets [] in the pages directory. Each set of square brackets represents a segment in the URL.

Here's how segments work in Next.js:

```

1> Basic Segment:
A basic segment is enclosed in a single pair of square brackets. For example, [slug].js represents a basic segment.
It captures one part of the URL, and you can access it as a parameter in your component using useRouter or getServerSideProps or getStaticProps.

2> Multiple Segments:
You can have multiple segments in the URL by using multiple pairs of square brackets. For example, [category]/[slug].js represents two segments.
Each segment captures a part of the URL, and you can access these segments as parameters.
Optional Segments:

You can make a segment optional by adding a hyphen - at the beginning of the square brackets. For example, [-slug].js.
Optional segments allow you to have URLs with or without that segment. You can use this for optional parameters in your routes.

3> Catch-All Segments:
A catch-all segment is indicated by three dots ... within square brackets, like [...slug].js.
It captures multiple segments of the URL into an array, allowing for more flexible routing.
Here are some examples of how you can create routes using segments in Next.js:


-- Single Dynamic Segment:
File: [slug].js
URL: /page-name


--Multiple Dynamic Segments:
File: [category]/[slug].js
URL: /blog/react/nextjs

--Optional Segment:
File: [-slug].js
URL: /products or /products/some-product


--Catch-All Segment:
File: [...slug].js
URL: /products/laptops/apple/macbook

With dynamic segments, you can create flexible and powerful routes in Next.js. You can then access
the values of these segments as parameters in your components, allowing you to create dynamic content
and pages based on the URL structure.

HERE IS WHAT WE IMPLEMENTED IN PROJECT
if we add http://localhost:3000/study/akshay/chavhan/wrongway
then it will show
>>>
akshay
chavhan
wrongway

Here is the code :- >
'use client'


export default function Lecture(props) {
    const { params } = props;
    // console.log(props);
    return (
        <div>
            <h1>Welcome to the Lecture Page</h1>
            <ul>
                {
                    params && params.lecture.map((lecture) => {
                        return (
                            <li>{lecture}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


===================================================================

## next11 404 page in nextjs

What we are doing ?
Make global 404 pages ?
Make routes specific 404 pages ?


===================================================================

## next12 Middlewares in nextjs

Middleware runs in between req and res , where after req and before res.
Middleware in Next.js is a concept used for customizing and augmenting the behavior of a Next.js application, specifically for server-side rendering (SSR). Middleware functions are used to perform tasks such as authentication, logging, data manipulation, and more before a page is rendered or as part of the server request/response cycle.

============================================================
# next14 Fetch data in client component

What we are covering ?
- create product component
- make it client component
- add hook
- call api
- render data


============================================================
# next15 Call API in server component

What we cover?

- Create Server component for products
- make a function for call API
- call API
- render data



f 
