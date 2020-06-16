/** @jsx createElement */
import { createElement } from "@bikeshaving/crank";
import { Plan } from "./Plan";

export async function* Content({ throttle = false, site = "index" }) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    for await ({ site } of this) {
        switch (site) {
            case "create":
                yield (<Plan />);
                break;
            case "load":
                let query = new URLSearchParams(window.location.search)
                if (query.has("id")) {
                    yield (<Plan id={query.get("id")} />);
                } else {
                    yield (<Plan />);
                }
                break;
            default:
                yield (<div>Welcome</div>);
                break;
        }
    }
}