export default function FontMode() {
  function toggleFontType() {
    const bodyClass = document.body.classList;
    const fontClass = "source";
    bodyClass.toggle(fontClass);
    localStorage.setItem(
      "font",
      bodyClass.contains(fontClass) ? fontClass : ""
    );
  }
  return (
    <button
      onClick={toggleFontType}
      className="text-heading cursor-pointer flex items-center p-3 rounded-full hover:bg-secondary transition-colors shadow-md active:bg-secondary"
    >
      <span className="text-3xl size-6 flex justify-center items-center">
        F
      </span>
    </button>
  );
}
