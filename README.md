# Demo site using Snowplow and Gatsby

> This site was created for an assignment at Snowplow

## 🚀 Quick start

1. **Prerequisites**

   You must have the following installed:

   - Docker
   - node (v12 and up)
   - npm
   - git bash

1. **Clone the repo and get everything ready**

   Open a git bash terminal, clone the repository and open in editor of choice (vscode highly recommended!).

   ```shell
   git clone https://github.com/estyh/snowplow-gatsby-site.git
   cd snowplow-gatsby-site
   npm i
   ```

1. **Run it!**

   Let's rev up the snowplow micro. Make sure to run the snowplow command in a windows environment (git bash terminal is fine).

   ```shell
   npm run snowplow
   ```

   And now, build the site and then have gatsby serve it. Open a new terminal, and run the following:

   ```shell
   npm run build
   npm run serve
   ```

   And voila! The site is now running on <http://localhost:9000/>

   You can view the tracked snowplow events at <http://localhost:9090/micro/all>

   Full documentation of available snowplow micro queries [here](https://github.com/snowplow-incubator/snowplow-micro/)

## 🎓 If you want to make it your own

1. **Start developing.**

   Start up the dev server - this will watch your code for changes and rebuild on the fly.

   ```shell
   npm run develop
   ```

2. **Open the source code and start editing!**

   Your site is now running at <http://localhost:8000>

   _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

### Frameworks and boilerplate

- The site is built using [Gatsby](https://www.gatsbyjs.com), mostly because it's something I hadn't tried yet and was looking forward to getting my feet wet a bit.

- I chose a [basic boilerplate starter](https://github.com/gatsbyjs/gatsby-starter-blog) to get things off the ground.

### Snowplow Events

- simple page view tracking (disabled for now)
- structured event tracking - for clicked links (realized after that there's a plugin for this!)
- custom event tracking - messy implementation of rating a lecture with stars

> Based on example custom event in the [snowplow micro examples repo](https://github.com/snowplow-incubator/snowplow-micro-examples)
