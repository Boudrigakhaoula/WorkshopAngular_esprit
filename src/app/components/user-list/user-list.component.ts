import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class ListUserComponent implements OnInit {
  users: User[] = []; // Propriété pour stocker la liste des utilisateurs

  constructor(private userService: UserService) {} // Injection du UserService

  ngOnInit(): void {
    this.users = this.userService.getAllUsers(); // Alimente la propriété avec la liste des utilisateurs
  }
  calculateUsers(attribute: string, attributeVal: string): void {
    const count = this.userService.fetchNbInList(this.users, attribute as keyof User, attributeVal);
    console.log(`Nombre d'utilisateurs avec ${attribute} égal à ${attributeVal}:`, count);
  }

}