import { Component } from '@angular/core';
import { Subordinate } from '../../models';
import { SubordinatesController } from '../../controllers';
import { MetrixHttpResponse } from 'src/app/core/interfaces';
import { SnackBarService } from 'src/app/shared/services';

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  styleUrls: ['./subordinates.component.scss']
})
export class SubordinatesComponent {

  dataSource: Subordinate[] = [];
  modalDataSource: Subordinate[] = [];

  constructor(
    private controller: SubordinatesController,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.getSubordinates();
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
    this.setDataSource(data);
  }

  /** Set first three items as selected subordinates. */
  private setDefaultSelections(data: Subordinate[]): void {
    if (data.length <= 2) return;
    for (let i = 0; i <= 2; i++)
      data[i].selected = true;
  }

  private setDataSource(data: Subordinate[]) {
    const cloneData = JSON.parse(JSON.stringify(data));
    this.dataSource = cloneData;
  }

  private onError(message: string) {
    this.snackBarService.openSnackBar(message, 'Subordinates');
  }

  onOpenModal() {
    this.setModalDataSource();
  }

  private setModalDataSource() {
    const cloneData = JSON.parse(JSON.stringify(this.dataSource));
    this.modalDataSource = cloneData;
  }

  onSelectItems() {
    this.setDataSource(this.modalDataSource);
  }

}
