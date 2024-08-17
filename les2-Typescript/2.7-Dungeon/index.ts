import {
    Config,
    createDungeon,
    createObjects,
    Dungeon,
    GameObject,
    GameTile,
  } from './dungeonGenerator';
  
  interface IDungeon {
    print(): void;
    getTileAt(x: number, y: number): GameTile | undefined;
    getObjectAt(x: number, y: number): GameObject | undefined;
    objects: GameObject[];
  }
  
  class GameDungeon implements IDungeon {
    private _dungeon: Dungeon;
    private _gameObjects: GameObject[];
  
    constructor(config: Config, seed: string='') {
      if (seed != '') {
        this._dungeon = createDungeon(seed, config);
        this._gameObjects = createObjects(this._dungeon, seed);
      } else {
        let s:string = this.generateRandomString(24)
        this._dungeon = createDungeon(s, config);
        this._gameObjects = createObjects(this._dungeon, s);
      }
    }

    private generateRandomString(length: number): string {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      const charactersLength = characters.length;
  
      for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  
      return result;
  }
  
  
    print(): void {
      for (let y = 0; y < this._dungeon.grid.length; y++) {
        let line = '';
  
        for (let x = 0; x < this._dungeon.grid[y].length; x++) {
          let tile = this.getTileAt(x, y);
          let object = this.getObjectAt(x, y);
  
          if (object) {
            line += '!';
          } else {
            if (tile?.type == 'space') {
              line += '█';
            } else if (tile?.type == 'floor') {
              line += '*';
            } else if (tile?.type == 'door') {
              line += '#';
            }
          }
        }
  
        console.log(line);
      }
    }
    getTileAt(x: number, y: number): GameTile | undefined {
      return this._dungeon.grid[y][x];
    }
    getObjectAt(x: number, y: number): GameObject | undefined {
      return this._gameObjects.find(
        (obj) => obj.position.x == x && obj.position.y == y
      );
    }
    get objects(): GameObject[] {
      return this._gameObjects;
    }
  }
  new GameDungeon({
    gridHeight: 25,
    gridWidth: 25,
    maxRooms: 8,
    roomSizeRange: [1, 6],
  },'').print();
