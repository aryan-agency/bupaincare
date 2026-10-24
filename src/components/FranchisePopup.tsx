import { useEffect, useRef, useState } from "react";
import poster from "@/assets/bu-pop-up.jpeg";
import "./FranchisePopup.css";

export default function FranchisePopup() {
  const dialog = useRef<HTMLDialogElement>(null);
  const dismissTimer = useRef<ReturnType<typeof setTimeout>>();
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    // Include the exit transition in the four-second lifetime.
    const fadeTimer = setTimeout(() => setClosing(true), 3820);
    const closeTimer = setTimeout(() => setVisible(false), 4000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
      clearTimeout(dismissTimer.current);
      element?.close();
    };
  }, []);

  function dismiss() {
    if (closing) return;
    setClosing(true);
    dismissTimer.current = setTimeout(() => setVisible(false), 180);
  }

  if (!visible) return null;

  return (
    <dialog
      ref={dialog}
      className={`franchise-popup${closing ? " franchise-popup--closing" : ""}`}
      aria-label="BU PainCare Clinic franchise promotion"
      onCancel={(event) => {
        event.preventDefault();
        dismiss();
      }}
    >
      <img
        src={poster}
        alt="BU PainCare Clinic franchise opportunity"
        width="1254"
        height="1254"
        loading="eager"
        decoding="async"
        onError={dismiss}
      />
      <button type="button" aria-label="Close franchise promotion" onClick={dismiss}>
        ×
      </button>
    </dialog>
  );
}
