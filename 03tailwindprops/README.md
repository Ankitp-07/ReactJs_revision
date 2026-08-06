# React using Vite integrated with Tailwind CSS
steps used : 
1. Create a new React project using Vite.
    npm create vite@latest my-project
    cd my-project
2. Install Tailwind CSS and its dependencies.
        npm install tailwindcss @tailwindcss/vite

3. Configure Tailwind CSS by adding remaining content of this in `vite.config.js` file. such as plugin and import '@tailwindcss/vite'

        import { defineConfig } from 'vite'
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
        plugins: [
            tailwindcss(),
        ],
        })



4. Import Tailwind CSS
Add an @import to your CSS file i.e `src/index.css` that imports Tailwind CSS.    
        @import "tailwindcss";

5. Start your build process 
    npm run dev

6.  NOw start using Tailwind in Our HTML 
