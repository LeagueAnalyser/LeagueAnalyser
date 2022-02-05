<template>
  <div class="home">
    <div class="w-full h-full bg-gray-100">
      <h1 class="p-3 text-2xl absolute">League Analyser</h1>
      <div class="flex flex-row h-screen">
        <section class="grow grid place-items-center w-screen">
          <div class="flex">
            <select class="bg-white rounded-lg p-2 mr-3">
              <option value="EUW">EUW</option>
              <option value="NA">NA</option>
              <option value="KR">KR</option>
              <option value="EUNE">EUNE</option>
            </select>
            <input type="text" class="h-12 w-96 rounded-lg p-3 bg-white" />
            <button class="-ml-10 bg-white p-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </button>
          </div>
        </section>
        <nav
          class="
            w-14
            h-full
            flex flex-col
            p-4
            items-center
            rounded-l-lg
            bg-gray-300
          "
        >
          <button class="pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bar-chart"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"
              />
            </svg>
          </button>
          <button class="pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-graph-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
              />
            </svg>
          </button>
          <button class="pb-6">he</button>
          <button class="pb-6">he</button>
          <button class="pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-moon"
              viewBox="0 0 16 16"
            >
              <path
                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>
