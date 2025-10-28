
    // ********************
    // Initialization code
    // ********************

    // Granim: animated gradient background
try{
    const granim = new Granim({
    element: '#granim-canvas',
    direction: 'diagonal',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
        gradients: [
            ['#0f1724', '#0f1724'],
            ['#ff7a59', '#ffb199'],
            ['#00c9ff', '#92fe9d']
        ],
        transitionSpeed: 4000
        }
    }
    });
} catch(e){console.warn('Granim failed to initialize', e)}

// Glide: carousel
try{
    const glide = new Glide('#glide-dest', {
    type: 'carousel',
    perView: 1.1,
    focusAt: 'center',
    gap: 12,
    autoplay: 3500,
    breakpoints: {
        720: { perView: 1.05 },
        1024: { perView: 2 }
    }
    });
    glide.mount();
} catch(e){console.warn('Glide failed to initialize', e)}

// AOS: animate on scroll
try{ AOS.init({duration:700,once:true,offset:40}); }catch(e){console.warn('AOS failed', e)}

// Leaflet: map + markers
try{
    const map = L.map('mapid', {tap:false}).setView([20,0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const featured = [
    {name:'Paris, France', coords:[48.8566,2.3522], desc:'Eiffel Tower and Seine walks'},
    {name:'Tokyo, Japan', coords:[35.6762,139.6503], desc:'Shinjuku lights & shrines'},
    {name:'Vancouver, Canada', coords:[49.2827,-123.1207], desc:'Mountains & sea'},
    {name:'Lisbon, Portugal', coords:[38.7223,-9.1393], desc:'Hills & pastel buildings'}
    ];

    featured.forEach(place => {
    const m = L.marker(place.coords).addTo(map);
    m.bindPopup(`<strong>${place.name}</strong><br><small>${place.desc}</small>`);
    });
} catch(e){console.warn('Leaflet failed to init', e)}

// Simple contact submit handler (demo)
function handleSubmit(){
    const form = document.getElementById('contact-form');
    const data = new FormData(form);
    const name = data.get('name')?.trim();
    const email = data.get('email')?.trim();
    const message = data.get('message')?.trim();

    if(!name || !email || !message){
    alert('Please complete all fields.');
    return;
    }

    // Simulate success
    alert('Thanks ' + name + '! Your message has been received (demo).');
    form.reset();
}

// Accessibility: keyboard support for glide arrow buttons (small enhancement)
document.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowLeft'){
    const btn = document.querySelector('.glide__arrow--left'); if(btn) btn.click();
    }
    if(e.key === 'ArrowRight'){
    const btn = document.querySelector('.glide__arrow--right'); if(btn) btn.click();
    }
});