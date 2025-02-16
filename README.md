# MongoDB Connection Error: Incorrect URI

This repository demonstrates a common error when connecting to a MongoDB database: providing an incorrect URI.

## Bug Description
The provided JavaScript code attempts to connect to a MongoDB server using an invalid URI. The URI is missing the database name, which results in a connection failure.

## Solution
The solution involves correcting the URI to include the database name, allowing a successful connection to be established.

## How to reproduce
1. Ensure you have MongoDB installed and running.
2. Run the `bug.js` file.  You'll encounter a connection error.
3. Run the `bugSolution.js` file to see the corrected version.

## Technologies Used
* MongoDB
* Node.js
* JavaScript