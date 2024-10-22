# Micro Frontends Hands-on

**Author**: Nabson Paiva

This repository was used on a practical activity designed to allow participants to gain skills and direct experience in implementing a microfrontend using modern technologies. Throughout the workshop, participants followed a step-by-step guide that covers everything from the initial environment setup to frontend integration.

---
## Prerequisites

1. Recommended operating systems:
    - Linux (Ubuntu or Mint)
    - MacOS
1. Node and NPM: `Node.js` is a JavaScript runtime environment that allows you to run JavaScript code on the server side, and `npm` is the default package manager for Node.js.
    - Check if it is installed with the command:
        
        ```bash
        node -v  # Check the version of Node.js
        npm -v   # Check the version of npm
        ```
        
    - If it is not installed, install it with the commands:
        
        ```bash
        sudo apt update
        sudo apt install nodejs npm
        ```

---
## Setup

1. Open the exercise repository on Github: https://github.com/nabsonp/mfe-hands-on
2. Open a terminal on your machine and clone the repository, then navigate to the created folder with the following commands:
    
    ```bash
    git clone https://github.com/nabsonp/mfe-hands-on
    cd mfe-hands-on
    ```
    
3. Open a terminal within each folder and run the following commands in all:
    
    ```bash
    npm install -f
    npm start
    ```
    
4. Wait for the log `webpack 5.68.0 compiled successfully in XXX ms` to appear in all terminals.
5. Check that the application is running at the link [http://localhost:3015/](http://localhost:3015/products/3)


# References

- https://nodejs.org/en
- https://www.npmjs.com/
- https://single-spa.js.org/
- https://github.com/nabstore

