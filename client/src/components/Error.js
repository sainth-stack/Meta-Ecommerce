function Error({ error }) {
  return (
    <div>
      <div class="alert alert-danger" role="alert">
        {error}
      </div>
    </div>
  );
}

export default Error;
