# Brightkey Real Estate Website

A modern, fully responsive real estate website built with React, Tailwind CSS, and Framer Motion. Features a neo-brutalist design aesthetic with smooth animations and bilingual support (English/Turkish).

## Features

- 🏠 **Property Listings**: Browse, search, and filter properties
- 🌍 **Bilingual Support**: Switch between English and Turkish
- 🎨 **Neo-Brutalist Design**: Bold colors, thick borders, and striking shadows
- ✨ **Smooth Animations**: Powered by Framer Motion
- 📱 **Fully Responsive**: Works on all devices
- 🔍 **Advanced Search**: Filter by city, area, postcode, price, bedrooms, and property type
- 👥 **Agent Profiles**: Meet the team with detailed agent pages
- 📧 **Contact Forms**: Multiple contact points for inquiries
- 🖼️ **Image Galleries**: Property detail pages with image galleries
- 🎯 **No Backend Required**: Pure frontend application with fictional data

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Router**: Client-side routing

## Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd brightkey-realestate
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit the URL shown in the terminal (usually `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

The production files will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
brightkey-realestate/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx       # Navigation with language toggle
│   │   ├── Hero.jsx         # Homepage hero section
│   │   ├── PropertyCard.jsx # Property listing card
│   │   └── Footer.jsx       # Site footer
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Homepage
│   │   ├── Listings.jsx     # Property listings with filters
│   │   ├── PropertyDetail.jsx  # Individual property page
│   │   ├── Agents.jsx       # Agent directory
│   │   ├── About.jsx        # About page
│   │   ├── Contact.jsx      # Contact page
│   │   └── Sell.jsx         # Sell property page
│   ├── context/             # React Context
│   │   └── LanguageContext.jsx  # Language management
│   ├── data/                # Mock data
│   │   ├── properties.js    # Property listings
│   │   ├── agents.js        # Agent profiles
│   │   └── translations.js  # English/Turkish translations
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles with Tailwind
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## Pages

- **Home** (`/`): Hero section, featured properties, and call-to-action
- **Listings** (`/listings`): All properties with search and filter functionality
- **Property Detail** (`/property/:id`): Individual property with gallery, details, and contact form
- **Agents** (`/agents`): Meet the team with agent profiles
- **About** (`/about`): Company mission, vision, and values
- **Contact** (`/contact`): Contact form and office information
- **Sell** (`/sell`): Form for property owners to list their properties

## Language Toggle

Click the EN/TR button in the top-right corner of the navigation bar to switch between English and Turkish.

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#ffd23f',    // Yellow
  secondary: '#ff4d6d',  // Pink/Red
  tertiary: '#3a86ff',   // Blue
  dark: '#1a1a2e',       // Dark navy
  light: '#f4f1ff',      // Light purple
}
```

### Data

- **Properties**: Edit `src/data/properties.js`
- **Agents**: Edit `src/data/agents.js`
- **Translations**: Edit `src/data/translations.js`

### Images

All images are sourced from Unsplash. Replace the URLs in the data files with your own images.

## Notes

- This is a **frontend-only** application with no backend
- All data is **fictional** and for demonstration purposes only
- Contact forms show alerts but don't actually send messages
- All email addresses and phone numbers are fictional

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes only.

## Credits

- Images: [Unsplash](https://unsplash.com)
- Icons: Emoji
- Fonts: [Google Fonts (Poppins)](https://fonts.google.com/specimen/Poppins)
