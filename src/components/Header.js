/** @jsx createElement */
import { createElement, Fragment } from "@bikeshaving/crank";
import { render } from "./App";

export function Header() {
  return <header><NavBar /></header>;
}

function Link({ name, text }) {
  const handleClick = () => {
    let refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + '?site=' + name;
    window.history.pushState({ path: refresh }, '', refresh);

    var ev = new CustomEvent("refreshContent", { bubbles: true, detail: { site: name } })
    this.dispatchEvent(ev)
  }

  this.addEventListener("click", (ev) => {
    if (ev.target.tagName === "A" && ev.target.className === "navlink") {
      handleClick(ev.target.dataset.name)
      this.refresh();
    }
  });

  return <a class="navlink" data-name={name} >{text}</a>
}

function NavBar() {
  return <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">PartyPlaner</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li id="index"><Link name="index" text="Home" /></li>
        <li id="create"><Link name="create" text="New plan" /></li>
      </ul>
    </div>
  </nav >;
}