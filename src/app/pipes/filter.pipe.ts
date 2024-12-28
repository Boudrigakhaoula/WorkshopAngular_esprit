import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    standalone: true
})
export class FilterPipe implements PipeTransform {
    transform(categories: any[], searchTerm: string): any[] {
        if (!categories || !searchTerm) {
            return categories; // Si aucune valeur n'est saisie, retourner toutes les catégories
        }
        return categories.filter(category => 
            category.title.toLowerCase().includes(searchTerm.toLowerCase()) // Retourne les catégories contenant la chaîne
        );
    }
}