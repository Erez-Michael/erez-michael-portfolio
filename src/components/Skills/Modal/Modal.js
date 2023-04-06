import Game from "../MemoryGame/Game";
import "./Modal.css"

export default function Modal({
  headerTitle,
  bodyContent,
  handleModal,
  isActive,
}) {
  return (
    <>
        <div className={`modal ${isActive ? "show" : ""} `}>
      <div class="background-container">
        <div class="stars"></div>
        <div class="twinkling"></div>
          <div className="modal-section">
            <div className="modal-header">
              <h3 className="modal-header__title">{headerTitle}</h3>
              <button className="close" onClick={() => handleModal(false)}>X</button>
            </div>
            <Game />
          </div>
        </div>
      </div>
    </>
  );
}
