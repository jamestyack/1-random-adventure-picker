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
            },
            {
                name: 'Sausalito Art Galleries',
                description: 'Charming waterfront town with numerous art galleries',
                duration: '2-3 hours',
                detailedDescription: 'Stroll through picturesque Sausalito and explore local art galleries featuring Bay Area artists, maritime art, and contemporary works. Beautiful harbor views included.',
                locationDetails: 'Downtown Sausalito, 20 minutes north via Golden Gate Bridge. Ferry also available.',
                tips: ['Combine with ferry ride for scenic approach', 'Many galleries within walking distance', 'Great restaurants for lunch breaks', 'Free street parking limited']
            },
            {
                name: 'Palo Alto Art Center',
                description: 'Community art center with rotating exhibitions',
                duration: '1-2 hours',
                detailedDescription: 'Local art center featuring contemporary works by Peninsula artists, ceramics, and community art projects. Often has hands-on workshops available.',
                locationDetails: '1313 Newell Rd, Palo Alto. 45 minutes south on 101. Free parking.',
                tips: ['Always free admission', 'Check workshop schedule online', 'Adjacent to Mitchell Park playground', 'Easy CalTrain access from SF']
            },
            {
                name: 'Half Moon Bay Art Glass',
                description: 'Blown glass studios and coastal art galleries',
                duration: '2-3 hours',
                detailedDescription: 'Watch glass blowing demonstrations and browse coastal-themed art galleries in this charming seaside town. Perfect for a relaxing art-focused day trip.',
                locationDetails: 'Main Street, Half Moon Bay. 45 minutes south via Highway 1.',
                tips: ['Time visit with glass blowing demos', 'Combine with pumpkin patches in fall', 'Great seafood restaurants nearby', 'Scenic coastal drive']
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
            },
            {
                name: 'Marin Museum of Contemporary Art',
                description: 'Cutting-edge contemporary art in historic Novato',
                duration: '2-3 hours',
                detailedDescription: 'Contemporary art museum featuring experimental works, digital art, and installations by emerging artists. Often includes interactive exhibits.',
                locationDetails: '500 Palm Dr, Novato. 45 minutes north via 101. Free parking.',
                tips: ['Check for artist talks and opening receptions', 'Free admission on first Fridays', 'Combine with Novato downtown exploration', 'Great for photography enthusiasts']
            },
            {
                name: 'Stanford Cantor Arts Center',
                description: 'University museum with diverse collections',
                duration: '3-4 hours',
                detailedDescription: 'Impressive museum featuring Asian art, sculptures by Rodin, contemporary works, and rotating exhibitions. Beautiful outdoor sculpture garden.',
                locationDetails: '328 Lomita Dr, Stanford. 45 minutes south on 101. Free parking.',
                tips: ['Always free admission', 'Outdoor sculpture garden is spectacular', 'Campus is worth exploring', 'Great café for lunch']
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
            },
            {
                name: 'Napa Valley Art Scene Day Trip',
                description: 'Full day exploring galleries, studios, and sculpture gardens',
                duration: '6-8 hours',
                detailedDescription: 'Complete art tour of Napa Valley including winery art collections, sculpture gardens, artist studios, and the di Rosa art preserve with its incredible contemporary collection.',
                locationDetails: 'Various locations in Napa Valley, 1 hour north via 29. Start in Napa or St. Helena.',
                tips: ['Plan route in advance', 'Some venues require appointments', 'Combine with wine tasting', 'Designate a driver or use tour services']
            },
            {
                name: 'Santa Cruz Art & Culture Immersion',
                description: 'Full day cultural experience in artistic beach town',
                duration: '6-8 hours',
                detailedDescription: 'Explore Santa Cruz Art League, local galleries, murals, and the unique artistic culture of this coastal town. Includes beach art installations and boardwalk culture.',
                locationDetails: 'Downtown Santa Cruz, 1 hour south via 17. Multiple parking options.',
                tips: ['Start early to cover all venues', 'Beach art changes with tides', 'Great local food scene', 'Combine with coastal walks']
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
            },
            {
                name: 'Happy Hollow Park & Zoo',
                description: 'Family-friendly zoo and amusement park in San Jose',
                duration: '3-4 hours',
                detailedDescription: 'Charming combination of small zoo and vintage rides perfect for families with young children. Features rescued animals, puppet shows, and gentle amusement rides.',
                locationDetails: '748 Story Rd, San Jose. 1 hour south via 101. Free parking available.',
                tips: ['Perfect for families with kids under 10', 'Combination zoo and ride tickets available', 'Less crowded than larger zoos', 'Great picnic areas throughout park']
            },
            {
                name: 'Coyote Point Recreation Area',
                description: 'Wildlife viewing and nature center on the bay',
                duration: '2-3 hours',
                detailedDescription: 'Bayfront park with CuriOdyssey science museum and wildlife habitats featuring native California animals including coyotes, bobcats, and birds of prey.',
                locationDetails: '1701 Coyote Point Dr, San Mateo. 30 minutes south on 101. Paid parking.',
                tips: ['Combine museum visit with bayfront walking', 'Great for kids interested in local wildlife', 'Beautiful bay views for picnicking', 'Educational programs available weekends']
            },
            {
                name: 'Petting Farm at Ardenwood',
                description: 'Historic farm with friendly farm animals',
                duration: '2-3 hours',
                detailedDescription: 'Working Victorian-era farm where visitors can pet and feed goats, sheep, chickens, and pigs. Includes historic farm buildings and seasonal activities.',
                locationDetails: '34600 Ardenwood Blvd, Fremont. 45 minutes southeast via 880. Free parking.',
                tips: ['Seasonal hours vary', 'Bring quarters for animal feed', 'Great for toddlers and young kids', 'Combine with historic house tours']
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
            },
            {
                name: 'Wildlife Refuge at Don Edwards',
                description: 'Vast wetland preserve with diverse bird species',
                duration: '3-4 hours',
                detailedDescription: 'Explore 30,000 acres of salt ponds, marshes, and mudflats teeming with migratory birds, harbor seals, and other wildlife. Multiple walking trails of varying lengths.',
                locationDetails: '2 Marshlands Rd, Fremont. 45 minutes southeast via 880. Free admission and parking.',
                tips: ['Bring binoculars for best bird watching', 'Peak migration seasons are spring and fall', 'Visitor center has helpful maps and guides', 'Early morning visits see most wildlife activity']
            },
            {
                name: 'Año Nuevo State Park Elephant Seals',
                description: 'Seasonal viewing of massive elephant seals',
                duration: '3-5 hours',
                detailedDescription: 'Guided walks to observe northern elephant seals during breeding season (Dec-Mar). Witness dramatic battles between massive bulls and tender moments with pups.',
                locationDetails: 'New Years Creek Rd, Pescadero. 1 hour south via Highway 1. Advance reservations required.',
                tips: ['Breeding season tours Dec-Mar only', 'Reservations essential - book months ahead', 'Dress warmly and wear sturdy walking shoes', 'No pets allowed on guided tours']
            },
            {
                name: 'Point Reyes Tule Elk Reserve',
                description: 'Native elk herd viewing in coastal grasslands',
                duration: '2-4 hours',
                detailedDescription: 'Drive or hike to viewing areas where you can observe the only free-roaming elk herd in the Bay Area. Best during rutting season in fall.',
                locationDetails: 'Point Reyes Peninsula, 1 hour north via Highway 1. Free access.',
                tips: ['Elk are most active early morning and evening', 'Rutting season (Sept-Oct) offers dramatic behavior', 'Maintain safe distance - elk can be dangerous', 'Combine with Point Reyes lighthouse visit']
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
            },
            {
                name: 'Safari West African Wildlife Experience',
                description: 'African safari adventure in Sonoma County',
                duration: '6-8 hours',
                detailedDescription: 'Authentic African safari experience with giraffes, zebras, cheetahs, and more on 400 acres of Sonoma County hills. Includes guided jeep tours and walking experiences.',
                locationDetails: '3115 Porter Creek Rd, Santa Rosa. 1.5 hours north via 101. Advance reservations required.',
                tips: ['Full day experience with multiple tour options', 'Expensive but unforgettable', 'Overnight tent accommodations available', 'Photography tours offered seasonally']
            },
            {
                name: 'Whale Watching from Half Moon Bay',
                description: 'Full day whale and marine life watching expedition',
                duration: '6-8 hours',
                detailedDescription: 'Seasonal boat trips to see gray whales, humpback whales, dolphins, and other marine life. Peak seasons offer nearly guaranteed whale sightings.',
                locationDetails: 'Pillar Point Harbor, Half Moon Bay. 45 minutes south via Highway 1.',
                tips: ['Gray whale season Dec-Apr, humpback May-Nov', 'Bring seasickness medication', 'Dress very warmly in layers', 'Book ahead during peak whale seasons']
            },
            {
                name: 'Farallon Islands Seabird Watching',
                description: 'Boat trip to remote island wildlife sanctuary',
                duration: '8-10 hours',
                detailedDescription: 'Full day boat expedition to the Farallon Islands to observe massive seabird colonies, sea lions, and possible whale encounters. One of the most biodiverse spots on the California coast.',
                locationDetails: 'Departs from San Francisco Bay. Full day commitment with limited seasonal trips.',
                tips: ['Limited trips - book far in advance', 'Rough seas possible - seasickness medication essential', 'Cannot land on islands - viewing from boat only', 'Incredible photography opportunities']
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
            },
            {
                name: 'Santa Cruz Beach Boardwalk',
                description: 'Classic seaside amusement park with vintage rides',
                duration: '3-5 hours',
                detailedDescription: 'Historic beachfront amusement park featuring the famous Giant Dipper wooden roller coaster and classic carnival games. Perfect blend of vintage charm and modern fun.',
                locationDetails: '400 Beach St, Santa Cruz. 1 hour south via Highway 17. Paid parking available.',
                tips: ['Free admission - pay per ride or get wristband', 'Combine with beach time', 'Historic roller coaster is a must-ride', 'Very busy on summer weekends']
            },
            {
                name: 'Tilden Park Merry-Go-Round',
                description: 'Vintage carousel in scenic Berkeley hills park',
                duration: '2-3 hours',
                detailedDescription: 'Beautiful hand-carved carousel from 1911 in a lovely park setting. Combine with miniature train rides, playgrounds, and nature trails.',
                locationDetails: 'Tilden Regional Park, Berkeley Hills. 30 minutes from SF via tunnel roads.',
                tips: ['Very affordable vintage experience', 'Great for young families', 'Combine with park hiking trails', 'Seasonal hours - check before visiting']
            },
            {
                name: 'Blackberry Farm Family Fun Park',
                description: 'Small-scale family amusement park in Cupertino',
                duration: '2-4 hours',
                detailedDescription: 'Intimate family park with pony rides, train rides, and playground equipment. Perfect for families with very young children who might be overwhelmed by larger parks.',
                locationDetails: '10300 Blackberry Hill, Cupertino. 45 minutes south via 280. Free parking.',
                tips: ['Perfect for toddlers and preschoolers', 'Much less overwhelming than big theme parks', 'Affordable pricing', 'Bring picnic lunch to enjoy grounds']
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
                name: 'Californias Great America',
                description: 'Major theme park with roller coasters and family rides',
                duration: '4-6 hours',
                detailedDescription: 'Full-scale theme park featuring intense roller coasters, family rides, and seasonal events like Halloween Haunt. Mix of thrill rides and gentler attractions for all ages.',
                locationDetails: '4701 Great America Pkwy, Santa Clara. 1-hour drive from SF. Paid parking.',
                tips: ['Check seasonal operating schedule', 'Buy tickets online for discounts', 'Very crowded on weekends', 'Bring sunscreen and water']
            },
            {
                name: 'Exploratorium',
                description: 'Interactive science museum with hands-on exhibits',
                duration: '3-5 hours',
                detailedDescription: 'World-renowned science museum with hundreds of interactive exhibits covering physics, biology, and human perception. The Tactile Dome offers a unique crawling experience in complete darkness.',
                locationDetails: 'Pier 15, Embarcadero, San Francisco. Limited parking - public transit recommended.',
                tips: ['Tactile Dome requires separate timed tickets', 'Very popular with school groups weekdays', 'Thursday evening after dark sessions for adults', 'Can easily spend full day exploring']
            },
            {
                name: 'Gilroy Gardens Family Theme Park',
                description: 'Botanical theme park with unique tree attractions',
                duration: '4-6 hours',
                detailedDescription: 'Unique theme park combining rides with horticultural wonders, including circus trees and topiary gardens. Features family-friendly rides themed around gardens and nature.',
                locationDetails: '3050 Hecker Pass Hwy, Gilroy. 1.5 hours south via 101. Free parking.',
                tips: ['Seasonal operation - closed in winter', 'Great for families with younger kids', 'Unique circus trees are fascinating', 'Less crowded alternative to Great America']
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
            },
            {
                name: 'Disney California Adventure Weekend',
                description: 'Two-day trip to Disneyland Resort in Southern California',
                duration: '2 days',
                detailedDescription: 'Epic weekend adventure to experience both Disneyland and California Adventure parks. Includes character dining, parades, and exclusive attractions like Cars Land and Marvel Campus.',
                locationDetails: '1313 Disneyland Dr, Anaheim. 6-hour drive or 1.5-hour flight from SF.',
                tips: ['Book hotels and tickets far in advance', 'Consider Genie+ for shorter wait times', 'Two-day minimum recommended', 'Flying often cheaper than driving with hotel costs']
            },
            {
                name: 'Universal Studios Hollywood Day Trip',
                description: 'Movie studio theme park with cutting-edge attractions',
                duration: '8-12 hours',
                detailedDescription: 'Experience movie magic with behind-the-scenes studio tours, thrilling rides based on blockbuster films, and the famous Wizarding World of Harry Potter.',
                locationDetails: '100 Universal City Plaza, Universal City. 6-hour drive or 1.5-hour flight from SF.',
                tips: ['Studio tour is a must-do unique experience', 'Express passes can save hours of waiting', 'Consider flying for day trip', 'Park can be done in one very full day']
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
            },
            {
                name: 'Sausalito Waterfront Promenade',
                description: 'Scenic harbor walk with stunning bay views',
                duration: '1-2 hours',
                detailedDescription: 'Easy waterfront stroll through charming Sausalito with panoramic views of San Francisco skyline, Angel Island, and luxury yachts. Perfect for leisurely afternoon walks.',
                locationDetails: 'Downtown Sausalito waterfront. Take ferry from SF or drive via Golden Gate Bridge.',
                tips: ['Combine with ferry ride for car-free trip', 'Many cafes and restaurants along route', 'Great for photography', 'Can extend walk to houseboats area']
            },
            {
                name: 'Stevens Creek Trail',
                description: 'Paved multi-use trail through Silicon Valley',
                duration: '1-3 hours',
                detailedDescription: 'Flat, paved trail following Stevens Creek through parks, neighborhoods, and open space. Popular with families, cyclists, and dog walkers.',
                locationDetails: 'Multiple access points from Palo Alto to Mountain View. Free parking at various trailheads.',
                tips: ['Completely flat and family-friendly', 'Connects multiple parks and playgrounds', 'Good for strollers and wheelchairs', 'Plenty of shade in most sections']
            },
            {
                name: 'Napa River Walk',
                description: 'Peaceful riverside path through downtown Napa',
                duration: '1-2 hours',
                detailedDescription: 'Easy paved walk along the Napa River through downtown, passing parks, restaurants, and tasting rooms. Perfect for combining with wine country exploration.',
                locationDetails: 'Downtown Napa, multiple access points. 1 hour north via Highway 29. Free street parking.',
                tips: ['Flat and easy for all ages', 'Many restaurants and tasting rooms nearby', 'Great for morning or evening strolls', 'Can extend to Oxbow Public Market']
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
            },
            {
                name: 'Muir Woods National Monument',
                description: 'Walk among ancient coastal redwoods',
                duration: '2-4 hours',
                detailedDescription: 'Well-maintained boardwalks and paths through cathedral-like groves of 1,000-year-old coastal redwoods. Multiple loop options from easy to moderately challenging.',
                locationDetails: 'Muir Woods Rd, Mill Valley. 45 minutes north via Highway 1. Advance parking reservations required.',
                tips: ['Parking reservations essential', 'Cooler temperatures under tree canopy', 'Early morning visits are less crowded', 'Combine with Muir Beach visit']
            },
            {
                name: 'Angel Island State Park Perimeter Road',
                description: 'Island walking tour with 360-degree bay views',
                duration: '3-5 hours',
                detailedDescription: 'Circumnavigate Angel Island on paved Perimeter Road offering spectacular panoramic views of San Francisco, Marin, and East Bay. Rich immigration and military history.',
                locationDetails: 'Take ferry from SF, Sausalito, or Tiburon to Angel Island. Ferry schedules vary seasonally.',
                tips: ['Bring water and snacks - limited services on island', 'Can rent bikes for faster tour', 'Tram tours available for less walking', 'Ferry tickets required in advance']
            },
            {
                name: 'Alameda Creek Trail',
                description: 'Long flat trail from bay to hills',
                duration: '2-4 hours',
                detailedDescription: 'Paved 12-mile trail following Alameda Creek from San Francisco Bay to Niles Canyon. Great for longer walks with varied scenery from wetlands to rolling hills.',
                locationDetails: 'Multiple access points from Fremont to Union City. Free parking at various locations.',
                tips: ['Choose your distance - trail is very long', 'Mostly flat with gentle inclines', 'Popular with cyclists - stay alert', 'Great for bird watching near bay']
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
            },
            {
                name: 'Point Reyes Lighthouse Hike',
                description: 'Dramatic coastal hike to historic lighthouse',
                duration: '4-6 hours',
                detailedDescription: 'Challenging hike down steep cliffs to Point Reyes Lighthouse with spectacular ocean views and potential whale watching. Historic lighthouse perched dramatically on rocky cliffs.',
                locationDetails: 'Point Reyes National Seashore, 1.5 hours north via Highway 1. Free parking.',
                tips: ['Very steep return climb - 300+ steps', 'Often very windy and foggy', 'Whale watching season Dec-Apr', 'Lighthouse only open limited hours']
            },
            {
                name: 'Half Dome Day Hike from Yosemite',
                description: 'Epic granite dome hike with cables section',
                duration: '10-14 hours',
                detailedDescription: 'Legendary 16-mile round trip hike culminating in cable-assisted climb up the back of Half Dome. Requires permits, excellent fitness, and early start.',
                locationDetails: 'Yosemite Valley, 4-hour drive from SF. Advance permits required. Park entry fee.',
                tips: ['Permits required months in advance', 'Extremely strenuous - training recommended', 'Start before dawn for safety', 'Gloves essential for cables section']
            },
            {
                name: 'Mission Peak Regional Preserve',
                description: 'Steep climb to distinctive peak with panoramic views',
                duration: '3-5 hours',
                detailedDescription: 'Challenging 6-mile round trip hike to distinctive peak visible throughout the Bay Area. The famous pole at the summit offers incredible 360-degree views on clear days.',
                locationDetails: '680 Stanford Ave, Fremont. 45 minutes southeast via 880. Free parking.',
                tips: ['Very steep and exposed - start early', 'Bring plenty of water and sun protection', 'Can be extremely crowded on weekends', 'Instagram-famous summit pole']
            }
        ]
    },

    'ADVENTURE': {
        'chill': [
            {
                name: 'Segway Tour of Golden Gate Park',
                description: 'Guided Segway exploration of the park',
                duration: '2-3 hours',
                detailedDescription: 'Easy introduction to Segway riding while exploring Golden Gate Park highlights. Includes brief training and guided tour of major attractions.',
                locationDetails: 'Multiple tour companies in SF. Tours typically start from Fishermans Wharf area.',
                tips: ['No experience necessary - training included', 'Minimum age restrictions apply', 'Wear comfortable closed-toe shoes', 'Tours cancelled in heavy rain']
            },
            {
                name: 'Bay Area Discovery Museum Adventure',
                description: 'Hands-on exploration and discovery activities',
                duration: '2-4 hours',
                detailedDescription: 'Interactive museum designed for kids with outdoor adventure elements including climbing structures, water play, and art creation in beautiful Marin setting.',
                locationDetails: '557 McReynolds Rd, Sausalito. Under Golden Gate Bridge. Free parking.',
                tips: ['Designed for kids 0-10', 'Outdoor areas weather dependent', 'Great bay views from location', 'Combine with Marin Headlands exploration']
            },
            {
                name: 'Treasure Island Adventure',
                description: 'Urban exploration of former military island',
                duration: '2-3 hours',
                detailedDescription: 'Explore the fascinating history and art installations on this former Navy base turned arts community. Features unique views of SF skyline and Bay Bridge.',
                locationDetails: 'Treasure Island, San Francisco. Free parking available.',
                tips: ['Free to explore public areas', 'Amazing city skyline views', 'Artist studios and galleries to visit', 'Windy - bring layers']
            }
        ],
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
            },
            {
                name: 'Sea Kayaking to Angel Island',
                description: 'Guided kayak tour to historic Angel Island',
                duration: '4-6 hours',
                detailedDescription: 'Paddle from Sausalito or Tiburon to Angel Island with guided instruction. Explore secluded coves and learn about island history while enjoying bay views.',
                locationDetails: 'Launch from Sausalito or Tiburon. Multiple tour companies available.',
                tips: ['Previous kayaking experience helpful', 'Dress for cold water conditions', 'Tours weather dependent', 'Includes all equipment and instruction']
            },
            {
                name: 'Wine Country Hot Air Ballooning',
                description: 'Sunrise balloon flight over Napa Valley',
                duration: '4-5 hours',
                detailedDescription: 'Early morning hot air balloon ride over Napa Valley vineyards followed by champagne breakfast. Unforgettable aerial views of wine country.',
                locationDetails: 'Various launch sites in Napa Valley. 1 hour drive from SF. Transportation often included.',
                tips: ['Very early morning start required', 'Weather dependent - flights may be cancelled', 'Expensive but once-in-a-lifetime experience', 'Book well in advance']
            },
            {
                name: 'Marin Headlands Horseback Riding',
                description: 'Guided horseback tours with ocean views',
                duration: '2-4 hours',
                detailedDescription: 'Horseback riding through Marin Headlands with stunning Pacific Ocean and Golden Gate Bridge views. Suitable for beginners to experienced riders.',
                locationDetails: 'Miwok Livery, Tennessee Valley. 30 minutes north via Golden Gate Bridge.',
                tips: ['All skill levels welcome', 'Wear long pants and closed-toe shoes', 'Advance reservations required', 'Tours may be cancelled in bad weather']
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
            },
            {
                name: 'Skydiving over Monterey Bay',
                description: 'Tandem skydiving with coastal views',
                duration: '4-6 hours',
                detailedDescription: 'Tandem skydiving from 15,000 feet with spectacular views of Monterey Bay, Santa Cruz Mountains, and Pacific coastline. Includes training and video packages available.',
                locationDetails: 'Monterey Regional Airport, 2 hours south of SF. Transportation or overnight stay recommended.',
                tips: ['Weather dependent - may be rescheduled', 'Weight and age restrictions apply', 'Video/photo packages available', 'Book well in advance']
            },
            {
                name: 'Paragliding from Mount Tamalpais',
                description: 'Solo or tandem paragliding adventure',
                duration: '4-8 hours',
                detailedDescription: 'Launch from Mount Tamalpais for paragliding flights over Marin County with incredible bay views. Includes instruction for beginners or tandem flights.',
                locationDetails: 'Various launch sites on Mount Tamalpais, Marin County. 45 minutes north of SF.',
                tips: ['Weather and wind dependent', 'Instruction course required for solo flights', 'Tandem flights available for beginners', 'Amazing photography opportunities']
            },
            {
                name: 'Big Sur Backpacking Adventure',
                description: 'Multi-day wilderness backpacking trip',
                duration: '2-3 days',
                detailedDescription: 'Epic backpacking adventure through Big Sur wilderness with coastal redwoods, rugged coastline, and pristine wilderness. Various trail options for different skill levels.',
                locationDetails: 'Big Sur area, 3-hour drive south via Highway 1. Permits may be required.',
                tips: ['Requires backpacking gear and experience', 'Check trail conditions and fire restrictions', 'Book campsites well in advance', 'Bring layers for changing weather']
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
            },
            {
                name: 'Sausalito Houseboats Tour',
                description: 'Self-guided walk through floating home community',
                duration: '1-2 hours',
                detailedDescription: 'Explore the unique floating home community in Sausalito featuring colorful houseboats, artistic gardens, and bohemian lifestyle. Peaceful waterside stroll.',
                locationDetails: 'Waldo Point and Issaquah Dock, Sausalito. Free street parking available.',
                tips: ['Respect residents privacy', 'Great for photography', 'Combine with downtown Sausalito visit', 'Some houseboats are works of art']
            },
            {
                name: 'Foster City Lagoon Walk',
                description: 'Easy lagoon walk in planned waterfront community',
                duration: '1-2 hours',
                detailedDescription: 'Peaceful walk around man-made lagoons in Foster City with calm water views, modern architecture, and well-maintained paths. Perfect for easy exercise.',
                locationDetails: 'Foster City, 30 minutes south via 101. Multiple parking areas available.',
                tips: ['Completely flat and paved', 'Good for jogging or cycling', 'Several lagoons to explore', 'Less crowded than SF waterfront areas']
            },
            {
                name: 'Half Moon Bay Harbor',
                description: 'Charming fishing harbor with coastal views',
                duration: '1-2 hours',
                detailedDescription: 'Stroll through working fishing harbor with colorful boats, fresh seafood vendors, and coastal atmosphere. Watch fishing boats come and go.',
                locationDetails: 'Pillar Point Harbor, Half Moon Bay. 45 minutes south via Highway 1.',
                tips: ['Great fresh seafood at harbor restaurants', 'Best boat activity in morning', 'Combine with coastal drive', 'Can be very windy']
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
            },
            {
                name: 'Stand-up Paddleboarding in Sausalito',
                description: 'SUP lessons and tours in protected waters',
                duration: '2-3 hours',
                detailedDescription: 'Learn stand-up paddleboarding in the calm, protected waters near Sausalito with stunning views of San Francisco skyline and Angel Island.',
                locationDetails: 'Schoonmaker Beach, Sausalito. Multiple SUP rental and lesson companies.',
                tips: ['Beginner-friendly protected waters', 'Wetsuit usually included', 'Great core workout', 'Fall in water is part of learning']
            },
            {
                name: 'Russian River Canoeing',
                description: 'Peaceful river paddling through wine country',
                duration: '3-5 hours',
                detailedDescription: 'Gentle river canoeing through Sonoma County wine country with stops at beaches and riverside towns. Family-friendly with stunning scenery.',
                locationDetails: 'Various launch points along Russian River, 1.5 hours north via 101.',
                tips: ['Summer offers warmest water', 'Shuttle service usually included', 'Bring waterproof bag for belongings', 'Can combine with wine tasting']
            },
            {
                name: 'Lake Chabot Regional Park Boating',
                description: 'Freshwater boating and fishing in East Bay hills',
                duration: '3-4 hours',
                detailedDescription: 'Rent boats or bring your own to beautiful Lake Chabot surrounded by rolling hills. Popular for fishing, rowing, and peaceful water recreation.',
                locationDetails: '17600 Lake Chabot Rd, Castro Valley. 45 minutes east via 580. Entry fee required.',
                tips: ['Boat rentals available on weekends', 'Great for fishing enthusiasts', 'Hiking trails around lake', 'Picnic areas available']
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
            },
            {
                name: 'Monterey Bay Sea Kayaking Adventure',
                description: 'Multi-day sea kayaking expedition',
                duration: '6-8 hours or multi-day',
                detailedDescription: 'Advanced sea kayaking in Monterey Bay with opportunities to paddle with sea otters, seals, and possibly whales. Includes camping options for multi-day trips.',
                locationDetails: 'Various launch points in Monterey Bay area, 2 hours south of SF.',
                tips: ['Previous kayaking experience required', 'Weather and swell dependent', 'Wildlife encounters possible but not guaranteed', 'Camping permits needed for overnight trips']
            },
            {
                name: 'Whitewater Rafting on American River',
                description: 'Class III-IV rapids adventure near Sacramento',
                duration: '6-8 hours',
                detailedDescription: 'Thrilling whitewater rafting on American River with Class III-IV rapids. Professional guides ensure safety while delivering adrenaline-pumping adventure.',
                locationDetails: 'American River, 2 hours northeast via I-80. Multiple outfitters available.',
                tips: ['Season typically April-September', 'Swimming ability required', 'Lunch usually included', 'Expect to get completely soaked']
            },
            {
                name: 'Lake Tahoe Multi-Sport Water Adventure',
                description: 'Full day water sports at alpine lake',
                duration: '6-10 hours',
                detailedDescription: 'Epic day at Lake Tahoe combining multiple water activities: jet skiing, paddleboarding, kayaking, and boat tours of the crystal-clear alpine lake.',
                locationDetails: 'South Lake Tahoe, 4-hour drive from SF via I-80. Multiple rental companies.',
                tips: ['Summer offers warmest water', 'High altitude - bring sunscreen', 'Book accommodations for overnight trip', 'Water is very cold even in summer']
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
            },
            {
                name: 'Dolores Park Pickup Sports',
                description: 'Casual pickup games in popular SF park',
                duration: '1-3 hours',
                detailedDescription: 'Join pickup soccer, ultimate frisbee, or volleyball games at Dolores Park. Friendly community welcomes players of all skill levels.',
                locationDetails: 'Dolores Park, Mission District, SF. Street parking available.',
                tips: ['Weekend afternoons most active', 'Just show up and ask to join', 'Bring water - limited shade', 'Games are weather dependent']
            },
            {
                name: 'Miniature Golf at Pier 39',
                description: 'Family-friendly mini golf with bay views',
                duration: '1-2 hours',
                detailedDescription: 'Two-level miniature golf course at Pier 39 with San Francisco landmarks as obstacles. Great for families and couples.',
                locationDetails: 'Pier 39, Fishermans Wharf, SF. Paid parking or public transit recommended.',
                tips: ['Gets busy during tourist season', 'Good for all ages', 'Combine with other Pier 39 activities', 'Indoor alternative on foggy days']
            },
            {
                name: 'Bowling at Presidio Bowl',
                description: 'Vintage bowling alley with modern amenities',
                duration: '1-2 hours',
                detailedDescription: 'Classic bowling experience at historic Presidio location with updated lanes, food service, and occasional live music events.',
                locationDetails: '93 Moraga Ave, Presidio, SF. Free parking available.',
                tips: ['Reservations recommended for weekends', 'Cosmic bowling events on weekends', 'Full bar and restaurant on-site', 'Shoe rental included']
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
            },
            {
                name: 'Golf at Lincoln Park',
                description: 'Scenic 18-hole public golf course',
                duration: '4-5 hours',
                detailedDescription: 'Play golf with stunning Golden Gate Bridge and ocean views at San Franciscos most scenic public course. Challenging layout with coastal winds.',
                locationDetails: '300 34th Ave, SF. Near Legion of Honor museum. Street parking available.',
                tips: ['Book tee times in advance', 'Bring warm clothes - very windy', 'Can walk or rent cart', 'Combine with Legion of Honor visit']
            },
            {
                name: 'Oakland As Baseball Game',
                description: 'Major League Baseball in the East Bay',
                duration: '3-4 hours',
                detailedDescription: 'Catch an Oakland Athletics game at the Oakland Coliseum. More affordable than Giants games with enthusiastic local fan base.',
                locationDetails: 'Oakland Coliseum, 7000 Coliseum Way, Oakland. Free parking available.',
                tips: ['Much cheaper than Giants tickets', 'Free parking is major advantage', 'Take BART to avoid traffic', 'Smaller, more intimate venue']
            },
            {
                name: 'Bay Area Derby Racing',
                description: 'Roller derby matches with local teams',
                duration: '2-3 hours',
                detailedDescription: 'Watch fast-paced roller derby action with Bay Area Roller Derby teams. High-energy sport with enthusiastic, welcoming community.',
                locationDetails: 'Various venues around Bay Area. Check schedule for current location.',
                tips: ['Family-friendly despite intense action', 'Very affordable entertainment', 'Bring cash for concessions', 'Community is very welcoming to newcomers']
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
            },
            {
                name: 'San Francisco Marathon',
                description: 'Challenging 26.2-mile race through the city',
                duration: '6-8 hours',
                detailedDescription: 'Annual marathon featuring challenging hills, stunning bay views, and passage across Golden Gate Bridge. One of Americas most scenic marathon courses.',
                locationDetails: 'Race starts and ends in Golden Gate Park. Occurs annually in summer.',
                tips: ['Serious training required for full marathon', 'Half marathon option also available', 'Very hilly course - not for beginners', 'Register months in advance']
            },
            {
                name: 'Alcatraz Island Triathlon',
                description: 'Swim from Alcatraz plus bike and run',
                duration: '4-6 hours',
                detailedDescription: 'Epic triathlon starting with 1.5-mile swim from Alcatraz Island to shore, followed by challenging bike and run segments through San Francisco.',
                locationDetails: 'Start at Alcatraz Island, finish at Crissy Field. Annual event with limited spots.',
                tips: ['Must be very strong swimmer', 'Cold water swimming experience required', 'Register far in advance - limited spots', 'Wetsuit strongly recommended']
            },
            {
                name: 'Big Sur International Marathon',
                description: 'Spectacular coastal marathon through Big Sur',
                duration: '8-10 hours including travel',
                detailedDescription: 'World-renowned marathon along dramatic Big Sur coastline with redwood forests and ocean views. Considered one of the most beautiful marathons in the world.',
                locationDetails: 'Carmel to Big Sur, 3-hour drive south of SF. Annual April event.',
                tips: ['Register very early - sells out quickly', 'Challenging hills and weather', 'Plan overnight stay in area', 'Shuttle transportation usually required']
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