import sortvis from '../assets/sortvis.png'
import movierec from '../assets/movierec.png'
import sentiment from '../assets/sentiment.png'
import chatapp from '../assets/chatapp.png'
import suge from '../assets/suge.png'
import pathvis from '../assets/pathvis.png'
import geneticalgo from '../assets/geneticalgo.png'
import lorebubbl from '../assets/lorebubbl.png'
import architecture from '../assets/architecture.png'
import statefulagent from '../assets/statefulagent.png'
import InstaPolitics from '../assets/InstaPolitics.png'
import DrQuick from '../assets/dr quick.png'
import phoenixDashboard from '../assets/phoenix_dashboard.png'
import pokemonRedImage from '../assets/pokemonred_image.jpg'
import thinktankPic from '../assets/thinktank_pic.png'
import deepgramMCP from '../assets/deepgram_mcp_icon.png'

export const projectList = [
    {
        name: "ThinkTank",
        image: thinktankPic,
        description: "Thinktank: A virtual Agentic Lab. A Framework for Generalizing Domain-Specific AI Agent Systems into Universal Collaborative Intelligence Platforms. Paper: https://arxiv.org/abs/2506.02931",
        tech: "Python, AI Agents, Multi-Agent Systems",
        github: "https://github.com/taugroup/ThinkTank",
        live: "https://arxiv.org/abs/2506.02931"
    },
    {
        name: "Phoenix",
        image: phoenixDashboard,
        description: "Phoenix is a Multi-Agent productivity system that turns your Gmail and Calendar into a gamified quest management system—inspired by Solo Leveling. Emails and Calendar events become potential quests, every completed task earns XP, and your self-improvement journey transforms into an addictive RPG experience.",
        tech: "Python, React, AWS Bedrock, FastAPI, Google APIs",
        github: "https://github.com/reddheeraj/Phoenix",
        live: "https://devpost.com/software/phoenix-0pmnxu"
    },
    {
        name: "Pokemon Red with RL",
        image: pokemonRedImage,
        description: "Train a reinforcement learning agent to accomplish a specific task in Pokemon Red: 'Catch one Pokemon in the grass, and maybe defeat the Gym Leader'. This project uses PyBoy (Python Game Boy emulator), Stable-Baselines3 with PPO algorithm, and a custom Gym Environment tailored for Pokemon Red gameplay.",
        tech: "Python, PyBoy, Stable-Baselines3, PPO, OpenAI Gym",
        github: "https://github.com/reddheeraj/PokemonRL"
    },
    {
        name: "LLM-Proxy-for-Finetuning",
        image: "",
        description: "A Python package for managing LLM API calls with conversation logging, dataset cleaning, fine-tuning, and local deployment capabilities. Use an LLM proxy library that collects your prompts and answers, creates a dataset and lets you finetune any model on a cleaned version of it.",
        tech: "Python, LLM APIs, Fine-tuning",
        github: "https://github.com/reddheeraj/LLM-Proxy-for-Finetuning"
    },
    {
        name: "Deepgram-MCP",
        image: deepgramMCP,
        description: "Deepgram AI MCP for AI agents. This gives them audio synthesis capabilities, STT (Speech-to-Text) and TTS (Text-to-Speech) functionalities all through an agent, tested with Agno.",
        tech: "Python, Deepgram API, MCP, Agno Framework",
        github: "https://github.com/reddheeraj/Deepgram-MCP"
    },
    {
        name: "Dr. Quick",
        image: DrQuick,
        description: "Dr. Quick is an AI-Powered Patient Intake System. Built for the Build4Good 2025 Hackathon, it streamlines patient intake process in hospitals by leveraging an AI-powered voice bot. It provides a conversational interface for patients arriving to describe their health concerns. The conversation is broken down, summarized, details extracted, and automatically added to the Doctor's Notion app.",
        tech: "Python, OpenCV, Deepgram, AWS S3, Notion API, Groq",
        github: "https://github.com/reddheeraj/Responder",
        live: "https://devpost.com/software/dr-quick"
    },
    {
        name: "Game of Thrones",
        image: InstaPolitics,
        description: "Study and simulate the power of influence via Social Media",
        tech: "React, Vite, Python, Langchain, Groq, Gemini, Ollama, ChromaDB",
        github: "https://github.com/reddheeraj/GameOfThrones",
        live: "https://devpost.com/software/instapolitics"
    },
    {
        name: "Stateful Agent",
        image: statefulagent,
        description: "An agent that learns as it interacts with you and the environment. It has a memory of its own which helps it to learn and adapt to the user's preferences.",
        tech: "Python, Ollama",
        github: "https://github.com/reddheeraj/Stateful_Agent"
    },
    {
        name: "NimbusNews",
        image: architecture,
        description: "Turn raw meteorological charts into broadcast-ready video reports with one click. Automate the weatherman and empower researchers. This project is a Winner at TAMU HACK 2025.",
        tech: "Python, AWS S3 & Bedrock, Llama 3.2 90B Vision, Cloudflare, Flask",
        github: "https://github.com/reddheeraj/WeatherMan"
    },
    {
        name: "LoreBubbl",
        image: lorebubbl,
        description: "LoreBubbl uses AI to support people with short attention spans by giving contextual awareness and knowledge while reading any book. You just have to highlight the text and ask for context. I built a RAG system inspired by Anthropic's contextual retrieval mechanism. We integrated it with an LLM (LLama 3 70b versatile) for accurate RAG solutions. Flutter was used for frontend, and flask was used to manage the APIs in the backend. This project is a Winner at TIDAL HACK 2024.",
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
        description: "A web app that visualizes different Pathfinding algorithms. I have implemented only Dijkstra's and DFS for now. This work is inspired from Clément Mihailescu's work. I have added some features like changing the start and end nodes, drawing walls, clearing the board, etc. I will be adding more algorithms in the future.",
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