# Solo Project - MN Brew

## Description
_Duration: 2 Week Sprint_

One of my favorite hobbies is small batch (1-2 Gallon) kit home brewing. When someone buys these kits they come with the ingredients and an instruction sheet to follow. If you are like me I tend to lose or the paper gets wet and eventually gets thrown out. This can be very frustrating when data gets recorded on the sheet. That is why I created MN Brew.

MN Brew is an application that allows users to store brew recipes and take notes for future reference. The application comes preloaded with recipes for the users. Some additional features are:

- Links to purchase supplies and recipes via an online retailer
- Ability to add new recipes
- Ability to record bottling day as a reminder 


## Screen GIF

![](mn-brew.gif)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postico](https://eggerapps.at/postico/)
- PostgreSQL

## Installation

1. Fork and clone project
2. Open with the editor of your choice
3. Create a database through Postico called `prime_app`
4. Data to setup table found in `database.sql` file
5. Open terminal and run `brew services start postgresql`
6. Run `npm install` to get dependencies for `package.json`
7. Split terminal window
8. `npm run server`
9. `npm run client`
10. Browser will load and direct to `http://localhost:3000`
11. When finished in each terminal window press `control + C` to stop server and client
12. Stop postgresql in terminal with `brew services stop postgresql`

## Built With

- React
- Redux
- Redux-Saga
- Moment.js
- EmailJS
- Express.js
- PostgreSQL
- Passport
- Javascript
- Material-UI
- HTML
- CSS

## Acknowledgement

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality.

## Support

If you have suggestions or issues, please email me at terry.okeefe87@gmail.com