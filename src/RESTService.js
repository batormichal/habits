import axios from "axios";
import {get, getAndSet, post} from "./REST";
import {flaskService, springService, getFileService} from './local_properties.js'

export default class RESTService {

    static getDataForDay(date) {
        return get(flaskService + 'habits/data/' + date);
    }

    static getDataForMultipleDays(startDate, endDate) {
        return get(flaskService + 'habits/many-days/' + startDate + "/" + endDate);
    }

    static getActiveHabits() {
        return get(flaskService + 'habits/statistics/streaks')
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

    static addComicsByUrl(url) {
        return post(springService + 'save/', {'url': url});
    }

    static getAllReadingData() {
        return get(springService + 'reading-data/');
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

    static getCover(cover) {
        return getFileService + cover;
    }

    static getReadingPeriodData() {
        return get(flaskService + 'period-data');
    }
}
