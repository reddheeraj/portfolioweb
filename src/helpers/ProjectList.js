import sortvis from '../assets/sortvis.png'
import movierec from '../assets/movierec.png'
import sentiment from '../assets/sentiment.png'
import chatapp from '../assets/chatapp.png'
import suge from '../assets/suge.png'
import pathvis from '../assets/pathvis.png'
import geneticalgo from '../assets/geneticalgo.png'
import lorebubbl from '../assets/lorebubbl.png'

export const projectList = [
    {
        name: "LoreBubbl",
        image: lorebubbl,
        description: "LoreBubbl uses AI to support people with short attention spans by giving contextual awareness and knowledge while reading any book. You just have to highlight the text and ask for context. I built a RAG system inspired by Anthropic's contextual retrieval mechanism. We integrated it with an LLM (LLama 3 70b versatile) for accurate RAG solutions. Flutter was used for frontend, and flask was used to manage the APIs in the backend. ",
        tech: "Python, AWS, Flutter, Flask",
        github: "https://github.com/reddheeraj/Text-Referencer",
        live: "https://devpost.com/software/lorebubbl"
    },
    {
        name: "Genetic Algorithm Simulator",
        image: geneticalgo,
        description: "Developed a web app for the genetic algorithm model I built, after being inspired from someone's work, whom I couldn't find out. The aim is to simulate the evolution of a population of creatures.",
        tech: "Python, pygame",
        github: "https://github.com/reddheeraj/GeneticAlgo",
        live: "https://github.com/reddheeraj/GeneticAlgo"
    },
    {
        name: "Pathfinding Visualizer",
        image: pathvis,
        description: "A web app that visualizes different Pathfinding algorithms. I have implemented only Dijkstra's and DFS for now. This work is inspired from Clément Mihailescu's work. I have added some features like changin the start and end nodes, drawing walls, clearing the board, etc. I will be adding more algorithms in the future.",
        tech: "ReactJS, CSS",
        github: "https://github.com/reddheeraj/Pathfinding-Visualizer",
        live: "https://reddheeraj.github.io/Pathfinding-Visualizer/"
    },
    {
        name: "Sorting Visualizer",
        image: sortvis,
        description: "A web app that visualizes different sorting algorithms. I have implemented Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort. This project is inspired from Clément Mihailescu's work. I have added some features like changing the array size, changing the speed of visualization, structured the array like some kind of a sinusoidal wave, etc. I'm planning to rework on this project to make it more user-friendly.",
        tech: "React, CSS",
        github: "https://github.com/reddheeraj/SortingVisualizer",
        live: "https://reddheeraj.github.io/SortingVisualizer/"
    },
    {
        name: "Movie Recommender",
        image: movierec,
        description: "A web app that recommends movies based on your preferences. I have used the TMDB API to get the movie data and used the Content-Based Filtering technique to recommend movies. I used the pkl file of the model to then recommend movies based on user input preferences. ",
        tech: "Python, Scikit-Learn , Streamlit, TMDB API",
        github: "https://github.com/reddheeraj/Movie-Recommendations-Project",
        live: "https://movie-rec-01.herokuapp.com/"
    },
    {   
        name: "Sentiment Analysis App",
        image: sentiment,
        description: "A web app that analyzes the sentiment of your text. Very basic, but it was one of my first projects in Machine Learning.",
        tech: "Python, Flask, NLTK",
        github: "https://github.com/reddheeraj/sentiment-analysis-app",
        live: "https://ml-sa-app.herokuapp.com/"
    },
    {
        name: "Chat App",
        image: chatapp, 
        description: "A web app that allows you to chat with your friends. This project was a teacher to me in terms of how apps like Whatsapp work. (Not live anymore)",
        tech: "React, Nodejs, Socket.io, Bootstrap",
        github: "https://github.com/reddheeraj/Chat-App",
        live: "",
    },
    {
        name: "CountersRPG",
        image: suge,
        description: "A Discord Bot for the famous Discord game EpicRPG, made for a Client. It had multiple features, segregated between normal and paid users, and was scaled to handle more than 5000 users. I hosted this product by utilizing Digital Ocean's resources. (Live on Discord)",
        tech: "Nodejs, Discord.js, SQlite",
        github: "https://github.com/reddheeraj/countersrpg",
        live: "",
    },
]