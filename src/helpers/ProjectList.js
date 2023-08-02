import sortvis from '../assets/sortvis.png'
import movierec from '../assets/movierec.png'
import sentiment from '../assets/sentiment.png'
import chatapp from '../assets/chatapp.png'
import suge from '../assets/suge.png'
import pathvis from '../assets/pathvis.png'

export const projectList = [
    {
        name: "Genetic Algorithm Simulator",
        image: sortvis,
        description: "Building a web app for the genetic algorithm model I built, to simulate the evolution of a population of creatures.",
        tech: "Python, pygame",
        github: "https://github.com/reddheeraj/GeneticAlgo",
        live: "https://github.com/reddheeraj/GeneticAlgo"
    },
    {
        name: "Sorting Visualizer",
        image: sortvis,
        description: "A web app that visualizes different sorting algorithms.",
        tech: "React, JavaScript, CSS",
        github: "https://github.com/reddheeraj/SortingVisualizer",
        live: "https://reddheeraj.github.io/SortingVisualizer/"
    },
    {
        name: "Pathfinding Visualizer",
        image: pathvis,
        description: "A web app that visualizes different Pathfinding algorithms.",
        tech: "React, JavaScript, CSS",
        github: "https://github.com/reddheeraj/Pathfinding-Visualizer",
        live: "https://reddheeraj.github.io/Pathfinding-Visualizer/"
    },
    {
        name: "Movie Recommender",
        image: movierec,
        description: "A web app that recommends movies based on your preferences.",
        tech: "Python, Scikit-Learn , Streamlit, TMDB API",
        github: "https://github.com/reddheeraj/Movie-Recommendations-Project",
        live: "https://movie-rec-01.herokuapp.com/"
    },
    {   
        name: "Sentiment Analysis App",
        image: sentiment,
        description: "A web app that analyzes the sentiment of your text.",
        tech: "Python, Flask, NLTK",
        github: "https://github.com/reddheeraj/sentiment-analysis-app",
        live: "https://ml-sa-app.herokuapp.com/"
    },
    {
        name: "Chat App",
        image: chatapp, 
        description: "A web app that allows you to chat with your friends. (Not live anymore)",
        tech: "React, Nodejs, Socket.io, Bootstrap",
        github: "https://github.com/reddheeraj/Chat-App",
        live: "",
    },
    {
        name: "CountersRPG",
        image: suge,
        description: "A Discord Bot for the famous Discord game EpicRPG, made for a Client. (Live on Discord)",
        tech: "Nodejs, Discord.js, SQlite",
        github: "https://github.com/reddheeraj/countersrpg",
        live: "",
    },
]