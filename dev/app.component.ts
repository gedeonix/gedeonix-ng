import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
    selector: 'app',
    template: `
        <header class="header">
            <div class="container">
                <h1 class="title">Gedeonix UI</h1>
            </div>
        </header>

        <main class="container">
            <h1>Init project...</h1>
        </main>

        <footer class="footer">
            <div class="container">
                <p>Copyright (c) 2016 <a href="gedeonix.pl">http://www.gedeonix.pl</a></p>
                <p>
                    <a href="https://github.com/gedeonix/gedeonix-ui"><i class="fa fa-github-square fa-2x"></i></a>
                    <a href="https://twitter.com/gedeonix"><i class="fa fa-twitter-square fa-2x"></i></a>
                </p>
            </div>
        </footer>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {

}