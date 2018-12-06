import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private products: Product[] = [
	new Product(1,"第一个商品",1.99,1.5,"练习创建的商品1",["电子产品","硬件设备"]),
	new Product(2,"第二个商品",2.99,2.5,"练习创建的商品2",["图书","硬件设备"]),
	new Product(3,"第三个商品",3.99,3.5,"练习创建的商品3",["硬件设备"]),
	new Product(4,"第四个商品",4.99,4.5,"练习创建的商品4",["电子","硬件设备"]),
	new Product(5,"第五个商品",5.99,3.5,"练习创建的商品5",["产品","硬件设备"]),
	new Product(6,"第六个商品",6.99,2.5,"练习创建的商品6",["产品"])
	]

	private comments:Comment[]=[
	new Comment(1,1,"2017-1-1","一号",3,"不错"),
	new Comment(2,1,"2017-1-2","二号",3,"不错2"),
	new Comment(3,1,"2017-1-3","三号",3,"不错3"),
	new Comment(4,2,"2017-1-4","四号",3,"不错4"),
	]
	constructor() { }

	getProducts():Product[]{
		return this.products;
	}

	getProduct(id:number):Product{
		return this.products.find((product)=>product.id==id);
	}

	getCommentsForProductId(id : number):Comment[]{
		return this.comments.filter((comment:Comment)=>comment.productId==id);
	}
}

export class Comment{

	constructor(public id :number,
						public productId:number,
						public timestamp:string,
						public user:string,
						public rating:number,
						public content:string){

	}
}

export class Product{
	constructor(
		public id:number,
		public title:string,
		public price:number,
		public rating:number,
		public desc:string,
		public categories:Array<string>
		){

	}
}
