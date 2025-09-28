import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',  // ⬅️ به Vite می‌گوید این فایل‌ها را مدیریت کن
                'resources/js/app.js'     // ⬅️ نقطه ورود برنامه
            ],
            refresh: true, // ⬅️ Hot Reload برای فایل‌های Blade
        }),
    ],
    optimizeDeps: {
        include: ['jquery'] // ⬅️ بهینه‌سازی برای jQuery
    },
    build: {
        assetsDir: 'assets', // این تنظیم فقط برای build production اثر دارد
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    // مدیریت نام فایل فونت‌ها
                    if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
                        return 'assets/fonts/[name]-[hash][extname]';
                    }
                    // برای سایر asset ها
                    return 'assets/[name]-[hash][extname]';
                }
            },
            treeshake: false
        }
    }
});
