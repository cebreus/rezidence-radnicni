# Project Title

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and production build purposes.

### Prerequisites

[Node.js](https://nodejs.org/en/) (v22+) and [pnpm](https://pnpm.io/) are required.

### Installing

1.  Clone the repository into new project folder `PROJECT_NAME`

    ```bash
    git clone https://github.com/cebreus/gulp-devstack/ ./PROJECT_NAME
    ```

2.  Go to project directory `PROJECT_NAME` and install dependencies

    ```bash
    cd PROJECT_NAME && pnpm install
    ```

## Usage

1.  🛠️ Development enviroment with watchers and hot-reload

    ```bash
    pnpm run dev
    ```

2.  👁️ Static build with optimised and formated sources

    ```bash
    pnpm run export
    ```

3.  💯 Static build ready for production deployment with maximum minification

    ```bash
    pnpm run build
    ```

## Authors

Jaroslav Vrána — <cebreus@live.com>
