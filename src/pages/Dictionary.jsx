
function Dictionary() {
  return (
    <div className="page">
      <h1>Startup Dictionary</h1>
      <p>Learn important startup terms and concepts.</p>

      <div className="dictionary-grid">
        <div className="dictionary-card">
          <h3>MVP</h3>
          <p>Minimum Viable Product — a basic version of your product used to test an idea.</p>
        </div>

        <div className="dictionary-card">
          <h3>Pitch</h3>
          <p>A short presentation used to explain your startup idea to investors or customers.</p>
        </div>

        <div className="dictionary-card">
          <h3>Bootstrapping</h3>
          <p>Building a startup using your own money instead of external funding.</p>
        </div>

        <div className="dictionary-card">
          <h3>Startup</h3>
          <p>A company designed to solve a problem with an innovative and scalable solution.</p>
        </div>
      </div>
    </div>
  );
}

export default Dictionary;

