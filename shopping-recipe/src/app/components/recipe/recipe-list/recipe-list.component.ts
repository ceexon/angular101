import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeBookListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('My recipe', 'My recipe description', 'https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694_960_720.jpg'),
    new Recipe('My recipe', 'My recipe description', 'https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694_960_720.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}