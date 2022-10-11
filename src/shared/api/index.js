import dayjs from "dayjs";
import {LEADERBOARD_LS_KEY} from "/src/shared/constants";

const sendGameResult = async (gameResult) => {
    console.log(`sendGameResult ${dayjs().format("DD.MM.YYYY hh:mm:ss")}`);
    const leaderboard = JSON.parse(window.localStorage.getItem(LEADERBOARD_LS_KEY));
    const updatedBoard = updateLeaderboard(leaderboard, gameResult);
    window.localStorage.setItem(LEADERBOARD_LS_KEY, JSON.stringify(updatedBoard));
    return "success";
};

const updateLeaderboard = (leaderboard, gameResult) => {
    if (!leaderboard)
        return [gameResult];

    const existedRec = leaderboard
        .find(x => x.name === gameResult.name && x.mode === gameResult.mode);

    if (existedRec)
        existedRec.score = Math.max(existedRec.score, gameResult.score);
    else
        leaderboard.push(gameResult);
    return leaderboard;
};


export const Api = {
    sendGameResult
};