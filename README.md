# Perfection — Front (React + Vite)

واجهة موقع وكالة **برفكشن** للتسويق بالمؤثرين — عربية RTL بأسلوب
Editorial Index مستوحى من مواقع حاصلة على جوائز عالمية.

## التشغيل

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # إنتاج → dist/
```

## نظام التصميم

| العنصر | القيمة |
|---|---|
| البنفسجي الأساسي | `#7812C4` (Rich Violet) |
| الكحلي الغامق | `#1E0D64` / `#12083F` (خلفيات داكنة) |
| الأزرق | `#4F7FFF` / `#0042FC` |
| السماوي | `#00BBCE` (Vibrant Cyan) |
| التدرج الرئيسي | بنفسجي → أزرق → سماوي بزاوية 45° |
| خط اللاتيني/العناوين | Clash Display (Fontshare) |
| خط العربية | IBM Plex Sans Arabic (بديل Proxima Nova Arabic) |

## الأنماط المستخدمة (من بحث مواقع Awwwards)

- تايبوغرافيا ضخمة ملسقة بأسفل الهيرو (bottom-anchored display)
- Micro-labels بحروف كبيرة متباعدة في الحواف
- خدمات وأعمال كصفوف index بفواصل 1px (مش كروت)
- Ticker strips بفواصل ✦
- كرات صلصالية (3D clay) بتدرجات الهوية + glassmorphism
- Grain overlay + custom cursor
- Line-mask reveals للعناوين

## البنية

```
src/
  components/   مكوّنات الأقسام (Hero, Services, CaseStudies, ...)
  hooks/        useReveal (scroll reveals) / useCounter (عدادات)
  styles/       tokens.css (متغيرات) / global.css / site.css
```

## مراجع البحث

انظر `../research/design-references.md` — تحليل 6 مواقع مرجعية
(landonorris.com, basement.studio, exoape.com, igloo.inc, phantom.land,
ubiquitousinfluence.com) مع لقطات في `../research/screenshots/`.
