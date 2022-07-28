import axios from "axios";
import {get, getAndSet, post} from "./REST";


const flaskService = process.env.REACT_APP_MODE === 'production' ? 'https://flask-app-habits.herokuapp.com/' : 'http://localhost:5000/';
const springService = process.env.REACT_APP_MODE === 'production' ? 'https://spring-app-habits.herokuapp.com/' : 'http://localhost:8080/';

export default class RESTService {

    static getDataForDay(date) {
        return get(flaskService + 'habits/data/' + date);
    }

    static getDataForMultipleDays(startDate, endDate) {
        return get(flaskService + 'habits/habit-data/' + startDate + "/" + endDate);
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

    static putDataFromSheetToMongo(date) {
        return axios.put(flaskService + 'habits/sheet-to-mongo/' + date + '/false').then((response) => {
            console.log(response)
            return response.data;
        });
    }

    static putDataFromMongoToSheet(date) {
        return axios.put(flaskService + 'habits/mongo-to-sheet/' + date).then((response) => {
            console.log(response)
            return response.data;
        });
    }

    static postDataFromMongoToSheet(data) {
        return axios.post(flaskService + 'habits/mongo-to-sheet', data).then((response) => {
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
        return get(flaskService + 'read-data/replace/2022-04-01')
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
