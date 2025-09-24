import { Router } from "express";

import path from "node:path";
import { Film } from "../types";
import { serialize, parse } from "../utils/json";

const router = Router();

const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms: Film[] = [
    {
        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        duration: 148,
        budget: 160000000,
        description: undefined,
        imageUrl: undefined,
    },
    {
        id: 2,
        title: "The Matrix",
        director: "The Wachowskis", 
        duration: 136,
    },
    {
        id: 3,
        title: "Interstellar",
        director: "Christopher Nolan",
        duration: 169,         
    }
];


