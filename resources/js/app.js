import './bootstrap';
import './vendors/jquery-3.2.1.min.js';

// سپس smooth-scroll را به صورت dynamic import
// import("./vendors/smooth-scroll.min.js")
//     .then(() => {
//         console.log("✅ SmoothScroll loaded successfully");
//     })
//     .catch((error) => {
//         console.error("❌ Failed to load SmoothScroll:", error);
//     });

// استفاده از نسخه npm smooth-scroll
import SmoothScroll from 'smooth-scroll';

// بقیه کتابخانه‌ها
import './vendors/bootstrap.min.js';
import './vendors/imagesloaded.pkgd.min.js';
import './vendors/jquery.sticky-kit.min.js';
import './vendors/grid-blog.min.js';

// کدهای سفارشی شما
import './custom.js';

// راه‌اندازی وقتی DOM آماده است
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ همه کتابخانه‌ها لود شدند');

    // 🔽 🔽 🔽 اینجا قرار می‌گیرد 🔽 🔽 🔽
    const scroll = new SmoothScroll('a[href*="#"]', {
        // سرعت اسکرول (میلی‌ثانیه)
        speed: 800,

        // استفاده از speed به sebagai duration
        speedAsDuration: true,

        // فاصله از بالای صفحه (پیکسل)
        offset: 100,

        // نوع easing
        easing: 'easeInOutCubic',

        // جلوگیری از تغییر URL
        updateURL: false,

        // غیرفعال کردن history
        popstate: false,

        // callback هنگام شروع اسکرول
        before: function(anchor, toggle) {
            console.log('شروع اسکرول به:', anchor);
        },

        // callback پس از اتمام اسکرول
        after: function(anchor, toggle) {
            console.log('اسکرول به اتمام رسید:', anchor);
        }
    });
    // 🔼 🔼 🔼 اینجا قرار می‌گیرد 🔼 🔼 🔼

    console.log('✅ SmoothScroll فعال شد');

    // بررسی سایر کتابخانه‌ها
    if (typeof $ !== 'undefined') {
        console.log('✅ jQuery لود شد');
    }

    if (typeof imagesLoaded !== 'undefined') {
        console.log('✅ imagesLoaded لود شد');
    }
});
