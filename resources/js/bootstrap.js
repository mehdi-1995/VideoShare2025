// resources/js/bootstrap.js
import _ from 'lodash';
import axios from 'axios';

// تنظیم axios به صورت global
window.axios = axios;
window._ = _;

// تنظیم headerهای پیشفرض
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// تنظیم CSRF token
const token = document.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.getAttribute('content');
}
