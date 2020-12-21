import { Injectable } from '@angular/core';
import { IProduct } from '../products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProduct[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: IProduct): void {
    this.items.push(product)
  }

  getItems(): IProduct[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }

  getShippingPrices(): Observable<any> {
    return this.http.get('/assets/shipping.json');
  }
}
