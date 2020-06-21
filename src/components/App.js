/** @jsx createElement */
import { createElement, Fragment } from "@bikeshaving/crank";
import { renderer } from "@bikeshaving/crank/dom";
import { runtime, async } from "regenerator-runtime";
import { Header } from "./Header";
import { Content } from "./Body";
import { Footer } from "./Footer";

async function LoadingIndicator() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Show loading ind")
    return <div>Loading...</div>;
}

async function* ContentLoader({ site }) {
    for await ({ site } of this) {
        yield (< LoadingIndicator />);
        yield (<Content site={site} />);
    }
}

function* App({ site = "index" }) {
    this.addEventListener("refreshContent", (ev) => {
        site = ev.detail.site
        this.refresh()
    });

    while (true) {
        yield (< Fragment ><Header /><ContentLoader throttle="true" site={site} /><Footer /></Fragment>)
    }
}

export function render() {
    let site = "index"
    let query = new URLSearchParams(window.location.search)
    if (query.has("site")) {
        site = query.get("site")
    }

    renderer.render(<App site={site} />, document.body);
}

function bootstrap() {
    render()
}

bootstrap()
M.AutoInit();
