export const optionCards = [
  {
    tag: 1,
    gradient: ["#020202", "#161d29", "#263247"],
    bgColor: "dark:bg-[#58A399]/[0.8]",
    title: "Sabes lo que quieres",
    description: (
      <div>
        <p className="font-light mb-2 text-sm">
          Sigue los siguientes pasos si sabes lo que quieres escuchar.
        </p>
        <ol className="list-decimal pl-4 space-y-4 text-base">
          <li>Elige tus canciones</li>
          <li>Agregalas a tu sesión.</li>
          <li>Ve cuánto tiempo te tardarás.</li>
          <li>Ve cuánto agua gastarás.</li>
          <li>Completa con recomendaciones.</li>
          <li>Checa tu Spotify, la lista de reproducción estará ahí.</li>
        </ol>
      </div>
    ),
    link: "/dashboard/choose-music",
  },
  {
    tag: 2,
    gradient: ["#020202", "#162916", "#264727"],
    bgColor: "dark:bg-[#496989]/[0.8]",
    title: "No sabes que escuchar",
    description: (
      <div>
        <p className="font-light mb-2 text-sm">
          Sigue los siguientes pasos si no sabes que quieres escuchar
        </p>
        <ol className="list-decimal pl-4 space-y-4">
          <li>Dinos cuánto tiempo tardarás.</li>
          <li>Dinos de dónde te sacar las canciones.</li>
          <li>Ve cuánto tiempo te tardarás.</li>
          <li>Ve cuánto agua gastarás.</li>
          <li>Quita o agrega canciones a tu antojo.</li>
          <li>Checa tu Spotify, la lista de reproducción estará ahí.</li>
        </ol>
      </div>
    ),
    link: "/dashboard/recommendation",
  },
  // Remember that if you are going to add a new option with dynamic gradients, you need to add the gradient to the safelist in the tailwind.config.js
]
