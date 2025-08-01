// Random Adventure Picker - Multi-Region Implementation

// Activity Categories for Adventures
const activityCategories = [
    { name: 'ART', color: '#d4956a' },
    { name: 'ANIMALS', color: '#7ba3c4' },
    { name: 'THEME PARKS', color: '#d4956a' },
    { name: 'WALKS', color: '#7ba3c4' },
    { name: 'ADVENTURE', color: '#d4956a' },
    { name: 'WATER', color: '#7ba3c4' },
    { name: 'SPORT', color: '#d4956a' }
];

// Regional Activities Database
const regionsData = {
    sf: {
        name: 'San Francisco Bay Area',
        activities: {
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
                    }
                ]
            },
            'WATER': {
                'chill': [
                    {
                        name: 'Aquatic Cove Swimming',
                        description: 'Open water swimming in San Francisco Bay',
                        duration: '1-2 hours',
                        detailedDescription: 'Join the hardy souls who swim year-round in the chilly but invigorating waters of Aquatic Cove near Fisherman\'s Wharf.',
                        locationDetails: 'Aquatic Cove, near Ghirardelli Square, San Francisco. Street parking available.',
                        tips: ['Water is cold year-round (50-65°F)', 'Wetsuit recommended', 'Strong swimming skills required', 'Best at high tide']
                    }
                ]
            }
        }
    },
    southbay: {
        name: 'South Bay / San Jose Area',
        activities: {
            'ART': {
                'chill': [
                    {
                        name: 'San Jose Museum of Art',
                        description: 'Contemporary and modern art in downtown San Jose',
                        duration: '2-3 hours',
                        detailedDescription: 'Features contemporary and modern art with a focus on West Coast artists. Regular rotating exhibitions showcase emerging and established artists.',
                        locationDetails: '110 S Market St, San Jose. Light rail accessible, paid parking nearby.',
                        tips: ['Free first Friday evenings', 'Combine with downtown San Jose dining', 'Family-friendly programs available', 'Student discounts offered']
                    },
                    {
                        name: 'Triton Museum of Art',
                        description: 'Community art museum in Santa Clara',
                        duration: '1-2 hours',
                        detailedDescription: 'Intimate museum featuring contemporary art, Native American art, and rotating exhibitions. Beautiful outdoor sculpture garden.',
                        locationDetails: '1505 Warburton Ave, Santa Clara. Free parking available.',
                        tips: ['Always free admission', 'Sculpture garden great for photos', 'Regular artist talks and workshops', 'Less crowded weekday afternoons']
                    }
                ],
                'moderate': [
                    {
                        name: 'Montalvo Arts Center',
                        description: 'Historic estate with art galleries and gardens',
                        duration: '3-4 hours',
                        detailedDescription: 'Beautiful hillside estate featuring contemporary art exhibitions, outdoor sculptures, and stunning gardens. Regular concerts and performances.',
                        locationDetails: '15400 Montalvo Rd, Saratoga. Free parking, winding mountain road.',
                        tips: ['Free admission to grounds and galleries', 'Hiking trails behind property', 'Bring picnic for gardens', 'Check event calendar for concerts']
                    }
                ]
            },
            'ANIMALS': {
                'chill': [
                    {
                        name: 'Happy Hollow Park & Zoo',
                        description: 'Family-friendly zoo and amusement park',
                        duration: '3-4 hours',
                        detailedDescription: 'Compact zoo featuring over 140 animals plus vintage rides and puppet shows. Perfect for families with young children.',
                        locationDetails: '748 Story Rd, San Jose. Free parking in Kelley Park.',
                        tips: ['Combination zoo and amusement park', 'Great for kids under 10', 'Puppet shows included with admission', 'Can get crowded on weekends']
                    }
                ],
                'moderate': [
                    {
                        name: 'Wildlife Education & Rehabilitation Center',
                        description: 'Native wildlife rescue and education center',
                        duration: '2-3 hours',
                        detailedDescription: 'See native California wildlife being rehabilitated including raptors, foxes, and other local species. Educational programs teach about local ecosystems.',
                        locationDetails: '1855 Naglee Ave, San Jose. Limited parking, call ahead.',
                        tips: ['Tours by appointment only', 'Focus on native California species', 'Great for educational visits', 'Donations help support wildlife rescue']
                    }
                ]
            },
            'ADVENTURE': {
                'moderate': [
                    {
                        name: 'Almaden Quicksilver County Park',
                        description: 'Historic mining park with hiking trails',
                        duration: '2-4 hours',
                        detailedDescription: 'Explore old mercury mining sites along scenic hiking trails. Rich history combined with beautiful oak woodlands and grasslands.',
                        locationDetails: '21350 Almaden Rd, San Jose. Free parking at multiple trailheads.',
                        tips: ['Historic mining equipment visible', 'Can be hot in summer', 'Dogs allowed on leash', 'Multiple trail difficulty levels']
                    },
                    {
                        name: 'Castle Rock State Park',
                        description: 'Rock formations and hiking in Santa Cruz Mountains',
                        duration: '3-5 hours',
                        detailedDescription: 'Dramatic sandstone rock formations, redwood groves, and challenging hiking trails. Popular with rock climbers and hikers.',
                        locationDetails: '15000 Skyline Blvd, Los Gatos. Limited parking, arrive early.',
                        tips: ['Parking fills up early weekends', 'Rock climbing requires permits', 'Waterfall hikes in spring', 'Can be foggy and cool']
                    }
                ],
                'epic': [
                    {
                        name: 'Mount Umunhum',
                        description: 'Highest peak in Santa Clara County',
                        duration: '4-6 hours',
                        detailedDescription: 'Challenging hike to the highest peak in Santa Clara County (3,486 ft) with panoramic views of Silicon Valley and beyond. Historic radar tower at summit.',
                        locationDetails: 'Bald Mountain Open Space Preserve, Los Gatos. Limited parking.',
                        tips: ['Very steep final ascent', 'Amazing 360-degree views', 'Can be windy and cold at top', 'Start early for parking']
                    }
                ]
            },
            'WATER': {
                'chill': [
                    {
                        name: 'Lake Vasona',
                        description: 'Peaceful lake with pedal boats and walking paths',
                        duration: '2-3 hours',
                        detailedDescription: 'Serene lake perfect for pedal boating, walking, or picnicking. Tree-lined paths and duck watching make it ideal for relaxation.',
                        locationDetails: '333 Blossom Hill Rd, Los Gatos. Free parking available.',
                        tips: ['Pedal boat rentals available', 'Great for families', 'Connected to Los Gatos Creek Trail', 'Can feed ducks (bring appropriate food)']
                    }
                ],
                'moderate': [
                    {
                        name: 'Lexington Reservoir',
                        description: 'Large reservoir with hiking and fishing',
                        duration: '3-4 hours',
                        detailedDescription: 'Large reservoir in the Santa Cruz Mountains offering fishing, hiking trails, and beautiful water views. Popular for bass and trout fishing.',
                        locationDetails: '17770 Alma Bridge Rd, Los Gatos. Free parking.',
                        tips: ['Fishing license required', 'No swimming allowed', 'Great hiking trails around perimeter', 'Can be very busy on weekends']
                    }
                ]
            },
            'THEME PARKS': {
                'epic': [
                    {
                        name: 'California\'s Great America',
                        description: 'Major theme park with roller coasters',
                        duration: '6-8 hours',
                        detailedDescription: 'Full-scale theme park featuring world-class roller coasters, family rides, and seasonal events. Home to some of the tallest and fastest coasters on the West Coast.',
                        locationDetails: '4701 Great America Pkwy, Santa Clara. Paid parking available.',
                        tips: ['Buy tickets online for discounts', 'Fast Lane passes available', 'Soak City water park included', 'Very crowded summer weekends']
                    }
                ]
            },
            'WALKS': {
                'chill': [
                    {
                        name: 'Santana Row',
                        description: 'Upscale outdoor shopping and dining district',
                        duration: '2-3 hours',
                        detailedDescription: 'European-style outdoor shopping center with luxury stores, restaurants, and regular events. Great for people watching and window shopping.',
                        locationDetails: '377 Santana Row, San Jose. Paid parking in structures.',
                        tips: ['Free events and concerts regularly', 'High-end shopping and dining', 'Great people watching', 'Valet parking available']
                    }
                ],
                'moderate': [
                    {
                        name: 'Los Gatos Creek Trail',
                        description: 'Multi-use trail through Silicon Valley',
                        duration: '2-4 hours',
                        detailedDescription: 'Paved multi-use trail following Los Gatos Creek from the mountains to San Francisco Bay. Perfect for walking, cycling, or jogging.',
                        locationDetails: 'Multiple access points from Los Gatos to San Jose Bay Trail.',
                        tips: ['Connects to Bay Trail', 'Mostly flat and paved', 'Bike rentals available in Los Gatos', 'Can be crowded weekends']
                    }
                ]
            }
        }
    },
    eastmidlands: {
        name: 'East Midlands, UK',
        activities: {
            'ART': {
                'chill': [
                    {
                        name: 'Nottingham Contemporary',
                        description: 'Modern art gallery in Nottingham city centre',
                        duration: '2-3 hours',
                        detailedDescription: 'Contemporary art gallery featuring cutting-edge exhibitions from international and local artists. The building itself is an architectural marvel in the heart of Nottingham\'s Cultural Quarter.',
                        locationDetails: 'Weekday Cross, Nottingham NG1 2GB. City centre location, public transport accessible.',
                        tips: ['Free admission to most exhibitions', 'Great café with local produce', 'Regular evening events and talks', 'Easy walk from Old Market Square']
                    },
                    {
                        name: 'Nottingham Castle Museum & Art Gallery',
                        description: 'Historic castle with art collections and city views',
                        duration: '2-4 hours',
                        detailedDescription: 'Explore the restored Nottingham Castle with its impressive art collections, medieval artifacts, and stunning views over the city. The castle sits on the original site where Robin Hood\'s adventures began.',
                        locationDetails: 'Lenton Rd, Nottingham NG1 6EL. Castle Rock, city centre.',
                        tips: ['Book tickets online in advance', 'Robin Hood gallery is a highlight', 'Spectacular views from the battlements', 'Castle café for traditional afternoon tea']
                    }
                ],
                'moderate': [
                    {
                        name: 'Newark Castle & Town Art Trail',
                        description: 'Historic castle ruins and town art exploration',
                        duration: '3-4 hours',
                        detailedDescription: 'Explore the impressive ruins of Newark Castle by the River Trent, then follow the town\'s heritage art trail discovering local galleries and street art.',
                        locationDetails: 'Castle Gate, Newark-on-Trent NG24 1BG. 20 minutes from Nottingham by train.',
                        tips: ['Free castle entry', 'Combine with antique shopping', 'Beautiful riverside walks', 'Regular historical reenactments']
                    }
                ]
            },
            'ANIMALS': {
                'chill': [
                    {
                        name: 'Attenborough Nature Reserve',
                        description: 'Wildlife reserve with lakes and bird watching',
                        duration: '2-3 hours',
                        detailedDescription: 'Peaceful nature reserve named after Sir David Attenborough, featuring lakes, wetlands, and diverse wildlife. Perfect for bird watching, walking, and nature photography.',
                        locationDetails: 'Barton Lane, Attenborough, Nottingham NG9 6DY. Free parking available.',
                        tips: ['Bring binoculars for bird watching', 'Visitor centre has wildlife information', 'Several walking trail options', 'Great for family visits']
                    },
                    {
                        name: 'White Post Farm',
                        description: 'Family farm with animals and activities',
                        duration: '3-4 hours',
                        detailedDescription: 'Working farm with friendly animals, indoor and outdoor play areas, and seasonal activities. Meet sheep, goats, pigs, and smaller animals in a hands-on environment.',
                        locationDetails: 'Farnsfield, Newark NG22 8HL. About 30 minutes from Nottingham.',
                        tips: ['Great for families with young children', 'Seasonal events like lamb feeding', 'Indoor play areas for wet weather', 'Farm shop with local produce']
                    }
                ],
                'moderate': [
                    {
                        name: 'Twycross Zoo',
                        description: 'World-renowned primate zoo and conservation center',
                        duration: '4-6 hours',
                        detailedDescription: 'Home to over 500 animals including the world\'s largest collection of monkeys and apes. Conservation-focused zoo with educational programs and exciting animal encounters.',
                        locationDetails: 'Burton Rd, Twycross, Atherstone CV9 3PX. About 45 minutes from Nottingham.',
                        tips: ['Full day experience recommended', 'Primate collection is world-famous', 'Conservation talks throughout the day', 'Book online for discounts']
                    }
                ]
            },
            'ADVENTURE': {
                'moderate': [
                    {
                        name: 'Peak District National Park',
                        description: 'Hiking and outdoor adventures in England\'s peaks',
                        duration: '4-8 hours',
                        detailedDescription: 'Explore the stunning landscapes of England\'s first national park. From gentle valley walks to challenging peak climbs, with charming villages and dramatic limestone formations.',
                        locationDetails: 'Multiple access points, Bakewell and Matlock are popular bases. 45 minutes from Nottingham.',
                        tips: ['Weather can change quickly', 'Bakewell tart is a local specialty', 'Chatsworth House nearby', 'OS maps recommended for serious hiking']
                    },
                    {
                        name: 'Sherwood Forest & Major Oak',
                        description: 'Legendary Robin Hood forest adventure',
                        duration: '3-5 hours',
                        detailedDescription: 'Walk through the legendary Sherwood Forest, home of Robin Hood. Visit the famous Major Oak, explore woodland trails, and discover the visitor centre with interactive exhibits.',
                        locationDetails: 'Sherwood Forest Country Park, Edwinstowe, Mansfield NG21 9HN.',
                        tips: ['Major Oak is over 1000 years old', 'Robin Hood festival in summer', 'Several walking trail options', 'Visitor centre has Robin Hood exhibitions']
                    }
                ],
                'epic': [
                    {
                        name: 'Kinder Scout Plateau Hike',
                        description: 'Challenging hike to Peak District\'s highest point',
                        duration: '6-8 hours',
                        detailedDescription: 'Epic hike to the highest point in the Peak District (636m). Historic route of the 1932 Mass Trespass, offering incredible views and a sense of achievement.',
                        locationDetails: 'Start from Edale village, accessible by train from Sheffield/Manchester.',
                        tips: ['Experienced hikers only', 'Can be boggy and challenging to navigate', 'Historic significance for walking rights', 'Weather can be severe - prepare well']
                    }
                ]
            },
            'WALKS': {
                'chill': [
                    {
                        name: 'Nottingham City Centre Historic Walk',
                        description: 'Self-guided tour of Nottingham\'s historic sites',
                        duration: '2-3 hours',
                        detailedDescription: 'Discover Nottingham\'s rich history from the Lace Market to the Castle, taking in medieval churches, Victorian architecture, and Robin Hood connections.',
                        locationDetails: 'Start at Old Market Square, Nottingham city centre.',
                        tips: ['Pick up trail map from tourist information', 'Many free historic sites', 'Great pubs for breaks', 'Combine with shopping in city centre']
                    },
                    {
                        name: 'Trent Valley Way',
                        description: 'Scenic riverside walking along River Trent',
                        duration: '2-4 hours',
                        detailedDescription: 'Peaceful riverside walks along the River Trent with locks, bridges, and wildlife. Multiple access points allow for walks of varying lengths.',
                        locationDetails: 'Multiple access points along River Trent, including Nottingham embankment.',
                        tips: ['Flat, easy walking', 'Good for cycling too', 'Pubs and cafés along the route', 'Beautiful in all seasons']
                    }
                ],
                'moderate': [
                    {
                        name: 'Dovedale Stepping Stones Walk',
                        description: 'Famous Peak District valley walk with river crossing',
                        duration: '3-4 hours',
                        detailedDescription: 'One of England\'s most famous walks through a stunning limestone valley, featuring the iconic stepping stones across the River Dove.',
                        locationDetails: 'Dovedale Car Park, near Ashbourne, Derbyshire. About 1 hour from Nottingham.',
                        tips: ['Can be very busy on weekends', 'Stepping stones can be slippery', 'Extend walk to Milldale village', 'National Trust area - parking charges apply']
                    }
                ]
            },
            'WATER': {
                'chill': [
                    {
                        name: 'Colwick Country Park',
                        description: 'Lake activities and riverside walks near Nottingham',
                        duration: '2-3 hours',
                        detailedDescription: 'Former gravel pits turned into beautiful lakes perfect for walking, fishing, and water sports. Adjacent to the River Trent with additional walking opportunities.',
                        locationDetails: 'Colwick Park Rd, Nottingham NG4 2DW. Free parking.',
                        tips: ['Great for fishing (permit required)', 'Rowing and sailing available', 'Good for dog walking', 'Café on site']
                    }
                ],
                'moderate': [
                    {
                        name: 'National Water Sports Centre',
                        description: 'Try sailing, kayaking, or paddleboarding',
                        duration: '3-5 hours',
                        detailedDescription: 'Premier water sports facility offering lessons and rentals for sailing, windsurfing, kayaking, and paddleboarding on purpose-built lakes.',
                        locationDetails: 'Adbolton Lane, Holme Pierrepont, Nottingham NG12 2LU.',
                        tips: ['Book activities in advance', 'All skill levels catered for', 'Equipment provided', 'Good changing facilities']
                    }
                ]
            },
            'THEME PARKS': {
                'epic': [
                    {
                        name: 'Alton Towers',
                        description: 'UK\'s premier theme park with world-class rides',
                        duration: '8-10 hours',
                        detailedDescription: 'Britain\'s most popular theme park featuring world-renowned roller coasters like The Smiler, Nemesis, and Oblivion, plus family attractions and beautiful gardens.',
                        locationDetails: 'Alton, Staffordshire ST10 4DB. About 1 hour from Nottingham.',
                        tips: ['Buy tickets online for big savings', 'Fast Track passes available', 'Very busy during school holidays', 'On-site hotels available']
                    }
                ]
            },
            'SPORT': {
                'moderate': [
                    {
                        name: 'Nottingham Forest Stadium Tour',
                        description: 'Behind-the-scenes tour of historic football ground',
                        duration: '1-2 hours',
                        detailedDescription: 'Exclusive tour of the City Ground, home to Nottingham Forest FC, two-time European Cup winners. See the dressing rooms, tunnel, and learn about the club\'s incredible history.',
                        locationDetails: 'The City Ground, Pavilion Rd, West Bridgford, Nottingham NG2 5FJ.',
                        tips: ['Book tours in advance', 'Match day tours not available', 'Great for football fans', 'Club shop on site']
                    },
                    {
                        name: 'Trent Bridge Cricket Ground',
                        description: 'Historic cricket ground tours and matches',
                        duration: '2-3 hours',
                        detailedDescription: 'Tour one of England\'s most beautiful cricket grounds, home to Nottinghamshire CCC and international matches. Rich history and stunning pavilion.',
                        locationDetails: 'West Bridgford, Nottingham NG2 6AG. Next to River Trent.',
                        tips: ['Tours available on non-match days', 'Beautiful Victorian pavilion', 'Museum of cricket memorabilia', 'Riverside location']
                    }
                ]
            }
        }
    }
};

// Global variables
let currentRegion = 'sf';
let currentWheelData = [];
let currentSelectedActivity = null;
let wheelAngle = 0;
let isSpinning = false;
let soundEnabled = true;

// Sound effects
const spinSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1O/OeSEFJHfH8N2QQAoUXrTp65hVFApGn+DyvmwhBTV+0PLWdyMHJIHA7+OSRQ0PVqzn2Z5VEwxDm9+xw2wdCDqHy++hWBMEP');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeRegionSwitcher();
    initializeWheel();
    initializeSoundToggle();
    updateRegionData(currentRegion);
});

// Region switcher functionality
function initializeRegionSwitcher() {
    const regionButtons = document.querySelectorAll('.region-btn');
    
    regionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const newRegion = this.dataset.region;
            if (newRegion !== currentRegion) {
                switchRegion(newRegion);
            }
        });
    });
}

function switchRegion(region) {
    currentRegion = region;
    
    // Update button states
    document.querySelectorAll('.region-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-region="${region}"]`).classList.add('active');
    
    // Update region data
    updateRegionData(region);
    
    // Reset activity display
    resetActivityDisplay();
    
    // Regenerate wheel
    generateWheel();
}

function updateRegionData(region) {
    const regionData = regionsData[region];
    
    // Update header text
    document.getElementById('location-title').textContent = regionData.name;
    
    // Switch illustrations
    document.querySelectorAll('.region-illustration').forEach(illustration => {
        illustration.style.display = 'none';
    });
    document.getElementById(`${region}-illustration`).style.display = 'block';
    
    // Store current region activities for later selection
    currentWheelData = regionData.activities;
    
    console.log(`Updated to ${regionData.name}`);
}

function resetActivityDisplay() {
    document.getElementById('activity-result').innerHTML = `
        <div class="activity-card">
            <div class="category-badge" id="category-badge" style="display: none;">ART</div>
            <a id="google-search-link" class="google-search-link" href="#" target="_blank" style="display: none;">
                🔍 Learn More
            </a>
            <h3 id="activity-title" class="activity-title">Ready for an Adventure?</h3>
            <div class="activity-icon" id="activity-icon">🎯</div>
            <p id="activity-description" class="activity-description">Discover amazing activities across the ${regionsData[currentRegion].name}! From art walks to water sports, there's something exciting waiting for you.</p>
            <p id="activity-duration" class="activity-duration"></p>
            
            <button id="tell-more-btn" class="tell-more-btn" style="display: none;">Tell me more</button>
            
            <div class="cta-message">
                <p class="cta-text">👈 Spin the Wheel to choose your adventure!</p>
            </div>
            
            <!-- Additional details (hidden initially) -->
            <div class="activity-details" id="activity-details" style="display: none;">
                <div class="activity-icons-row">
                    <div class="detail-icon">📍</div>
                    <div class="detail-icon">🧭</div>
                </div>
                <p id="detailed-description" class="detailed-description"></p>
                <div class="location-details" id="location-details"></div>
                <ul id="activity-tips" class="activity-tips"></ul>
            </div>
        </div>
    `;
    
    // Re-attach event listener for "Tell me more" button
    document.getElementById('tell-more-btn').addEventListener('click', showActivityDetails);
}

// Wheel generation and animation
function generateWheel() {
    const wheel = document.getElementById('wheel-segments');
    wheel.innerHTML = '';
    
    const segmentAngle = 360 / activityCategories.length;
    
    activityCategories.forEach((category, index) => {
        const segment = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        const startAngle = index * segmentAngle;
        const endAngle = startAngle + segmentAngle;
        
        // Create path for segment
        const pathData = createWheelSegmentPath(200, 200, 170, startAngle, endAngle);
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('fill', category.color);
        path.setAttribute('fill-opacity', '0.8');
        path.setAttribute('stroke', '#4a4034');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('filter', 'url(#watercolor-texture)');
        
        // Add text
        const textAngle = startAngle + segmentAngle / 2;
        const textRadius = 130;
        const textX = 200 + Math.cos((textAngle - 90) * Math.PI / 180) * textRadius;
        const textY = 200 + Math.sin((textAngle - 90) * Math.PI / 180) * textRadius;
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', textX);
        text.setAttribute('y', textY);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('fill', 'white');
        text.setAttribute('font-family', 'Kalam');
        text.setAttribute('font-size', '14');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('transform', `rotate(${textAngle > 90 && textAngle < 270 ? textAngle + 180 : textAngle}, ${textX}, ${textY})`);
        
        text.textContent = category.name;
        
        segment.appendChild(path);
        segment.appendChild(text);
        wheel.appendChild(segment);
    });
}

function createWheelSegmentPath(centerX, centerY, radius, startAngle, endAngle) {
    const startAngleRad = (startAngle - 90) * Math.PI / 180;
    const endAngleRad = (endAngle - 90) * Math.PI / 180;
    
    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);
    
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
}

function initializeWheel() {
    const wheelContainer = document.getElementById('wheel-container');
    wheelContainer.addEventListener('click', spinWheel);
    
    generateWheel();
}

function spinWheel() {
    if (isSpinning || !currentWheelData) return;
    
    isSpinning = true;
    
    if (soundEnabled) {
        spinSound.currentTime = 0;
        spinSound.play().catch(e => console.log('Sound play failed:', e));
    }
    
    // Generate random spin
    const minSpins = 5;
    const maxSpins = 8;
    const spins = Math.random() * (maxSpins - minSpins) + minSpins;
    const finalAngle = spins * 360 + Math.random() * 360;
    
    wheelAngle += finalAngle;
    
    const wheel = document.getElementById('adventure-wheel');
    wheel.style.transition = 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    wheel.style.transform = `rotate(${wheelAngle}deg)`;
    
    // Calculate result
    setTimeout(() => {
        const normalizedAngle = (360 - (wheelAngle % 360)) % 360;
        const segmentAngle = 360 / activityCategories.length;
        const selectedIndex = Math.floor(normalizedAngle / segmentAngle);
        const selectedCategory = activityCategories[selectedIndex];
        
        // Select random activity from the selected category
        const selectedActivity = selectRandomActivityFromCategory(selectedCategory.name);
        
        showActivityResult(selectedActivity);
        isSpinning = false;
        
        // Add confetti effect
        createConfetti();
    }, 3000);
}

function selectRandomActivityFromCategory(categoryName) {
    const categoryActivities = currentWheelData[categoryName];
    if (!categoryActivities) {
        console.error(`No activities found for category: ${categoryName}`);
        return null;
    }
    
    // Get all activities from all difficulty levels in this category
    const allActivities = [];
    Object.keys(categoryActivities).forEach(difficulty => {
        categoryActivities[difficulty].forEach(activity => {
            allActivities.push({
                ...activity,
                category: categoryName,
                difficulty: difficulty
            });
        });
    });
    
    if (allActivities.length === 0) {
        console.error(`No activities found in category: ${categoryName}`);
        return null;
    }
    
    // Select random activity
    const randomIndex = Math.floor(Math.random() * allActivities.length);
    return allActivities[randomIndex];
}

function showActivityResult(activity) {
    currentSelectedActivity = activity;
    
    // Update UI elements
    const categoryBadge = document.getElementById('category-badge');
    const activityTitle = document.getElementById('activity-title');
    const activityIcon = document.getElementById('activity-icon');
    const activityDescription = document.getElementById('activity-description');
    const activityDuration = document.getElementById('activity-duration');
    const tellMoreBtn = document.getElementById('tell-more-btn');
    const googleSearchLink = document.getElementById('google-search-link');
    
    // Show and populate category badge
    categoryBadge.textContent = activity.category;
    categoryBadge.style.display = 'inline-block';
    
    // Create Google search URL
    const searchQuery = `${activity.name} ${regionsData[currentRegion].name}`;
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    googleSearchLink.href = googleUrl;
    googleSearchLink.style.display = 'block';
    
    // Set activity details
    activityTitle.textContent = activity.name;
    activityDescription.textContent = activity.description;
    activityDuration.textContent = activity.duration;
    
    // Set appropriate icon based on category
    const iconMap = {
        'ART': '🎨',
        'ANIMALS': '🦁',
        'THEME PARKS': '🎢',
        'WALKS': '🚶‍♀️',
        'ADVENTURE': '🏔️',
        'WATER': '🌊',
        'SPORT': '⚽'
    };
    activityIcon.textContent = iconMap[activity.category] || '🎯';
    
    // Show tell more button
    tellMoreBtn.style.display = 'inline-block';
    
    // Hide CTA message
    document.querySelector('.cta-message').style.display = 'none';
}

function showActivityDetails() {
    if (!currentSelectedActivity) return;
    
    const activity = currentSelectedActivity;
    const detailsSection = document.getElementById('activity-details');
    const detailedDescription = document.getElementById('detailed-description');
    const locationDetails = document.getElementById('location-details');
    const activityTips = document.getElementById('activity-tips');
    
    // Populate detailed information
    detailedDescription.textContent = activity.detailedDescription || activity.description;
    locationDetails.textContent = activity.locationDetails || 'Location details not available.';
    
    // Clear and populate tips
    activityTips.innerHTML = '';
    if (activity.tips && activity.tips.length > 0) {
        activity.tips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            activityTips.appendChild(li);
        });
    }
    
    // Show details section
    detailsSection.style.display = 'block';
    
    // Scroll to details
    detailsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Sound toggle functionality
function initializeSoundToggle() {
    const soundToggle = document.getElementById('sound-toggle');
    soundToggle.addEventListener('click', toggleSound);
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    const soundIcon = document.getElementById('sound-icon');
    const soundToggle = document.getElementById('sound-toggle');
    
    if (soundEnabled) {
        soundIcon.textContent = '🔊';
        soundToggle.classList.remove('muted');
    } else {
        soundIcon.textContent = '🔇';
        soundToggle.classList.add('muted');
    }
}

// Confetti effect
function createConfetti() {
    const colors = ['#d4956a', '#7ba3c4', '#e0bb59', '#a68da0'];
    const confettiContainer = document.getElementById('confetti-dots');
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-dot';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 1000 + 'ms';
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}