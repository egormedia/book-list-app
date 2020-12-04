import React from 'react';

const Form = (props) => {
    const {
        title,
        setTitle,
        author,
        setAuthor,
        isbn,
        setIsbn,
        currentBookId,
        handleSubmit,
    } = props;

    return(
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" />
            <label>Author</label>
            <input type="text" />
            <label>ISBN#</label>
            <input type="text" />
            <button tabIndex="0" type="submit">{currentBookId !== null ? "Update" : "Add"}</button>
        </form>
    );
};

export default Form;