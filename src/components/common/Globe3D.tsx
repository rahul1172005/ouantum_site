interface Globe3DProps {
  offsetX?: number;
}

const Globe3D = ({ offsetX = 0 }: Globe3DProps) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: 'transparent', borderRadius: '32px' }}>
      <iframe 
        src={`/globe.html?x=${offsetX}`}
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none', 
          position: 'absolute', 
          inset: 0 
        }}
        title="Interactive 3D Globe"
      />
    </div>
  );
};

export default Globe3D;
