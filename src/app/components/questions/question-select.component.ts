import { Component, HostListener, Input, input } from '@angular/core';

@Component({
  selector: 'app-select-question',
  template: `
    <div class="flex gap-4">
      <strong>{{ question() }}</strong>
      <div class="relative w-3/4" (click)="showOptions = !showOptions">
        <div
          class="flex justify-between w-full border-4 rounded-lg border-greenlight min-h-12 items-center cursor-pointer {{
            showOptions
              ? 'border-greenlight'
              : 'border-quinary hover:border-greenlight/50'
          }}"
        >
          <span class="ml-2 select-none">
            {{ answerSelected }}
          </span>
          <svg
            class="mr-2 w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13 7"
            fill="none"
          >
            <path
              class="fill-black"
              d="m.2 1.3 5.6 5.4.3.2a1.1 1.1 0 0 0 .8 0 1 1 0 0 0 .3-.2l5.6-5.4c.5-.5 0-1.3-.8-1.3H1C0 0-.4.8.1 1.3Z"
            />
          </svg>
        </div>

        <div
          class="border border-quinary bg-quinary rounded-lg absolute w-full z-20 {{
            showOptions ? '' : 'hidden'
          }}"
        >
          <ol class="flex flex-col rounded-lg *:py-2 *:pl-5">
            @for (answer of answers(); track $index) {
              <li
                class="hover:bg-greenlight/50 cursor-pointer select-none"
                (click)="answerSelected = answer"
              >
                {{ answer }}
              </li>
            }
          </ol>
        </div>
      </div>
    </div>
  `,
})
export class QuestionsSelectComponent {
  showOptions = false;

  readonly answers = input.required<string[]>();
  // TODO: Skipped for migration because:
  //  Your application code writes to the input. This prevents migration.
  @Input() answerSelected!: string;
  readonly question = input.required<string>();

  @HostListener('document:click', ['$event'])
  onDocumentClick({ target }: MouseEvent) {
    if (target instanceof HTMLElement && !target.closest('app-select-question'))
      this.showOptions = false;
  }
}
