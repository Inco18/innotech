import styles from "./Spinner.module.css";

const Spinner = ({ scale }: { scale: number }) => {
  return (
    <div className={`${styles["lds-roller"]} scale-[${scale}]`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
