import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  itemsCount!: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    setInterval(() => {
      this.itemsCount = this.cartService.getItems().length;
    }, 0);
  }
}
