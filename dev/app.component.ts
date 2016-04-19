import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RouterActiveDirective} from "./directive/router-active.directive";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AboutComponent} from "./about/about.component";
import {SettingsComponent} from "./settings/settings.component";

@Component({
    selector: 'app',
    template: `

        <header class="header is-fixed is-shadow is-dark">
            <div class="container">
                <div class="row xs-1 sm-2">
                    <div class="brand">Gedeonix UI</div>

                    <div class="col is-right">
                        <button class="btn is-warning is-outline is-md" [routerLink]="['Register']"><i class="fa fa-user"></i> Register</button>
                        <button class="btn is-warning is-outline is-md" [routerLink]="['Login']"><i class="fa fa-lock"></i> Login</button>
                        <button class="btn is-warning is-outline is-md" [routerLink]="['Home']"><i class="fa fa-power-off"></i> Logout</button>
                    </div>
                </div>
            </div>
        </header>

        <div class="fixed-space"></div>

        <nav class="is-orange">
            <div class="container">
                <ul class="nav">
                    <li router-active><a [routerLink]="['Home']">Home</a></li>
                    <li router-active><a [routerLink]="['About']">About</a></li>
                    <li class="is-space"></li>
                    <li router-active><a [routerLink]="['Settings']">Settings</a></li>
                </ul>
            </div>
        </nav>

        <main class="main container">
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
    {path: '/login', name: 'Login', component: LoginComponent},
    {path: '/register', name: 'Register', component: RegisterComponent},
    {path: '/about', name: 'About', component: AboutComponent},
    {path: '/settings', name: 'Settings', component: SettingsComponent}
])
export class AppComponent {

    title = 'Gedeonix Ng';

    constructor(private router:Router) {
    }

    public isRouteActive(route) {
        return this.router.isRouteActive(this.router.generate(route))
    }

}