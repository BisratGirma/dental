# Project Name

Briefly describe your project here. What problem does it solve? Why is it useful?

## Table of Contents

- Installation
- Usage
- License

## Installation

### In Local environment

1. **Prerequisites**:

   - Make sure you have **Node.js** and **npm** installed.
   - Install mongodb, here is the link: [mongo](https://www.mongodb.com/docs/manual/installation/)

2. **Clone the Repository**:

   ```bash
   git clone https://github.com/bisratgirma/dental.git
   cd dental
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Environment Variables**:

   - Create a `.env` file in the root directory.
   - Add this `PORT=2727` and save it.

5. **Database Setup**:

   - If your project uses a database, provide instructions on how to set it up.
   - Include any necessary scripts for database migrations or seeding.

6. **Start the Application**:
   ```bash
   npm start
   ```

### using Docker

1. **Install docker and docker-compose**:
2. **Pull containers**
   - ```bash
      docker pull node
     ```
   - ```bash
       docker pull mongo
     ```
3. **Build the docker container**:
   - ````bash
            sudo docker-compose up -d --build
            ```
     `
     ````

## Usage

This is a backend service, you can test it the project on postman:

here is the collection:- `https://api.postman.com/collections/23952939-7dd57586-3f52-4392-8f23-7d0a372fe972?access_key=PMAT-01HNT2GEE6EEGNM3QGBQ2J7QZR`

## License

This project is licensed under the **MIT License** - see the LICENSE file for details.
