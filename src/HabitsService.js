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
}
