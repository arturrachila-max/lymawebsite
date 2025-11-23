# WireframeEarth Component

A high-detail 3D wireframe Earth component built with React Three Fiber for enterprise/security-themed websites.

## Features

- ✅ Ultra-high detail wireframe sphere (128x128 segments)
- ✅ Clean, crisp wireframe lines (no dots)
- ✅ Soft blue/white color scheme
- ✅ Subtle glow/atmosphere effect
- ✅ Smooth automatic rotation
- ✅ Mouse parallax interaction
- ✅ Optional continental outlines
- ✅ Fully transparent background
- ✅ Enterprise-grade visual quality

## Installation

```bash
npm install @react-three/fiber @react-three/drei three
npm install --save-dev @types/three
```

## Basic Usage

```tsx
import { Canvas } from '@react-three/fiber';
import { WireframeEarth } from './WireframeEarth';

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <WireframeEarth />
    </Canvas>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `rotationSpeed` | `number` | `0.1` | Speed of automatic Y-axis rotation |
| `interactive` | `boolean` | `true` | Enable mouse parallax interaction |
| `showContinents` | `boolean` | `false` | Show continental outline layer |
| `atmosphere` | `boolean` | `true` | Show glow/atmosphere sphere |
| `lineColor` | `string` | `"#66ccff"` | Color of wireframe lines |

## Advanced Usage

### Custom Rotation Speed

```tsx
<WireframeEarth rotationSpeed={0.2} />
```

### Disable Interaction

```tsx
<WireframeEarth interactive={false} />
```

### Show Continents

```tsx
<WireframeEarth showContinents={true} />
```

### Custom Color

```tsx
<WireframeEarth lineColor="#00ffff" />
```

### Full Configuration

```tsx
<WireframeEarth
  rotationSpeed={0.15}
  interactive={true}
  showContinents={false}
  atmosphere={true}
  lineColor="#66ccff"
/>
```

## Performance Optimization

### Increase Detail (Higher Performance Cost)

In `WireframeEarth.tsx`, modify the sphere geometry:

```tsx
// Current: 128 segments (high detail)
new SphereGeometry(1, 128, 128)

// Higher detail: 256 segments
new SphereGeometry(1, 256, 256)

// Maximum detail: 512 segments (very high performance cost)
new SphereGeometry(1, 512, 512)
```

### Decrease Detail (Better Performance)

```tsx
// Lower detail: 64 segments
new SphereGeometry(1, 64, 64)

// Medium detail: 96 segments
new SphereGeometry(1, 96, 96)
```

## Adding Real GeoJSON Continents

To add real continental outlines:

1. Install geoJSON loader:
```bash
npm install three-geojson-geometry
```

2. Load geoJSON data and convert to lines in `ContinentsLayer` component

3. Replace the simplified continent geometry with real data

## Styling

The component uses a fully transparent background. Style the container:

```css
.earth-container {
  width: 100%;
  height: 500px;
  background: transparent;
  position: relative;
}
```

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (may need WebGL flags)
- Mobile: Supported (may need performance tuning)

## Troubleshooting

### Lines appear too thick
- Adjust `linewidth` in `LineBasicMaterial` (note: only works on Windows)
- Use `lineWidth` for WebGL compatibility

### Performance issues
- Reduce sphere segments (128 → 64)
- Disable continents layer
- Disable atmosphere glow
- Reduce rotation speed

### No glow effect
- Ensure `atmosphere={true}`
- Check that `AdditiveBlending` is supported
- Verify opacity values

## License

MIT

