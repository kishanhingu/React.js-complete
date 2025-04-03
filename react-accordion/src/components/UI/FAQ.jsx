export const FAQ = ({ curElem, onToggle, isActive }) => {
  const { question, answer } = curElem;

  return (
    <li>
      <div className="accordion-grid">
        <p className="accordion-question">{question}</p>
        <button className={isActive ? "active-btn" : ""} onClick={onToggle}>
          {isActive ? "Close" : "Show"}
        </button>
      </div>

      <p>{isActive && answer}</p>
    </li>
  );
};
