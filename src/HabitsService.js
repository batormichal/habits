import axios from "axios";


export default class HabitsService {
    static getAllHabits() {
        return axios.get('http://localhost:5000/habit-names').then((response) => {
            console.log(response)
            return response.data;
        });
    }

    static getDataForDay(date) {
        return axios.get('http://localhost:5000/habit-data/' + date).then((response) => {
            console.log(response)
            return response.data;
        });
    }

    static getDataForMultipleDays(startDate, endDate) {
        return axios.get('http://localhost:5000/habit-data/' + startDate + "/" + endDate).then((response) => {
            console.log(response)
            return response.data;
        });
    }

    static getStatisticsForAllHabits(startDate, endDate) {
        return axios.get('http://localhost:5000/habit-stats/' + startDate + "/" + endDate).then((response) => {
            console.log(response)
            return response.data;
        });
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
        console.log(data);
        return axios.post('http://localhost:5000/read-data', data).then((response) => {
            console.log(response)
            return response.data;
        });
    }

    static getReadingData() {
        return axios.get('http://localhost:5000/read-data').then((response) => {
            console.log(response)
            return response.data;
        });
    }
}
