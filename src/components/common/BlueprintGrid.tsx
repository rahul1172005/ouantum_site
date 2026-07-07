const BlueprintGrid = () => {
  return (
    <>
      <div className="blueprint-bg" />

      <div className="blueprint-diagonals" />

      <style >{`
        .diagonal-line {
          position: fixed;
          background: white;
          pointer-events: none;
          z-index: -1;
        }

        .blueprint-diagonals {
          position: fixed;
          inset: 0;
          background-image: 
            linear-gradient(45deg, var(--line-color) 0.5px, transparent 0.5px),
            linear-gradient(-45deg, var(--line-color) 0.5px, transparent 0.5px);
          background-size: 400px 400px;
          opacity: 0.3;
          pointer-events: none;
          z-index: -1;
        }
      `}</style>
    </>
  );
};

export default BlueprintGrid;
