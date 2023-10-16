# learn_nextjs

## STEP.1:- INSTALLATION SETUP YARN , NEXTJS APP
-- Our first Next.js website
In this lesson, we will start building our first Next.js application. You will see how easy it is!

You can always use npm to install packages, but I want you to resist the inertia and start working with yarn for a while (Its fast, its worth it, I promise!)

Install yarn using this command:  
>>> npm install --global yarn

-- Creating your first Next.js app :- 
You can create your first Next.js application by running the following command:
 >>> yarn create next-app
 It will ask few questions as below
 success Installed "create-next-app@13.5.4" with binaries:
      - create-next-app
✔ What is your project named? … nextjs_learn
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
Creating a new Next.js app in /home/l910009/Documents/workspace/learn_nextjs/nextjs_learn.

This command will ask you a few basic questions (the name of your app, etc.) and will create a folder with your next.js app inside of it.

You can open the generated Next.js code in the editor of your choice. I am using VS Code.


-- A glance into the generated code
Create next app generates a bunch of useful files with a git repository initialized. You will also see some files some of which are discussed below:

lock – This is the yarn lock file which stores all the packages with version numbers installed inside the node_modules
.gitignore – A file that stores what is ignored by the git version control system
public folder – Contains the public directory of our Next.js web application. Anything put inside this folder will be publicly accessible on the web application’s server. Developers should avoid putting secret files inside this folder as they can easily be accessed by public users!
pages folder – Pages (which are essentially React components) following the file-based routing approach (more on this in the later lessons)
styles folder – Contains the CSS styles for the Next.js web application
 

-- Starting the server
If you look into the package.json file, you will find a script to run the development server. Open your terminal and run the following command:
>>> yarn run dev

This will start the development server. Open the URL http://localhost:3000 (the URL shown in the terminal) by pressing control and clicking on it

Congratulations you have just started your first Next.js app. In the next lesson, we will learn how to customize this app to our liking. This will include changing the existing index.js page, adding more pages, adding styles, etc.


## STEP-2 File Based Routing in Next.js

In the last lesson, we built our first Next.Js application. This lesson will focus primarily on the file-based routing provided by Next.Js. Before we dive deep into the file-based routing, I will answer a few of the most asked questions by beginners

Next.Js FAQs
Is Nextjs a Frontend or a Backend Framework?

Its both, it can generate a frontend bundle along with APIs which are run on the server.

Is NextJs better than React?

No, and Yes! React is raw and Next.js comes with a few more features on top of that like file-based routing, Server-Side Rendering (SSR), Static Site Generation (SSG), a built-in router, etc.!

 

-- File-Based Routing
While using react, we need to install a third-party package to get the routing

Next.js comes built-in with an incredible feature called file-based routing. This feature enables Nextjs developers to simply create files inside the pages folder and those files will serve as routes for the application. For example, if you create 3 files (about.js, contact.js, and index.js) inside the pages folder of your Next.js application, you can view these components by visiting localhost:3000/about, localhost:3000/contact, and localhost:3000/ respectively.

This is what file-based routing is essentially about! When a file is added to the “pages” directory, it's automatically available as a route.  Each page exports a react component which is rendered when the corresponding URL is visited by the person visiting the page!

A sample about page (component) will look something like this:

>>>
function About() {
  return <div>About</div>
}

export default About


Visiting http://localhost:3000/about will display “About” on the screen as this component returns a <div> with “About” inside of it!

 

-- Nested Routes
To create nested routes in Next.js, all we need to do is to create corresponding nested folders. For example, If you want to create a route at localhost:3000/about/one , all you need to do is to create a folder named “about” with a component named “one.js”

-- Dynamic Routes
Defining routes as shown in the Nested Routes section above is not always enough for complex applications. In Next.js you can add brackets to a page ([sno]) to create a dynamic route (or URL slugs).

Consider the following page pages/blog/[sno].js:

>>> 
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { sno } = router.query

  return <p>Post: {sno}</p>
}

export default Post

This page will render Post: 1 when you visit http://localhost:3000/blog/1 and the same page will render Post: 34 when you visit http://localhost:3000/blog/34






## HUNTING CODER
BRANCH:- 03_01_hunting_coder_app_setup
 