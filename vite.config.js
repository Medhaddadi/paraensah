import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/sass/app.scss",
                "resources/js/app.js",
                "resources/admin/css/dashboard.css",
                "resources/admin/vendor/bootstrap/css/bootstrap.min.css",
                "resources/admin/vendor/bootstrap-icons/bootstrap-icons.css",
                "resources/admin/vendor/boxicons/css/boxicons.min.css",
                "resources/admin/vendor/quill/quill.snow.css",
                "resources/admin/vendor/quill/quill.bubble.css",
                "resources/admin/vendor/remixicon/remixicon.css",
                "resources/admin/vendor/simple-datatables/style.css",
                "resources/admin/css/style.css",
                "resources/admin/vendor/apexcharts/apexcharts.min.js",
                "resources/admin/vendor/bootstrap/js/bootstrap.bundle.min.js",
                "resources/admin/vendor/chart.js/chart.min.js",
                "resources/admin/vendor/echarts/echarts.min.js",
                "resources/admin/vendor/quill/quill.min.js",
                "resources/admin/vendor/simple-datatables/simple-datatables.js",
                "resources/admin/vendor/tinymce/tinymce.min.js",
                "resources/admin/vendor/php-email-form/validate.js",
                "resources/admin/js/main.js",
            ],
            refresh: true,
        }),
    ],
});
