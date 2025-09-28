import './bootstrap';          // ۱. ابتدا تنظیمات پایه
import './vendors/jquery-3.2.1.min.js';      // ۲. کتابخانه اصلی
import './vendors/bootstrap.min.js';         // ۳. فریمورک
import './vendors/imagesloaded.pkgd.min.js'; // ۴. ابزارهای کمکی
import './vendors/jquery.sticky-kit.min.js'; // ۵. پلاگین‌ها
import './vendors/smooth-scroll.min.js';     // ۶. پلاگین‌ها
import './components/grid-blog.min.js';      // ۷. کامپوننت‌های سفارشی
import './custom.js';                        // ۸. کدهای شما

// 🎬 وقتی همه چیز آماده شد:
// اطمینان از لود شدن jQuery
document.addEventListener('DOMContentLoaded', function() {
    console.log('همه کتابخانه‌ها لود شدند');
    // بررسی لود شدن jQuery
    if (typeof $ !== 'undefined') {
        console.log('✅ jQuery لود شد');
    }

    // بررسی سایر کتابخانه‌ها
    if (typeof imagesLoaded !== 'undefined') {
        console.log('✅ imagesLoaded لود شد');
    }
});
