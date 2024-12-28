import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByCategoryId',
    standalone: true
})
export class FilterByCategoryIdPipe implements PipeTransform {
    transform(items: any[], categoryId: number): any[] {
        if (!items || categoryId === undefined) {
            return items;
        }
        return items.filter(item => item.categoryId === categoryId);
    }
} 