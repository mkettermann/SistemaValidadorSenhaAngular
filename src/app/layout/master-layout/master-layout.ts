import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlDarkLight } from "../../shared/control-dark-light/control-dark-light";
import { ControlHue } from "../../shared/control-hue/control-hue";

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.html',
  styleUrl: './master-layout.scss',
  imports: [RouterOutlet, ControlDarkLight, ControlHue],
})
export class MasterLayout {

}
