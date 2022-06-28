// Api las Youtube Videos

const APISecond = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCCZGYab5SpD0I7Z5JqJZgww&part=snippet%2Cid&order=date&maxResults=5';

const contentSecondBest = null || document.getElementById('content_second-best');

const optionsSec = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c9231aed2msh07698d902e62d0bp1af748jsn623cb2392a8f',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchDataSec(urlApi) {
    const responseSec = await fetch(urlApi, optionsSec);
    const data2 = await responseSec.json();
    return data2;
}

(async () => {
    try {
        const videos = await fetchDataSec(APISecond);
        let viewSec = `
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
        contentSecondBest.innerHTML = viewSec;
    } catch (error) {
        // mala practica poner el error en consola  console.log(error);
        // reto poner un texto de error en la pagina
       // document.write(error);
        console.log(error);
    }
})();