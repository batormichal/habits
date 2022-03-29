import axios from "axios";
import {get, getAndSet, post} from "./REST";


const flaskService = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/' : 'https://flask-app-habits.herokuapp.com/';
// const flaskService = 'https://flask-app-habits.herokuapp.com/';
const springService = 'http://localhost:8080/';

export default class RESTService {

    static getDataForDay(date) {
        return get(flaskService + 'habit-data/' + date);
    }

    static getDataForMultipleDays(startDate, endDate) {
        return get(flaskService + 'habit-data/' + startDate + "/" + endDate);
    }

    static getStatisticsForAllHabits() {
        return get(flaskService + 'habit-stats')
    }

    static setValueForHabitAndDate(habit, date, value) {
        const data = {"habit": habit, 'date': date, "value": value}
        return axios.put(flaskService + 'habit-data', data).then((response) => {
            console.log(response)
            return response.data;
        });
    }

    static putDataFromSheetToMongo() {
        return axios.put(flaskService + 'old/habit-data/sheet-to-mongo/2022-03-01/false').then((response) => {
            console.log(response)
            return response.data;
        });
    }

    static addReadingData(data) {
        data['date'] = new Date();
        data['type'] = 'Paper';
        return post(flaskService + 'read-data', data);
    }

    static getReadingData() {
        return get(flaskService + 'read-data')
    }

    static resetBooksWithSheetData() {
        return get(flaskService + 'read-data/replace')
    }

    static getHabitsStreak() {
        return get(flaskService + 'habit-stats/streak')
    }

    static resetComicsBooksWithSheetData() {
        return get(flaskService + 'read-data/comics-books/replace')
    }

    static getComicsPublication(id) {
        return get(springService + 'publication/' + id);
    }

    static addComicsReadingData(data) {
        return post(springService + 'reading-data', data);
    }

    static getAllComicsPublications(fun) {
        getAndSet(springService + 'publications', fun);
    }

    static getStoryById(id) {
        return get(springService + 'story/' + id);
    }

    static getAllReadingData() {
        return get(springService + 'reading-data/');
    }

    static getComicsBooksReadingData() {
        return get(springService + 'reading-data/comics-books');
    }
}
