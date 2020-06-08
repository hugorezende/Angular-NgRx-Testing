import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { WizardState } from '../redux/store/wizard.state';
import { Wizard } from '../redux/wizard.model';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  wizardData: string;

  constructor(private store: Store<WizardState>) {
    //this.wizardData = store.select('wizard');
    store.select('wizard').subscribe(e=>{
      this.wizardData = e.address;
    })
  }

  ngOnInit(): void {
  }

}
