export class Subordinate {

  ID: number;
  name: string;
  responsibleName: string;
  responsibleImage: string;
  subordinates: number;
  selected: boolean;

  constructor() {
    this.selected = false;
  }

}
