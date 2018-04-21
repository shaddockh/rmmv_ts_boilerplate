# RPG Maker MV TypeScript Boilerplate Project

This is a project template for new RPG Maker MV projects that want to develop scripts in TypeScript. It includes some common boilerplate to make getting up and running with a new project easier.

## Features

*   TypeScript compilation configured to code plugins in TypeScript
*   Includes launch configuration for debugging using the NwJs debugger
*   Uses webpack to build and bundle plugins
*   Uses Jest for unit testing and coverage reporting
*   Uses the Endless Illusion Software RPGMaker MV Typescript definitions from http://endlessillusoft.com/rpgmakermv-intellisene

## Setup

*   you will need to populate the `\icon`,`\img`,`\fonts`, `\js`, and `\movies` folders with the default files used when generating a new RPG Maker MV project. These are standard RTP files and are not stored in source control.

*   run `npm install` from the root of the project to initialize it

## Building the project

run `npm run build` to build the project, or use the VSCode Task. This will transpile all of the TypeScript in the `ts` directory to the `js` directory and run any unit tests that have been defined.

## Adding new graphics, movies, etc.

Do not add new graphics directly to the 'img' folder. Instead, add them to the 'rtp_overrides' folder and then they will get copied into the img folder on build. This allows for storing custom images in source control and not needing to store the standard images in source control.

## Building your project for distribution

To build a project that you can use to deploy, run `npm run dist` and all of the files will be copied to the `/dist` directory. When you want to create a deployable app or website from RPG Maker, you need to open up the project in this folder from RPG Maker and then build your release from there. This is necessary, otherwise RPG Maker will try to bundle a bunch of extra files and folders that may cause the build to fail. ie. the `node_modules` directory or other directories that are not necessary for playing the game.
