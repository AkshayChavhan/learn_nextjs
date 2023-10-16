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
 Head and Script Component in Next.js | NextJs Tutorial for Beginners #6
Regardless of whichever framework or library you use, the basics and essence of HTML, CSS and JavaScript remains intact well within your needs. You have the clarity of their applications and you know that the Head tag contains the title and the styling for the page but that is when you use core HTML. There might be times when you want to write stuff in the Head tag, but find yourself stuck in Next Js where there are pages which export React components which we write and there is no Head.

For your sake, let me tell you that Next Js can do wonders for you. Next Js provides a Head component which lets you inject stuff in Head and change things like title of the page directly from the title tag present in the Head component. Due to this very ability of Next Js, we can enjoy the new, great features of Next Js while still using the good old HTML, CSS, and JavaScript. 

 

Let’s now see how it actually works.

 

-- next/Head
As a part of the previous tutorial, we started creating a blogging website named Hunting Coder. We created the applications with a very minimal change in its content. Open the same folder where you created the hunting coder application.


If you could carefully observe the default template of the application and visit the index.js page, you would find an import named Head from next/head. If that import were assumed to be removed, you would get an error to see. And this is because the default template of the application uses the Head component and features an executable program in it.

<Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
</Head>
 

The Head component contains the title tag which for our website has Hunting Coder written in it and this gets reflected on the browser’s title bar.  We could have used JavaScript instead of Next if we had been using React, but Next gives us the convenience of injecting elements directly into the Head. Using this, you can add a custom title, CSS and any meta tags within the head component of your web page as per your requirements. 

 

Some meta tags popularly used are,

Description - This meta tag is used to define the description of the webpage.
Keywords - This meta tag is used to define keywords for search engines.
 

The first thing was this. The other thing is that we can even inject external scripts into our programs by including them in the Head component, whether it is for Google Analytics or Search Console or anything. This is done using the <script> tag inside the <Head> tag. Script tag has a prop named src which gives it the location to the JavaScript file. Due to the time, it often takes for JavaScript to be executed, embedding external scripts into the program could sometimes cause trouble with how fast the webpage loads. Moreover, you do not want your website to slow down just because third-party external scripts failed to load on time. So, to overcome this, Next Js features a Script component as well.

 

next/Script
This Script component could easily be included into our programs using the following import.

import Script from 'next/script'
 

A Script component operates as follows:

<Script src=''>
</Script>
 

Now this Script component features several attributes and one of them being the strategy. This is used to set the loading priority of external scripts improving the loading performance of websites. By default, strategy is set to afterInteractive which means the scripts are loaded immediately after the page becomes interactive. But for heavy third-party scripts, we prefer lazyOnload. This enables the scripts to get loaded only after everything else is rendered already.

<Script src=' ' strategy='lazyOnload'>
</Script>
 

And that's how using scripts inside Head differs in functionalities from using a separate Script component. With this, we have configured both our Head and our Script components. You will soon see how these components are utilised in our programs. We’ll see the Image component in the next tutorial. 



-- Image Component in Next.js 
In the last lecture, we dealt with the Head and the Script components of Next Js. Today, we'll look at the Image component. At times, when you use HTML, CSS, or JavaScript or any other framework, it can happen that when you embed an image into your programs, you complain about it taking forever to load on the website because of the size of the image. As a result, your site runs slower and your search engine optimization is ruined.

As for Next Js, it has improvised on this front too. Next Js provides an Image component. Image component automatically optimises your images. By default, images in this component are lazy loaded. As a result, the loading time of the website is greatly reduced since only images in the viewport - that is, on the screen - get rendered and not those that are not visible to you. It is through tools like these that Next Js is strengthened. Now let's take a closer look at the Image component.

 

Next Js Image Component
Open the same folder where you have created the hunting coder application. The default template of the application contains an import named Image from next/image in the index.js file similar to what we studied in the Head component. 

import Image from 'next/image'
 

Now, let me tell you what this Image component does.

It provides you with optimised images.
By default, images are lazy loaded which means that images which are not visible to you or are not there in your viewport would not get loaded.
Helps you make your images responsive conveniently.
 

There are a number of attributes this Image component comes with. We’ll discuss some of the most used and important ones. So, let’s start with running the development server.

yarn dev
 

You must find a default card set on the website. I’ll remove them first since I don’t need them to be there on my website. I’ll start by creating a <div> element having className blogs. This holds my list of blogs. Inside this <div> element, there is a heading named Popular Blogs. create another <div> element having className blogItem. This holds my individual blog post. Each blog would contain a heading <h1> and a paragraph <p> associated with it. So, the structure of the blog page would be something like this.

        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div>
 

Each of these blog items would get displayed using a loop. We will add our css in some later part of the tutorial. For now, we are planning out things we want to have on our website. It would also be handy to have a navigation bar on our website for convenience in browsing pages. So, let’s just get ourselves a nav component which is very easy to integrate.

 

Adding a Nav Component
First of all, add a <nav> element in the index.js file. Add a <ul> tag with for list elements inside the <li> tags namely Home, About, Blog and Contact. Here’s what the code looks like.

      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
 

But this surely doesn't appeal to us as a navigation bar. We would need to define a CSS styling for it to look like one.

 

Styling the nav component
Give a className to the nav component, say, mainnav. So, this goes as {style.mainnav} Since we don't want every similar component to have the same styling, defining a className is helpful.

Now move on to the main CSS file Home.module and add the CSS snippet provided below.

 

.mainnav ul{
  display: flex;
  justify-content: center;
    margin-top: 50px;
}
 
.mainnav ul li{
  margin: 0 24px;
    list-style: none;
    font-weight: bold;
}  
We have changed our navigation component to a flexbox and with some proper coherent margins and paddings, it has come out well. Update the styling of the main component to the one given below.

 

.main {
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  padding-top: 3rem;
}
We're now ready to proceed. This was our navigation component. We could have done more styling of the components but that is not our main focus here for now. We have done just enough of them to proceed. The final home page somewhat looks like this.



-- Creating Multiple Pages in Next.js
In the last lecture, we dealt with the Image component and gave our blogging website a navigation bar having links to the different pages. Basically, HuntingCoder is a blog site that will have a lot of posts and users will be able to access our website through various links and there would be multiple pages, say, a contact page, an about us page, or even a custom service page where you could offer your freelancing services in content writing and stuffs. So, today, we will learn how to create multiple pages for a website using Next Js.

 

Another thing we should take care of is that we shouldn’t hard code our contents for a website. It is a bad idea to use hard coding for websites that have a lot of content and that is where the need for dynamic navigation arises. We’ll see how all that is done in the coming tutorials. For now, we will configure the whole structure of our website, so we can see which link leads to which webpage. If you could remember, this was done using a package named React Router DOM in React, which I believe is too painful to use to render different components using different URLs. And Next Js makes it a cakewalk for us. Here, we have a pages folder where we could create our JS components and endpoints get automatically created on the basis of the names of those JavaScript files.

 

So, let’s just get started with creating these components.

Building the structure of the website
We need to change the default structure of the page in order to be able to navigate between multiple pages. First of all, run the development server if it's not running already. You must know the commands by now.

So, once opened, you could see that the website lacks even some of the basic attributes. Blog titles are static while they should be links to the blogpost and there are no pages as per mentioned in the navigation bar, and a few other things. And if you could remember, creating a page in Next Js is as simple as creating another file in the pages folder. 

 

-- Creating the About, Contact and the Blog page
Move onto the pages folder and create a JavaScript file named about.js. Build a React arrow function export component, shortcut for which in VS Code is rafce. Inside the return statement is a <div> element with a demo text as shown below. 

import React from 'react';
 
const About = () => {
    return <div>This is my about component</div>;
};
 
export default About;
Code Snippet 1: The About component

 

This was our About component which you could see on http://localhost:3000/about. 

Similarly, create files contact.js and blog.js. Both will have the exact same components. Follow the snippets given below for each of them.

import React from 'react';
 
const Contact = () => {
    return <div>This is contact page</div>;
};
 
export default Contact;
Code Snippet 2: The Contact component

 

import React from 'react';
 
const Blog = () => {
    return <div>This is Blog home page</div>;
};
 
export default Blog;
Code Snippet 3: The Blog component

 

These pages should be visible to you on http://localhost:3000/contact and http://localhost:3000/blog respectively. 

 

-- Creating the blogpost folder
Now, for displaying the blog posts, we will first create a folder named blogpost in the same pages folder. Inside this folder, create a file named [slug].js. Since, each blog post will be displayed dynamically, their routes should be dynamic as well. Build a React arrow function export component similar to what we did above and import useRouter from next/router.Now, any string that comes after blogspot in the URL will be passed as a query in the form of a slug variable. You can store this using router.query as shown in the snippet below.

import React from 'react';
import { useRouter } from 'next/router'
 
const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return <div>{slug}</div>;
};
 
export default slug;
Code Snippet 4: The Blogpost slug component

 

As we have directly processed the slug variable here and we are returning it as is, whereas, in practice, we would seek out the API or utilise the backend. But, you have got the point how we utilise useRouter and do destructuring. For now, these were the only pages we wanted to add on our website. We’ll see if we would need more in the future, and this is where we finish giving structure to our website.

 

Hopefully you are enjoying the process of developing this website. I'll see you in the next tutorial where we’ll deal with the Link component. Till then, keep coding and learning!

