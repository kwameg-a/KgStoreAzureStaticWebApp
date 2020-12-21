import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {

    const productIdFromRoute = this.route.snapshot.paramMap.get('productId');
    this.product = products.find((p: IProduct) => p.id === Number(productIdFromRoute));
  }

  addToCart(product: IProduct) {    
    if (window.confirm("Add item to the cart?")) {
      this.cartService.addToCart(product);
      console.log(this.cartService.getItems());
      this.router.navigate(['']);
    }  
  }
}
