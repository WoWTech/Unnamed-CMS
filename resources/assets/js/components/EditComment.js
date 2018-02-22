import React from 'react';

const EditComment = () => {
  return (
    <section className="page-content">
      <header>
        <h2>Edit comment</h2>
      </header>

      <form action="#" method="post">
        <div className="input-group">
          <label htmlFor="content">Content</label>
          <textarea title="content" name="content" required value="Comment content"></textarea>
        </div>

        <div className="input-group">
          <input type="submit" value="Save" className="flex-left" />
        </div>

      </form>
    </section>
  );
};

export default EditComment;