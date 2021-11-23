# Adding CRUD to an Existing App
**Use this repository as a template to create your deliverable**

### Learning Objectives

- Create the illusion of multiple pages in a Single Page Application routes by using react-router.
- Use router props and `/items/:id` to create a List/Detail pattern with react-router 
- Use the async/await pattern to make our asynchronous code easier to read.
- Use snapshot testing for presentational components

### Description

For this deliverable, you will be working on an app that displays blog posts. Use this repository as a template. You will be setting up your own supabase database to work on this project. The tables should have the following schema and a SQL script has been provided for you to seed your data:
|authors| |
|---| -- |
|id| int - primary key |
|created_at| date |
|name| varchar |

|blogs| |
|---| -- |
|id| int - primary key |
|author_id| int - foreign key |
|created_at| date |
|title| varchar |
|subtitle| varchar |
|text| varchar |
|image| varchar |

Blogs belong to an author, and authors can have many blogs. We have provided you with a `BlogForm` components which take the following props:

| prop | description |
|--|--|
| title | Blog title |
| subtitle | Blog subtitle |
| text | Blog text |
| image | Blog image url |
| handleChange | Input changing callback function |
| handleSubmit | Form submit callback function |

For this lab, you will be adding the necessary React Router code to be able to view, edit, update and delete a blog.
Your data layer is already provided for you in the services folder. You do not need to write code to retrieve the data from supabase but you do need to use these functions.

### Acceptance Criteria

* a user should be able to visit the following pages (you'll need to add the !!!!`<Route>` and `<Switch>` to App.js)
  * a home page which renders the `<Home>` component with the list of blogs
  * individual blog posts at `blogs/:id` which should render !!!`<Detail>` component
  * individual blog edit pages `blogs/:id/edit` which should render `<EditPage>` component
* the `<DetailPage>` should
  * use `useState` and `useEffect` to dynamically load the individual blog from the router params
  * pass the blog attributes to a `<BlogCard>` component to display the blog details
  * show a link to its edit page `blogs/:id/edit`
* the `<EditPage>` should
  * use `useState` and `useEffect` to dynamically load the individual blog from the router params
  * pass the blog attributes to a `<BlogForm>` component to display the blog form
  * pass `handleChange` callback as a prop to the `<BlogForm>` to handle updates to the state (function provided for you)
  * pass a `handleSubmit` callback as a prop to the `<BlogForm>` to handle saving the data to the server (function needs to be written)
  * display a link to allow the user to go back to the detail page
* submitting the form on the edit page should update the blog post in supabase and display a success message to the user that the blog was updated

### Stretch (1 point each)
* each blog should have a delete button on the edit page that removes the blog post in supabase and redirects back to the homepage
* users should see an error message on the page if the supabase call fails
* users should see the `<Spinner>` component while waiting for the supabase call on both the Edit page and the Detail page
* the success message should be removed after 2 seconds (hint: useEffect + setTimeout)

### Rubric
| Task | Points |
| --   | --     |
| Routes properly setup | 2 |
| Detail page gets data and displays blog information | 2 |
| Edit page loads the data and displays the form | 2 |
| Edit page updates blog | 2 |
| Snapshot tests for Detail and Edit pages | 2 |
