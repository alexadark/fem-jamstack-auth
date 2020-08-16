exports.onCreatePage = ({ page, actions }) => {
  console.log("page", page)

  if (page.path.match(/^\/dashboard/)) {
    //if it starts with dashboard we want to rewrite to the dashboard component

    page.matchPath = "/dashboard/*"
  }
}
