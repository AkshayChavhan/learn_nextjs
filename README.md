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