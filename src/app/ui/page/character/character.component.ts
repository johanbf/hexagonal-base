import {Component, inject, OnInit, signal} from '@angular/core';
import {finalize} from "rxjs";
import {CharacterUseCaseService} from "../../../models/character/application/useCase/character-use-case.service";
import {IDomainResponseCharacter} from "../../../models/character/domain/character.model";

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export default class CharacterComponent implements OnInit {
  private _characterUseCaseService = inject(CharacterUseCaseService)

  public character = signal<IDomainResponseCharacter | null>(null)
  public showeSpiner = signal<boolean>(true)

  ngOnInit(): void {
    this._loadCharacter();
  }

  private _loadCharacter(): void {
    console.log('response .....')
    this._characterUseCaseService.getCharacters()
      .pipe(finalize(() => (this.showeSpiner.set(false))))
      .subscribe({
        next: (response) => {
          console.log(response)
          this.character.update(value => response)
        }
      })
  }
}
