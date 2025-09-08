# 🔥 Get Roasted

A fun and interactive web app for UX teams to upload their designs and receive hilariously honest (but constructive) feedback. Built with React for internal team use to foster creativity and camaraderie through design critiques.

## ✨ Features

- **🎨 Drag & Drop Upload** - Easy image upload with support for PNG, JPG, GIF, and WebP
- **😂 Hilarious Roasts** - Get funny but constructive feedback on your designs
- **🔍 Full-Screen Preview** - Zoom in to view designs in detail with overlay modal
- **💾 Local Storage** - Your roasted designs persist between sessions
- **📱 Responsive Design** - Works seamlessly on desktop and mobile devices
- **🗑️ Design Management** - Delete individual designs or clear all at once
- **⚡ Real-Time Feedback** - Instant roast generation upon upload

## 🚀 Live Demo

The app is currently running locally. To deploy it live, see the [Deployment](#deployment) section below.

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Styling**: CSS3 with modern features
- **File Upload**: react-dropzone
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Storage**: Browser Local Storage

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nishadesign/roast-your-design.git
   cd roast-your-design
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 How to Use

1. **Upload a Design**: Drag and drop an image file or click to browse
2. **Get Roasted**: Receive instant, hilarious feedback on your design
3. **View Full Size**: Hover over any design and click the zoom icon for full-screen preview
4. **Manage Designs**: Delete individual designs or clear all with one click
5. **Share the Fun**: Let your team members roast each other's work!

## 📁 Project Structure

```
src/
├── components/
│   ├── DesignCard.js          # Individual design display component
│   ├── DesignCard.css         # Design card styling
│   ├── UploadZone.js          # Drag & drop upload component
│   └── UploadZone.css         # Upload zone styling
├── App.js                     # Main application component
├── App.css                    # Global app styling
├── index.js                   # React app entry point
├── index.css                  # Global CSS reset and base styles
└── roastGenerator.js          # Roast message generation logic
```

## 🎨 Design Philosophy

This app embraces a **constructive roasting** approach:
- **Funny but Fair**: Roasts are designed to be humorous while providing actionable feedback
- **Team Building**: Encourages open dialogue about design decisions
- **Learning Focused**: Each roast includes positive reinforcement and growth mindset
- **Safe Environment**: Creates a judgment-free zone for design experimentation

## 🚀 Deployment

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Run: `npm run build && npm run deploy`

## 🤝 Contributing

This is an internal UX team project, but contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎭 Sample Roasts

Here are some examples of the constructive feedback you might receive:

> "This color palette looks like it was chosen by someone wearing sunglasses in a dark room. 🕶️ But hey, at least it's memorable! 😄"

> "I love how you used 47 different fonts. Really shows your commitment to variety! 📚 Keep iterating, you're on the right track! 🚀"

## 🐛 Known Issues

- None currently! If you find any bugs, please open an issue.

## 📄 License

This project is for internal use by the UX team. Feel free to adapt it for your own team's needs!

## 👥 Team

Built with ❤️ for the UX team by [nishadesign](https://github.com/nishadesign)

---

**Remember**: We roast because we care! 🔥✨
