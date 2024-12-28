export class ShortList {
    id: number;
    idUser: number;
    idElement: number;
    typeElement: string;
  
    constructor(id: number, idUser: number, idElement: number, typeElement: string) {
      this.id = id;
      this.idUser = idUser;
      this.idElement = idElement;
      this.typeElement = typeElement;
    }
  }