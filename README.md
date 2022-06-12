# Banjalukadev & CMS system

The definition of a CRUD application is essentially a CMS system. CMS systems help people with a lack of technical knowledge to set up their website and publish content on it. This application is my attempt to recreate a system of this type.

I noticed that there is not so much web developement blogs written in my native language. That sparkled an idea in my mind to create a CMS where any developer can register as an author and then publish the content. Posts are categorized, before the author publishes a post he must choose a category.

![1](https://user-images.githubusercontent.com/55507857/173240355-61b12f34-f5aa-49fe-b6d8-e7e03fae3b1a.jpg)

# Project Status

The project is currently active and you can visit it live. The project is meant to be an experiment and I have no intention on scaling it, or making something more out of it.

What remains to be developed is a page where the author could register, so that he could publish the content of his likings. This is currently being done through POSTMAN, only super admin can create author's via POSTMAN.

You can see live demo on following [link](https://banjalukadev.netlify.app/).

#### Login as author

- Username: test
- Password: test321

# Project Screen Shot(s)

Banjalukadev landing page.

![2](https://user-images.githubusercontent.com/55507857/173241242-162fe8b6-5712-4485-a239-e66ac20912ac.png)

Last three posts published by authors.

![3](https://user-images.githubusercontent.com/55507857/173241259-f3ebab51-f4ec-4af4-84ce-43747c78ef15.png)

All posts published by authors.

![4](https://user-images.githubusercontent.com/55507857/173241294-107db8a4-7138-4eaf-836a-e970412b7bc2.png)

All categories published by authors. Only categories that have more than zero posts are showing up.

![5](https://user-images.githubusercontent.com/55507857/173241345-f8b57e77-7286-4482-81fc-733a3a257513.png)

We can filter posts by category.

![6](https://user-images.githubusercontent.com/55507857/173241370-89dea237-5642-4d74-853f-f2c19a3fd2b9.png)

Every post follows the same structure. Firstly there is a heading and information about the date, category, and author name. After that, we have a heading picture and post text which follows the markdown structure.

![7](https://user-images.githubusercontent.com/55507857/173241387-e2a1e34a-f822-452d-a51b-0eaaa2777aa7.png)

Lastly, we have an image gallery and video player.

![8](https://user-images.githubusercontent.com/55507857/173241485-548b54da-dceb-4e1c-93c9-62ffb2bd666a.png)

You can log in as an author. I provided a sample account:

- username: test
- password: test321

![9](https://user-images.githubusercontent.com/55507857/173241517-009436e5-bad1-4a69-9ce7-b5ab515f36d3.png)

After successful login, you can see your dashboard. Currently, the author "test" does not have any categories or posts.

![10](https://user-images.githubusercontent.com/55507857/173241535-1b8b3357-092d-4154-bd0c-bb7523f4186a.png)

If we login as a Borislav we can see that we have 4 categories and 8 posts. We can also see a graph. Graph is representing how many posts per category we have.

![19](https://user-images.githubusercontent.com/55507857/173241591-b636715b-201e-4fd3-b716-7a0a00150c95.png)

You can add categories as an author.

![11](https://user-images.githubusercontent.com/55507857/173241662-0db80619-26ee-4858-ae75-e2436d3b395f.png)

Adding a category is plain simple. Just type the name of your category and you are done.

![12](https://user-images.githubusercontent.com/55507857/173241695-1014e60f-a942-4784-904b-d4611c261140.png)

You can preview your category on the categories page. Also, you can edit, or delete your categories. The same goes for posts.

![13](https://user-images.githubusercontent.com/55507857/173241735-2efb95f5-36ec-4b78-9930-e6ceb7deaf8b.png)

Publishing the post is easy. Select the name of the post, and category type (you can only select categories that you added). Select the main image, images for the gallery, youtube link, and text for the post. You can place a markdown in the post text.

![14](https://user-images.githubusercontent.com/55507857/173241780-23e70f39-72b2-4d2f-93ca-fa2041573ae0.png)

You can preview your post on the posts page. Also, you can edit, or delete your posts.

![15](https://user-images.githubusercontent.com/55507857/173241867-00aef221-caa0-4320-9328-8c53a71229d4.png)

The dashboard is updating in real-time. After you either category or post, the dashboard will update itself.

![16](https://user-images.githubusercontent.com/55507857/173241894-80ad2524-7fc2-4f61-9739-8efd43058163.png)

We can see our new post on the CMS front page, as well as a category that we added.

![17](https://user-images.githubusercontent.com/55507857/173241938-54f60bd4-13d2-4239-aa70-47dea9af40b4.png)

We can preview our post on the front page of a CMS.

![18](https://user-images.githubusercontent.com/55507857/173242012-f97c4264-63f5-4ca1-8a89-a9e52ef8b247.png)

# Installation and Setup

The application is created with React so you need to have node and npm locally on the machine.

#### Install dependencies

`npm install`

#### Setup .env file

You need .env file to connect to the backend. You need to create an environment variable called REACT_APP_BACK_END_API_KEY. The value of this variable depends on whether you have a copy of the API code or not. If you do not have a copy of the API code, set the value for the environment variable to: `https://banjaluka-dev.herokuapp.com`.

#### Start a server locally

`npm start`

#### Visit the application locally

`localhost:3000s`

# Reflection

- This was a very fun project.

- The complete project is custom, I developed both the frontend and API.

- The biggest challenge in this project was charting and creating a markdown component. I came across a package called recharts and react-markdown-editor and I implemented them in my project.

## Summary

The development of the project took about 15 days, because i developed both front-end and api.

The project is in its final phase. There is just an author registration page left. Currently, I'm working on refactoring the code in the author context.

The versions of the technologies I used are below:

| Technology            | Version |
| --------------------- | ------- |
| React                 | ^17.0.2 |
| React Router DOM      | ^6.2.2  |
| Styled Components     | ^5.3.3  |
| Axios                 | ^0.26.1 |
| Recharts              | ^2.1.9  |
| React-markdown-editor | ^4.0.3  |
