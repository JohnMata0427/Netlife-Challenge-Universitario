import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CustomButtonComponent } from '@/components/custom-button.component';
import { CustomTitleComponent } from '@/components/custom-title.component';
import { UserLayout } from '@/layouts/user.layout';

@Component({
  imports: [NgStyle, CustomButtonComponent, CustomTitleComponent, UserLayout],
  template: `
    <app-user-layout>
      <div
        class="flex flex-col justify-center bg-black px-16 py-10 md:flex-row"
      >
        <div class="flex items-center justify-center md:w-1/2">
          <img class="rounded-lg" src="/courses/redes.jpg" alt="" />
        </div>
        <div class="mt-8 flex flex-col md:w-1/2 md:pl-16">
          <h1
            class="text-center text-4xl font-extrabold text-white sm:text-start"
          >
            REDES DE COMPUTADORAS
          </h1>
          <div
            class="bg-greenlight my-4 w-32 rounded-lg px-4 py-1.5 text-center text-sm font-bold text-neutral-800"
          >
            En progreso
          </div>
          <p class="w-11/12 text-sm font-extralight text-white">
            Este curso ofrece una introducción integral a los fundamentos de las
            redes de computadoras. A lo largo del curso, los estudiantes
            aprenderán sobre la arquitectura, componentes y operaciones de redes
            de datos.
          </p>
          <div class="mt-4 flex items-center gap-2">
            <img
              class="size-4"
              src="/icons/courses/teacher.svg"
              alt="Icono del Profesor"
            />
            <span class="text-sm font-medium text-white"
              >Prof. Monica Jimenez</span
            >
          </div>
          <div class="mt-4 flex items-center gap-2">
            <img
              class="size-4"
              src="/icons/courses/calendar.svg"
              alt="Icono del Profesor"
            />
            <span class="text-sm font-medium text-white"
              >Publicado el 10 de junio del 2024</span
            >
          </div>
          <div class="mt-4 flex items-center gap-2">
            <img
              class="size-4"
              src="/icons/courses/calendar.svg"
              alt="Icono del Profesor"
            />
            <span class="text-sm font-medium text-white"
              >Finalizá el 20 de julio del 2024</span
            >
          </div>
        </div>
      </div>

      <section class="mt-8 flex items-center justify-center gap-4">
        <div class="bg-quinary h-5 w-5/6 rounded">
          <div
            class="from-secondary via-tertiary to-quaternary h-full rounded-l bg-gradient-to-r"
            [ngStyle]="{ 'width.%': '50' }"
          ></div>
        </div>
        <h4 class="text-sm">50% Progreso</h4>
      </section>

      <section>
        <app-title-component title="Contenido del Curso" />
        <div class="mt-8 flex flex-wrap justify-center gap-1">
          <app-button-component
            text="Inicio"
            [color]="selectedButton === 'Inicio' ? 'orange' : 'black'"
            (click)="selectedButton = 'Inicio'"
          />
          @for (module of modules; track module) {
            <app-button-component
              text="Módulo {{ module }}"
              [color]="
                selectedButton === 'Módulo ' + module ? 'orange' : 'black'
              "
              (click)="selectedButton = 'Módulo ' + module"
            />
          }
          <app-button-component
            text="Examenes"
            [color]="selectedButton === 'Examen' ? 'orange' : 'black'"
            (click)="selectedButton = 'Examen'"
          />
          <app-button-component
            text="Fin del Curso"
            [color]="selectedButton === 'Certificado' ? 'orange' : 'black'"
            (click)="selectedButton = 'Certificado'"
          />
        </div>
      </section>

      @if (selectedButton === 'Inicio') {
        <section>
          <app-title-component title="Docente del Curso" />
          <div class="mx-16 flex items-center gap-10">
            <div
              class="bg-quinary relative flex h-32 w-1/2 items-center gap-4 rounded-lg p-2 pr-8 shadow-sm shadow-black/30"
            >
              <img
                class="absolute top-3 left-3 size-12"
                src="/presentation-border-1.svg"
                alt=""
              />
              <img
                class="ml-5 size-20 rounded-full"
                src="/profile.webp"
                alt="Perfil del Docente"
              />
              <div class="flex flex-col gap-2">
                <h3 class="text-lg font-bold">Monica Jimenez</h3>
                <span class="ml-4 text-sm"
                  ><strong>Titulo académico: </strong>Ing. Sistemas</span
                >
                <span class="ml-4 text-sm"
                  ><strong>Correo eletrónico: </strong
                  >monica.jimenezAgmail.com</span
                >
              </div>
              <img
                class="absolute right-3 bottom-3 size-12"
                src="/presentation-border-2.svg"
                alt=""
              />
            </div>
            <div class="bg-orangelight w-1/2 rounded-lg p-4 text-sm">
              ¡Hola a todos! Soy <strong>Monica Jimenez</strong>, y seré su
              instructora para este curso. Estoy emocionada de acompañarlos en
              este viaje de aprendizaje sobre redes de computadoras. Juntos
              exploraremos el fascinante mundo de las redes, desde lo básico
              hasta configuraciones avanzadas.
              <strong>¡Bienvenidos y mucho éxito!</strong>
            </div>
          </div>
        </section>

        <section>
          <app-title-component title="Información del Curso" />
          <div class="my-10 flex justify-center gap-8">
            <div
              class="bg-quinary min-h-60 w-96 rounded-lg shadow-md shadow-black/50"
            >
              <div
                class="flex h-8 w-36 items-center justify-center rounded-tl-lg rounded-br-xl bg-black"
              >
                <h3 class="text-xs font-light text-white italic">Objetivos</h3>
              </div>
              <div class="p-3">
                <p class="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                  ratione ab perferendis laudantium labore in, maxime iste sunt
                  sit quis tempora, aliquam modi amet ut alias, ad provident!
                  Placeat, laborum. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Consequatur quis tenetur eligendi nobis
                  provident voluptatum ex magni ratione necessitatibus, unde
                  eaque eum quos, architecto quae officiis facere debitis maxime
                  reiciendis?
                </p>
              </div>
            </div>
            <div
              class="bg-quinary min-h-60 w-96 rounded-lg shadow-md shadow-black/50"
            >
              <div
                class="flex h-8 w-36 items-center justify-center rounded-tl-lg rounded-br-xl bg-black"
              >
                <h3 class="text-xs font-light text-white italic">Destrezas</h3>
              </div>
              <div class="p-3">
                <p class="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  voluptatibus rem perspiciatis libero, dolorum soluta illum quo
                  velit placeat est? Atque dolorem quia culpa est. Temporibus
                  error accusamus id provident? Cumque quo totam delectus nulla,
                  animi dolore? Expedita modi repellendus ex, hic sint
                  reprehenderit dicta ratione dolor, assumenda ipsam a molestiae
                  facere vero maxime fugit, quis aspernatur nulla cupiditate
                  quasi?
                </p>
              </div>
            </div>
            <div
              class="bg-quinary min-h-60 w-96 rounded-lg shadow-md shadow-black/50"
            >
              <div
                class="flex h-8 w-36 items-center justify-center rounded-tl-lg rounded-br-xl bg-black"
              >
                <h3 class="text-xs font-light text-white italic">
                  Valores y Actitudes
                </h3>
              </div>
              <div class="p-3">
                <p class="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci molestiae, laboriosam sed quaerat quasi quae quo
                  harum. Sint labore, ea aperiam libero placeat dolore iste
                  facilis, saepe laborum excepturi eius!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="mb-10">
          <app-title-component title="Recursos Adicionales" />
          <div class="mt-10 flex flex-col gap-2 pl-16">
            <a class="flex gap-4" href="#">
              <img
                class="size-7"
                src="/icons/courses/archive.svg"
                alt="Documento Adjunto"
              />
              <span class="text-sm">Introducción al curso</span>
            </a>
            <a class="flex gap-4" href="#">
              <img
                class="size-7"
                src="/icons/courses/archive.svg"
                alt="Documento Adjunto"
              />
              <span class="text-sm">Introducción al curso</span>
            </a>
            <a class="flex gap-4" href="#">
              <img
                class="size-7"
                src="/icons/courses/archive.svg"
                alt="Documento Adjunto"
              />
              <span class="text-sm">Introducción al curso</span>
            </a>
          </div>
        </section>
      } @else if (selectedButton === 'Examen') {
        <section>
          <app-title-component title="Tema de la Clase" />
          <div
            class="relative mt-10 ml-16 flex h-24 items-center bg-gradient-to-r from-[#aeaeaf] via-[#ceced1] to-white"
          >
            <svg
              class="absolute inset-y-0 left-0 h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 93 122"
            >
              <path
                d="M90.4 56.8a5 5 0 0 1 0 8.3L8.2 120.6a5 5 0 0 1-7.8-4.2V5.4a5 5 0 0 1 7.8-4.1l82.1 55.5Z"
              />
            </svg>
            <h3 class="ml-28 text-3xl font-bold">Examen</h3>
          </div>
        </section>
        <section class="mb-10 flex flex-col">
          <app-title-component title="Pruebas" />
          <button
            class="border-primary bg-quinary mx-16 flex h-16 items-center justify-between border-l-8 pl-4"
          >
            <div class="flex gap-4">
              <img
                class="size-7"
                src="/icons/courses/archive.svg"
                alt="Icono del examen"
              />
              <span>Prueba 1: Conceptos básicos de redes </span>
            </div>
            <div class="flex gap-4">
              <app-button-component
                text="Resolver"
                moreStyles="w-40 justify-center"
                color="orange"
                (click)="
                  router.navigate(['/examen'], {
                    queryParams: { pregunta: '1' },
                  })
                "
              />
              <svg
                class="size-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 32"
                fill="none"
              >
                <path
                  class="fill-greenlight"
                  d="M15 0C7 0 0 7 0 16c0 8 7 15 15 15s15-7 15-15c0-9-7-16-15-16Zm-3 23-6-6 2-2 4 5L22 8l2 1-12 14Z"
                />
              </svg>
            </div>
          </button>
        </section>
      } @else if (selectedButton === 'Certificado') {
        <app-title-component title="Tema del Módulo" />
        <div
          class="relative my-10 ml-16 flex h-24 items-center bg-gradient-to-r from-[#aeaeaf] via-[#ceced1] to-white"
        >
          <svg
            class="absolute inset-y-0 left-0 h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 93 122"
          >
            <path
              d="M90.4 56.8a5 5 0 0 1 0 8.3L8.2 120.6a5 5 0 0 1-7.8-4.2V5.4a5 5 0 0 1 7.8-4.1l82.1 55.5Z"
            />
          </svg>
          <h3 class="ml-28 text-3xl font-bold">Finalización del Curso</h3>
        </div>
        <app-title-component title="Obtencion del certificado" />
        <p class="ml-16">
          ¡Felicidades por completar el curso! Ahora,
          <span class="text-primary font-bold">obtén tu certificado</span> y
          demuestra tus nuevas habilidades al mundo.
        </p>

        <button class="mt-4 ml-16 flex gap-4">
          <svg
            class="size-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path class="fill-black" d="M4.3 0 0 9h19.2l5.3-9H4.2Z" />
            <path
              class="fill-black"
              d="m32 8-4.8-8L19 14.2a7.9 7.9 0 0 0-5.5 0l-1.6-2.8H2l6 9.7a9.9 9.9 0 0 0 0 4c.3 1.3 1 2.5 1.7 3.6a8.6 8.6 0 0 0 3 2.4 8 8 0 0 0 7.2 0 8.6 8.6 0 0 0 2.9-2.4 9.4 9.4 0 0 0 1.6-3.6 10 10 0 0 0 .1-4L32 8ZM16.1 27.9c-.9 0-1.8-.3-2.5-.9a5 5 0 0 1-1.7-2.2 5.4 5.4 0 0 1 1-5.5 4.5 4.5 0 0 1 2.3-1.3c1-.2 1.9-.1 2.7.2a4.7 4.7 0 0 1 2 1.9 5.3 5.3 0 0 1-.5 6.3 4.5 4.5 0 0 1-3.2 1.5Z"
            />
            <path
              class="fill-black"
              d="M16 25c1.2 0 2.1-.9 2.1-2s-1-2-2.1-2-2.1.9-2.1 2 1 2 2.1 2Z"
            />
          </svg>
          <span class="text-primary font-bold">Certificado del curso</span>
        </button>
        <app-title-component title="Comentario personal" />
        <textarea class="bg-quinary mx-16 h-20 rounded-lg"></textarea>
        <app-button-component
          text="Guardar comentario"
          moreStyles="mx-auto mt-4 mb-10"
          color="orange"
        />
      } @else {
        <app-title-component title="Tema del módulo" />
        <div
          class="relative mx-8 my-10 flex h-24 items-center bg-gradient-to-r from-[#aeaeaf] via-[#84858D]/40 to-white sm:mx-16"
        >
          <svg
            class="absolute inset-y-0 left-0 h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 93 122"
          >
            <path
              d="M90.4 56.8a5 5 0 0 1 0 8.3L8.2 120.6a5 5 0 0 1-7.8-4.2V5.4a5 5 0 0 1 7.8-4.1l82.1 55.5Z"
            />
          </svg>
          <h3 class="ml-28 text-3xl font-bold">Evolución de las redes</h3>
        </div>
        <app-title-component title="Material del módulo" />
        <button
          class="border-primary bg-quinary mx-8 mb-4 flex h-16 w-[90%] items-center justify-between rounded-r-lg border-l-8 pl-4 sm:mx-16"
        >
          <div class="flex items-center gap-4">
            <img
              class="size-7"
              src="/icons/courses/archive.svg"
              alt="Icono del examen"
            />
            <span>Conceptos básicos de redes </span>
          </div>
          <svg
            class="mr-4 size-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 32"
            fill="none"
          >
            <path
              class="fill-greenlight"
              d="M15 0C7 0 0 7 0 16c0 8 7 15 15 15s15-7 15-15c0-9-7-16-15-16Zm-3 23-6-6 2-2 4 5L22 8l2 1-12 14Z"
            />
          </svg>
        </button>
        <button
          class="border-primary bg-quinary mx-8 flex h-16 w-[90%] items-center justify-between rounded-r-lg border-l-8 pl-4 sm:mx-16"
        >
          <div class="flex items-center gap-4">
            <img
              class="size-7"
              src="/icons/courses/archive.svg"
              alt="Icono del examen"
            />
            <span>Topologías y medios de transmisión</span>
          </div>
          <svg
            class="mr-4 size-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 34"
            fill="none"
          >
            <path
              stroke-width="2"
              stroke-miterlimit="10"
              stroke="#72C234"
              d="M31 16.6C31 8 24.3 1 16 1S1 8 1 16.6s6.7 15.6 15 15.6 15-7 15-15.6Z"
            />
            <path
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="#72C234"
              d="m23 10.4-9.8 12.5-4.2-5"
            />
          </svg>
        </button>

        <app-title-component title="Tareas asignadas" />
        <button
          class="border-primary bg-quinary mx-8 mb-4 flex h-16 w-[90%] items-center justify-between rounded-r-lg border-l-8 pl-4 sm:mx-16"
        >
          <div class="flex items-center gap-4">
            <img
              class="size-7"
              src="/icons/courses/archive.svg"
              alt="Icono del examen"
            />
            <span>Tarea 1: Conceptos básicos de redes </span>
          </div>
          <div class="flex items-center gap-4">
            <app-button-component
              text="Presentar 15 de agosto"
              moreStyles="w-40 justify-center text-neutral-700 text-xs"
              color="yellow"
              (click)="
                router.navigate(['/examen'], {
                  queryParams: { pregunta: '1' },
                })
              "
            />
            <svg
              class="mr-4 size-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 32"
              fill="none"
            >
              <path
                class="fill-greenlight"
                d="M15 0C7 0 0 7 0 16c0 8 7 15 15 15s15-7 15-15c0-9-7-16-15-16Zm-3 23-6-6 2-2 4 5L22 8l2 1-12 14Z"
              />
            </svg>
          </div>
        </button>
      }
    </app-user-layout>
  `,
})
export class CoursePage {
  public selectedButton = 'Módulo 1';
  public modules = [1, 2, 3, 4, 5, 6, 7];
  public router = inject(Router);
}
