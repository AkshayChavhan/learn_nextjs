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


============================================================
# next16 Use client component with server component in nextjs

Here we are trying to use client events like button click on server side component by creating a client
component having button with its event.


============================================================
# next17 CSS STYLE in nextjs


In Next.js, you can apply CSS styles to your components in a variety of ways, and the choice of styling method largely depends on your project's requirements and your personal preferences. Here are some common ways to apply CSS styles in a Next.js project:


1 > CSS Modules (IMPORTANT) :-

Next.js has built-in support for CSS Modules, which is a local scope CSS solution. With CSS Modules, you create CSS files that are module-scoped, and you can import them directly into your JavaScript/React components.
CSS Modules provide unique class names to prevent styling conflicts between different components.
To use CSS Modules, create a .module.css or .module.scss file for your styles, and then import it into your component. For example:

>>>
// styles.module.css
.container {
  background-color: lightgray;
}

// MyComponent.js
import React from 'react';
import styles from './styles.module.css';

function MyComponent() {
  return <div className={styles.container}>Styled Content</div>;
}

export default MyComponent;


2 > Global Styles (IMPORTANT):

If you need to apply global styles to your entire application, you can create a global CSS file and import
it in your custom _app.js (or _app.tsx) file.
Any styles defined in this global CSS file will be applied to all pages and components in your application.


3 > Inline Styles (IMPORTANT):

You can also use inline styles directly in your React components by applying styles using JavaScript objects. This can be useful for small, component-specific styles.


4 > Styled-components:

Styled-components is a popular CSS-in-JS library that allows you to define your styles using tagged template
literals within your JavaScript/React components.
To use styled-components, you need to install the library, and then you can define your styles directly in your
components using JavaScript template literals.
For example:


>>>
// MyComponent.js
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: lightgray;
`;

function MyComponent() {
  return <StyledDiv>Styled Content</StyledDiv>;
}

export default MyComponent;


5 > CSS Preprocessors:

Next.js also supports popular CSS preprocessors like SASS, Less, and Stylus. You can use them by creating
files with the respective extensions (e.g., .scss, .less) and importing them into your components as needed.


6 > Third-Party Libraries:

You can use third-party CSS libraries and frameworks like Bootstrap or Material-UI by installing them and following their respective documentation for integration with Next.js.


CSS Moduels in Nextjs ===>
What we are learning ?

- How this is different from normal css
- make a new modular css file
- apply css module
- multiple css module

=========================================================================================================
# next18 Image optimization

In Next.js, the next/image component provides a powerful and built-in way to optimize images for performance and responsiveness on your website. Using the next/image component has several advantages over the regular <img> tag in terms of image optimization:

Automatic Optimization: When you use the next/image component, Next.js automatically optimizes your images for performance. It resizes, compresses, and serves the most appropriate image format (such as WebP) based on the user's browser and device. This reduces the page load time and improves the overall user experience.

Responsiveness: The next/image component allows you to specify different image sizes for different screen resolutions and devices. You can set width and height attributes, and Next.js will generate multiple image versions for those dimensions. This is crucial for providing a responsive design that looks good on both desktop and mobile.

Lazy Loading: By default, the next/image component uses lazy loading. Images are loaded only when they are in the viewport, which reduces initial page load times and saves bandwidth.

Blur-Up Effect: Next.js provides a blur-up effect for images, which means a low-resolution image is loaded quickly and then replaced with the high-resolution image. This improves the perceived performance of your site.

Automatic WebP Conversion: Next.js automatically converts images to the WebP format, which offers better compression and quality. Modern browsers that support WebP will receive this optimized format.




=========================================================================================================

# Font Optimization in next.js

next/font are get loaded on server side and client will not get called from the browser, thus maintain privacy.


next/font will automatically optimize your fonts (including custom fonts) and remove external network requests
for improved privacy and performance.

next/font includes built-in automatic self-hosting for any font file. This means you can optimally load web fonts
with zero layout shift, thanks to the underlying CSS size-adjust property used.

This new font system also allows you to conveniently use all Google Fonts with performance and privacy in mind.
CSS and font files are downloaded at build time and self-hosted with the rest of your static assets. No requests are
sent to Google by the browser.


=========================================================================================================

# Genrate Metadata for Dynamic Meta Data

Next.js has a Metadata API that can be used to define your application metadata (e.g. meta and link tags
inside your HTML head element) for improved SEO and web shareability.

There are two ways you can add metadata to your application:
-Config-based Metadata: Export a static metadata object or a dynamic generateMetadata function in a layout.js or page.js file.
-File-based Metadata: Add static or dynamically generated special files to route segments.


=========================================================================================================

# Next21 - Script component in nextjs

In Next.js, a "script" typically refers to JavaScript code that is included and executed on the client side. This can be in the form of external scripts, inline scripts, or custom React components that manage the loading and execution of scripts. These scripts can be used for various purposes, such as integrating third-party libraries, setting up analytics, or performing client-side actions.

Scripts in Next.js are commonly used to enhance the functionality and interactivity of web pages and components. They can be included and managed using standard HTML script tags, React components, or other techniques as needed for your application.


=========================================================================================================

# Next22 - Loader in nextjs
What we are learning >>>
Why do we need loader ?
call api?
render data of api on screen?
make loading screen?
check loader?

The special file loading.js helps you create meaningful Loading UI with React Suspense. With this convention, you can show an instant loading state from the server while the content of a route segment loads. The new content is automatically swapped in once rendering is complete.

-- Instant Loading States
An instant loading state is fallback UI that is shown immediately upon navigation. You can pre-render loading indicators such as skeletons and spinners, or a small but meaningful part of future screens such as a cover photo, title, etc. This helps users understand the app is responding and provides a better user experience.

Create a loading state by adding a loading.js file inside a folder.


=========================================================================================================

# Next23&24 - Export Static HTML Page with Build

In the context of web development, a "Production Build" and a "Development Build" refer to different configurations and optimizations of a web application for specific purposes:

Development Build:

A Development Build is a version of a web application that is specifically optimized for the development phase of a project. In a Development Build:

Debugging Information: It typically includes extensive debugging information, source maps, and unminified code. This makes it easier for developers to identify and fix issues during development.

Performance: The focus is on providing a convenient and productive development experience. Performance is not a primary concern in a Development Build, so the code may not be optimized for speed or efficiency.

Verbose Logging: It may include verbose logging and debugging statements to assist developers in tracking issues and understanding the application's behavior.

Hot Reloading: Development Builds often include features like hot module replacement, allowing developers to see immediate updates in the application without a full page refresh.

No Code Splitting: Code splitting, which separates code into smaller bundles to improve load times, may not be as aggressive in a Development Build because the goal is to simplify debugging.

Production Build:

A Production Build is a version of a web application that is intended for deployment to a live or public environment, where it will be accessed by users. In a Production Build:

Optimization: The code is heavily optimized for performance, including minification, tree shaking, and other techniques to reduce the bundle size and improve loading speed.

Removal of Debugging Information: Debugging information, console logs, and source maps are removed or minimized to reduce the size of the JavaScript bundle and enhance security.

Caching: The code is often configured to leverage browser caching to reduce server requests and improve load times for returning visitors.

Error Handling: Production Builds typically include error handling and reporting mechanisms, which may include logging and monitoring services to detect and respond to issues in a production environment.

Security: Security considerations, such as input validation, are prioritized in a Production Build to protect the application from potential vulnerabilities.

Code Splitting: Code is efficiently split into smaller bundles, allowing for better performance, especially on slow or unreliable network connections.

In summary, a Development Build is tailored for the development phase, with a focus on debugging and developer convenience, while a Production Build is optimized for performance, security, and user experience in a live or public environment. Developers typically work with Development Builds during the development phase and switch to Production Builds when deploying an application for public use.



What we are learning
- WHat is static HTML means ?
- Make some pages ?
- Add Configuration ?
- Run build command ?
- Check HTML and try to run it ?


If our application for now is of only 5 -6 page and not big enough so we can spend time on deploying whole application.
In such condition we used to deploy static html page ( by creating static html pages ).

How to create build ?
Before build we need to config next.js in next.config.js file as below
const nextConfig = {
    output : 'export'
}



run command
>>> npm run build

then it will generate folder name "out" where you will find content as static html files for all pages.


=========================================================================================================

# Next25 - Static site generation in nextjs :-

What we are learning :-
- WHat is SSG means ?
- Make a service file and call API .
- Display data from API
- Make dynamic routing
- make build with SSG

In rendering happen on server side is called as PRERENDERING. Prerendering has 2 types
1> Static Site Generation - Convert JS code into html by server while BUILDING Project
2> Server Site rendering - when client call on server and server response by converting response in html pages.


Static Site Generation (SSG) is a method of building websites where the web pages are generated at build time,
and the resulting HTML, CSS, and JavaScript files are pre-rendered and ready to be served to clients. In an SSG
approach, the web server serves static files directly, without the need for dynamic server-side processing for
each request. This offers several benefits, including improved performance, security, and scalability.

Here are the key characteristics and advantages of Static Site Generation:

Pre-rendering: During the build process, each page of the website is generated as a static HTML file. This means
that the content is rendered ahead of time, not on each request, which significantly reduces server load and
improves response times.

Performance: SSG sites are incredibly fast because there's no server-side processing for most page requests.
This results in reduced latency and faster load times, which is especially important for user experience and SEO.

Security: SSG reduces the attack surface because there's no server-side processing. Static files are inherently
less vulnerable to security exploits compared to dynamic, server-rendered pages.

Scalability: SSG sites are highly scalable, as they can be easily served by Content Delivery Networks (CDNs) for
global distribution. CDNs cache static content at various points worldwide, reducing the load on the origin server.

SEO-Friendly: SSG sites are very SEO-friendly because search engines can easily crawl and index static HTML pages.
This can positively impact search engine rankings.

Reduced Server Costs: With SSG, you can host your site on inexpensive static file hosting services, reducing the
need for expensive server infrastructure.

Improved Developer Experience: SSG allows developers to work with familiar development tools and frameworks,
making it easier to build and maintain websites.

Partial Rebuilding: SSG allows for partial rebuilding of the site when content changes, which means that only
the affected pages need to be regenerated, rather than rebuilding the entire site.

Support for Dynamic Data: While SSG generates static pages, it can also fetch and integrate dynamic data at build
time, making it suitable for content-rich websites that include dynamic elements.

Next.js, a popular React framework, supports SSG as one of its key features. Next.js allows you to build SSG
websites with ease, enabling you to create highly performant and SEO-friendly web applications while benefiting
from the flexibility and ease of use of React.

Static Site Generation is a powerful approach for a wide range of web applications, including blogs, e-commerce
sites, documentation, and marketing pages, as well as many other content-centric websites. It's particularly
well-suited for scenarios where content doesn't change frequently and where delivering a fast and secure user
experience is a priority.



SERVICE FILE :-
 the term "service file" can refer to a JavaScript file that contains code for interacting with external services or APIs. These files are commonly used in web development to encapsulate the logic for making HTTP requests to external services, handling data, and providing a clean interface for other parts of the application to interact with those services.

A service file in Next.js might typically include functions or methods that:

- Make HTTP requests to external APIs or services.
- Process data received from these services.
- Handle authentication and authorization related to the service.
- Provide a clean and consistent API for other parts of the application to use.

Service files can be used in Next.js applications to encapsulate the logic for working with external services, such as RESTful APIs, GraphQL endpoints, databases, and other data sources. They promote code modularity and reusability while keeping the integration with external services consistent and maintainable.






=========================================================================================================

# Next27 - Environment Variaables in nextjs :-

- What is env variable ?
- How to access env variables ?
- use env variables ?

Environment variables in Next.js are a way to securely store and manage configuration values, secrets, and settings that your
application requires. These variables are not hard-coded into your code but are instead stored outside the application codebase,
making it easier to manage configuration for different environments and enhancing security by keeping sensitive information separate
from your source code.

In Next.js, you can use environment variables to store values like API keys, database connection strings, feature flags, and other
configuration options. These variables can be accessed within your application code.

Here's how to work with environment variables in Next.js:


Create a .env File:

To define your environment variables, you typically create a .env file at the root of your Next.js project. You can also use .env.local
for local development-specific variables, or .env.production for production-specific variables.

+++ In Next.js, you can use separate environment variables for development and production by creating separate .env files for each environment.
Here's how you can achieve this:

Create Environment Variable Files:

First, create two separate environment variable files, one for development (e.g., .env.local) and one for production (e.g.,   .env.production).
You can also create environment-specific files for other environments if needed.

For development:
Create a file named .env.local and define your development-specific environment variables there.

For production:
Create a file named .env.production and define your production-specific environment variables there.

Access Environment Variables in Your Code:

In your Next.js code, you can access the environment variables using process.env. Next.js will automatically load the appropriate environment
variables based on your environment.

For example, if you define an environment variable called API_KEY in both .env.local and .env.production, the correct value will be loaded based
on the environment in which your application is running.


<!-- from next website -->
Default Environment Variables
In general only one .env.local file is needed. However, sometimes you might want to add some defaults for the development (next dev) or production (next start) environment.

Next.js allows you to set defaults in .env (all environments), .env.development (development environment), and .env.production (production environment).

.env.local always overrides the defaults set.



=========================================================================================================

# Next27 - API Routes in Nextjs :- 

What we are learning : =>
- use of API routes ?
- Make API route ?
- Test it on postman ?



## GET API with static data

- API for userdetail and userlist
- make a static db file
- make user api call
- make a route for single user API
- GET request params
- filter result and test API

# API Integration



===================================================================

## next36 REDUX Vs REDUXTOOLKIT Intro and Archetecture
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

What we are learning here : =>

- Redux main component
- Redux and RTK flow
- HOw redux works ?



=> REDUX MAIN COMPONENTS >
~~~~~~~~~~~~~~~~~~~~~~~

# Action
# Reducer
# Store
# Dispatcher ,Selected

Here is the flow of REDUX
VIEW/UI -> (dispatch) -> ACTION -> REDUCERS -> STORE -> (subscribe) -> again VIEW/UI




Here is the flow of REACT REDUX TOOLKIT
VIEW/UI -> (dispatch) -> SLICE -> STORE -> (subscribe) -> again VIEW/UI

<!-- INSTALLATION OF REDUX REDUX TOOLKIT -->

if you are creating new next app then you can add below script
>>> npx create-next-app name_of_project

>>> npm install @reduxjs/toolkit 
>>> npm install react-redux (if you need react bindings)



What we are learning
++ Folder Structure ,Store and Provider
make folder and file
make store
make provider

We are creating 2 components one is to create user form , other is to display created user.

make slice in redux toolkit
What is slice in RTK
Use of slice
Create slice

What is slice :- A slice is a collection of REDUX Reducer logic and actions for a single feature in your app.
In Slice , we define action and reducer in single file.

ACTION + REDUCER = SLICE


SEND DATA FROM NEXT TO REDUX :==>
What we are learning :=>
- Get data from input field to state
- import action function from Slice
- use dispatch hook for send data in action
- check data in slice 

GET DATA FROM NEXT TO REDUX :==>
What we are learning :=>
- import useSelector Hook
- Display list of Users
- Add style with user list



REMOVE DATA FROM NEXT TO REDUX :==>
What we are learning :=>
- make action for remove data in slice
- make remove button with each other
- call action on button click
- write a logic to remove data from redux





