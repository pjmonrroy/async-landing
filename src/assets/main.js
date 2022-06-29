// Api las Youtube Videos

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCEuOwB9vSL1oPKGNdONB4ig&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const PI =  {
    'X-RapidAPI-Key': '7c9231aed2msh07698d902e62d0bp1af748jsn623cb2392a8f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
}


const options = {
	method: 'GET',
	headers: PI
};


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        // debemos crear un template
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0">
                    </span>
                    ${video.snippet.title}
                </h3>
                </div>
            </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        // mala practica poner el error en consola  console.log(error);
        // reto poner un texto de error en la pagina
       // document.write(error);
        console.log(error);
    }
})();


