import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

@Component({
    selector: 'app',
    template: `
        <header class="header">
            <div class="container">
                <h1 class="title">Gedeonix UI</h1>
            </div>
        </header>

        <nav class="is-primary">
            <ul class="container tabs is-boxed">
                <li [class.active]="isRouteActive(['./Home'])"><a [routerLink]="['Home']">Home</a></li>
                <li [class.active]="isRouteActive(['./About'])"><a [routerLink]="['About']">About</a></li>
            </ul>
        </nav>

        <router-outlet></router-outlet>

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

@RouteConfig([
    {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/about', name: 'About', component: AboutComponent}
])
export class AppComponent {

    constructor(private router: Router) {
    }

    public isRouteActive(route) {
        return this.router.isRouteActive(this.router.generate(route))
    }

}