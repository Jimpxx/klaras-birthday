<script>
	import Register from '$lib/components/register.svelte';

</script>
<!-- Hero -->
<div class="h-[95dvh] bg-pink-400">
    <div class="h-full bg-[url('/assets/webp/pink_background_big.webp')]">
        <div class="relative">
            <img class="absolute top-0 left-0 w-5/6 h-auto sm:w-3/6 md:w-3/6 lg:w-2/5 xl:w-2/6" src="/assets/webp/ribbon_4x.webp" alt="Flaggor">
        </div>
        <div class="flex flex-col justify-center items-center h-full">
            <h1 class="text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-amber-500 font-bold font-pacifico">Välkommen till</h1>
            <h2 class="mt-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-amber-500 font-bold font-pacifico">Klaras 1års kalas!</h2>
            <div class="mt-8">
                <Register />
            </div>
        </div>
    </div>
    <div class="relative">
        <img class="absolute bottom-0 left-0 w-2/6 h-auto md:w-2/6 lg:w-1/5 xl:w-1/5" src="/assets/webp/cake.webp" alt="Tårta">
        <img class="absolute bottom-0 right-0 w-4/6 h-auto md:w-3/6 xl:w-2/5" src="/assets/webp/presents_4x.webp" alt="Presenter">
    </div>
</div>
  
  <!-- Section -->
<div class="min-h-[50dvh] bg-pink-400 pb-20">
    <div class="flex flex-col items-center h-full w-full">
        <div class="pt-20 w-4/5 flex flex-col items-center">
            <!-- <p class="text-4xl font-bold font-pacifico">Välkomna!</p> -->
            <div class="text-2xl font-kalam pt-6 flex flex-col items-center">
                <p>Vi vill fira Klaras födelsedag ihop med er lördag den 2a mars kl. 13:00.</p>
                <p class="mt-3">Vi bjuder på mat och tårta!</p>
                <p class="mt-3">Kontakta oss om ni har några frågor om mat och allergier!</p>
                <p class="mt-3">Anmäl er senast den 23e februari.</p>
                <p class="mt-3">Var: Axvalls IF (Klubblokalen vi idrottsplanen).</p>
            </div>
            <p class="font-pacifico mt-10 text-3xl">Hoppas vi ses!</p>
            <div class="mt-8">
                <Register />
            </div>
        </div>
    </div>
</div>



<!-- Forms
https://nocodeform.io/ (1000 submissions/month) (Chosen form)
https://formspree.io/ (Vercel) (50 submissions/month)
https://formcarry.com/ (50 submissions/month)
https://fabform.io/ (100 submissions/month)
Fonts
https://fontsource.org/ 
(Kalam for text & Pacifico for headings)-->