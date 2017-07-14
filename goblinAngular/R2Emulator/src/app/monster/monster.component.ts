import { Component, OnInit } from '@angular/core';
import {Goblin} from '../models/goblin';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.sass']
})
export class MonsterComponent implements OnInit {
  goblin = new Goblin();
  hpBlocks: Array<boolean>;

  constructor() {
    this.hpBlocks = [true, true, true, true, true];
  }

  getHpClassByIndex(index: number): string {
    return this.hpBlocks[index] ? 'full-hp' : 'empty-hp';
  }

  onGoblinClicked() {
    this.goblin.hp -= 20;

    for (let i = 81, j = 4; j >= 0; i -= 20, j--) {
      this.hpBlocks[j] = this.goblin.hp > i;
    }
  }

  ngOnInit() {
  }
}
