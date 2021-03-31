import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Paneer Tikka","Marinated Paneer", "https://myfoodstory.com/wp-content/uploads/2017/02/Oven-Baked-Tandoori-Paneer-Tikka-2.jpg"),
    new Recipe("Gobi Machurian","Cauliflower on sauces", "https://www.indianhealthyrecipes.com/wp-content/uploads/2017/03/gobi-manchurian-1.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
