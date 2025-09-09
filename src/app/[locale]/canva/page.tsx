import SpiralCanvas from '@/components/p5/SpiralCanvas';

export default function Page() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <div className="card" style={{ width: '400px', height: '500px', position: 'relative', paddingLeft: '50px', background: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <SpiralCanvas height={500} />
        <div style={{ padding: '20px' }}>
          <h2>Card with Spiral</h2>
          <p>Hiệu ứng lò xo được vẽ bằng p5.js</p>
        </div>
      </div>
    </div>
  );
}
