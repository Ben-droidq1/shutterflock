# Image Gallery App

A beautiful, responsive image gallery built with React and Vite that fetches images from the Pixabay API.

## Features

- 🔍 **Search Functionality**: Search for images by keywords
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- ⚡ **Fast Loading**: Built with Vite for optimal performance
- 🎨 **Modern UI**: Styled with Tailwind CSS
- 🖼️ **Image Details**: View image statistics (views, downloads, likes)
- 🏷️ **Tags**: Browse images by tags
- 🔄 **Loading States**: Smooth loading indicators and error handling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Get a free API key from [Pixabay](https://pixabay.com/api/docs/)

4. Create a `.env` file in the root directory and add your API key:
   ```
   VITE_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── App.jsx           # Main application component
├── imageSearch.jsx   # Search component
├── image.jsx         # Individual image card component
├── main.jsx          # Application entry point
└── index.css         # Global styles
```

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Pixabay API** - Image data source

## API Reference

This app uses the [Pixabay API](https://pixabay.com/api/docs/) to fetch images. The API provides:

- High-quality stock images
- Search by keywords
- Image metadata (views, downloads, likes, tags)
- No authentication required for basic usage

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
