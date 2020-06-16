/** @jsx createElement */
import { createElement } from "@bikeshaving/crank";

export function Footer() {
    return <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Footer Content</h5>
                    <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Links</h5>
                    <ul>
                        <li><a class="grey-text text-lighten-3" href="https://github.com/Heiss/PartyPlaner">Github</a></li>
                        <li><a class="grey-text text-lighten-3" href="https://netzmuffel.de">Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                © 2020 by Heiss
            </div>
        </div>
    </footer>;
}