# 🎯 Random Adventure Picker - San Francisco Bay Area

Breaking the same-place rut with a fun spinning wheel that discovers amazing activities across the San Francisco Bay Area!

## ✨ Features

### 🎪 Interactive Spinning Wheel
- **7 Activity Categories**: Art, Animals, Theme Parks, Walks, Adventure, Water, Sport
- **Unique Color Palette**: Each category has its own distinct, washed-out color for easy identification
- **Physics-Based Spinning**: Realistic wheel physics with momentum and friction
- **Visual Feedback**: Selected segments are highlighted with enhanced effects

### 🎨 Beautiful Design
- **Watercolor Aesthetic**: Hand-drawn feel with subtle imperfections and artistic touches
- **Floating Adventure Icons**: Animated background icons that gently float and rotate
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Adventurous Typography**: Custom fonts (Kalam, Caveat) for a playful, hand-drawn feel

### 🔊 Audio Experience
- **Web Audio API**: Custom-generated sound effects using oscillators
- **Interactive Sounds**: Click, spinning, and celebration sounds
- **Sound Toggle**: Easy on/off control with localStorage persistence
- **Accessibility**: Respects user's reduced-motion preferences

### 🎉 Visual Effects
- **Canvas Confetti**: Particle system with realistic physics and multiple colors
- **Smooth Animations**: CSS transitions and keyframe animations throughout
- **Hover Effects**: Interactive feedback on all clickable elements
- **Loading States**: Visual cues during wheel spinning

### 🔍 Smart Features
- **Google Search Integration**: One-click search for selected activities
- **Detailed Activity Info**: Expandable details with tips, locations, and descriptions
- **Difficulty Levels**: Activities categorized by effort level (Chill, Moderate, Epic)
- **Rich Activity Database**: 50+ carefully curated Bay Area activities

## 🏗️ Technical Implementation

### Frontend Technologies
- **Vanilla JavaScript (ES6+)**: No frameworks, pure web technologies
- **CSS Grid & Flexbox**: Modern responsive layouts
- **SVG Graphics**: Scalable wheel segments and pointer
- **Canvas API**: High-performance confetti particle system
- **Web Audio API**: Real-time sound generation
- **LocalStorage**: User preference persistence

### Performance Optimizations
- **Efficient Animations**: RequestAnimationFrame for smooth 60fps animations
- **Memory Management**: Proper cleanup of audio contexts and canvas particles
- **Lazy Loading**: Sounds generated on-demand to reduce initial load time
- **Optimized Rendering**: Minimal DOM manipulation during animations

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (ES6+ support required)
- **Mobile Support**: Touch-friendly interactions and responsive design
- **Progressive Enhancement**: Graceful degradation when Web Audio API unavailable

## 🎮 How to Use

1. **Spin the Wheel**: Click the colorful spinning wheel to start your adventure
2. **Wait for Results**: Watch as the wheel spins with realistic physics and sound
3. **Discover Activities**: Get a random activity suggestion with category-matched colors
4. **Learn More**: Click "Tell me more" for detailed information, tips, and locations
5. **Find Online**: Use the "🔍 Find on Google" button to search for more information
6. **Toggle Sound**: Use the speaker icon to enable/disable audio effects

## 📁 Project Structure

```
/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and animations
├── script.js           # Core JavaScript functionality
└── README.md          # This documentation
```

### Key JavaScript Components

- **Activity Database**: Comprehensive collection of Bay Area activities
- **Wheel System**: Physics-based spinning with segment detection
- **Audio Engine**: Web Audio API sound generation
- **Confetti System**: Canvas-based particle effects
- **UI Controller**: DOM manipulation and event handling

## 🎨 Design Philosophy

### Visual Aesthetics
- **Hand-Drawn Feel**: Slightly imperfect borders, rotated elements, and organic shapes
- **Watercolor Inspiration**: Soft gradients, bleeding effects, and artistic textures
- **Playful Typography**: Mix of handwritten-style fonts for personality
- **Adventure Theme**: Colors and icons that evoke exploration and discovery

### User Experience
- **Immediate Feedback**: Every interaction provides visual and audio response
- **Discovery-Focused**: Designed to encourage exploration of new activities
- **Accessibility-First**: Works with screen readers and respects motion preferences
- **Mobile-Optimized**: Touch-friendly targets and responsive layouts

## 🎯 Activity Categories

### 🎨 Art
- Street art tours, museums, galleries, and creative experiences
- *Example: Mission District Murals, SFMOMA, Berkeley Art Museum*

### 🦁 Animals
- Zoos, aquariums, wildlife centers, and animal encounters
- *Example: SF Zoo, Oakland Zoo, Marine Mammal Center*

### 🎢 Theme Parks
- Amusement parks, entertainment complexes, and family attractions
- *Example: Great America, Six Flags Discovery Kingdom, Pier 39*

### 🚶 Walks
- Urban walks, scenic routes, and leisurely explorations
- *Example: Golden Gate Park, Lands End, Lake Merritt*

### 🏔️ Adventure
- Outdoor activities, challenging experiences, and thrill-seeking
- *Example: Alcatraz, Golden Gate Bridge bike ride, Mount Tamalpais*

### 🌊 Water
- Beach activities, water sports, and aquatic adventures
- *Example: Ocean Beach surfing, Bay kayaking, Stow Lake pedal boats*

### ⚽ Sport
- Athletic activities, games, and sporting events
- *Example: Giants baseball, Warriors basketball, Golden Gate Park tennis*

## 🔧 Installation & Setup

### Quick Start
1. Clone the repository
2. Open `index.html` in a modern web browser
3. No build process or dependencies required!

### Local Development
```bash
# Clone the repository
git clone https://github.com/jamestyack/1-random-adventure-picker.git

# Navigate to directory
cd 1-random-adventure-picker

# Open in browser (or use a local server)
open index.html
```

### Recommended Local Server
```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server

# Then visit http://localhost:8000
```

## 🤝 Contributing

### Adding New Activities
1. Edit the `bayAreaActivities` object in `script.js`
2. Follow the existing structure with required fields:
   - `name`: Activity title
   - `description`: Brief description
   - `duration`: Time commitment
   - `detailedDescription`: Longer explanation
   - `locationDetails`: Address and transportation info
   - `tips`: Array of helpful tips

### Customizing Colors
1. Modify the `activityCategories` array in `script.js`
2. Update corresponding CSS variables if needed
3. Ensure sufficient contrast for accessibility

## 📱 Browser Support

- **Chrome**: Full support (recommended)
- **Firefox**: Full support
- **Safari**: Full support (iOS 12+)
- **Edge**: Full support (Chromium-based)

### Required Features
- ES6+ JavaScript support
- CSS Grid and Flexbox
- Web Audio API (for sounds)
- Canvas API (for confetti)
- SVG support

## 🎵 Audio Credits

All sounds are generated programmatically using the Web Audio API:
- **Spinning Sound**: Sawtooth wave with frequency modulation
- **Celebration**: Harmonic sequence (C5, E5, G5, C6)
- **Click Sound**: Square wave with exponential decay

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **San Francisco Bay Area**: For providing endless amazing activities to discover
- **Web Audio API**: For enabling rich sound experiences
- **Canvas API**: For beautiful particle effects
- **Modern CSS**: For enabling creative layouts and animations

---

**🎯 Ready to break the same-place rut? Spin the wheel and discover your next San Francisco Bay Area adventure!**

*🤖 Generated with [Claude Code](https://claude.ai/code)*