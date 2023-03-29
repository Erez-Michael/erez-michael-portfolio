import "./Modal.css"

export default function Modal({
  headerTitle,
  bodyContent,
  handleModal,
  isActive,
}) {
  return (
    <div className={`modal ${isActive ? "show" : ""} `}>
      <div className="modal-section" onBlur={() => alert(1)}>
        <div className="modal-header">
          <h3 className="modal-header__title">{headerTitle}</h3>
          <button onClick={() => handleModal(false)}>X</button>
        </div>
      <div class="background-container">
<div class="stars"></div>
<div class="twinkling"></div>
          <div class="clouds"></div>
        <div className="modal-body">
         {/* INSERT GAME */}
        </div>
        </div>
      </div>
    </div>
  );
}
