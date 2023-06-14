//import selected Projects
import netflixSrc from '../assets/images/netflix.jpg'
import chatSrc from '../assets/images/chatt.webp'
import gymSrc from '../assets/images/goldynGym.webp'
import cryptoSrc from '../assets/images/crypto.webp'

//import Skills&Tools logo images
import html_logo from '../assets/images/html.png'
import js_logo from '../assets/images/js.png'
import react_logo from '../assets/images/download.png'
import tailwind_logo from '../assets/images/tailwind.png'
import sass_logo from '../assets/images/Saas.png'
import redux_log from '../assets/images/redux.png'
import github_logo from '../assets/images/githubpng.png'
import postman_logo from '../assets/images/postman.png'
export const skills = [
  {
    logo: html_logo,
    title: 'Html'
  },
  {
    logo: sass_logo,
    title: 'Sass'
  },
  {
    logo: js_logo,
    title: 'javascript'
  },
  {
    logo: react_logo,
    title: 'React'
  },
  {
    logo: redux_log,
    title: 'Redux'
  },
  {
    logo: tailwind_logo,
    title: 'Tailwind'
  },
  {
    logo: github_logo,
    title: 'Github'
  },
  {
    logo: postman_logo,
    title: 'Postman'
  }
]

export const selectedProjects = [
  {
    title: 'Build NETFLIX',
    tools: ['React js', 'Firebase', 'Tailwind Css', 'TMDB API'],
    overview:
      'I build a front-end Netflix clone with a Firebase back-end! We use the TMDB API for all of the data AND we will be using Firebase Authentication to give login functionality. We will be able to store user specific data with a React front-end and a Firebase back-end. We use Firestore which is cloud storage with Firebase to save data. The front-end is styled with Tailwind CSS - an incredible CSS framework to save time styling your apps.At the end of the build we deploy this LIVE with Firebase hosting. Thank you for watching!',
    liveDemoLink: '#',
    githubLink: 'github',
    img: netflixSrc
  },
  {
    title: 'chat App',
    tools: ['React js', 'Firebase v9', 'Tailwind Css'],
    overview:
      'I build chat application using React on the front end and Firebase for the backend technology. No complicated databases here - firebase handles all of that for us! We will also be incorporating OAuth with Google authentication in which Firebase will be handling as well.  This is an updated version using Firebase web version 9 with modular imports. We also use Tailwind CSS for all the styling (because Tailwind is awesome)! This is not a deep dive into Tailwind, but I do show how to install and configure it correctly. I hope you like the video. Let me know what you think in the comments below!',
    img: chatSrc,
    liveDemoLink: '#',
    githubLink: 'github'
  },
  {
    title: 'Golden Gym',
    tools: ['React js', 'RapidApi', 'Tailwind Css'],
    overview:
      'I build this Website With the functionality to choose exercise categories and specific muscle groups, browse more than one thousand exercises with practical examples, pagination, exercise details, pull related videos from youtube, display similar exercises, and much more, Golds Gym is the best React Fitness App that you can currently find on YouTube and on the entire internet.',
    img: gymSrc,
    liveDemoLink: '#',
    githubLink: 'github'
  },
  {
    title: 'Cryptocurrency App',
    tools: ['React js', 'Redux Toolkit', 'Rapid Api', 'Tailwind Css'],
    overview:
      "In this project I build a React JS application based around cryptocurrencies. I used hooks suc'h as useState and useEffect while using Axios to interact with the Coin Gecko API. We will also be using React Router Dom v6 to have dynamic routes. Learn about useParams, DOMpurify, and navigating common issues when working with API's in React. Hope everyone enjoys the video - let me know down in the comments below!",
    img: cryptoSrc,
    liveDemoLink: '#',
    githubLink: 'github'
  }
]
