interface BoundaryViewProps {
  children: React.ReactNode;
}
export default function BoundaryView({ children }: BoundaryViewProps) {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
      }}
    >
      {children}
      <div className="snackbar-container"></div>
    </div>
  );
}
