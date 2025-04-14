# Assignment 4 - Agile XP and Facade Design Pattern
*DUE: Sunday, April 20 at 11:59pm. There is no penalty for submitting until Monday, April 21 at noon.
This assignment is to be done in the same homework group of two as in the previous assignment.

**Enter both of your names below. If we cannot figure out who did the assignment, we cannot grade it!**
### Name:  
### Name:
---
## Accepting Assignment 4
* As before, have only ONE person on the team accept the assignment. That person 
will add the other team member to the generated assignment repository. In the new
GitHub repository:
  1. Click on the Settings gear icon on the right-hand side of the GitHub menu bar
  2. Click on Collaborators and teams
  3. Sign in
  4. Under Manage access, click on the Direct Access tab and then click on the Add People button
  5. Enter your teammate's GitHub username
  6. Make sure to edit the README.md file in the repository and add both of your names to
     the document!
  7. Remember to push your completed assignment to your GitHub assignment repo by the deadline.
  8. Also, submit your Assignment 4 repository's GitHub URL to Canvas Assignment 4 by clicking on the
     Canvas link for the assignment.
---
## Description
The purpose of this assignment is to give you practice in applying the Agile XP methodology to your coding. 
You will apply ping pong pair programming and TDD (see PowerPoint lecture slides) in completing the Façade 
Design Pattern and writing tests.

The React template with class and function interfaces for your assignment 5 have been provided. Create Vitest 
tests to ensure your code will work correctly when we grade it. Do NOT change the starter code interfaces unless
specified or your code will fail every test and receive a score of 0! 

### Part 1: Cloning and setting up your local repository
1.	Use Webstorm to clone locally the GitHub Assignment 4 repo
2.	Set up Vitest. See Agile XP – Pair Programming and Testing PowerPoint lecture slides

### Part 2: Façade Pattern – Object Oriented
The Typescript template with interfaces for the façade pattern has been provided. You will implement a façade 
pattern to control all household appliances. Use ping pong pair programming and TDD, test-driven development, 
to write the following code and tests.

1.	Do NOT edit the Appliance, SoundSystem classes.
2.	Complete the code for the TV class and create Vitest tests
3.	Complete the code for the SoundSystem class and create Vitest tests
4.	In HomeFacade, 
   a.	do NOT change the provided interfaces for the methods.
   b.	Implement the constructor
   c.	Implement the Typescript getters and setters for TV and SoundSystem
   d.	Implement the turn on and turn off methods.
   e.	Delegate to all the methods in the TV and SoundSystem classes. Use the same interfaces for methods in HomeFacade as the methods in the delegated classes. For example, HomeFacade should have an interface
muteTV(): string
that delegates to the void mute() method in the TV class.
5.	Write the following example code that will display on the React web page (App.tsx)
   a.	creates the HomeFacade object
   b.	turn on the TV first
   c.	the last two commands are to turn off the TV and then turn off the sound system
   d.	uses all the HomeFacade methods at least once.
   e.	Create Vitest tests for TV and SoundSystem
      i.	An initial test is provided in TV.test.ts

### Part 3: Deploying the React Application
1.	Build your React application by running  
    `npm run build`
2.	This will create a dist folder that will contain your static files – index.html,
    and in the assets subfolder – your javascript code and CSS styles.
3.	Copy the index.html and the assets subfolder to your public directory
4.	Create the Express server in the top folder of your application
    1. Run the following commands in a terminal or Windows command window
```
npm install -D express
npm install -D @types/express
```  
    2. Create a server.ts file in the top folder of your project. Include the following code  
```
import express from "express";  
const app = express()  

// the following line processes static files in the public folder
// it is public/index.html that is returned at localhost:3000
app.use(express.static('public'))

// the following runs the server
app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
})
```
c.	Compile the Typescript server.ts file
d.	Create a node.js Typescript Run Configuration named production server.

5.	You should now be able to view your application by running either the Vite development
    server or the production server
---
## AI Policy
To ensure that you are able to create a client-server application after this course is over,
you may not use generative AI programs to create the assignment or parts of the term project,
with the exception of using Webstorm's autocomplete feature. Even then, I highly recommend that
you visualize the code that you want first and then see if the code completion does what you
actually want it to do. Otherwise, you will find that the code completion will introduce all
sorts of bugs into your code.
