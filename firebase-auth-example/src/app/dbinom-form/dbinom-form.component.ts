import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dbinom-form',
  templateUrl: './dbinom-form.component.html',
  styleUrls: ['./dbinom-form.component.scss']
})
export class DbinomFormComponent {
  dbinomParms = {
    successes: 5,
    size: 10,
    p: 0.5
  }
  probability: Observable<any>;
  constructor(private dataService: DataService) {
    this.probability = this.dataService.probability;
  }


  getProbability() {
    this.dataService.getProbability(this.dbinomParms);
  }

}
