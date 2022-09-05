export default function FormWrapper({ children }) {
  return (
    <>
      <div className="form-container d-flex justify-between flex-dir-column border-radius-10">
        {children}
      </div>
    </>
  );
}
