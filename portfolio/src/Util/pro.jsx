// import Elibrary from '../data/download.jpg';
import Restaurant from '../data/71mlk+5TszL.jpg'
import Ecomm from '../data/Impact-of-eCommerce-On-Society.png'
import Url from '../data/weat.jpg'
import ress from '../data/ress.jpg'
import weather from '../data/weather2.jpg'
import Elibrary from '../data/eee.jpg'
import Movies from '../data/movies.jpg'


export const Projects = [
    {
        _id: 1,
        name: "E-Library",
        image: Elibrary,
        // image : weather,
        info : "This project is basically for the books management . we can give review for those books and all this operation are perform by user by authentication amd authorization process ",
        skills : " Tech: JSON Web Token (JWT) · Node.js · MongoDB · Express.js · JavaScript ",
    },
    {
        _id: 2,
        name: "Product-Management",
        image: Ecomm,
        info : "This project is based on the E-commerce website and Cart Management. In this project, user can order products from Cart. Real time example of this project is some e-commerce website like Amazon",
        skills : " Tech: JSON Web Token (JWT) · Node.js · MongoDB · Express.js · JavaScript . AWS S3 "
    },
    {
        _id: 3,
        name: "Restaurant-Website",
        image: ress,
        info: " The overview of the project is we are making a Restaurant Website which is similar to mini E-commerce web site. Which is completely responsive. ",
        skills: " Tech: React.js . Material-UI . Css"
    },
    {
        _id: 4,
        name: "Url-Shortner",
        image: Url,
        info : "URL shortening is used to create shorter aliases for long URLs. We call these shortened aliases “short links.” Users are redirected to the original URL when they hit these short links. Short links save a lot of space when displayed, printed, messaged, or tweeted.",
        skills : " Tech: Redis · Git · JSON Web Token (JWT) · Node.js · MongoDB · Express.js · JavaScript"
    },
    {
        _id: 5,
        name: "Weather-App",
        image: weather,
        info: " The overview about this project is, it is an application which gives the idea about weather on that particular day of any city of world and this application is completely responsive. ",
        skills : " Tech: Axios . React.js . Css  "
    },
    {
        _id: 6,
        name: "Movies-Rating",
        image: Movies,
        info: " The overview about this project is, it is an application which gives the idea about movies and their ratings  and this application is completely responsive. ",
        skills : " Tech: Axios . React.js . Css  "
    },
]