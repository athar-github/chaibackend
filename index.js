require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res) =>{
    res.send("Hello twitter");
})
app.get('/login',(req,res)=> {
    res.send("<h1> login at chaicode.com</h1>");
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

app.get("/youtube",(req,res) => {
    res.send("<h2>www.youtube.com</h2>");
})

const githubData = {
  "login": "athar-github",
  "id": 132285243,
  "node_id": "U_kgDOB-KDOw",
  "avatar_url": "https://avatars.githubusercontent.com/u/132285243?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/athar-github",
  "html_url": "https://github.com/athar-github",
  "followers_url": "https://api.github.com/users/athar-github/followers",
  "following_url": "https://api.github.com/users/athar-github/following{/other_user}",
  "gists_url": "https://api.github.com/users/athar-github/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/athar-github/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/athar-github/subscriptions",
  "organizations_url": "https://api.github.com/users/athar-github/orgs",
  "repos_url": "https://api.github.com/users/athar-github/repos",
  "events_url": "https://api.github.com/users/athar-github/events{/privacy}",
  "received_events_url": "https://api.github.com/users/athar-github/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "athar_dev",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Web developer ",
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 8,
  "following": 28,
  "created_at": "2023-05-01T15:39:49Z",
  "updated_at": "2024-11-09T16:17:13Z"
}

app.get('/github',(req,res) =>{
  res.json(githubData)
})