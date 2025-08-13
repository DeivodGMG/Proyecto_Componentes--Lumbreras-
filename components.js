
const components = [
    // buttons
    {
        name: "Botón Estándar",
        category: "Botones",
        variations: [
            { name: "Primario", code: `<button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">Empezar</button>` },
            { name: "Secundario", code: `<button class="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">Saber Más</button>` },
            { name: "Éxito", code: `<button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">Confirmar</button>` },
            { name: "Peligro", code: `<button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">Eliminar</button>` },
            { name: "Advertencia", code: `<button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">Advertencia</button>` },
        ]
    },
    {
        name: "Botón Outline",
        category: "Botones",
        variations: [
            { name: "Primario", code: `<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">Outline</button>` },
            { name: "Peligro", code: `<button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-lg">Cancelar</button>` },
        ]
    },
    {
        name: "Botón con Icono",
        category: "Botones",
        variations: [
            { name: "Icono Izquierda", code: `<button class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center"><i class="fa-solid fa-download mr-2"></i><span>Descargar</span></button>` },
            { name: "Icono Derecha", code: `<button class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center"><span>Siguiente</span><i class="fa-solid fa-arrow-right ml-2"></i></button>` },
            { name: "Solo Icono (Redondo)", code: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded-full shadow-lg"><i class="fa-solid fa-plus fa-lg"></i></button>` },
            { name: "Solo Icono (Cuadrado)", code: `<button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold p-3 rounded-lg"><i class="fa-solid fa-gear fa-lg"></i></button>` },
        ]
    },
    {
        name: "Tamaños de Botón",
        category: "Botones",
        variations: [
            { name: "Pequeño (sm)", code: `<button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md text-sm">Pequeño</button>` },
            { name: "Base (md)", code: `<button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Base</button>` },
            { name: "Grande (lg)", code: `<button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg">Grande</button>` },
        ]
    },
    {
        name: "Botón Social",
        category: "Botones",
        variations: [
            { name: "Google", code: `<button class="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded-lg inline-flex items-center dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white"><i class="fa-brands fa-google w-5 h-5 mr-2 text-red-500"></i><span>Acceder con Google</span></button>` },
            { name: "Facebook", code: `<button class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center"><i class="fa-brands fa-facebook w-5 h-5 mr-2"></i><span>Compartir en Facebook</span></button>` },
            { name: "Twitter / X", code: `<button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center"><i class="fa-brands fa-x-twitter w-5 h-5 mr-2"></i><span>Seguir en X</span></button>` },
        ]
    },

    // =============== CATEGORÍA: Alertas ===============
    {
        name: "Alerta",
        category: "Alertas",
        variations: [
            { name: "Éxito", code: `<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md" role="alert"><p class="font-bold">¡Éxito!</p><p>Tu operación se completó correctamente.</p></div>` },
            { name: "Peligro", code: `<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert"><p class="font-bold">¡Error!</p><p>Algo salió terriblemente mal.</p></div>` },
            { name: "Advertencia", code: `<div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md" role="alert"><p class="font-bold">Advertencia</p><p>Tu cuenta necesita atención.</p></div>` },
            { name: "Información", code: `<div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md" role="alert"><p class="font-bold">Información</p><p>Se aproxima una actualización del sistema.</p></div>` },
            { name: "Con Descarte (JS)", code: `<div class="bg-indigo-100 border border-indigo-400 text-indigo-700 px-4 py-3 rounded-md relative" role="alert"><strong class="font-bold">¡Hola!</strong><span class="block sm:inline"> Esta es una notificación que puedes cerrar.</span><button class="absolute top-0 bottom-0 right-0 px-4 py-3"><i class="fa-solid fa-times"></i></button></div>` },
            { name: "Con Acciones", code: `<div class="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-4 rounded-lg"><div class="flex items-center"><i class="fa-solid fa-cookie-bite text-2xl text-yellow-500 mr-4"></i><div class="flex-grow"><h4 class="font-bold dark:text-white">Política de Cookies</h4><p class="text-sm text-gray-600 dark:text-gray-300">Usamos cookies para mejorar tu experiencia.</p></div><div class="flex gap-2"><button class="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:underline">Rechazar</button><button class="text-sm bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">Aceptar</button></div></div></div>` },
        ]
    },

    // =============== CATEGORÍA: Badges ===============
    {
        name: "Badge",
        category: "Badges",
        variations: [
            { name: "Pill Azul", code: `<span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Nuevo</span>` },
            { name: "Pill Verde", code: `<span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Activo</span>` },
            { name: "Pill Rojo", code: `<span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Error</span>` },
            { name: "Pill Amarillo", code: `<span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Pendiente</span>` },
            { name: "Estándar con Icono", code: `<span class="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300"><i class="fa-solid fa-clock w-2.5 h-2.5 me-1.5"></i>3 días</span>` },
            { name: "Solo Punto (sm)", code: `<span class="flex w-2 h-2 me-1.5 bg-green-500 rounded-full"></span>` },
            { name: "Solo Punto (lg)", code: `<span class="flex w-3 h-3 me-1.5 bg-red-500 rounded-full"></span>` },
            { name: "En un Botón", code: `<button type="button" class="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"><i class="fa-solid fa-envelope fa-lg"></i><div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">20</div></button>` },
        ]
    },
    
    // =============== CATEGORÍA: Avatares ===============
    {
        name: "Avatar",
        category: "Avatares",
        variations: [
            { name: "Imagen (md)", code: `<img class="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://placehold.co/100x100/7e22ce/ffffff?text=A" alt="Avatar">` },
            { name: "Imagen (lg)", code: `<img class="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://placehold.co/100x100/16a34a/ffffff?text=B" alt="Avatar">` },
            { name: "Iniciales (md)", code: `<div class="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"><span class="font-medium text-gray-600 dark:text-gray-300">JP</span></div>`},
            { name: "Iniciales (lg)", code: `<div class="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"><span class="text-xl font-medium text-gray-600 dark:text-gray-300">JP</span></div>`},
            { name: "Icono Placeholder", code: `<div class="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"><i class="fa-solid fa-user text-2xl text-gray-400"></i></div>`},
            { name: "Con Notificación (Online)", code: `<div class="relative inline-block"><img class="h-16 w-16 rounded-full" src="https://placehold.co/100x100/f97316/ffffff?text=C" alt=""><span class="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white"></span></div>` },
            { name: "Con Notificación (Offline)", code: `<div class="relative inline-block"><img class="h-16 w-16 rounded-full" src="https://placehold.co/100x100/f97316/ffffff?text=C" alt=""><span class="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-gray-400 ring-2 ring-white"></span></div>` },
        ]
    },
    {
        name: "Grupo de Avatares",
        category: "Avatares",
        variations: [
            { name: "Apilados", code: `<div class="flex -space-x-4"><img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://placehold.co/100x100/3b82f6/ffffff?text=1" alt=""><img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://placehold.co/100x100/16a34a/ffffff?text=2" alt=""><a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a></div>` }
        ]
    },

    // =============== CATEGORÍA: Cards ===============
    {
        name: "Card de Producto",
        category: "Cards",
        variations: [
            { name: "Estándar", code: `<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"><a href="#"><img class="rounded-t-lg" src="https://placehold.co/600x400/999999/ffffff?text=Producto" alt="" /></a><div class="p-5"><a href="#"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Producto Increíble</h5></a><p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Descripción de la oferta.</p><a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Ver más <i class="fa-solid fa-arrow-right ml-2"></i></a></div></div>` },
            { name: "Con Reviews", code: `<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"><a href="#"><img class="rounded-t-lg" src="https://placehold.co/600x400/34d399/ffffff?text=Producto" alt="" /></a><div class="p-5"><h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7</h5><div class="flex items-center mt-2.5 mb-5"><div class="flex items-center space-x-1"><i class="fa-solid fa-star text-yellow-300"></i><i class="fa-solid fa-star text-yellow-300"></i><i class="fa-solid fa-star text-yellow-300"></i><i class="fa-solid fa-star text-yellow-300"></i><i class="fa-solid fa-star-half-stroke text-yellow-300"></i></div><span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">4.5</span></div><div class="flex items-center justify-between"><span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span><a href="#" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Añadir al carro</a></div></div></div>` }
        ]
    },
    {
        name: "Card de Perfil",
        category: "Cards",
        variations: [
            { name: "Centrado", code: `<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6"><div class="flex flex-col items-center pb-10"><img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://placehold.co/400x400/3b82f6/ffffff?text=User" alt="Bonnie image"/><h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5><span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span><div class="flex mt-4 md:mt-6"><a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Añadir</a><a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">Mensaje</a></div></div></div>` },
            { name: "Horizontal", code: `<div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 max-w-sm"><a href="#"><img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://placehold.co/400x400/f87171/ffffff?text=User" alt="Bonnie Avatar"></a><div class="p-5"><h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">Bonnie Green</a></h3><span class="text-gray-500 dark:text-gray-400">CEO & Web Developer</span></div></div>` }
        ]
    },
    {
        name: "Card de Estadísticas",
        category: "Cards",
        variations: [
            { name: "Icono Izquierda", code: `<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center space-x-4"><div class="flex-shrink-0"><div class="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900"><i class="fa-solid fa-users text-2xl text-green-600 dark:text-green-300"></i></div></div><div><p class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Usuarios Activos</p><p class="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">1,250</p></div></div>` },
            { name: "Icono Arriba", code: `<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center"><div class="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 mx-auto mb-4"><i class="fa-solid fa-chart-line text-2xl text-red-600 dark:text-red-300"></i></div><p class="text-sm font-medium text-gray-500 dark:text-gray-400">Ventas</p><p class="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">$3,450</p></div>` },
            { name: "Con Tendencia", code: `<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"><p class="text-sm font-medium text-gray-500 dark:text-gray-400">Conversión</p><div class="flex items-baseline"><p class="text-3xl font-semibold text-gray-900 dark:text-white">12.5%</p><span class="ml-2 text-sm font-semibold text-green-500 flex items-center"><i class="fa-solid fa-arrow-up mr-1"></i> 2.1%</span></div></div>` }
        ]
    },
    {
        name: "Card de Blog",
        category: "Cards",
        variations: [
            { name: "Vertical", code: `<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"><a href="#"><img class="rounded-t-lg" src="https://placehold.co/600x400/fbbf24/333333?text=Artículo" alt="Imagen del artículo" /></a><div class="p-5"><span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Tutorial</span><a href="#"><h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cómo empezar con Tailwind CSS</h5></a><p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Una guía completa para principiantes.</p><div class="flex items-center space-x-3 mt-4"><img class="w-8 h-8 rounded-full" src="https://placehold.co/100x100/7e22ce/ffffff?text=A" alt="Avatar del autor"><span class="font-medium dark:text-white">Ana C.</span></div></div></div>` },
            { name: "Horizontal", code: `<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"><img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://placehold.co/400x600/60a5fa/ffffff?text=Art" alt=""><div class="flex flex-col justify-between p-4 leading-normal"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5><p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p></div></a>` }
        ]
    },

    // Formularios
    {
        name: "Input",
        category: "Formularios",
        variations: [
            { name: "Estándar", code: `<div><label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email</label><input type="email" id="email" class="shadow-sm block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 p-2.5 focus:ring-blue-500 focus:border-blue-500" placeholder="tu@email.com"></div>` },
            { name: "Flotante (Floating Label)", code: `<div class="relative"><input type="email" id="floating_email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /><label for="floating_email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">Email</label></div>` },
            { name: "Con Icono", code: `<div class="relative"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><i class="fa-solid fa-envelope text-gray-400"></i></div><input type="email" class="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-2.5 pl-10 sm:text-sm" placeholder="tu@email.com"></div>` },
            { name: "Validación Éxito", code: `<div><label class="block mb-1 text-sm font-medium text-green-700 dark:text-green-500">Usuario</label><input type="text" class="bg-green-50 border border-green-500 text-green-900 text-sm rounded-lg block w-full p-2.5" placeholder="Juan"><p class="mt-2 text-sm text-green-600 dark:text-green-500">¡Disponible!</p></div>` },
            { name: "Validación Error", code: `<div><label class="block mb-1 text-sm font-medium text-red-700 dark:text-red-500">Usuario</label><input type="text" class="bg-red-50 border border-red-500 text-red-900 text-sm rounded-lg block w-full p-2.5" placeholder="Juan"><p class="mt-2 text-sm text-red-600 dark:text-red-500">¡No disponible!</p></div>` },
        ]
    },
    {
        name: "Input Group",
        category: "Formularios",
        variations: [
            { name: "Prefijo", code: `<div class="flex"><span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">@</span><input type="text" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600"></div>` },
            { name: "Sufijo con Botón", code: `<div class="relative w-full"><input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 dark:bg-gray-700 dark:border-gray-600" placeholder="Buscar..." required /><button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800"><i class="fa-solid fa-search"></i></button></div>` }
        ]
    },
    {
        name: "Controles de Selección",
        category: "Formularios",
        variations: [
            { name: "Checkbox", code: `<div class="flex items-center"><input id="remember-me" type="checkbox" class="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"><label for="remember-me" class="ml-2 block text-sm text-gray-900 dark:text-gray-200">Recordarme</label></div>` },
            { name: "Radio Button", code: `<fieldset class="flex gap-4"><div class="flex items-center"><input id="opcion1" type="radio" name="opciones" class="h-4 w-4 border-gray-300 text-indigo-600"><label for="opcion1" class="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">Opción 1</label></div><div class="flex items-center"><input id="opcion2" type="radio" name="opciones" class="h-4 w-4 border-gray-300 text-indigo-600"><label for="opcion2" class="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">Opción 2</label></div></fieldset>` },
            { name: "Toggle Switch", code: `<label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" value="" class="sr-only peer"><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div><span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Activar</span></label>` },
            { name: "Select Menu", code: `<div><label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Elige un país</label><select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"><option selected>España</option><option>México</option></select></div>` },
        ]
    },
    {
        name: "File Input",
        category: "Formularios",
        variations: [
            { name: "Estándar", code: `<div><label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Subir archivo</label><input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600" id="file_input" type="file"></div>` },
            { name: "Drag and Drop", code: `<div class="flex items-center justify-center w-full"><label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"><div class="flex flex-col items-center justify-center pt-5 pb-6"><i class="fa-solid fa-cloud-arrow-up text-4xl text-gray-500 dark:text-gray-400 mb-4"></i><p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click para subir</span> o arrastra y suelta</p><p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG (MAX. 800x400px)</p></div><input id="dropzone-file" type="file" class="hidden" /></label></div>` }
        ]
    },
    {
        name: "Formulario Completo",
        category: "Formularios",
        variations: [
            { name: "Login", code: `<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"><form class="space-y-6" action="#"><h5 class="text-xl font-medium text-gray-900 dark:text-white">Accede a nuestra plataforma</h5><div><label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu email</label><input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500" placeholder="nombre@email.com" required></div><div><label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu contraseña</label><input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500" required></div><button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button></form></div>` },
            { name: "Contacto", code: `<section class="bg-white dark:bg-gray-900 rounded-lg"><div class="py-8 px-4 mx-auto max-w-screen-md"><h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contáctanos</h2><form action="#" class="space-y-8"><label class="block mb-2 text-sm font-medium">Asunto</label><input type="text" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600" placeholder="¿En qué podemos ayudarte?" required><label class="block mb-2 text-sm font-medium">Tu mensaje</label><textarea rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 dark:bg-gray-700 dark:border-gray-600"></textarea><button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800">Enviar mensaje</button></form></div></section>` },
        ]
    },

    // Navegacion
    {
        name: "Barra de Navegación",
        category: "Navegación",
        variations: [
            { name: "Simple", code: `<nav class="bg-gray-800"><div class="mx-auto max-w-7xl px-4"><div class="relative flex h-16 items-center justify-between"><div class="flex items-center"><a href="#" class="text-white font-bold">Logo</a></div><div class="hidden sm:block"><div class="flex space-x-4"><a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Dashboard</a><a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Equipo</a></div></div></div></div></nav>` },
            { name: "Con Búsqueda y Perfil", code: `<nav class="bg-white border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800 backdrop-blur-sm"><div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"><a href="#" class="flex items-center space-x-3"><i class="fa-solid fa-fire text-2xl text-orange-500"></i><span class="self-center text-2xl font-semibold dark:text-white">Lumbreras</span></a><div class="flex items-center md:order-2 space-x-3"><input type="text" placeholder="Buscar..." class="bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1.5 text-sm w-32 md:w-auto"/><button class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"><i class="fa-solid fa-bell"></i></button><img class="w-9 h-9 rounded-full" src="https://placehold.co/100x100/7e22ce/ffffff?text=U" alt="user photo"></div></div></nav>` },
            { name: "Con Menú Móvil (JS)", code: `<nav class="bg-white border-gray-200 dark:bg-gray-900"><div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"><a href="#" class="flex items-center"><span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Lumbreras</span></a><button type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"><span class="sr-only">Abrir menú</span><i class="fa-solid fa-bars fa-lg"></i></button><div class="hidden w-full md:block md:w-auto"><ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"><li><a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">Inicio</a></li><li><a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white">Servicios</a></li></ul></div></div></nav>` }
        ]
    },
    {
        name: "Paginación",
        category: "Navegación",
        variations: [
            { name: "Con Números", code: `<nav aria-label="Page navigation"><ul class="inline-flex -space-x-px text-base h-10"><li><a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700">Anterior</a></li><li><a href="#" class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 dark:bg-gray-700 dark:text-white">1</a></li><li><a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">2</a></li><li><a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">Siguiente</a></li></ul></nav>` },
            { name: "Simple", code: `<div class="flex justify-center items-center space-x-4"><a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Anterior</a><a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Siguiente</a></div>` }
        ]
    },
    {
        name: "Breadcrumbs",
        category: "Navegación",
        variations: [
            { name: "Con Chevrons", code: `<nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-2"><li class="inline-flex items-center"><a href="#" class="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">Inicio</a></li><li><div class="flex items-center"><i class="fa-solid fa-chevron-right w-3 h-3 text-gray-400 mx-1"></i><a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">Proyectos</a></div></li><li aria-current="page"><div class="flex items-center"><i class="fa-solid fa-chevron-right w-3 h-3 text-gray-400 mx-1"></i><span class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">Lumbreras</span></div></li></ol></nav>` },
            { name: "Con Slashes", code: `<nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-2"><li class="inline-flex items-center"><a href="#" class="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">Inicio</a></li><li><div class="flex items-center"><span class="mx-2 text-gray-400">/</span><a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">Proyectos</a></div></li><li aria-current="page"><div class="flex items-center"><span class="mx-2 text-gray-400">/</span><span class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">Lumbreras</span></div></li></ol></nav>` },
        ]
    },
    {
        name: "Tabs (Pestañas)",
        category: "Navegación",
        variations: [
            { name: "Subrayadas", code: `<div class="border-b border-gray-200 dark:border-gray-700"><ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"><li class="me-2"><a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Perfil</a></li><li class="me-2"><a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Dashboard</a></li></ul></div>` },
            { name: "Estilo Pill", code: `<ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg"><li class="me-2"><a href="#" class="inline-block px-4 py-2 text-white bg-blue-600 rounded-lg active">Dashboard</a></li><li class="me-2"><a href="#" class="inline-block px-4 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:text-white dark:hover:bg-gray-700">Ajustes</a></li></ul>` }
        ]
    },

    // = CATEGORÍA: Modales y Overlays
    {
        name: "Modal (Requiere JS)",
        category: "Modales y Overlays",
        variations: [
            { name: "Confirmación", code: `<div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-5 text-center max-w-md mx-auto"><svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg><h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">¿Estás seguro de que quieres eliminar este elemento?</h3><div class="flex justify-center gap-4"><button type="button" class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">No, cancelar</button><button type="button" class="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">Sí, estoy seguro</button></div></div>` },
            { name: "Modal de Formulario", code: `<div class="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-md mx-auto"><div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"><h3 class="text-xl font-semibold text-gray-900 dark:text-white">Accede a tu cuenta</h3><button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600">&times;</button></div><div class="p-4 md:p-5"><form class="space-y-4" action="#"><label class="block text-sm font-medium">Tu email</label><input type="email" class="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600" placeholder="nombre@email.com" required><button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button></form></div></div>`},
            { name: "Modal Grande", code: `<div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mx-auto max-w-2xl"><div class="flex items-center justify-between p-4 border-b dark:border-gray-600"><h3 class="text-xl font-semibold text-gray-900 dark:text-white">Términos de Servicio</h3></div><div class="p-4 space-y-4"><p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">Con gran poder viene una gran responsabilidad...</p><p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">Las Fuerzas de Defensa de la Tierra... son propiedad de las Industrias Stark.</p></div><div class="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Acepto</button></div></div>` }
        ]
    },
    {
        name: "Drawer / Off-canvas (Requiere JS)",
        category: "Modales y Overlays",
        variations: [
            { name: "Desde la Izquierda", code: `<div><!-- Botón para activar el drawer --><button class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5" type="button">Mostrar Drawer</button><!-- Drawer --><div id="drawer-example" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1"><h5 class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><i class="fa-solid fa-info-circle w-4 h-4 me-2.5"></i>Menú</h5><button type="button" aria-controls="drawer-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">&times;</button><p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Contenido del menú lateral. Puedes poner enlaces de navegación, filtros, o lo que necesites aquí.</p></div></div>` }
        ]
    },

    // =============== CATEGORÍA: Dropdowns (Requiere JS) ===============
    {
        name: "Menú Desplegable (Dropdown)",
        category: "Dropdowns",
        variations: [
            { name: "Simple", code: `<div class="relative inline-block text-left"><button class="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600">Opciones <i class="fa-solid fa-chevron-down -mr-1 ml-2 h-5 w-5"></i></button><div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"><div class="py-1" role="menu"><a href="#" class="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem">Editar</a><a href="#" class="text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem">Duplicar</a></div></div></div>` },
            { name: "Con Iconos", code: `<div class="relative inline-block text-left"><button class="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600">Opciones <i class="fa-solid fa-chevron-down -mr-1 ml-2 h-5 w-5"></i></button><div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"><div class="py-1" role="menu"><a href="#" class="text-gray-700 dark:text-gray-200 flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem"><i class="fa-solid fa-pencil w-5 h-5 mr-3"></i>Editar</a><a href="#" class="text-red-700 dark:text-red-400 flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem"><i class="fa-solid fa-trash w-5 h-5 mr-3"></i>Eliminar</a></div></div></div>` },
            { name: "De Perfil de Usuario", code: `<div class="relative inline-block text-left"><button class="flex items-center" type="button"><img class="w-10 h-10 rounded-full" src="https://placehold.co/100x100/7c3aed/ffffff?text=U" alt="user photo"></button><div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5"><div class="py-1"><a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Dashboard</a><a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Ajustes</a><a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Cerrar Sesión</a></div></div></div>` },
        ]
    },

    // CATEGORÍA: Layout y Estructura 
    {
        name: "Divisor",
        category: "Layout y Estructura",
        variations: [
            { name: "Simple", code: `<hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700">`},
            { name: "Con Texto", code: `<div class="inline-flex items-center justify-center w-full"><hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"><span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">o</span></div>`},
            { name: "Con Icono", code: `<div class="inline-flex items-center justify-center w-full"><hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"><span class="absolute px-3 text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900"><i class="fa-solid fa-star"></i></span></div>`}
        ]
    },
    {
        name: "Contenedor",
        category: "Layout y Estructura",
        variations: [
            { name: "Estándar", code: `<div class="container mx-auto p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"><p class="dark:text-white">Contenido aquí</p></div>`},
        ]
    },

    // CATEGORÍA: Feedback e Indicadores
    {
        name: "Tooltip (Requiere JS/CSS)",
        category: "Feedback e Indicadores",
        variations: [
            { name: "Arriba", code: `<div class="relative group flex justify-center"><button class="bg-blue-500 text-white p-2 rounded">Tooltip Arriba</button><div class="absolute bottom-full mb-2 w-max bg-gray-800 text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Texto del tooltip</div></div>` },
            { name: "Abajo", code: `<div class="relative group flex justify-center"><button class="bg-blue-500 text-white p-2 rounded">Tooltip Abajo</button><div class="absolute top-full mt-2 w-max bg-gray-800 text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Texto del tooltip</div></div>` },
        ]
    },
    {
        name: "Toast / Notificación",
        category: "Feedback e Indicadores",
        variations: [
            { name: "Éxito", code: `<div class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert"><div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"><i class="fa-solid fa-check"></i></div><div class="ms-3 text-sm font-normal">Elemento guardado.</div><button class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 rounded-lg p-1.5 inline-flex h-8 w-8 dark:text-gray-500 dark:bg-gray-800">&times;</button></div>` },
            { name: "Peligro", code: `<div class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert"><div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"><i class="fa-solid fa-xmark"></i></div><div class="ms-3 text-sm font-normal">Error al guardar.</div><button class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 rounded-lg p-1.5 inline-flex h-8 w-8 dark:text-gray-500 dark:bg-gray-800">&times;</button></div>` }
        ]
    },
    {
        name: "Spinner de Carga",
        category: "Feedback e Indicadores",
        variations: [
            { name: "Simple", code: `<div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>` },
            { name: "Con Puntos", code: `<div class="flex space-x-2 justify-center items-center"><span class="sr-only">Cargando...</span><div class="h-4 w-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div><div class="h-4 w-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div><div class="h-4 w-4 bg-blue-600 rounded-full animate-bounce"></div></div>` }
        ]
    },
    {
        name: "Barra de Progreso",
        category: "Feedback e Indicadores",
        variations: [
            { name: "Básica", code: `<div class="w-full bg-gray-200 rounded-full dark:bg-gray-700"><div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 45%"> 45%</div></div>` },
            { name: "Con Etiqueta", code: `<div><div class="flex justify-between mb-1"><span class="text-base font-medium text-blue-700 dark:text-white">Progreso</span><span class="text-sm font-medium text-blue-700 dark:text-white">75%</span></div><div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"><div class="bg-blue-600 h-2.5 rounded-full" style="width: 75%"></div></div></div>` }
        ]
    },
    {
        name: "Estructura de Carga (Skeleton)",
        category: "Feedback e Indicadores",
        variations: [
            { name: "Para Texto", code: `<div role="status" class="max-w-sm animate-pulse space-y-2.5"><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div><div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div><div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-44"></div></div>`},
            { name: "Para Card", code: `<div role="status" class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"><div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div><div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div>`},
            { name: "Para Lista", code: `<div role="status" class="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"><div class="flex items-center justify-between"><div class="w-24 h-2 bg-gray-300 rounded-full dark:bg-gray-600"></div><div class="w-32 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="flex items-center justify-between pt-4"><div class="w-24 h-2 bg-gray-300 rounded-full dark:bg-gray-600"></div><div class="w-32 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div></div></div>` }
        ]
    },
    {
        name: "Estado Vacío (Empty State)",
        category: "Feedback e Indicadores",
        variations: [
            { name: "Simple con Icono", code: `<div class="text-center bg-gray-50 dark:bg-gray-800/50 rounded-lg p-12"><i class="fa-solid fa-folder-open text-4xl text-gray-400 mb-4"></i><h3 class="text-xl font-semibold text-gray-700 dark:text-gray-200">No hay elementos</h3><p class="text-gray-500 dark:text-gray-400 mt-1">Empieza creando un nuevo elemento.</p></div>`},
            { name: "Con Botón de Acción", code: `<div class="text-center bg-gray-50 dark:bg-gray-800/50 rounded-lg p-12"><i class="fa-solid fa-magnifying-glass text-4xl text-gray-400 mb-4"></i><h3 class="text-xl font-semibold text-gray-700 dark:text-gray-200">No se encontraron resultados</h3><p class="text-gray-500 dark:text-gray-400 mt-1">Prueba con otra búsqueda o crea un nuevo elemento.</p><button class="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Crear Nuevo</button></div>`},
        ]
    },

    //  CATEGORÍA: Visualización de Datos 
    {
        name: "Tabla",
        category: "Visualización de Datos",
        variations: [
            { name: "Básica", code: `<div class="relative overflow-x-auto shadow-md sm:rounded-lg"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"><tr><th scope="col" class="px-6 py-3">Producto</th><th scope="col" class="px-6 py-3">Precio</th></tr></thead><tbody><tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"><th class="px-6 py-4 font-medium text-gray-900 dark:text-white">MacBook Pro</th><td class="px-6 py-4">$2999</td></tr></tbody></table></div>` },
            { name: "Con Checkboxes", code: `<div class="relative overflow-x-auto shadow-md sm:rounded-lg"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700"><tr><th scope="col" class="p-4"><input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"></th><th scope="col" class="px-6 py-3">ID Pedido</th><th scope="col" class="px-6 py-3">Estado</th></tr></thead><tbody><tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50"><td class="w-4 p-4"><input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"></td><th class="px-6 py-4 font-medium text-gray-900 dark:text-white">#12345</th><td class="px-6 py-4"><span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Entregado</span></td></tr><tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50"><td class="w-4 p-4"><input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"></td><th class="px-6 py-4 font-medium text-gray-900 dark:text-white">#12346</th><td class="px-6 py-4"><span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Pendiente</span></td></tr></tbody></table></div>` }
        ]
    },
    {
        name: "Lista de Definición",
        category: "Visualización de Datos",
        variations: [
            { name: "Vertical", code: `<dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700"><div class="flex flex-col pb-3"><dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt><dd class="text-lg font-semibold">tu.nombre@lumbreras.com</dd></div><div class="flex flex-col py-3"><dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Dirección</dt><dd class="text-lg font-semibold">Calle Falsa 123, Springfield</dd></div></dl>`},
            { name: "Horizontal", code: `<dl class="divide-y divide-gray-200 border-gray-200 border dark:divide-gray-700 dark:border-gray-700 rounded-lg"><div class="px-4 py-3 grid grid-cols-3 gap-4"><dt class="text-gray-500 dark:text-gray-400 font-medium">Nombre</dt><dd class="text-gray-900 dark:text-white col-span-2 font-semibold">Juan Pérez</dd></div><div class="px-4 py-3 grid grid-cols-3 gap-4"><dt class="text-gray-500 dark:text-gray-400 font-medium">Rol</dt><dd class="text-gray-900 dark:text-white col-span-2 font-semibold">Admin</dd></div></dl>`}
        ]
    },
    {
        name: "Gráfico (Placeholder)",
        category: "Visualización de Datos",
        variations: [
            { name: "Gráfico de Barras", code: `<div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow"><h3 class="font-bold mb-4 dark:text-white">Ventas Mensuales</h3><div class="flex items-end space-x-4 h-48"><div class="w-full bg-blue-200 dark:bg-blue-900/50 rounded-t-md" style="height: 60%"></div><div class="w-full bg-blue-200 dark:bg-blue-900/50 rounded-t-md" style="height: 80%"></div><div class="w-full bg-blue-400 dark:bg-blue-600 rounded-t-md" style="height: 95%"></div><div class="w-full bg-blue-200 dark:bg-blue-900/50 rounded-t-md" style="height: 70%"></div></div></div>` },
            { name: "Gráfico de Anillo", code: `<div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col items-center justify-center"><h3 class="font-bold mb-4 dark:text-white">Distribución</h3><div class="relative w-40 h-40"><svg class="w-full h-full" viewBox="0 0 36 36"><path class="text-gray-200 dark:text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-width="3.8"></path><path class="text-green-500" stroke-dasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-width="3.8" stroke-linecap="round"></path><path class="text-blue-500" stroke-dasharray="30, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-width="3.8" stroke-linecap="round" transform="rotate(60, 18, 18)"></path></svg><div class="absolute inset-0 flex items-center justify-center text-xl font-bold dark:text-white">75%</div></div></div>` }
        ]
    },

    // =============== CATEGORÍA: Tipografía y Contenido ===============
    {
        name: "Tipografía",
        category: "Tipografía y Contenido",
        variations: [
            { name: "Encabezados", code: `<div class="space-y-2"><h1 class="text-5xl font-extrabold dark:text-white">h1. Lumbreras</h1><h2 class="text-4xl font-bold dark:text-white">h2. Lumbreras</h2><h3 class="text-3xl font-bold dark:text-white">h3. Lumbreras</h3></div>` },
            { name: "Párrafo Principal (Lead)", code: `<p class="text-lg text-gray-600 dark:text-gray-300">Este es un párrafo principal, diseñado para captar la atención del lector con un tamaño de fuente ligeramente mayor y un peso normal.</p>` },
            { name: "Cita (Blockquote)", code: `<figure class="border-l-4 border-gray-300 dark:border-gray-600 pl-4"><blockquote class="text-xl italic font-medium text-gray-900 dark:text-white">"Tailwind CSS es la única framework que he visto que implementa algo nuevo y refrescante."</blockquote><figcaption class="mt-2 text-sm text-gray-500 dark:text-gray-400">- John Doe</figcaption></figure>` },
            { name: "Lista con Iconos", code: `<ul class="space-y-2 text-gray-600 dark:text-gray-300"><li class="flex items-start"><span class="text-green-500 mr-2 mt-1"><i class="fa-solid fa-check-circle"></i></span><span>Característica número uno.</span></li><li class="flex items-start"><span class="text-green-500 mr-2 mt-1"><i class="fa-solid fa-check-circle"></i></span><span>Segunda característica con mucho más texto para ver cómo se alinea.</span></li></ul>` }
        ]
    },
    {
        name: "Contenido General",
        category: "Tipografía y Contenido",
        variations: [
            { name: "Artículo Básico", code: `<article class="prose dark:prose-invert max-w-none"><h1 class="text-4xl font-extrabold">Título del Artículo</h1><p>Esto es un párrafo introductorio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p><h2>Subtítulo</h2><p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</p><ul><li>Elemento de lista 1</li><li>Elemento de lista 2</li></ul></article>` },
        ]
    },

    // =============== CATEGORÍA: Secciones de Página ===============
    {
        name: "Sección Hero",
        category: "Secciones de Página",
        variations: [
            { name: "Centrado", code: `<section class="bg-white dark:bg-gray-900"><div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16"><h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Construimos interfaces de usuario modernas</h1><p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Enfócate en tu producto y deja el diseño a nosotros.</p><div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"><a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800">Empezar <i class="fa-solid fa-arrow-right ml-2"></i></a></div></div></section>`},
            { name: "Con Imagen y CTA", code: `<section class="bg-white dark:bg-gray-900"><div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"><div class="mr-auto place-self-center lg:col-span-7"><h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Tu librería de componentes #1</h1><p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Cientos de componentes listos para copiar y pegar en tu próximo proyecto. Acelera tu desarrollo como nunca antes.</p><a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-transparent rounded-lg bg-blue-700 hover:bg-blue-800">Empezar ahora</a></div><div class="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg overflow-hidden"><img src="https://placehold.co/600x400/3b82f6/ffffff?text=Hero" alt="mockup"></div></div></section>`}
        ]
    },
    {
        name: "Sección de Características",
        category: "Secciones de Página",
        variations: [
            { name: "Cuadrícula con Iconos", code: `<section class="bg-white dark:bg-gray-900"><div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"><div class="mb-8 lg:mb-16 text-center"><h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Diseñado para Desarrolladores</h2><p class="text-gray-500 sm:text-xl dark:text-gray-400">Nos enfocamos en la facilidad de uso, la personalización y la experiencia del desarrollador.</p></div><div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"><div class="text-center"><div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900 mx-auto"><i class="fa-solid fa-bolt text-xl text-blue-600 dark:text-blue-300"></i></div><h3 class="mb-2 text-xl font-bold dark:text-white">Rápido</h3><p class="text-gray-500 dark:text-gray-400">Componentes optimizados para un rendimiento web excelente.</p></div><div class="text-center"><div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900 mx-auto"><i class="fa-solid fa-palette text-xl text-blue-600 dark:text-blue-300"></i></div><h3 class="mb-2 text-xl font-bold dark:text-white">Personalizable</h3><p class="text-gray-500 dark:text-gray-400">Basado en Tailwind CSS, fácil de adaptar a tu marca.</p></div><div class="text-center"><div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900 mx-auto"><i class="fa-solid fa-moon text-xl text-blue-600 dark:text-blue-300"></i></div><h3 class="mb-2 text-xl font-bold dark:text-white">Modo Oscuro</h3><p class="text-gray-500 dark:text-gray-400">Todos los componentes soportan modo oscuro de fábrica.</p></div></div></div></section>` }
        ]
    },
    {
        name: "Sección de Testimonios",
        category: "Secciones de Página",
        variations: [
            { name: "Cita Centrada", code: `<section class="bg-white dark:bg-gray-900"><div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"><figure class="max-w-screen-md mx-auto"><i class="fa-solid fa-quote-left text-3xl text-gray-400 dark:text-gray-600 mb-4"></i><blockquote><p class="text-2xl font-medium text-gray-900 dark:text-white">"Lumbreras ha sido una herramienta increíble para nuestro equipo. Nos ha permitido crear prototipos y lanzar productos mucho más rápido."</p></blockquote><figcaption class="flex items-center justify-center mt-6 space-x-3"><img class="w-8 h-8 rounded-full" src="https://placehold.co/100x100/16a34a/ffffff?text=J" alt="profile picture"><div class="font-medium dark:text-white">Juana De Arco, CEO en StartupX</div></figcaption></figure></div></section>`},
            { name: "Cuadrícula", code: `<section class="bg-white dark:bg-gray-900"><div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16"><div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"><h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Lo que dicen nuestros clientes</h2></div><div class="grid gap-8 mb-8 lg:mb-12 lg:grid-cols-2"><figure class="flex flex-col items-center justify-center p-8 text-center bg-gray-50 border-b border-gray-200 md:rounded-t-lg md:border-e dark:bg-gray-800 dark:border-gray-700"><blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">Muy fácil de usar</h3><p class="my-4">"Si quieres centrarte en el producto y no en las herramientas, este es el camino a seguir."</p></blockquote><figcaption class="flex items-center justify-center "><img class="rounded-full w-9 h-9" src="https://placehold.co/100x100/be123c/ffffff?text=B" alt="profile picture"><div class="ps-3 font-medium text-gray-900 dark:text-white">Bonnie Green</div></figcaption></figure><figure class="flex flex-col items-center justify-center p-8 text-center bg-gray-50 border-b border-gray-200 rounded-bl-lg dark:bg-gray-800 dark:border-gray-700"><blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">Base sólida para cualquier proyecto</h3><p class="my-4">"Realmente es un excelente punto de partida para cualquier nuevo proyecto."</p></blockquote><figcaption class="flex items-center justify-center "><img class="rounded-full w-9 h-9" src="https://placehold.co/100x100/1d4ed8/ffffff?text=R" alt="profile picture"><div class="ps-3 font-medium text-gray-900 dark:text-white">Roberta Casas</div></figcaption></figure></div></div></section>` }
        ]
    },
    {
        name: "Sección de Precios",
        category: "Secciones de Página",
        variations: [
            { name: "Tabla de 3 Planes", code: `<section class="bg-white dark:bg-gray-900"><div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16"><div class="mx-auto max-w-screen-md text-center mb-8"><h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Elige tu plan</h2><p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Planes simples y transparentes que se adaptan a tus necesidades. Cancela en cualquier momento.</p></div><div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 lg:space-y-0"><div class="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"><h3>Hobby</h3><p class="text-5xl font-extrabold my-4">$49</p><a href="#" class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Empezar</a></div><div class="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border-2 border-blue-500 shadow xl:p-8 dark:bg-gray-800 dark:text-white"><h3>Pro</h3><p class="text-5xl font-extrabold my-4">$99</p><a href="#" class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Empezar</a></div><div class="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"><h3>Empresa</h3><p class="text-5xl font-extrabold my-4">Custom</p><a href="#" class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Contactar</a></div></div></div></section>`}
        ]
    },
    {
        name: "Sección de FAQ (Preguntas Frecuentes)",
        category: "Secciones de Página",
        variations: [
            { name: "Con Acordeón (JS)", code: `<section class="bg-white dark:bg-gray-900"><div class="py-8 px-4 mx-auto max-w-screen-md sm:py-16"><h2 class="mb-8 text-4xl font-extrabold text-gray-900 dark:text-white text-center">Preguntas Frecuentes</h2><div class="space-y-4"><div><button class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"><span>¿Puedo usar esto en un proyecto comercial?</span><i class="fa-solid fa-chevron-down"></i></button><div class="p-5 "><p class="text-gray-500 dark:text-gray-400">Absolutamente. Todos los componentes son de código abierto.</p></div></div><div><button class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"><span>¿Necesito saber Tailwind CSS?</span><i class="fa-solid fa-chevron-down"></i></button><div class="p-5 hidden"><p class="text-gray-500 dark:text-gray-400">No es estrictamente necesario, pero te ayudará a personalizar los componentes.</p></div></div></div></div></section>` }
        ]
    },
    {
        name: "Sección de Equipo",
        category: "Secciones de Página",
        variations: [
            { name: "Cuadrícula de Perfiles", code: `<section class="bg-white dark:bg-gray-900"><div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16"><div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"><h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Nuestro Equipo</h2><p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Conoce a las mentes detrás de Lumbreras.</p></div><div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2"><div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"><a href="#"><img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://placehold.co/400x400/f87171/ffffff?text=User" alt="Bonnie Avatar"></a><div class="p-5"><h3 class="text-xl font-bold text-gray-900 dark:text-white"><a href="#">Bonnie Green</a></h3><span class="text-gray-500 dark:text-gray-400">CEO</span></div></div><div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"><a href="#"><img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://placehold.co/400x400/34d399/ffffff?text=User" alt="Jese Avatar"></a><div class="p-5"><h3 class="text-xl font-bold text-gray-900 dark:text-white"><a href="#">Jese Leos</a></h3><span class="text-gray-500 dark:text-gray-400">CTO</span></div></div></div></div></section>` }
        ]
    },
    {
        name: "Nube de Logos",
        category: "Secciones de Página",
        variations: [
            { name: "Simple", code: `<section class="bg-white dark:bg-gray-900"><div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4"><h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white">Con la confianza de las mejores empresas</h2><div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400"><a href="#" class="flex justify-center items-center"><i class="fa-brands fa-microsoft fa-3x"></i></a><a href="#" class="flex justify-center items-center"><i class="fa-brands fa-google fa-3x"></i></a><a href="#" class="flex justify-center items-center"><i class="fa-brands fa-spotify fa-3x"></i></a><a href="#" class="flex justify-center items-center"><i class="fa-brands fa-airbnb fa-3x"></i></a><a href="#" class="flex justify-center items-center"><i class="fa-brands fa-git-alt fa-3x"></i></a><a href="#" class="flex justify-center items-center"><i class="fa-brands fa-intercom fa-3x"></i></a></div></div></section>` }
        ]
    },
    {
        name: "Página 404",
        category: "Secciones de Página",
        variations: [
            { name: "Simple", code: `<section class="bg-white dark:bg-gray-900 "><div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"><div class="mx-auto max-w-screen-sm text-center"><h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600 dark:text-blue-500">404</h1><p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Página no encontrada.</p><p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Lo sentimos, no podemos encontrar esa página. Encontrarás mucho para explorar en la página de inicio. </p><a href="#" class="inline-flex text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Volver al inicio</a></div></div></section>` }
        ]
    },
    {
        name: "Footer",
        category: "Secciones de Página",
        variations: [
            { name: "Con Logo y Redes Sociales", code: `<footer class="bg-white dark:bg-gray-900"><div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"><div class="md:flex md:justify-between"><div class="mb-6 md:mb-0"><a href="#" class="flex items-center"><i class="fa-solid fa-fire text-2xl text-orange-500 mr-3"></i><span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Lumbreras</span></a></div><div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"><div><h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Recursos</h2><ul class="text-gray-500 dark:text-gray-400 font-medium"><li><a href="#" class="hover:underline">Tailwind CSS</a></li></ul></div><div><h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2><ul class="text-gray-500 dark:text-gray-400 font-medium"><li><a href="#" class="hover:underline">Política de Privacidad</a></li></ul></div></div></div><hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /><div class="sm:flex sm:items-center sm:justify-between"><span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Lumbreras™.</span><div class="flex mt-4 sm:justify-center sm:mt-0 space-x-5"><a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"><i class="fa-brands fa-github"></i></a><a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"><i class="fa-brands fa-x-twitter"></i></a></div></div></div></footer>` }
        ]
    },
];

