import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrl: './criar-produto.component.css'
})
export class CriarProdutoComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.productForm = this.fb.group({
      nome : ['',Validators.required],
      categoria: ['',Validators.required],
      endereco :['',Validators.required],
      preco : ['',Validators.required]
    });''
  }

  addProduct(){
    console.log(this.productForm);
  }
}
