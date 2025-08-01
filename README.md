# Random Adventure Picker - San Francisco Bay Area

Break out of your same-place rut! Discover amazing activities across the San Francisco Bay Area with this interactive spinning wheel adventure picker.

![Adventure Picker Demo](https://img.shields.io/badge/Status-Ready%20to%20Spin-brightgreen)

## 🎯 Features

- **Interactive Spinning Wheel**: Physics-based wheel with realistic momentum and friction
- **7 Activity Categories**: Art, Animals, Theme Parks, Walks, Adventure, Water, Sport
- **Rich Activity Database**: Detailed information for dozens of Bay Area activities
- **Sound Effects**: Web Audio API-powered spinning, celebration, and click sounds
- **Confetti Animation**: Canvas-based particle system for celebrations
- **Sound Control**: Toggle sound on/off with preference persistence
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **Hand-drawn Aesthetic**: Carnival-inspired design with watercolor background

## 🚀 Quick Start

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd random-adventure-picker
   ```

2. **Open in browser**:
   ```bash
   open index.html
   ```
   Or simply double-click `index.html` to open in your default browser.

3. **Start exploring**:
   - Click the spinning wheel to discover your next adventure
   - Use the sound toggle (🔊/🔇) in the top-right corner
   - Click "Tell me more" for detailed activity information

## 🎮 How to Use

1. **Spin the Wheel**: Click anywhere on the colorful wheel to spin
2. **Discover Activities**: Watch as the wheel selects from 7 categories:
   - 🎨 **Art**: Museums, galleries, street art tours
   - 🦁 **Animals**: Zoos, aquariums, wildlife centers
   - 🎢 **Theme Parks**: Amusement parks, family entertainment
   - 🚶 **Walks**: Scenic trails, urban hikes, park strolls
   - 🏔️ **Adventure**: Extreme sports, challenging activities
   - 🌊 **Water**: Bay activities, beaches, water sports
   - ⚽ **Sport**: Games, recreational activities
3. **Get Details**: Each activity includes duration, description, location info, and helpful tips
4. **Control Sound**: Toggle audio effects on/off as desired

## 🛠 Technical Details

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Hand-drawn styling, animations, responsive grid
- **Vanilla JavaScript (ES6+)**: No frameworks, pure web standards
- **Web Audio API**: Procedural sound generation
- **Canvas API**: Confetti particle system
- **SVG**: Scalable wheel graphics
- **localStorage**: User preference persistence

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

### Performance Features
- Lightweight vanilla JS (no dependencies)
- Optimized animations using requestAnimationFrame
- Efficient particle system with cleanup
- Responsive images and scalable graphics

## 📱 Responsive Design

The application adapts to different screen sizes:

- **Desktop** (1024px+): Full three-column layout
- **Tablet** (768px-1023px): Stacked layout with optimized spacing
- **Mobile** (320px-767px): Single column with touch-friendly controls

## 🔊 Audio Features

- **Spinning Sound**: Realistic wheel spinning with pitch/volume decay
- **Celebration Sound**: Musical chord sequence on activity selection
- **Click Feedback**: Immediate audio response to interactions
- **Sound Toggle**: Easy on/off control with visual feedback
- **Preference Memory**: Remembers your sound setting between sessions

## 🎨 Design Philosophy

The application features a hand-drawn, carnival-inspired aesthetic:

- **Color Palette**: Warm oranges and cool blues with cream background
- **Typography**: Playful fonts (Kalam, Caveat) for friendly feel
- **Interactions**: Subtle hover effects and smooth transitions
- **Visual Hierarchy**: Clear organization with rotating elements for whimsy

## 🗄 Activity Database

The app includes a comprehensive database of Bay Area activities:

- **50+ Activities**: Real places with accurate information
- **Difficulty Levels**: Chill, Moderate, and Epic options
- **Detailed Info**: Duration, description, location, and insider tips
- **Geographic Coverage**: San Francisco, Oakland, and surrounding areas

## 🚧 Development

### File Structure
```
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and responsive design
├── script.js           # All JavaScript functionality
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

### Key Components
- **Wheel Generation**: Dynamic SVG creation with category segments
- **Physics Engine**: Custom momentum and friction calculations
- **Audio System**: Web Audio API sound synthesis
- **Confetti System**: Canvas-based particle animation
- **Activity Engine**: Smart category and difficulty selection

### Code Quality
- ✅ No external dependencies
- ✅ Clean, commented code
- ✅ Responsive design patterns
- ✅ Accessibility considerations
- ✅ Error handling for audio APIs
- ✅ Browser compatibility checks

## 🎯 Future Enhancements

Potential improvements for future versions:

- [ ] Additional Bay Area cities (San Jose, Marin, Peninsula)
- [ ] User favorites and history tracking
- [ ] Social sharing of discovered activities  
- [ ] Seasonal activity filtering
- [ ] Integration with maps and directions
- [ ] User-submitted activity suggestions

## 🤝 Contributing

This is a personal project, but suggestions are welcome! Feel free to:

1. Report bugs or issues
2. Suggest new Bay Area activities
3. Propose feature enhancements
4. Share feedback on user experience

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Activity information sourced from local Bay Area resources
- Sound effects generated using Web Audio API
- Design inspired by vintage carnival aesthetics
- Built with love for the San Francisco Bay Area community

---

**Ready to break your same-place rut? [Start spinning!](index.html)** 🎡

*Built with vanilla web technologies for maximum compatibility and performance.*