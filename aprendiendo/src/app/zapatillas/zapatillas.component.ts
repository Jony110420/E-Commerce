import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html'
	
})
export class ZapatillasComponent {
	public titulo: string = "Componente de zapatillas";
	public zapatillas: Array<Zapatilla>;
	public marcas: String[];
	public color: string;
	public mi_marca: string;


	constructor(){
		this.color = 'blue';
		this.marcas = new Array();
		this.zapatillas = [
		new Zapatilla('Nike Air', 'Nike', 'Rojas',190, true),
		new Zapatilla('Reebook Classic', 'Reebook', 'Blanco',80, true),
		new Zapatilla('Reebook Spartan', 'Reebook', 'Negra',180, true),
		new Zapatilla('Nike Runner MD', 'Nike', 'Negras',60, true),
		new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris',180, false) 
		];
			
		
	}
	ngOnInit(){
		//this.zapatillas = this._zapatillaService.getZapatillas();
		//alert(this._zapatillaService.getTexto());
		console.log(this.zapatillas);
		this.getMarcas();
	}
getMarcas(){
		this.zapatillas.forEach((zapatilla, index) =>{
			
			if(this.marcas.indexOf(zapatilla.marca) < 0){
				this.marcas.push(zapatilla.marca);
			}
			

		});

		console.log(this.marcas);
	}


getMarca(){
		alert(this.mi_marca);
	}
	addMarca(){
		this.marcas.push(this.mi_marca);
	}
	borrarMarca(index){
		 //delete this.marcas[index];
		this.marcas.splice(index, 1);
	}
onBlur(){
		console.log("Has salido del input");
	}
	mostrarPalabra(){
		alert(this.mi_marca);
	}
	}

	