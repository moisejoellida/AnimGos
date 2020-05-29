import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { appSettings } from 'src/app/settings/app.setting';
import { Character } from 'src/app/models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private Http: HttpClient) { }

  findAllCharacters(){
    return this.Http.get(appSettings.APP_URL + "/characters/");
  }

  findAnimeById(idCharacter: number){
    return this.Http.get(appSettings.APP_URL + "/characters/" + idCharacter);
  }

  saveCharacter(character: Character){
    return this.Http.post(appSettings.APP_URL + "/characters", character);
  }

  sharCharacter(idCharacter: number, isShared: boolean){
    return this.Http.get(appSettings.APP_URL + "/character/share/" + idCharacter + "/" + isShared);
  }
}
