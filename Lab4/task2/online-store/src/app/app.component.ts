import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  filteredProducts: Product[] = [];
  
  allProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.filteredProducts = this.allProducts.filter(p => p.categoryId === id);
  }

  handleDelete(id: number) {
    console.log('3. AppComponent: получен id для удаления =', id);
    
    this.allProducts = this.allProducts.filter(p => p.id !== id);
    
    if (this.selectedCategoryId) {
      this.filteredProducts = this.allProducts.filter(
        p => p.categoryId === this.selectedCategoryId
      );
    }
    
    console.log('AppComponent: после удаления осталось продуктов =', this.allProducts.length);
  }
}