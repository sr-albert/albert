export default function WorkView() {
  const onClick = () => {
    // open "https://technerf.dev" on new tab
    // window.open("https://technerf.dev", "_blank");
  };
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        top: "10%",
        left: "5%",
        width: "fit-content",
      }}
    >
      For works
    </button>
  );
}
