import { Component, OnInit } from '@angular/core';
import {ProductService,Product} from '../shared/product.service'
import {FormControl} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
// 正确引入方法


@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	private products: Product[] ;

	private keyword: string;

	private titleFilter:FormControl = new FormControl();

	private imgUrl = 'http://placehold.it/320x150';
	constructor(private productService:ProductService) { 

		this.titleFilter.valueChanges
			.pipe(debounceTime(500))
			// 坑，必须加管道
			.subscribe(
				value => this.keyword = value
				);
	}

	ngOnInit() {
		this.products = this.productService.getProducts();
	}

}

