import { Injectable } from '@angular/core';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  accountCategory: string;
  email: string;
  password: string;
  picture: string;
  profession: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  list: User[] = [
    { 
      id: 1, 
      firstName: "Mila", 
      lastName: "Kunis", 
      birthDate: "1999-06-30", 
      accountCategory: "Admin", 
      email: "mila@kunis.com", 
      password: "test", 
      picture: "https://bootdey.com/img/Content/avatar/avatar3.png", 
      profession: "Software Engineer"
    }, 
    { 
      id: 2, 
      firstName: "George", 
      lastName: "Clooney", 
      birthDate: "1999-06-30", 
      accountCategory: "Customer", 
      email: "marlon@brando.com", 
      password: "test", 
      picture: "https://bootdey.com/img/Content/avatar/avatar2.png", 
      profession: "Software Engineer"
    }, 
    { 
      id: 3, 
      firstName: "George", 
      lastName: "Clooney", 
      birthDate: "1999-06-30", 
      accountCategory: "Customer", 
      email: "marlon@brando.com", 
      password: "test", 
      picture: "https://bootdey.com/img/Content/avatar/avatar1.png", 
      profession: "Software Engineer"
    }, 
    { 
      id: 4, 
      firstName: "Ryan", 
      lastName: "Gossling", 
      birthDate: "1999-06-30", 
      accountCategory: "Golden", 
      email: "Ryan@nicholson.com", 
      password: "test", 
      picture: "https://bootdey.com/img/Content/avatar/avatar4.png", 
      profession: "Software Engineer"
    }, 
    { 
      id: 5, 
      firstName: "Robert", 
      lastName: "Downey", 
      birthDate: "1999-06-30", 
      accountCategory: "Blocked Account", 
      email: "robert@nicholson.com", 
      password: "test", 
      picture: "https://bootdey.com/img/Content/avatar/avatar5.png", 
      profession: "Software Engineer"
    }
  ];

  constructor() {}

  getAllUsers(): User[] {
    return this.list;
  }

  fetchNbInList(list: User[], attribute: keyof User, attributeVal: string): number {
    return list.filter((item: User) => item[attribute] === attributeVal).length;
  }
}
