# Hotel Artichaut - Ilot1 

## Workflow Git-Flow

### Install Git-Flow

    sudo apt update && sudo apt upgrade

    apt-get install git-flow

    cd root <project-name>

    git branch develop

    git push -u origin develop

    git flow init

choose [main] for production release 

choose [develop] for development en next-release

### Work with Git-Flow

    git checkout develop 

    git flow <feature> start <feature-name>

//Depending what you do on the branch please choose the right prefix:

How to name your supporting branch prefixes?
Feature branches? [feature/]
Bugfix branches? [bugfix/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []

then you can do your stuff like: 

    git add . 

    git commit

    git push 

// Note if you want to push your branch on the repo please use this command: 

    git push --set-upstream origin <prefix>/<feature-name> --force-with-lease

when your stuff is done pull develop branch from the repo and resolve your conflicts in local stage first

    git checkout develop

    git pull

    git checkout <prefix>/<feature-name>

    git rebase develop

// set your conflicts

    git flow <prefix> finish <feature-name>

// this will delete your feature branch

    git push origin develop

Your finally done you can start another one :) 


# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### Store with Pinia 

make sur to install it and configure it



