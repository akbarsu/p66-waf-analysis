# P66 WAF Analysis

This project is a React-based web application for analyzing Web Application Firewall (WAF) implementations across AWS and Azure cloud environments for P66.

Live demo: [https://akbarsu.github.io/p66-waf-analysis/](https://akbarsu.github.io/p66-waf-analysis/)

## Table of Contents

1. [Setting Up Git and GitHub](#setting-up-git-and-github)
2. [Project Setup](#project-setup)
3. [Development Workflow](#development-workflow)
4. [Returning to Development](#returning-to-development)
5. [Deploying to GitHub Pages](#deploying-to-github-pages)
6. [Available Scripts](#available-scripts)

## Setting Up Git and GitHub

If you're setting up on a new computer or need to configure a different GitHub account, follow these steps:

1. Install Git if not already installed: [https://git-scm.com/downloads](https://git-scm.com/downloads)

2. Open a terminal or command prompt and set your GitHub username:
   ```
   git config --global user.name "akbarsu"
   ```

3. Set your GitHub email:
   ```
   git config --global user.email "akbuler@gmail.com"
   ```

4. (Optional) If you need to switch between multiple GitHub accounts, you can set repository-specific configurations:
   ```
   cd /path/to/p66-waf-analysis
   git config user.name "akbarsu"
   git config user.email "akbuler@gmail.com"
   ```

5. Set up SSH key authentication for GitHub:
   - Generate a new SSH key:
     ```
     ssh-keygen -t ed25519 -C "akbuler@gmail.com"
     ```
   - Add the SSH key to your GitHub account: [Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

## Project Setup

1. Clone the repository:
   ```
   git clone git@github.com:akbarsu/p66-waf-analysis.git
   cd p66-waf-analysis
   ```

2. Install Node.js if not already installed: [https://nodejs.org/](https://nodejs.org/)

3. Install project dependencies:
   ```
   npm install
   ```

## Development Workflow

1. Start the development server:
   ```
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

3. Make changes to the code. The page will automatically reload when you save changes.

4. Commit your changes:
   ```
   git add .
   git commit -m "Description of changes"
   ```

5. Push changes to GitHub:
   ```
   git push origin main
   ```

## Returning to Development

If you're returning to the project after some time or on a different computer, follow these steps:

1. Open a terminal and navigate to the project directory:
   ```
   cd path/to/p66-waf-analysis
   ```

2. Pull the latest changes from the remote repository:
   ```
   git pull origin main
   ```

3. Install or update dependencies (in case any have changed):
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

You can now continue with the [Development Workflow](#development-workflow) section for making and committing changes.

## Deploying to GitHub Pages

To update the live demo on GitHub Pages:

1. Ensure all changes are committed and pushed to the main branch.

2. Run the deployment script:
   ```
   npm run deploy
   ```

3. The script will build the project and push the built files to the `gh-pages` branch.

4. Your changes will be live at [https://akbarsu.github.io/p66-waf-analysis/](https://akbarsu.github.io/p66-waf-analysis/) within a few minutes.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)
- `npm run deploy`: Deploys the app to GitHub Pages

For more information on these scripts, refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/akbarsu/p66-waf-analysis/issues).
