import { Observable } from 'rxjs';
import { Construction } from 'src/app/model/construction';
import { ConstructionService } from 'src/app/service/construction.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-3';

  list$: Observable<Construction[]> = this.cs.getAll();

  constructor(
    private cs: ConstructionService
  ) {
  }

  onDelete( construction: Construction ) {
    this.cs.delete( construction.id ).subscribe({
      next: () => {
        this.list$ = this.cs.getAll();
      }
    })
  }

}
