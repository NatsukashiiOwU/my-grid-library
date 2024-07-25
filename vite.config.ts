import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';
import { defineConfig } from 'vite';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        wyw({
            include: ['**/*.{ts,tsx}'],
            babelOptions: {
            presets: ['@babel/preset-typescript', '@babel/preset-react'],
            },
        }),
    ],
    build: {
        lib: {
            entry: 'src/Grid/GridContainer.tsx',
            name: 'my-grid-library',
            fileName: (format) => `my-grid-library.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom', '@linaria/react', '@viselect/react', 'antd'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    '@linaria/react': 'linaria',
                    '@viselect/react': 'Viselect',
                    antd: 'antd'
                }
            }
        }
    }
});
