import { Component } from '@angular/core';
import { PostapiService } from '../service/postapi.service';
import { Post } from '../model/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
    constructor(private servicePost: PostapiService) { }
    postList: Post[] = [];
    recargarLista(){
      this.servicePost.getLista().subscribe(
        entity => this.postList = entity,
        error => console.log('no se pudo conseguir la lista de compradores')
      );
    }
    ngOnInit(): void {
      this.recargarLista();
    }

}
