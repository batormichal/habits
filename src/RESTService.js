import axios from "axios";
import {get, post} from "./REST";


export default class RESTService {

    static getDataForDay(date) {
        return get('http://localhost:5000/habit-data/' + date);
    }

    static getDataForMultipleDays(startDate, endDate) {
        return get('http://localhost:5000/habit-data/' + startDate + "/" + endDate);
    }

    static getStatisticsForAllHabits() {
        return get('http://localhost:5000/habit-stats')
    }

    static setValueForHabitAndDate(habit, date, value) {
        const data = {"habit": habit, 'date': date, "value": value}
        return axios.put('http://localhost:5000/habit-data', data).then((response) => {
            console.log(response)
            return response.data;
        });
    }

    static putDataFromSheetToMongo() {
        return axios.put('http://localhost:5000/habit-data/sheet-to-mongo/2021-12-01').then((response) => {
            console.log(response)
            return response.data;
        });
    }

    static addReadingData(data) {
        data['date'] = new Date();
        data['type'] = 'Paper';
        return post('http://localhost:5000/read-data', data);
    }

    static getReadingData() {
        return get('http://localhost:5000/read-data')
    }

    static resetBooksWithSheetData() {
        return get('http://localhost:5000/read-data/replace')
    }

    static getHabitsStreak() {
        return get('http://localhost:5000/habit-stats/streak')
    }

    static addExercise(values) {
        return axios.post('http://localhost:8080/exercise', values).then((response) => {
            console.log(response)
            return response.data;
        });
    }

    static getExercises() {
        return get('http://localhost:8080/exercise');
    }

    static getComicsPublication(id) {
        return get('http://localhost:8080/publication/' + id);
    }

    static addComicsReadingData(data) {
        return post('http://localhost:8080/reading-data', data);
    }

    static getAllComicsPublications() {
        return get('http://localhost:8080/publications')
    }
}
