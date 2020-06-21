/** @jsx createElement */
import { createElement } from "@bikeshaving/crank";
import { loadPlan } from "../../database/Plan"

export async function Plan({ id = -1 }) {
    let plan = {}

    if (id > 0) {
        try {
            plan = await loadPlan(id)
        } finally { }
    }

    console.log(plan.json)

    return <div>Plan {plan.id}</div>
}
