const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "./src/components"),
        "~image": path.resolve("../images"),
        "~sections": path.resolve(__dirname, "./src/sections"),
        "~data": path.resolve("../data"),
      }
    }
  });
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
