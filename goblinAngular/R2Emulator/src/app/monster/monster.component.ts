import {Component, OnInit } from '@angular/core';
import {Goblin} from '../models/goblin';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.sass']
})
export class MonsterComponent implements OnInit {
  goblin = new Goblin();
  hpBlocks: Array<boolean>;

  makeGoblinAlive() {
    this.hpBlocks = [true, true, true, true, true];
    this.goblin.hp = 100;
  }

  constructor() {
    this.makeGoblinAlive();
  }

  getHpClassByIndex(index: number): string {
    return this.hpBlocks[index] ? 'full-hp' : 'empty-hp';
  }

  onGoblinClicked() {
    this.goblin.hp -= 20;

    for (let i = 81, j = 4; j >= 0; i -= 20, j--) {
      this.hpBlocks[j] = this.goblin.hp > i;
    }

    if (this.goblin.hp === 0) {
      setTimeout(() => {
        const result = confirm('Гоблин мёртв. Воскресить?');
        if (result === true) {
          this.makeGoblinAlive();
        }
      }, 100);
    }
  }

  ngOnInit() {
  }
}
