import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserLayout } from '../layouts/user-layout.component';
import { CustomButtonComponent } from '../components/custom-button.component';

@Component({
  selector: 'app-video-course',
  standalone: true,
  imports: [UserLayout, CustomButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <app-user-layout>
      <div class="mx-8 mt-8 flex gap-x-4 mb-10">
        <section class="w-3/5">
          <lite-youtube
            class="rounded-lg"
            id="video"
            videoid="STRX58eJDag"
          ></lite-youtube>
          <h2 class="my-4 text-xl font-bold">
            Bienvenida del Curso - Inteligencia Artificial
          </h2>
          <div class="flex gap-x-4 items-center">
            <img class="rounded-full size-12" src="/profile.webp" alt="" />
            <svg
              class="size-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 15 15"
            >
              <path
                fill="#000"
                d="M10.3 1a5 5 0 0 0-2.8-1c-1 0-2 .4-2.8 1-.7.8-1 1.8-1 2.8.2 2 1.9 3.7 3.8 3.7s3.6-1.7 3.7-3.7c.1-1-.2-2-1-2.7Zm3.5 14H1.2a1.2 1.2 0 0 1-1-.4c-.2-.2-.2-.6-.2-1a5.7 5.7 0 0 1 2.8-3.8 9 9 0 0 1 4.7-1.2 9 9 0 0 1 4.7 1.2 6 6 0 0 1 2.8 3.9 1.1 1.1 0 0 1-.7 1.2l-.5.1Z"
              />
            </svg>
            <span class="text-sm font-bold">Vanessa Guevara</span>
          </div>
          <div>
            <h3 class="mt-4 font-bold text-primary">Información del Curso</h3>
            <hr class="mb-4 border-primary border-2 w-1/4" />
            <div class="bg-quinary p-12 rounded-lg flex flex-col gap-y-8">
              <div class="flex items-center">
                <img
                  class="size-48"
                  src="https://cdn-icons-png.freepik.com/512/7364/7364330.png"
                  alt=""
                />
                <div class="flex flex-col gap-y-4">
                  <h4 class="text-xl font-extrabold">
                    ¿QUÉ ES LA <br /><span class="text-primary text-3xl"
                      >INTELIGENCIA ARTIFICIAL</span
                    >?
                  </h4>
                  <div class="bg-secondary/80 p-4 ml-8 rounded-lg text-sm">
                    Es la capacidad de una máquina para imitar eI comportamiento
                    humano a través de algoritmos sacando provecho de los datos
                    y el poder computacional.
                  </div>
                  <div class="bg-primary/80 p-4 rounded-lg text-sm">
                    IA no es igual que Machine Learning. La IA es la capacidad
                    de las computadoras de mostrar un comportamiento
                    inteligente, ML es la técnica para crear y mejorar dicho
                    comportamiento,
                  </div>
                </div>
              </div>
              <p class="text-sm">
                La inteligencia artificial (IA) es un campo de la informática
                que busca crear sistemas capaces de realizar tareas que
                normalmente requieren inteligencia humana, como el aprendizaje,
                el razonamiento y la resolución de problemas. Utilizando
                algoritmos y modelos matemáticos, la IA permite a las máquinas
                analizar datos, reconocer patrones y tomar decisiones.
              </p>
            </div>
          </div>
        </section>
        <aside class="w-2/5 flex flex-col gap-y-4">
          <div class="flex flex-col rounded-lg shadow-sm shadow-black/50">
            <header
              class="bg-orangelight flex gap-x-4 py-2 px-4 items-center rounded-t-lg"
            >
              <svg
                class="size-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 21"
              >
                <path
                  fill="#000"
                  d="m0 5 10 4h2l10-4V4L12 0h-2L0 4v1Zm22 5-2-1h-1a5524 5524 0 0 0-8 3h-1L3 9H2l-2 1v1l10 4h2l10-4v-1Zm0 6-2-1h-1l-7 3h-2l-7-3H2l-2 1v1l10 4h2l10-4v-1Z"
                />
              </svg>
              <h2 class="font-bold">Contenidos</h2>
            </header>
            <div
              class="p-8 flex flex-col text-white gap-y-2 *:bg-zinc-600 *:p-4 *:select-none"
            >
              <details open>
                <summary class="flex items-center gap-x-2">
                  <svg
                    class="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      class="fill-greenlight"
                      d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0ZM7.4 13.5 3.9 9.6l1-.9 2.4 2.7 5.8-6.8 1 .9-6.7 8Z"
                    /></svg
                  ><span>1. Fundamentos</span>
                </summary>
                <ul class="flex flex-col gap-y-2 mt-4 ml-4">
                  <li class="flex justify-between">
                    <div class="flex items-center gap-x-2">
                      <svg
                        class="size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 15 15"
                      >
                        <path
                          class="fill-greenlight"
                          d="m7 9.9 3.8-2 .1-.2.1-.2v-.2l-.2-.1L7 5h-.3a1 1 0 0 0-.3 0l-.3.2-.1.2v4.2l.1.2.3.2a1 1 0 0 0 .7-.1Z"
                        />
                        <path
                          class="stroke-greenlight"
                          stroke-miterlimit="10"
                          d="M14 7.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"
                        />
                      </svg>
                      <a
                        class="text-greenlight text-sm"
                        href="/mis-cursos/virtual/video"
                        >1.1 Bienvenida del curso</a
                      >
                    </div>
                    <strong class="text-greenlight text-xs font-light">00:10 min</strong>
                  </li>
                  <li class="flex justify-between">
                    <div class="flex items-center gap-x-2">
                      <svg
                        class="size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 15 15"
                      >
                        <path
                          class="fill-white"
                          d="m7 9.9 3.8-2 .1-.2.1-.2v-.2l-.2-.1L7 5h-.3a1 1 0 0 0-.3 0l-.3.2-.1.2v4.2l.1.2.3.2a1 1 0 0 0 .7-.1Z"
                        />
                        <path
                          class="stroke-white"
                          stroke-miterlimit="10"
                          d="M14 7.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"
                        />
                      </svg>
                      <a class="text-sm" href="/mis-cursos/virtual/video"
                        >1.2 Historia y evolución de la IA</a
                      >
                    </div>
                    <strong class="text-white text-xs font-light">00:10 min</strong>
                  </li>
                  <li class="flex justify-between">
                    <div class="flex items-center gap-x-2">
                      <svg
                        class="size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 15 15"
                      >
                        <path
                          class="fill-white"
                          d="m7 9.9 3.8-2 .1-.2.1-.2v-.2l-.2-.1L7 5h-.3a1 1 0 0 0-.3 0l-.3.2-.1.2v4.2l.1.2.3.2a1 1 0 0 0 .7-.1Z"
                        />
                        <path
                          class="stroke-white"
                          stroke-miterlimit="10"
                          d="M14 7.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"
                        />
                      </svg>
                      <a class="text-sm" href="/mis-cursos/virtual/video"
                        >1.3 Algoritmos y técnicas básicas</a
                      >
                    </div>
                    <strong class="text-white text-xs font-light">00:10 min</strong>
                  </li>
                  <li class="flex justify-between">
                    <div class="flex items-center gap-x-2">
                      <svg
                        class="size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 15 15"
                      >
                        <path
                          class="fill-white"
                          d="m7 9.9 3.8-2 .1-.2.1-.2v-.2l-.2-.1L7 5h-.3a1 1 0 0 0-.3 0l-.3.2-.1.2v4.2l.1.2.3.2a1 1 0 0 0 .7-.1Z"
                        />
                        <path
                          class="stroke-white"
                          stroke-miterlimit="10"
                          d="M14 7.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"
                        />
                      </svg>
                      <a class="text-sm" href="/mis-cursos/virtual/video"
                        >1.4 Representación y conocimiento</a
                      >
                    </div>
                    <strong class="text-white text-xs font-light">00:10 min</strong>
                  </li>
                </ul>
              </details>
              <details>
                <summary class="flex items-center gap-x-2">
                  <svg
                    class="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      class="fill-white"
                      d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0ZM7.4 13.5 3.9 9.6l1-.9 2.4 2.7 5.8-6.8 1 .9-6.7 8Z"
                    /></svg
                  ><span>2. Aprendizaje automático</span>
                </summary>
                <ol>
                  <li></li>
                </ol>
              </details>
              <details>
                <summary class="flex items-center gap-x-2">
                  <svg
                    class="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      class="fill-white"
                      d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0ZM7.4 13.5 3.9 9.6l1-.9 2.4 2.7 5.8-6.8 1 .9-6.7 8Z"
                    /></svg
                  ><span>3. Procesamiento de lenguaje natural</span>
                </summary>
                <ol>
                  <li></li>
                </ol>
              </details>
              <details>
                <summary class="flex items-center gap-x-2">
                  <svg
                    class="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      class="fill-white"
                      d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0ZM7.4 13.5 3.9 9.6l1-.9 2.4 2.7 5.8-6.8 1 .9-6.7 8Z"
                    /></svg
                  ><span>4. Visión por computadoras</span>
                </summary>
                <ol>
                  <li></li>
                </ol>
              </details>
              <details>
                <summary class="flex items-center gap-x-2">
                  <svg
                    class="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      class="fill-white"
                      d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0ZM7.4 13.5 3.9 9.6l1-.9 2.4 2.7 5.8-6.8 1 .9-6.7 8Z"
                    /></svg
                  ><span>5. Examen</span>
                </summary>
                <ol>
                  <li></li>
                </ol>
              </details>
            </div>
          </div>
          <section class="flex flex-col gap-y-4">
            <h4 class="bg-black text-white pl-4 py-1 rounded-t-lg w-2/5">
              Comentarios
            </h4>
            <div class="flex gap-x-4 items-center">
              <img class="rounded-full size-12" src="/profile.webp" alt="" />
              <textarea
                class="w-full text-sm border border-neutral-400 rounded-lg p-2"
                name=""
                id=""
                placeholder="En esta sección, puedes escribir comentarios sobre esta clase."
              ></textarea>
            </div>
            <div class="flex justify-end gap-x-4">
              <app-custom-button
                [color]="'orange'"
                [hoverColor]="'white'"
                [text]="'Comenzar'"
              />
              <app-custom-button
                [color]="'gray'"
                [hoverColor]="'white'"
                [text]="'Cancelar'"
              />
            </div>
          </section>
        </aside>
      </div>
    </app-user-layout>
  `,
})
export class VideoCourseComponent {
  constructor() {}
}
