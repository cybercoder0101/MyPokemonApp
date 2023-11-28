import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  message: string = "Vous etes deconnectes";
  name: string;
  password: string;
  auth: AuthService;
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit() {
    this.auth = this.authService;
  }
  setMessage() {
    if (this.authService.isLoggedIn) {
      this.message = "Connectez";
    } else {
      this.message = "Reessayez";
    }
  }

  login() {
    this.message = "Tentative de connexion en cours";
    this.authService
      .login(this.name, this.password)
      .subscribe((IsLoggedIn: boolean) => {
        this.setMessage();
        if (IsLoggedIn) {
          this.route.navigate(["/pokemons"]);
        } else {
          this.name = "";
          this.password = "";
          this.route.navigate(["/login"]);
        }
      });
  }
  logout() {
    this.auth.logout();
    this.message = "vous etes deconnectez";
  }
}
