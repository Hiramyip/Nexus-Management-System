export class InfoOficiosEntity {
  id: string;

  constructor(data: { id: string }) {
    this.id = data.id;
  }

  toJSON() {
    return { id: this.id };
  }
}
