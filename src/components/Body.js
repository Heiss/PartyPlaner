/** @jsx createElement */
import { createElement } from "@bikeshaving/crank";
import { Plan } from "./pages/Plan";
import { Index } from "./pages/Index";
import $ from "jquery";

export async function* Content({ throttle = false, site = "index" }) {
    let query = new URLSearchParams(window.location.search);
    var site = "index";
    if (query.has("site")) {
        site = query.get("site");
    }


    for await ({ site } of this) {
        $("li").removeClass("active");
        switch (site) {
            case "create":
            case "load":
                yield (query.has("id") ? (<Plan id={query.get("id")} />) : (<Plan />));
                break;
            default:
                yield (<Index />);
                site = "index";
                break;
        }
        $("#" + site).addClass("active");
    }
}

$("document").ready(function () {
    let query = new URLSearchParams(window.location.search);
    var site = "index";
    if (query.has("site")) {
        site = query.get("site");
    }

    $("#" + site).addClass("active");
})