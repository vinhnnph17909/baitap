import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      id: 1,
      name: 'iphone',
      price: 1200000,
      desc: 'good'
    }
  ];

  remove(id :number) {
    this.products = this.products.filter(products => products.id !== id);
  }


  newProduct = {
    id: 0,
    name: '',
    price: 0,
    desc: ''
  };

  onSubmit(product :any) {
    console.log(product);

    if (this.newProduct.id) {

      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === this.newProduct.id) {
          this.products[i] = this.newProduct;
        }
      }
    }
    this.newProduct = {
      ...this.newProduct,
      id: this.products.length + 1,
    };

    this.products.push(this.newProduct);

    this.newProduct = {
      id: 0,
      name: '',
      price: 0,
      desc: ''
    }

  }

  onEdit(product :any) {
    this.newProduct = product;
  }
}