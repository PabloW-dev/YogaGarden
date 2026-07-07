

export default function Camera({ camera, children }) {
  return (
    <div
        className="camera"
        style={{
            "--camera-y": `${camera.y}px`,
            "--camera-x": `${camera.x}px`,
            "--camera-zoom": camera.zoom
        }}
    >
      {children}
    </div>
  );
}
