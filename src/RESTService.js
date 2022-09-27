import axios from "axios";
import {get, getAndSet, post} from "./REST";


const flaskService = process.env.REACT_APP_MODE === 'production' ? 'https://flask-app-habits.herokuapp.com/' : 'http://192.168.0.225:5000/';
const springService = process.env.REACT_APP_MODE === 'production' ? 'https://spring-app-habits.herokuapp.com/' : 'http://192.168.0.225:8080/';

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

    static setValueForHabitAndDate(habit, date, value, id) {
        const data = {"habit": habit, 'date': date, "value": value, "id": id}
        return axios.put(flaskService + 'habits/data', data).then((response) => {
            console.log(response)
            return response.data;
        });
    }

    static putDataFromSheetToPostgres(date) {
        return axios.put(flaskService + 'habits/sheet-to-postgres/' + date).then((response) => {
            console.log(response)
            return response.data;
        });
    }

    static putDataFromPostgresToSheet(date) {
        return axios.put(flaskService + 'habits/postgres-to-sheet/' + date).then((response) => {
            console.log(response)
            return response.data;
        });
    }

    static addReadingData(data) {
        data['type'] = 'Paper';
        return post(flaskService + 'read-data', data);
    }

    static getReadingData() {
        return get(flaskService + 'read-data')
    }

    static readDataFromSheetToMongo() {
        return axios.put(flaskService + 'books/sheet-to-mongo').then((response) => {
            console.log(response)
            return response.data;
        });
    }


    static moviesFromSheetToMongo() {
        return axios.put(flaskService + 'movies/sheet-to-mongo').then((response) => {
            console.log(response)
            return response.data;
        });
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

    static getMoviesData() {
        return get(flaskService + 'movies');
    }

    static deleteReadData(id) {
        return axios.delete(flaskService + 'read-data/' + id).then((response) => {
            console.log(response)
            return response.data;
        });
    }
}
