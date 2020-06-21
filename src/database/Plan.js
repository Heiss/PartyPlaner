import $ from "jquery";
import { Plan } from "../models/Plan"

export async function loadPlan(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Wait too long!")), 1000);
        $.getJSON("https://jsonplaceholder.typicode.com/todos/" + id)
            .done(function (data) {
                resolve(Plan.load(data))
            })
            .fail(function () {
                reject(new Error("Sth gone wrong"))
            })
    })
}