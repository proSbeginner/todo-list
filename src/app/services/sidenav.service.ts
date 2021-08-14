import { Injectable } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidenav: MatSidenav | undefined;

  set(sidenav: MatSidenav | undefined) {
    this.sidenav = sidenav
  }

  open() {
    this.sidenav?.open()
  }

  close() {
    this.sidenav?.close()
  }
}