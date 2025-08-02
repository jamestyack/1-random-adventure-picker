// Random Adventure Picker - Bay Area Implementation

// Activity Categories for Bay Area Adventures
const activityCategories = [
    { name: 'ART', color: '#D4A574' },        // Washed out orange/peach
    { name: 'ANIMALS', color: '#7DB46C' },    // Washed out green
    { name: 'THEME PARKS', color: '#E85A8F' }, // Washed out pink/magenta
    { name: 'WALKS', color: '#6B9BD4' },      // Washed out blue
    { name: 'ADVENTURE', color: '#C47B7B' },  // Washed out red/rust
    { name: 'WATER', color: '#6DC4D6' },      // Washed out teal/cyan
    { name: 'SPORT', color: '#B89BD9' }       // Washed out purple
];

// Bay Area Activities Database organized by category and difficulty
const bayAreaActivities = {
    'ART': {
        'chill': [
            {
                name: 'Mission District Murals',
                description: 'Self-guided tour of vibrant street art and murals',
                duration: '1-2 hours',
                detailedDescription: 'Explore colorful murals along Balmy Alley, Clarion Alley, and throughout the Mission District. These murals tell stories of Latino culture, social justice, and community pride.',
                locationDetails: 'Start at 24th Street BART station, San Francisco. Street parking available.',
                tips: ['Best light for photos in late afternoon', 'Respect residents and private property', 'Combine with Mission food tour', 'Murals change regularly']
            },
            {
                name: 'de Young Museum',
                description: 'Fine arts museum in Golden Gate Park',
                duration: '2-3 hours',
                detailedDescription: 'World-class museum featuring American art, contemporary works, and rotating exhibitions. The observation tower offers panoramic city views.',
                locationDetails: '50 Hagiwara Tea Garden Dr, Golden Gate Park, SF. Paid parking available.',
                tips: ['Free tower views with admission', 'First Tuesday free for SF residents', 'Combine with Japanese Tea Garden visit', 'Museum store has unique gifts']
            }
        ],
        'moderate': [
            {
                name: 'SFMOMA',
                description: 'Modern and contemporary art museum',
                duration: '3-4 hours',
                detailedDescription: 'Seven floors of modern and contemporary art including works by Jackson Pollock, Andy Warhol, and Frida Kahlo. The building architecture is as impressive as the collection.',
                locationDetails: '151 3rd St, SOMA, San Francisco. Paid parking garage available.',
                tips: ['Free for SF residents first Thursday', 'Download museum app for audio tours', 'Rooftop sculpture garden', 'Multiple dining options on-site']
            },
            {
                name: 'Oakland First Fridays',
                description: 'Monthly art walk and street festival',
                duration: '2-4 hours',
                detailedDescription: 'Massive monthly celebration featuring gallery openings, street art, food trucks, live performances, and local vendors throughout downtown Oakland arts district.',
                locationDetails: 'Telegraph Ave, downtown Oakland, first Friday of each month 6-10pm.',
                tips: ['Very crowded - arrive early', 'Free event, pay for food/drinks', 'Wear comfortable walking shoes', 'Some galleries open other days too']
            }
        ],
        'epic': [
            {
                name: 'Berkeley Art Museum Full Experience',
                description: 'Deep dive into avant-garde and experimental art',
                duration: '4-6 hours',
                detailedDescription: 'Complete exploration of BAMPFA with its cutting-edge contemporary art, film screenings, and special exhibitions. Known for pushing artistic boundaries.',
                locationDetails: '2120 Oxford St, Berkeley. Street parking or paid lots nearby.',
                tips: ['Check film screening schedule', 'Student discounts available', 'Free first Thursday evenings', 'Combine with UC Berkeley campus walk']
            }
        ]
    },
    
    'ANIMALS': {
        'chill': [
            {
                name: 'San Francisco Zoo',
                description: 'Urban zoo with diverse animal exhibits',
                duration: '2-4 hours',
                detailedDescription: 'Home to over 2,000 animals including lions, penguins, and gorillas. Features the Little Puffer miniature train and interactive farm area for families.',
                locationDetails: 'Sloat Blvd & 47th Ave, San Francisco. Free parking available.',
                tips: ['Can be cold and foggy near ocean', 'Feeding times offer best animal viewing', 'Train ride popular with kids', 'Annual passes pay off after 2 visits']
            },
            {
                name: 'Aquarium of the Bay',
                description: 'Walk-through tunnels with bay marine life',
                duration: '1-2 hours',
                detailedDescription: 'Crystal-clear tunnels let you walk through the San Francisco Bay ecosystem. See sharks, rays, and thousands of local fish swimming overhead and around you.',
                locationDetails: 'Pier 39, Fishermans Wharf, San Francisco. Paid parking or public transit recommended.',
                tips: ['Combine with other Pier 39 attractions', 'Behind-scenes tours available', 'Touch tanks for hands-on experience', 'Less crowded weekday mornings']
            }
        ],
        'moderate': [
            {
                name: 'Oakland Zoo',
                description: 'Conservation-focused zoo in the hills',
                duration: '3-4 hours',
                detailedDescription: 'Home to over 750 native and exotic animals with strong conservation focus. The gondola ride offers spectacular views of the entire Bay Area.',
                locationDetails: '9777 Golf Links Rd, Oakland Hills. Free parking available.',
                tips: ['Take gondola for amazing bay views', 'California Trail features native species', 'Less crowded than SF Zoo', 'Great picnic areas throughout']
            },
            {
                name: 'Marine Mammal Center',
                description: 'Wildlife hospital and education center',
                duration: '2-3 hours',
                detailedDescription: 'See rescued seals, sea lions, and other marine mammals being rehabilitated. Educational tours explain marine conservation efforts.',
                locationDetails: '2000 Bunker Rd, Sausalito (Marin Headlands). Free parking.',
                tips: ['Free admission, donations welcome', 'Best viewing during feeding times', 'Dress warmly - can be windy', 'Call ahead for tour availability']
            }
        ],
        'epic': [
            {
                name: 'Monterey Bay Aquarium Day Trip',
                description: 'World-famous aquarium with kelp forest exhibit',
                duration: '6-8 hours',
                detailedDescription: 'Full day trip to one of the worlds best aquariums featuring the mesmerizing kelp forest, sea otter exhibit, and seasonal special exhibitions.',
                locationDetails: '886 Cannery Row, Monterey. 2-hour drive from SF. Paid parking available.',
                tips: ['Buy tickets online in advance', 'Peak times are very crowded', 'Combine with Cannery Row visit', 'Pack lunch or eat at aquarium café']
            }
        ]
    },

    'THEME PARKS': {
        'chill': [
            {
                name: 'Pier 39 Entertainment',
                description: 'Waterfront entertainment complex with attractions',
                duration: '2-4 hours',
                detailedDescription: 'Family-friendly pier with street performers, shops, restaurants, and small attractions like the carousel and mirror maze. Sea lions often visible on the docks.',
                locationDetails: 'Pier 39, Fishermans Wharf, San Francisco. Paid parking available.',
                tips: ['Free to walk around, pay per attraction', 'Sea lions best viewed in afternoon', 'Very touristy but fun for families', 'Combine with Aquarium of the Bay']
            }
        ],
        'moderate': [
            {
                name: 'Childrens Creativity Museum',
                description: 'Interactive museum with animation studios',
                duration: '2-3 hours',
                detailedDescription: 'Hands-on museum where kids create their own stop-motion movies, music videos, and art. Features vintage carousel and multimedia exhibits.',
                locationDetails: '221 4th St, SOMA, San Francisco. Paid parking nearby.',
                tips: ['Great for kids 2-12', 'Create take-home movies', 'Less crowded weekday mornings', 'Combine with nearby museums']
            },
            {
                name: 'California Adventure Park',
                description: 'Adventure-themed attractions in Santa Clara',
                duration: '4-6 hours',
                detailedDescription: 'Great America theme park with roller coasters, family rides, and seasonal events. Mix of thrill rides and gentler attractions.',
                locationDetails: '4701 Great America Pkwy, Santa Clara. 1-hour drive from SF. Paid parking.',
                tips: ['Check seasonal operating schedule', 'Buy tickets online for discounts', 'Very crowded on weekends', 'Bring sunscreen and water']
            }
        ],
        'epic': [
            {
                name: 'Six Flags Discovery Kingdom',
                description: 'Major theme park with world-class roller coasters',
                duration: '8-10 hours',
                detailedDescription: 'Full-scale theme park in Vallejo featuring intense roller coasters, animal shows, and water rides. Combines thrill rides with marine life presentations.',
                locationDetails: '1001 Fairgrounds Dr, Vallejo. 1-hour drive from SF. Paid parking.',
                tips: ['Full day commitment', 'Season passes often better value', 'Very crowded summer weekends', 'Bring change of clothes for water rides']
            }
        ]
    },

    'WALKS': {
        'chill': [
            {
                name: 'Golden Gate Park Stroll',
                description: 'Leisurely walk through iconic urban park',
                duration: '1-3 hours',
                detailedDescription: 'Easy exploration of Golden Gate Parks main attractions including Japanese Tea Garden, Conservatory of Flowers, and Stow Lake. Perfect for families.',
                locationDetails: 'Multiple entrances throughout Golden Gate Park, SF. Paid parking at major attractions.',
                tips: ['Rent bikes for faster exploration', 'Many attractions have entry fees', 'Great for picnics', 'Can be foggy in summer afternoons']
            },
            {
                name: 'Lake Merritt Loop',
                description: 'Flat urban lake walk with city views',
                duration: '1-2 hours',
                detailedDescription: 'Easy 3.4-mile paved path around Oaklands jewel - Lake Merritt. Great for walking, jogging, or cycling with downtown views and bird life.',
                locationDetails: 'Multiple access points around lake, Oakland. Street parking and paid lots available.',
                tips: ['Completely flat and paved', 'Great for bird watching', 'Rent paddle boats or kayaks', 'Saturday farmers market nearby']
            }
        ],
        'moderate': [
            {
                name: 'Lands End Coastal Trail',
                description: 'Scenic waterfront walk with Golden Gate views',
                duration: '2-3 hours',
                detailedDescription: 'Mostly paved walking path along rugged coastline with stunning Golden Gate Bridge views, Marin Headlands, and Pacific Ocean. Passes historic Sutro Baths ruins.',
                locationDetails: 'Start at Lands End Lookout, 680 Point Lobos Ave, SF. Free parking at visitor center.',
                tips: ['Wear layers - very windy', 'Best views in morning light', 'Watch for high tides', 'Restrooms at Lands End Lookout']
            },
            {
                name: 'Presidio Battery Trail',
                description: 'Historic military site with bay views',
                duration: '2-4 hours',
                detailedDescription: 'Explore historic military batteries and bunkers with spectacular views of Golden Gate Bridge and San Francisco Bay. Rich military history and great photo opportunities.',
                locationDetails: 'Multiple trailheads in Presidio, SF. Visitor center parking available.',
                tips: ['Download Presidio app for history', 'Multiple difficulty levels available', 'Great for history buffs', 'Can be combined with Crissy Field']
            }
        ],
        'epic': [
            {
                name: 'Mount Tamalpais Summit Hike',
                description: 'Challenging hike to Bay Areas highest peak',
                duration: '4-6 hours',
                detailedDescription: 'Strenuous hike to 2,571-foot summit offering 360-degree views of entire Bay Area, Pacific Ocean, and on clear days, the Sierra Nevada mountains.',
                locationDetails: 'Multiple trailheads in Marin. Pantoll parking area most popular. 45-minute drive from SF.',
                tips: ['Start early to avoid crowds', 'Bring plenty of water', 'Check weather conditions', 'Can drive partway up if needed']
            }
        ]
    },

    'ADVENTURE': {
        'moderate': [
            {
                name: 'Golden Gate Bridge Bike Ride',
                description: 'Iconic bike ride across the famous bridge',
                duration: '2-4 hours',
                detailedDescription: 'Bike from San Francisco across Golden Gate Bridge to Sausalito, with option to take ferry back. Includes stunning views and photo opportunities.',
                locationDetails: 'Start at Crissy Field or bike rental shops in Fishermans Wharf, SF.',
                tips: ['Dress very warmly - extremely windy on bridge', 'Book bike rental in advance', 'Ferry back to SF available', 'Helmets required and provided']
            },
            {
                name: 'Rock Climbing at Indian Rock',
                description: 'Outdoor rock climbing in Berkeley Hills',
                duration: '2-3 hours',
                detailedDescription: 'Popular outdoor climbing spot with routes for beginners to advanced climbers. Great introduction to Bay Area rock climbing scene.',
                locationDetails: 'Indian Rock Park, Berkeley Hills. Street parking available.',
                tips: ['Bring your own gear or rent locally', 'Best for experienced climbers', 'Can be crowded on weekends', 'Check weather conditions']
            }
        ],
        'epic': [
            {
                name: 'Alcatraz Island Tour',
                description: 'Ferry to infamous former federal prison',
                duration: '3-4 hours',
                detailedDescription: 'Audio tour of the notorious former federal prison with stories from actual inmates and guards. Includes ferry ride with spectacular city views.',
                locationDetails: 'Departs from Pier 33, San Francisco. Book tickets well in advance.',
                tips: ['Book weeks or months ahead', 'Dress warmly - very windy on island', 'Audio tour is excellent', 'Night tours available seasonally']
            },
            {
                name: 'Hang Gliding at Fort Funston',
                description: 'Tandem hang gliding over Pacific Ocean',
                duration: '3-5 hours',
                detailedDescription: 'Tandem hang gliding flights over Pacific Ocean cliffs with certified instructors. Includes brief training and unforgettable aerial views.',
                locationDetails: 'Fort Funston, San Francisco. Free parking available.',
                tips: ['Weather dependent - call ahead', 'No experience necessary', 'Expensive but unforgettable', 'Bring warm clothes']
            },
            {
                name: 'Shark Diving at Farallon Islands',
                description: 'Cage diving with great white sharks',
                duration: '8-12 hours',
                detailedDescription: 'Full-day boat trip to Farallon Islands for cage diving with great white sharks. Includes all gear and marine biologist guides.',
                locationDetails: 'Departs from various SF Bay marinas. Full-day commitment.',
                tips: ['Season runs Sept-Nov', 'Must be comfortable swimming', 'Seasickness common - take medication', 'Book months in advance']
            }
        ]
    },

    'WATER': {
        'chill': [
            {
                name: 'Stow Lake Pedal Boats',
                description: 'Peaceful pedal boating in Golden Gate Park',
                duration: '1-2 hours',
                detailedDescription: 'Rent pedal boats on scenic Stow Lake surrounded by eucalyptus trees and parkland. Family-friendly activity with ducks and other waterfowl.',
                locationDetails: 'Stow Lake, Golden Gate Park, SF. Paid parking nearby.',
                tips: ['Boats rent by the hour', 'Great for families with kids', 'Can feed ducks (bring bread)', 'Open weather permitting']
            },
            {
                name: 'Crissy Field Beach Walk',
                description: 'Beach walking with Golden Gate Bridge views',
                duration: '1-2 hours',
                detailedDescription: 'Sandy beach walk along San Francisco Bay with incredible Golden Gate Bridge views. Popular with families, dog walkers, and photographers.',
                locationDetails: 'Crissy Field, Presidio, SF. Free parking available.',
                tips: ['Very windy - bring layers', 'Great for dogs (off-leash area)', 'Popular with kite flyers', 'Restrooms and snack bar available']
            }
        ],
        'moderate': [
            {
                name: 'Kayaking on San Francisco Bay',
                description: 'Guided kayak tours around the bay',
                duration: '2-4 hours',
                detailedDescription: 'Paddle around McCovey Cove, under Bay Bridge, or toward Alcatraz with guided tours. See the city from water level with possible sea lion encounters.',
                locationDetails: 'Multiple launch points including AT&T Park and Sausalito.',
                tips: ['No experience necessary', 'Dress for water and wind', 'Tours include all equipment', 'Book in advance']
            },
            {
                name: 'Sailing on San Francisco Bay',
                description: 'Learn to sail or join a sailing tour',
                duration: '3-6 hours',
                detailedDescription: 'Sailing lessons or skippered charters on San Francisco Bay. Experience sailing under Golden Gate Bridge with stunning city skyline views.',
                locationDetails: 'Multiple marinas including Sausalito, SF Marina, and Berkeley.',
                tips: ['Dress very warmly', 'Motion sickness possible', 'Some sailing experience helpful', 'Sunset sails very popular']
            }
        ],
        'epic': [
            {
                name: 'Surfing at Ocean Beach',
                description: 'Surf lessons at San Franciscos main beach',
                duration: '4-6 hours',
                detailedDescription: 'Learn to surf at Ocean Beach with wetsuit and board rentals. Cold water surfing experience with consistent waves year-round.',
                locationDetails: 'Ocean Beach, San Francisco. Street parking available.',
                tips: ['Very cold water - thick wetsuit required', 'Strong currents and sharks possible', 'Best for intermediate+ swimmers', 'Lessons recommended for beginners']
            }
        ]
    },

    'SPORT': {
        'chill': [
            {
                name: 'Golden Gate Park Tennis',
                description: 'Public tennis courts in scenic park setting',
                duration: '1-2 hours',
                detailedDescription: 'Multiple public tennis courts throughout Golden Gate Park. Courts available for drop-in play or reservations.',
                locationDetails: 'Various locations in Golden Gate Park, SF. Some courts require fees.',
                tips: ['Bring your own racket and balls', 'Courts can be busy on weekends', 'Some courts are free, others require payment', 'Check court conditions online']
            },
            {
                name: 'Disc Golf at Golden Gate Park',
                description: 'Free disc golf course through the park',
                duration: '1-3 hours',
                detailedDescription: '18-hole disc golf course winding through Golden Gate Park trees and meadows. Free to play, just bring discs.',
                locationDetails: 'Course starts near Buffalo Paddock, Golden Gate Park, SF.',
                tips: ['Bring your own discs or buy at nearby shops', 'Course map available online', 'Watch for pedestrians and cyclists', 'Can play year-round']
            }
        ],
        'moderate': [
            {
                name: 'Giants Baseball Game',
                description: 'Major League Baseball at Oracle Park',
                duration: '3-4 hours',
                detailedDescription: 'Catch a San Francisco Giants game at beautiful Oracle Park overlooking the bay. Known for garlic fries and unique ballpark features.',
                locationDetails: 'Oracle Park, 24 Willie Mays Plaza, SF. Public transit recommended.',
                tips: ['Buy tickets in advance for popular games', 'Garlic fries are must-try', 'Right field foul balls can land in bay', 'Stadium tours available on non-game days']
            },
            {
                name: 'Warriors Basketball Game',
                description: 'NBA basketball at Chase Center',
                duration: '3-4 hours',
                detailedDescription: 'Watch the Golden State Warriors play at state-of-the-art Chase Center. High-energy games with enthusiastic crowds.',
                locationDetails: 'Chase Center, Mission Bay, SF. Limited parking, public transit recommended.',
                tips: ['Tickets expensive for popular games', 'Arena has excellent food options', 'Very loud - consider ear protection', 'Arrive early to explore the venue']
            }
        ],
        'epic': [
            {
                name: 'Bay to Breakers Race',
                description: 'Iconic 12K race across San Francisco',
                duration: '6-8 hours',
                detailedDescription: 'Annual May footrace from bay to ocean with elaborate costumes and party atmosphere. More festival than serious race.',
                locationDetails: 'Race starts downtown SF, ends at Ocean Beach. Occurs once yearly in May.',
                tips: ['Register well in advance', 'Costumes encouraged and expected', 'Party atmosphere, not serious racing', 'Bring camera for amazing people watching']
            }
        ]
    }
};


// DOM Elements  
const wheelContainer = document.getElementById('wheel-container');
const wheelWrapper = document.getElementById('wheel-wrapper');
const wheelSegments = document.getElementById('wheel-segments');
const confettiDots = document.getElementById('confetti-dots');
const activityResult = document.getElementById('activity-result');
const activityTitle = document.getElementById('activity-title');
const activityIcon = document.getElementById('activity-icon');
const activityDescription = document.getElementById('activity-description');
const activityDuration = document.getElementById('activity-duration');
const tellMoreBtn = document.getElementById('tell-more-btn');
const activityDetails = document.getElementById('activity-details');
const detailedDescription = document.getElementById('detailed-description');
const locationDetails = document.getElementById('location-details');
const activityTips = document.getElementById('activity-tips');
const confettiCanvas = document.getElementById('confetti-canvas');
const categoryBadge = document.getElementById('category-badge');
const ctaMessage = document.querySelector('.cta-message');
const soundToggle = document.getElementById('sound-toggle');
const soundIcon = document.getElementById('sound-icon');
const googleSearchBtn = document.getElementById('google-search-btn');

// State
let isSpinning = false;
let currentRotation = 0;
let currentActivity = null;
let detailsVisible = false;
let wheelSegmentElements = [];
let soundEnabled = true; // Sound on by default

// Audio context for sound effects
let audioContext;
let spinningSound;

// Initialize audio
function initAudio() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
        console.log('Web Audio API not supported');
    }
}

// Create spinning sound using Web Audio API
function createSpinningSound() {
    if (!audioContext || !soundEnabled) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 3);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 3);
    
    return { oscillator, gainNode };
}

// Create celebration sound
function playCelebrationSound() {
    if (!audioContext || !soundEnabled) return;
    
    // Create a sequence of happy notes
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const duration = 0.15;
    
    notes.forEach((frequency, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime + index * duration);
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + index * duration);
        gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + index * duration + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + index * duration + duration);
        
        oscillator.start(audioContext.currentTime + index * duration);
        oscillator.stop(audioContext.currentTime + index * duration + duration);
    });
}

// Create click sound for wheel interaction
function playClickSound() {
    if (!audioContext || !soundEnabled) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Toggle sound on/off
function toggleSound() {
    soundEnabled = !soundEnabled;
    
    // Update icon and styling
    if (soundEnabled) {
        soundIcon.textContent = '🔊';
        soundToggle.classList.remove('muted');
        soundToggle.title = 'Sound On - Click to Mute';
    } else {
        soundIcon.textContent = '🔇';
        soundToggle.classList.add('muted');
        soundToggle.title = 'Sound Off - Click to Enable';
        
        // Stop any currently playing spinning sound
        if (spinningSound && spinningSound.oscillator) {
            try {
                spinningSound.oscillator.stop();
            } catch (e) {
                // Sound may have already stopped
            }
        }
    }
    
    // Store preference in localStorage
    localStorage.setItem('adventurePickerSoundEnabled', soundEnabled.toString());
}

// Load sound preference from localStorage
function loadSoundPreference() {
    const saved = localStorage.getItem('adventurePickerSoundEnabled');
    if (saved !== null) {
        soundEnabled = saved === 'true';
        if (!soundEnabled) {
            soundIcon.textContent = '🔇';
            soundToggle.classList.add('muted');
            soundToggle.title = 'Sound Off - Click to Enable';
        }
    }
}

// Physics configuration
const spinConfig = {
    minSpinTime: 2500,
    maxSpinTime: 4500,
    friction: 0.994,
    minVelocity: 0.3
};

// Confetti system
class ConfettiSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.colors = ['#e67e22', '#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
        
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticle(x, y) {
        return {
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 12,
            vy: -Math.random() * 12 - 3,
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
            size: Math.random() * 8 + 4,
            life: 1.0,
            decay: Math.random() * 0.02 + 0.01
        };
    }
    
    explode(x, y, count = 40) {
        for (let i = 0; i < count; i++) {
            this.particles.push(this.createParticle(x, y));
        }
        this.animate();
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.4;
            p.vx *= 0.99;
            p.life -= p.decay;
            
            this.ctx.save();
            this.ctx.globalAlpha = p.life;
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
            
            if (p.life <= 0 || p.y > this.canvas.height + 50) {
                this.particles.splice(i, 1);
            }
        }
        
        if (this.particles.length > 0) {
            requestAnimationFrame(() => this.animate());
        }
    }
}

const confetti = new ConfettiSystem(confettiCanvas);

// Generate wheel segments
function generateWheel() {
    wheelSegments.innerHTML = '';
    wheelSegmentElements = [];
    
    const segmentAngle = 360 / activityCategories.length;
    const radius = 180; // Adjusted radius for better fit
    const centerX = 200; // Center coordinates
    const centerY = 200;
    
    activityCategories.forEach((category, index) => {
        const startAngle = index * segmentAngle;
        const endAngle = (index + 1) * segmentAngle;
        const color = category.color;
        
        // Create segment path
        const startAngleRad = (startAngle - 90) * Math.PI / 180;
        const endAngleRad = (endAngle - 90) * Math.PI / 180;
        
        const x1 = centerX + radius * Math.cos(startAngleRad);
        const y1 = centerY + radius * Math.sin(startAngleRad);
        const x2 = centerX + radius * Math.cos(endAngleRad);
        const y2 = centerY + radius * Math.sin(endAngleRad);
        
        const largeArcFlag = segmentAngle > 180 ? 1 : 0;
        
        const pathData = [
            `M ${centerX} ${centerY}`,
            `L ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            'Z'
        ].join(' ');
        
        // Create segment
        const segment = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        segment.setAttribute('d', pathData);
        segment.setAttribute('fill', color);
        segment.setAttribute('stroke', '#2c3e50');
        segment.setAttribute('stroke-width', '3');
        segment.style.filter = 'drop-shadow(3px 3px 6px rgba(0,0,0,0.3))';
        segment.dataset.categoryIndex = index;
        segment.dataset.categoryName = category.name;
        
        wheelSegments.appendChild(segment);
        wheelSegmentElements.push(segment);
        
        // Add text
        const textAngle = startAngle + segmentAngle / 2;
        const textAngleRad = (textAngle - 90) * Math.PI / 180;
        const textRadius = radius * 0.65;
        const textX = centerX + textRadius * Math.cos(textAngleRad);
        const textY = centerY + textRadius * Math.sin(textAngleRad);
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', textX);
        text.setAttribute('y', textY);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('fill', 'white');
        text.setAttribute('font-family', 'Arial, sans-serif');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('font-size', '14'); // Larger, more readable text
        text.setAttribute('transform', `rotate(${textAngle}, ${textX}, ${textY})`);
        text.style.textShadow = '2px 2px 4px rgba(0,0,0,0.8)';
        text.textContent = category.name;
        
        wheelSegments.appendChild(text);
    });
}

// Spin wheel with physics
function spinWheel() {
    if (isSpinning) return;
    
    // Initialize audio context on first user interaction
    if (!audioContext) {
        initAudio();
    }
    
    isSpinning = true;
    
    // Play click sound immediately
    playClickSound();
    
    // Play spinning sound
    setTimeout(() => {
        spinningSound = createSpinningSound();
    }, 100);
    
    const spinDuration = Math.random() * (spinConfig.maxSpinTime - spinConfig.minSpinTime) + spinConfig.minSpinTime;
    const finalRotation = Math.random() * 360 + 1440 + currentRotation; // At least 4 full rotations
    
    let startTime = Date.now();
    let initialVelocity = (finalRotation - currentRotation) / spinDuration * 16.67;
    let velocity = initialVelocity;
    let rotation = currentRotation;
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / spinDuration, 1);
        
        velocity *= spinConfig.friction;
        rotation += velocity;
        
        wheelWrapper.style.transform = `rotate(${rotation}deg)`;
        
        if (progress < 1 && velocity > spinConfig.minVelocity) {
            requestAnimationFrame(animate);
        } else {
            currentRotation = rotation % 360;
            finishSpin();
        }
    }
    
    animate();
    createConfettiDots();
}

// Create confetti dots around wheel
function createConfettiDots() {
    const colors = ['#e67e22', '#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
    
    for (let i = 0; i < 20; i++) {
        const dot = document.createElement('div');
        dot.className = 'confetti-dot';
        dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        confettiDots.appendChild(dot);
        
        setTimeout(() => {
            if (dot.parentNode) {
                dot.parentNode.removeChild(dot);
            }
        }, 2000);
    }
}

// Finish spin and show result
function finishSpin() {
    isSpinning = false;
    
    // Calculate selected category - pointer points up, so we need to account for that
    const normalizedRotation = (360 - (currentRotation % 360)) % 360;
    const segmentAngle = 360 / activityCategories.length;
    const selectedIndex = Math.floor(normalizedRotation / segmentAngle) % activityCategories.length;
    const selectedCategory = activityCategories[selectedIndex];
    
    // Debug logging
    console.log('Wheel stopped at rotation:', currentRotation);
    console.log('Normalized rotation:', normalizedRotation);
    console.log('Selected index:', selectedIndex);
    console.log('Selected category:', selectedCategory.name);
    
    // Highlight selected segment
    highlightSelectedSegment(selectedIndex);
    
    // Play celebration sound
    playCelebrationSound();
    
    // Trigger confetti explosion
    const wheelRect = wheelWrapper.getBoundingClientRect();
    const centerX = wheelRect.left + wheelRect.width / 2;
    const centerY = wheelRect.top + wheelRect.height / 2;
    
    // Multiple confetti bursts for more celebration
    confetti.explode(centerX, centerY, 80);
    setTimeout(() => confetti.explode(centerX - 50, centerY - 30, 40), 200);
    setTimeout(() => confetti.explode(centerX + 50, centerY - 30, 40), 400);
    
    // Show activity after delay
    setTimeout(() => {
        showActivityFromCategory(selectedCategory.name);
    }, 800);
}

// Highlight the selected segment
function highlightSelectedSegment(selectedIndex) {
    // Reset all segments to normal
    wheelSegmentElements.forEach(segment => {
        segment.setAttribute('stroke-width', '3');
        segment.setAttribute('stroke', '#2c3e50');
        segment.style.filter = 'drop-shadow(3px 3px 6px rgba(0,0,0,0.3))';
    });
    
    // Highlight selected segment
    if (wheelSegmentElements[selectedIndex]) {
        const selectedSegment = wheelSegmentElements[selectedIndex];
        selectedSegment.setAttribute('stroke-width', '6');
        selectedSegment.setAttribute('stroke', '#e74c3c');
        selectedSegment.style.filter = 'drop-shadow(3px 3px 10px rgba(231, 76, 60, 0.6))';
    }
}


// Show random activity from selected category, considering difficulty
function showActivityFromCategory(categoryName) {
    const categoryData = bayAreaActivities[categoryName];
    if (!categoryData) {
        showFallbackActivity(categoryName);
        return;
    }
    
    // Get random difficulty level that has activities
    const availableDifficulties = Object.keys(categoryData).filter(diff => categoryData[diff].length > 0);
    if (availableDifficulties.length === 0) {
        showFallbackActivity(categoryName);
        return;
    }
    
    const randomDifficulty = availableDifficulties[Math.floor(Math.random() * availableDifficulties.length)];
    const activities = categoryData[randomDifficulty];
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    
    currentActivity = randomActivity;
    
    // Get category icon
    const categoryIcons = {
        'ART': '🎨',
        'ANIMALS': '🦁',
        'THEME PARKS': '🎢',
        'WALKS': '🚶',
        'ADVENTURE': '🏔️',
        'WATER': '🌊',
        'SPORT': '⚽'
    };
    
    // Hide CTA message and show activity elements
    ctaMessage.style.display = 'none';
    categoryBadge.style.display = 'inline-block';
    googleSearchBtn.style.display = 'inline-block';
    tellMoreBtn.style.display = 'inline-block';
    
    // Update activity card
    categoryBadge.textContent = categoryName;
    
    // Set badge color to match wheel segment
    const categoryInfo = activityCategories.find(cat => cat.name === categoryName);
    if (categoryInfo) {
        categoryBadge.style.backgroundColor = categoryInfo.color;
    }
    
    activityTitle.textContent = randomActivity.name;
    activityIcon.textContent = categoryIcons[categoryName] || '🎯';
    activityDescription.textContent = randomActivity.description;
    activityDuration.textContent = `Estimated ${randomActivity.duration}`;
    
    // Reset details state
    detailsVisible = false;
    activityDetails.style.display = 'none';
    tellMoreBtn.textContent = 'Tell me more';
    
    // Show result
    activityResult.style.display = 'block';
}

// Show fallback when no activities found
function showFallbackActivity(categoryName) {
    const categoryIcons = {
        'ART': '🎨', 'ANIMALS': '🦁', 'THEME PARKS': '🎢', 'WALKS': '🚶',
        'ADVENTURE': '🏔️', 'WATER': '🌊', 'SPORT': '⚽'
    };
    
    // Hide CTA message and show activity elements
    ctaMessage.style.display = 'none';
    categoryBadge.style.display = 'inline-block';
    googleSearchBtn.style.display = 'none'; // No Google search for fallback
    tellMoreBtn.style.display = 'none'; // No "tell me more" for fallback
    
    categoryBadge.textContent = categoryName;
    
    // Set badge color to match wheel segment
    const categoryInfo = activityCategories.find(cat => cat.name === categoryName);
    if (categoryInfo) {
        categoryBadge.style.backgroundColor = categoryInfo.color;
    }
    
    activityTitle.textContent = 'Coming Soon!';
    activityIcon.textContent = categoryIcons[categoryName] || '🎯';
    activityDescription.textContent = `We're still building our ${categoryName.toLowerCase()} database. Try another spin!`;
    activityDuration.textContent = '';
    
    detailsVisible = false;
    activityDetails.style.display = 'none';
    tellMoreBtn.textContent = 'Tell me more';
    
    activityResult.style.display = 'block';
}

// Toggle activity details
function toggleDetails() {
    if (!currentActivity) return;
    
    if (!detailsVisible) {
        // Show details
        detailedDescription.textContent = currentActivity.detailedDescription;
        locationDetails.textContent = currentActivity.locationDetails;
        
        activityTips.innerHTML = '';
        currentActivity.tips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            activityTips.appendChild(li);
        });
        
        activityDetails.style.display = 'block';
        tellMoreBtn.textContent = 'Show less';
        detailsVisible = true;
    } else {
        // Hide details
        activityDetails.style.display = 'none';
        tellMoreBtn.textContent = 'Tell me more';
        detailsVisible = false;
    }
}

// Google search function
function searchActivityOnGoogle() {
    if (!currentActivity) return;
    
    // Create search query with activity name and San Francisco Bay Area
    const searchQuery = `${currentActivity.name} San Francisco Bay Area`;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    
    // Open in new window/tab
    window.open(googleSearchUrl, '_blank');
}

// Event listeners
wheelContainer.addEventListener('click', () => {
    spinWheel();
});

// Add visual feedback for clickability
wheelContainer.style.cursor = 'pointer';

soundToggle.addEventListener('click', toggleSound);

googleSearchBtn.addEventListener('click', searchActivityOnGoogle);

tellMoreBtn.addEventListener('click', toggleDetails);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadSoundPreference();
    generateWheel();
    
    // Activity card starts with welcome message - no need to show initial activity
});