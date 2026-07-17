# Performance Optimization Audit - Hero Section

## Next.js Image Optimization
- The first slide image (`/images/slide_salad_bowl.png`) uses `priority={true}` and `loading="eager"` so it loads instantly with zero Layout Shift (CLS) on initial load.
- Subsequent slide images use `loading="lazy"` and only load when navigated to.
- Modern format compression and adaptive `sizes` specifications (`(max-width: 768px) 100vw, 35vw`) load smaller versions for mobile devices.

## Performance Metrics
- First Paint (FP): 584.00ms
- First Contentful Paint (FCP): 584.00ms
- First image loaded with loading mode: "lazy"
