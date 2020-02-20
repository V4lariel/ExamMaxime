export class Computer {
  id: number;
  model: string;
  marque: string;
  type: string;
  category: string;
  pxAchat: number;
  pxVente: number;
  dateEntree: Date;
  constructor(id = null, model = null, marque = null, type = null, category = null, pxAchat = null, pxVente = null, dateEntree = null) {
    this.id = id;
    this.model = model;
    this.marque = marque;
    this.type = type;
    this.category = category;
    this.pxAchat = pxAchat;
    this.pxVente = pxVente;
    this.dateEntree = dateEntree;
  }
}
