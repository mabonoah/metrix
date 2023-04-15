import { Component } from '@angular/core';
import { Subordinate } from '../../models';
import { SubordinatesController } from '../../controllers';
import { MetrixHttpResponse } from 'src/app/core/interfaces';
import { SnackBarService } from 'src/app/shared/services';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectSubordinates, updateSubordinates } from '../../../../store';

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  styleUrls: ['./subordinates.component.scss']
})
export class SubordinatesComponent {

  subordinates$: Observable<Subordinate[]>;
  modalSubordinates: Subordinate[] = [];

  constructor(
    private controller: SubordinatesController,
    private snackBarService: SnackBarService,
    private store: Store
  ) {
    this.subordinates$ = this.store.select(selectSubordinates);
  }

  ngOnInit(): void {
    this.getSubordinates();
    this.setModalSubordinates();
  }

  getSubordinates(): void {
    this.controller.getSubordinates()
      .subscribe((res: MetrixHttpResponse) => {
        if (res.code === 1) this.onSuccess(res.data);
        else this.onError(res.message);
      });
  }

  private onSuccess(data: Subordinate[]) {
    this.setDefaultSelections(data);
    this.setSubordinates(data);
  }

  /** Set first three items as selected subordinates. */
  private setDefaultSelections(data: Subordinate[]): void {
    if (data.length <= 2) return;
    for (let i = 0; i <= 2; i++)
      data[i].selected = true;
  }

  private setSubordinates(data: Subordinate[]) {
    this.store.dispatch(updateSubordinates({ subordinates: data }));
  }

  private setModalSubordinates() {
    this.subordinates$.subscribe((data: Subordinate[]) => {
      if (!data) return;
      const subordinatesClone = JSON.parse(JSON.stringify(data));
      this.modalSubordinates = subordinatesClone;
    });
  }

  private onError(message: string) {
    this.snackBarService.openSnackBar(message, 'Subordinates');
  }

  onSelectItems() {
    this.setSubordinates(this.modalSubordinates);
  }

}
