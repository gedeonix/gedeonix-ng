import {Component} from 'angular2/core';

@Component({
    template: `
    <div class="col is-center">

        <form class="section form-horizontal" role="form" action="/login" method="POST">

            <div class="form-group">
                <div class="col-sm-12">
                    <a class="btn is-md is-block facebook" href="/facebook"><i class="fa fa-facebook-square"></i> Facebook</a>
                </div>
                <div class="col-sm-12">
                    <a class="btn is-md is-block twitter" href="/twitter"><i class="fa fa-twitter-square"></i> Twitter</a>
                </div>
                <div class="col-sm-12">
                    <a class="btn is-md is-block google-plus" href="/google"><i class="fa fa-google-plus-square"></i> Google Plus</a>
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-12">
                    <hr class="is-space">
                </div>

            </div>

            <div class="form-group">
                <div class="col-sm-12">
                    <input type="email" name="email" class="form-control" placeholder="Email">
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-12">
                    <input type="password" class="form-control" name="password" placeholder="Password">
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-12">
                    <input type="password" class="form-control" name="confirm" placeholder="Confirm password">
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-12">
                    <button type="submit" class="btn is-primary is-block is-md">Register</button>
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-12">
                    I already have an account: <a href="login.html">Login</a>
                </div>
            </div>

        </form>

    </div>
    `
})
export class RegisterComponent {

}