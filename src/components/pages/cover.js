function coverPage(props, ref) {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default coverPage;
