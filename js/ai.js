 const loadData = async (loadCount) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    const AiUnivarde = data.data.tools;
    if(loadCount === 'all' || !loadCount){
      singleShowData(AiUnivarde);
    }
    else{
      singleShowData(AiUnivarde.slice(0,loadCount));
    }

    
      
 }

 const singleShowData = (AiUnivarde) =>{
    const aiTools = document.getElementById('ai-tools');
    const showMoreAi = document.getElementById('show-more-ai');
     aiTools.innerHTML = '';
    // AiUnivarde = AiUnivarde.slice(0,6);
    AiUnivarde.forEach(ai => { 
    const aiContainer = document.createElement('div');
    aiContainer.classList = `card   bg-base-100 shadow-xl`;
    aiContainer.innerHTML = `
    <figure>
    <img src="${ai?.image || 'image not available'} "/>
    </figure>
    <div class="card-body">
    <p class="text-3xl">Features <br><span class="text-sm">${ai.features.map(features =>`<li>${features}</li>`)
    }</span></p>
    <p class="border-b-2 border-black"></p>
    <div class="flex items-center justify-between">
    <div>
    <h2 class="card-title">${ai.name}</h2>
    <p > <i class="fa-solid fa-calendar-days"></i> ${ai.published_in} </p>
    </div>
    <div class="card-actions  ">
    <button onclick="showDeletils('${ai.id}')" class="btn  rounded-full bg-orange-100"><i class="fa-solid fa-arrow-right text-red-500"></i></button>
    </div>
    </div>
    </div>
    `
    aiTools.appendChild(aiContainer);

        // console.log(ai);
    });
 console.log(AiUnivarde);
 }

const showDeletils = async (id) =>{
const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
const data = await res.json();
const aiDtls = data?.data;
console.log(aiDtls);
showAiDeleties(aiDtls);
}

const showAiDeleties = (aiDeletils) =>{
console.log(aiDeletils);
const showAiOfDetelis = document.getElementById('show-ai-of-deletils');
 showAiOfDetelis.innerHTML = `
  
<div class="flex-1 bg-purple-200 border-2 border-red-500 p-7 rounded-lg">
<p class="text-2xl font-bold">${aiDeletils?.description} </p>
<div class="grid grid-cols-3 gap-5 mt-5">
<h2 class="text-green-400 bg-white rounded-lg p-4">${aiDeletils.pricing?.price? aiDeletils.pricing[0].price : '' } </h2>
 
 
</div>
<div class="mt-4 grid grid-cols-2 gap-6">
<div>
<h2 class="text-2xl font-bold mb-4">Features</h2>
<p class="ml-3 font-medium">1.<span> ${aiDeletils?.features[1]?.feature_name} </span></p>
<p class="ml-3 font-medium">2.<span> ${aiDeletils?.features[2]?.feature_name} </span></p>
<p class="ml-3 font-medium">3.<span> ${aiDeletils?.features[3]?.feature_name} </span></p>
                                 
</div>
<div>
<h2 class="text-2xl font-bold mb-4">Integrations</h2>
<p class="ml-3 font-medium">1.<span>${aiDeletils?.integrations? aiDeletils?.integrations[0] : 'no' }</span> </p>
<p class="ml-3 font-medium">2.<span>${aiDeletils?.integrations? aiDeletils?.integrations[1] : 'no' }</span> </p>
<p class="ml-3 font-medium">3.<span>${aiDeletils?.integrations? aiDeletils?.integrations[2] : 'no' }</span> </p>
</div>
</div>
</div>
<div class="flex-1 border-2 border-black p-7 rounded-lg">
<div class="card w-96 bg-base-100 shadow-xl">
<figure class="px-10 pt-10">
<img src="${aiDeletils?.image_link[0]} " class="rounded-xl" />
</figure>
<div class="card-body items-center text-center">
<h2 class="card-title">${aiDeletils?.input_output_examples?.input? aiDeletils?.input_output_examples?.input : 'no' }</h2>
</div>
</div>                        

 `
  

    my_modal_ai.showModal()
}


const seeMoreBtm = () =>{
    loadData('all');
    document.getElementById('show-more-ai').style.display = 'none';
}

 loadData(6);