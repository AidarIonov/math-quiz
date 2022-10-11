import {LEADERBOARD_LS_KEY} from "/src/shared/constants";


const padWithZero = (num, targetLength) => {
    return String(num).padStart(targetLength, "0");
};

const random = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};


const getLeaderboard = () => {
    return JSON.parse(window.localStorage.getItem(LEADERBOARD_LS_KEY));
};


export const Utils = {
    String: {
        padWithZero
    },
    Number: {
        random
    },
    getLeaderboard
};