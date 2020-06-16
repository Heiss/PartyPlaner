/** @jsx createElement */
import { createElement } from "@bikeshaving/crank";

export async function Plan({ id = -1 }) {
    let data = {}

    if (id > 0) {
        data = await loadPlan(id)
    }

    return <div>Plan</div>
}

async function loadPlan({ id }) {
    return true
}