import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {RouterActiveDirective} from "./directive/router-active.directive";
import {SettingsComponent} from "./settings/settings.component";

@Component({
    selector: 'app',
    template: `
        <header class="header">
            <div class="container">
                <h1 class="title">{{title}}</h1>
            </div>
        </header>

        <nav class="is-primary">
            <ul class="container tabs is-boxed">
                <li router-active><a [routerLink]="['Home']">Home</a></li>
                <li router-active><a [routerLink]="['About']">About</a></li>
                <li router-active><a [routerLink]="['Settings']">Settings</a></li>
            </ul>
        </nav>

        <main class="container">
            <router-outlet></router-outlet>
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
    directives: [ROUTER_DIRECTIVES, RouterActiveDirective]
})

@RouteConfig([
    {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/about', name: 'About', component: AboutComponent},
    {path: '/settings', name: 'Settings', component: SettingsComponent}
])
export class AppComponent {

    title = 'Gedeonix UI';

    constructor(private router: Router) {
    }

    public isRouteActive(route) {
        return this.router.isRouteActive(this.router.generate(route))
    }

}