import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WizardState } from '../redux/store/wizard.state';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  test: string;
  constructor(private store: Store<WizardState>) {
    store.select('wizard').subscribe(e=>{
      this.test = e.address;
    })
  }

  ngOnInit(): void {
  }

}
